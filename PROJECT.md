# Storemate — Marketing Site

Astro + SCSS static marketing site for **Storemate**, the parent brand for two products.
This file is the single source of truth for anyone (human or AI) making changes to this
project. Always read this file before editing, and update the Changelog after every change.

---

## 1. Overview — brand & domain map

- **Storemate** — a registered software company. This site (`storemate.com`) is its home,
  and is built around **two portions**:
  - **Products** (`/products`) — ready-made SaaS: Storemate CRM and Storemate Connect.
  - **Services** (`/services`) — custom software work Storemate takes on for other businesses
    (web apps, WordPress, integrations, AI features, maintenance).
- **Storemate CRM** — jewellery business management (inventory, customers, orders, billing).
  Lives at `app.Storemate.com` (already live).
- **Storemate Connect** — Instagram & WhatsApp automation. Lives at `connect.Storemate.com`.
  Instagram automation is live; WhatsApp automation is "coming soon" (shown as a badge, not
  a separate waitlist page).

This site is **static marketing only** — no pricing, no login, no backend. Its job is to
explain the company (products + services) and send product visitors to the right subdomain,
and service enquiries to `/contact`.

**Domain is not purchased yet.** Everything uses the placeholder `storemate.com`. When the
real domain is bought, update ONLY:
1. `src/config/site.ts` → `domain` constant
2. `astro.config.mjs` → `site:` field
3. `public/robots.txt` → `Sitemap:` line

Nothing else should ever hardcode a URL, email, or phone number — always import from
`src/config/site.ts`.

---

## 2. Design system (v2 — "precision grid")

**Logo:** radiant petal/flower mark (`public/images/logo.png`). Used as a bullet mark
(`.facet-item__mark`) — kept from v1 for brand continuity.

**v2 signature motifs (new):**
- **`.grid-bg`** — a fine technical grid backdrop (line pattern, radial-fade mask), applied to
  hero sections and dark CTA banners. Gives the "structured SaaS company" feel the brief asked
  for, and doubles as a nod to precision-cut jewellery facets. Variants: `.grid-bg--dark` (for
  `$ink` backgrounds), `.grid-bg--full` (fuller fade radius for full-bleed sections like the CTA
  banner). Always pair with `position: relative; z-index: 1` on the actual content wrapper so
  text sits above the grid layer.
- **`.corner-frame`** (+ `<CornerMarks />` component) — four small corner brackets on cards,
  a blueprint/registration-mark motif reinforcing precision. Brackets turn `$primary` on hover
  (or `$secondary` if the card also has `.corner-frame--connect`). Used on feature/service/
  product cards — NOT on every single element (restraint — see brief's design principle).
- **`.reveal`** — scroll-triggered fade+rise (`opacity 0 → 1`, `translateY(18px) → 0`), driven
  by a small `IntersectionObserver` in `BaseLayout.astro`. Respects `prefers-reduced-motion`
  (shows content immediately, no motion). Apply to section heads, cards, and CTA content —
  not to every paragraph.

**Font:** Kumbh Sans only (loaded via Google Fonts in `BaseLayout.astro`), weights 400–800.

**Colors** (`src/styles/_tokens.scss` — the ONLY place colors are defined):
| Token | Hex | Use |
|---|---|---|
| `$primary` | `#E93558` | Storemate CRM accent, primary brand color |
| `$secondary` | `#7026ED` | Storemate Connect accent |
| `$primary-dark` | `#8F1836` | Deep maroon, from logo core |
| `$secondary-dark` | `#45148C` | Deep violet |
| `$ink` | `#1E1420` | Primary text, footer + CTA banner background |
| `$ink-soft` / `$muted` | `#4A3B44` / `#8A7A82` | Secondary / tertiary text |
| `$paper` / `$paper-alt` | `#FFFDFC` / `#FAF5F4` | Page backgrounds |
| `$grid-line-light` / `$grid-line-dark` | see tokens file | Grid-bg line color on light/dark |

**v2 change of direction:** v1 leaned on full pastel section backgrounds (`$primary-tint`,
`$secondary-tint`) for "CRM vs Connect" differentiation. v2 uses those tints sparingly (small
badges only) and instead differentiates CRM/Connect through `.corner-frame` hover color and
`.eyebrow--violet` — the base canvas stays white/grid everywhere for a more "professional SaaS
company" register, less "soft product site."

**Component classes to reuse (don't recreate):**
- `.btn`, `.btn--primary`, `.btn--ghost`, `.btn--on-dark`, `.btn--sm`
- `.badge`, `.badge--live`, `.badge--soon`
- `.facet-item`, `.facet-item__mark`, `.facet-list` — bullet points with the petal mark
- `.grid-bg`, `.grid-bg--dark`, `.grid-bg--full` — background texture
- `.corner-frame`, `<CornerMarks />`, `.corner-frame--connect` — corner-bracket signature
- `.reveal` — scroll-reveal animation
- `.eyebrow`, `.eyebrow--violet` — small uppercase label above headings
- `.h1`–`.h4`, `.lede`, `.gradient-text`
- `.section`, `.section--alt`, `.container`, `.container--narrow`
- `.prose` — typography for legal/long-form pages (used by `LegalLayout.astro`)

---

## 3. Pages

| Route | File | Status |
|---|---|---|
| `/` | `src/pages/index.astro` | Done — company home, Products/Services split |
| `/products` | `src/pages/products.astro` | Done — overview of both products |
| `/storemate-crm` | `src/pages/storemate-crm.astro` | Done |
| `/storemate-connect` | `src/pages/storemate-connect.astro` | Done |
| `/services` | `src/pages/services.astro` | Done — 7 service categories + process |
| `/about` | `src/pages/about.astro` | Done |
| `/contact` | `src/pages/contact.astro` | Done |
| `/faq` | `src/pages/faq.astro` | Done |
| `/privacy-policy` | `src/pages/privacy-policy.astro` | Done (draft copy — legal review recommended) |
| `/terms-and-conditions` | `src/pages/terms-and-conditions.astro` | Done (draft copy — legal review recommended) |
| `/refund-policy` | `src/pages/refund-policy.astro` | Done (draft copy — legal review recommended) |
| `/404` | `src/pages/404.astro` | Done |

Shared components: `Header.astro` (Products dropdown + Services nav item), `Footer.astro`,
`PageHero.astro` (grid-bg + reveal built in), `CornerMarks.astro`.
Shared layouts: `BaseLayout.astro` (all pages, includes scroll-reveal script), `LegalLayout.astro`.

---

## 4. Redirect map

All "open the app" / "explore" CTAs point to the subdomains, never to a page on this site:
- CRM CTAs → `site.products.crm.url` (`app.storemate.com`)
- Connect CTAs → `site.products.connect.url` (`connect.storemate.com`)
- Service enquiries → `/contact` (no subdomain — services are quote-based, not self-serve)

Nav "Open CRM" button in the header always points to `app.storemate.com`.

---

## 5. SEO setup already in place

- Per-page `<title>`, meta description, canonical URL, Open Graph + Twitter tags (`BaseLayout.astro`)
- `Organization` JSON-LD structured data on every page
- `@astrojs/sitemap` — auto-generates `sitemap-index.xml` on every build
- `public/robots.txt` — points to the sitemap
- Semantic headings (one `<h1>` per page), `aria-labelledby` on sections
- `prefers-reduced-motion` respected (both global CSS and `.reveal` specifically), visible focus states

**Still to do when real content/domain is ready:** replace placeholder OG image if a
dedicated social-share image is designed (currently reuses the logo), submit sitemap to
Google Search Console once the domain is live.

---

## 6. Working with a single module (for isolated AI edits)

When you only need to change one page/component, share:
1. This `PROJECT.md` (or just sections 1–2 above)
2. The specific file(s) to edit (e.g. `src/pages/services.astro`)

Mention which design tokens/classes apply so the edit stays consistent, and update the
Changelog below after the change is made.

---

## 7. Changelog

- **2026-07-10** — Initial build: project scaffold, design tokens, Header/Footer, home page,
  both product pages, About, Contact, FAQ, Privacy Policy, Terms & Conditions, Refund Policy,
  404, sitemap + robots.txt, central `site.ts` config.
- **2026-07-11** — v2 redesign: restructured site around two company portions — Products
  (`/products` overview + existing CRM/Connect pages) and Services (`/services`, new — 7
  service categories + 4-step process). Introduced grid-texture background (`.grid-bg`),
  corner-bracket signature marks (`.corner-frame` + `<CornerMarks />`), and scroll-reveal
  animation (`.reveal`, IntersectionObserver in `BaseLayout.astro`). Reduced reliance on full
  pastel section backgrounds in favor of a white/grid canvas throughout, for a more
  professional/agency register. Updated Header with a Products dropdown + Services nav item,
  updated Footer with Products/Services columns, refreshed About/Home copy to reflect
  Storemate as a registered company offering both products and services.
- **2026-07-11 (later)** — Domain finalized to **storematehq.com** (`app.` / `connect.`
  subdomains, `support@storematehq.com`, `+91 99092 83562`) — updated in `site.ts`,
  `astro.config.mjs`, and `public/robots.txt`. **Repositioning:** Storemate is NOT a
  registered company — it's the parent studio/brand behind Storemate CRM and Storemate
  Connect, which also takes on freelance/custom software services. Removed all "registered
  company" language (Home, About, FAQ) in favor of "studio" / "team" framing. Rebuilt
  `Header.astro` with a full-screen slide-in mobile nav (accordion for Products, smooth
  transforms, backdrop, escape-to-close) and a more polished desktop dropdown (product icons,
  hover-lift, better spacing) — replacing the earlier plain dropdown. Fixed a footer
  consistency issue where dark CTA banners visually merged into the dark footer with no
  separation — added a permanent `border-top` on `.site-footer`. Simplified Contact page
  channels (Email / WhatsApp / Call, since only one email/number exists) instead of showing
  a duplicate "Support" email card. Added a full categorized **feature breakdown** section to
  both `/storemate-crm` and `/storemate-connect` (7 and 5 categories respectively, covering
  every feature — not just headline highlights), making both product pages significantly
  more thorough per request.
