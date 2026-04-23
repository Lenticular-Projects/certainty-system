'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function EmileSafferCallPage() {
  return (
    <PageShell signal="amber">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/andres-duran" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Andres Duran · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Andres Duran × Emile Saffer</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 22, 2026 · 2:34 · Louisiana (ZIP 70812) · <strong style={{ color: 'var(--mustard-dark)' }}>51 / 100</strong> · Missed Opportunity</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Emile called as an inbound inquiry for Medicare benefits. Compliance was delivered correctly at 0:19. When Emile said he didn&apos;t have his Medicare card at 1:16, Andres pivoted cleanly to SSN verification — &ldquo;I would still be able to pull you up using your social if that&apos;s easier&rdquo; — which was the right move. The call stalled during verification due to audio issues, and at 2:27 the system failed to return a match.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>At 2:27, the response was: &ldquo;It&apos;s not pulling you up.&rdquo; That statement — delivered directly to the consumer — let the failure show in the call. A consumer who hears &ldquo;the system can&apos;t find you&rdquo; has no next step to hold onto. The call ended 7 seconds later with Emile saying &ldquo;What the—&rdquo; and the line going dead.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The system not finding a consumer is common and fixable. What&apos;s not fixable is voicing the failure instead of pivoting around it. When the system fails, the consumer should never know.</p>
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
              { cat: 'Lead Quality',        score: 8,  max: 20 },
              { cat: 'Signal Reading',      score: 13, max: 20 },
              { cat: 'Math Breakdown',      score: 0,  max: 20 },
              { cat: 'Objection Handling',  score: 15, max: 15 },
              { cat: 'Call Outcome Quality', score: 0, max: 10 },
              { cat: 'Compliance',          score: 15, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>51/100 · Full compliance score (15/15) and full objection score (15/15 — no objections raised). Call never reached plan discussion. System failure at 2:27 ended the call.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What You Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Clean compliance delivery (0:19):</strong> TPMO disclaimer, plan count, alternative resources, SOA questions — all delivered correctly inside the first 30 seconds.</li>
            <li><strong>Good initial pivot (1:18):</strong> When Emile said he didn&apos;t have his Medicare card, you offered the SSN immediately without hesitation. &ldquo;I would still be able to pull you up using your social if that&apos;s easier.&rdquo; That&apos;s the right move — a solution offered before the consumer had a chance to feel stuck.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC3 · 2:27</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>System Failure Vocalized to Consumer</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>At 2:27: &ldquo;It&apos;s not pulling you up.&rdquo; That statement lets the failure show in the call. The consumer now knows the system can&apos;t find him — and he has no path forward, no next step, and no reason to stay on the line. When the system fails, stay in your frame. Your voice should sound like you&apos;re working the problem, not hitting a wall. The consumer should feel like you&apos;re in control of the situation even when the technology isn&apos;t.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Let me try a different way to pull you up — just give me one moment.&rdquo; [Pause, put on hold if needed, try name + DOB, try alternate lookup.] Never tell the consumer what the system can&apos;t do. Tell them what you&apos;re doing next.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Andres — you did everything right on this call until 2:27. The compliance was clean, the Medicare card pivot was immediate, the tone was professional. The one thing to practice: when the system doesn&apos;t return a result, never say it out loud. The line is &ldquo;Let me try a different way to pull you up — just give me one moment.&rdquo; Then put them on hold, try name and date of birth, try the alternate lookup, get AJ or a manager if needed. The consumer should never feel like the problem. You stay calm, you keep moving, and you never let the technology dictate how the call ends.</p>
        </section>

      </div>
    </PageShell>
  )
}
