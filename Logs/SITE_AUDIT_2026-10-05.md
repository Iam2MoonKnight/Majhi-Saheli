# Site Audit — Mazi Saheli (MSCT)

**Date:** 2026-10-05
**Scope:** whole Next.js 16 app — public pages, auth, admin, forms, data layer
**Method:** full ESLint + `tsc`, code-path review, running dev server with a crawl of all 24 routes, production build (0 CSS warnings)

## Summary

All routes return the correct HTTP status at runtime (public pages 200; unknown blog 404). The site
renders cleanly after fixing the Tailwind content-scan issue (`.freebuff` db, see `.gitignore`).
The defects below were found by reading the code, not by route failures.

---

## Findings

### P1 — Broken functionality (Next 16 async `params`) — FIXED

Next 16 requires route `params` to be a `Promise`. Three routes read it synchronously, so they break
at runtime. The Webpack build type-checker confirms it (`params` must be `Promise<any>`). The
sibling `app/campaigns/[id]/page.tsx` already handled this correctly with `await params`.

| # | File | Problem | Fix |
|---|------|---------|-----|
| 1 | `app/blog/[slug]/page.tsx` | `params.slug` is `undefined` → `notFound()`; every blog post 404s | `params: Promise<{ slug: string }>` + `const { slug } = await params` |
| 2 | `app/admin/blogs/edit/[id]/page.tsx` | client component reads `params.id` (a Promise) → `undefined` → "Blog not found" | `const { id } = useParams()` |
| 3 | `app/admin/campaigns/edit/[id]/page.tsx` | same → campaign edit always "Campaign not found" | `const { id } = useParams()` |

### P2 — Security — FIXED

| # | File | Problem | Fix |
|---|------|---------|-----|
| 4 | `app/auth/callback/page.tsx` | `next` query param fed straight into `router.push()` → open redirect | only accept values starting with `/` and not `//`; otherwise `/login` |

### P3 — Correctness — FIXED

| # | File | Problem | Fix |
|---|------|---------|-----|
| 5 | `app/admin/page.tsx` | campaign progress divides by `goal_amount` with no zero-guard → "Infinity% funded" | guard `goal_amount > 0` |
| 6 | `lib/supabase-functions.ts` (`getDonationStats`), `app/dashboard/page.tsx`, `app/admin/page.tsx` | amounts from INR/USD/EUR summed into one meaningless total | compute and render per-currency totals |
| 7 | `components/ContactForm.tsx` | only `setTimeout`; message never sent/stored, yet shows "Thank you" | submit to Supabase `contact_messages` (graceful error if unavailable) |
| 8 | `app/contact/page.tsx` | newsletter "Subscribe" button has no handler | wire to Supabase `newsletter_subscribers` |
| 9 | `app/gallery/page.tsx` | filter pills are inert buttons | make it a client component with working category filter |

### P4 — Content placeholders / quality — OPEN (needs real data)

| # | Location | Issue |
|---|----------|-------|
| 10 | `components/Navbar.tsx`, `components/Footer.tsx`, `app/contact/page.tsx` | placeholder contact details (`+91 0000000000`, `+91 XXXX-XXXX-XX`, social `href="#"`) |
| 11 | all six `app/focus-areas/*/page.tsx` | literal "Detailed Content … will be displayed here" placeholder (needs copy from `Content/*.docx`) |
| 12 | project-wide | ESLint: 49 errors / 45 warnings (setState-in-effect in Navbar, unescaped entities, `any`s, `require()` in dev scripts) — not runtime bugs |
| 13 | `lib/supabase.ts` | missing env only warns in production; `resilientFetch` returns synthetic 503, hiding connectivity errors |

---

## Health check (no action needed)

- No `dangerouslySetInnerHTML`; no service-role key in client code.
- `.env.local` is gitignored; `public/logo.png` present.
- Admin/role guards present on every admin route.
- Supabase fallbacks degrade gracefully; all focus-area links resolve.

## Required setup for the new forms

Run `supabase/CONTACT_AND_NEWSLETTER.sql` in the Supabase SQL editor to enable the contact form and
newsletter storage.
