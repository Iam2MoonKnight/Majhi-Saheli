# Payment Integration Debug Log — 2026-10-23

## Overview
Full debug session covering Supabase DNS failure, Cashfree 401, Supabase RLS blocking donations,
and Cashfree domain whitelisting. Took ~20 steps to fully resolve.

---

## Issue 1: Supabase DNS Failure (ERR_NAME_NOT_RESOLVED)

### Symptom
Browser console flooded with hundreds of:
```
Failed to load resource: net::ERR_NAME_NOT_RESOLVED
ffbfppsdevxxmxfnphvd.supabase.co/auth/v1/token
ffbfppsdevxxmxfnphvd.supabase.co/rest/v1/donations
```
Auth refresh loop, fallback content on homepage, everything broken.

### Root Cause
The old Supabase project `ffbfppsdevxxmxfnphvd` was deleted/expired.
DNS lookup returned `Non-existent domain`. Internet and Supabase base domain were fine —
the specific project no longer existed.

### How We Found It
```
nslookup ffbfppsdevxxmxfnphvd.supabase.co  → Non-existent domain
nslookup supabase.co                        → 76.76.21.21 ✅
nslookup supabase.com                       → 216.150.1.193 ✅
```

### Fix
- User created a new Supabase project
- Updated `.env.local` with new project URL: `myjpeepxbgeienykwrpc.supabase.co`
- New project resolved: `172.64.149.246`, `104.18.38.10` ✅

### Defensive Code Added (`lib/supabase.ts`)
- Circuit breaker: after 3 DNS failures, stops all Supabase calls for 30s
- DNS error logged once per session instead of hundreds of times
- `getSafeSession()` skips auth silently when circuit is open

---

## Issue 2: Cashfree 401 Unauthorized on PGCreateOrder

### Symptom
```
[Cashfree create-order error]: Error [AxiosError]: Request failed with status code 401
```

### Root Cause (Part A) — Typo in .env.local
```
NEXT_PUBLIC_CASHFREE_ENV=producion   ← missing the 't'
```
`resolveCashfreeEnvironment()` checks `=== 'production'` — typo caused it to resolve
to SANDBOX while secret key was `cfsk_ma_prod_...` (production). Mismatch = 401.

### Root Cause (Part B) — Wrong API Version
Cashfree SDK v6.0.6 defaults to API version `2026-01-01` but code was overriding with
`2023-08-01`. The older version string caused authentication to fail against the
production endpoint.

### How We Found It
- Direct curl to `api.cashfree.com/pg/orders` with same credentials → HTTP 200 ✅
- Confirmed credentials were valid — issue was in SDK usage
- Inspected `node_modules/cashfree-pg/dist/api.js` — found default `XApiVersion = "2026-01-01"`
- Added diagnostic logs to `lib/cashfree.ts` to print env/key/mode at runtime

### Fixes Applied
1. Fixed typo: `producion` → `production` in `.env.local`
2. Changed `CASHFREE_API_VERSION` from `'2023-08-01'` to `'2026-01-01'` in `lib/cashfree.ts`
3. Removed singleton client pattern — now creates fresh client per request so env changes take effect
4. Added mismatch warning log if key prefix doesn't match resolved environment

---

## Issue 3: Supabase "No API key found in request" on Donation Insert

### Symptom
```
{"message":"No API key found in request","hint":"No `apikey` request header or url param was found."}
```
Donation form showed "An error occurred" immediately on submit.

### Root Cause — Windows CRLF in .env.local
Every value in `.env.local` had a hidden `\r` (carriage return) at the end.
```
Last byte of NEXT_PUBLIC_SUPABASE_ANON_KEY: 0x0d  ← \r
```
Supabase JS client was sending the corrupted key as the `apikey` header.
Supabase received a malformed JWT and rejected every request with 401.

### How We Found It
```powershell
$bytes = [System.Text.Encoding]::UTF8.GetBytes($val)
Write-Host "Last byte hex: $([Convert]::ToString($bytes[-1], 16))"
# Output: d  ← 0x0d = carriage return
```

### Fix
Stripped all `\r` from `.env.local` using PowerShell:
```powershell
$raw = Get-Content .env.local -Raw
$clean = $raw -replace "`r`n", "`n" -replace "`r", "`n"
[System.IO.File]::WriteAllText((Resolve-Path ".env.local").Path, $clean, [System.Text.Encoding]::UTF8)
```
Verified all keys clean — last byte changed from `0x0d` to correct character.

---

## Issue 4: Supabase RLS Blocking Donation Insert (42501)

### Symptom
Even after CRLF fix, donation insert failed:
```
HTTP 401: {"code":"42501","message":"new row violates row-level security policy for table \"donations\""}
```

### Root Cause — Supabase `public` Role Doesn't Exist in Newer Postgres
Multiple attempts to fix RLS policies all failed:
- `WITH CHECK (true)` policy — still blocked
- `TO anon, authenticated` explicit roles — still blocked
- `GRANT INSERT ON donations TO anon` — still blocked
- `SET ROLE anon; INSERT ...` in SQL Editor — failed with same 42501

Running `CHECK_SCHEMA_EXPOSURE.sql` revealed:
```
Error: role "public" does not exist
```
This Supabase project runs a newer Postgres version where the `public` pseudo-role
doesn't exist as a named role. PostgREST's anon JWT role wasn't mapping to any
policy correctly.

### Fix — Move Donation Insert to Server-Side API Route
Instead of fighting RLS, moved the insert to a new server route that uses
the service role key (which bypasses RLS entirely):

**New file: `app/api/donations/create/route.ts`**
- Accepts donation data via POST
- Uses `SUPABASE_SERVICE_ROLE_KEY` directly via `createClient()`
- Returns created donation row with HTTP 201

**Updated `components/DonationForm.tsx`**
- Now calls `/api/donations/create` instead of `submitDonation()` directly
- Service role insert confirmed working: HTTP 201 ✅

---

## Issue 5: Cashfree "return_url must be https" (400 Bad Request)

### Symptom
```
{"code":"order_meta.return_url_invalid",
 "message":"order_meta.return_url : url should be https. Value received: http://localhost:3000/..."}
```

### Root Cause
Running production Cashfree keys locally. Cashfree production API rejects any
`http://` return URLs — requires HTTPS even for development.

### Fix (`app/api/cashfree/create-order/route.ts`)
Added URL resolver that falls back to `NEXT_PUBLIC_APP_URL` when the detected
origin is `http://localhost`:
```typescript
const resolvedSiteUrl = (() => {
  const base = normalizeSiteUrl(siteUrl);
  if (base.startsWith('http://') && process.env.NEXT_PUBLIC_APP_URL) {
    return normalizeSiteUrl(process.env.NEXT_PUBLIC_APP_URL);
  }
  return base;
})();
```
Return URL and webhook URL now use `resolvedSiteUrl` instead of `baseUrl`.

---

## Issue 6: Cashfree "Broken Link — Domain Not Whitelisted"

### Symptom
Cashfree checkout modal opened but showed:
```
https://majhi-saheli.vercel.app/ is not enabled or approved.
Please whitelist your domain from merchant.cashfree.com > developers.
```

### Root Cause
Cashfree production mode requires explicit domain whitelisting before allowing
payments through the checkout. This is a Cashfree dashboard configuration step,
not a code issue.

### Status: Pending user action
**Fix:** Go to Cashfree Merchant Dashboard → Developers → Whitelisting
Add domain: `https://majhi-saheli.vercel.app`
Reference: https://bit.ly/3Xkt3RJ

---

## Issue 7: Email Confirmation Redirecting to localhost

### Symptom
Signup confirmation emails redirected users to `http://localhost:3000/auth/callback`
instead of the production domain.

### Root Cause
Supabase Dashboard "Site URL" was not configured — defaulted to localhost.
Code was already sending correct `emailRedirectTo` but Supabase Dashboard setting
overrides it.

### Fix (Dashboard — no code change needed)
Go to Supabase Dashboard → Authentication → URL Configuration:
- **Site URL**: `https://majhi-saheli.vercel.app`
- **Redirect URLs**: 
  - `https://majhi-saheli.vercel.app/auth/callback`
  - `https://majhi-saheli.vercel.app/**`
  - `http://localhost:3000/auth/callback`
  - `http://localhost:3000/**`

---

## Final State

| Component | Status |
|---|---|
| Supabase connection | ✅ Working (new project) |
| Circuit breaker for DNS failures | ✅ Implemented |
| Cashfree credentials | ✅ Valid and verified |
| Cashfree API version | ✅ Fixed to 2026-01-01 |
| .env.local CRLF corruption | ✅ Fixed |
| Donation insert (server route) | ✅ Working — HTTP 201 |
| Cashfree order creation | ✅ Working |
| Cashfree checkout opens | ✅ Opens successfully |
| Domain whitelisting | ✅ Approved — transaction successful |
| Email confirmation redirect | ⏳ Pending Supabase dashboard config |

## Files Changed
- `lib/supabase.ts` — circuit breaker, resilient fetch, safe session
- `lib/cashfree.ts` — API version fix, no singleton, env mismatch warning, full diagnostic logs
- `app/api/cashfree/create-order/route.ts` — https URL resolver for localhost dev
- `app/api/donations/create/route.ts` — NEW: server-side donation insert using service role
- `components/DonationForm.tsx` — calls `/api/donations/create` instead of direct Supabase insert
- `supabase/RESET_DONATIONS_RLS.sql` — cleaned up RLS policies
- `supabase/FIX_DONATIONS_GRANTS.sql` — granted table permissions to all roles
