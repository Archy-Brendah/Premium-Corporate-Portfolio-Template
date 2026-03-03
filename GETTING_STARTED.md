# Getting Started — Premium Corporate Portfolio Template

Thank you for your purchase. Follow these steps to run the template locally and prepare it for your brand.

---

## 1. Prerequisites

- **Node.js** 18.x or newer ([nodejs.org](https://nodejs.org))
- A code editor (e.g. VS Code, Cursor)

---

## 2. Install and run locally

```bash
# Open the project folder in your terminal, then:

npm install
npm run dev
```

Open **http://localhost:3000** in your browser. You should see the full site with placeholder content.

---

## 3. Customize your content (one file)

Almost everything is controlled by a single file:

**`src/data/company_data.js`**

Open it and edit:

- **companyName** — Your business name
- **industry** — The word that appears in the hero: “Engineering the Future of **[Industry]**.”
- **tagline** — Short tagline under the hero
- **siteUrl** — Your live site URL (e.g. `https://yourcompany.com`) for SEO
- **email** — Contact email used in SEO/schema
- **nav** — Menu labels and links (Services, Portfolio, Insights, About, Request Quote)
- **stats** — The four metrics (e.g. “20+”, “Years in business”)
- **services** — The four service cards (title, description, icon)
- **caseStudies** — Portfolio items (title, category, excerpt, slug)
- **testimonials** — Client quotes (quote, author, role, company)
- **insights** — Thought leadership articles (title, excerpt, slug, date, category)
- **partners** — “Trusted by” names (replace placeholder boxes with logo image paths when ready)
- **certifications** — e.g. ISO, awards (shown in footer)
- **contact** — Form title, inquiry types, field labels, success message
- **footer** — Copyright, tagline, newsletter text, legal links
- **cookieConsent** — Message and “Accept” label; set `enabled: false` to hide the bar

Save the file; the dev server will reload automatically.

---

## 4. Build for production

When you’re ready to deploy:

```bash
npm run build
npm start
```

Use `npm start` to run the built site locally, or point your host to the output of `npm run build` (see **DEPLOYMENT.md**).

---

## 5. Next steps

- **Add your branding** — Replace logo text in `company_data.js`; add a logo image in the Navbar if needed (see README).
- **Add real images** — Put case study images in `public/` and reference them in `company_data.js` (e.g. `/case-1.jpg`).
- **Connect the contact form** — See **DEPLOYMENT.md** for wiring the form to email or a CRM.
- **Deploy** — See **DEPLOYMENT.md** for Vercel, Netlify, and other hosts.

For full feature list and file structure, see **README.md**.
