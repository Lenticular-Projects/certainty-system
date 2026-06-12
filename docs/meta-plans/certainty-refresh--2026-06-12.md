# Meta-Plan: Certainty System Refresh

| | |
|---|---|
| **Date** | 2026-06-12 |
| **Slug** | certainty-refresh |
| **Project root** | /Users/jonathanhall/Desktop/Lenticular-Coding-Base/certainty-system |
| **Status** | CURRENT |
| **Supersedes** | none |
| **Work dir** | docs/meta-plans/.work/certainty-refresh/ |

---

## RE-ENTRY

PROBLEM: The Certainty System codebase carries ~61k lines of TS/TSX with 223 write-only archive pages, a trainee portal to delete, 9 dead dependencies, no verification floor, and a design layer that is richer than its own documentation claims — all undefined "done" resolved into a user-confirmed two-scope plan.

NEXT-ACTION: Execute Scope A Step 1 — delete the trainee portal (`src/app/(trainee)/`, `src/app/api/{trainee,analysis,notify,auth}/`, `src/components/trainee/`, `src/lib/trainee/`, `src/lib/{auth,auth.config}.ts`, `src/lib/db/`, `drizzle.config.ts`) and edit `src/middleware.ts` to remove the four trainee carve-out lines, then immediately run `next build` + full-hub smoke pass to confirm AC1.

KILL-CONDITION: `next build` fails after any Scope A step AND the failure traces to a hub/tool route (not a known trainee artifact still pending removal) — indicates the isolation assumption (A3) was wrong and the deletion is entangled with hub code.

READ-ORDER: RE-ENTRY → ACCEPTANCE CRITERIA → ADVERSARIAL CHALLENGES → ASSUMPTION REGISTER → rest

---

## THE PROBLEM (post-discovery)

The intake framed this as a vague "refresh" — clean the code, improve the UI/UX, maybe redesign, surface unknowns. Discovery changed the picture materially on five points.

**Stack reality:** The app runs Next.js 14.2.35, not 15 as project memory claims. This kills any assumption that Next 15 features are already in use and makes an upgrade an opt-in Scope B item. The refactor plan referenced in memory (`~/.claude/plans/can-you-audit-and-polished-lobster.md`) does not exist; the file is absent from `~/.claude/plans/`. There is no prior architectural obligation to honor.

**The 223 unmentioned pages:** The single largest surface in the repo is not any hub page or tool — it is 223 hardcoded `page.tsx` files under `src/app/agents/` (4.7MB TSX) plus `/daily-brief`, `/team-report`, and `/top-closer-analysis` root pages. These have zero inbound links from hub, Nav, or any component and were never mentioned in intake. They are write-only call-output archives. User confirmed: remove them (git history preserves). Their removal also frees the `d3` dependency. This moves into Scope A.

**The PDF system exists and is kept:** The owner did not recognize the PDF system during intake, but it is real — `@react-pdf/renderer@^4.3.2`, four API routes, four large PDF components, helpers, and generated outputs in `docs/sep/`. Grep confirms zero site links to `/api/pdf` routes. The PDF system is a kept regeneration tool, not a user-facing feature, and must not be deleted.

**The live design is richer than documented:** Project memory describes a static green-on-cream editorial style. The live design is a 4-color animated gradient (`gradientDrift`, 20s loop) plus glassmorphism, signal-state background shifts (red/yellow/green tied to call state), and framer-motion saturating 173 files. This is a genuine product design with a point of view. The design verdict is **KEEP-AND-POLISH** — the upgrade is discipline and accessibility, not a new aesthetic direction (see Design Verdict in the next section). Replacing it wholesale would violate "refresh, not crazy rebuild" and risk the locked-content pages' typography.

**The carried-forward tension (C2):** The highest-leverage engineering improvement — separating hardcoded TSX content (objections-data.ts at 2,055 lines, sep-check at 2,532, the now-removed 223 agent pages) from presentation — is exactly what "refresh, not rebuild" constrains. This tension must not be resolved silently. Any content/presentation separation is Scope B+ and explicitly opt-in. The plan names it; the owner chooses whether to pursue it.

**Design Verdict (KEEP-AND-POLISH) — four polish directions:**
1. **Restraint on motion.** Audit framer-motion usage in all 173 files; animation must never gate content visibility in a mid-call tool. Add `prefers-reduced-motion` compliance throughout.
2. **Calm the animated gradient on content-heavy pages.** Freeze or reduce it on long reference pages (objections, SEP guides, math-breakdown) to improve readability and performance on lower-end PCs; keep it on home/hero where the brand moment is appropriate.
3. **Accessibility is the real visual debt.** Only 9 files use `aria-*` attributes. Focus states, contrast ratios on green/amber over the animated gradient, and semantic heading structure are the genuine upgrade the owner didn't know to ask for.
4. **Consistency pass.** Apply the editorial system (eyebrow → display headline → body) uniformly across all 28 hub pages rather than re-implementing per 1,100–1,400-line page component.

---

## VERIFIED CONSTRAINTS

Each line cites a discovery path, a file read during triage, or an explicit user statement recorded in INTAKE.md or ANALYSIS.md. No Evidence=NONE items appear here.

| Constraint | Evidence |
|---|---|
| App runs Next.js 14.2.35 (not 15). | DISCOVERY §1, package.json `^14.2.0` |
| No tests, no CI, no `.github/`, no `vercel.json`. | DISCOVERY §3 environment reality |
| `src/middleware.ts` hub IP-gate block (lines 18–37) is structurally independent of the trainee carve-out block (lines 8–16). | ANALYSIS §5 A4 verified by reading `src/middleware.ts` this run |
| Zero inbound `href` links from hub/Nav/components to `/agents`, `/daily-brief`, `/team-report`, `/top-closer-analysis`. | ANALYSIS §1 A1 (grep this pass, zero hits) |
| Zero site links to `/api/pdf` routes. | ANALYSIS §5 A6 verified by grep this run |
| `@next/mdx`, `next-mdx-remote`, `gray-matter` unused in `src/` and `next.config`. | ANALYSIS §5 A11 verified by grep this run |
| Zero inbound links to `/preview/*` routes. | ANALYSIS §5 A14 verified by grep this run |
| FEMA pipeline = `public/data/fema-active.json` updated by manual commit + `sep-check` consumer only. | DISCOVERY §3; INTAKE Q7 "do not touch" |
| Locked content (objections-data.ts, SEP docs): substance must not change; design/markup polish allowed. | INTAKE Q7 explicit user statement |
| PDF system is kept as a regeneration tool; no deletion. | ANALYSIS §5 A6 user decision: KEEP |
| 223 agent pages + `/daily-brief` + `/team-report` + `/top-closer-analysis` approved for removal; git history preserves. | ANALYSIS §5 C5 disposition: user stated "No, can be removed." |
| framer-motion (173 files) and animation layer are not to be removed unless owner later opts in. | ANALYSIS §5 criterion 7 threshold confirmed by user |
| No core-stack change (Next/CSS Modules) in either scope. | ANALYSIS §5 criterion 7; INTAKE Q5 "not crazy" |

---

## ACCEPTANCE CRITERIA

The scope-split is user-confirmed: Scope A (Safe Subtractive Refresh) executes first; Scope B (Additive UX & Design Direction) follows after A is complete and owner chooses to proceed. The removal of the 223 agent pages and companion pages was moved into Scope A at triage (ANALYSIS §5 threshold confirmations). All [PROPOSED] tags are resolved — no open thresholds remain.

1. **Trainee portal fully removed, no regressions.** `next build` succeeds AND zero imports of trainee-only deps (`next-auth`, `@auth/drizzle-adapter`, `drizzle-orm`, `drizzle-kit`, `@vercel/postgres`, `@google/generative-ai`, `resend`, `wavesurfer.js`) AND every hub/tool/sep route returns 200 in smoke pass. Threshold: 0 build errors, 0 dangling imports, 0 broken routes. [Scope A]

2. **FEMA pipeline provably untouched.** `git diff` shows no change to `public/data/fema-active.json` and `sep-check` data-read/filter logic is behavior-identical. Threshold: 0 functional changes. [Scope A]

3. **Locked content unchanged in substance.** Diff of `objections-data.ts` and all SEP content files shows no copy/data deletions (CSS and markup-only changes permitted). Threshold: 0 substance changes. [Scope A]

4. **Dead weight reduced, measured not vibed.** All discovery-flagged unused deps removed (`@next/mdx`, `next-mdx-remote`, `gray-matter`, plus `d3` freed by archive-page removal), dead routes removed (`/preview/call-companion`, `/preview/how-objections-are-graded`, duplicate `john-petipas` route, `/agents/*`, `/daily-brief`, `/team-report`, `/top-closer-analysis`), confirmed via depcheck. Threshold: every dep DISCOVERY flagged unused removed, build green. [Scope A]

5. **A minimal verification floor exists.** Documented smoke checklist OR build+route-200 script that asserts every top-level hub/tool route is reachable, runs green after each Scope A step. Threshold: every top-level hub/tool route asserted reachable post-change. [Scope A]

6. **Navigation intuitiveness improved against a baseline.** The 223 agent/report pages are removed (done in AC4) so they no longer pad the build; core tools reachable ≤2 clicks from home. Threshold: ≤2 clicks to Objections, SEP-Check, SEP-Guides from the homepage. [Scope B]

7. **Visual-design decision made and applied within the fence.** Owner confirms KEEP-AND-POLISH direction; the four polish directions from §4 (motion restraint, gradient calming on content pages, accessibility pass, consistency pass) are applied without framework or design-system swap. Threshold: no core-stack change (Next/CSS Modules); animation layer preserved unless owner later opts out. [Scope B]

---

## ADVERSARIAL CHALLENGES

| ID | Severity | Summary | Disposition |
|---|---|---|---|
| C1 | SIGNIFICANT | "Refresh" with undefined done is unbounded scope across ~61k lines — four projects under one word. | **RESOLVED.** User accepted Scope A → Scope B split and all four [PROPOSED] thresholds as written. Scope A is now bounded and falsifiable. Traceability only. |
| C2 | SIGNIFICANT | The real problem may be the hardcoded-TSX content architecture; surface polish is rearranging deck chairs. | **CARRIED-FORWARD.** Live plan obligation: the plan names this tension explicitly. Any content/presentation separation is Scope B+ and opt-in. The 223 agent pages (the largest TSX mass) were approved for removal, partially mooting the concern. Owner decides if separation is pursued. |
| C3 | SIGNIFICANT | Deleting trainee portal requires editing `src/middleware.ts` — the single gate protecting ALL hub routes. A mistake locks agents out. | **RESOLVED.** A4 verified by file read: hub IP-gate block (lines 18–37) is structurally independent of trainee carve-out block (lines 8–16). Plan treats middleware edit as a high-care step with immediate post-edit smoke check. Traceability only. |
| C4 | SIGNIFICANT | No tests + no CI = the entire refresh is unverifiable; "looks done" can silently break a route mid-call. | **RESOLVED.** User accepted verification floor as AC5 (smoke-check threshold confirmed). Traceability only. |
| C5 | MINOR | 223 agent pages are the largest repo mass (4.7MB TSX), have zero inbound links, were never mentioned in intake — a major latent fact. | **RESOLVED.** User: "No, can be removed. They're write-only output." Git history preserves them. Plan removes `/agents/*`, `/daily-brief`, `/team-report`, `/top-closer-analysis` in Scope A. Traceability only. |

---

## ASSUMPTION REGISTER

Scale: L = Likelihood (1 low → 3 high), C = Consequence if wrong (1 low → 3 high), Rank = L × C. Sorted by Rank descending.

| ID | Statement | Evidence | L | C | Rank | Status |
|----|-----------|----------|---|---|------|--------|
| A1 | The 223 `/agents` + daily-brief/team-report/top-closer pages are write-only archives, not a navigation surface agents use. | DISCOVERY §1; grep this pass: zero inbound href. | 2 | 3 | 6 | **resolved-by-user** (approved for removal) |
| A2 | "Refresh, not crazy rebuild" forbids re-architecting the hardcoded-TSX content model into JSON/CMS. | INTAKE Q5; DISCOVERY §3 data hardcoded in TSX. | 2 | 3 | 6 | **plan-obligation** (C2 carried forward; separation is Scope B+ opt-in) |
| A5 | "FEMA pipeline must not be touched" = leave fema-active.json + manual-commit flow alone; sep-check consumer may still get design polish if data logic is preserved. | INTAKE Q7; DISCOVERY §3. | 2 | 3 | 6 | **open** (Q2 below; assumed YES for Scope A planning) |
| A7 | Live design is animated-gradient + glassmorphism (not static green-on-cream in MEMORY.md); owner is moderately, not deeply, attached. | hub.css gradientDrift; page.tsx framer-motion; INTAKE Q1 addendum. | 2 | 2 | 4 | **accepted-judgment** (design verdict KEEP-AND-POLISH confirms) |
| A8 | Next 14.2.35 → 15 is discretionary, not required by any goal; optional, gated behind build/smoke. | DISCOVERY §1 (actually 14, not 15); DISCOVERY §3 (no tests/CI). | 2 | 2 | 4 | **plan-obligation** (Next 15 upgrade optional/Scope B) |
| A10 | framer-motion (173 files) and animation layer are part of "what works"; removing/replacing them is destructive. | DISCOVERY §3 (173 files); page.tsx + Nav.tsx saturated. | 2 | 2 | 4 | **accepted-judgment** (AC7 threshold: preserve unless owner opts out) |
| A12 | "Agents use it daily across Macs and PCs" — zero telemetry in-repo; UX priorities rest on owner's word. | INTAKE Q1; DISCOVERY §3 (no analytics dep). | 2 | 2 | 4 | **open** (Q3 below; Vercel Analytics candidate Scope B item) |
| A3 | Deleting trainee portal will not break hub/tool routes — code is isolated behind middleware carve-outs. | DISCOVERY §1; middleware.ts read (4 path carve-outs); package.json dep list. | 1 | 3 | 3 | **plan-obligation** (build + grep immediately after deletion; AC1) |
| A9 | No tests + no CI means a verification harness is a precondition, not optional polish. | DISCOVERY §3 "No tests, no CI, .github absent." | 1 | 3 | 3 | **resolved-by-user** (AC5 accepted as Scope A criterion) |
| A4 | Editing middleware to remove trainee carve-outs is safe; hub IP-gate logic is untouched. | middleware.ts read: lines 8–16 trainee; lines 18–37 hub IP gate (independent). | 1 | 2 | 2 | **verified** (read this run; confirmed independent blocks) |
| A6 | Nobody consumes the 4 PDF API routes from the live site — PDF system is dead weight. | DISCOVERY §1; memory "No site download buttons"; grep: zero links to /api/pdf. | 2 | 1 | 2 | **verified** (grep this run); user decision: KEEP as regeneration tool |
| A11 | @next/mdx, next-mdx-remote, gray-matter (and d3 post-archive-removal) are unused and removable. | DISCOVERY §2; grep this run: none used in src/ or next.config. | 2 | 1 | 2 | **verified** (grep this run); in AC4 |
| A13 | Accessibility is genuinely weak (9 files use aria-*); improving it is in-scope. | DISCOVERY §3. | 1 | 2 | 2 | **plan-obligation** (axe scan during Scope B accessibility pass; AC7 polish direction 3) |
| A14 | The two preview/* routes and duplicate john-petipas/john-pettipas are stale dead code safe to remove. | DISCOVERY §2; grep: zero inbound links. | 1 | 1 | 1 | **verified** (grep this run); in AC4 |

---

## OPEN QUESTIONS

- **Q1 (agent-page external links):** Are any `/agents`, `/daily-brief`, `/team-report`, `/top-closer-analysis` URLs shared with or bookmarked by managers/agents outside the repo (e.g., texted links)?
  **Answerable by:** Jonathan checking with whoever received report links.
  **Blocks:** Nothing in planning; only the final irreversible-feeling moment of the agent-pages removal (git history preserves everything regardless).

- **Q2 (FEMA boundary):** Where exactly does the "FEMA pipeline" boundary end — is design polish of the sep-check page UI (preserving data read/filter logic) acceptable? (A5, judgment, assumed YES.)
  **Answerable by:** Jonathan, when the plan proposes specific sep-check changes.
  **Blocks:** Any sep-check visual polish work.

- **Q3 (usage signal):** Is there any real usage signal (who uses what, on which OS/browser)? No analytics exist in-repo (A12).
  **Answerable by:** Vercel Analytics (free tier) if enabled — candidate Scope B item.
  **Blocks:** Evidence-based UX prioritization in Scope B; Scope A unaffected.

---

## DISCOVERY SNAPSHOT

### Deltas — what changed from intake to reality

**Stack version wrong.** Memory and intake both assumed Next.js 15. Actual: `next@14.2.35` (package.json `^14.2.0`), React 18.3.1, TypeScript 5.9.3. No Next 15 APIs are in use; upgrade is an opt-in Scope B decision, not a migration of existing code.

**Refactor plan file does not exist.** Memory entry `~/.claude/plans/can-you-audit-and-polished-lobster.md` is absent from `~/.claude/plans/` (~40 plans scanned). Owner's non-recognition is correct. No prior architectural obligation.

**PDF system exists and must be kept.** Owner said "I don't know what the PDFs are." The system is real: `@react-pdf/renderer@^4.3.2`, four API routes at `src/app/api/pdf/{compliance,manager-guide,quick-reference,training-guide}/route.ts`, four large PDF components (`TrainingGuidePdf` 1,753 lines, `ManagerGuidePdf` 1,319, `ComplianceSheetPdf` 608, `QuickReferencePdf`), helpers `src/lib/pdf/{fonts,styles}.ts`, and four generated PDFs in `docs/sep/`. Zero site links point to these routes — grep confirms. User decision: keep as a regeneration tool.

**223 agent pages — the biggest unmentioned mass.** Project memory references a `call-intelligence/` directory that does not exist in the repo. Instead, all call data is baked into 223 hardcoded `page.tsx` files under `src/app/agents/` (4.7MB TSX) plus root-level `/daily-brief`, `/team-report`, `/top-closer-analysis`. Zero inbound links from hub/Nav/components. Recent commits are primarily these pages plus FEMA JSON updates. User approved removal; git history preserves everything.

**Trainee portal footprint slightly larger than noted.** Actual: ~3,442 lines (not 3,276), 9 deps (not 7). The full dep list: `next-auth`, `@auth/drizzle-adapter`, `drizzle-orm`, `drizzle-kit`, `@vercel/postgres`, `@google/generative-ai`, `resend`, `wavesurfer.js`, plus `drizzle.config.ts` at root. `src/middleware.ts` exempts four trainee paths from IP-gating — requires careful edit on deletion.

**Live design richer than memory.** Memory describes "static green-on-cream editorial." Live: `hub.css` drives a 4-color `gradientDrift` animation (20s loop) + glassmorphism; signal-state shifts (red/yellow/green) tied to call state; framer-motion in 173 of the ~60,900-line codebase. This is an intentional product aesthetic, not a default template.

### Prior artifacts

| Path | Role |
|---|---|
| `docs/CLAUDE_CODE_START_HERE.md`, `docs/TRAINEE_PORTAL_START_HERE.md`, `docs/trainee-portal-prd.md`, `docs/trainee-build-sequence.md`, `docs/trainee-call-analysis/` (64K) | Trainee docs — delete with portal |
| `docs/prd.md`, `docs/design-spec.md`, `docs/sep-check-ui-plan.md`, `docs/callflow3-sep-integration.md`, `docs/psychology-integration-handoff.md`, `docs/image-prompts.md` | Prior plans/specs — reference only |
| `docs/journal/journal.md` | Running dev journal (FEMA update history) — preserve |
| `docs/sep/` (md + 4 generated PDFs), `docs/sep-docs/` (5 carrier PDFs) | Locked SEP source content — do not touch |
| `src/app/(hub)/preview/call-companion/page.tsx` (529 lines), `src/app/(hub)/preview/how-objections-are-graded/page.tsx` | Stale preview routes — zero inbound links, remove |

### Environment reality

152 CSS Modules files (149 contain `@media` — mobile handled); no Tailwind/styled-components. Only 9 files use `aria-*`. No tests, no CI, no `.github/`, no `vercel.json`. `public/` is 30MB (images 18MB, data 9.2MB including `fema-active.json`, call-audio 2.1MB). `exports/sep-zips.csv` at repo root is an artifact of `scripts/export-sep-zips.ts` (devDep). Repo total 1.2GB (455MB node_modules, src 6.8MB), 59 commits, last 2026-06-08.

---

## PROVENANCE

- Pipeline: intake (main) → discovery (Explore) → analysis (Opus) → triage (main + user) → synthesis (Sonnet)
- Artifacts: `docs/meta-plans/.work/certainty-refresh/{INTAKE,DISCOVERY,ANALYSIS,META-PLAN}.md`
- Synthesis-fidelity checklist: <1: pass — C1 RESOLVED, C2 CARRIED-FORWARD, C3 RESOLVED, C4 RESOLVED, C5 RESOLVED all appear with dispositions> <2: pass — all 7 acceptance criteria match post-triage ANALYSIS.md wording; no [PROPOSED] tags remain; agent-page removal in Scope A per §5 adjustment> <3: pass — Evidence=NONE assumptions (A7, A10, A12, A2, A5) are absent from VERIFIED CONSTRAINTS>
- RE-ENTRY structural gate: pass — PROBLEM (one sentence, post-discovery), NEXT-ACTION (concrete, names files and command), KILL-CONDITION (named condition, answerable without reading further) all present and non-empty

---

<details>
<summary>INTAKE (verbatim, collapsible)</summary>

# INTAKE — Certainty System Refresh

## Confirmed summary (approved by Jonathan, 2026-06-12)

Refresh the Certainty System — a Medicare sales training tool ("part tool, part encyclopedia") used by agents on Macs and PCs. Goals: clean up the codebase, improve design/UI/UX, make the site more intuitive for agents, and identify what can be removed or upgraded — including issues the owner may not know to ask about. This is a refresh, not a rebuild: no drastic re-architecture. Trigger is exploratory ("see what a fresh, capable engineering look surfaces"); the definition of "done" is intentionally open and should be PROPOSED by the analysis pass, then confirmed by the user. Trainee portal is confirmed for full deletion. FEMA data pipeline must not be touched. Objection handbook and SEP content are locked at the content level — design-level polish is allowed but the substance works and must not be destroyed. Primary worry: breaking what agents use daily.

## Raw answers (trimmed)

**Q1 — What:** "Figure out how this can be improved from a technical standpoint... clean up the code and make it look better and upgrade it... part tool part encyclopedia... make it a bit more intuitive... things out there on the internet that can make this better for agents to use. People are using it across Macs and PCs... improve the code, the design, the UI/UX, all of that, even things I may not even be paying attention to or understand."

**Q2 — Project root:** /Users/jonathanhall/Desktop/Lenticular-Coding-Base/certainty-system (confirmed).

**Q3 — Why now:** "I just want to see if we can improve it. I want to see what Fable 5 can do." Exploratory; no specific breakage or complaint cited.

**Q4 — Done:** "I don't know what done looks like. That's why I'm looking for [you] to help me figure out what can be improved." → Done = to be proposed by analysis, confirmed by user.

**Q5 — Fixed constraints:** "I don't know what's fixed... I don't want to drastically change it to the point where it's just really crazy. I just want to refresh." Assistant's assumptions (stay on Next.js/Vercel, existing paid services only, solo developer + Claude, no hard deadline) were presented and not contradicted.

**Q6 — Prior decisions:** Paused 7-phase refactor plan — user doesn't recognize it ("I don't know what that is") → treat as input, not obligation. Trainee portal — "we can delete that. I don't really need that." PDFs — user doesn't recognize them ("I don't know what the PDFs are") → flag for analysis.

**Q1 addendum (mid-pipeline, 2026-06-12):** "I'm also wondering about your perspective on the overall visual design of it, like a visual redesign or an upgrade." → A visual design upgrade/redesign opinion is explicitly in scope — the analysis should take a position on whether the current design language (Geist/Playfair, green-on-cream editorial style) should be kept and polished vs. upgraded, within the "refresh, not crazy rebuild" constraint.

**Q7 — Out of scope / worries:** FEMA data pipeline — do not touch. Objection content — do not change ("that stuff works, like the SEP stuff and the objection handbook... I don't want to destroy that"); design/UI/UX-level changes to those pages are acceptable. Worry: don't mess up what works.

</details>
