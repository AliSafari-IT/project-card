# Agent Guide — @asafarim/project-card

React + TypeScript component: a rich project card (title, image, description,
tech stack, links, status, progress, tags, budget) with a CSS-variable theme
system and DB-model mapping helpers. pnpm workspace: library at root, Vite demo
app in `demo/` (consumes the lib via `link:..`, plus `@asafarim/display-code`,
`@asafarim/shared`, `@asafarim/react-themes`, `react-router-dom`).

## Layout

- `src/components/ProjectCard.tsx` + `.module.css` — single component,
  flat `components/` dir (not per-component folders)
- `src/types/index.ts` — exported types (`ProjectCardProps`, `TechStackItem`,
  `ProjectLink`, `ProjectTag`, `RelatedProject`, `ProjectStatus`,
  `ProjectCategory`, `ProjectPriority`, `Theme`, `ProjectImage`;
  `ProjectBudget` is defined here but NOT re-exported from `src/index.ts`)
- `src/types/css-modules.d.ts` — CSS-module declarations required by
  rollup-plugin-typescript2; keep it
- `src/utils/projectMapper.ts` — DB-model helpers (`mapProject`, `mapProjects`,
  `filterPublicProjects`, `sortProjects`)
- `src/utils/themeUtils.ts` — theme functions (`applyProjectCardTheme`,
  `createProjectCardThemeContext`, `PROJECT_CARD_THEME_VARIABLES` — `--pc-*`
  custom properties)
- `src/index.ts` — public API barrel
- `demo/` — Vite + React 18 app with `react-router-dom` and
  `@asafarim/react-themes` (`ThemeProvider` + `ThemeToggle` in `SiteNav.tsx`);
  `base` is `VITE_BASE_PATH || '/project-card/'` in `vite.config.ts` for
  GitHub Pages; dev server on port 3008 (`predev` runs `npx kill-port 3008`).
  Pages: `/` Home, `/how-to` (`HowToPage.tsx`), `/roadmap` (`RoadmapPage.tsx`),
  `/examples` (`ExamplesPage.tsx`); shared data in `mockData.ts`. Theme bridge:
  `applyProjectCardTheme(resolvedMode)` in `App.tsx` syncs the lib's
  `data-theme` CSS vars with react-themes
- `demo-setup.bat` / `demo-setup.sh` — one-shot build + install + dev helpers
  (npm-based, not pnpm)
- `THEME_SYSTEM.md`, `DEMO_SUMMARY.md` — supplementary docs
- `.snapshots/` — IDE snapshot-tool config; unrelated to the build

## Commands

- `pnpm run build` — `rollup -c` → `dist/index.js` (CJS) + `dist/index.esm.js`
  + d.ts + sourcemaps (postcss modules injected into JS, not extracted; terser)
- `pnpm run watch` — `rollup -c -w`
- `cd demo && pnpm build` — `tsc && vite build`
- `cd demo && pnpm dev` — vite dev server on :3008
- `pnpm run demo` — builds lib, builds demo, starts dev server
- No dedicated typecheck/test/lint scripts — `pnpm exec tsc --noEmit` or rely on
  builds
- **`prepare` script auto-runs `npm run build` on every `pnpm i`** — expect a
  rollup run during installs (and before `npm/pnpm publish`)

## Conventions

- React **17 or 18** peer deps — don't use 18-only APIs (e.g. `useId`,
  `createRoot` requirements in the lib itself)
- **Zero runtime deps** — only `react`/`react-dom` are externals; keep the
  dependency footprint minimal
- CSS modules throughout; component styles live next to the component
- `files` ships `dist`, `demo`, and `README.md` — **the demo dir goes in the
  npm tarball**; keep it clean (demo/dist is gitignored, so it won't ship)
- Keep `version` in `package.json` and `demo/package.json` in sync — both are
  bumped together (currently 1.5.0)

## Release

**No publish workflow exists** — npm releases are manual. The only CI is the
demo Pages deploy:

1. Bump `version` in `package.json` **and** `demo/package.json` (semver)
2. `pnpm run build` and `cd demo && pnpm build` green
3. `pnpm publish` (or `npm publish`) — `prepare` rebuilds automatically
4. Commit → push `main`
5. `.github/workflows/static_demo.yml` deploys `demo/dist` to GitHub Pages via
   `actions/deploy-pages` — but **only when `demo/**` changes on `main`** (or
   via `workflow_dispatch`); it copies `index.html` → `404.html` so
   BrowserRouter routes survive a refresh on Pages
6. Manual Pages deploy: `pnpm run deploy` (`predeploy` builds lib + demo, then
   `gh-pages -d demo/dist` pushes the `gh-pages` branch)
7. Optionally `gh release create v{x.y.z} -R AliSafari-IT/project-card --latest`

## Gotchas

- gh CLI authenticated as `AliSafari-IT` — pass `-R AliSafari-IT/project-card`
- Remote uses the `github-asafarim` SSH alias; plain `git` works (no ownership
  issue)
- **No CHANGELOG.md and no git tags** — versions are tracked only in
  `package.json` + the npm registry; check
  `npm view @asafarim/project-card versions` before picking a version number
- **README prop table is stale**: it documents `techStack`, `featured`, and a
  required `image`, but the source uses `techStacks`, `isFeatured`, and an
  optional `image` (`string | ProjectImage`) — trust `src/types/index.ts`
- Lib-only pushes to `main` won't redeploy the Pages demo (path filters are
  `demo/**` and `.github/workflows/static_demo.yml`) — use `workflow_dispatch`
  or `pnpm run deploy`
- `demo-setup.bat`/`.sh` use `npm`, not pnpm — running them creates a
  `package-lock.json` alongside `pnpm-lock.yaml`; prefer the pnpm scripts
- Demo has its own `demo/pnpm-lock.yaml` and a `link:..` dep on the lib —
  `pnpm i` at root doesn't fully set up the demo; the workflow installs both
- CI pins pnpm 8 via `pnpm/action-setup@v2` while local `packageManager` is
  pnpm 10.14.0 — lockfile-format warnings in CI are expected
- npm website lags the registry — verify publishes via `npm view ... dist-tags`
