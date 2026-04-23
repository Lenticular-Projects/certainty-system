'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function UnnamedCallPage() {
  return (
    <PageShell signal="yellow">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/ashley-whitehurst" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Ashley Whitehurst · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Ashley Whitehurst × Unnamed Consumer</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 22, 2026 · 2:38 · Williamsburg, SC · <strong style={{ color: 'var(--terracotta)' }}>42 / 100</strong> · Missed Opportunity</p>
        </div>

        {/* What Happened */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Happened</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>The consumer called about a grocery card and already had a $202/month card on a current plan. No Medicare card available. When SSN was requested at 2:29, they said: &ldquo;Uh, it have to be my social?&rdquo; — a hesitation signal, not a hard refusal. The response stated that yes, SSN is required for the system lookup. The consumer said &ldquo;I&apos;ll call back&rdquo; and ended the call.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '12px' }}>This is structurally identical to the Faith Norman call earlier the same day. The consumer hesitated on SSN. The response was logical and accurate. The consumer exited. The pattern is: hesitation on SSN needs validation, not confirmation that the requirement is real.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '12px' }}>Note: compliance on this call was 15/15 — perfect. The consumer was treated respectfully and the process was followed correctly. This is a technique gap, not a compliance issue.</p>
        </section>

        {/* Score Breakdown */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Certainty Score Breakdown</h2>
          <div style={{ background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', borderBottom: '1px solid rgba(19,17,16,0.08)', background: 'rgba(19,17,16,0.03)' }}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality',        score: 8,  max: 20 },
              { cat: 'Signal Reading',       score: 12, max: 20 },
              { cat: 'Math Breakdown',       score: 0,  max: 20 },
              { cat: 'Objection Handling',   score: 5,  max: 15 },
              { cat: 'Call Outcome Quality', score: 2,  max: 10 },
              { cat: 'Compliance',           score: 15, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>42/100 — perfect compliance (15/15). Call ended at SSN hesitation. Recoverable with empathy-first response.</p>
        </section>

        {/* The Moment */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>The Moment That Decided This Call</h2>
          <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)', marginBottom: '16px' }}>
            <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>2:29 — SSN Hesitation</p>
            <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;Uh, it have to be my social?&rdquo;</p>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>This is not a hard objection — it&apos;s a hesitation. &ldquo;Uh&rdquo; and &ldquo;it have to be&rdquo; are tell signs: the consumer is nervous, not decided. The correct response names the nervousness first. Confirming that yes, the SSN is required, is accurate — but it treats a fear as a procedural question. The consumer needed to feel safe before they could move forward. They never did.</p>
            <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>The Line</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;You&apos;re right to be cautious — that&apos;s smart. The only reason I ask is to pull up your specific plans so I can show you what you&apos;re eligible for. I&apos;m not keeping anything or doing anything else with it.&rdquo; Then pause. Don&apos;t fill the silence. Let the validation land.</p>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Ashley — this call and Faith Norman earlier the same day are the same moment. Both consumers hesitated on SSN. Both times the response confirmed the requirement accurately. Both times the consumer exited. The compliance on this call was perfect — that&apos;s not the issue. The issue is that a hesitation needs validation before it needs explanation. &ldquo;You&apos;re right to be cautious — that&apos;s smart.&rdquo; That sentence changes the consumer&apos;s experience from &ldquo;I&apos;m being pressured&rdquo; to &ldquo;I&apos;m being understood.&rdquo; It&apos;s the difference between a call that ends at 2:38 and one that continues to a plan presentation.</p>
        </section>

      </div>
    </PageShell>
  )
}
