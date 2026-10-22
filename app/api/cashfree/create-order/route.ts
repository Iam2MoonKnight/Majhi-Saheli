import { randomBytes } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

import { createCashfreeOrder } from '@/lib/cashfree';
import { mapLegacyDonationStatus } from '@/lib/payment-status';
import { getSupabaseServiceClient } from '@/lib/supabase-admin';
import type { CashfreeCreateOrderRequestBody, CashfreeCreateOrderResponse } from '@/lib/types';

export const runtime = 'nodejs';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[0-9]{10,15}$/;
const UUID_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const normalizeSiteUrl = (value: string) => value.replace(/\/+$/, '');

const generateOrderId = () => `MSCT-${Date.now()}-${randomBytes(4).toString('hex').toUpperCase()}`;

const isValidAmount = (amount: unknown) => typeof amount === 'number' && Number.isFinite(amount) && amount > 0;

const isValidEmail = (email: unknown): email is string => typeof email === 'string' && EMAIL_REGEX.test(email.trim());

const isValidPhone = (phone: unknown): phone is string => typeof phone === 'string' && PHONE_REGEX.test(phone.trim());

const isValidDonationId = (donationId: unknown): donationId is string =>
  typeof donationId === 'string' && UUID_REGEX.test(donationId);

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Partial<CashfreeCreateOrderRequestBody>;

    if (!isValidDonationId(body.donationId)) {
      return NextResponse.json({ error: 'Invalid donation ID.' }, { status: 400 });
    }

    if (!isValidAmount(body.amount) || body.currency !== 'INR' || !isValidEmail(body.email) || !isValidPhone(body.phone)) {
      return NextResponse.json({ error: 'Invalid request payload.' }, { status: 400 });
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
    if (!siteUrl) {
      return NextResponse.json({ error: 'NEXT_PUBLIC_SITE_URL is required.' }, { status: 500 });
    }

    const supabase = getSupabaseServiceClient();

    const { data: donation, error: donationError } = await supabase
      .from('donations')
      .select('id, amount, currency, email, payment_status, cashfree_order_id, cashfree_payment_session_id')
      .eq('id', body.donationId)
      .single();

    if (donationError || !donation) {
      return NextResponse.json({ error: 'Donation record not found.' }, { status: 404 });
    }

    if ((donation.currency || 'INR') !== 'INR') {
      return NextResponse.json({ error: 'Only INR donations are supported for this checkout.' }, { status: 400 });
    }

    if (Math.abs(Number(donation.amount || 0) - body.amount) > 0.01) {
      return NextResponse.json({ error: 'Donation amount mismatch.' }, { status: 400 });
    }

    const donationEmail = typeof donation.email === 'string' ? donation.email.trim().toLowerCase() : '';
    if (donationEmail && donationEmail !== body.email.trim().toLowerCase()) {
      return NextResponse.json({ error: 'Donation email mismatch.' }, { status: 400 });
    }

    if (donation.payment_status && donation.payment_status !== 'pending') {
      return NextResponse.json({ error: 'Donation is already in a terminal payment state.' }, { status: 409 });
    }

    if (donation.cashfree_order_id && donation.cashfree_payment_session_id) {
      const existingResponse: CashfreeCreateOrderResponse = {
        donationId: body.donationId,
        cashfreeOrderId: donation.cashfree_order_id,
        paymentSessionId: donation.cashfree_payment_session_id,
        orderAmount: body.amount,
        orderCurrency: 'INR',
      };
      return NextResponse.json(existingResponse);
    }

    const cashfreeOrderId = generateOrderId();
    const baseUrl = normalizeSiteUrl(siteUrl);
    const returnUrl = `${baseUrl}/payment-status?donation_id=${encodeURIComponent(body.donationId)}&order_id=${encodeURIComponent(cashfreeOrderId)}`;
    const notifyUrl = `${baseUrl}/api/cashfree/webhook`;

    const cashfreeOrder = await createCashfreeOrder(
      {
        order_id: cashfreeOrderId,
        order_amount: body.amount,
        order_currency: 'INR',
        customer_details: {
          customer_id: body.donationId,
          customer_email: body.email.trim(),
          customer_phone: body.phone.trim(),
          customer_name: body.name?.trim() || undefined,
        },
        order_meta: {
          return_url: returnUrl,
          notify_url: notifyUrl,
        },
        order_note: `Donation ${body.donationId}`,
        order_tags: {
          donation_id: body.donationId,
          source: 'majhi-saheli-web',
        },
      },
      body.donationId
    );

    if (!cashfreeOrder.order_id || !cashfreeOrder.payment_session_id) {
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
        gateway_response: cashfreeOrder,
        updated_at: new Date().toISOString(),
      })
      .eq('id', body.donationId);

    if (updateError) {
      return NextResponse.json({ error: 'Failed to persist Cashfree order metadata.' }, { status: 500 });
    }

    const responsePayload: CashfreeCreateOrderResponse = {
      donationId: body.donationId,
      cashfreeOrderId: cashfreeOrder.order_id,
      paymentSessionId: cashfreeOrder.payment_session_id,
      orderAmount: Number(cashfreeOrder.order_amount || body.amount),
      orderCurrency: (cashfreeOrder.order_currency as 'INR') || 'INR',
    };

    return NextResponse.json(responsePayload);
  } catch {
    return NextResponse.json({ error: 'Unable to create payment order.' }, { status: 500 });
  }
}
