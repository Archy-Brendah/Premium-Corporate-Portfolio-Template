# Customization Guide — Premium Corporate Portfolio Template

Detailed reference for customizing content, styling, and behavior. Almost all content is in **`src/data/company_data.js`**.

---

## Content (company_data.js)

### Brand & SEO

| Key | Example | Where it’s used |
|-----|---------|------------------|
| `companyName` | `"Acme Corp"` | Hero, About, footer, page title, JSON-LD |
| `industry` | `"Engineering"` | Hero: “Engineering the Future of **Engineering**.” |
| `tagline` | `"Professional solutions…"` | Hero, About, meta description |
| `siteUrl` | `"https://acme.com"` | Open Graph, JSON-LD, canonical |
| `email` | `"contact@acme.com"` | JSON-LD schema |
| `foundedYear` | `"2004"` | JSON-LD schema |

### Navigation (nav)

- **logoText** — Text shown in the top-left (navbar). To use a logo image instead, you’ll need to edit `src/components/Navbar.tsx` and add an `<Image>` or `<img>`.
- **links** — Array of `{ label, href }`. Use `#section-id` for same-page anchors (e.g. `#services`, `#contact`).
- **ctaLabel** / **ctaHref** — Main button in navbar and hero (e.g. “Request Quote” → `#contact`).

### Stats bar (stats)

Array of `{ value, label }`, e.g.:

- `{ value: "20+", label: "Years in business" }`
- `{ value: "Fortune 500", label: "Trusted by leaders" }`

Show 2–4 items. To hide the bar, set `stats: []` in company_data.js and ensure the component handles empty arrays (it does).

### Services (services)

Array of objects:

- **id** — Unique key (e.g. `"consulting"`).
- **title** — Card title.
- **description** — Short paragraph.
- **icon** — One of: `"consulting"` | `"strategy"` | `"design"` | `"development"`. Icons are defined in `src/components/ServiceIcon.tsx`; you can add more icons there and new keys here.

### Case studies (caseStudies)

Array of objects:

- **id** — Unique number or string.
- **title** — Project name.
- **category** — e.g. “Consulting & Strategy”.
- **excerpt** — Short summary (1–2 sentences).
- **slug** — URL segment: `/case-studies/[slug]` (e.g. `"digital-transformation"`).
- **readMoreLabel** — Button text (e.g. “Read More”).
- **image** — Optional; path under `public/` (e.g. `"/case-1.jpg"`). To show it, uncomment/add the Image component in `src/components/CaseStudies.tsx` and use `study.image`.
- **industry** — Optional; for filtering or display.

Detail pages are at **`src/app/case-studies/[slug]/page.tsx`**. Replace the placeholder content with your real case study body (or pull from a CMS).

### Testimonials (testimonials)

Array of:

- **quote** — The quote text.
- **author** — Full name.
- **role** — Job title.
- **company** — Company name.

If you have only one, the dots won’t show; rotation still works when you add more.

### Insights (insights)

Array of:

- **id** — Unique number.
- **title** — Article title.
- **excerpt** — Short summary.
- **slug** — URL: `/insights/[slug]`.
- **date** — e.g. `"2025-02-15"` (displayed as formatted date).
- **category** — e.g. “Strategy”.

Detail pages: **`src/app/insights/[slug]/page.tsx`**. Replace placeholder with real article content or CMS.

### Partners (partners)

Array of `{ name, logo }`. **name** is used for alt/title. **logo** is the image path (e.g. `"/partners/acme.svg"`). Put files in **`public/`** and reference as `"/partners/acme.svg"`. The TrustBar shows a styled box when no image is present; when you add real paths and use `<Image>` or `<img>` in `TrustBar.tsx`, logos will show (grayscale by default, color on hover).

### Certifications (certifications)

Array of `{ name, title }`, e.g. `{ name: "ISO 27001", title: "Information Security" }`. Shown as small badges in the footer. Use an empty array to hide.

### Contact form (contact)

- **formTitle** / **formSubtitle** — Heading and subtext above the form.
- **inquiryTypes** — Options for the dropdown. First option usually has `value: ""` and a label like “Select inquiry type”. Add entries like `{ value: "rfp", label: "RFP / Proposal request" }`.
- **fields** — Labels and placeholders for name, company, email, projectDetails. Each can have **required: true/false**.
- **submitLabel** — Button text (e.g. “Send request”).
- **successMessage** — Shown after successful submit.
- **submitEndpoint** — API path (e.g. `"/api/contact"`) or full URL to a third-party form endpoint.

### Footer (footer)

- **copyright** — e.g. “© 2025 Your Company. All rights reserved.”
- **tagline** — Short line under the company name in the footer.
- **legalLinks** — e.g. `{ label: "Privacy Policy", href: "/privacy" }`.
- **showNewsletter** — `true` or `false`. When true, the newsletter block is shown.
- **newsletterTitle** / **newsletterPlaceholder** — Text for the newsletter section. The “Subscribe” button does not send anywhere by default; you’d wire it in `Footer.tsx` to your email provider or API.

### Cookie consent (cookieConsent)

- **enabled** — `true` or `false`. When false, the bar is hidden.
- **message** — Main text (can include “Privacy Policy” in the copy).
- **acceptLabel** — Button text (e.g. “Accept”).
- **policyLabel** / **policyHref** — Link text and URL (e.g. “Privacy Policy”, “/privacy”).

---

## Styling (colors and fonts)

- **Primary accent:** International Blue `#0056B3` (links, buttons, focus). To change globally, search for `#0056B3` and `#004494` in the project and replace, or add a CSS variable in **`src/app/globals.css`** and use it in Tailwind (e.g. extend `colors` in **tailwind.config.ts**).
- **Fonts:** Set in **`src/app/layout.tsx`**: Plus Jakarta Sans (display) and DM Sans (body). To swap fonts, replace the imports from `next/font/google` and the `variable` class names; then update **tailwind.config.ts** if you use custom `--font-*` variables.
- **Spacing/shadows:** **tailwind.config.ts** extends `boxShadow` (e.g. `shadow-card`, `shadow-elite`) and `spacing`. Adjust there for site-wide tweaks.

---

## Adding a logo image

1. Put your logo file in **`public/`** (e.g. `public/logo.svg`).
2. Open **`src/components/Navbar.tsx`**.
3. Find the `<Link href="/">` that wraps `{nav.logoText}`.
4. Add an image inside the link, e.g. `<Image src="/logo.svg" alt={nav.logoText} width={140} height={36} />`, and optionally hide the text with a class or conditional so only the image shows on desktop.

---

## Adding real partner logos

1. Add logo files under **`public/`** (e.g. `public/partners/client-a.svg`).
2. In **company_data.js**, set each partner’s **logo** to that path (e.g. `"/partners/client-a.svg"`).
3. In **`src/components/TrustBar.tsx`**, replace the placeholder `<div>` with Next.js `<Image>` or `<img>` using `partner.logo`, with appropriate width/height and `alt={partner.name}`.

---

## Legal pages (Privacy, Terms)

- **Privacy:** Edit **`src/app/privacy/page.tsx`** and replace the placeholder with your privacy policy text (or fetch from a CMS).
- **Terms:** Edit **`src/app/terms/page.tsx`** for your terms of service.

Keep the “Back to home” link if you want; update or remove as needed.

---

## Troubleshooting

- **Form doesn’t submit:** Check that **contact.submitEndpoint** is correct and the API route or external URL is reachable. Open DevTools → Network and inspect the POST request and response.
- **Build errors:** Run `npm run build` locally. Fix any TypeScript or ESLint errors; ensure **company_data.js** has no syntax errors (matching brackets, commas).
- **Styles not updating:** Restart the dev server (`npm run dev`). If you changed Tailwind config, restart is required.
- **Cookie bar won’t go away:** It’s stored in `localStorage` under the key `corporate-portfolio-cookie-consent`. Clear site data for localhost or set `cookieConsent.enabled: false` to hide it.

For deployment and form wiring, see **DEPLOYMENT.md**. For setup and first run, see **GETTING_STARTED.md**.
