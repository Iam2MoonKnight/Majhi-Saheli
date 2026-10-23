-- Nuclear option: disable RLS, drop ALL policies, re-enable with clean ones

-- Step 1: Disable RLS temporarily
ALTER TABLE donations DISABLE ROW LEVEL SECURITY;

-- Step 2: Drop every single policy on donations
DO $$
DECLARE
  pol RECORD;
BEGIN
  FOR pol IN SELECT policyname FROM pg_policies WHERE tablename = 'donations' LOOP
    EXECUTE format('DROP POLICY IF EXISTS %I ON donations', pol.policyname);
  END LOOP;
END $$;

-- Step 3: Re-enable RLS
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

-- Step 4: Recreate clean policies
CREATE POLICY "allow_insert_donations"
  ON donations FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "allow_select_own_donations"
  ON donations FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "allow_update_donations"
  ON donations FOR UPDATE
  TO anon, authenticated, service_role
  USING (true)
  WITH CHECK (true);

-- Step 5: Verify
SELECT policyname, cmd, roles, with_check
FROM pg_policies
WHERE tablename = 'donations';
