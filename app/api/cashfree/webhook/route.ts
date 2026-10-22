import { NextRequest, NextResponse } from 'next/server';

import { fetchCashfreeOrder, verifyCashfreeWebhookSignature } from '@/lib/cashfree';
import { mapCashfreeOrderStatus, mapLegacyDonationStatus, mapWebhookTypeToStatus } from '@/lib/payment-status';
import { getSupabaseServiceClient } from '@/lib/supabase-admin';

export const runtime = 'nodejs';

type CashfreeWebhookPayload = {
  type?: string;
  data?: {
    order?: {
      order_id?: string;
      order_tags?: Record<string, string>;
    };
  };
};

type DonationWebhookRow = {
  id: string;
  payment_status: string | null;
  cashfree_order_id: string | null;
};

type DonationSelectQuery = {
  select(columns: string): DonationSelectQuery;
  eq(column: string, value: unknown): DonationSelectQuery;
  limit(count: number): Promise<{ data: DonationWebhookRow[] | null }>;
};

type DonationUpdateQuery = {
  update(values: Record<string, unknown>): DonationUpdateQuery;
  eq(column: string, value: unknown): DonationUpdateQuery;
};

type SupabaseDonationClient = {
  from(table: 'donations'): DonationSelectQuery & DonationUpdateQuery;
};

const getHeader = (req: NextRequest, key: string) => req.headers.get(key) || req.headers.get(key.toLowerCase());

export async function POST(req: NextRequest) {
  try {
    const signature = getHeader(req, 'x-webhook-signature');
    const timestamp = getHeader(req, 'x-webhook-timestamp');

    if (!signature || !timestamp) {
      return NextResponse.json({ error: 'Missing webhook signature headers.' }, { status: 401 });
    }

    const rawBody = await req.text();
    const event = verifyCashfreeWebhookSignature(signature, rawBody, timestamp);

    const payload = event.object as CashfreeWebhookPayload;
    const webhookType = payload.type || event.type;
    const orderId = payload.data?.order?.order_id;
    const donationIdFromTag = payload.data?.order?.order_tags?.donation_id;

    if (!orderId) {
      return NextResponse.json({ received: true, ignored: 'No order id in webhook.' });
    }

    const supabase = getSupabaseServiceClient() as unknown as SupabaseDonationClient;

    const donationQuery = supabase
      .from('donations')
      .select('id, payment_status, cashfree_order_id')
      .eq('cashfree_order_id', orderId)
      .limit(1);

    let { data: donationRows } = await donationQuery;

    if ((!donationRows || donationRows.length === 0) && donationIdFromTag) {
      const fallback = await supabase
        .from('donations')
        .select('id, payment_status, cashfree_order_id')
        .eq('id', donationIdFromTag)
        .limit(1);
      donationRows = fallback.data || [];
    }

    const donation = donationRows?.[0];
    if (!donation) {
      return NextResponse.json({ received: true, ignored: 'No matching donation found.' });
    }

    if (donation.cashfree_order_id && donation.cashfree_order_id !== orderId) {
      return NextResponse.json({ received: true, ignored: 'Donation/order mismatch.' });
    }

    if (donation.payment_status && donation.payment_status !== 'pending') {
      return NextResponse.json({ received: true, idempotent: true });
    }

    let mappedStatus = mapWebhookTypeToStatus(webhookType);

    if (mappedStatus === 'pending') {
      const fetchedOrder = await fetchCashfreeOrder(orderId);
      mappedStatus = mapCashfreeOrderStatus(fetchedOrder.order_status);
    }

    if (mappedStatus === 'pending') {
      return NextResponse.json({ received: true, pending: true });
    }

    const latestOrder = await fetchCashfreeOrder(orderId);

    const updatePayload: Record<string, unknown> = {
      payment_gateway: 'cashfree',
      payment_status: mappedStatus,
      status: mapLegacyDonationStatus(mappedStatus),
      cashfree_order_id: orderId,
      cashfree_payment_session_id: latestOrder.payment_session_id || null,
      gateway_response: {
        webhook: payload,
        order: latestOrder,
      },
      updated_at: new Date().toISOString(),
    };

    if (mappedStatus === 'paid') {
      updatePayload.paid_at = new Date().toISOString();
    }

    const { error: updateError } = (await (supabase
      .from('donations')
      .update(updatePayload)
      .eq('id', donation.id)
      .eq('payment_status', donation.payment_status ?? 'pending') as unknown as Promise<{
      error: { message: string } | null;
    }>));

    if (updateError) {
      return NextResponse.json({ error: 'Failed to apply webhook update.' }, { status: 500 });
    }

    return NextResponse.json({ received: true, updated: true });
  } catch {
    return NextResponse.json({ error: 'Invalid webhook signature or payload.' }, { status: 401 });
  }
}
