# AGENTS.md — TSR Starter Template

## First-time setup (after cloning / copying)

1. **Rename the project** — update `"name"` in `package.json` and `"projectName"` in `.cta.json` to your project's name.
2. **Update the app title** — change the `<title>` in `src/routes/__root.tsx` and any `meta` tags.
3. **Set environment variables** — copy `.env.example` to `.env` and fill in your values (API URL, OAPI spec URL, site URL).
4. **Install dependencies** — `bun install`
5. **Start dev server** — `bun dev`
6. **Regenerate API types** — once your backend is running, run `bun run generate:oapi` to fetch the OpenAPI spec.

### Upgrading packages

To update all dependencies to their latest versions:

```bash
bun update --latest
```

To update a specific package:

```bash
bun add <package>@latest
```

To check for outdated packages:

```bash
bun outdated
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
| regenerate API types   | `bun run generate:oapi`                     |
| add shadcn component   | `bunx --bun shadcn@latest add <component>`  |
| shadcn docs            | `bunx --bun shadcn@latest docs <component>` |

## CRITICAL — NEVER run these commands

The dev server is **always running**. You must NEVER run `bun dev`, `bun build`, `bun lint`, `bun typecheck`, or any other command. The dev server auto-reloads on saves — just write code and save files. Do not ask to run these commands.

## Project anatomy

- **Framework:** TanStack Start (SSR) + TanStack Router (file-based routing in `src/routes/`)
- **UI:** shadcn/ui with `@base-ui/react` primitives (style: `base-sera`). Components in `src/components/ui/`.
- **Styling:** Tailwind CSS v4 — all theme tokens defined in `src/styles.css`
- **i18n:** Intlayer (`~/intlayer.config.ts`). Locales: ENGLISH, ARABIC. **Default: ARABIC.** URL mode: `prefix-all` (every route is `/{-$locale}/...`).
- **Env vars:** Validated via `@t3-oss/env-core` + `arktype` in `env/client.ts` and `env/dev.ts`
- **API:** OpenAPI typed client (`src/lib/api/oapi-client.ts`) with auto-generated types (`src/lib/api/v1.d.ts`)

## Critical conventions

### Code style (enforced by oxfmt/oxlint)

- **Tabs** for indentation, width 4. No trailing commas.
- **`import type`** for type-only imports (`verbatimModuleSyntax` in tsconfig)
- **`cn()`** from `@/lib/utils` for conditional classes (never manual template ternaries)

### shadcn / styling — always load the shadcn skill first

- **`gap-*` not `space-*`** for spacing
- **`size-*`** when width and height are equal (e.g. `size-10`, not `w-10 h-10`)
- **Semantic color tokens** only (`bg-primary`, `text-muted-foreground`). No raw hex/color values. No manual `dark:` overrides.
- **Base UI patterns:** use `render` prop (not Radix's `asChild`). See `.agents/skills/shadcn/rules/base-vs-radix.md`.
- **Icons:** `@hugeicons/core-free-icons` via `<HugeiconsIcon icon={...} />`. Icons in buttons use `data-icon="inline-start"` / `data-icon="inline-end"`. No sizing classes on icons inside components.
- **Avatar** always needs `AvatarFallback`. **Button** has no `isPending`/`isLoading`.
- **Dialog/Sheet/Drawer** always need a Title (use `className="sr-only"` if hidden).

### i18n — always load the intlayer-\* skills first

- Content files are **co-located `.content.ts`** files using `t({ en: "...", ar: "..." })` from `intlayer`
- Use `useIntlayer()` hook in components, `useLocale()` for locale switching
- For navigation, use `<Link>` from `@/components/localized-link` — it auto-prefixes the locale
- Intlayer compiler generates `.content.ts` output files alongside source; these are auto-handled by the Vite plugin

### SEO — adding SEO to a new route

Always load the intlayer-* skills first (SEO tags are localized via `t({ en, ar })`).

1. Add a key to `src/lib/seo/seo.content.ts` (dictionary key `"seo"`):
   - `title` / `description` — translated via `t({ en: "...", ar: "..." })`
   - `schemaType` — JSON-LD `@type` (default `"WebPage"`); use `"Organization"` for the home page
   - `schemaName` — optional; overrides `schema.name` for brand-level schemas (e.g. `"DAC Construction"`)
2. Wire the route's `head` in its route file (e.g. `src/routes/{-$locale}/X.tsx`):
   ```ts
   import { defaultLocale } from "intlayer";
   import { seoFor } from "@/lib/seo";

   head: ({ params }) => seoFor("routeKey", "/path", params.locale ?? defaultLocale),
   ```
   where `"/path"` is the path **without** the locale prefix (e.g. `"/"`, `"/about"`).
3. `seoFor` automatically emits title/description, canonical, hreflang + `x-default`, Open Graph + Twitter tags (incl. a Takumi-rendered `og:image` at `/og-image`), and a JSON-LD script. No per-route work beyond the dictionary entry.
4. OG images are rendered server-side by `src/routes/og-image.tsx` (Takumi + Tajawal font); the helper just points at it with URL-encoded title/description.

### Routing

- Root `/` redirects to the default locale (`/ar/`)
- Locale prefix: `{-$locale}` path parameter (e.g. `/en/dashboard`, `/ar/dashboard`)
- `validatePrefix()` from intlayer validates locale params; invalid locales → 404
- Route tree is auto-generated (`routeTree.gen.ts`) — do not edit manually

### OpenAPI codegen

- `bun run generate:oapi` fetches the OpenAPI spec from `OAPI_FILE_URL` env var and writes `src/lib/api/v1.d.ts`
- `VITE_API_URL` points to the backend (default `http://127.0.0.1:8000`)

### Component folder per sidebar page

- Each sidebar link in `src/components/app-sidebar.tsx` gets a dedicated folder under `src/components/` for its page components (e.g. `dashboard/`, `appointments/`, `patients/`, `doctors/`, `hr/`, `invoicing/`, `inventory/`, `pharmacy/`, `reports/`, `settings/`).
- Only `src/components/dashboard/` exists today — add folders when building new pages.

### RBAC / permissions — always load the rbac-permissions skill first

- **Roles:** `requireRole(...)` in `beforeLoad` — wrong role → redirect. Always add this first.
- **Permissions:** `requirePermission(...)` in `beforeLoad` — wrong permission → error UI. Always add `errorComponent: permissionErrorComponent`.
- **Component checks:** `can()`, `can.any()`, `can.all()`, `can.atLeast()` from `useAuthorization()`.
- **Admin** bypasses all permission checks automatically.
- New permissions go in `PERMISSIONS` map in `src/lib/auth/permissions.ts`.
- See `.agents/skills/rbac-permissions/SKILL.md` for the full API reference and route mapping.

### Forms — always load the tanstack-form skill first

- **Library:** `@tanstack/react-form` (already installed). DevTools: `@tanstack/react-form-devtools`.
- **Never** use uncontrolled `defaultValue` inputs or raw `useState` for form state. Always use `useForm` + `form.Field`.
- **Form wrapper:** always use a `<form>` element with `onSubmit` that calls `e.preventDefault()`, `e.stopPropagation()`, and `form.handleSubmit()`.
- **Field pattern:** use `form.Field` with the `children` render prop (not the function-as-child shorthand). Always attach `onBlur={field.handleBlur}` to inputs.
- **Select/Switch/ToggleGroup:** connect via `value` + `onValueChange`/`onCheckedChange` calling `field.handleChange()`.
- **Submit button:** always use `form.Subscribe` with a `selector` for `canSubmit`/`isSubmitting` — never subscribe to full state.
- **Reset:** use `form.reset()` on cancel buttons (set `type="button"`).
- **Arrays:** use `mode="array"` on the array field to get `pushValue`, `removeValue`, `setValue`, etc.
- **Validation:** return `undefined` (not `null`/`false`) for valid. Use `onChangeListenTo` for cross-field deps.
- **Type the form:** define an interface for form data and pass it as `useForm<YourFormData>()`.

## Implementation plans

- Store implementation plans as markdown files in `docs/plans/`
- Each plan file should have: a clear goal, implementation phases ordered by dependency, and a list of files changed
- Before starting work on a plan, read the plan file first to understand the full scope
- When adding a new plan, reference each file with its full path and describe exactly what changes are needed (no vague statements)
- After finishing a plan's implementation, mark it complete by adding a `**Status:** Complete` line at the top of the file

## Gotchas

- `.intlayer/` is gitignored (auto-generated). So is `routeTree.gen.ts`.
- Oxfmt sorts Tailwind classes automatically (configured in `.oxfmtrc.json`).
- The formatter is **oxfmt**, not Prettier. Both VS Code and Zed are configured for it.
- Missing UI components currently imported but not added: `Badge`, `Card`, `Table`. Add via `bunx --bun shadcn@latest add badge card table`.

---

# Ponytail, lazy senior dev mode

You are a lazy senior developer. Lazy means efficient, not careless. The best code is the code never written.

Before writing any code, stop at the first rung that holds:

1. Does this need to be built at all? (YAGNI)
2. Does it already exist in this codebase? Reuse the helper, util, or pattern that's already here, don't re-write it.
3. Does the standard library already do this? Use it.
4. Does a native platform feature cover it? Use it.
5. Does an already-installed dependency solve it? Use it.
6. Can this be one line? Make it one line.
7. Only then: write the minimum code that works.

The ladder runs after you understand the problem, not instead of it: read the task and the code it touches, trace the real flow end to end, then climb.

Bug fix = root cause, not symptom: a report names a symptom. Grep every caller of the function you touch and fix the shared function once — one guard there is a smaller diff than one per caller, and patching only the path the ticket names leaves a sibling caller still broken.

Rules:

- No abstractions that weren't explicitly requested.
- No new dependency if it can be avoided.
- No boilerplate nobody asked for.
- Deletion over addition. Boring over clever. Fewest files possible.
- Shortest working diff wins, but only once you understand the problem. The smallest change in the wrong place isn't lazy, it's a second bug.
- Question complex requests: "Do you actually need X, or does Y cover it?"
- Pick the edge-case-correct option when two stdlib approaches are the same size, lazy means less code, not the flimsier algorithm.
- Mark deliberate simplifications that cut a real corner with a known ceiling (global lock, O(n²) scan, naive heuristic) with a `ponytail:` comment naming the ceiling and upgrade path.

Not lazy about: understanding the problem (read it fully and trace the real flow before picking a rung, a small diff you don't understand is just laziness dressed up as efficiency), input validation at trust boundaries, error handling that prevents data loss, security, accessibility, the calibration real hardware needs (the platform is never the spec ideal, a clock drifts, a sensor reads off), anything explicitly requested. Lazy code without its check is unfinished: non-trivial logic leaves ONE runnable check behind, the smallest thing that fails if the logic breaks (an assert-based demo/self-check or one small test file; no frameworks, no fixtures). Trivial one-liners need no test.
