'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function ClaytonGarnerCallPage() {
  return (
    <PageShell signal="amber">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/robert-pegler" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Robert Pegler · Weekly Brief</Link>
        <div style={{ marginBottom: '32px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Robert Pegler × Clayton Garner</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 12:07 · Oklahoma City, OK · <strong style={{ color: 'var(--mustard-dark)' }}>66 / 100</strong> · Correct No-Sale</p>
        </div>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: '0 0 14px' }}>Clayton is already on UnitedHealthcare Dual Complete — a D-SNP with the highest OTC benefit available in his area ($175/month). Full Medicaid confirmed; prescription assistance active. 4 medications; chronic condition (likely Crohn&apos;s); vision impairment. Outside of open enrollment with no valid SEP window.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>You correctly recommended staying put and flagged an October callback. Professional, controlled, good data collection. 66/100 is solid execution on a call that wasn&apos;t closeable.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Certainty Score Breakdown</h2>
          <div style={{ background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', borderBottom: '1px solid rgba(19,17,16,0.08)', background: 'rgba(19,17,16,0.03)' }}><span>Category</span><span>Score</span><span>Max</span></div>
            {[{ cat: 'Lead Quality', score: 14, max: 20 }, { cat: 'Signal Reading', score: 12, max: 20 }, { cat: 'Math Breakdown', score: 8, max: 20 }, { cat: 'Objection Handling', score: 11, max: 15 }, { cat: 'Call Outcome Quality', score: 9, max: 10 }, { cat: 'Compliance', score: 12, max: 15 }].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}><span>{c.cat}</span><span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span><span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span></div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Robert — right call to keep Clayton on his current plan. The tighteners: the vision impairment moment got pivoted past logistically (a chance to acknowledge the human moment), the OTC math was compared monthly ($175) but never annualized to $2,100/year, and the AEP follow-up was passive. Small details that compound across a week of correct-no-sales.</p>
        </section>
      </div>
    </PageShell>
  )
}
