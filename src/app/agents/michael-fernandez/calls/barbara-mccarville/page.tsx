'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function BarbaraCarvillePage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/michael-fernandez" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Michael Fernandez · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Michael Fernandez × Barbara McCarville</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 22, 2026 · 19:56 · Chester, Arkansas (ZIP 72934) · <strong style={{ color: 'var(--terracotta)' }}>47 / 100</strong> · Missed Opportunity</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This call is a MISSED_OPPORTUNITY with a Certainty Score of 47. The client, Barbara, is a Detail Staller, motivated by a grocery card benefit. The call&apos;s critical failure occurred when the agent correctly identified a clear enrollment path via a Chronic Special Needs Plan (C-SNP) after the client confirmed she was diabetic, but failed to pivot and instead allowed an unresolved Medicaid data issue to derail the call, resulting in a deferral to a future conversation.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The root cause is RC2 — WRONG RESPONSE TO SIGNAL. At 12:24, the client provided the key to the sale: "I I'm diabetic." The agent acknowledged this as a qualifier but immediately returned to the Medicaid problem, which was a dead end. Instead of seizing the C-SNP opportunity, the agent lost momentum and control, ultimately surrendering the call by asking the client to resolve the Medicaid issue on her own and call him back.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The agent did a good job with initial rapport and upfront compliance. However, the one thing that would have changed the outcome was decisively pivoting at 12:26. By immediately reframing the call around the C-SNP qualification, the agent could have bypassed the data roadblock, presented a relevant plan, and moved to a close on a highly qualified and compliant lead.</p>
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
              { cat: 'Lead Quality', score: 8, max: 20 },
              { cat: 'Signal Reading', score: 13, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 15, max: 15 },
              { cat: 'Call Outcome Quality', score: 0, max: 10 },
              { cat: 'Compliance', score: 11, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>This score reflects a failure to convert a medium-difficulty but highly qualified lead due to a critical error in strategy.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Compliant Opening (0:53):</strong> The agent delivered the required TPMO and Scope of Appointment disclaimers clearly and correctly at the beginning of the call, ensuring compliance from the start.</li>
            <li><strong>Uncovered C-SNP Eligibility (12:16):</strong> When the Medicaid path was blocked, the agent correctly pivoted his questioning to ask about chronic conditions, successfully identifying the client&apos;s diabetes and uncovering a viable C-SNP enrollment path.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC2 · 12:24</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Client Gold Ignored</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>This cost the entire enrollment. The client&apos;s admission of being diabetic was the key to bypassing the Medicaid roadblock, but the agent failed to leverage it, allowing the call to stall and end without a sale.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Barbara, thank you for sharing that. That&apos;s actually the most important thing we&apos;ve discussed. Your diabetes qualifies you for a special type of plan that has excellent benefits, including the grocery card, regardless of your Medicaid status. Let&apos;s focus on that plan right now.&rdquo;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Gold Audit */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Client Gold Audit</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ padding: '14px 18px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '8px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #1 · 12:24 · MISSED</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--ink)', margin: 0 }}>&ldquo;I I'm diabetic.&rdquo; This was the single most important statement of the call. It provided a clear, alternative path to enrollment (C-SNP) that bypassed the Medicaid data issue. The agent acknowledged it as a qualifier but did not act on it, which was the central failure of the call.</p>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Michael, you missed a clear opportunity on this call due to RC2 — WRONG RESPONSE TO SIGNAL. When Barbara confirmed she was diabetic at 12:24, that was your pivot point. You should have immediately said: "Barbara, that's great news. Your diabetes qualifies you for a special plan designed to help manage it, and it doesn't depend on your Medicaid status. Let's look at that plan right now, it has the grocery card you're looking for." To build this skill, practice this specific drill: role-play a call where the primary data point is blocked, and you must use a secondary piece of Client Gold (like a chronic condition) to pivot and close the sale. This is about recognizing and acting on the clearest path to "yes".</p>
        </section>

      </div>
    </PageShell>
  )
}
