import { NextRequest, NextResponse } from 'next/server';

import { fetchCashfreeOrder } from '@/lib/cashfree';
import { mapCashfreeOrderStatus, mapLegacyDonationStatus } from '@/lib/payment-status';
import { getSupabaseServiceClient } from '@/lib/supabase-admin';
import type { CashfreeVerifyOrderRequestBody, CashfreeVerifyOrderResponse, PaymentStatus } from '@/lib/types';

export const runtime = 'nodejs';

const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const isValidDonationId = (donationId: unknown): donationId is string =>
  typeof donationId === 'string' && UUID_REGEX.test(donationId);

const isValidOrderId = (orderId: unknown): orderId is string =>
  typeof orderId === 'string' && /^MSCT-[A-Za-z0-9-]+$/.test(orderId);

type DonationVerifyRow = {
  id: string;
  payment_status: PaymentStatus | null;
  cashfree_order_id: string | null;
  cashfree_payment_session_id?: string | null;
};

type DonationSelectQuery = {
  select(columns: string): DonationSelectQuery;
  eq(column: string, value: unknown): DonationSelectQuery;
  single(): Promise<{ data: DonationVerifyRow | null; error: { message: string } | null }>;
};

type DonationUpdateQuery = {
  update(values: Record<string, unknown>): DonationUpdateQuery;
  eq(column: string, value: unknown): DonationUpdateQuery;
  is(column: string, value: unknown): DonationUpdateQuery;
  then: Promise<{ error: { message: string } | null }>['then'];
};

type SupabaseDonationClient = {
  from(table: 'donations'): DonationSelectQuery & DonationUpdateQuery;
};

const buildResponse = (
  donationId: string,
  cashfreeOrderId: string,
  paymentStatus: PaymentStatus,
  message: string
): CashfreeVerifyOrderResponse => ({
  donationId,
  cashfreeOrderId,
  paymentStatus,
  message,
});

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<CashfreeVerifyOrderRequestBody>;

    if (!isValidDonationId(body.donationId) || !isValidOrderId(body.cashfreeOrderId)) {
      return NextResponse.json({ error: 'Invalid donation/order identifiers.' }, { status: 400 });
    }

    const validatedBody: CashfreeVerifyOrderRequestBody = {
      donationId: body.donationId,
      cashfreeOrderId: body.cashfreeOrderId,
    };

    const supabase = getSupabaseServiceClient() as unknown as SupabaseDonationClient;

    const { data: donation, error: donationError } = await supabase
      .from('donations')
      .select('id, payment_status, cashfree_order_id, cashfree_payment_session_id')
      .eq('id', validatedBody.donationId)
      .single();

    if (donationError || !donation) {
      console.error('[Cashfree verify-order] Donation lookup failed:', donationError?.message);
      return NextResponse.json({ error: 'Donation not found.' }, { status: 404 });
    }

    if (donation.cashfree_order_id && donation.cashfree_order_id !== validatedBody.cashfreeOrderId) {
      return NextResponse.json({ error: 'Donation/order mismatch.' }, { status: 409 });
    }

    const order = await fetchCashfreeOrder(validatedBody.cashfreeOrderId);

    if (order.order_id && donation.cashfree_order_id && order.order_id !== donation.cashfree_order_id) {
      return NextResponse.json({ error: 'Order verification mismatch.' }, { status: 409 });
    }

    const mappedStatus = mapCashfreeOrderStatus(order.order_status);

    if (donation.payment_status === 'pending' || donation.payment_status === null) {
      const updatePayload: Record<string, unknown> = {
        payment_gateway: 'cashfree',
        payment_status: mappedStatus,
        status: mapLegacyDonationStatus(mappedStatus),
        cashfree_order_id: order.order_id || validatedBody.cashfreeOrderId,
        cashfree_payment_session_id: order.payment_session_id || donation.cashfree_payment_session_id || null,
        gateway_response: order,
        updated_at: new Date().toISOString(),
      };

      if (mappedStatus === 'paid') {
        updatePayload.paid_at = new Date().toISOString();
      }

      let updateQuery = (supabase
        .from('donations')
        .update(updatePayload)
        .eq('id', validatedBody.donationId)) as any;

      if (donation.payment_status) {
        updateQuery = updateQuery.eq('payment_status', donation.payment_status);
      } else {
        updateQuery = updateQuery.is('payment_status', null);
      }

      const { error: updateError } = await updateQuery;

      if (updateError) {
        console.error('[Cashfree verify-order] Failed to update donation payment status:', updateError.message);
        return NextResponse.json({ error: 'Failed to update donation payment status.' }, { status: 500 });
      }

      const message =
        mappedStatus === 'paid'
          ? 'Payment completed successfully.'
          : mappedStatus === 'pending'
            ? 'Payment is still pending confirmation.'
            : 'Payment reached a terminal state.';

      return NextResponse.json(buildResponse(validatedBody.donationId, validatedBody.cashfreeOrderId, mappedStatus, message));
    }

    const alreadyFinalizedMessage =
      donation.payment_status === 'paid'
        ? 'Payment completed successfully.'
        : 'Payment status already confirmed.';

    return NextResponse.json(
      buildResponse(
        validatedBody.donationId,
        validatedBody.cashfreeOrderId,
        donation.payment_status as PaymentStatus,
        alreadyFinalizedMessage
      )
    );
  } catch (err: unknown) {
    console.error('[Cashfree verify-order error]:', err);
    const message = err instanceof Error ? err.message : 'Unable to verify payment status.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
