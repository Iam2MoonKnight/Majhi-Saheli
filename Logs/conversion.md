# Conversion Log

## Overview
This log records the HTML-reference-to-Next.js conversion work completed for the Mazi Saheli project.

## Objective
- Match the live Next.js site structure, content flow, and visual composition to the static reference pages in `files/`.
- Keep existing app logic (Supabase, auth, dashboard/admin functionality) working.
- Ensure deployment builds pass on Vercel.

## Reference Sources Used
- `files/index.html`
- `files/about.html`
- `files/contact.html`
- `files/donate.html`
- `files/gallery.html`
- `files/styles.css`

## Major Work Completed

### 1) Global Design and Core Shell
- Updated global design tokens and typography system.
- Restyled core layout and shared shell components.
- Updated primary reusable UI components to consistent editorial style.

Key files:
- `app/globals.css`
- `app/layout.tsx`
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `components/HeroSection.tsx`
- `components/ProgramCard.tsx`
- `components/StatCard.tsx`
- `components/TestimonialCard.tsx`

### 2) User-Facing Page Redesign Coverage
- Home, About, Programs, Contact, Donate
- Campaigns list + detail
- Blog list + detail
- Login/Signup + form components
- Impact, Saheli Circle, Dashboard, Profile

Key files include:
- `app/page.tsx`
- `app/about/page.tsx`
- `app/programs/page.tsx`
- `app/contact/page.tsx`
- `app/donate/page.tsx`
- `app/campaigns/page.tsx`
- `app/campaigns/[id]/page.tsx`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/login/page.tsx`
- `app/signup/page.tsx`
- `app/impact/page.tsx`
- `app/saheli-circle/page.tsx`
- `app/dashboard/page.tsx`
- `app/profile/page.tsx`

### 3) Admin UI Alignment
- Restyled admin dashboard and management pages to match the new design language.

Key files:
- `app/admin/page.tsx`
- `app/admin/blogs/page.tsx`
- `app/admin/campaigns/page.tsx`
- `app/admin/hero/page.tsx`

### 4) Structural Parity Pass (HTML Layout Matching)
A deeper conversion pass was done to mirror HTML structure/content blocks more directly:
- Hero composition and homepage section sequencing.
- About page structure: story, mission/vision, focus areas, operations, milestones, impact stats, partners, roadmap.
- Contact page structure: info + form, district presence, map-style reach, FAQs, CTA.
- Donate page structure: impact tiers, process flow, money-at-work, budget breakdown, testimonials, other support options.
- Added gallery route to mirror `files/gallery.html`.

Key files:
- `components/HeroSection.tsx`
- `app/page.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`
- `app/donate/page.tsx`
- `app/gallery/page.tsx` (new)
- `components/Navbar.tsx`

## Build/Deployment Fixes

### Prerender Error Fixes
Resolved Next.js production build errors related to `useSearchParams()` without suspense boundary by moving query reads to client runtime parsing (`window.location.search`) in affected components.

Fixed files:
- `app/auth/callback/page.tsx`
- `components/LoginForm.tsx`
- `components/DonateContent.tsx`

### Supabase Network Error Noise Reduction
- Improved fallback logging for recoverable network/DNS issues (`ENOTFOUND`, `fetch failed`) so app degrades gracefully without noisy hard error logs.

Updated file:
- `lib/supabase-functions.ts`

## Validation Performed
- Repeated file diagnostics checks after edit batches.
- Repeated full production builds (`npm run build`) to verify:
  - compile success
  - type safety
  - static prerender success
  - route generation including `/auth/callback`, `/login`, and `/gallery`

## Git and Push Summary
- Changes were committed and pushed to `main` multiple times during the migration.
- Latest structural parity commit pushed:
  - `79d84c9` — Align Next pages to HTML structure and imagery with gallery route

## Notes
- Existing business logic (Supabase fetches, auth flow, admin operations) was intentionally preserved.
- Some content/images are mapped via equivalent remote sources used in reference HTML.
- `.env.local` values are local-only and not committed.

## Security Reminder
- If any Supabase service role key was exposed during development, rotate it immediately and keep it server-only.
