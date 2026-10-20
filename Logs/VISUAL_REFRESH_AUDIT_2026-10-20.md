# Visual Refresh Audit — 2026-10-20

Audit performed before Run 1 changes. This inventory covers public page sections rendered from `app/**/page.tsx`; shared `PageHero` and the homepage `HeroSection` provide the first hero surface where used. Routes with dynamic data use the same documented page template.

## 0.1 Section backgrounds

`white` means the default page surface (`--surface`, `#ffffff`); `off-white` means `section-alt` (`#f8f9fb`); navy values are explicit classes. The lists preserve section order. `PageHero` uses navy and `HeroSection` uses navy.

| Page | Sections in order (current background) | Adjacent same-background sections |
|---|---|---|
| `/` | Hero (navy); Serving communities (navy); Our focus areas (off-white); Collaborative & Self-Initiated Work (navy); Our Strategic Partners (off-white); Our Roadmap Ahead (white); Explore More (off-white); Help us reach every community (navy-dark) | Hero → Serving communities (navy) |
| `/about` | Empowering communities (white); Bridging urban/rural gaps (off-white); Better tomorrow together (white); Our Vision (off-white); Focus areas (white); Rooted in the community (navy); Whole-picture approach (white); Grassroots capability (off-white); Lasting empowerment (white); Pathway (off-white); Milestones (white); Programme moments (off-white); Core Values (white); Board Members (off-white); Organisation details (white); Beneficiaries to partners (off-white); Self-reliant India (white); Impact That Speaks (navy); Strategic Partners (off-white); Roadmap Ahead (white); final CTA (navy-dark) | None |
| `/blog` | PageHero (navy); blog list (white) | None |
| `/blog/[slug]` | Article heading (off-white); article body/CTA (white/card surface, then navy gradient CTA inside the article) | None at section level |
| `/campaigns` | PageHero (navy); campaigns (white); create campaign CTA (off-white) | None |
| `/campaigns/[id]` | Campaign heading (off-white); campaign details (white) | None |
| `/contact` | PageHero (navy); contact form/district panel (white); district presence (off-white); map (white); FAQ (off-white); Updates from the field (navy); final CTA (navy-dark) | Updates CTA → final CTA (both dark navy surfaces) |
| `/donate` | PageHero (navy); impact choices (white); donation steps (off-white); money at work (white); allocation (off-white); reasons to give (white); other ways to support (off-white); Stay Updated (navy) | None |
| `/focus-areas/community-development` | Hero (navy/blue gradient); Our Impact (white); Key Activities (off-white); Detailed Content (white); Explore Other Focus Areas (off-white) | None |
| `/focus-areas/education` | Same focus-area template: navy/blue gradient → white → off-white → white → off-white | None |
| `/focus-areas/health` | Same focus-area template: navy/blue gradient → white → off-white → white → off-white | None |
| `/focus-areas/livelihood` | Same focus-area template: navy/blue gradient → white → off-white → white → off-white | None |
| `/focus-areas/nutrition` | Same focus-area template: navy/blue gradient → white → off-white → white → off-white | None |
| `/focus-areas/women-empowerment` | Same focus-area template: navy/blue gradient → white → off-white → white → off-white | None |
| `/gallery` | PageHero (navy); gallery (white); field stories (off-white); final CTA (navy/teal gradient) | None |
| `/impact` | PageHero (navy); metrics (white); achievements (off-white); field outcomes (white); yearly progress (off-white); geographic reach (white); annual reports (off-white); methodology (white); final CTA (white) | Methodology → final CTA (both white) |
| `/news` | PageHero (navy); milestones (white); media (off-white); upcoming/ongoing (white); Partner With Us (navy-dark) | None |
| `/programs` | PageHero (navy); Education programs (white); Program impact (off-white); Support our programs (white) | None |
| `/projects` | PageHero (navy); Featured Field Stories (white); Support Our Work (navy-dark) | None |
| `/projects/[slug]` | PageHero (navy); project details (white) | None |
| `/saheli-circle` | PageHero (navy); What is Saheli Circle? (white); activities (off-white); Resources (white); Circle stories (off-white); How to join (white); final explanatory section (off-white) | None |

Additional public routes `/login`, `/signup`, `/auth/callback`, `/dashboard`, and `/profile` are form/account or callback surfaces rather than editorial multi-section pages; they use their route-specific surface and are not part of the multi-section alternation map. Admin routes are excluded by scope.

## 0.2 Contrast audit

Ratios below use WCAG relative luminance and the exact design-token hex values in `app/globals.css`. Alpha examples are composited over their documented opaque surface. Normal-size text requires 4.5:1; large/bold text requires 3:1. Decorative icons and non-text shapes are not body text.

| Page | Element | FG hex | BG hex | Ratio | WCAG AA? | Fix suggestion |
|---|---|---:|---:|---:|---|---|
| Shared public pages | Small coral text and `link-coral` on white | `#e85d75` | `#ffffff` | 3.36:1 | No | Use navy for small text/link labels; retain coral for large display emphasis or decorative marks |
| Shared public pages | Small coral text on off-white | `#e85d75` | `#f8f9fb` | 3.19:1 | No | Same as above |
| Public CTA buttons | White button text on coral | `#ffffff` | `#e85d75` | 3.36:1 | No (normal button text) | Use navy CTA background with white text |
| Hover state | White text on warm coral hover | `#ffffff` | `#d14a62` | 4.31:1 | No for normal text | Use navy hover background for button controls |
| Shared white surface | Muted copy | `#5a6b7d` | `#ffffff` | 5.48:1 | Yes | — |
| Off-white section | Muted copy | `#5a6b7d` | `#f8f9fb` | 5.20:1 | Yes | — |
| Navy section | White text | `#ffffff` | `#1b3a5c` | 11.63:1 | Yes | — |
| Navy-dark section | White text | `#ffffff` | `#14293f` | 14.80:1 | Yes | — |
| Footer before change | `white/50` secondary label over navy-dark | composited `#8a949f` | `#14293f` | 4.81:1 | Yes | Footer will use dark text on white in Phase 2 |
| Contact/donate CTA | White text on navy | `#ffffff` | `#1b3a5c` | 11.63:1 | Yes | — |

The most important systemic failures are coral body/link text on light surfaces and white labels on coral controls. Decorative coral icons and coral heading fragments at large sizes are not counted as normal-size text.

## 0.3 Hero blur/glass search

`components/HeroSection.tsx`:

| Line | Match | JSX/context | Assessment |
|---:|---|---|---|
| 37 | `blur-3xl` | Empty, absolute coral glow circle at the upper-right hero edge | Decorative atmospheric glow; not a content box |
| 96 | `backdrop-blur-sm`, translucent coral fill | Empty 96×96px rounded square floating outside the image card | Decorative blurred box with no meaningful content; safe to remove in Phase 5 |

No `glass`/`frosted` text match was found in the hero component. The header separately uses `backdrop-blur-md` on its translucent sticky white bar; it is outside the requested hero-box removal.

## 0.4 Stay Updated form

The newsletter form is rendered from `components/NewsletterForm.tsx` on `/contact` and `/donate`; the Donate instance is under an explicit navy section. The input currently has `flex-1 rounded px-4 py-2 text-[var(--text)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--navy)]`, with no explicit white background or border. It should declare a white background, soft border, dark text, muted placeholder, and coral focus border/ring. The submit button is coral with white normal-size text, which fails the measured 4.5:1 requirement and will use navy for sufficient contrast.

## 0.5 Annual Reports hierarchy

On `app/impact/page.tsx` lines 196–216, the section has an H2 “Annual Reports” using `text-3xl md:text-4xl font-extrabold` (computed size 30px/36px, weight 800; browser line-height follows the heading font). There is no eyebrow. The intro is `text-sm` (14px). Report cards are simple bold `font-semibold` links with coral “PDF” labels, without separate year/description/download-button hierarchy. Nearby section H2s use `text-3xl md:text-4xl`; size is consistent, but the eyebrow and intro/card hierarchy are absent. This is deferred to Run 2.

## 0.6 Partner inventory

`PARTNER_GROUPS` in `lib/organization.ts` defines **31 supplied logos** across four headings (3 CSR, 19 Collaboration, 5 Associated, 4 Additional Logos). Homepage `app/page.tsx` and `app/about/page.tsx` each render the groups as separate category headings and a four-column responsive grid of `PartnerPill` logo tiles. No other partner display was found. Consolidation/marquee is explicitly deferred to Run 2.

## 0.7 Header structure

`components/Navbar.tsx` desktop links are Home, About, Gallery, Contact (current order). The phone is a navy pill with icon and visible `+91 79776 69173` text. Donate is a coral pill. Login appears before Donate and is conditional on auth state; signed-in users instead see the existing user-menu button. On mobile, all navigation, phone number, Login, and Donate are in the collapsible menu; only the logo and hamburger remain in the top row. Run 1 changes the public navigation presentation without changing auth state or handlers.

## 0.8 Footer

`components/Footer.tsx` currently has a navy-dark background with white/opacity text, a 4-column desktop grid, a coral “MS” monogram tile and wordmark (no footer image logo), five disabled social icon anchors, contact details, Donate Now, and legal/report links. The footer can switch to white without losing a logo image. Small white-on-coral monogram text (18px bold, below the WCAG large-text threshold) is 3.36:1 and should use a navy tile with white letters. On white, headings/body/links must use navy/text/muted colors; coral icons may remain decorative. Disabled social/legal elements remain disabled.

## 0.9 Flatness indicators

| Category | Status | Example files | Severity |
|---|---|---|---|
| Shadows | Mixed: many cards have `shadow-sm`/`shadow-lg` and hover lift, while multiple `card` surfaces are border-only | `app/blog/page.tsx`, `app/impact/page.tsx`, `components/ProgramCard.tsx` | P2; polish deferred |
| Hover states | Mixed: primary buttons and some cards animate; several links have color-only/no explicit hover | `components/Navbar.tsx`, `components/PartnerPill.tsx` | P2 |
| Borders | Mostly uses `border-[var(--border-soft)]`; several cards use generic `card` and a few custom border colors | `app/impact/page.tsx`, `app/about/page.tsx` | P3 |
| Icons | Mix of inline emoji/SVG and icons in tinted rounded containers; no site-wide uniformity | `app/contact/page.tsx`, `components/FocusAreaCard.tsx` | P2 |
| Typography | H2 usually 30/36px; notable smaller H2s include Methodology at 24px and some contact sub-sections at 20–24px | `app/impact/page.tsx`, `app/contact/page.tsx` | P2 |
| Spacing | Most editorial sections use 4rem/6rem spacing; some page sections use direct `py-16`; no blocking cramped layout found in this source pass | Public page files | P3 |
| Images | Hero has gradient caption overlay; gallery has image overlays; many card images have no text overlay, so no overlay is needed there | `components/HeroSection.tsx`, `app/gallery/page.tsx` | OK |
| Transitions | Shared buttons/cards animate; duration varies from 150ms to 300ms and some links only transition color | `app/globals.css`, public page files | OK/P2 |

## 0.10 Run plan and safety

- **Run 1:** complete Phases 0, 2, 3, 5, 6, and 7.
- **Run 2 (deferred):** Phases 1, 4, 8, 9, 10, and 11.
- Phase 5 is safe: the targeted blurred square is empty decoration, not meaningful content. The footer already uses a text monogram, so no replacement logo asset is required. The header's current 4-link navigation is short; an icon-only phone control reduces its footprint, and mobile actions can remain compact without changing logo dimensions.
- No locked admin, Supabase, auth, RLS, or design-token change is required. This report is written before any Run 1 implementation.
