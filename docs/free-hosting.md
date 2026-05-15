# Free hosting options

## 1. GitHub Pages — frontend only

GitHub Pages is perfect for the static React/Vite frontend. It cannot run the Express + SQLite backend.

Use it when:
- you want a free public portfolio
- you do not need the admin dashboard/contact API live
- or you replace the contact form with email/Netlify Forms/Formspree later

Basic flow:
1. Create repository named `e-eldar.github.io` for the clean URL `https://e-eldar.github.io/`.
2. Push this project to GitHub.
3. Go to repository Settings → Pages → GitHub Actions.
4. Use `.github/workflows/deploy-pages.yml`.
5. Push to `main`.

For a project repository like `portfolio`, change `VITE_BASE` in the workflow to `/portfolio/`.

## 2. Netlify — easiest free static deploy with forms

Netlify is usually the easiest option for a portfolio because it can deploy the React frontend and also provides form handling without a custom server.

This project already includes `netlify.toml` and `_redirects` for React Router.

## 3. Vercel — great for React frontend and serverless functions

Vercel is good for React apps and can run serverless functions, but this exact Express + SQLite backend would need adaptation.

## 4. Full stack with backend

For the full project exactly as it is now, use a VPS or a platform that supports a Node server and persistent storage. GitHub Pages is not enough for Express + SQLite.
