# TSR Starter Template

A TanStack Start + TanStack Router starter template with i18n, OpenAPI codegen, shadcn/ui, and oxc tooling.

## Getting started

```bash
# 1. Rename the project
#    Edit "name" in package.json and "projectName" in .cta.json

# 2. Copy env file
cp .env.example .env

# 3. Install
bun install

# 4. Dev server (port 3000)
bun dev
```

## What to change after cloning

| What | Where |
|------|-------|
| Project name | `package.json` → `"name"`, `.cta.json` → `"projectName"` |
| App title / meta | `src/routes/__root.tsx` — `<title>`, meta tags |
| Environment | `.env` — API URL, OAPI spec URL, site URL |
| API types | `bun run generate:oapi` (after backend is running) |
| Locales | `intlayer.config.ts` — add/remove locales as needed |
| Default locale | `intlayer.config.ts` — change `defaultLocale` |

## Upgrading packages

```bash
# Update all deps to latest
bun update --latest

# Update a single package
bun add <package>@latest

# Check what's outdated
bun outdated
```

## Dev commands (after setup)