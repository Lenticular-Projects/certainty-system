# Certainty System — Development Journal

A running log of meaningful changes to the codebase. Each entry explains what changed and why.

---

## 2026-03-16 — SEP Check: Accuracy Overhaul + Full Reference

**Files changed:**
- `src/app/(hub)/sep-check/page.tsx`
- `src/app/(hub)/sep-check/page.module.css`

**Why:**
The SEP Check page was built with reasonable information but contained several factual inaccuracies when cross-referenced against the company's SEP Guide spreadsheet and CMS guidance (42 CFR §422.62, §423.38, CMS MA/PD Enrollment Guidance CY2025–2026). Incorrect enrollment windows and missing restrictions could lead agents to use the wrong SEP code or miss valid enrollment opportunities.

**What changed:**

*Signal Card Corrections (6 cards):*
- **MOV (Moved):** Window corrected to include month before move (with advance notice). Added warning: not valid for PO Box change. Added MARx address mismatch trigger.
- **INT/DEP (Dual/LIS):** Split into two codes — INT for full-benefit duals enrolling in D-SNP (FBDE, QMB+, SLMB+ only), DEP for any Medicaid/LIS level doing PDP changes. Added MCD/NLS (3-month window for Medicaid/Extra Help level changes).
- **CSN (Chronic):** Corrected from "ongoing/anytime" to "one-time per qualifying condition." Added restriction: not valid CSNP→CSNP for same condition.
- **EOC/MYT (Plan Ending):** MYT window corrected to 2 months before + 1 month after. Added REC (state receivership).
- **LEC (Lost Coverage):** Window corrected to month of loss + 2 months after (not just 2 months after). Added LCC cross-reference.
- **IEP/ICEP (New to Medicare):** Distinguished IEP (7 months) from ICEP (6 months, extended 1/1/2025). Added IEP2 (disability→65, MRD, "1961 golden year"). Added OEP-N (first plan dissatisfaction, one change). IEP not valid for MA-only; ICEP not valid for PDP.

*Full SEP Reference Table:*
- Expanded from 10 flat rows to 35+ entries organized into 10 categories: New to Medicare, Financial Eligibility, Location/Life Change, Chronic/Special Needs, Institutionalized/LTC, Involuntary Disenrollment, Voluntary Changes, Star Ratings, Disaster, Election Periods.
- Every entry now has: trigger description, SEP name, enrollment window, application code, and (where applicable) restriction notes.
- New SEP codes added: IEP2, ICEP, OEP-N, RET, INT, DEP, MCD, NLS, PAP, PAC, SNP, OEP-I, LTC, LCC, INV, REC, OSD, 12G, 12J, CDC, DIF, INC, RUS, LAW, 5ST, LPI.

*CSS:*
- Cheat sheet grid updated from 3 columns to 4 (added Code column).
- Added `.cheatCategory` style for section headers.
- Added `.cheatNote` for restriction/note text under SEP names.
- Updated responsive breakpoints for 4-column layout.

**Verification method:**
Cross-referenced against (1) company SEP Guide spreadsheet, (2) CMS CY2025 Final Rule, (3) medicare.gov SEP reference, (4) 42 CFR §422.62 and §423.38, (5) CMS CY2025 Dual/LIS SEP guidance and Integrated Care SEP implementation documents.

---

## 2026-03-11 — Teachable Results Output (Trainee Grading)

**Files changed:**
- `src/app/api/analysis/submit/route.ts`
- `src/components/trainee/CallAnalysisForm.tsx`
- `src/components/trainee/CallAnalysisForm.module.css`

**Why:**
Trainee feedback after grading was generic — it told them their score but not what specifically was wrong or where to study. The goal was to make the results output teach the trainee what they missed and where to learn it.

**What changed:**
- Grading prompt updated: `summary` now asks for a coaching paragraph naming the most significant miss with real-world consequence. `feedback` per section now uses tiered language: zero-credit = "You said X. Correct answer is Y. [diagnostic]", partial = "You identified X. You missed Y — [gap]", full = affirming.
- Added `focusAreas` array to grading JSON schema: 2–3 specific study imperatives on fail, empty on pass.
- Added "Before You Retry" block between fail card and section breakdown with focus areas and inline Hub link badges (using `SECTION_STUDY_LINKS` map).
- Section feedback text opacity now varies by score: zero = darker (0.7), full = lighter (0.4), default = 0.55.
- Weak sections (< 70%) get a "Review" badge linking to the relevant Hub page.

---

## 2026-03-09 — Trainee Portal + Call Analysis

**Files added/changed:**
- `src/app/(trainee)/` — Trainee route group with separate layout
- `src/components/trainee/CallAnalysisForm.tsx` — Main form with audio playback (WaveSurfer.js) and AI grading
- `src/app/api/analysis/submit/route.ts` — Gemini 2.0 Flash grading API
- `src/lib/trainee/ideal-analyses/` — Expert analyses and ideal responses for calls

**Why:**
Needed a training exercise where new agents listen to real calls and analyze them, then get AI-graded feedback on their analysis. The trainee portal is separate from the Knowledge Hub with its own layout and routing.

**What was built:**
Audio playback with WaveSurfer.js waveform visualization. Form with sections for call type, signal, pillar identification, objection handling, math breakdown accuracy, and overall assessment. Submissions sent to Gemini 2.0 Flash with a two-layer grading system: expert analysis (deep context) + ideal responses (answer key). Pass threshold: score ≥ 65 AND Call Type correct AND Signal correct. Scores clamped server-side, pass recomputed.

---

## 2026-03-05 — SEP Check Page + FEMA Disaster Data

**Files added:**
- `src/app/(hub)/sep-check/page.tsx`
- `src/app/(hub)/sep-check/page.module.css`
- `public/data/fema-active.json`

**Why:**
Agents need to quickly determine if a caller qualifies for a Special Enrollment Period during a live call. This is the most time-critical decision in the call flow — missing an SEP means losing an enrollment.

**What was built:**
Interactive "live qualifier" tool with: (1) enrollment period detection (AEP/OEP/SEP season) with countdown, (2) 6 signal cards covering the most common SEP triggers with ask/listen/tap workflow, (3) FEMA disaster lookup by state/county against a local JSON data file, (4) deadline calculators for time-sensitive SEPs, (5) sticky summary strip showing progress, (6) cheat sheet reference table, (7) keyboard shortcuts (1-6 for signals, R to reset, F for FEMA focus). The page adapts its behavior based on the current enrollment period (AEP shows green "no SEP needed" block, OEP shows interactive fork for MA vs. Original Medicare).

---

## 2026-03-02 — IP Access Control (Middleware)

**Files added:**
- `src/middleware.ts`
- `src/app/blocked/page.tsx`

**Why:**
The site contains proprietary sales training content (objection responses, call scripts, pillars, patterns) that should not be publicly accessible. Anyone with the URL could view it. The goal was to restrict access to known office/authorized IP addresses only, with no login UI required.

**What was built:**
Next.js Edge Middleware (`middleware.ts`) that intercepts every incoming request before any page renders. It reads the visitor's IP from the `x-forwarded-for` header and checks it against a comma-separated allowlist stored in a Vercel environment variable (`ALLOWED_IPS`). If the IP is not in the list, the visitor is redirected to `/blocked`. In local development, the check is skipped entirely so the dev workflow is unaffected.

The blocked page (`/blocked`) is intentionally minimal — it says "Access Restricted" with no details about what the site is or how to gain access.

**How to manage access:**
- Add/remove IPs in Vercel project settings → Environment Variables → `ALLOWED_IPS`
- Format: comma-separated, e.g. `203.0.113.45,76.100.200.50`
- Changes take effect immediately without a code redeploy
- To find an IP from any network: visit whatismyip.com

**Important:** Deploy the code only after setting `ALLOWED_IPS` in Vercel, otherwise everyone (including the office) will be blocked.

---
