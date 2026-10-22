-- Cashfree Payment Gateway integration columns and security updates
-- Run this in Supabase SQL Editor before testing Cashfree flows.

ALTER TABLE donations
  ADD COLUMN IF NOT EXISTS name TEXT,
  ADD COLUMN IF NOT EXISTS email TEXT,
  ADD COLUMN IF NOT EXISTS phone TEXT,
  ADD COLUMN IF NOT EXISTS cashfree_order_id TEXT,
  ADD COLUMN IF NOT EXISTS cashfree_payment_session_id TEXT,
  ADD COLUMN IF NOT EXISTS payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed', 'expired', 'refunded')),
  ADD COLUMN IF NOT EXISTS payment_gateway TEXT,
  ADD COLUMN IF NOT EXISTS gateway_response JSONB,
  ADD COLUMN IF NOT EXISTS paid_at TIMESTAMPTZ;

CREATE INDEX IF NOT EXISTS idx_donations_cashfree_order_id ON donations(cashfree_order_id);

-- Secure Row Level Security on donations table
-- Ensure unauthenticated visitors cannot read guest donations
DROP POLICY IF EXISTS "Users can read their own donations" ON donations;
CREATE POLICY "Users can read their own donations"
  ON donations FOR SELECT
  USING (auth.uid() IS NOT NULL AND auth.uid() = user_id);
