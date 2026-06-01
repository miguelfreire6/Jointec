# AGENTS.md — Jointec website

Standing instructions for AI agents (Codex, Claude, etc.) working in this repo.

You are helping build and maintain the **Jointec** website — a B2B marketing/catalog
site for a Swedish pallet-machinery company. Live at <https://jointec.vercel.app>.

## About the business (get the tone right)

Jointec designs and manufactures pallet machinery in Sweden (founded **1988**) and is
the **exclusive agent for CAPE machinery in Scandinavia, Switzerland & Austria**. The
audience is industrial buyers — pallet manufacturers, recyclers, sawmills. The site
must read like a credible 38-year engineering house, not a flashy startup. Tone:
precise, confident, understated, technical-but-clear. **Never overpromise.**

The three own machines are: **Klotsproduktionslinje** (block extruder),
**Plastning Nonstop** (continuous wrapper), **Topfoil Pallet** (top-foil applicator).

## Stack

React 18 · Vite · Tailwind CSS · react-i18next · react-router-dom v7 · Node 24.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # MUST pass before any push
```

## Repo map

| Path | What |
|---|---|
| `src/main.jsx` | Routes: `/`, `/about`, `/cases`, `/news`, `/machines/:slug`, `/internal/*` |
| `src/App.jsx` | Homepage section order |
| `src/components/*` | Navbar, Hero, About, Machines, CapeAgent, Services, Footer, PhotoStrip, video sections |
| `src/pages/*` | About, Cases, News, Machine (detail), Internal (login/dashboard) |
| `src/data/machineDetails.js` | Machine spec/gallery data |
| `src/locales/{en,es,sv}/translation.json` | **All site copy lives here** |
| `public/images/*.webp` | All images; referenced as `/images/<name>.webp` |

## Critical rules — do not violate

1. **Never hardcode user-facing text in components.** All copy comes from the locale
   JSON files via the `t("some.key")` hook (`useTranslation` from react-i18next).
2. **When you add or change ANY copy, update ALL THREE locales** — `en`, `es`, and
   `sv` — keeping their key structure identical.
   ⚠️ Known gap: `casesPage` / `newsPage` / `aboutPage` keys currently exist only in
   `en`, so those pages fall back to English in ES/SV. Add the ES/SV keys when you
   touch those pages.
3. **Use Tailwind classes and the existing brand tokens.** Brand colors:
   `brand-accent` = `#F97316` (orange), `brand-dark` = `#1f2937`,
   `brand-light` = `#f9fafb`. Match the existing visual style; don't introduce a new
   design system.
4. **Don't invent technical specs.** The site deliberately uses "indicative figures"
   caveats. Keep factual claims accurate: founded 1988, CAPE territory SE·CH·AT,
   3 own machines, Gyllsjö Träindustri reference installation, Siemens SIMATIC HMI,
   contact `karl@jointec.se`.
5. **Keep changes small and focused.** Run `npm run build` and fix any error before
   pushing.

## Deploy

The Vercel project is **git-connected: pushing to `main` auto-deploys to PRODUCTION.**
Prefer working on a **feature branch and opening a Pull Request** — Vercel posts a
preview URL on the PR so changes can be reviewed before they go live. Only merge to
`main` when the change is confirmed good.

(`npm run ship "msg"` is a shortcut that commits everything and pushes straight to
`main` → instant production deploy. Use deliberately.)

## Working style

When given a task: briefly state your plan, make the edits, keep all three locales in
sync, run the build, then summarize what changed and which files.
