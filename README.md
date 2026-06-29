# eBud — Landing page / product preview

**eBud** is a B2B construction & renovation project-management product. This
repository is the **public landing page** (informational product preview),
built on a clean, scalable frontend architecture so it can later grow into the
real web dashboard/admin panel (projects, members, works, photos, analytics)
without being rewritten.

> The product is currently **In Development** — this site is a preview, not a
> live app. There are intentionally **no** contact/lead/sign-in forms.

## Tech stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** (brand tokens in `tailwind.config.ts`)
- **React Router** (`/` landing, `*` 404, dashboard routes blueprinted)
- **TanStack Query** (provider wired, ready for the dashboard)
- **Axios** API client with Sanctum bearer-token interceptors (prepared, unused on the landing)
- **Zod**, **React Hook Form** (available for future forms)
- **clsx**, **lucide-react** (icons)

## Getting started

```bash
npm install
npm run dev        # start the dev server (Vite)
```

Other scripts:

```bash
npm run build      # type-check + production build (dist/)
npm run preview    # serve the production build
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

Copy `.env.example` to `.env` to override defaults:

```env
VITE_APP_NAME=eBud
VITE_API_BASE_URL=https://stage.build-it-app.uk/api
VITE_APP_ENV=development
```

## Screenshots

App screenshots live in **`public/screens/`**. They are rendered inside the
phone mockups (hero + "A complete workflow in one app"). If a file is missing,
`PhoneMockup` shows a clean CSS placeholder instead of a broken image — see
[`public/screens/README.md`](public/screens/README.md) for the exact filenames.

## Project structure

```txt
src/
  app/              App, router, providers (QueryProvider)
  components/
    common/         Button, Badge, Container, SectionHeading, StatCard, PhoneMockup
    layout/         Header, Footer, Logo
    landing/        Hero, Problem, ScreensShowcase, Roles, Workflow, Roadmap, DevelopmentBanner
  config/           env.ts, navigation.ts
  data/             landing.ts (section content), mockDashboard.ts (future data)
  features/         auth | projects | works | members | analytics (types + api/)
  lib/
    api/            apiClient.ts (Axios + interceptors), endpoints.ts
    utils/          cn.ts, accent.ts
  pages/            LandingPage, NotFoundPage
  styles/           globals.css
```

## Future dashboard readiness

Everything dashboard-related is scaffolded but **not** wired into the landing:

- **Routes** — `/login`, `/app/projects`, `/app/projects/:projectId`,
  `.../works`, `.../members`, `.../analytics` are documented in
  `src/app/router.tsx` ready to be enabled.
- **API client** — `src/lib/api/apiClient.ts` attaches a Sanctum bearer token
  from `localStorage` and has a 401 response interceptor placeholder.
- **Feature modules** — `src/features/*` contain domain types
  (`Project`, `Work` + `WorkStatus` lifecycle, `ProjectMember` + roles,
  analytics) and API functions (`getProjects`, `getProject`,
  `getProjectMembers`, `getProjectWorks`, `getWorkPhotos`, …).
- **Mock data** — `src/data/mockDashboard.ts` mirrors those types and can seed
  the dashboard during development before the API is connected.

Roles (`owner` / `brigadier` / `worker`) and work statuses
(`created → in_progress → waiting_for_approval → done | rejected | paused`)
match the Laravel API domain. Public registration is disabled by design.
