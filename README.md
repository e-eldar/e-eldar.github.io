# Eldar Portfolio Premium v4

Professional portfolio website for **Eldar Jusić** built around scalability, maintainability, authentication, APIs, animated UI and a stronger dark/glow visual identity.

This version keeps the best parts of the original static site — dark theme, glow cards, terminal style, gradient typography, flags/languages — but restructures everything into a maintainable full-stack project:

- React + Vite
- Tailwind CSS
- React Bits inspired animated components/backgrounds
- Express API
- SQLite database
- JWT authentication for admin dashboard
- Contact form with validation and persistent storage
- Multilingual content: Slovenian, English, Bosnian, German, Italian
- GitHub Pages / Netlify static deploy helpers

## What was fixed in v4

- Rebuilt the hover system so cards/buttons no longer jump or look broken.
- Replaced the overloaded background layers with one cleaner React Bits-style animated backdrop.
- Redesigned the Skills/Stack section with icons, skill chips, levels and a cleaner stack visual.
- Redesigned the Contact section with stronger layout, better cards and a more polished form.
- Removed the harsh line between menu/header and contact content.
- Checked translation keys used in the React components.
- Added GitHub Pages workflow and Netlify config for free static hosting.

## Run locally

```bash
npm run install:all
npm run dev
```

Frontend:

```bash
http://localhost:5173
```

Backend:

```bash
http://localhost:3001
```

## Admin login

Seed the admin user:

```bash
cd backend
cp .env.example .env
npm run seed:admin
npm run dev
```

Default development credentials:

```txt
username: admin
password: change-me-now
```

Change them before production.

## Static build

```bash
npm --prefix frontend run build
```

Output:

```txt
frontend/dist
```

## Free hosting

See:

```txt
docs/free-hosting.md
```

Important: GitHub Pages can host the React frontend for free, but it cannot run the Express + SQLite backend. For the full backend/contact/admin version, use a Node hosting option or VPS.
