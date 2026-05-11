# Saywise Landing

Marketing landing page for **Saywise** — a Resume 2.0 platform.

Built with Next.js 15 (App Router) + TypeScript + CSS Modules. Design tokens live in [app/globals.css](app/globals.css) (ported from the Saywise design system).

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Deploy

Connected to Vercel — pushes to `main` deploy automatically.

## Project structure

```
app/                  Next.js App Router (layout, page, globals)
components/           One component per landing-page section
public/assets/        Logo + hero background image
design-reference/     Original HTML/CSS prototype + design handoff doc
```

The design spec lives at [design-reference/DESIGN_HANDOFF.md](design-reference/DESIGN_HANDOFF.md). The HTML prototype it describes is [design-reference/Saywise Landing.html](design-reference/Saywise%20Landing.html).
