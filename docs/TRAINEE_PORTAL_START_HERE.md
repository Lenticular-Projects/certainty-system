# TRAINEE PORTAL — CLAUDE CODE START HERE

**Read these three files in this order before writing any code:**

1. `docs/trainee-portal-prd.md` — The full product requirements document. Every feature, every database table, every API route, every design decision.
2. `docs/trainee-build-sequence.md` — The build broken into 6 sessions with verification checklists. Follow it step by step.
3. `docs/CLAUDE_CODE_START_HERE.md` — The original Knowledge Hub handoff. Understand the existing site before modifying it.

---

## WHAT YOU ARE BUILDING

A trainee-facing LMS at `/trainee` inside the existing Certainty System Knowledge Hub site. Auth + gated video lessons + AI-graded call analysis exercises. The existing Hub must not break.

## CRITICAL ARCHITECTURE DECISIONS (ALREADY MADE)

- **Route groups:** `(hub)/` for existing pages, `(trainee)/` for new portal.
- **Root layout split:** Current root layout renders Nav, Footer, AmbientProvider, MotionProvider. These move into `(hub)/layout.tsx`. Root layout becomes minimal. CSS splits: base tokens global, gradient/glass hub-only.
- **Auth:** Auth.js v5 with Google provider + Drizzle adapter. Access code checked AFTER sign-in on the dashboard.
- **Database:** Vercel Postgres via Drizzle ORM.
- **Videos:** YouTube (unlisted) with iframe API for playback tracking.
- **Assessment:** One non-gating check-in per lesson. One 15-question final exam (80% to pass). Then 3 AI-graded call analysis exercises.
- **Call analysis UX:** Sticky audio player pinned to top of viewport. Trainee listens and types simultaneously. Listening briefing before the form teaches them how to analyze. Form sections have timing hints matching the call flow.
- **Call analysis grading:** Must-hit criteria (binary hit/miss), NOT percentage scoring. Each criterion mapped to a specific form field.
- **Manager portal:** `/trainee/admin` gated by `MANAGER_EMAIL` env var (comma-separated).
- **Audio files:** `public/audio/` as static assets.

## START WITH SESSION 1

Open `docs/trainee-build-sequence.md` and execute Session 1. Do not skip ahead. Complete every verification checklist item before moving to Session 2.

Session 1 is the most delicate — it reorganizes the existing site into route groups and splits the layout. Test the Hub thoroughly after this step.

## RULES

- Do not use Tailwind CSS. CSS Modules only.
- Do not modify existing Knowledge Hub pages or styling.
- Do not invent content. Use placeholder video IDs and audio files until real ones are provided.
- Follow the Drizzle schema and Auth.js v5 setup exactly as specified in the PRD.

## ENVIRONMENT VARIABLES

```
AUTH_SECRET=                        # npx auth secret
AUTH_GOOGLE_ID=                     # Google Cloud Console
AUTH_GOOGLE_SECRET=                 # Google Cloud Console
POSTGRES_URL=                       # Auto-set by Vercel
POSTGRES_URL_NON_POOLING=           # Auto-set by Vercel
TRAINEE_ACCESS_CODE=                # Manager provides
GOOGLE_AI_API_KEY=                  # Already exists
MANAGER_EMAIL=                      # Comma-separated
RESEND_API_KEY=                     # From resend.com
ALLOWED_IPS=                        # Existing, unchanged
```

## CONFIRM BEFORE CODING

After reading all three docs, respond with:
"I've read the PRD, build sequence, and original handoff. Here's my understanding of the project and here are my questions before I start Session 1."

Do not write code until you've confirmed understanding.

---

*The Certainty System — Trainee Portal | Claude Code Startup Prompt | March 2026*
