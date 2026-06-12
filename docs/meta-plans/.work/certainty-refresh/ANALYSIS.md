# ANALYSIS — certainty-refresh

Grounding reads performed: `src/app/(hub)/page.tsx`, `src/app/(hub)/hub.css`, `src/components/layout/Nav.tsx`, `src/middleware.ts`, `package.json`, agents-dir inbound-link grep (zero hits). All claims below cite INTAKE/DISCOVERY paths or files read this pass.

## 1. ASSUMPTION REGISTER

Sorted by Rank (L×C) descending.

| ID | Statement | Evidence | Verify | L | C | Rank |
|----|-----------|----------|--------|---|---|------|
| A1 | The 223 `/agents` + daily-brief/team-report/top-closer pages are write-only archives, NOT a navigation surface agents use — so they can be excluded from (or archived out of) the refresh without harming daily use. | DISCOVERY §1 (223 hardcoded pages, biggest unmentioned mass); grep this pass: zero inbound `href` from hub/Nav/components to `/agents`,`/daily-brief`,`/team-report`,`/top-closer`. Intake never mentions them. | YES (partial — could be opened via bookmarked/external URL) | 2 | 3 | 6 |
| A2 | "Refresh, not crazy rebuild" forbids re-architecting the hardcoded-TSX content model (objections-data.ts 2,055 lines, sep-check 2,532, 223 agent pages) into JSON/CMS — cleanup must work around the content architecture, not replace it. | Intake Q5 "just refresh"; Q7 objection/SEP locked; DISCOVERY §3 (data hardcoded in TSX, MDX deps unused). | NO (judgment on user tolerance) | 2 | 3 | 6 |
| A5 | "FEMA pipeline must not be touched" = leave fema-active.json + manual-commit flow alone; the sep-check consumer may still get design/UX polish if data read+filter logic is preserved. | Intake Q7 "do not touch"; DISCOVERY §3 (pipeline = json + sep-check consumer). Boundary not explicitly stated by user. | NO (judgment on where "pipeline" ends) | 2 | 3 | 6 |
| A3 | Deleting the trainee portal will not break hub/tool routes — trainee code is isolated behind middleware carve-outs and trainee-only deps. | DISCOVERY §1; `src/middleware.ts` read confirms 4 path carve-outs; package.json confirms next-auth/drizzle/wavesurfer/resend/postgres/generative-ai. | YES (build + grep after deletion) | 1 | 3 | 3 |
| A9 | No tests + no CI means any cleanup/upgrade is unverifiable except by manual smoke — a minimal verification harness is a precondition, not optional polish. | DISCOVERY §3 ("No tests, no CI, .github absent"). | YES | 1 | 3 | 3 |
| A7 | Live design is animated-gradient + glassmorphism editorial (NOT the static green-on-cream in MEMORY.md); owner is moderately—not deeply—attached. | hub.css: body 4-color animated gradientDrift + glass; page.tsx uses framer-motion throughout; Intake Q1 addendum invites redesign opinion. | NO (attachment is judgment) | 2 | 2 | 4 |
| A8 | Next 14.2.35 → 15 is discretionary (caching-default + async-API breaking changes), not required by any goal — should be optional, gated behind build/smoke. | DISCOVERY §1 (actually on next@14.2.35; memory "Next 15" claim false); §3 (no tests/CI). | YES (verifiable via build) | 2 | 2 | 4 |
| A10 | framer-motion (173 files) and the animation layer are part of "what works"; removing/replacing them is destructive, not cleanup. | DISCOVERY §3 (framer-motion 173 files — heavy); page.tsx + Nav.tsx saturated with motion. | NO (judgment) | 2 | 2 | 4 |
| A12 | "Agents use it daily across Macs and PCs" is the stated usage model, but zero telemetry/analytics in-repo — UX priorities rest on owner's word, not data. | Intake Q1; DISCOVERY §3 (no analytics dep, no vercel.json). | NO (can't verify from repo) | 2 | 2 | 4 |
| A4 | Editing middleware to remove trainee carve-outs is safe and doesn't contradict "don't break what agents use" — carve-outs only exempt soon-deleted routes; hub IP-gate logic untouched. | middleware.ts read: lines 8-16 trainee exemption; lines 18-37 independent hub IP gate. | YES (read + post-edit build) | 1 | 2 | 2 |
| A6 | Nobody consumes the 4 PDF API routes from the live site (PDFs distributed directly) — PDF system is dead weight, not load-bearing. | DISCOVERY §1; memory "No site download buttons"; Intake Q6 owner doesn't recognize PDFs. | YES (grep links to /api/pdf) | 2 | 1 | 2 |
| A11 | Suspect deps (@next/mdx, next-mdx-remote, gray-matter, possibly d3) are unused by user-facing routes and removable without behavior change. | DISCOVERY §2 (no MDX content; d3 only in 2 analysis pages). | YES (depcheck/grep) | 2 | 1 | 2 |
| A13 | Accessibility is genuinely weak (9 files use aria-*); improving it is in-scope "things owner doesn't know to ask," not a substance change to locked content. | DISCOVERY §3 ("only 9 files use aria-*"). | YES (axe scan) | 1 | 2 | 2 |
| A14 | The two preview/* routes and duplicate john-petipas/john-pettipas are stale dead code safe to remove. | DISCOVERY §2. | YES (diff/grep) | 1 | 1 | 1 |

## 2. ADVERSARIAL CRITIQUE

**C1 — SIGNIFICANT — "Refresh" with a user-admitted undefined 'done' is unbounded scope across an unusually large surface.** Intake Q4: *"I don't know what done looks like."* DISCOVERY §3 measures ~60,900 lines TS/TSX, 152 CSS modules, 223 archive pages, a PDF subsystem, and a portal to delete — all under one word. "Clean up AND improve UI/UX AND upgrade AND maybe visual-redesign AND surface unknowns" is four projects. Defense: the pipeline is designed to PROPOSE done — handled in §3, but only if acceptance criteria draw a hard line.

**C2 — SIGNIFICANT (as question, per evidence rule) — Is the real problem the hardcoded-TSX content architecture, making CSS/UX polish "rearranging deck chairs"?** DISCOVERY §3: data is "predominantly hardcoded in TSX," objections-data.ts 2,055 lines, sep-check 2,532. The highest-leverage engineering win (separating content from presentation so updates stop requiring code edits) is exactly what A2 says "refresh, not rebuild" forbids. Can't prove the owner would value it over polish — caps at SIGNIFICANT — but the plan should NAME this tension and let the owner choose, not silently default to surface polish. Intake Q1 "things I may not even be paying attention to" invites it.

**C3 — SIGNIFICANT — Deleting the trainee portal while also editing middleware mildly contradicts the #1 worry ("don't break what agents use daily").** middleware.ts is the single gate protecting EVERY hub route via IP allowlist; the deletion requires editing this exact file. A mistake here can lock agents out of the whole site or expose it. Defense: the hub IP-gate (lines 18-37) is structurally independent of the carve-out block (lines 8-16), so a clean deletion is low-risk (A4). Net: deletion is fine; the coupling to middleware deserves explicit care.

**C4 — SIGNIFICANT — No tests + no CI means the entire refresh is unverifiable, yet verification isn't in the stated goals.** DISCOVERY §3: "No tests, no CI." Every Verify=YES claim is verifiable only by someone running a build and clicking around — no automated net. A cleanup that "looks done" can silently break a route an agent depends on mid-call. Strongest argument that a minimal smoke/build verification layer is a precondition (A9). The owner didn't ask because they don't know to (Intake Q1) — flagship "surface what they don't know" item.

**C5 — MINOR — The 223 agent pages are the largest mass (4.7MB TSX) but have zero inbound links and zero intake mention.** Grep this pass: no href to /agents from hub/Nav/components. IP-gated archives reached only by direct URL. MINOR to the refresh (not in daily-use path, A1) but a major latent fact: they dominate repo size/build time and may be externally bookmarked. Plan should quarantine them and ask the owner whether they're referenced anywhere outside the repo.

Attack vectors tried and defeated:
- *"FEMA boundary ambiguous enough to be a BLOCKER"* — defeated: DISCOVERY §3 scopes pipeline to one JSON + one consumer; fuzzy (A5) but "don't touch data/flow, polish consumer carefully" is a safe default.
- *"Trainee deletion blast radius underestimated"* — defeated: middleware + 9 deps + drizzle.config enumerated (DISCOVERY §1) and confirmed in package.json; bounded and greppable (A3).
- *"Design memory stale → plan polishes wrong design"* — defeated by reading hub.css: live design is animated-gradient + glass, not static green-on-cream. Caught pre-plan (A7).
- *"Next 15 upgrade implied and risky"* — defeated: discretionary, not required (A8), gated behind build/smoke.

No BLOCKERs (no item meets cited-evidence-of-certain-harm; worst risks are scope and verifiability, both mitigable in planning).

## 3. ACCEPTANCE CRITERIA

**SCOPE-TOO-LARGE flagged.** Four intents (cleanup, UI/UX, visual-design decision, upgrade) over ~61k lines cannot honestly fit ≤7 falsifiable criteria as one effort. Proposed split:

- **Scope A — Safe Subtractive Refresh (recommended first):** trainee deletion + dead-code/dep removal + middleware cleanup + minimal verification harness + design polish of the existing language. Low blast radius, high confidence, mostly Verify=YES.
- **Scope B — Additive UX & Design Direction (decide after A):** intuitiveness/navigation (incl. the un-linked archive question), accessibility pass, optional Next 15 upgrade, and the keep-vs-upgrade visual decision executed. Higher judgment, depends on owner choices.

Criteria:

1. **Trainee portal fully removed, no regressions.** Measured: `next build` succeeds AND zero imports of trainee-only deps AND every hub/tool/sep route returns 200 in smoke pass. Threshold: 0 build errors, 0 dangling imports, 0 broken routes. Source: Intake Q6 "we can delete that"; DISCOVERY §1 inventory. [Scope A]
2. **FEMA pipeline provably untouched.** Measured: `git diff` shows no change to fema-active.json and sep-check data-read/filter logic is behavior-identical. Threshold: 0 functional changes. Source: Intake Q7 "do not touch." [Scope A]
3. **Locked content unchanged in substance.** Measured: diff of objections-data.ts + SEP content shows no copy/data deletions (CSS/markup-only allowed). Threshold: 0 substance changes. Source: Intake Q7 "don't want to destroy that." [Scope A]
4. **Dead weight reduced, measured not vibed.** Measured: removed deps + dead routes (preview/*, dup route) + unused MDX/d3 confirmed via depcheck. Threshold [PROPOSED — confirm with user]: remove ≥ the deps DISCOVERY flagged unused with build green. Source: DISCOVERY §2. [Scope A]
5. **A minimal verification floor exists.** Measured: documented smoke checklist OR build+route-200 script runs green; ideally lightweight CI. Threshold [PROPOSED — confirm with user]: every top-level hub/tool route asserted reachable post-change. Source: DISCOVERY §3 "no tests, no CI" (the gap). [Scope A]
6. **Navigation intuitiveness improved against a baseline.** Measured: the un-linked 223 agent/report pages intentionally surfaced or explicitly quarantined; core tools reachable ≤2 clicks from home. Threshold [PROPOSED — confirm with user]: ≤2 clicks to Objections/SEP-Check/SEP-Guides. Source: Intake Q1 "more intuitive"; grep-confirmed zero inbound links. [Scope B]
7. **Visual-design decision made and applied within the fence.** Measured: owner confirms keep-polish vs upgrade (§4); chosen direction implemented without framework/design-system swap. Threshold [PROPOSED — confirm with user]: no core-stack change (Next/CSS-Modules), no removal of animation layer unless owner opts in. Source: Intake Q1 addendum; Q5 "not crazy." [Scope B]

## 4. DESIGN OPINION

**Verdict: KEEP-AND-POLISH the existing design language. Do not commission a visual rebuild.**

Grounded in what I read:
- The homepage (page.tsx) is a deliberately art-directed editorial layout — eyebrow/headline/body rhythm, a definition card, a numbered three-jobs block, a system map, staggered framer-motion reveals, a Playfair display-xl/lg type scale. Not a default-Next template; someone designed it.
- The live aesthetic is richer than MEMORY.md implies: hub.css drives a 4-color animated gradient (gradientDrift, 20s) + glass morphism + signal-state background shifts (red/yellow/green) tied to page content. That signal-color system is a genuine product idea (the site visually reflects call state).
- Replacing wholesale would (a) violate "refresh, not crazy rebuild" (Intake Q5), (b) risk the locked-content pages' typography, (c) be high-effort for a goal of "see what can be improved," not "I hate how it looks."

Where polish IS warranted (the upgrade, without a rebuild):
1. **Restraint on motion.** framer-motion in 173 files is heavy; for a tool used mid-call, animation must never delay reading a script. Audit motion that gates content visibility; respect prefers-reduced-motion.
2. **The animated gradient may fight readability/perf** on long reference pages and low-end PCs. Calm or freeze it on dense content pages, keep it on home/hero — preserves the brand moment, improves the workhorse pages.
3. **Accessibility is the real visual debt** (9 files use aria-*): focus states, contrast of green/amber on the gradient, semantic headings. The "things you don't know to ask about" win.
4. **Consistency pass** across the 28 hub pages so the editorial system (eyebrow → display headline → body) is applied uniformly rather than re-implemented per 1,100–1,400-line page component.

In short: the design has a real point of view worth protecting; the upgrade is discipline and accessibility, not a new look.
