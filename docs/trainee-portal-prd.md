# Certainty System — Trainee Portal
## Product Requirements Document
### Version 3.1 | March 2026

---

## SECTION 1: WHAT WE ARE BUILDING

A trainee-facing LMS built directly into the existing Certainty System site at `/trainee`. Three layers: authenticated access with gated progression through video lessons, then AI-graded call analysis exercises. When a trainee completes everything, the manager gets notified.

This is Phase 1. No AI conversational tutor. No simulated calls. No voice. Those are future phases. This phase delivers: auth, video curriculum, call analysis, manager notification.

**The trainee portal has one job:** a new agent cannot get through this system by nodding — they have to prove they absorbed the material by analyzing real calls using the framework they just learned.

---

## SECTION 2: SCOPE

### In Scope
- Self-registration with access code + Google sign-in (Auth.js v5)
- Gated video lesson curriculum (submodules, sequential unlock)
- One comprehension check-in question per lesson (see the answer, then advance)
- 15-question final exam after all lessons (must pass to unlock call analysis)
- Call analysis exercises (3 calls, AI-graded via Gemini using must-hit criteria)
- Sticky audio player so trainees can listen and type simultaneously
- Listening briefing before each call analysis (how to approach analyzing a call)
- Trainee progress dashboard (where am I, what's next)
- Manager status page at `/trainee/admin` (who's in, where they are, who's stuck)
- Manager notification on completion (email)
- Mobile-responsive
- Scales to 100+ agents without architectural changes

### Out of Scope (Future Phases)
- AI conversational tutor / Socratic assessment
- Simulated call practice (typed or voice)
- Spaced repetition review
- Objection Gauntlet
- Pattern Spotter mini-game
- Peer comparison / leaderboard

---

## SECTION 3: ARCHITECTURE

### Where It Lives

Inside the existing `certainty-system` repo. The trainee portal is a Next.js route group at `(trainee)/` with its own layout — no Knowledge Hub Nav/Footer, separate auth-gated shell.

```
certainty-system/
  src/
    app/
      (hub)/                        ← Route group for existing Knowledge Hub pages
        page.tsx                    ← current homepage (moved here)
        signals/
        pillars/
        call-types/
        ... (all existing hub routes)
        layout.tsx                  ← Hub layout with Nav + Footer
      (trainee)/                    ← Route group for trainee portal
        trainee/
          page.tsx                  ← Trainee dashboard (post-login)
          login/page.tsx            ← Login / registration page
          lesson/[id]/page.tsx      ← Individual lesson view (includes check-in question)
          exam/page.tsx             ← Final 15-question exam
          analysis/page.tsx         ← Call analysis hub
          analysis/[id]/page.tsx    ← Individual call analysis exercise
          complete/page.tsx         ← Completion page
          admin/page.tsx            ← Manager status board (email-gated)
        layout.tsx                  ← Trainee layout (own nav, sidebar)
      api/
        auth/[...nextauth]/route.ts ← Auth.js v5 route handler
        exam/
          submit/route.ts           ← Final exam submission + grading
        analysis/
          submit/route.ts           ← Call analysis → Gemini grading
        notify/
          complete/route.ts         ← Manager email trigger
      layout.tsx                    ← Root layout (fonts only — minimal)
    lib/
      auth.ts                       ← Auth.js v5 config (Google provider + adapter)
      auth.config.ts                ← Auth config for middleware (edge-compatible)
      db/
        schema.ts                   ← Drizzle ORM schema
        index.ts                    ← Database client
      trainee/
        curriculum.ts               ← Lesson/submodule definitions + check-in questions
        exam-data.ts                ← Final exam questions (15 questions)
        analysis-rubric.ts          ← Must-hit criteria for the 3 calls
        listening-briefing.ts       ← Listening instructions for call analysis
    middleware.ts                    ← UPDATED: IP-restrict hub, auth-check trainee
  public/
    audio/                          ← Call analysis MP3 files (3 files)
      call-1.mp3
      call-2.mp3
      call-3.mp3
```

### Why Route Groups

The Knowledge Hub and the Trainee Portal need completely different layouts. Route groups `(hub)` and `(trainee)` share the same root layout (fonts, CSS variables) while having their own Nav, Footer, and auth behavior.

Existing Hub URLs don't change. `certainty-system.vercel.app/signals` still works. The routes just get organized into `(hub)/` internally — parentheses in the folder name don't appear in the URL.

---

## SECTION 4: TECH STACK — EVERYTHING NATIVE

| Concern | Solution | Why |
|---------|----------|-----|
| Auth | **Auth.js v5** (next-auth@beta) | Native Next.js integration. Google provider built in. Zero external auth service. |
| Database | **Vercel Postgres** (powered by Neon) | Native to Vercel. No extra dashboard. Free tier: 256MB, 1M row reads/mo. |
| ORM | **Drizzle ORM** | Lightweight, edge-compatible, works with Vercel Postgres. Auth.js has a Drizzle adapter. |
| Video hosting | **YouTube (unlisted)** | Zero bandwidth cost. Free. Reliable. Mobile-friendly. |
| Call audio | **`public/audio/` in the repo** | 3 MP3 files. Next.js serves them as static assets. No external storage. |
| AI grading | **Google Generative AI (Gemini 2.0 Flash)** | Already in use. API key exists. Must-hit criteria grading, not percentage scoring. |
| Email notification | **Resend** (free tier: 100 emails/day) | One API call on completion. Could also use any SMTP. |

### New Dependencies

```bash
npm install next-auth@beta @auth/drizzle-adapter
npm install drizzle-orm @vercel/postgres
npm install @google/generative-ai
npm install resend
npx drizzle-kit generate
```

### Environment Variables

```env
AUTH_SECRET=                       # Run: npx auth secret
AUTH_GOOGLE_ID=                    # From Google Cloud Console
AUTH_GOOGLE_SECRET=                # From Google Cloud Console
POSTGRES_URL=                      # Auto-set by Vercel
POSTGRES_URL_NON_POOLING=          # Auto-set by Vercel
TRAINEE_ACCESS_CODE=               # The code you give agents to register
GOOGLE_AI_API_KEY=                 # Already exists
MANAGER_EMAIL=                     # Comma-separated list of manager emails
RESEND_API_KEY=
ALLOWED_IPS=                       # Hub IP restriction (unchanged)
```

---

## SECTION 5: AUTH.JS v5 SETUP

### Core Config — `src/lib/auth.ts`

```typescript
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "@/lib/db"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [Google],
  pages: { signIn: '/trainee/login' },
  callbacks: {
    async signIn({ user, account }) { return true },
    async session({ session, user }) { session.user.id = user.id; return session },
  },
})
```

### Route Handler — `src/app/api/auth/[...nextauth]/route.ts`

```typescript
import { handlers } from "@/lib/auth"
export const { GET, POST } = handlers
```

### Access Code Gating

Handled on the trainee dashboard AFTER sign-in (not before):

1. Trainee clicks "Sign in with Google" → Auth.js creates session + user record
2. Redirect to `/trainee` dashboard
3. Dashboard checks for `trainee_profiles` row
4. No row → show access code input
5. Valid code → `trainee_profiles` row created → curriculum appears
6. Returning trainees go straight to dashboard

### Google Cloud Console Setup

1. Go to https://console.cloud.google.com/apis/credentials
2. Create OAuth 2.0 Client ID (Web application)
3. Authorized origins: `http://localhost:3000` + `https://certainty-system.vercel.app`
4. Authorized redirect URIs: `http://localhost:3000/api/auth/callback/google` + `https://certainty-system.vercel.app/api/auth/callback/google`

---

## SECTION 6: DATABASE SCHEMA (Vercel Postgres + Drizzle ORM)

```typescript
// src/lib/db/schema.ts
import { pgTable, uuid, text, timestamp, integer, boolean, jsonb } from 'drizzle-orm/pg-core'

// Auth.js required tables: users, accounts, sessions, verificationTokens
// Created by DrizzleAdapter

export const traineeProfiles = pgTable('trainee_profiles', {
  userId: uuid('user_id').primaryKey(),
  accessCodeUsed: boolean('access_code_used').default(false),
  registeredAt: timestamp('registered_at').defaultNow(),
  completedAt: timestamp('completed_at'),
  status: text('status').default('active'),
})

export const lessonProgress = pgTable('lesson_progress', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull(),
  lessonId: text('lesson_id').notNull(),
  completedAt: timestamp('completed_at').defaultNow(),
})

export const examAttempts = pgTable('exam_attempts', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull(),
  score: integer('score').notNull(),
  answers: jsonb('answers').notNull(),
  passed: boolean('passed').notNull(),
  attemptedAt: timestamp('attempted_at').defaultNow(),
})

export const analysisSubmissions = pgTable('analysis_submissions', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull(),
  callId: text('call_id').notNull(),
  submission: jsonb('submission').notNull(),
  aiGrade: jsonb('ai_grade'),
  passed: boolean('passed'),
  submittedAt: timestamp('submitted_at').defaultNow(),
})
```

---

## SECTION 7: MIDDLEWARE

```typescript
// src/lib/auth.config.ts
import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"
export default { providers: [Google], pages: { signIn: '/trainee/login' } } satisfies NextAuthConfig
```

```typescript
// src/middleware.ts
import NextAuth from "next-auth"
import authConfig from "@/lib/auth.config"
import { NextResponse } from 'next/server'

const { auth } = NextAuth(authConfig)

export default auth((request) => {
  const { pathname } = request.nextUrl
  const isLoggedIn = !!request.auth

  if (pathname.startsWith('/trainee')) {
    if (pathname === '/trainee/login') {
      if (isLoggedIn) return NextResponse.redirect(new URL('/trainee', request.url))
      return NextResponse.next()
    }
    if (!isLoggedIn) return NextResponse.redirect(new URL('/trainee/login', request.url))
    return NextResponse.next()
  }

  // Hub: IP restriction
  if (process.env.NODE_ENV === 'development') return NextResponse.next()
  const allowedIPs = (process.env.ALLOWED_IPS ?? '').split(',').map(ip => ip.trim()).filter(Boolean)
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? ''
  if (allowedIPs.length > 0 && !allowedIPs.includes(ip))
    return NextResponse.redirect(new URL('/blocked', request.url))
  return NextResponse.next()
})

export const config = { matcher: ['/((?!_next/static|_next/image|favicon.ico|audio/).*)'] }
```

---

## SECTION 8: CURRICULUM STRUCTURE

### Two-Layer Assessment Model

**During lessons:** One check-in question per lesson. Non-gating. Trainee answers, sees result, moves on regardless.

**After all lessons:** 15-question final exam. 80% to pass. Gates call analysis.

### Submodule Map

| # | Submodule | Likely Videos | Check-in Qs |
|---|-----------|--------------|-------------|
| 1 | The Only Job | `An_Agent_s_Mission.mp4` | 1 per lesson |
| 2 | The Three Client Signals | `The_Three_Client_Signals.mp4` | 1 per lesson |
| 3 | The Four Pillars + Storytelling | `The_Mechanics_of_Influence.mp4`, `The_Logic_of_the_Sale.mp4`, `The_Psychology_of_Trust.mp4` | 1 per lesson |
| 4 | The Human Layer | `The_Human_Layer_Loop.mp4` | 1 per lesson |
| 5 | Call Execution | `Blueprint_of_a_Perfect_Call.mp4`, `Shield_of_Compliance.mp4`, `The_Synchronized_Workflow.mp4` | 1 per lesson |
| 6 | Professionalism & Mastery | `The_Ascent_to_Professionalism.mp4`, `The_Agent_Masterclass.mp4`, `Engineering_Certainty...mp4` | 1 per lesson |

### Gating Rules

- Lesson complete = 90%+ video watched (YouTube iframe API) + check-in answered
- Lessons unlock sequentially
- Final exam: 80% to pass (12/15). Unlimited retries.
- Call analysis unlocks when exam passed
- Completion = all 3 call analyses passed

---

## SECTION 9: VIDEO LESSON PAGES

Each lesson at `/trainee/lesson/[id]`:
- YouTube iframe with `enablejsapi=1` for playback tracking
- Summary text below video
- Check-in question appears after 90%+ video watched
- After answering: correct/incorrect + explanation + "Continue" button
- Progress sidebar

```typescript
// src/lib/trainee/curriculum.ts — config format
{
  id: 'sub1-lesson1',
  title: "An Agent's Mission",
  videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',
  summary: 'Your job is one thing: move the client from skeptical to certain.',
  checkIn: {
    question: 'What is the single job of every call?',
    options: [
      { id: 'a', text: 'Explain as many plan benefits as possible' },
      { id: 'b', text: 'Move the client from skeptical to certain' },
      { id: 'c', text: 'Build rapport so the client likes you' },
    ],
    correctAnswer: 'b',
    explanation: 'Every tool in the system serves one purpose: certainty.',
  },
}
```

---

## SECTION 10: FINAL EXAM

15 scenario-based questions. 80% (12/15) to pass. See `docs/trainee-build-sequence.md` Session 3 for full spec.

`POST /api/exam/submit` — validates answers, calculates score, saves attempt, returns results with explanations.

---

## SECTION 11: CALL ANALYSIS — THE LISTENING EXPERIENCE

This is the most important section of the trainee portal. The call analysis exercises are where trainees prove they can actually apply the Certainty System — not just recall it.

### The Workflow: Listen and Analyze Simultaneously

Trainees do NOT listen to the entire call first and then fill out the form. They listen and type at the same time. As they hear signals, objections, pillar usage, and pattern breakdowns, they capture them in real time — the same way a manager would analyze a call.

This is a critical design requirement. The call analysis page must support simultaneous listening and form input.

### Page Layout: Sticky Audio Player

The call analysis page at `/trainee/analysis/[id]` has three zones:

**Zone 1 — Sticky Audio Bar (pinned to top of viewport)**
A slim bar that stays fixed at the top of the screen as the trainee scrolls through the form. Contains: play/pause button, scrub bar with current time / total time, 15-second rewind button, playback speed control (1x / 1.25x / 1.5x). The trainee can pause, rewind, and re-listen to specific moments without losing their place in the form.

CSS: `position: sticky; top: 0; z-index: 10;` on the audio player container. The HTML5 `<audio>` element is hidden — custom controls are rendered for a cleaner UI. The sticky bar should have a subtle background blur and bottom shadow so it's visually distinct from the form content scrolling underneath.

**Zone 2 — Listening Briefing (scrolls, above the form)**
Instructions on how to approach the analysis. Visible when the page loads, scrolls away as the trainee moves into the form. See Section 11B below.

**Zone 3 — Analysis Form (scrolls, below the briefing)**
The structured form fields. The trainee fills these in while the audio plays. See Section 12 below.

### Mobile Layout

On mobile, the sticky audio bar stays at the top. The form fields are full width. The experience is the same — listen and type simultaneously. The audio bar should be compact on mobile (single row: play/pause + scrub bar + time).

---

## SECTION 11B: THE LISTENING BRIEFING

Before the trainee starts the call, they see a briefing that frames how to approach the exercise. This is NOT a set of answers — it's a set of instructions for how to listen.

The briefing appears once at the top of the page, above the form. The trainee reads it, then hits play and starts working.

### Briefing Content

```typescript
// src/lib/trainee/listening-briefing.ts
export const listeningBriefing = {
  title: 'How to Analyze a Call',
  intro: 'You are about to listen to a real call between an agent and a client. Your job is to analyze it the way a manager would — identifying what happened, what the agent did well, what they missed, and what the Certainty System would have prescribed at each moment.',
  instructions: [
    {
      label: 'Listen for the client first',
      detail: 'Before you evaluate the agent, identify who this client is. What call type are they? What signal are they showing? What are they afraid of, excited about, or confused by? The client tells you everything you need to know — usually in the first two minutes.',
    },
    {
      label: 'Track signal changes',
      detail: 'Signals shift during calls. The client might start RED and move to GREEN after a good reframe. Or they might start GREEN and drift to YELLOW when the agent loses momentum. Note when the signal changes and what caused it.',
    },
    {
      label: 'Identify the moments',
      detail: 'Every call has 2–3 moments that determine the outcome. A moment is when the client says something emotionally significant, when the agent makes a key move (or misses one), or when the call pivots in a new direction. You are looking for these moments.',
    },
    {
      label: 'Evaluate the agent against the system',
      detail: 'Did they use the right pillar for the signal they were reading? Did they attempt the Math Breakdown — and if so, did they get to Step 3? Did they catch the Client Gold? Did they execute the Close Confirmation? Judge what happened against what the Certainty System says should have happened.',
    },
    {
      label: 'Type as you listen',
      detail: 'Do not wait until the call is over to start writing. Fill in the form as you go — capture the call type and signal early, note objections as they happen, assess the Math Breakdown in real time. You can always go back and edit. Pause and rewind as needed.',
    },
  ],
  closing: 'There are no trick questions. The form asks you to identify specific things about this call. If you absorbed the training, you will recognize them. If something is unclear, re-listen to that section of the call.',
}
```

### Why This Matters

Without the briefing, trainees approach the exercise cold. They don't know what to listen for, what order to process things in, or that they should be typing while listening. The briefing installs a framework for how to listen — and that framework is the same one they'll use when self-analyzing their own calls in the field. This is training the analysis muscle, not just testing it.

---

## SECTION 12: ANALYSIS FORM

The trainee fills in structured fields while listening. The form is designed to follow the natural flow of a call — identification first, then evaluation, then overall assessment.

```
1. CALL TYPE (fill in early — usually clear within first 2 minutes)
   - Dropdown: 9 call types
   - Text: Why? (2–3 sentences)

2. SIGNAL READING (update as you listen)
   - Primary signal at start: GREEN / RED / YELLOW
   - Did the signal change? If so, when and to what? (text)
   - Did the agent respond correctly to the signal? Yes/No + explanation (text)

3. PILLARS & TOOLS (fill in as you hear them)
   - Which pillar(s) did the agent use? Multi-select: Persuasion, Reframing, The Shift, Refocusing
   - Math Breakdown attempted? Yes/No
     - If yes: Steps completed? Checkboxes: Step 1 / Step 2 / Step 3
   - Client Gold identified and used? Yes/No + what was it? (text)

4. OBJECTIONS (capture each one as it happens)
   - List each objection (text)
   - For each: how did the agent handle it, and was it correct? (text)

5. OVERALL (fill in after the call ends)
   - Call outcome: Enrolled / Missed Opportunity / Correct No-Sale / Unclosable
   - Single biggest thing the agent did right (text)
   - Single biggest thing the agent should have done differently (text)
   - Pattern(s) present: Multi-select from 9 failure patterns
```

Each section has a subtle label hint (e.g., "Usually clear within the first 2 minutes" next to Call Type, "Fill in after the call ends" next to Overall) to guide the trainee on when to complete each section during the call.

---

## SECTION 13: CALL ANALYSIS — MUST-HIT CRITERIA GRADING

For each of 3 calls: 6–8 specific criteria the trainee must correctly identify. Gemini evaluates each as binary hit/miss. Pass = all critical criteria hit.

### Rubric Format

```typescript
// src/lib/trainee/analysis-rubric.ts
export const callRubrics = {
  'call-1': {
    title: 'Ashley Whitehurst vs. Gerald Cramer',
    audioPath: '/audio/call-1.mp3',
    duration: '10m 02s',
    mustHitCriteria: [
      { id: 'call-type', label: 'Call Type', critical: true, correctAnswer: 'Scared Switcher (Type 2)', formField: 'callType' },
      { id: 'primary-signal', label: 'Primary Signal', critical: true, correctAnswer: 'RED', formField: 'primarySignal' },
      { id: 'signal-shift', label: 'Signal Shift', critical: false, correctAnswer: 'RED → GREEN around minute 6', formField: 'signalChange' },
      { id: 'objection-identified', label: 'Primary Objection', critical: true, correctAnswer: '"I don\'t want to change my plan"', formField: 'objections' },
      { id: 'agent-response', label: 'Agent Response', critical: true, correctAnswer: 'Used Reframing (Pillar 2)', formField: 'pillarsUsed' },
      { id: 'math-breakdown', label: 'Math Breakdown', critical: true, correctAnswer: 'Steps 1 and 2 executed, Step 3 missing', formField: 'mathBreakdown' },
      { id: 'client-gold', label: 'Client Gold', critical: false, correctAnswer: 'Granddaughter dental needs at 4:12', formField: 'clientGold' },
      { id: 'biggest-miss', label: 'Biggest Miss', critical: true, correctAnswer: 'No Step 3 — never humanized savings', formField: 'biggestMiss' },
    ],
  },
}
```

Note: each criterion now includes a `formField` that maps to the specific form input it should be evaluated against. Gemini evaluates each criterion against its corresponding field independently — not the entire submission at once.

### Pass/Fail Logic

- All critical criteria hit → PASS. Next call unlocks.
- Any critical criterion missed → FAIL. Full results shown with corrections.
- Non-critical criteria shown as feedback, don't block progression.

---

## SECTION 14: MANAGER STATUS PAGE

`/trainee/admin` — gated by `MANAGER_EMAIL` env var (comma-separated list of emails).

Shows: Name, Registered, Current Position, Lessons Done, Final Exam score + attempts, Analyses Passed, Status. Sorted: stuck → in progress → completed. ⚠️ flag on 3+ exam failures.

---

## SECTION 15: COMPLETION & NOTIFICATION

When Call 3 passes: set `completedAt`, set status `completed`, email manager via Resend.

---

## SECTION 16: DESIGN

Professional, focused, not gamified. Flat `--trainee-bg: #FAFAF8`. No gradient. Geist font. Trainee-specific tokens: `--trainee-accent: #2D5A3D`, `--trainee-active: #E05C34`, `--trainee-locked: #C8C4BD`.

---

## SECTION 17: SCALING & COST

~$20/mo total (Vercel Pro). Everything else free tier. No changes needed until 500+ trainees.

---

## SECTION 18–20: BUILD SEQUENCE & HANDOFF

See `docs/trainee-build-sequence.md` for the 6-session execution plan.
See `docs/TRAINEE_PORTAL_START_HERE.md` for the Claude Code startup prompt.

---

*The Certainty System — Trainee Portal PRD v3.1 | March 2026*
