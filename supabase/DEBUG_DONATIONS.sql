-- Debug: test insert as anon role directly
SET ROLE anon;

INSERT INTO donations (name, email, phone, amount, currency, frequency, payment_status, payment_gateway, status)
VALUES ('Test', 'test@test.com', '9999999999', 100, 'INR', 'one_time', 'pending', 'cashfree', 'pending')
RETURNING id, name, amount;

RESET ROLE;
