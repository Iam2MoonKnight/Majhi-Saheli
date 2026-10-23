-- Check exact donations table structure and constraints
SELECT 
  column_name,
  data_type,
  is_nullable,
  column_default
FROM information_schema.columns
WHERE table_name = 'donations' AND table_schema = 'public'
ORDER BY ordinal_position;

-- Check constraints
SELECT conname, contype, pg_get_constraintdef(oid) 
FROM pg_constraint 
WHERE conrelid = 'donations'::regclass;

-- Check existing RLS policies
SELECT policyname, cmd, roles, qual, with_check
FROM pg_policies
WHERE tablename = 'donations';
