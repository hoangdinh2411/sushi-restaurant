# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server (Turbopack, outputs to .next/dev)
npm run build    # Production build (Turbopack by default)
npm run start    # Start production server
npm run lint     # Run ESLint directly (next lint is removed in v16)
```

No test framework is configured yet.

## Architecture

Next.js 16 App Router project with React 19.2, TypeScript, and Tailwind CSS v4.

- `app/` — App Router root. `layout.tsx` is the root layout (required); `page.tsx` is the home route.
- `public/` — Static assets served from `/`.
- `app/globals.css` — Global styles via `@import "tailwindcss"` (Tailwind v4 syntax, not `@tailwind` directives).
- Import alias `@/*` maps to the repo root.

## Next.js 16 Breaking Changes to Know

**Always read `node_modules/next/dist/docs/` before writing Next.js-specific code.**

Key changes from prior versions:

- **Async Request APIs** — `cookies()`, `headers()`, `draftMode()`, `params`, and `searchParams` are fully async. Always `await` them. Use `npx next typegen` to generate `PageProps`/`LayoutProps`/`RouteContext` helpers.
- **Turbopack is the default** — `next dev` and `next build` both use Turbopack. Pass `--webpack` to opt out. Custom `webpack` config in `next.config.ts` will break builds unless `--webpack` is used.
- **`middleware` renamed to `proxy`** — Use `proxy.ts` with an exported `proxy` function. Edge runtime is not supported in `proxy`; keep `middleware.ts` if you need edge.
- **`next lint` removed** — Use `eslint` CLI directly (already in `package.json`). `next build` no longer runs linting.
- **`revalidateTag` requires second arg** — `revalidateTag('key', 'max')`. For immediate updates use `updateTag` in Server Actions instead.
- **Parallel routes require `default.js`** — Every `@slot` must have a `default.js`/`default.tsx` or builds fail.
- **`cacheLife`/`cacheTag` stable** — Drop the `unstable_` prefix.
- **`serverRuntimeConfig`/`publicRuntimeConfig` removed** — Use `process.env` directly; prefix client-visible vars with `NEXT_PUBLIC_`.
- **`next/image` defaults changed** — `minimumCacheTTL` now 4h, `imageSizes` drops `16`, `qualities` defaults to `[75]`, local IP optimization blocked by default, max 3 redirects. Use `images.remotePatterns` not deprecated `images.domains`.
- **`next/legacy/image` deprecated** — Use `next/image`.
- **`experimental.dynamicIO` renamed** — Now `cacheComponents: true` at top level.
- **`experimental.turbopack` moved** — Now `turbopack: {}` at top level of `NextConfig`.
- **AMP fully removed**.
- **`dev` output directory** — `next dev` writes to `.next/dev`; Turbopack traces are at `.next/dev/trace-turbopack`.

## Tailwind CSS v4

Uses `@import "tailwindcss"` in CSS, not `@tailwind base/components/utilities`. Theme tokens defined with `@theme inline { ... }` in CSS rather than `tailwind.config.js`.
