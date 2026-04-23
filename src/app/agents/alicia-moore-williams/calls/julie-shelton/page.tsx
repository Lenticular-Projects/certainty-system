'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function JulieSheltonCallPage() {
  return (
    <PageShell signal="amber">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/alicia-moore-williams" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Alicia Moore Williams · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Alicia Moore Williams × Julie Shelton</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 20, 2026 · 64:32 · Pittsburgh, PA (ZIP 15210) · <strong style={{ color: 'var(--mustard-dark)' }}>68 / 100</strong> · Not Enrolled (Uncloseable)</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This call is classified as UNCLOSABLE. The client, a "Money Caller" with complex health needs, was primarily motivated by finding a plan that could provide financial assistance for her rent. The agent, Alicia, successfully identified a Devoted Health plan that offered a $350 monthly benefit specifically for food, utilities, and rent, directly addressing the client's core need.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The root cause of the non-enrollment was an unresolvable network issue. The client's team of critical specialists, including her PCP and cardiologist, were not in-network with the Devoted plan. At 54:17, the client confirmed she was unwilling to change doctors due to her ongoing, complex medical treatments, including an impending neck surgery. The agent correctly identified this as a hard barrier and did not attempt to force a close.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The agent performed thorough research and demonstrated strong needs-based selling by finding the exact benefit the client requested. However, the call was prolonged by the agent's difficulty in controlling the conversation, allowing the client to drift into long monologues. While the outcome was correct, improving call control would have made the diagnostic process more efficient.</p>
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
              { cat: 'Lead Quality', score: 12, max: 20 },
              { cat: 'Signal Reading', score: 16, max: 20 },
              { cat: 'Math Breakdown', score: 14, max: 20 },
              { cat: 'Objection Handling', score: 13, max: 15 },
              { cat: 'Call Outcome Quality', score: 8, max: 10 },
              { cat: 'Compliance', score: 5, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>68/100 reflects excellent needs-based selling and correct outcome determination, with deductions for call efficiency and compliance precision.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Excellent Needs-Based Selling (37:07):</strong> After the client stated her primary goal was help with rent, the agent found a specific plan with a "$350 per month... to pay rent or mortgage costs." This demonstrated active listening and the ability to connect a unique need to a specific plan benefit.</li>
            <li><strong>Thorough Benefit Verification (42:18):</strong> The agent didn't just mention the benefit; she dug into the plan documents to confirm the details of the "home and food card," explaining how the allowance works and that it reloads monthly. This built credibility and provided the client with accurate information.</li>
            <li><strong>Correctly Identified a Deal-Breaker (55:35):</strong> Once it was clear the client's doctors were out-of-network and she was unwilling to change, the agent correctly labeled it a "deal breaker" and pivoted away from the sale. This respected the client's hard boundary and avoided a futile and frustrating closing attempt.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 6 · RC3 · 5:24, 31:34, 55:16</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Rapport Without an Off-Switch</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>This cost significant time and call momentum. The agent allowed the client to control the conversation for long stretches, delaying the core tasks of plan presentation and network verification. The 64-minute call could have likely been a 30-minute diagnostic call with better control.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>"Julie, it sounds like you've had a really tough fight to get what you're owed, and I hear that. To make sure we use our time to solve the rent issue you mentioned, can we jump back to this United Healthcare plan? I want to confirm if its benefits can be used for rent like the Devoted plan."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Gold Audit */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Client Gold Audit</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ padding: '14px 18px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '8px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #1 · 11:33 · LEVERAGED</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--ink)', margin: 0 }}>"I need help with my rent" — The single most important statement of the call. The agent correctly identified it as the primary motivator and successfully found a plan that directly addressed this need, which became the centerpiece of the presentation.</p>
            </div>
            <div style={{ padding: '14px 18px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '8px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #2 · 12:18 · LEVERAGED</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--ink)', margin: 0 }}>"I have a threat of going blind... I have a neck I need operation on" — The agent correctly interpreted this not just as a health concern, but as the foundation for the client's fierce doctor loyalty. This understanding allowed the agent to correctly classify the network mismatch as a deal-breaker.</p>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Alicia, you did an excellent job identifying the client's core financial need and finding a plan that directly addressed it. Your primary opportunity is in call control, which falls under Pattern 6 (Rapport Without an Off-Switch). When the client began a long monologue at 31:34 about her history with Social Security, a more assertive pivot was needed. You could have said: "Julie, I hear how frustrating that entire process has been for you, and it sounds like getting real help with rent is the most important thing for us to solve today. Let me get back to the specifics of this Devoted plan to confirm exactly how that rent benefit works for you." For practice, drill the "Validate and Bridge" technique: listen for the emotional core of a long story, validate it in one sentence, and use a forward-looking statement to bridge back to the task at hand.</p>
        </section>

      </div>
    </PageShell>
  )
}
