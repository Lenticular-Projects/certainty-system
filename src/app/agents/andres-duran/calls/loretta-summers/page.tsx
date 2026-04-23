'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function LorettaSummersCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/andres-duran" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Andres Duran · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Andres Duran × Loretta Summers</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 20, 2026 · 41:51 · Oklahoma (ZIP 74103) · <strong style={{ color: 'var(--mustard-dark)' }}>64 / 100</strong> · Missed Opportunity</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Loretta Summers is a classic Money Caller motivated by a grocery card advertisement and the prospect of financial benefits. Andres did an excellent job building rapport and trust with a skeptical client, successfully navigating her past negative experiences and getting her to a 'yes' on a compelling Devoted plan featuring a $160 monthly Part B giveback — $1,920 annually.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The root cause of failure was a critical process error: Andres invested 37 minutes building value and confirming plan details before attempting to qualify a Special Enrollment Period (SEP). At 37:36, he introduced a weather-related SEP only to discover Loretta did not qualify, rendering the entire 37-minute presentation invalid. The call collapsed at the final step because the foundational requirement for enrollment was never established upfront.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Despite the outcome, Andres's ability to handle objections and build a warm, trusting connection was a significant strength. Had he qualified the SEP within the first five minutes, this call would have almost certainly resulted in a clean enrollment.</p>
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
              { cat: 'Lead Quality', score: 15, max: 20 },
              { cat: 'Signal Reading', score: 10, max: 20 },
              { cat: 'Math Breakdown', score: 12, max: 20 },
              { cat: 'Objection Handling', score: 14, max: 15 },
              { cat: 'Call Outcome Quality', score: 5, max: 10 },
              { cat: 'Compliance', score: 8, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>64/100 reflects strong rapport and objection handling undermined by a fatal process failure — SEP qualification postponed until the final moment when it invalidated the entire presentation.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Masterful Rapport Building (4:03):</strong> When Loretta stated 'I never qualify,' Andres's response, 'Oh, but you haven't spoken to me yet,' was perfectly delivered — confident, charming, and immediately disarming her skepticism.</li>
            <li><strong>Effective Objection Reassurance (28:42):</strong> When Loretta expressed fear that the plan would 'bite me in the butt,' Andres didn't use logic — he used a personal guarantee of service and offered his direct contact information, directly addressing her fear of being abandoned after the sale.</li>
            <li><strong>Empathetic Response to Health Disclosure (26:41):</strong> After Loretta mentioned spending 21 days in the hospital for her stroke, Andres responded with genuine empathy: 'That must have been a really tough time for you, Miss Summers. I'm sorry about that.' This validated her experience and strengthened their connection.</li>
          </ul>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Andres, you built something really special on this call — for 37 minutes you overcame Loretta's skepticism and her fear of being 'bitten in the butt' by getting her to a genuine 'yes' on a Devoted plan with $1,920 annual value back to her. Your rapport and objection handling were nearly flawless. And then you lost the entire sale in the final step.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>Here's what happened: At 37:36, you introduced a weather-related SEP for the first time. You'd been presenting a plan for 37 minutes without ever confirming Loretta had a valid enrollment window. When the SEP didn't qualify, it was too late — the entire presentation became moot because the foundational requirement for enrollment was never established upfront.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>The fix is simple and it would have changed everything: Establish the SEP within the first five minutes. Ask: 'Loretta, before I show you any plans, I need to make sure we're in an enrollment window. Have you had any major life changes in the last 60 days — change in income, change in coverage, health events, anything like that?' If she qualifies, you proceed with confidence for 37 minutes knowing the sale is viable. If she doesn't, you end the call early and save both of you time. The rapport, the objection handling, the math — all of it only matters if there's a legal basis to enroll. Get that first next time.</p>
        </section>

      </div>
    </PageShell>
  )
}
