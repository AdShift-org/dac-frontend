# DAC Construction — Frontend

Marketing site for DAC Construction, built with TanStack Start + TanStack Router. Serves the company's public web presence in English and Arabic (Arabic is the default locale), with localized SEO and Open Graph images.

## Stack

- **Framework:** TanStack Start (SSR) + TanStack Router (file-based routing)
- **UI:** shadcn/ui on `@base-ui/react` primitives, Tailwind CSS v4
- **i18n:** Intlayer (EN / AR, default AR, URL-prefixed routes like `/en/...`, `/ar/...`)
- **SEO:** localized meta, canonical, hreflang, OG/Twitter tags, JSON-LD, server-rendered OG images
- **Data:** TanStack Query, OpenAPI-typed client (`src/lib/api/v1.d.ts`)
- **Tooling:** Bun, oxc (oxlint / oxfmt)

## Getting started

```bash
# 1. Copy env file
cp .env.example .env

# 2. Install
bun install

# 3. Dev server (port 3000)
bun dev
```

## Dev commands

| Action                 | Command                                     |
| ---------------------- | ------------------------------------------- |
| dev server (port 3000) | `bun dev`                                   |
| production build       | `bun build`                                 |
| lint (oxlint)          | `bun lint`                                  |
| format (oxfmt)         | `bun format`                                |
| typecheck              | `bun typecheck`                             |
| test (vitest)          | `bun test`                                  |
| add shadcn component   | `bunx --bun shadcn@latest add <component>`  |

## Regenerating API types

Run once your backend is up and `OAPI_FILE_URL` is set in `.env`:

```bash
bun run generate:oapi
```

## Upgrading packages

```bash
bun update --latest   # all deps
bun add <package>@latest
bun outdated
```

## Project layout

- `src/routes/` — file-based routes (locale-prefixed under `{-$locale}/`)
- `src/components/` — page components
- `src/lib/` — API client, SEO helpers
- `src/styles.css` — Tailwind v4 theme tokens
- `src/routes/og-image.tsx` — server-rendered Open Graph image generator
