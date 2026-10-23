-- Fix donations RLS to allow public inserts (needed for guest donations)
-- Run this in Supabase SQL Editor

-- Drop any conflicting insert policies first
DROP POLICY IF EXISTS "Anyone can insert donations" ON donations;
DROP POLICY IF EXISTS "Public can insert donations" ON donations;
DROP POLICY IF EXISTS "Anon can insert donations" ON donations;

-- Recreate a clean policy that allows anyone (including unauthenticated) to insert
CREATE POLICY "Anyone can insert donations"
  ON donations FOR INSERT
  WITH CHECK (true);

-- Also allow the service role to update (needed for Cashfree webhook)
DROP POLICY IF EXISTS "Service role can update donations" ON donations;
CREATE POLICY "Service role can update donations"
  ON donations FOR UPDATE
  USING (true)
  WITH CHECK (true);

-- Verify policies are in place
SELECT policyname, cmd, qual, with_check 
FROM pg_policies 
WHERE tablename = 'donations'
ORDER BY cmd, policyname;
