# Website Content Update — 2026-10-16

## Overview

This update brings public-facing MSCT website content in line with the supplied 2023-24, 2024-25 and 2025-26 annual reports and the requirements in `Prompt.txt`. It adds static project and news content, enriches existing public pages, updates current contact and operating-district details, and reuses available report photography.

The existing navy, coral and white design system and page patterns were retained. The update did not change Supabase functions, authentication, route data-fetching logic, admin behavior, or files under `app/admin/`.

## New routes

| Route | Implementation |
|---|---|
| `/projects` | Static field-story index with responsive cards, year/location labels, report photos where available, and a Donate CTA. |
| `/projects/[slug]` | Static story details generated from the shared project dataset. Each page shows location, problem, intervention, partners and results. |
| `/news` | Static milestone and media-recognition page, with an Upcoming & Ongoing message and a Contact CTA. |

The project dataset contains all 14 stories requested:

- 2023-24: Swaasthya Mela Health Camp; Vision for All Eye Camp; Gyaan ka Sagar Library Setup; Financial Literacy Programme; Menstrual Health Awareness.
- 2024-25: Swachh Maharashtra Abhiyan 2.0 Household Surveys; Dapoli Learning Centre; Rooftop Water Harvesting & Kitchen Gardens; Wheelchair Distribution to Old Age Homes; “Rise for Diversity, Inclusion and Dignity” Workshops.
- 2025-26: IOT-Based Farmer Support; Roots & Rice Eco-Tourism; Digital Classrooms & School Infrastructure; Nutrition Support Distribution.

News milestones include Aakar 2025, the Best Social Work Award, the Visionary Leadership Award for Social Impact, Project Baala Cohort 2025, field assessments by Enable India Foundation and Rise Against Hunger India Foundation, and advancement to the second round with Glenmark Foundation for the Nutrition Awards 2025. Media text cards list India Prime Time, Dainik Bhaskar (Hindi), Free Press Journal, Dainik Lokparivar Samachar and the podcast feature with RJ Dilip Singh.

## Existing pages and shared components

### Pages

- **Homepage (`/`)** — Added the Explore More section after the Roadmap and before the donation section, linking to Projects, News and Impact. Updated selected organization copy, impact figures, district references and partner names.
- **About (`/about`)** — Added the registration/founding story, founder message, report vision and mission, core values, board-member portraits, governance details, current district information and partner groups.
- **Impact (`/impact`)** — Updated report-based metrics and year progression, added geographic reach and methodology content, and included an Annual Reports section with the specified upload filenames.
- **Saheli Circle (`/saheli-circle`)** — Added the report’s What/Why/How framework, tagline, closing quote and field photography.
- **Contact (`/contact`)** — Updated contact details and operating districts; retained the existing form and added Donate, Volunteer and CSR Partnership links. Unverified district-office details and map content remain clearly marked rather than guessed.
- **Focus areas** — Enriched Health, Livelihood, Education, Nutrition, Women Empowerment and Community Development pages with report facts and available field images.

### Shared components

- **Navbar** — Updated the displayed phone number; no new top-level navigation items were added.
- **Footer** — Updated contact/address/district details and added Projects and News links.
- **ContactForm** — Updated stale contact copy without changing the form structure or Supabase behavior.
- **HeroSection** — Updated stale homepage hero statistics and district count.

### Shared data

- Added `lib/organization.ts` to centralize the current operating-district list and partner group names used by the public pages.
- Added `app/projects/project-data.ts` as the source for project cards and all project-detail pages.

## Report images added

### Board portraits

Extracted and used circular report portraits for the founder and all listed board members:

- `public/images/board/avinash-chauhan.jpg`
- `public/images/board/sunil-desai.jpg`
- `public/images/board/ruchita-zodge.jpg`
- `public/images/board/jyoti-anantharaman.jpg`
- `public/images/board/neeraj-gupta.jpg`
- `public/images/board/trusha-nilesh-chittal.jpg`
- `public/images/board/damayanti-gupte.jpg`

### Project and event images

- `public/images/projects/vision-for-all-eye-camp.jpg`
- `public/images/projects/menstrual-health-awareness.jpg`
- `public/images/projects/dapoli-learning-centre.jpg`
- `public/images/projects/water-harvesting-kitchen-gardens.jpg`
- `public/images/projects/wheelchair-distribution.jpg`
- `public/images/projects/iot-farmer-support.jpg`
- `public/images/projects/roots-and-rice.jpg`
- `public/images/events/aakar-2025.jpg`

Other public field images already present in `public/field-images/` are used for health, digital learning, nutrition, community development, women’s initiatives and farmer-workshop content. Image descriptions use alt text; the report photos are not presented as photos of a particular named project unless the report image makes that identification.

## Placeholders and unavailable source details

### Image placeholders still present

- **Contact page:** a verified Maharashtra district map and verified district/field-office photos.
- **Project stories:** Gyaan ka Sagar Library Setup; Financial Literacy Programme; Swachh Maharashtra Abhiyan 2.0 Household Surveys; and “Rise for Diversity, Inclusion and Dignity” Workshops. No matching, clearly identifiable photographs were available for these cards.
- **Project photography generally:** stories without a suitable identifiable report image retain descriptive placeholders rather than broken image links.

Partner names are rendered as text pills. Standalone partner logos were not added because usable, identifiable logo assets were not available for all named partners.

### Project fields requiring confirmation

The reports do not consistently provide each project's exact location, original problem statement, named partners, or quantified result. Missing project fields are explicitly labeled `[TODO: ...]` in `app/projects/project-data.ts`. They have not been filled with inferred details.

Verified social-profile URLs were not supplied by the reports or the design reference; existing social links were not replaced with guessed URLs.

## Annual-report PDF upload requirements

The Impact page links to these exact files. Upload the three PDFs to `public/reports/` with these names:

- `msct-annual-report-2023-24.pdf`
- `msct-annual-report-2024-25.pdf`
- `msct-annual-report-2025-26.pdf`

The source PDFs supplied under `Logs/` were left untouched. Until the named copies are uploaded to `public/reports/`, the corresponding public download links will not resolve to a file.

## Validation performed

- `npm run build` completed successfully, including TypeScript checks, and generated 46 routes, including `/projects`, `/news` and all 14 project detail routes.
- The build logged Supabase DNS/network errors for existing blog, hero and campaign fetches. Existing fallback behavior allowed generation to finish; no Supabase code was changed.
- Focused ESLint on changed public pages and modified components passed, excluding `components/Navbar.tsx`. Repository-wide `npm run lint` still reports pre-existing errors, including unrelated admin/dashboard findings and two React-hook lint findings in `components/Navbar.tsx`. These existing logic findings were not changed as part of this content task.
- After the production build, 26 checked existing and new routes returned HTTP 200.
- All 22 checked public image URLs returned HTTP 200. Browser checks found no broken project-card or board-portrait images and no horizontal overflow at 375px, 768px or 1280px on the checked pages.
- `git diff --check` reported no whitespace errors; it emitted only existing LF-to-CRLF normalization warnings for three edited files.

## Notes

- User-provided annual reports and `Prompt.txt` were not modified.
- Temporary rendered report previews were removed after extracting the selected images.
- No new top-level navbar destinations or unrequested transparency/report/get-involved pages were introduced.

## Follow-up

### Partner logo extraction audit

The 2025-26 PDF page showing the Strategic Partnerships section was reviewed and all clearly visible, identifiable logos were extracted and saved under `public/images/partners/`.

Successfully extracted (32):
- [x] Ideal Cures — `ideal-cures.png`
- [x] Mosambee — `mosambee.png`
- [x] Benow — `benow.png`
- [x] Alsina — `alsina.png`
- [x] Renovate India — `renovate-india.png`
- [x] Brahma Kumaris — `brahma-kumaris.png`
- [x] Baala — `baala.png`
- [x] Nana Palkar Smruti Samiti — `nana-palkar-smruti-samiti.png`
- [x] Goonj — `goonj.png`
- [x] Enable India — `enable-india.png`
- [x] Srujna — `srujna.png`
- [x] Rise Against Hunger India — `rise-against-hunger-india.png`
- [x] Pagaria Welfare Foundation — `pagaria-welfare-foundation.png`
- [x] Friends of Farmer — `friends-of-farmer.png`
- [x] Anahat for Change — `anahat-for-change.png`
- [x] Shirt for Sightless — `shirt-for-sightless.png`
- [x] Sheetal Lodha Foundation — `sheetal-lodha-foundation.png`
- [x] We The Change — `we-the-change.png`
- [x] Child Help Foundation — `child-help-foundation.png`
- [x] DigiSwashthya — `digi-swashthya.png`
- [x] Ira Ayurveda — `ira-ayurveda.png`
- [x] Shreelaxmi Foundation — `shreelaxmi-foundation.png`
- [x] DigiUpSkill — `digiupskill.png`
- [x] ConnectFor — `connectfor.png`
- [x] Centre for eGovernance — `centre-for-egovernance.png`
- [x] Tara — `tara.png`
- [x] Arpan Educational Charitable Foundation — `arpan-educational-charitable-foundation.png`
- [x] Stambh — `stambh.png`
- [x] JCI Dapoli — `jci-dapoli.png`
- [x] Paryaya — `paryaya.png`
- [x] Meraj Foundation — `meraj-foundation.png`
- [x] Yuva Sahas Foundation — `yuva-sahas-foundation.png`

Fallbacks: none. Every visible partnership logo on the page was readable enough to convert to PNG and render directly; no text-only fallbacks were required for the extracted set.

### HeroSection content-only review

The diff for `components/HeroSection.tsx` was reviewed against the previous version. Only the text/stat content changed:
- district count changed from 6 to 8
- stat values were updated to 32,000+, 8, and 80+
- label copy changed to reflect the 2025-26 reporting period

No JSX structure, class names, spacing, colors, borders, image layout, or visual styling changes were introduced.

### Build confirmation

`npm run build` was re-run after the partner logo update and the project still passes successfully in production mode. The build completed without errors and generated the expected pages including `/projects` and `/news`.

## Follow-Up: Full Site Audit — 2026-10-19

Completed the full-site audit without changing the design system, Supabase/auth behavior, or admin routes. The separate [audit report](./SITE_AUDIT_2026-10-19.md) documents the route, responsive, metadata, image, accessibility, content, and build checks, along with unresolved work requiring approved source material or a publishing decision.

Audit follow-up changes:

- Reconciled the public partner groups to the annual report's visible 33-logo roster (4 CSR, 22 collaboration, 7 associated) and mapped all 33 logos.
- Added descriptive route metadata and Open Graph tags, labels for the newsletter and donation-dedication fields, and keyboard-visible focus on the newsletter email field.
- Removed nonfunctional `#` destinations from controls without verified URLs; these controls are no longer exposed as links.
- Verified 36 public routes, four representative pages at 375/768/1280/1440 px, partner logo rendering, form labels, keyboard focus, and the production build.

Pending source/owner input: 31 project detail fields remain marked `[TODO]`; four project photos and the Contact/Impact maps or district imagery are unavailable; the three annual-report download targets are missing from `public/reports/`; social/legal URLs are unverified; Saheli Circle examples need confirmation; and the report's written partner count conflicts with its visible logo groups. Twenty-eight public images exceed 500 KB, and the existing coral-on-white contrast is 3.36:1. These were documented rather than guessed, redesigned, or optimized.

## Final Closeout — 2026-10-19

This final section supersedes the pending TODO/report/link status above. It records the completed closeout after direct review of the current diffs and source PDFs. No redesign was made, no project or partner facts were inferred, and the user-supplied source PDFs were not modified.

### Completed closeout work

- Compressed and installed the annual reports under `public/reports/`:
  - `msct-annual-report-2023-24.pdf` — 2,304,192 bytes (27 pages)
  - `msct-annual-report-2024-25.pdf` — 3,884,336 bytes (14 pages)
  - `msct-annual-report-2025-26.pdf` — 4,624,624 bytes (17 pages)
  - Combined size is 10,813,152 bytes, down from 62,486,782 bytes (about 82.7% smaller). All three public URLs returned HTTP 200.
- Cleared the 31 literal `[TODO: ...]` values in `app/projects/project-data.ts` instead of inventing facts. Also hid the unsupported generic `Rural schools` location. The project detail page omits empty values; a crawl of the 14 project pages found no visible TODO markers.
- Restored visible but disabled social placeholders in Footer and Contact, and disabled Privacy Policy/Terms placeholders. No unverified social or legal URL was added. This supersedes the earlier statement that these controls were not links: the current safe anchors have `href="#"`, `aria-disabled`, and inert keyboard/pointer behavior.
- Fixed Navbar's two hook lint errors with hydration-safe external-store state and pathname-derived menu closure; auth subscription/logout logic was not changed.
- Replaced the seven initial public-page/component image/unused-variable lint warnings. Image elements now use `next/image` with unoptimized loading where dynamic source hosts must remain compatible; current layouts and source URLs are preserved.
- Rechecked the donation dedication control without submitting the form: the checkbox toggles on, `#dedication` becomes visible, and the label reads “Name to dedicate this donation to”.
- Per the user's later direction, the partner section now displays only the 31 real image files in `images/MSCT Partners Logo/` (excluding macOS metadata files). The unprovided `Ideal Cures`, `ConnectFor`, `Centre for eGovernance`, `Arpan`, `Paryaya`, and `Shirt for Sightless` entries are excluded; the supplied `Paginma`, `Atharva Educational Charitable Foundation`, CEGP, and `Sight for the Sightless` logos are displayed. The user may provide additional logo files later. The 31 displayed public files were byte-verified against their supplied source files; browser checks decoded all 31 on Home and About. Four supplied logos with no verified group placement are under a neutral “Additional Logos” heading.

### Restricted-scope diff review

At the user's request, the pre-existing diffs in seven `app/admin/` files and `lib/supabase-functions.ts` were inspected directly rather than relying on the earlier changelog summary. The admin changes comprise type narrowing/safer error typing, effect-loading adjustments with lint suppressions, a zero-goal campaign-progress guard, and JSX quote escaping. `lib/supabase-functions.ts` changes function argument types from `any` to `Record<string, unknown>`. No Supabase client configuration, authentication, RLS, SQL, or query logic change was found. These files were not edited during this closeout; their existing diffs remain in the worktree.

### Validation and remaining input

- `npm run build` passed and generated the expected routes. During static generation, existing Supabase DNS failures were logged for blogs, hero content, and campaigns; the existing fallback behavior allowed the build to complete.
- `npx tsc --noEmit` passed.
- Full `npm run lint` reports 11 errors and 27 warnings, with no findings in the changed public components/pages/data files (remaining findings are in admin/dashboard/scripts and existing utility/config files).
- The 36-route production crawl returned HTTP 200 and metadata for all routes; project pages exposed no TODO text. Home, Projects, About, and Contact had no horizontal overflow at 375/768/1280/1440 px. After the final image changes, Home/About/Gallery/Donate were rechecked; the 31 supplied partner logos and all 16 Gallery images decoded successfully.
- `git diff --check` passed; Git emitted only its LF-to-CRLF normalization notices.
- The partner section is an intentionally partial display of the logo files supplied so far; it is not presented as a complete official roster or count. The supplied `Paginma` asset is used, and `Paryaya` is excluded because no corresponding logo was supplied. No new project/contact images were attached, so those existing placeholders remain.
- The user's original `git add -A` instruction covers the current worktree, including the pre-existing admin/Supabase diffs and user-supplied source files described above. Those restricted source files were not edited during this closeout.

## Logo Size Increase — 2026-10-20

### Changes

- **Navbar desktop logo:** approximately 106×40px → 159×60px (Option B, +50%; intrinsic ratio preserved).
- **Navbar mobile logo:** approximately 106×40px → 159×60px (same shared image sizing at mobile breakpoints).
- **Navbar row height:** 72px → 88px.
- **Footer brand mark:** 44×44px → 66×66px. The footer currently uses an “MS” monogram tile and wordmark rather than `public/logo.png`; its structure and wordmark are unchanged.
- The existing source image was retained; its native dimensions are 1600×604px. No replacement, recoloring, typography, or layout restructuring was made.
- **Files touched:** `components/Navbar.tsx`, `components/Footer.tsx`, this changelog.

### Verification

- [x] `npm run build` passed. Existing Supabase DNS lookup failures were logged during static generation; established fallbacks allowed the build to complete.
- [x] `npx tsc --noEmit` passed.
- [x] Focused ESLint on Navbar and Footer passed.
- [x] No horizontal overflow across Home, About, Projects, News, and Contact at 375 / 768 / 1280 / 1440px.
- [x] At 375px, the logo and 40px mobile menu button fit without overlap; opening and closing the menu worked, and selecting Gallery navigated and closed the menu.
- [x] At 1280px, desktop nav, phone pill, and Donate button fit; footer remained a four-column grid and its brand row fit within its column.
- [x] Logo aspect ratio is preserved (1600×604 source; displayed approximately 159×60px) and no visible pixelation was observed.
- [x] No color, typography, or layout-structure changes.

### Note

If the logo appears pixelated at its larger display size, supply a higher-resolution source (at least 2× the displayed dimensions). The current 1600×604px source looked crisp at the tested sizes; it was not upscaled programmatically.

## Visual Refresh Run 1 — 2026-10-20

**Phases completed:** 0 (audit), 2 (footer), 3 (header), 5 (hero blur removal), 6 (contrast), 7 (form)
**Phases deferred to Run 2:** 1 (marquee), 4 (section alternation), 8 (annual reports hierarchy), 9 (flatness polish)

### Changes Applied

- Added the pre-change public-page inventory and contrast audit in `Logs/VISUAL_REFRESH_AUDIT_2026-10-20.md`.
- Changed the public footer to a white surface with navy headings/monogram, dark copy and links, and retained its existing column structure in `components/Footer.tsx`.
- Reordered the header actions to navigation, Donate, icon-only phone, and Login/user menu; changed the visible label to “Contact Us” and kept the existing logo sizing and auth handlers in `components/Navbar.tsx`.
- Removed only the empty translucent blurred square from `components/HeroSection.tsx`; retained the ambient glow.
- Changed public CTA buttons and text links to navy/navy-dark for normal and hover states; switched small labels on light surfaces to navy and preserved coral for large display emphasis and decoration.
- Added an explicit white background, border, dark text, muted placeholder, and coral focus treatment to the newsletter field; changed its submit button to navy in `components/NewsletterForm.tsx`.
- Applied related contrast corrections to public campaign, blog, gallery, impact, program, Saheli Circle, project, and donation controls/content.
- No design-token values, auth behavior, admin pages, Supabase functions, or RLS policies were changed.

### Verification

- Build: ✅ `npm run build` passed; Supabase DNS lookups failed during static generation, and existing fallbacks allowed the build to complete.
- TypeScript: ✅ `npx tsc --noEmit` passed.
- Responsive: ✅ `/`, `/about`, and `/contact` rendered at 375 / 768 / 1280 / 1440px with no horizontal overflow.
- Mobile menu: ✅ At 375px, the 159×60px logo, Donate, 40px phone control, and 40px menu button fit without overlap; opening the menu displayed its mobile navigation.
- Desktop header: ✅ Logo and primary navigation fit at 1024 / 1280 / 1440px; phone icon has an accessible label with the number.
- Footer/input/hero: ✅ Footer and newsletter input compute to white backgrounds; the hero empty blur box is absent.
- Browser console: ✅ No console errors observed. Supabase fallback and unused-preload warnings were observed.
- Focused ESLint: ✅ No errors in modified public UI files (the CSS file is ignored by the ESLint configuration).
- Full `npm run lint`: ❌ Existing errors remain in untouched admin/dashboard/scripts files (11 errors and 27 warnings); no findings were reported for the modified public UI files.
- Contrast failures remaining: 0 known in the audited public marketing surfaces; account/admin/dashboard surfaces remain outside this run’s scope.
- Blockers: Supabase DNS was unreachable during build; the current fallback behavior worked. Repository-wide lint is blocked by the unrelated pre-existing findings above.

## Visual Refresh Run 2 — 2026-10-20

**Phases completed:** 1 (partner marquee), 4 (section alternation), 8 (annual-report hierarchy), 9 (flatness polish), 10 (verification)

### Changes Applied

- Flattened the 31-entry partner inventory in `lib/organization.ts`, preserving each partner name, logo path, and category metadata; replaced partner pills with the shared `components/PartnerMarquee.tsx` on Home and About.
- Added a duplicated, 40-second logo track with hover pause, masked edges, eager logo loading, and a static wrapping row for reduced-motion users. The screen-reader list contains one accessible name per partner.
- Rebalanced public section backgrounds without changing color tokens. Dark sections use light headings and body text; the six focus-area pages now follow the same sequence.
- Added the Transparency eyebrow and consistent heading/intro/card hierarchy to Annual Reports. Year badges use coral-tinted surfaces with navy text, and the PDF pill stays navy with white text to preserve AA contrast for small text.
- Added restrained card shadows, 200ms hover transitions, and `rounded-xl` corners to shared and focus-area cards. Existing icon containers were retained.
- Fixed a hydration mismatch on `/impact`: `StatCard` now renders the complete emoji rather than truncating it to a UTF-16 surrogate.
- Replaced the unused `components/PartnerPill.tsx`; no admin, authentication, Supabase, RLS, routes, or design-token values were changed.

### Section Background Map

Each entry lists the section’s previous background followed by its new background. Sections not listed already followed the cycle.

| Page | Section | Old → new |
|---|---|---|
| `/` | Our Reach | navy → off-white |
| `/` | Area of Interest | off-white → navy |
| `/` | How The Work Happens | navy → white |
| `/` | Our Associate Partners | white → off-white |
| `/` | Future Plans | off-white → navy |
| `/` | Explore More | off-white → white |
| `/about` | Founder’s Message | white → navy |
| `/about` | Vision & Mission | off-white → white |
| `/about` | Area of Interest | white → off-white |
| `/about` | Aid → Empowerment | white → navy |
| `/about` | Our Pathway | off-white → white |
| `/about` | Story / Timeline | white → off-white |
| `/about` | From the Field | off-white → navy |
| `/about` | Registration & Governance | white → navy |
| `/about` | Community-Led Approach | off-white → white |
| `/about` | The Vision | white → off-white |
| `/about` | Partners | off-white → white |
| `/about` | Roadmap | white → off-white |
| `/contact` | Geographic Reach | white → navy |
| `/contact` | Frequently Asked | off-white → white |
| `/contact` | Stay Connected | navy → off-white |
| `/donate` | The Journey | white → navy |
| `/donate` | Your Money at Work | off-white → white |
| `/donate` | Allocation | white → off-white |
| `/donate` | In Their Words | off-white → navy |
| `/donate` | Stay Updated | navy → off-white |
| Each `/focus-areas/*` page | Detailed Content | white → navy |
| Each `/focus-areas/*` page | Explore Other Focus Areas | off-white → white |
| `/programs` | Support Our Programs (final CTA) | white → navy |
| `/saheli-circle` | Resources | white → navy |
| `/saheli-circle` | Circle Stories | off-white → white |
| `/saheli-circle` | How to Join Saheli Circle | white → off-white |
| `/saheli-circle` | Annual Report | off-white → navy |
| `/impact` | Programme Achievements | off-white → navy |
| `/impact` | Geographic Reach | white → navy |
| `/impact` | Annual Reports | off-white → white |
| `/impact` | Methodology | white → off-white |
| `/impact` | Be Part of This Impact (final CTA) | white → navy |
| `/blog/[slug]` | Article title | off-white → navy |
| `/campaigns/[id]` | Campaign title | off-white → navy |

### Verification

- Build: ✅ `npm run build` passed; existing Supabase DNS failures used the site’s fallback data.
- TypeScript: ✅ `npx tsc --noEmit` passed.
- Focused ESLint: ✅ Changed public TypeScript/TSX files passed.
- Routes: ✅ 34 public routes returned HTTP 200; the dynamic campaign detail route also returned HTTP 200. No runtime page errors remained after the `StatCard` fix.
- Responsive: ✅ `/`, `/about`, `/contact`, and `/impact` tested at 375 / 768 / 1280 / 1440px (16 checks, no horizontal overflow).
- Section cycle: ✅ 32 public/static routes plus the campaign detail route checked; no adjacent top-level sections shared a background.
- Marquee: ✅ All 31 logos and all 31 screen-reader names rendered on Home and About; all logos loaded, 40s animation ran, hover paused it, and reduced motion produced a wrapping static row without overflow.
- Annual reports: ✅ Annual Reports and Focus Areas H2 computed to 36px; all three report downloads returned HTTP 200.
- Contrast: ✅ Five spot-checked section headings measured 11.63:1 on their rendered backgrounds. Small coral text/white-on-coral controls were avoided in favor of contrast-safe navy text and buttons.
