# MaazDevWorks Portfolio

A premium, responsive developer portfolio built with React, Vite, JavaScript, and CSS.

## Local development

```bash
npm install
npm run dev
```

Create a production build with `npm run build` and preview it with `npm run preview`.

## Before deployment

Replace `https://YOUR-FINAL-DOMAIN.com/` in these files with the real Vercel or custom domain:

- `index.html` (canonical and Open Graph URL)
- `public/robots.txt`
- `public/sitemap.xml`

Project cards are managed in `src/data/projects.js`. Add approved screenshots to `src/assets/`, import them in that data file, and add verified links only when available.

## Free Vercel deployment

1. Push this project to a GitHub repository.
2. Sign in at [vercel.com](https://vercel.com) and choose **Add New → Project**.
3. Import the repository. Vercel detects Vite automatically.
4. Confirm build command `npm run build` and output directory `dist`.
5. Deploy, then replace the SEO domain placeholders with the assigned Vercel domain and redeploy.

No backend, database, paid API, or environment variable is required.
