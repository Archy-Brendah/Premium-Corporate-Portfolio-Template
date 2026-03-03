# Push to GitHub and Deploy on Vercel

The project is already a Git repository with an initial commit. Follow these steps to push it to GitHub and deploy on Vercel.

---

## 1. Create a new repository on GitHub

1. Go to [github.com](https://github.com) and sign in.
2. Click **+** (top right) → **New repository**.
3. Choose a **Repository name** (e.g. `premium-corporate-portfolio` or your project name).
4. Set visibility to **Public** (or Private if you have a paid plan and want to keep it private).
5. **Do not** add a README, .gitignore, or license (the project already has these).
6. Click **Create repository**.

---

## 2. Push this project to GitHub

In your terminal, from the **project folder** (Premium Corporate Portfolio Template), run:

```bash
# Add GitHub as the remote (replace YOUR_USERNAME and YOUR_REPO with your GitHub username and repo name)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push the main branch (use main or master depending on your default)
git branch -M main
git push -u origin main
```

**Example:** If your GitHub username is `johndoe` and the repo is `corporate-site`:

```bash
git remote add origin https://github.com/johndoe/corporate-site.git
git branch -M main
git push -u origin main
```

If GitHub asks for login, use a **Personal Access Token** as the password (Settings → Developer settings → Personal access tokens) or sign in with GitHub CLI (`gh auth login`).

---

## 3. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (use **Continue with GitHub**).
2. Click **Add New…** → **Project**.
3. **Import** the repository you just pushed (e.g. `YOUR_USERNAME/YOUR_REPO`).
4. Leave the settings as default:
   - **Framework Preset:** Next.js (auto-detected)
   - **Build Command:** `npm run build` or leave blank
   - **Output Directory:** leave default
5. Click **Deploy**. Vercel will build and give you a URL like `your-project.vercel.app`.
6. After deploy, in **`src/data/company_data.js`** set **siteUrl** to your Vercel URL (or custom domain), e.g. `https://your-project.vercel.app`.

---

## 4. (Optional) Custom domain

In the Vercel project: **Settings** → **Domains** → add your domain and follow the DNS instructions.

---

## 5. Future updates

After you change code or content:

```bash
git add .
git commit -m "Your message"
git push
```

Vercel will automatically redeploy when you push to the connected branch (usually `main`).
