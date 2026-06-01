# Jointec Website Instructions

## Project Context

Jointec is a Swedish pallet-machinery engineering company. This repository is a
React, Vite, and Tailwind CSS marketing site with English, Spanish, and Swedish
locales.

Public routes:

- `/about` is the default entry page.
- `/home` is the long-form product landing page.
- `/cases`, `/news`, and `/machines/:slug` are public marketing pages.
- `/internal/*` is a private dashboard and is outside the public-copy workflow.

## Tone

- Write direct, credible industrial copy.
- Prefer precise, plain language over promotional filler.
- Do not invent technical specifications, performance claims, customer stories,
  regulatory claims, or company facts.
- Check `docs/claims-review.md` before adding or changing factual copy.

## Approved Facts

- Founded in 1988.
- CAPE agent territory: `SE · CH · AT`.
- Three own machines.
- Commercial contact: `karl@jointec.se`.

Do not expand these facts without approved source material.

## Brand

- Accent orange: `#F97316` via `brand-accent`.
- Dark slate: `#1f2937` via `brand-dark`.
- Light background: `#f9fafb` via `brand-light`.
- Reuse existing Tailwind tokens and component patterns.

## Internationalization

- All public user-facing copy belongs in:
  - `src/locales/en/translation.json`
  - `src/locales/es/translation.json`
  - `src/locales/sv/translation.json`
- Components must access public copy with `t("key")`.
- Add or edit the same key in all three locale files in the same change.
- Keep product names, personal names, email addresses, phone numbers, language
  codes, and third-party brand names literal where translation would be wrong.

## Focused Changes

- Make one focused change at a time.
- Keep edits scoped to the requested behavior.
- After each change, summarize the result and list touched files.
- Preserve unrelated worktree changes and untracked files.

## Verification

Before changing code:

```sh
npm install
npm run dev
npm run build
```

Before pushing:

```sh
npm run build
```

Fix build errors before opening a pull request.

## Deployment Flow

- Work on a feature branch.
- Push the feature branch and open a pull request.
- Review the Vercel preview URL posted on the pull request.
- Merge only after preview approval.
- Never push directly to `main`; `main` auto-deploys to production.
- Do not use `deploy.sh` for normal changes. It commits all files and pushes
  directly to `main`.
