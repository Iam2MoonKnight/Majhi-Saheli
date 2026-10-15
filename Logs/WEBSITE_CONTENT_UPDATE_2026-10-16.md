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
