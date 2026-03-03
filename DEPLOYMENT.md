# Deployment & Going Live — Premium Corporate Portfolio Template

This guide covers deploying the template and connecting the contact form.

---

## Deploy to Vercel (recommended)

1. Push your project to **GitHub**, **GitLab**, or **Bitbucket**.
2. Go to [vercel.com](https://vercel.com) and sign in.
3. Click **Add New → Project** and import your repository.
4. Leave build settings as default:
   - **Framework:** Next.js (auto-detected)
   - **Build command:** `npm run build` or leave blank
   - **Output directory:** (leave default)
5. Click **Deploy**. Vercel will build and give you a URL (e.g. `your-project.vercel.app`).
6. In **company_data.js**, set **siteUrl** to your production URL (e.g. `https://your-project.vercel.app` or your custom domain).

**Custom domain:** In the Vercel project → **Settings → Domains**, add your domain and follow the DNS instructions.

---

## Deploy to Netlify

1. Push your project to Git and go to [netlify.com](https://netlify.com).
2. **Add new site → Import an existing project** and connect your repo.
3. Set:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next` (for Next.js standalone) or use Netlify’s Next.js runtime if offered.
4. Deploy. Set **siteUrl** in **company_data.js** to your Netlify URL or custom domain.

*Note: For Next.js on Netlify, ensure the “Next.js” or “Essential Next.js” build plugin is enabled so server routes (e.g. `/api/contact`) work.*

---

## Deploy to other hosts

- **Build:** Run `npm run build` in the project root.
- **Start:** Run `npm start` (serves on port 3000 by default).
- **Environment:** No required env vars for the template out of the box. If you add an email service, set API keys in the host’s environment variables (e.g. `RESEND_API_KEY`) and read them in `src/app/api/contact/route.ts`.

---

## Connecting the contact form

The form POSTs to **`/api/contact`** with: `name`, `company`, `email`, `projectDetails`, and optional `inquiryType`.

### Option A: Email (e.g. Resend, SendGrid)

1. Install a provider, e.g. Resend:
   ```bash
   npm install resend
   ```
2. Get an API key from [resend.com](https://resend.com) and add it to your host as `RESEND_API_KEY`.
3. Edit **`src/app/api/contact/route.ts`**:
   - Read the request body (name, company, email, projectDetails, inquiryType).
   - Call Resend (or SendGrid, etc.) to send an email to your inbox.
   - Return `NextResponse.json({ ok: true })` on success, or an error response with status 400/500.

### Option B: Save to a database or CRM

In **`src/app/api/contact/route.ts`**:

- Parse the POST body.
- Insert into your database or call your CRM’s API.
- Return JSON as above.

### Option C: Third-party form service

- Use a service (e.g. Formspree, Basin, Getform) that provides a form endpoint.
- In **company_data.js**, set **contact.submitEndpoint** to that URL.
- In **ContactForm.tsx**, the form already sends JSON; if the service expects `application/x-www-form-urlencoded` or multipart, you’ll need to adjust the fetch in that component.

---

## Checklist before launch

- [ ] **company_data.js** — companyName, industry, tagline, siteUrl, email updated.
- [ ] **siteUrl** — Set to your live URL (used for SEO and Open Graph).
- [ ] **Contact form** — API route wired to email/CRM or submitEndpoint pointed to your form service.
- [ ] **Legal pages** — Add real content to `/privacy` and `/terms` (see `src/app/privacy/page.tsx` and `src/app/terms/page.tsx`).
- [ ] **Cookie consent** — Keep enabled if you use cookies; set `cookieConsent.enabled: false` if not.
- [ ] **Partner logos** — Replace placeholder partner entries with real logo image paths in `public/` when ready.
