# LA CAFEOTHEQUE — VERCEL DEPLOYMENT GUIDE
**Project by:** Warrior Tech Service  

This project is fully configured for zero-configuration, production-grade deployment on **Vercel**.

---

## Method 1: Deploy with Vercel CLI (Fastest)

Since `vercel` CLI is pre-installed:

1. Open PowerShell in the project directory:
   ```powershell
   cd "e:\LA CAFEOTHEQUE"
   ```

2. Run the Vercel deployment command:
   ```powershell
   vercel
   ```
   - Log in with your Vercel account when prompted.
   - Confirm project root (`./`) and framework preset (`Vite`).
   - A live preview URL will be generated immediately (e.g. `https://la-cafeotheque.vercel.app`).

3. For production release:
   ```powershell
   vercel --prod
   ```

---

## Method 2: Deploy via GitHub / GitLab / Bitbucket

1. Initialize Git and commit the project:
   ```powershell
   git init
   git add .
   git commit -m "Initial release: LA CAFEOTHEQUE premium website experience"
   ```

2. Push to your GitHub repository:
   ```powershell
   git remote add origin https://github.com/your-username/la-cafeotheque.git
   git branch -M main
   git push -u origin main
   ```

3. Go to [Vercel Dashboard](https://vercel.com/dashboard) -> **Add New Project** -> **Import Git Repository**.
4. The build settings are auto-detected:
   - **Framework:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. Click **Deploy**. In under 60 seconds, your website will be live worldwide with SSL and CDN edge caching.

---

## Configuration File Summary

- `vercel.json` has been included in the repository root.
- Handles clean client-side routing (`rewrites` to `index.html`).
- Adds enterprise security headers (`X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`).
