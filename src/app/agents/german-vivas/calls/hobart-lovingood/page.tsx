'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function HobartLovinggoodCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/german-vivas" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to German Vivas · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>German Vivas × Hobart Lovingood</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 20, 2026 · 48:21 · Tampa, FL · <strong style={{ color: 'var(--sage-dark)' }}>76 / 100</strong> · Enrolled (D-SNP)</p>
        </div>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>You enrolled Hobart Lovingood into the Devoted Dual Plus 052 Florida HMO D-SNP, effective May 1, 2026. The pivotal moment came at 9:34 when you confirmed Hobart's Medicaid QMB status and immediately presented the right plan for a dual-eligible consumer who opened the call asking specifically about food card benefits. The enrollment was clean, compliant, and completed with voice signature at 39:58.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>You demonstrated strong dual-eligible recognition skills. You discovered Medicaid during data collection (7:02-7:31), explained QMB status clearly to a confused consumer, and connected it directly to the D-SNP that unlocked the food card. The consumer's stated desire for food benefits ($263/month) and dental presentation ($2,500 allowance) were both well-leveraged. Doctor network handling was professional — when Dr. Adam Berry came back out of network (18:56), you found an in-network replacement and texted the information directly.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The primary gap is math execution. You never annualized any benefit or humanized numbers against Hobart's explicit financial reality — he disclosed the HRA that Social Security isn't enough for rent, food, and bills. That $263/month food card ($3,156/year) was never framed against that fear. The call ran nearly 50 minutes for a D-SNP that could have closed in 30-35 minutes. Score of 76 reflects clean compliance and signal reading, with room to grow on math and efficiency.</p>
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
              { cat: 'Math Breakdown', score: 10, max: 20 },
              { cat: 'Objection Handling', score: 12, max: 15 },
              { cat: 'Call Outcome Quality', score: 9, max: 10 },
              { cat: 'Compliance', score: 14, max: 15 },
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
            <li><strong>Dual-Eligible Recognition and D-SNP Match (7:25):</strong> When the system revealed Medicaid despite the consumer's denial, you didn't panic — you explained QMB clearly and immediately matched to the correct D-SNP. This is the highest-value skill on a D-SNP call and you executed without hesitation.</li>
            <li><strong>Out-of-Network Doctor Recovery (18:56):</strong> When Dr. Berry came back out of network, you found Dr. Diesty on Swan Avenue (an area the consumer recognized) and texted full details. You kept the consumer's existing doctor as a reference while moving to an in-network option — professional and consumer-friendly.</li>
            <li><strong>Post-Enrollment Loyalty Touches (40:44):</strong> You texted the enrollment code, Devoted customer service number, and your personal callback. You confirmed welcome package timeline and May 1 activation. These anchors reduce buyer's remorse and reinforce the relationship.</li>
            <li><strong>Consumer Rapport and Warmth (15:40):</strong> During medication collection, you naturally joined in conversation: 'Make sure. Make sure you get a fake though.' This kind of human moment builds trust that goes beyond rote compliance.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC3 · 9:43</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math Not Annualized</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>You presented benefits clearly ($263 food, $2,500 dental, $400 eyewear) but stopped at Step 1. Over $6,000 in annual value on a $0 premium was never annualized or totaled.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>Annualize each: 'Food card is $263/month — $3,156 a year.' Stack: 'Between the food card, vision, dental, and transportation — you're looking at over $5,000 in benefits this year, all for $0.'</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>German, this was a clean enrollment. Your dual-eligible recognition at 7:25 was your best moment — when Hobart said he didn't have Medicaid and your system said otherwise, you didn't flinch. You explained QMB clearly, positively, and immediately connected to the right plan. That's an advanced skill executed without hesitation. The out-of-network doctor recovery was equally strong. That's the professional follow-through that separates good from great.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>Your growth area is the math framework. You presented the food card as '$263 a month' and moved on. But Hobart told you at 46:12 that Social Security doesn't cover his expenses. You had the perfect anchor — '$263 a month is $3,156 a year, and when you add the dental, eyewear, and OTC, this plan is putting over $6,200 in your pocket annually on a zero-dollar premium.' That total is what turns a good enrollment into a loyal member. Lists are features. Total annual impact is the close.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>Watch the dead air during system lookups. A simple 'I'm pulling up the network now — give me 10 seconds, Mr. Lovingood' keeps him engaged. This call ran nearly 50 minutes — with tighter transitions during doctor and medication lookups, you could close a D-SNP like this in 33-35 minutes. More calls per day, same quality. That's the next level.</p>
        </section>
      </div>
    </PageShell>
  )
}
