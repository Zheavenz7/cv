# Jamal Drenthe — Portfolio & CV

Personal portfolio and interactive CV built with React, TypeScript and Vite. Features a full EN/NL language toggle, role-based CV view, project showcase, and a ⌘K global search command.

**Live:** [jamaldrenthe.com](https://jamaldrenthe.com)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite 5 |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| UI components | Radix UI · shadcn/ui |
| Routing | Wouter |
| i18n | i18next + react-i18next |
| Server | Express (dev proxy) |
| Icons | Font Awesome |

---

## Project Structure

```
cv/
├── client/
│   ├── public/               # Static assets (logos, favicon)
│   └── src/
│       ├── assets/           # Images, logos
│       ├── components/       # Reusable UI components
│       │   ├── NavBar.tsx
│       │   ├── HeroSection.tsx
│       │   ├── AboutSection.tsx
│       │   ├── ExperienceSection.tsx
│       │   ├── ProjectsSection.tsx
│       │   ├── ContactSection.tsx
│       │   ├── Footer.tsx
│       │   └── SearchCommand.tsx
│       ├── data/
│       │   └── resumeData.ts # Single source of truth for all CV/portfolio data
│       ├── hooks/            # Custom React hooks
│       ├── pages/            # Route-level pages
│       │   ├── Home.tsx
│       │   ├── About.tsx
│       │   ├── CV.tsx
│       │   ├── Projects.tsx
│       │   ├── Services.tsx
│       │   └── Contact.tsx
│       ├── i18n.ts           # EN/NL translations
│       ├── App.tsx           # Router + layout
│       └── index.css         # Global styles + Tailwind
├── server/
│   ├── index.ts              # Express dev server (port 5000)
│   └── routes.ts
├── shared/
│   └── schema.ts
├── vite.config.ts
├── tailwind.config.ts
└── package.json
```

---

## Getting Started

### Requirements

- Node.js 18+ (20+ recommended)
- npm 9+

### Install

```bash
npm install
```

### Run (dev)

```bash
npm run dev
```

Opens on `http://localhost:5000` (Express + Vite middleware combined).

### Build

```bash
npm run build
```

Output:
- Frontend → `dist/public`
- Server bundle → `dist/index.js`

---

## Key Features

- **EN/NL toggle** — full language switch via i18next; all pages and components are translated
- **Role-based CV** — 11 switchable role views (MVP Architect, Business Developer, Full Stack Developer, AI/Automation Engineer, etc.), each with a tailored summary, highlights, core skills and relevant projects
- **⌘K Search** — global fuzzy search across skills, projects and experience (Ctrl+K on Windows)
- **Project showcase** — interactive cards with logos, tech stack badges, year labels and live/source links
- **Glassmorphism UI** — iOS Liquid Glass aesthetic with frosted glass panels and Framer Motion animations
- **Scroll progress bar** — live reading progress indicator in the navbar

---

## Routing

Uses [`wouter`](https://github.com/molefrog/wouter) — **not** `react-router-dom`.

```tsx
import { Link, useLocation } from 'wouter';
```

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/cv` | CV |
| `/projects` | Projects |
| `/services` | Services |
| `/contact` | Contact |

---

## Data

All CV and portfolio content lives in `client/src/data/resumeData.ts`:

- Personal info (name, email, location, languages, soft skills)
- Work experience (title, company, period, tech tags)
- Projects (title, description, tech stack, demo/source links)
- Detailed skill categories and tool groups

All UI text and labels are managed in `client/src/i18n.ts`.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Express + Vite on port 5000 |
| `npm run build` | Production build |
| `npm run check` | TypeScript type check |

---

## Troubleshooting

| Issue | Fix |
|---|---|
| `EADDRINUSE :5000` | Another process is using the port — kill it or restart |
| Router import errors | Replace any `react-router-dom` imports with `wouter` |
| ⌘K not responding | Ensure `SearchCommand` is mounted in `App.tsx` and `NavBar` receives the `onSearchOpen` prop |
| Slow install on Windows | Update Node/npm and re-run `npm install` |

---

## Deployment

Serve the contents of `dist/public` with any static host (Netlify, Vercel, etc.), or run `dist/index.js` as a Node/Express server. Adjust port and proxy settings to match your hosting environment.
