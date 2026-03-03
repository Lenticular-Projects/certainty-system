# Certainty System — Development Journal

A running log of meaningful changes to the codebase. Each entry explains what changed and why.

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
