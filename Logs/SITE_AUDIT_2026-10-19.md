# Full Site Audit — 2026-10-19

## Executive summary

The requested audit was completed without changing the visual design system, Supabase/authentication behavior, or admin routes. All 36 checked public routes return HTTP 200 in the production build. All checked routes now have page-specific titles, descriptions, and Open Graph metadata. The remaining work is source-dependent or requires an explicit publishing/design decision; it is listed below rather than filled with guessed content.

## Fixes made

- Reconciled the partner roster to the 2025-26 annual report's visible logo groups: 4 CSR, 22 collaboration, and 7 associated partners. All 33 cards now use a mapped logo file; the homepage and About page each rendered 33 loaded partner logos in the browser.
- Added descriptive metadata and Open Graph defaults for the audited routes. Blog detail titles are derived from their route slugs; campaign detail metadata uses known fallback campaign data when available.
- Added accessible labels to the newsletter email and conditional donation-dedication fields. Added a visible keyboard-focus ring to the newsletter field.
- Removed placeholder `#` destinations from unverified social, policy, terms, and resource controls. They remain visible but are no longer presented as working links.

## Findings requiring source material or a decision

| Area | Finding | Recommended next step |
|---|---|---|
| Project detail content | The 14 project stories contain 31 `[TODO: ...]` fields for details not provided consistently by the reports. | Supply verified locations, problem statements, partners, and outcome figures before replacing placeholders. |
| Project photography | Four stories have no suitable, identifiable image: Gyaan ka Sagar Library Setup; Financial Literacy Programme; Swachh Maharashtra household surveys; and Rise for Diversity workshops. | Provide approved photos or retain the labeled placeholders. |
| Contact and Impact imagery | Contact still needs a verified operating-district map and district/office photos. Impact contains a map placeholder. | Provide approved geographic artwork and photos. |
| Annual report downloads | The three `/reports/*.pdf` targets are absent from `public/reports/`. The three supplied source reports total approximately 59.6 MiB. | Decide where reports should be hosted before copying or publishing these large files. The source PDFs were not changed. |
| Social and legal destinations | Verified social-profile URLs and Privacy Policy/Terms of Service content were not supplied. Their placeholder anchors were made non-interactive rather than assigned invented destinations. | Supply approved URLs and legal-page content to restore these destinations. |
| Saheli Circle examples | Example-like events and stories, including references to “Village A/B,” have not been verified against a source. | Confirm or replace these items with approved source material. |
| Partner-report count | The report page shows 33 partner logos (4 + 22 + 7), while its accompanying text says “22 partners, including 4 dedicated CSR partners.” | Confirm the intended textual count with the report owner; the displayed logo roster is used for the website list. |
| Color contrast | Existing coral on white measures 3.36:1, below the 4.5:1 WCAG AA target for normal-size text. Navy/white is 11.63:1 and blue/white is 7.17:1. | Review with the design owner; the palette was not changed under the no-redesign constraint. |
| Large images | 28 public images exceed 500 KB; the largest checked asset is about 6.84 MB. | Consider a separately approved image-optimization pass. No assets were recompressed during this audit. |

## Audit results

| Check | Result |
|---|---|
| Public route crawl | 36/36 returned HTTP 200, including all 14 project details. |
| Responsive layout | No horizontal overflow on Home, Contact, Impact, or Projects at 375, 768, 1280, and 1440 px. |
| Metadata | All 36 checked routes had a title, description, Open Graph title, and Open Graph image. |
| Static image references | 58 literal references checked; no missing files. The 33 partner-logo sources all exist. |
| Browser image rendering | No broken partner logos on Home or About; all 33 rendered on each page with alternative text. |
| `next/image` usage | 27 instances checked; each has dimensions or `fill` with `sizes`. |
| Image filenames | Public asset filenames passed the lowercase/hyphen naming check. |
| Organization data | Eight operating districts match the supplied list. Checked contact, registration, founder, and impact figures match the supplied current values. |
| Forms and keyboard | Contact and Donate fields had no unlabeled inputs in the browser check; the conditional dedication input was exposed and verified. Keyboard navigation reached the newsletter input with `:focus-visible` styling. Forms were not submitted to avoid creating live records. |
| Generated JavaScript | 30 emitted `.next/static/chunks` files total 1,177,000 bytes (about 1.12 MiB, uncompressed). This is a build-output total, not a compressed or route-specific transfer-size measurement. |
| Build and types | `npm run build` and `npx tsc --noEmit` passed. Build-time Supabase DNS failures remain observable; existing fallback behavior allowed route generation to finish. |
| Focused lint | Changed public files had 0 errors and 2 existing raw-`<img>` warnings in the blog list/detail pages. |
| Repository lint | `npm run lint` reports 13 errors and 34 warnings across the repository, including existing Navbar hook findings and admin/dashboard findings. No admin files were changed as part of this audit. |
| Diff hygiene | `git diff --check` passed; Git reported only existing LF-to-CRLF normalization warnings. |

## Scope and limitations

- The supplied audit text and annual-report source PDFs were treated as read-only.
- No Supabase, auth, RLS, or `app/admin/` changes were made for this audit.
- Form submission and live database mutation were intentionally avoided.
- This report records the audit and outstanding source-dependent work; it does not infer missing project facts or publish the large PDFs.

## Final Closeout Update — 2026-10-19

The findings above record the initial audit state. The following closeout changes supersede the corresponding pending statuses:

- The 31 project-data TODO markers were cleared without guessing replacement facts. Empty project-detail values are omitted from rendered pages, and the unsupported generic `Rural schools` location was also hidden.
- Compressed reports were installed as `msct-annual-report-2023-24.pdf` (2,304,192 bytes), `msct-annual-report-2024-25.pdf` (3,884,336 bytes), and `msct-annual-report-2025-26.pdf` (4,624,624 bytes). All three returned HTTP 200; source reports remained unchanged.
- Social and legal controls remain visible as disabled anchors until verified destinations/content are provided. This replaces the earlier “not presented as links” state; no URLs were invented.
- The two Navbar hook errors and all seven baseline public-page/component warnings were fixed. Final repository lint reports 11 errors and 27 warnings, all outside the changed public pages/components.
- The user subsequently directed that only logos supplied so far appear in the partner section. It now maps the 31 real files in `images/MSCT Partners Logo/` (excluding macOS metadata); unprovided entries are hidden, and the supplied `Paginma` logo is shown. Four logos with no supplied category are placed under “Additional Logos.” The user may provide more assets later; the displayed subset is not represented as the complete official roster. All 31 public logo files were byte-verified against the supplied sources, then decoded in browser on Home and About.
- The 36-route production crawl, metadata checks, and responsive checks remain valid. Following the final image-component changes, production checks decoded all 16 images on Gallery; the donation-dedication checkbox revealed its conditional field and label without submitting the form.
- At the user's request, existing worktree diffs in seven `app/admin/` files and `lib/supabase-functions.ts` were inspected directly. They contain type/lint-safety changes; no auth, RLS, SQL, Supabase client configuration, or query logic changes were found. Those files were not edited during this closeout. The earlier “No admin files were changed as part of this audit” statement means no admin edits were made for this closeout; the pre-existing diffs are documented in [the content update log](./WEBSITE_CONTENT_UPDATE_2026-10-16.md#restricted-scope-diff-review).
- The complete official partner count and future additions remain open; the current display follows the user's supplied-logo subset only. No project/contact image attachments were supplied, so those placeholders remain.
