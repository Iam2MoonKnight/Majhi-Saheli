-- Check triggers on donations
SELECT trigger_name, event_manipulation, action_statement
FROM information_schema.triggers
WHERE event_object_table = 'donations';

-- Check foreign key constraints
SELECT
  tc.constraint_name,
  kcu.column_name,
  ccu.table_name AS foreign_table_name,
  ccu.column_name AS foreign_column_name
FROM information_schema.table_constraints AS tc
JOIN information_schema.key_column_usage AS kcu
  ON tc.constraint_name = kcu.constraint_name
JOIN information_schema.constraint_column_usage AS ccu
  ON ccu.constraint_name = tc.constraint_name
WHERE tc.constraint_type = 'FOREIGN KEY' AND tc.table_name = 'donations';

-- Check all check constraints
SELECT conname, pg_get_constraintdef(oid)
FROM pg_constraint
WHERE conrelid = 'donations'::regclass AND contype = 'c';

-- Try a direct insert as superuser to confirm the data itself is valid
INSERT INTO donations (name, email, phone, amount, currency, frequency, payment_status, payment_gateway, status)
VALUES ('Test2', 'test2@test.com', '9999999998', 100, 'INR', 'one_time', 'pending', 'cashfree', 'pending')
RETURNING id, name, amount, status;
