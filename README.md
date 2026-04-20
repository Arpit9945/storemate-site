# Storemate — IT Services & Consultancy

Production-grade Next.js 14 (App Router) website for **Storemate IT Services and Consultancy**, Surendranagar.

Built with Next.js 14, Framer Motion, Tailwind CSS. Dark + neon aesthetic. Mobile-first. SEO-ready.

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:3000
```

**Production build:**

```bash
npm run build
npm start
```

---

## Project structure

```
storemate/
├── app/
│   ├── layout.js            # Root layout + SEO metadata + JSON-LD schema
│   ├── page.js              # Homepage
│   ├── globals.css          # Theme + utilities
│   ├── sitemap.js           # Auto-generated sitemap.xml
│   ├── robots.js            # robots.txt
│   ├── not-found.js         # 404 page
│   ├── icon.svg             # Favicon
│   ├── services/
│   │   ├── page.js          # Server wrapper (metadata)
│   │   └── ServicesClient.js
│   ├── portfolio/
│   │   ├── page.js
│   │   └── PortfolioClient.js
│   ├── about/
│   │   ├── page.js
│   │   └── AboutClient.js
│   └── contact/
│       ├── page.js
│       └── ContactClient.js
├── components/
│   ├── Navbar.jsx           # Sticky nav + mobile menu
│   ├── Footer.jsx           # NAP consistency for local SEO
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Process.jsx
│   ├── FeaturedWork.jsx
│   ├── CTASection.jsx
│   ├── SectionHeader.jsx
│   └── WhatsAppFab.jsx      # Floating WhatsApp button
├── lib/
│   └── site-config.js       # Single source of truth for business info
├── public/                  # Static assets
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.mjs
└── package.json
```

### Why server + client component split?

Next.js App Router requires `metadata` exports from **server components only**. But Framer Motion, `useState`, event handlers, etc. need `"use client"`. So each page is split into two files: a server `page.js` that exports metadata, and a `*Client.js` with the interactive UI.

---

## Editing content

**Everything the client cares about lives in one file:** `lib/site-config.js`.

Change business details, services, or projects there — updates reflect across all pages, SEO metadata, schema, and footer NAP block.

To add a new service: edit the `SERVICES` array.
To add a new project: edit the `PROJECTS` array.

---

## SEO checklist (do these before launch)

The site code is already SEO-ready. But rankings need ecosystem work — do these in order:

### Critical — do this week

- [ ] **Buy domain** — prefer `storemate.in` (`.in` helps local ranking in India).
- [ ] **Update `lib/site-config.js`** — set `SITE.url` to your real domain.
- [ ] **Deploy to Vercel** — easiest path. Free tier, edge network, auto-HTTPS.
- [ ] **Google Business Profile** — [business.google.com](https://business.google.com). More impact than the website alone for local searches. Add: business name, address, phone, website URL, services, hours, photos.
- [ ] **Google Search Console** — [search.google.com/search-console](https://search.google.com/search-console). Verify domain, submit `https://yourdomain.com/sitemap.xml`.
- [ ] **Bing Webmaster Tools** — same as above but for Bing.
- [ ] **Create Open Graph image** — 1200×630 PNG at `public/og-image.png`. Include logo, tagline, neon colors. Tools: Figma, Canva.
- [ ] **Add real project screenshots** — replace placeholder numbered cards in `PortfolioClient.js` with `next/image` components using real screenshots.

### High priority — do this month

- [ ] **Ask 5 clients for Google reviews** — biggest local SEO lever. Period.
- [ ] **Add Google Analytics 4 or Plausible** — you can't improve what you can't measure.
- [ ] **List on local directories** — JustDial, Sulekha, IndiaMart. Use exact same Name, Address, Phone as on Google Business Profile (NAP consistency matters).
- [ ] **Create a blog section** — even 1 post/month. Topics: "How much does a website cost in Surendranagar", "Shopify vs custom website for Gujarat businesses". These rank and convert.
- [ ] **LinkedIn company page** — add the URL to `SITE.social.linkedin` in site-config.
- [ ] **Instagram business account** — post project reveals, behind-the-scenes.

### Nice to have

- [ ] Update `metadata.verification.google` in `app/layout.js` with your Search Console verification code.
- [ ] Add favicons for different sizes (`apple-touch-icon.png` etc.) in `public/`.
- [ ] Set up email (hello@storemate.in) — looks more professional than Gmail for inquiries. Use Zoho Mail (free) or Google Workspace (paid).

---

## Deployment

### Vercel (recommended)

1. Push code to GitHub.
2. Go to [vercel.com](https://vercel.com), "Add New Project", import the repo.
3. Framework auto-detected. Click **Deploy**.
4. Add custom domain in Vercel → Domains.

### Self-hosted

```bash
npm run build
npm start
# Runs on port 3000. Use PM2 or similar for process management.
```

---

## Performance notes

- **Fonts**: Loaded via `next/font/google` with `display: swap` — no layout shift, no render-block.
- **Images**: Use `next/image` everywhere. It handles lazy loading, AVIF/WebP, and responsive sizes automatically.
- **Animations**: Framer Motion used selectively for impact moments, not decoration. `prefers-reduced-motion` respected in `globals.css`.
- **Bundle**: Client components kept minimal — only the pieces that need interactivity use `"use client"`.

To audit: run Lighthouse on the deployed URL. Target: 95+ on all four metrics.

---

## Customization

### Colors

Edit `tailwind.config.js` under `theme.extend.colors`:

```js
neon: {
  cyan: '#00f0ff',   // Primary accent
  lime: '#c6ff00',   // Secondary accent
  magenta: '#ff00e5' // Tertiary (used sparingly)
}
```

### Fonts

Edit `app/layout.js`. Currently uses **Instrument Serif** (display), **Geist** (body), **JetBrains Mono** (mono). Change via `next/font/google` imports.

### Copy / microcopy

All strings are in the component files. Find and replace directly — no CMS involved.

---

## Known limitations

- **Contact form** sends via WhatsApp deep link, not a backend. This is intentional (no server, no spam, direct to founder). If you want email-based forms, add a [Resend](https://resend.com) or [Formspree](https://formspree.io) integration in `ContactClient.js`.
- **Portfolio filter buttons** are display-only. Implement `useState` filtering when you have more projects.
- **Blog not included** — add `app/blog/` route when you're ready to start content marketing.

---

## Contact

Built by: Arpit Pattani
Email: arpitpattani2004@gmail.com
WhatsApp: +91 99092 83562
