# Cashfree Setup Guide (Sandbox + Production)

## 1) Prerequisites

Ensure these environment variables exist in `.env.local` (and deployment env):

- `CASHFREE_APP_ID`
- `CASHFREE_SECRET_KEY`
- `NEXT_PUBLIC_CASHFREE_ENV` (`sandbox` or `production`)
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

Run the SQL migration in Supabase SQL Editor before testing:

- `supabase/CASHFREE_INTEGRATION.sql`

## 2) Official docs

Use official Cashfree docs for all test credentials and latest flows:

- API references: https://docs.cashfree.com/reference/pg-new-apis-endpoint
- Payment gateway overview: https://docs.cashfree.com/docs/payment-gateway
- Web checkout / JS SDK: https://www.cashfree.com/docs/payments/online/element/sdks
- Webhooks: https://docs.cashfree.com/docs/payment-webhooks

## 3) Sandbox flow

1. Set `NEXT_PUBLIC_CASHFREE_ENV=sandbox`.
2. Start app and create a one-time donation from `/donate`.
3. Confirm redirect to `/payment-status` after checkout.
4. Confirm webhook calls reach `/api/cashfree/webhook` for status finalization.

## 4) Redirect behavior

- Checkout return URL points to `/payment-status` with donation/order identifiers.
- `/payment-status` calls `/api/cashfree/verify-order` to show current state.
- Closing/canceling checkout keeps donation in `pending` until confirmed otherwise.

## 5) Local webhook testing with ngrok

1. Start app locally.
2. Expose local server using ngrok (or equivalent HTTPS tunnel).
3. Configure Cashfree webhook endpoint to `<public-ngrok-url>/api/cashfree/webhook`.
4. Trigger sandbox payment events and verify DB state transitions.

## 6) Production checklist

- Switch `NEXT_PUBLIC_CASHFREE_ENV` to `production`.
- Use production Cashfree app credentials.
- Ensure `NEXT_PUBLIC_SITE_URL` is HTTPS and public.
- Confirm webhook URL is HTTPS and reachable.
- Confirm Supabase migration already applied.
- Validate service-role key is server-only and never exposed client-side.
- Run build + typecheck before release.

## 7) Troubleshooting

- **Invalid signature**: verify raw-body handling and `x-webhook-signature` + `x-webhook-timestamp` headers.
- **Order verify mismatch**: ensure donation/order ID pairing was saved during create-order.
- **Pending not resolving**: inspect webhook delivery status and then use verify-order route.
- **Schema errors**: ensure `supabase/CASHFREE_INTEGRATION.sql` has been run.

## 8) Reconciliation notes

- Use `cashfree_order_id` as the primary reconciliation key.
- Compare `payment_status`, `paid_at`, and `gateway_response` between Supabase and Cashfree dashboard.
- Re-run verification (`/api/cashfree/verify-order`) for delayed settlements.
