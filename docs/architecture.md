# Architecture

The project is split into frontend and backend so it can grow without becoming one huge file.

## Frontend

- `React + Vite` for fast development
- `Tailwind CSS` for maintainable styling
- `framer-motion` for animation primitives
- `lucide-react` for icons
- `react-router-dom` for pages
- `LanguageContext` for multilingual content

## Backend

- `Express` REST API
- `SQLite` database
- `JWT` admin authentication
- `bcryptjs` password hashing
- `helmet`, `cors`, `rate-limit`, `validator`

## Why SQLite?

For a personal portfolio and contact/admin dashboard, SQLite is simple and reliable. The schema can later be migrated to MySQL/PostgreSQL if the project grows.

## Scalability choices

- Data is separated from components in `frontend/src/data`.
- Sections are split into reusable components.
- React Bits inspired effects are isolated in `frontend/src/components/reactbits`.
- API access is centralized in `frontend/src/api/client.js`.
- Backend routes are split by feature.
