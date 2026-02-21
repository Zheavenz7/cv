# Jamal Drenthe — Portfolio / CV

Detailleerde instructies om lokaal te draaien, te bouwen en issues op te lossen.

## Stack
- Vite + React + TypeScript (frontend in `client/`, via `vite.config.ts` met `root: client`)
- Express devserver (`server/index.ts`) op poort 5000 (optioneel tijdens dev)
- TailwindCSS, framer-motion, Radix UI, `wouter` (router)

## Vereisten
- Node.js 18+ (bij voorkeur 20+)
- npm 9+

## Projectstructuur (relevant)
- `client/src/` – frontend code (pages, components, data, hooks)
- `client/src/data/resumeData.ts` – centrale CV/portfolio data
- `client/src/pages/` – pagina's (Home, Projects, CV, About, Contact)
- `client/src/components/` – UI componenten (NavBar, sections, etc.)
- `server/index.ts` – devserver (poort 5000) aangeroepen door `npm run dev`
- `vite.config.ts` – Vite config (root `client`, preview/serve poort 5173)

## Installatie
```bash
npm install
```

## Ontwikkelen
Gebruik idealiter twee terminals: één voor Vite (frontend) en optioneel één voor de Express devserver.

### Frontend (Vite)
```bash
npx vite --host --port 5173 --config vite.config.ts
```
Open daarna http://localhost:5173 (of de proxy link uit je IDE).

### Optioneel: Express devserver (poort 5000)
```bash
npm run dev
```
Houd Vite op 5173 om poortconflict te vermijden.

## Scripts
- `npm run dev` — start Express devserver op 5000
- `npx vite --host --port 5173 --config vite.config.ts` — start Vite frontend
- `npm run build` — bouwt frontend naar `dist/public` en bundelt `server/index.ts` naar `dist/index.js`

## Router
We gebruiken `wouter`. Importeer links zo:
```tsx
import { Link } from 'wouter';
```
Gebruik **niet** `react-router-dom`.

## Troubleshooting
- **502/Bad Gateway in preview**: start Vite op 5173; zorg dat de Express server niet de preview blokkeert. Open direct http://localhost:5173 als de proxy faalt.
- **Port already in use (5000 of 5173)**: stop het proces of kies een andere poort, bijvoorbeeld `--port 5174` voor Vite.
- **Router import errors**: vervang `react-router-dom` imports door `wouter`.
- **Slow/failed install op Windows**: update Node/NPM en herhaal `npm install`.

## Build & output
```bash
npm run build
```
- Frontend: `dist/public`
- Server bundle: `dist/index.js`

## Deployment (basic)
- Serve de inhoud van `dist/public` met een statische host of koppel `dist/index.js` als Node server (Express). Pas poorten/proxy aan naar je hosting omgeving.
