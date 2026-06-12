# DISCOVERY — certainty-refresh (2026-06-12, Explore agent)

## 1. CONTRADICTIONS

- **Next.js 15 claim is wrong**: installed `next@14.2.35` (package.json `^14.2.0`), React 18.3.1, TS 5.9.3. App is on Next 14, not 15.
- **Refactor plan file does NOT exist**: `~/.claude/plans/can-you-audit-and-polished-lobster.md` absent; nothing similar among the ~40 plans in `~/.claude/plans/`. Owner's non-recognition is correct; memory claim (b) is false.
- **PDF system DOES exist** — owner's non-recognition is wrong; memory claim (a) is true: `@react-pdf/renderer@^4.3.2` in deps; 4 routes (`src/app/api/pdf/{compliance,manager-guide,quick-reference,training-guide}/route.ts`); 4 components in `src/components/pdf/` (TrainingGuidePdf 1,753 lines, ManagerGuidePdf 1,319, ComplianceSheetPdf 608, QuickReferencePdf); helpers `src/lib/pdf/{fonts,styles}.ts`; 4 generated PDFs sit in `docs/sep/`.
- **Trainee portal size off**: actual trainee footprint is ~3,442 lines (intake said ~3,276) across `src/app/(trainee)/`, `src/app/api/{trainee,analysis,notify,auth}/`, `src/components/trainee/`, `src/lib/trainee/`, `src/lib/{auth,auth.config}.ts`, `src/lib/db/`. Deps used ONLY by trainee (~9, not 7): `next-auth`, `@auth/drizzle-adapter`, `drizzle-orm`, `drizzle-kit`, `@vercel/postgres`, `@google/generative-ai`, `resend`, `wavesurfer.js`, plus `drizzle.config.ts` at root. Middleware (`src/middleware.ts`) carves out trainee/auth/analysis/notify paths from IP restriction — must be edited on deletion.
- **No `call-intelligence/` data directory exists** anywhere in the repo. Instead, the call data lives as **223 hardcoded `page.tsx` files under `src/app/agents/`** (4.7MB of TSX — per-agent, per-call, per-report pages) plus `public/call-audio/` (2.1MB) and `src/app/{daily-brief,team-report,top-closer-analysis}/`. This is the repo's biggest unmentioned mass; recent commits are mostly this content + FEMA JSON updates.
- **Untracked dir** `docs/meta-plans/` exists (created today, contains only `.work/`) — this meta-plan run.

## 2. PRIOR ARTIFACTS

- `docs/CLAUDE_CODE_START_HERE.md`, `docs/TRAINEE_PORTAL_START_HERE.md`, `docs/trainee-portal-prd.md`, `docs/trainee-build-sequence.md`, `docs/trainee-call-analysis/` (64K) — trainee docs to delete with portal.
- `docs/prd.md`, `docs/design-spec.md`, `docs/sep-check-ui-plan.md`, `docs/callflow3-sep-integration.md`, `docs/psychology-integration-handoff.md`, `docs/image-prompts.md` — prior plans/specs.
- `docs/journal/journal.md` — running dev journal (FEMA update history).
- `docs/sep/` (md + 4 generated PDFs) and `docs/sep-docs/` (5 carrier PDFs) — locked SEP source content.
- Preview routes: `src/app/(hub)/preview/call-companion/page.tsx` (529 lines, imports objections-data) and `src/app/(hub)/preview/how-objections-are-graded/page.tsx` — likely stale vs the live `how-objections-are-graded` page.
- Empty component dirs: `src/components/diagrams/`, `src/components/search/` (fuse.js used directly in pages instead).
- Suspect/unused deps: `@next/mdx`, `next-mdx-remote`, `gray-matter` (no MDX content found in app routes), `d3` (used only in top-closer-analysis/team-report pages); `zipcodes`, `zipcodes-nrviens`, `us-zips` are devDeps for `scripts/export-sep-zips.ts` only.
- `public/`: 30MB — `images/` 18MB, `data/` 9.2MB (incl. `fema-active.json` + `march9th-sep-update/` HTML), `call-audio/` 2.1MB. `exports/sep-zips.csv` at root.
- Duplicate route smell: `michelle-marrero/calls/john-petipas` vs `john-pettipas`.

## 3. ENVIRONMENT REALITY

- Stack: Next 14.2.35 (App Router, `src/` layout), React 18.3.1, TS 5.9.3, CSS Modules (152 `.module.css`, 155 css total) — consistent; no Tailwind/styled-components. Fonts: Geist + Playfair Display; `@carbon/icons-react`, `framer-motion` (used in 173 files — heavy), `fuse.js` for search.
- No tests, no CI (`.github/` absent), no vercel.json; scripts are only dev/build/start/lint/export. Repo 1.2GB total (455MB node_modules, src 6.8MB), 59 commits, last 2026-06-08.
- Routes: hub group ~28 pages (incl. 2 preview), trainee group 5 pages + 5 API route groups, 4 PDF API routes, plus 223 hardcoded agent/call/report pages and daily-brief/team-report/top-closer-analysis at root (outside both groups, but IP-gated by middleware).
- Middleware: IP allowlist via `ALLOWED_IPS` env, redirects to `/blocked`; trainee paths exempt.
- Code quality: very large hand-written page files — `sep-check/page.tsx` 2,532 lines, `objections-data.ts` 2,055 (hardcoded TS data, not JSON), `top-closer-analysis` 1,778, content components 1,100–1,400 lines each; total src ~60,900 lines of TS/TSX. Data is predominantly hardcoded in TSX (agents pages especially) rather than JSON/MDX, despite MDX deps installed.
- Responsive: 149 of 152 module.css files contain `@media` — mobile handled. Accessibility weak: only 9 files use `aria-*` attributes.
- FEMA pipeline = `public/data/fema-active.json` (updated manually per journal, via commits) + `sep-check` page consuming it; no scripts beyond export-sep-zips.
