**Status:** Complete

# SEO helper with translated tags + Takumi OG images

## Goal

A reusable `seoFor()` helper that returns per-route, locale-translated `<head>` content (title, description, canonical, hreflang, Open Graph/Twitter tags with a Takumi-rendered `og:image`, and JSON-LD) for every route.

## Phases

1. **Content dictionary** — per-route `title`/`description` (`t({ en, ar })`) + `schemaType`/`schemaName`.
2. **Helper** — `seoFor()` builds meta/links/scripts.
3. **OG image route** — Takumi `ImageResponse` with Tajawal font.
4. **Wire routes** — `head` on each localized page.
5. **Docs** — AGENTS.md + plan file.

## Files changed

- `src/lib/seo/seo.content.ts` (new) — dictionary key `"seo"`, `home` entry.
- `src/lib/seo.ts` (new) — `seoFor(key, path, locale)`.
- `src/routes/og-image.tsx` (new) — Takumi server route, reads `title`/`description` params, Tajawal via `node:fs`.
- `src/routes/{-$locale}/index.tsx` (edit) — `head: ({ params }) => seoFor("home", "/", params.locale ?? defaultLocale)`.
- `AGENTS.md` (edit) — "SEO — adding SEO to a new route" section.
