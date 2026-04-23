'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function BrianBursleyCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/rudy-schprejer" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Rudy Schprejer · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Rudy Schprejer × Brian Bursley</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 20, 2026 · 53:40 · Pompano Beach, FL · <strong style={{ color: 'var(--sage-dark)' }}>72 / 100</strong> · Enrolled (IEP)</p>
        </div>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Brian Bursley, a 64-year-old veteran in Pompano Beach, FL, was successfully enrolled in the Devoted Gift Back 014 HMO plan with an effective date of May 1, 2026. Rudy identified the IEP eligibility at 32:03 and pivoted the effective date from June to May, directly benefiting Brian with an additional month of the $184.70 Part B Give Back.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The call was anchored by financial urgency — Brian lives on $600/month Social Security. Rudy leveraged the Part B Give Back throughout the 53-minute call, annualizing the benefit ($2,216/year at 7:48) and personalizing it to Brian's actual check amount ($682.70/month at 30:05). The rapport between the two men was genuine — both shared candor, humor, and street mentality that made the call unusually human for an enrollment.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The enrollment carries significant compliance gaps. The SSN was collected without privacy disclosure; the TPMO disclaimer was absent from the opening; and most seriously, at 48:53 Rudy coached Brian to answer 'yes' to an HRA food insecurity question with explicit direction. This creates fraud exposure on a recorded line. Despite these compliance red flags, enrollment was completed cleanly. The score of 72 reflects a successful enrollment held back by compliance protocol failures.</p>
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
              { cat: 'Lead Quality', score: 15, max: 20 },
              { cat: 'Signal Reading', score: 16, max: 20 },
              { cat: 'Math Breakdown', score: 14, max: 20 },
              { cat: 'Objection Handling', score: 11, max: 15 },
              { cat: 'Call Outcome Quality', score: 8, max: 10 },
              { cat: 'Compliance', score: 8, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>72/100 reflects successful enrollment with strong financial anchoring, significantly offset by compliance gaps including SSN collection without disclosure, TPMO disclaimer absence, and coaching of HRA responses.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>IEP Identification and Effective Date Upgrade (32:03):</strong> Correctly identified Brian's IEP and upgraded enrollment effective date from June to May, giving the consumer an additional $184.70 month of Give Back benefit. This is technically sharp and consumer-benefiting.</li>
            <li><strong>Financial Anchor — Immediate and Sustained (0:38):</strong> From Brian's opening statement about $25/month for food, you locked onto the Part B Give Back as the enrollment hook and returned to it repeatedly. Annualized at 7:48 and humanized at 30:05, the math was deployed strategically throughout the call.</li>
            <li><strong>Vaccine Objection — Graceful De-escalation (22:44):</strong> When Brian stated he refuses vaccines, you didn't argue — 'Brother, I can't tell you if you take it or not' — and pivoted immediately to urgent care benefits. No pressure, no enrollment risk created.</li>
            <li><strong>Rapport-Driven Engagement (11:09):</strong> Brian is a tangential storyteller who easily drifts. You matched his energy and kept him engaged throughout 53 minutes without losing the consumer — a skill that prevented what could have been a hangup.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC4 · 48:53</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>HRA Answer Coaching</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>At 48:53, you told Brian to say 'yes' to the federal HRA food insecurity question: 'I want you to say yes.' This is coaching a consumer's response on a CMS health assessment, creating fraud exposure on a recorded line.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>Let consumers answer HRA questions authentically. If guiding: 'Brian, if in the last 12 months you had less food because of money, say yes.' Never tell them what answer to give.</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Rudy, you identified Brian's IEP window and moved his effective date from June to May — that's technical awareness separating good agents from great ones. Your financial anchoring was textbook. The vaccine objection? Perfect de-escalation. But at 48:53, you told Brian to say 'yes' to the HRA on a recorded, CMS-regulated call. That's the kind of thing that gets licenses pulled. Let consumers answer health questions themselves. Next call: deliver the TPMO disclaimer in the first 30 seconds, and before collecting SSN, say 'I need your Social Security number to pull up your Medicare file — this call is recorded and your information is protected.' You're enrolling people with genuine care — button up these compliance elements so the work you're doing holds up to scrutiny.</p>
        </section>
      </div>
    </PageShell>
  )
}
