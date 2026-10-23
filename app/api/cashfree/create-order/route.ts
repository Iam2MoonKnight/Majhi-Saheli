import { randomBytes } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

import { createCashfreeOrder, fetchCashfreeOrder } from '@/lib/cashfree';
import { mapLegacyDonationStatus } from '@/lib/payment-status';
import { getSupabaseServiceClient } from '@/lib/supabase-admin';
import type { CashfreeCreateOrderRequestBody, CashfreeCreateOrderResponse } from '@/lib/types';

export const runtime = 'nodejs';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const normalizeSiteUrl = (value: string) => value.replace(/\/+$/, '');

const generateOrderId = () => `MSCT-${Date.now()}-${randomBytes(4).toString('hex').toUpperCase()}`;

const sanitizeIndianPhone = (phone: string): string => {
  const digits = phone.replace(/\D/g, '');
  return digits.length > 10 ? digits.slice(-10) : digits;
};

const isValidAmount = (amount: unknown): amount is number =>
  typeof amount === 'number' && Number.isFinite(amount) && amount > 0;

const isValidEmail = (email: unknown): email is string => typeof email === 'string' && EMAIL_REGEX.test(email.trim());

const isValidDonationId = (donationId: unknown): donationId is string =>
  typeof donationId === 'string' && UUID_REGEX.test(donationId);

type DonationOrderRow = {
  id: string;
  amount: number;
  currency: string;
  email: string;
  payment_status: string | null;
  cashfree_order_id: string | null;
  cashfree_payment_session_id: string | null;
};

type DonationSelectQuery = {
  select(columns: string): DonationSelectQuery;
  eq(column: string, value: unknown): DonationSelectQuery;
  single(): Promise<{ data: DonationOrderRow | null; error: { message: string } | null }>;
};

type DonationUpdateQuery = {
  update(values: Record<string, unknown>): DonationUpdateQuery;
  eq(column: string, value: unknown): Promise<{ error: { message: string } | null }>;
};

type SupabaseDonationClient = {
  from(table: 'donations'): DonationSelectQuery & DonationUpdateQuery;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<CashfreeCreateOrderRequestBody>;

    if (!isValidDonationId(body.donationId)) {
      return NextResponse.json({ error: 'Invalid donation ID.' }, { status: 400 });
    }

    const cleanPhone = body.phone ? sanitizeIndianPhone(body.phone) : '';

    if (!isValidAmount(body.amount) || body.currency !== 'INR' || !isValidEmail(body.email) || cleanPhone.length !== 10) {
      return NextResponse.json({ error: 'Invalid request payload. A valid 10-digit phone number is required.' }, { status: 400 });
    }

    const validatedBody: CashfreeCreateOrderRequestBody = {
      donationId: body.donationId,
      amount: body.amount,
      currency: 'INR',
      email: body.email.trim(),
      phone: cleanPhone,
      name: body.name?.trim(),
    };

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined) ||
      (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ||
      req.headers.get('origin') ||
      req.nextUrl.origin;

    // Cashfree production API requires https:// — replace http://localhost with the
    // configured app URL so local dev still works with production Cashfree keys.
    const resolvedSiteUrl = (() => {
      const base = normalizeSiteUrl(siteUrl);
      if (base.startsWith('http://') && process.env.NEXT_PUBLIC_APP_URL) {
        return normalizeSiteUrl(process.env.NEXT_PUBLIC_APP_URL);
      }
      return base;
    })();

    const supabase = getSupabaseServiceClient() as unknown as SupabaseDonationClient;

    const { data: donation, error: donationError } = await supabase
      .from('donations')
      .select('id, amount, currency, email, payment_status, cashfree_order_id, cashfree_payment_session_id')
      .eq('id', validatedBody.donationId)
      .single();

    if (donationError || !donation) {
      console.error('[Cashfree create-order] Donation lookup failed:', donationError?.message);
      return NextResponse.json({ error: 'Donation record not found.' }, { status: 404 });
    }

    if ((donation.currency || 'INR') !== 'INR') {
      return NextResponse.json({ error: 'Only INR donations are supported for this checkout.' }, { status: 400 });
    }

    if (Math.abs(Number(donation.amount || 0) - validatedBody.amount) > 0.01) {
      return NextResponse.json({ error: 'Donation amount mismatch.' }, { status: 400 });
    }

    const donationEmail = typeof donation.email === 'string' ? donation.email.trim().toLowerCase() : '';
    if (donationEmail && donationEmail !== validatedBody.email.toLowerCase()) {
      return NextResponse.json({ error: 'Donation email mismatch.' }, { status: 400 });
    }

    if (donation.payment_status && donation.payment_status !== 'pending') {
      return NextResponse.json({ error: 'Donation is already in a terminal payment state.' }, { status: 409 });
    }

    // Reuse existing session only if still ACTIVE in Cashfree
    if (donation.cashfree_order_id && donation.cashfree_payment_session_id) {
      try {
        const existingOrder = await fetchCashfreeOrder(donation.cashfree_order_id);
        if (existingOrder?.order_status === 'ACTIVE') {
          const existingResponse: CashfreeCreateOrderResponse = {
            donationId: validatedBody.donationId,
            cashfreeOrderId: donation.cashfree_order_id,
            paymentSessionId: donation.cashfree_payment_session_id,
            orderAmount: validatedBody.amount,
            orderCurrency: 'INR',
          };
          return NextResponse.json(existingResponse);
        }
      } catch (err) {
        console.warn('[Cashfree create-order] Existing order expired or invalid, creating a new one:', err);
      }
    }

    const cashfreeOrderId = generateOrderId();
    const returnUrl = `${resolvedSiteUrl}/payment-status?donation_id=${encodeURIComponent(validatedBody.donationId)}&order_id=${encodeURIComponent(cashfreeOrderId)}`;
    const notifyUrl = `${resolvedSiteUrl}/api/cashfree/webhook`;

    const cashfreeOrder = await createCashfreeOrder(
      {
        order_id: cashfreeOrderId,
        order_amount: validatedBody.amount,
        order_currency: 'INR',
        customer_details: {
          customer_id: validatedBody.donationId,
          customer_email: validatedBody.email,
          customer_phone: validatedBody.phone,
          customer_name: validatedBody.name || undefined,
        },
        order_meta: {
          return_url: returnUrl,
          notify_url: notifyUrl,
        },
        order_note: `Donation ${validatedBody.donationId}`,
        order_tags: {
          donation_id: validatedBody.donationId,
          source: 'majhi-saheli-web',
        },
      },
      validatedBody.donationId
    );

    if (!cashfreeOrder.order_id || !cashfreeOrder.payment_session_id) {
      console.error('[Cashfree create-order] Failed to initialize checkout session, response:', cashfreeOrder);
      return NextResponse.json({ error: 'Failed to initialize checkout session.' }, { status: 502 });
    }

    const { error: updateError } = await supabase
      .from('donations')
      .update({
        cashfree_order_id: cashfreeOrder.order_id,
        cashfree_payment_session_id: cashfreeOrder.payment_session_id,
        payment_gateway: 'cashfree',
        payment_status: 'pending',
        status: mapLegacyDonationStatus('pending'),
        phone: validatedBody.phone,
        gateway_response: cashfreeOrder,
        updated_at: new Date().toISOString(),
      })
      .eq('id', validatedBody.donationId);

    if (updateError) {
      console.error('[Cashfree create-order] Failed to persist Cashfree order metadata:', updateError.message);
      return NextResponse.json({ error: 'Failed to persist Cashfree order metadata.' }, { status: 500 });
    }

    const responsePayload: CashfreeCreateOrderResponse = {
      donationId: validatedBody.donationId,
      cashfreeOrderId: cashfreeOrder.order_id,
      paymentSessionId: cashfreeOrder.payment_session_id,
      orderAmount: Number(cashfreeOrder.order_amount || validatedBody.amount),
      orderCurrency: (cashfreeOrder.order_currency as 'INR') || 'INR',
    };

    return NextResponse.json(responsePayload);
  } catch (err: unknown) {
    console.error('[Cashfree create-order error]:', err);
    const message = err instanceof Error ? err.message : 'Unable to create payment order.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
