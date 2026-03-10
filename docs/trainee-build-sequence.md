# THE CERTAINTY SYSTEM — TRAINEE PORTAL
## Claude Code Build Sequence
### Read `docs/trainee-portal-prd.md` first. This file tells you how to build it.

---

## HOW TO USE THIS FILE

This build is broken into 6 sessions. Each session is one Claude Code conversation.
Each session has: what to build, what files to create/modify, and a verification
checklist. Do not move to the next session until every item in the checklist passes.

**Before Session 1:** Read `docs/trainee-portal-prd.md` (the full PRD) completely.
Confirm your understanding before writing any code.

**Critical context:** This repo is an existing Next.js 14 Knowledge Hub site that
is already live on Vercel. The trainee portal is being ADDED to it. Do not break
the existing site. The existing Knowledge Hub pages, styling, and functionality
must continue to work exactly as they do now.

---

## SESSION 1 — FOUNDATION: Auth, Database, Route Groups

**Goal:** A trainee can sign in with Google, see the access code prompt, enter the
code, and land on an empty dashboard. The existing Knowledge Hub still works.

### 1A. Install dependencies

```bash
npm install next-auth@beta @auth/drizzle-adapter
npm install drizzle-orm @vercel/postgres
npm install resend
npm install -D drizzle-kit
```

### 1B. Set up Vercel Postgres

The database should already be created in the Vercel dashboard (Storage → Create
→ Postgres). The connection string env vars (`POSTGRES_URL`, etc.) are auto-set
by Vercel when you link the database to the project.

### 1C. Create Drizzle schema and config

Create `src/lib/db/schema.ts` — Auth.js required tables (users, accounts,
sessions, verificationTokens) plus trainee-specific tables (trainee_profiles,
lesson_progress, exam_attempts, analysis_submissions).

See PRD Section 6 for the exact schema.

Create `src/lib/db/index.ts` — database client using `@vercel/postgres`.

Create `drizzle.config.ts` at repo root.

Run `npx drizzle-kit generate` then `npx drizzle-kit push` to create tables.

### 1D. Configure Auth.js v5

Create `src/lib/auth.ts` — NextAuth config with Google provider and Drizzle adapter.
Create `src/lib/auth.config.ts` — Edge-compatible config (providers only, no adapter).
Create `src/app/api/auth/[...nextauth]/route.ts` — Route handler.

See PRD Section 5 for the exact code.

### 1E. Split the root layout and reorganize routes

**This is the most delicate step. Read carefully.**

The current `src/app/layout.tsx` renders Nav, Footer, AmbientProvider, and
MotionProvider for ALL routes. This must change so the trainee portal gets
its own layout without the Hub chrome.

**Step 1:** Create `src/app/(hub)/layout.tsx`
- Move Nav, Footer, AmbientProvider, and MotionProvider imports here
- This layout wraps all existing Knowledge Hub routes
- Import a new `hub.css` for gradient, glass, and signal-specific styles

**Step 2:** Move all existing routes into `(hub)/`
- `src/app/page.tsx` → `src/app/(hub)/page.tsx`
- `src/app/page.module.css` → `src/app/(hub)/page.module.css`
- `src/app/signals/` → `src/app/(hub)/signals/`
- `src/app/pillars/` → `src/app/(hub)/pillars/`
- `src/app/call-types/` → `src/app/(hub)/call-types/`
- `src/app/human-layer/` → `src/app/(hub)/human-layer/`
- `src/app/objections/` → `src/app/(hub)/objections/`
- `src/app/patterns/` → `src/app/(hub)/patterns/`
- `src/app/math-breakdown/` → `src/app/(hub)/math-breakdown/`
- `src/app/storytelling/` → `src/app/(hub)/storytelling/`
- `src/app/close-confirmation/` → `src/app/(hub)/close-confirmation/`
- `src/app/how-calls-are-graded/` → `src/app/(hub)/how-calls-are-graded/`
- `src/app/medicare-101/` → `src/app/(hub)/medicare-101/`
- `src/app/blocked/` → `src/app/(hub)/blocked/`

**Step 3:** Simplify root `src/app/layout.tsx`
- Keep only: html tag, body tag, font variables, `globals.css` import
- Remove: Nav, Footer, AmbientProvider, MotionProvider (they're now in hub layout)

**Step 4:** Split `globals.css`
- `globals.css` keeps: CSS reset, CSS custom properties, base body styles,
  base layout utilities, media queries for grids
- Create `hub.css` (imported only by hub layout): ambient gradient, gradientDrift
  keyframes, signal state shifts, .pageOverlay, .glass/.glassDark/.glassSubtle,
  .cardGlow variants, reduced motion override

**Step 5:** Verify the Hub still works — visit every route, check gradient,
glass cards, signal hover, Nav, Footer, mobile menu.

### 1F. Create trainee route group and layout

Create `src/app/(trainee)/layout.tsx` with trainee shell + `trainee.css`.
Create `src/app/(trainee)/trainee/page.tsx` — Dashboard placeholder.
Create `src/app/(trainee)/trainee/login/page.tsx` — Google sign-in button.

### 1G. Update middleware

Dual-path: IP for hub, Auth.js for trainee. See PRD Section 7.

### 1H. Build the access code flow on the dashboard

Dashboard checks for `trainee_profiles` row → access code prompt if missing.

### VERIFICATION CHECKLIST — SESSION 1

- [ ] `npm run dev` starts without errors
- [ ] Hub homepage renders with gradient, Nav, Footer
- [ ] All Hub interior pages render correctly
- [ ] Hub signal hover still works
- [ ] `/trainee` redirects to `/trainee/login` (not logged in)
- [ ] Google sign-in works → redirects to `/trainee`
- [ ] First-time user sees access code prompt
- [ ] Correct code creates trainee profile → shows dashboard
- [ ] Wrong code shows error
- [ ] Returning user goes straight to dashboard
- [ ] `npm run build` succeeds

---

## SESSION 2 — CURRICULUM: Lesson Pages with Video + Check-In Questions

**Goal:** All video lessons viewable in order with YouTube playback tracking
and check-in questions. Sequential unlock.

### 2A. Create curriculum config

Create `src/lib/trainee/curriculum.ts`. See PRD Section 9.

### 2B. Build the lesson page

Create `src/app/(trainee)/trainee/lesson/[id]/page.tsx`
- YouTube iframe with `enablejsapi=1` + iframe API tracking
- Check-in question appears after 90%+ video played
- Answer → see result → "Continue" button → next lesson unlocks
- Save to `lesson_progress` via server action

### 2C. Build the progress sidebar

TraineeSidebar component: submodules, lessons (locked/available/complete),
Final Exam item, Call Analysis items.

### 2D. Update the dashboard

Progress bar, current position, "Continue" link, days in training.

### VERIFICATION CHECKLIST — SESSION 2

- [ ] Dashboard shows progress and "Continue" link
- [ ] Video + summary render on lesson page
- [ ] Check-in hidden until 90%+ video watched
- [ ] Answering shows explanation + "Continue"
- [ ] Sequential unlock works
- [ ] Sidebar shows correct status
- [ ] Progress persists on refresh
- [ ] Mobile responsive

---

## SESSION 3 — FINAL EXAM

**Goal:** 15-question exam. 80% to pass. Results with explanations. Retry.

### 3A. Create exam data

Create `src/lib/trainee/exam-data.ts` — 15 scenario-based questions.

### 3B. Build the exam page

All 15 questions on one page. Submit → results → pass/fail. Gate check on entry.

### 3C. Build the exam API route

`POST /api/exam/submit` — validate, score, save, return results.

### 3D. Update sidebar and dashboard

### VERIFICATION CHECKLIST — SESSION 3

- [ ] Exam locked until all lessons complete
- [ ] All 15 questions render
- [ ] Fail at < 12 correct, pass at >= 12
- [ ] Attempts saved to database
- [ ] Retry works
- [ ] Sidebar and dashboard update on pass

---

## SESSION 4 — CALL ANALYSIS EXERCISES

**Goal:** Three call analysis exercises with sticky audio player, listening
briefing, simultaneous listen-and-type workflow, and AI grading via must-hit
criteria.

### 4A. Place audio files and create configs

Confirm 3 MP3 files in `public/audio/`.

Create `src/lib/trainee/analysis-rubric.ts` — must-hit criteria per call.
See PRD Section 13.

Create `src/lib/trainee/listening-briefing.ts` — the listening instructions
that appear before each call analysis. See PRD Section 11B. This briefing
teaches the trainee HOW to listen — what to pay attention to, in what order,
and that they should be typing while listening.

### 4B. Build the analysis hub page

Create `src/app/(trainee)/trainee/analysis/page.tsx`

- Gate: exam must be passed
- 3 calls listed with title, agent name, duration
- Sequential unlock: Call 1 open, Calls 2-3 locked until previous passed

### 4C. Build the individual analysis page — THREE ZONES

Create `src/app/(trainee)/trainee/analysis/[id]/page.tsx`

This page has a specific layout with three zones. Read PRD Section 11 carefully.

**ZONE 1 — STICKY AUDIO BAR (pinned to top of viewport)**

The audio player stays fixed at the top of the screen as the trainee scrolls
through the form. This is the key UX decision — trainees must be able to
listen and type simultaneously.

Implementation:
- Use HTML5 `<audio>` element (hidden) for playback
- Build custom controls: play/pause, scrub bar, current time / total time,
  15-second rewind button, playback speed (1x / 1.25x / 1.5x)
- CSS: `position: sticky; top: 0; z-index: 10;`
- Add subtle `backdrop-filter: blur(8px)` and bottom shadow so the bar is
  visually distinct from form content scrolling underneath
- On mobile: compact single-row layout (play/pause + scrub + time)

The trainee hits play, starts listening, and scrolls through the form to type
observations as they hear them. They can pause, rewind 15 seconds, re-listen
to a moment — all without losing their place in the form.

**ZONE 2 — LISTENING BRIEFING (scrolls away)**

Above the form, show the listening briefing from `listening-briefing.ts`.
This tells the trainee how to approach the analysis:
- Listen for the client first (call type, signal)
- Track signal changes
- Identify the key moments
- Evaluate the agent against the system
- Type as you listen — don't wait until the call is over

The briefing is visible when the page first loads. As the trainee scrolls
into the form, the briefing scrolls away naturally. The sticky audio bar
remains pinned.

Consider adding a "collapse briefing" toggle for returning attempts — a
trainee retrying doesn't need to re-read the instructions.

**ZONE 3 — ANALYSIS FORM (scrolls below briefing)**

The structured form from PRD Section 12. Fields are ordered to match the
natural flow of a call:

- Section 1: Call Type (dropdown + reasoning) — hint: "Usually clear in first 2 min"
- Section 2: Signal Reading (primary signal, changes, agent response) — hint: "Update as you listen"
- Section 3: Pillars & Tools (multi-select, Math Breakdown, Client Gold) — hint: "Fill in as you hear them"
- Section 4: Objections (text) — hint: "Capture each one as it happens"
- Section 5: Overall (outcome, biggest right/wrong, patterns) — hint: "Fill in after the call ends"

Each section has subtle timing hints so the trainee knows when during the
call to fill in that section.

Submit button at the bottom → POST to `/api/analysis/submit`

### 4D. Build the analysis grading API

Create `src/app/api/analysis/submit/route.ts`

- Load must-hit criteria from analysis-rubric.ts
- For each criterion: send a focused Gemini prompt comparing the trainee's
  corresponding form field against that specific criterion
- Each criterion maps to a specific `formField` in the rubric
- Return per-criterion results: hit/miss + evidence + correction
- Determine pass/fail based on critical criteria
- Save to analysis_submissions table

### 4E. Build the results display

After submission, show on the same page (audio bar can be hidden or collapsed):
- Pass/fail banner
- Each criterion: ✅ or ❌ + what they said + what was correct
- Non-critical criteria as feedback (not blocking)
- If passed: "Continue to next call" or "All analyses complete"
- If failed: "Review feedback and try again" — audio bar reappears for re-listen

### 4F. Completion trigger

When Call 3 passes:
- Set `completed_at` and `status` on trainee_profiles
- Email manager via Resend (`/api/notify/complete`)
- Redirect to `/trainee/complete`

Create completion page with summary of exam + analysis results.

### VERIFICATION CHECKLIST — SESSION 4

- [ ] Analysis hub locked until exam passed
- [ ] Call 1 page loads with sticky audio bar + briefing + form
- [ ] Audio bar stays pinned while scrolling through form
- [ ] Can play, pause, rewind 15s, change speed while filling form
- [ ] Listening briefing visible on first load, scrolls away naturally
- [ ] Form sections have timing hints
- [ ] Can type in form fields while audio plays (simultaneous)
- [ ] Audio plays correctly from `public/audio/`
- [ ] Form validates required fields before submit
- [ ] Gemini grading returns per-criterion results
- [ ] Pass when all critical criteria hit
- [ ] Fail with specific feedback when criteria missed
- [ ] Can retry after failure (audio bar returns)
- [ ] Call 2 unlocks after Call 1 passes
- [ ] Call 3 unlocks after Call 2 passes
- [ ] After Call 3: trainee profile marked complete
- [ ] Completion email sent to manager
- [ ] Completion page shows summary
- [ ] Mobile: sticky bar works, form is full width

---

## SESSION 5 — MANAGER STATUS PAGE

**Goal:** Status board at `/trainee/admin`. Multiple manager emails.

### 5A. Build the admin page

- Gate by `MANAGER_EMAIL` env var (comma-separated)
- Server component, one database query
- Table: Name, Registered, Current Position, Lessons Done, Final Exam,
  Analyses Passed, Status
- Sort: stuck → in progress → completed
- ⚠️ on 3+ exam failures
- Summary counts at top

### VERIFICATION CHECKLIST — SESSION 5

- [ ] Accessible with manager email
- [ ] Redirects non-managers
- [ ] Shows all trainees with accurate data
- [ ] ⚠️ flag on 3+ failures
- [ ] Multiple emails work

---

## SESSION 6 — POLISH AND SHIP

**Goal:** Mobile responsive, visual polish, edge cases, production deploy.

### 6A. Mobile responsive pass

All pages, especially: sticky audio bar on analysis page, sidebar collapse,
exam touch targets, admin table horizontal scroll.

### 6B. Visual polish

Consistent with Hub aesthetic. Geist font. `--space-*` scale. Professional.

### 6C. Edge cases

Refresh mid-exam, Gemini timeout/malformed JSON, audio load failure,
direct URL access to locked content, suspended trainee.

### 6D. Production deployment

Env vars → build → deploy → test full flow → test Hub → test mobile.

### VERIFICATION CHECKLIST — SESSION 6

- [ ] Mobile 375px: all pages render correctly
- [ ] Desktop 1440px: all pages render correctly
- [ ] Visual consistency across all trainee pages
- [ ] Edge cases handled
- [ ] Production deploy works
- [ ] Full flow works on production
- [ ] Hub unaffected
- [ ] Manager status page works

---

## ENVIRONMENT VARIABLES REFERENCE

```
AUTH_SECRET=                        # npx auth secret
AUTH_GOOGLE_ID=                     # Google Cloud Console
AUTH_GOOGLE_SECRET=                 # Google Cloud Console
POSTGRES_URL=                       # Auto-set by Vercel
POSTGRES_URL_NON_POOLING=           # Auto-set by Vercel
TRAINEE_ACCESS_CODE=                # Manager chooses
GOOGLE_AI_API_KEY=                  # Already exists
MANAGER_EMAIL=                      # Comma-separated
RESEND_API_KEY=
ALLOWED_IPS=                        # Existing, unchanged
```

---

*The Certainty System — Trainee Portal Build Sequence v2 | March 2026*
