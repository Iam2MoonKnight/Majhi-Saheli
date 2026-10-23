import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, amount, currency, frequency, message, user_id } = body;

    if (!name || !email || !phone || !amount || !currency) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Use service role to bypass RLS — donation creation is server-validated
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false, autoRefreshToken: false } }
    );

    const row = {
      user_id: user_id ?? null,
      name: String(name).trim(),
      email: String(email).trim(),
      phone: String(phone),
      amount: Number(amount),
      currency: String(currency),
      frequency: String(frequency ?? 'one_time'),
      message: message ? String(message) : null,
      payment_status: 'pending',
      payment_gateway: 'cashfree',
      status: 'pending',
    };

    const { data, error } = await supabase.from('donations').insert([row]).select().single();

    if (error) {
      console.error('[Donations API] Insert error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    console.error('[Donations API] Unexpected error:', err);
    return NextResponse.json({ error: 'Failed to create donation' }, { status: 500 });
  }
}
