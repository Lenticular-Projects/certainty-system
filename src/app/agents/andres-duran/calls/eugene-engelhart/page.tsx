'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function EugeneEngelhartCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/andres-duran" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Andres Duran · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Andres Duran × Eugene Engelhart</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 22, 2026 · 4:37 · Boynton Beach, FL (ZIP 33436) · <strong style={{ color: 'var(--terracotta)' }}>38 / 100</strong> · Missed Opportunity</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Eugene was a confused inbound caller from Boynton Beach, FL. He was not immediately hostile — he was disoriented. He wasn&apos;t sure why he called, wasn&apos;t clear on what was being offered, and pushed back with &ldquo;I&apos;m not changing anything&rdquo; when the conversation moved toward plan discussion. That&apos;s a consumer who needs to understand what&apos;s happening before he can say yes.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>At 4:36, the call ended with: &ldquo;You called me, Eugene.&rdquo; That line is combative — and it was delivered to a confused consumer, not a hostile one. The correct move when a consumer pushes back from confusion is to slow down, lower the energy, and reframe what you&apos;re actually offering. &ldquo;You called me&rdquo; closes every future door on this consumer and this call.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>You were close on this call. The moment that flipped it was not the pushback — it was how you responded to the pushback.</p>
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
              { cat: 'Signal Reading',      score: 7,  max: 20 },
              { cat: 'Math Breakdown',      score: 5,  max: 20 },
              { cat: 'Objection Handling',  score: 2,  max: 15 },
              { cat: 'Call Outcome Quality', score: 5, max: 10 },
              { cat: 'Compliance',          score: 11, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>38/100 · Objection Handling (2/15) reflects combative close attempt instead of reframe. The call ended at 4:37 — never reached plan presentation or full math.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What You Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Compliance foundation (0:00–0:45):</strong> TPMO disclaimer delivered correctly. Recorded-line disclosure present. SOA questions attempted. The opening was compliant.</li>
            <li><strong>Initial benefit mention (1:30):</strong> You named a specific benefit figure early in the call — the right instinct to establish value before the consumer disengages. The timing was correct; the follow-through after pushback was not.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC2 · 3:15 and 4:36</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Confusion Misread as Hostility — Combative Exit</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>At 3:15, Eugene said &ldquo;I&apos;m not changing anything&rdquo; — a statement that sounds like resistance but is actually confusion. He didn&apos;t understand what was being offered. The correct response is to slow down, lower the energy, and reframe: &ldquo;You don&apos;t have to change anything today. I just want to show you one number.&rdquo; Instead, the call escalated and ended at 4:36 with: &ldquo;You called me, Eugene.&rdquo; That&apos;s a combative line that wins the argument and loses the call. A confused consumer is not an enemy — he&apos;s a consumer who needs the situation explained more simply.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;I hear you, Eugene. You don&apos;t have to change anything — I just want to make sure you&apos;re seeing what&apos;s available to you. Can we look at one number together? That&apos;s it.&rdquo; Lower your voice. Slow down. Give him one simple thing to consider, not a case to argue against.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Andres — you were close on this call. Eugene wasn&apos;t hostile. He was confused about what was being offered, and &ldquo;I&apos;m not changing anything&rdquo; is a confused consumer&apos;s way of saying &ldquo;I don&apos;t understand this yet.&rdquo; When a consumer pushes back from confusion, the move is to lower your voice, slow down, and simplify: &ldquo;You don&apos;t have to change anything — I just want to show you one number.&rdquo; That one moment is what flipped this call. The combative exit closes every future door with Eugene. Practice the reframe until it&apos;s the first thing that comes out when someone pushes back.</p>
        </section>

      </div>
    </PageShell>
  )
}
