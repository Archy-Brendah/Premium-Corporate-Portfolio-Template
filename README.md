# Premium Corporate Portfolio Template

A **Next.js + Tailwind CSS** corporate portfolio built for **enterprise and big-corporation appeal**: distinctive typography, credibility signals, thought leadership, and a single config file for all content.

**Visual style:** Architectural Clean — pure white, slate grey text, International Blue (#0056B3), subtle grid backgrounds, and refined shadows. Typography: **Plus Jakarta Sans** (headings) + **DM Sans** (body).

---

## For buyers — start here

- **First time?** → **[INSTRUCTIONS_FOR_BUYERS.md](INSTRUCTIONS_FOR_BUYERS.md)** (quick overview and links to all docs).
- **Install and customize content** → **[GETTING_STARTED.md](GETTING_STARTED.md)**.
- **Deploy and connect the form** → **[DEPLOYMENT.md](DEPLOYMENT.md)**.
- **Detailed customization (logo, colors, sections)** → **[CUSTOMIZATION.md](CUSTOMIZATION.md)**.

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Why this template stands out

- **Single source of truth** — All copy, links, and form options live in `src/data/company_data.js`.
- **Enterprise credibility** — Stats bar, testimonials, certifications, and “Trusted by” partner strip.
- **Thought leadership** — Insights section with configurable articles; positions the company as an expert.
- **Corporate contact flow** — Inquiry type dropdown (General, RFP, Partnership, Enterprise); form posts to `/api/contact`.
- **SEO & trust** — JSON-LD Organization schema, Open Graph meta, optional cookie consent bar.
- **Accessibility** — Skip link, focus styles, reduced-motion support, semantic HTML.
- **Mobile-first** — Touch-friendly nav, 16px inputs to avoid iOS zoom, responsive grids.

---

## Customization: `src/data/company_data.js`

Edit this file to control:

| Section | What you can change |
|--------|----------------------|
| **Brand** | `companyName`, `industry`, `tagline`, `siteUrl`, `email`, `foundedYear` |
| **Nav** | Logo text, link labels/hrefs, CTA label and href |
| **Stats** | Metrics bar (e.g. "20+ Years", "Fortune 500", "150+ Projects", "98% Retention") |
| **Services** | Titles, descriptions, icon keys (consulting, strategy, design, development) |
| **Case studies** | Title, category, excerpt, slug, optional industry |
| **Testimonials** | Quote, author, role, company (rotating carousel) |
| **Insights** | Title, excerpt, slug, date, category |
| **Partners** | Names and logo paths (grayscale → color on hover) |
| **Certifications** | e.g. ISO 27001, awards (shown in footer) |
| **Contact** | Form title/subtitle, **inquiry types** (General, RFP, Partnership, Enterprise), field labels/placeholders, submit text, success message, API endpoint |
| **Footer** | Copyright, tagline, legal links, **newsletter** (title, placeholder, show/hide) |
| **Cookie consent** | Message, Accept label, policy link; set `enabled: false` to hide |

---

## Sections (in order)

1. **Sticky Navbar** — Logo, Services, Portfolio, Insights, About, “Request Quote” CTA; shadow on scroll; mobile drawer.
2. **Hero** — “Engineering the Future of [Industry].” + tagline; subtle grid and gradient; primary + secondary CTAs.
3. **Stats bar** — Key metrics (years, Fortune 500, projects, retention) for credibility.
4. **Services** — 4-column grid with icons; hover lift and shadow.
5. **Case studies** — Card gallery; “Read More” → `/case-studies/[slug]`.
6. **Trust bar** — “Trusted by industry leaders”; partner logos (grayscale, color on hover).
7. **Testimonials** — Executive quotes; auto-rotate + dot navigation.
8. **About** — Short narrative driven by company data.
9. **Insights** — Thought leadership cards; “Read more” → `/insights/[slug]`.
10. **Contact form** — Inquiry type, Name, Company, Email, Project details; POST to `/api/contact`.
11. **Footer** — Dark slate; tagline, certifications, newsletter signup, legal links.

---

## Tech

- **Next.js 14** (App Router), **TypeScript**, **Tailwind CSS**
- **Fonts:** Plus Jakarta Sans (display), DM Sans (body) via `next/font/google`
- **SEO:** `metadataBase`, Open Graph, Twitter card, JSON-LD Organization
- **Optional:** Cookie consent (localStorage), skip link, `prefers-reduced-motion` respected

---

## Form handling

The contact form POSTs to `/api/contact` with `name`, `company`, `email`, `projectDetails`, and optional `inquiryType`. The API route validates and returns JSON. Wire it to your email provider (e.g. Resend, SendGrid) or CRM in `src/app/api/contact/route.ts`.

---

## Routes

| Path | Purpose |
|------|--------|
| `/` | Home (all sections) |
| `/#services`, `/#portfolio`, `/#insights`, `/#about`, `/#contact` | Anchor links |
| `/case-studies/[slug]` | Case study detail (content from data or CMS) |
| `/insights/[slug]` | Insight/article detail |
| `/privacy`, `/terms` | Placeholder legal pages |
