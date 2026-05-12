'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function HGSutherlandCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/karimah-ali" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Karimah Ali · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Karimah Ali × H.G. Sutherland</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 24, 2026 · 7:41 · Palm Bay, FL · <strong style={{ color: 'var(--mustard-dark)' }}>58 / 100</strong> · Incomplete</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Headley G. Sutherland — DOB January 22, 1948, age 78, Palm Bay FL 32907, HealthFirst — was a 7-minute call that ended with a callback set for 4:00 PM. He needed to check his doctor&apos;s availability before committing. The callback decision was correct — you confirmed his primary care physician (Dr. Manowar Ready, every 3 months), confirmed he was ready to receive a call, and kept the interaction warm. This is a correct incomplete, not a missed opportunity.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The coaching gap on this call is what was missed before the callback was set, not the callback itself. At 5:49, Headley mentioned diabetes. That is a C-SNP qualifying condition. The CSN/C-SNP year-round special enrollment period was never identified. He also never heard a pre-close hook before the call ended — a forward-looking statement that gives him a reason to pick up at 4:00 and primes him to say yes when you call. A 7-minute call with no pre-close hook and a missed SEP signal is a callback that has a meaningful chance of not converting.</p>
          </div>
        </section>

        {/* Score Breakdown */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Certainty Score Breakdown</h2>
          <div style={{ background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', borderBottom: '1px solid rgba(19,17,16,0.08)', background: 'rgba(19,17,16,0.03)' }}>
              <span>Category</span>
              <span>Score</span>
              <span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 14, max: 20 },
              { cat: 'Signal Reading', score: 6, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 9, max: 15 },
              { cat: 'Call Outcome Quality', score: 7, max: 10 },
              { cat: 'Compliance', score: 12, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>58/100 — correct callback decision on a doctor-availability hold. Math score zero (no presentation reached). Missed diabetes/C-SNP signal and no pre-close hook before the callback.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>TPMO completed early and cleanly (0:22):</strong> Five organizations, 42 products disclosed. Medicare.gov reference included. Call recording notice given. One of the fastest compliance openings in the week — it was handled in the first 90 seconds without slowing the conversation.</li>
            <li><strong>Medicare verification completed without the card:</strong> You verified Headley&apos;s Medicare information smoothly without requiring him to physically locate his card. For a 78-year-old, this kind of flexibility keeps the call moving and reduces friction.</li>
            <li><strong>Process objection handled correctly (mid-call):</strong> When Headley asked &ldquo;why do you have to go through all these things?&rdquo;, you gave a benefit-focused explanation — the questions are what allow you to find the right plan for his specific situation. That&apos;s the right reframe. It answered the frustration without being defensive.</li>
            <li><strong>Callback confirmed correctly:</strong> You confirmed the 4:00 PM time, confirmed the number, and kept the tone warm. The callback itself was the right call — pushing a consumer to enroll without doctor network confirmation is a compliance risk and a retention risk. Correct judgment.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC6 · 5:49</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Diabetes Signal Missed — C-SNP Year-Round SEP Not Identified</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>At 5:49, Headley mentioned diabetes. Diabetes is a C-SNP qualifying chronic condition that opens a year-round special enrollment period — he can enroll at any time, including right now. This signal was not followed up. The C-SNP pathway would have given you a stronger hook for the 4pm callback and, if you had the plan data ready, potentially converted the call in-session. On the Joan Myzele call the same day, you caught the COPD C-SNP signal and built the entire enrollment around it. Apply that same read to every chronic condition disclosure.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>What to Check at 5:49</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Mr. Sutherland, you mentioned diabetes — that actually qualifies you for a specialized plan designed specifically for chronic conditions. Let me check what&apos;s available in your ZIP code for that pathway.&rdquo; Then: look up C-SNP options in Palm Bay 32907, confirm the qualifying condition, and use the C-SNP OTC benefit as your hook at 4pm.</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC2 · 6:57</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>No Pre-Close Hook Before Callback — Call Ended Cold</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>The callback was set at 4:00 PM and the call ended. Headley had heard some information about why you were calling, but he had no specific forward-looking hook — no number to think about, no specific question that would be answered at 4pm, no reason to be ready when you call. A callback without a pre-close hook is a cold call. A callback with a pre-close hook is a warm continuation. The difference in conversion rate is significant.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Pre-Close Hook Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Mr. Sutherland, before you go — at 4 o&apos;clock I&apos;m going to have two things ready for you: the grocery card amount for your ZIP code, and I want to check if there&apos;s a plan designed specifically for diabetes management in your area. It may be significantly better than what you have. I&apos;ll have all of that when I call.&rdquo;</p>
              </div>
            </div>

          </div>
        </section>

        {/* The Moment That Decided This Call */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>The Moment That Decided This Call</h2>
          <div style={{ padding: '20px 24px', background: 'rgba(19,17,16,0.03)', borderRadius: '10px', borderLeft: '3px solid var(--ink-60)' }}>
            <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 10px' }}>5:49 — Headley mentions diabetes.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This is the signal that changes the 4pm callback from a cold follow-up into a warm continuation. One follow-up question — &ldquo;Mr. Sutherland, you mentioned diabetes — that qualifies you for a specialized chronic condition plan, let me check what&apos;s available for you&rdquo; — and you have a specific, compelling hook to carry into the callback. You did this on Joan Myzele&apos;s call the same day with COPD. The read is already in your toolkit. Apply it to every chronic condition disclosure, not just COPD.</p>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Karimah, the callback decision was correct. Pushing Headley to enroll without confirming Dr. Manowar Ready was in-network would have been the wrong move — you made the right judgment call on a short call. The compliance opening was fast and clean. The process objection reframe was solid. This is a correctly handled incomplete.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>Here&apos;s what to sharpen for the 4pm: when you call Headley back, open with the C-SNP angle. &ldquo;Mr. Sutherland, I did some research while we were off the phone — because you have diabetes, you may qualify for a plan that&apos;s specifically designed for chronic conditions, which comes with a higher grocery card than a standard plan. I want to show you what&apos;s available for your ZIP code.&rdquo; That&apos;s a different call than &ldquo;I&apos;m calling you back like I said I would.&rdquo; And going forward: every time a consumer mentions a chronic condition — diabetes, COPD, heart failure, asthma — stop and flag it. That word is a C-SNP qualifier. You caught it on Joan Myzele the same day. Do it on every call.</p>
        </section>

      </div>
    </PageShell>
  )
}
