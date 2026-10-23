-- PostgREST uses the anon role differently than SET ROLE anon in SQL.
-- The policy must target the 'public' pseudo-role OR have no role restriction
-- for unauthenticated API requests to work via PostgREST.

-- Drop the current insert policy
DROP POLICY IF EXISTS "allow_insert_donations" ON donations;

-- Recreate WITHOUT role restriction — this makes it apply to ALL roles
-- including the way PostgREST uses anon
CREATE POLICY "allow_insert_donations"
  ON donations FOR INSERT
  WITH CHECK (true);

-- Verify
SELECT policyname, cmd, roles, with_check
FROM pg_policies
WHERE tablename = 'donations';
