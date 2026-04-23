'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function LeonardMcquirkCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/steeve-exalant" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Steeve Exalant · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Steeve Exalant × Leonard McQuirk</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 36:05 · Creek County, Oklahoma · <strong style={{ color: 'var(--sage-dark)' }}>77 / 100</strong> · Enrolled (D-SNP)</p>
        </div>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>You enrolled Leonard McQuirk into the Aetna Dual Care PPO using the MCD Special Enrollment Period triggered by his Medicaid upgrade from QMB+ to FBDE. The enrollment was well-earned — you correctly identified the Medicaid change, confirmed the shift, presented increased benefits, and completed compliance procedures with a clean voice signature.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Leonard is a man in fragile health — five strokes, recent heart attack, high blood pressure, unmanaged cataracts, food insecurity. He opened the call hungry and having missed his doctor's appointment because his car ran out of gas. You connected transportation benefit to that barrier, dental to his implant goal, vision to cataracts — all in real time. The health assessment revealed more unmet needs that you used to reinforce plan value.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Score of 77 reflects a genuine, well-run D-SNP enrollment. Deductions come from math not being annualized and minor timeline inefficiency during medication lookup. Overall this is clean execution with strong signal reading and full compliance.</p>
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Certainty Score Breakdown</h2>
          <div style={{ background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', borderBottom: '1px solid rgba(19,17,16,0.08)', background: 'rgba(19,17,16,0.03)' }}>
              <span>Category</span>
              <span>Score</span>
              <span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 16, max: 20 },
              { cat: 'Signal Reading', score: 15, max: 20 },
              { cat: 'Math Breakdown', score: 12, max: 20 },
              { cat: 'Objection Handling', score: 12, max: 15 },
              { cat: 'Call Outcome Quality', score: 9, max: 10 },
              { cat: 'Compliance', score: 13, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Immediate Signal Capture on Food Insecurity (2:04):</strong> When Leonard said 'just hungry,' you immediately recognized it as a core need and pivoted to the food benefit. This is instinctive signal reading that transformed a health question into an enrollment driver.</li>
            <li><strong>Real-Time Transportation Benefit Deployment (9:55):</strong> When Leonard revealed he missed his appointment because his car ran out of gas, you immediately introduced the transportation benefit and explained how to use it. This was direct response to a stated problem, not rehearsed feature dumping.</li>
            <li><strong>Complete Network Verification (12:24):</strong> You proactively checked both Dr. Jill and St. John's Hospital and confirmed they were in-network before enrollment — protecting the consumer and eliminating post-enrollment issues.</li>
            <li><strong>Full Compliance Boilerplate (18:29):</strong> You read the full CMS script from 18:29-22:02 without abbreviating or skipping, all required elements included, framed warmly without trivializing the content.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC3 · 12:51</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math Not Annualized</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>You presented benefit numbers but stopped at Step 1. Leonard never heard the annual value: $1,980 food, $1,500 vision, $2,000 dental equals over $5,000 annual benefits, never stated as a total.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>After benefits: 'Mr. Leonard, that food card is $165/month — $1,980 a year. Add vision, dental, transportation — you're looking at over $5,000 in benefits this year, all for $0.'</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Steeve, this was a clean enrollment. Your dual-eligible recognition at 7:25 was excellent — when Leonard denied Medicaid and your system said otherwise, you explained QMB clearly and immediately connected to the right plan. That's an advanced skill executed without hesitation. The network verification, texted Medicare number, loyalty anchor — all correct and human. You enrolled a man who needed help and you got him help.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>Your growth area is the math moment. You named every benefit but never stacked them. Leonard never heard the total. After the benefit presentation, close with: 'Mr. Leonard, let me put this together. Food card: $165/month = $1,980/year. Vision: $125 more. Dental: $2,000. Transportation: 48 trips/100 miles. You're looking at over $5,000 in benefits this year — every dollar at no cost to you.' That total is what makes the plan feel undeniably valuable. Lists are features. Total annual value is the close.</p>
        </section>
      </div>
    </PageShell>
  )
}
