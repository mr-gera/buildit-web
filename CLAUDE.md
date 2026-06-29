# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project context

**eBud** (package `ebud-web`) is the public **landing page / product preview** for a B2B construction & renovation project-management product. The product itself is "In Development" — this site is informational only. **By design there are no contact, lead, sign-in, or registration forms**, and the dashboard does not exist yet. Don't add lead-capture or auth flows unless explicitly asked.

The repository is deliberately structured as a full frontend app so it can later grow into the real dashboard (projects, members, works, photos, analytics) **without being rewritten**. A large amount of code (`src/features/*`, `src/lib/api/*`, dashboard routes) is scaffolding that is intentionally *not* wired into the landing page yet — see "Scaffolding vs. live" below before assuming code is dead or should be deleted.

## Commands

```bash
npm run dev        # Vite dev server
npm run build      # tsc -b (typecheck) + vite build -> dist/
npm run preview    # serve the production build
npm run lint       # ESLint over the repo
npm run typecheck  # tsc --noEmit
```

There is **no test framework** configured. `npm run build` runs the project-reference typecheck (`tsc -b`) before bundling, so a green build implies types pass. TypeScript is `strict` with `noUnusedLocals`/`noUnusedParameters` on (see `tsconfig.app.json`) — unused imports/vars are hard errors, not warnings.

## Architecture

- **Stack:** React 18 + TypeScript + Vite, Tailwind CSS, React Router v6 (`createBrowserRouter`), TanStack Query, Axios, Zod + React Hook Form, lucide-react icons.
- **Import alias:** `@/` → `src/` (configured in both `vite.config.ts` and `tsconfig.app.json` — keep them in sync).
- **Entry chain:** `src/main.tsx` → `src/app/App.tsx` (wraps `QueryProvider` + `RouterProvider`) → `src/app/router.tsx`.

### Content-driven landing pages
The landing is **data-driven**, but copy and structure are deliberately separated:
- `src/data/landing.ts` holds only **language-neutral structure** — icons, accent colors, and screenshot base names (e.g. `problemCardsMeta`, `featureScreensMeta`). No text.
- All **copy** lives in the per-locale translation files under `src/i18n/messages/` (`en.ts`, `ua.ts`, `cr.ts`).
- `useLanding()` (`src/i18n/useLanding.ts`) zips the structure with the active locale's copy (by array index) and localized screenshot paths into ready-to-render arrays.

Components in `src/components/landing/*` call `useLanding()` for merged arrays and `useI18n()` for standalone strings; `LandingPage.tsx` just composes the sections in order. To change wording, edit the message files (keep all three in sync — the `Messages` type enforces shape). To add/remove a card, update both the `*Meta` array in `landing.ts` and the matching array in every message file (same order).

### Internationalization (i18n)
Custom, dependency-free i18n (no i18next). Locales are `en | ua | cr` — codes intentionally match the screenshot suffixes in `public/screens/` so one code drives both UI language and which screenshots show.
- `src/i18n/types.ts` — `Locale`, `LocaleOption`, and the `Messages` shape every locale must satisfy.
- `src/i18n/config.ts` — locale registry, `messages` record, `localeOptions` (switcher menu), `LOCALE_STORAGE_KEY`, and `screenSrc(base, locale)` → `/screens/<base>-<locale>.png`.
- `src/i18n/context.tsx` — `LanguageProvider` (wraps the app in `App.tsx`, above `QueryProvider`). Initial locale: localStorage → browser language → `defaultLocale` (`en`). Persists choice and syncs `<html lang>` (mapped to BCP-47: `ua`→`uk`, `cr`→`hr`).
- `src/i18n/useI18n.ts` — the context + `useI18n()` hook. **Kept separate from `context.tsx` on purpose** so the provider file only exports a component (react-refresh lint rule). Components import `useI18n` from here, not from `context`.
- `LanguageSwitcher` (`src/components/layout/LanguageSwitcher.tsx`) is the upper-right dropdown in the `Header`.
- `navigation.ts` entries carry a `key` (not a label); Header/Footer resolve labels via `t.nav[key]` / `t.footer.links[key]`.

### Accent color system
Sections use a small `AccentColor` token set (`orange | green | red | purple | navy`) defined in `src/data/landing.ts`. `src/lib/utils/accent.ts` maps each token to Tailwind classes (`accentChip`). Brand colors, shadows (`card`, `phone`), and `max-w-container` (1200px) are custom tokens in `tailwind.config.ts`. Use these tokens rather than raw hex values. Join classes with `cn()` from `src/lib/utils/cn.ts`.

### Screenshots & PhoneMockup
App screenshots live in `public/screens/` and are rendered inside `PhoneMockup`. Filenames are conventional (e.g. `projects-en.png`, `analytics-en.png`; `-ua` variants also exist) — see `public/screens/README.md`. `PhoneMockup` falls back to a CSS placeholder when a file is missing, so a missing image never breaks the page. Swap a screenshot by replacing the same-named file; no code change needed.

## Scaffolding vs. live (important)
The following exist as a blueprint for the future dashboard and are **not** used by the landing page. Preserve them when editing:
- **`src/app/router.tsx`** — only `/` and `*` (404) are active; `/login`, `/app/projects[...]` routes are commented out as a documented blueprint.
- **`src/lib/api/apiClient.ts`** — Axios instance with Sanctum bearer-token request interceptor (token in `localStorage` under `ebud.auth.token`) and a 401 response-interceptor placeholder. Not imported by any live page.
- **`src/lib/api/endpoints.ts`** — central path registry mirroring the Laravel API. No `register` endpoint by design.
- **`src/features/{auth,projects,works,members,analytics}/`** — domain `types.ts` + `api/*.ts` functions. Roles are `owner | brigadier | worker`; work-status lifecycle is `created → in_progress → waiting_for_approval → done | rejected | paused`. These mirror the Laravel API — keep them aligned with it.

## Environment & backend
Env vars are read via `import.meta.env` and centralized in `src/config/env.ts`, which provides fallbacks so missing vars never crash the app. Copy `.env.example` to `.env` to override. Keys: `VITE_APP_NAME`, `VITE_API_BASE_URL` (default `https://stage.build-it-app.uk/api`), `VITE_APP_ENV` (`development | staging | production`). The backend is a Laravel API using Sanctum bearer-token auth.

## Deployment
`deploy-landing.sh` is a server-side script (runs on the host at `/opt/buildit/buildit-web`): it pulls `main`, installs, typechecks, lints, builds, then `rsync`s `dist/` to `/opt/buildit/ebud-landing` and serves it via an nginx Docker container (`compose.full.yaml`) at `https://build-it-app.uk`. It is not meant to run on a dev machine.
