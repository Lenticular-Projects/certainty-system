'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function ClaytonGarnerCallPage() {
  return (
    <PageShell signal="amber">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/robert-pegler" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Robert Pegler · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Robert Pegler × Clayton Garner</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 12:07 · Oklahoma City, OK · <strong style={{ color: 'var(--mustard-dark)' }}>66 / 100</strong> · Correct No-Sale</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Robert took an inbound call from Clayton Garner, a 64-year-old disabled Medicare beneficiary in Oklahoma City who called about a food card promotion. Robert quickly identified that Clayton is already enrolled in the UnitedHealthcare Dual Complete OKS002 — the exact carrier Robert represents and a D-SNP plan offering the highest OTC benefit available in his area.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>After comparing the three available UnitedHealthcare plans in his area, Robert discovered Clayton already holds the best OTC benefit available: $175/month. The only plan with different coverage was a PPO at $131/month OTC — a $44/month downgrade. With open enrollment closed and no valid SEP window available, Robert made the correct professional call: recommend staying put and circle back in October.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This is a correct no-sale. Robert protected the consumer from switching to an inferior plan and established a follow-up path. Points were lost on depth of discovery, lack of annualized math presentation, and a passive callback instead of a proactive October anchor.</p>
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
              { cat: 'Lead Quality', score: 14, max: 20 },
              { cat: 'Signal Reading', score: 12, max: 20 },
              { cat: 'Math Breakdown', score: 8, max: 20 },
              { cat: 'Objection Handling', score: 11, max: 15 },
              { cat: 'Call Outcome Quality', score: 9, max: 10 },
              { cat: 'Compliance', score: 12, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>66/100 reflects excellent outcome judgment with room to improve on math depth, discovery depth, and callback anchoring.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Comprehensive TPMO Compliance (0:43):</strong> Robert delivered full TPMO compliance — multiple plan disclosure, Medicare.gov reference, SHIP mention, SOA consent, health information rights, non-obligation statement, and callback permission — all within the first 90 seconds.</li>
            <li><strong>Rapid D-SNP Identification (4:10):</strong> Robert quickly identified Clayton is already on a UnitedHealthcare Dual Complete plan and immediately shifted analysis to plan-to-plan comparison rather than pursuing a carrier switch. This shows strong product knowledge and benefit awareness.</li>
            <li><strong>Correct No-Sale Recommendation (9:10):</strong> Rather than attempting to force a switch that would reduce Clayton's OTC benefit from $175 to $131, Robert made the professionally correct recommendation to stay put. This protects the consumer and builds long-term trust for the October callback.</li>
            <li><strong>Smooth Navigation of Medicare Card Obstacle (2:23):</strong> When Clayton couldn't see his Medicare card due to vision impairment, Robert pivoted seamlessly to SSN lookup without creating friction.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC2 · 2:13</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Client Gold Ignored — Vision Impairment</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Clayton revealed significant vision impairment. This signals health decline, loss of independence, and a need for a trusted agent. Robert moved past it without acknowledgment, pivoting to SSN lookup. A brief acknowledgment would have deepened trust.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>"Clayton, I hear you — that's exactly why it's good you called. You shouldn't have to dig through paperwork to figure out if you have the right coverage. Let me handle that for you."</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC3 · 7:11</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math Not Annualized</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Robert presented plan comparison numbers ($175 vs $131 OTC) but never annualized the difference. Without annualization, the no-sale recommendation feels less concrete. Clayton couldn't defend the decision to a family member if asked.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>"Clayton, your current plan gives you $175 a month — that's $2,100 a year for groceries and personal care. The PPO would be $131 monthly, or $1,572 a year. That's $528 less per year. Your current plan is the best available."</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC1 · 11:55</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>No October Anchor — Passive Callback</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Robert told Clayton to "give us a call back in October" rather than securing a proactive outreach commitment. This puts all follow-up burden on a visually impaired, low-engagement consumer — a near guarantee the October opportunity is lost.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>"Clayton, I'm going to make a note to reach out to you personally in October when AEP opens. I'll call you around October 15th. Is this the best number? Do you prefer mornings or afternoons? I want to make sure we stay connected."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Robert, this was a clean call with the right outcome — you protected Clayton from switching to a worse plan and you handled the compliance section with real professionalism. But I want you to walk away with three things to work on, because October is coming and Clayton is a real opportunity if you handle it right. First, the vision issue at 2:13. Clayton told you he can't see anymore. You moved straight to "I can look you up with your Social Security number" — which is the right logistical move — but you didn't acknowledge what he actually said. When a consumer reveals a vulnerability, stop for one second: "I hear you, Clayton — that's exactly why I'm here." That one sentence builds more trust than a perfect compliance script. Second, your math. You told Clayton he has the highest OTC benefit at $175 versus $131 on the PPO. That's right — but it doesn't land. "$175 a month" doesn't feel like anything. "$2,100 a year" is rent money. Groceries for two months. Use the annual number every time. Third, the October callback. You ended with "give us a call in October." Clayton has trouble seeing, lives alone, and is on a low-income plan. He is not calling in October — not without a reason, not without a reminder, and not without a name. Get his preferred call time, make a note, and promise to reach out personally. That's the difference between a one-time call and a long-term client.</p>
        </section>

      </div>
    </PageShell>
  )
}
