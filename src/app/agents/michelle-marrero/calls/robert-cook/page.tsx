'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function RobertCookCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/michelle-marrero" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Michelle Marrero · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Michelle Marrero × Robert Cook</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 20, 2026 · 43:50 · Williamson, South Carolina (ZIP 29697) · <strong style={{ color: 'var(--sage-dark)' }}>84 / 100</strong> · Missed Opportunity</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This call is a MISSED OPPORTUNITY with a Certainty Score of 84. Robert is a Third Party Controlled caller, initially presenting as a Scared Switcher who did not want to change his Humana plan. The agent's primary win was expertly identifying a recent cardiomyopathy diagnosis as a qualifying event for a high-value Chronic Special Needs Plan (C-SNP), completely reframing the call from a simple benefit inquiry to a major plan upgrade.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The call did not result in an enrollment due to two external factors: the introduction of a key third-party influencer (the client's wife with MS) at 35:28, and a hard time constraint (an imminent doctor's appointment) at 39:31. There was no agent-driven root cause for the non-enrollment; instead, the agent skillfully navigated these constraints by securing a firm callback appointment to speak with both decision-makers, representing a perfect recovery attempt.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The one area for improvement that could have made the value proposition even more compelling for the follow-up call was completing the Math Breakdown. While she presented the monthly benefits clearly, she never annualized the savings (e.g., stating the $125/month grocery card is $1,500/year), a missed step in The Shift that would have solidified the financial impact for the client.</p>
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
              { cat: 'Lead Quality', score: 19, max: 20 },
              { cat: 'Signal Reading', score: 20, max: 20 },
              { cat: 'Math Breakdown', score: 5, max: 20 },
              { cat: 'Objection Handling', score: 15, max: 15 },
              { cat: 'Call Outcome Quality', score: 10, max: 10 },
              { cat: 'Compliance', score: 15, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>84/100 is elite performance on a Missed Opportunity — reflects the agent's exceptional signal reading and objection handling in a complex, high-difficulty situation with external roadblocks.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Expert C-SNP Identification (12:00):</strong> The agent correctly identified the client's cardiomyopathy as a qualifying chronic condition and pivoted the entire call to focus on a high-value C-SNP. This created a massive opportunity that would have otherwise been missed.</li>
            <li><strong>Flawless Objection Handling (34:26):</strong> When the client stalled, wanting to call Humana himself, the agent dismantled the objection by authoritatively providing the answer on the spot, demonstrating expertise and maintaining control of the sales process.</li>
            <li><strong>Strategic Recovery (41:00):</strong> Faced with a third-party influencer and a hard time stop, the agent did not panic or push. She correctly identified the only viable path forward and secured a firm callback time to speak with both decision-makers, maximizing the chance of a future sale.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC3 · 30:07</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Incomplete Math Breakdown</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>This cost the agent the opportunity to make the financial benefit feel overwhelming and emotionally resonant. By not annualizing the savings, the value proposition remained abstract and less impactful, making it easier for the client to delay the decision.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>After stating the monthly benefit, say: "Robert, that $125 a month for groceries is $1,500 a year back in your pocket. What could you and your wife do with an extra $1,500?"</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Gold Audit */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Client Gold Audit</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #1 · 6:45 · LEVERAGED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>"I had chest pains one morning when I got up and um, went in and had two tests and everything was fine. Uh, I went into the emergency room and they did a heart catheterization..."</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>This was the crucial piece of information that the agent expertly pursued, leading directly to the cardiomyopathy diagnosis and the C-SNP opportunity. This is a perfect example of leveraging client gold.</p>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #2 · 35:28 · LEVERAGED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>"And my wife is is also on the Humana plan. And um, she has MS. which I would assume would be I assume that would be um chronic also."</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>The agent immediately recognized this as the introduction of a second, critical stakeholder and a new set of needs. She correctly pivoted to address the wife's situation, building trust and adapting her sales strategy.</p>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Michelle, your diagnostic skill on this call was exceptional, especially in identifying the C-SNP opportunity at 11:58. The single highest-leverage skill to focus on is completing the Math Breakdown (Pattern 1). For your 5 PM callback, when you re-introduce the $125 grocery card, you must say: "Robert, just to recap, that's $125 every month, which is $1,500 a year in your pocket for groceries and utilities. What would having that extra $1,500 do for your budget?" Practice annualizing every single benefit to make the value proposition overwhelming and close this complex, high-value sale for both Robert and his wife.</p>
        </section>

      </div>
    </PageShell>
  )
}
