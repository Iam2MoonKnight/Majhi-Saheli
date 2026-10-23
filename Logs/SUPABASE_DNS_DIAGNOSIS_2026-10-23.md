# Supabase DNS Diagnosis — 2026-10-23

## Symptom
`net::ERR_NAME_NOT_RESOLVED` for `ffbfppsdevxxmxfnphvd.supabase.co`  
Auth refresh loop, donation save failures, storage bucket errors, fallback content on homepage.

## Root Cause Classification

**🅱️ Class B — Supabase project deleted (or never existed under this ref)**

The subdomain `ffbfppsdevxxmxfnphvd.supabase.co` returns `Non-existent domain` at the DNS level.
The base domains `supabase.co` and `supabase.com` resolve correctly — confirming the internet and DNS are healthy.
This is not a local network issue. The Supabase project itself does not exist.

## Evidence

| Test | Command | Result | Interpretation |
|---|---|---|---|
| nslookup project | `nslookup ffbfppsdevxxmxfnphvd.supabase.co` | **Non-existent domain** | Project subdomain does not exist in DNS |
| nslookup supabase.co | `nslookup supabase.co` | `76.76.21.21` ✅ | Supabase base domain resolves — DNS is healthy |
| nslookup supabase.com | `nslookup supabase.com` | `216.150.1.193` ✅ | Internet and DNS are working |
| HTTP to project | `Invoke-WebRequest` | `Cannot resolve remote name` | Project host does not exist |
| `.env.local` URL | Inspection | 40 chars, no trailing space, correct format | Config is correctly formatted |
| Hardcoded refs | `grep ffbfppsdevxxmxfnphvd` | No matches in source | No hardcoded project refs in codebase |

## Fix Required

User must go to [supabase.com/dashboard](https://supabase.com/dashboard) and:

- [ ] Check if project `ffbfppsdevxxmxfnphvd` is listed
- [ ] If listed but paused → click "Restore project", wait 2–5 minutes, restart dev server
- [ ] If deleted → create a new Supabase project
  - Run all SQL migrations: `supabase/SUPABASE_SETUP.sql`, `supabase/ADMIN_FEATURES.sql`, `supabase/CASHFREE_INTEGRATION.sql`
  - Create storage bucket `images` (public) with upload policies
  - Update `.env.local` with new Project URL and anon key from Settings → API
  - Restart dev server

## Defensive Fixes Applied

- **Circuit breaker** added to `lib/supabase.ts` — after 3 consecutive DNS/network failures, stops all Supabase calls for 30 seconds. Logs once, then stays silent until circuit resets.
- **DNS error one-time log** — `ERR_NAME_NOT_RESOLVED` is logged once per session, then suppressed. No more hundreds of console errors.
- **Auth circuit gate** — `getSafeSession()` checks `isSupabaseReachable()` before attempting auth. When circuit is open, returns `null` silently.
- **Synthetic 503 responses** — instead of throwing unhandled errors, DNS failures return a `503` JSON response that the app handles gracefully.

## Verification (complete after user fixes root cause)

- [ ] `nslookup <new-project>.supabase.co` returns an IP
- [ ] `Invoke-WebRequest` to `<project>/rest/v1/` returns HTTP 401
- [ ] Hero content renders from Supabase (not fallback)
- [ ] Donation form saves successfully
- [ ] No `ERR_NAME_NOT_RESOLVED` in browser console
- [ ] Login/signup works
- [ ] Image upload to storage bucket works

## User Actions Outstanding

1. Log in to supabase.com/dashboard
2. Determine if project exists (paused or deleted)
3. Restore or recreate the project
4. If recreated: update `.env.local` with new credentials and re-run all SQL migrations
5. Restart dev server after updating `.env.local`
