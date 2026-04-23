'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function JeromeCalvinCallPage() {
  return (
    <PageShell signal="amber">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/ratika-kamboj" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Ratika Kamboj · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Ratika Kamboj × Jerome Calvin</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 22, 2026 · 11:39 · Jacksonville, FL (Duval County) · <strong style={{ color: 'var(--mustard-dark)' }}>52 / 100</strong> · Missed Opportunity</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Jerome Calvin called in response to a food card advertisement and turned out to be a qualified D-SNP candidate — QMB Medicaid confirmed at 8:29, full Medicaid, INT/DEP SEP open. He had switched off his MAPD plan to a standalone PDP, leaving himself exposed to 20% medical coinsurance with no dental, vision, or medical coverage. Ratika identified this correctly at 5:39. The entire enrollment basis was in place. Then, at 9:19, she said &ldquo;United Healthcare special needs plan.&rdquo;</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Jerome said &ldquo;I don&apos;t want that.&rdquo; The call never recovered. Not because the consumer was unreachable — because the carrier name was dropped before the value was built. The correct sequence is always: build the picture first (what the consumer is missing, what the coverage gap costs, what the plan provides), then connect the carrier to that picture at the end. Leading with a carrier name invites an emotional rejection that logic cannot fix.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>After the rejection, Ratika responded with facts about his coverage gap — logic against an emotional objection. That pattern repeated at 10:45 and 11:23. Jerome stated his core belief at 11:18: &ldquo;I&apos;m not willing to get a managed care plan at this point in time.&rdquo; The correct move was to explore the belief, not argue against it. Instead, the agent stated another feature and the call ended.</p>
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
              { cat: 'Lead Quality',        score: 8,  max: 20 },
              { cat: 'Signal Reading',      score: 12, max: 20 },
              { cat: 'Math Breakdown',      score: 3,  max: 20 },
              { cat: 'Objection Handling',  score: 4,  max: 15 },
              { cat: 'Call Outcome Quality',score: 10, max: 10 },
              { cat: 'Compliance',          score: 15, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>52/100 — technically proficient agent who lost the enrollment at the moment she named the carrier before building the value.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Critical Coverage Gap Identified (5:39):</strong> Ratika correctly identified that Jerome had switched to a standalone PDP, leaving him with no medical coverage — exposed to 20% coinsurance on every doctor visit, no dental, no vision. She surfaced this clearly and accurately. This diagnosis was the entire basis for the enrollment. The problem wasn&apos;t the diagnosis — it was how the solution was presented.</li>
            <li><strong>Medicare Card Pivot (2:36):</strong> When Jerome hesitated to provide his Medicare number, Ratika smoothly pivoted to name and DOB for system lookup — preventing the call from ending prematurely at the first resistance moment. This is a correct and efficient recovery that kept the call alive through discovery.</li>
            <li><strong>QMB Medicaid Confirmed (8:29):</strong> Ratika identified and confirmed QMB full Medicaid status — the INT/DEP SEP trigger and the D-SNP qualifier. The data was collected correctly and would have been the mechanism for a compliant enrollment. The data collection skill was there; the SEP was never named before the carrier was.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC2 · 9:19, 9:26, 10:45, 11:23</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Carrier Named Before Value Built — Logic Against Emotion</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>At 9:19, Ratika said &ldquo;United Healthcare special needs plan&rdquo; with no value proposition in place. Jerome said &ldquo;I don&apos;t want that.&rdquo; That was the moment. Instead of exploring the emotion behind the rejection, the agent responded with facts about his coverage gap — logic against an emotional objection. This pattern repeated three more times and sealed the call. The carrier name should never appear until the consumer has already accepted the value of what you&apos;re describing. Build the picture first. Connect the carrier to that picture at the end.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>The Line — At 9:19 (before naming the carrier)</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Jerome, because you have full Medicaid, there&apos;s a plan built specifically for someone in your situation — no premium, $229 a month for food and groceries, zero coinsurance so you&apos;re not paying 20% out of pocket on every doctor visit. Right now you have none of that. This plan gives you all of it. Are you open to hearing about it?&rdquo; — then, only after the consumer says yes, name the carrier.</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC3 · 10:14</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Incomplete Math — Single Number, No Frame</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Ratika mentioned the $229 food card benefit at 10:14 — one number, no comparison, no annualization, no humanization. Jerome currently gets $0 for food. The gap is $229/month, $2,748/year. On top of that, he&apos;s exposed to unlimited 20% coinsurance on every medical visit with no ceiling. Neither the food card gap nor the coinsurance risk was quantified in a way that made it feel real.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>The Line</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Jerome, right now you get $0 toward food. This plan gives you $229 every single month — that&apos;s over $2,700 a year in groceries. On top of that, it closes that dangerous 20% gap we talked about. Right now, if you go to the hospital, you owe 20% of whatever the bill is — there&apos;s no ceiling on that. This plan makes that $0. Zero premium, $229 for food, and no more coinsurance. That&apos;s what you&apos;re getting.&rdquo;</p>
              </div>
            </div>

          </div>
        </section>

        {/* Client Gold Audit */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Client Gold Audit</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #1 · 8:11 · MISSED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;No.&rdquo; (in response to &ldquo;Do you still drive yourself to the doctors?&rdquo;)</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>Jerome disclosed he doesn&apos;t drive himself to appointments. D-SNP plans commonly include transportation benefits. This was a secondary enrollment hook that was noted and passed over. On the carrier-named-before-value recovery, transportation benefits could have been part of the value picture: &ldquo;This plan also includes transportation to and from your doctor visits — so you never have to worry about how you&apos;re getting there.&rdquo;</p>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #2 · 11:18 · MISSED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;I&apos;m not willing to get a managed care plan at this point in time.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>This is the core belief that was driving every objection. Jerome didn&apos;t say &ldquo;I don&apos;t want this specific plan&rdquo; — he said &ldquo;I don&apos;t want managed care.&rdquo; That&apos;s a belief, not a feature objection. The correct move was to explore it: &ldquo;I hear you. A lot of people feel that way — can you tell me what worries you most about managed care? I want to make sure I&apos;m not putting you into something that isn&apos;t right for you.&rdquo; Instead, a factual point about the food card was made. The belief went unaddressed and the call ended on Jerome&apos;s terms.</p>
            </div>

          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Ratika, the diagnosis on this call was right. You found the coverage gap accurately, confirmed QMB Medicaid, and had a genuine D-SNP enrollment available to Jerome. The failure point is singular and fixable: you named the carrier before you built the value. When you said &ldquo;United Healthcare special needs plan&rdquo; at 9:19, Jerome hadn&apos;t heard a single reason to say yes yet — only the carrier name, which he associated with something he didn&apos;t want. That sequence produced a door that never re-opened. The fix: build the picture first. Tell the consumer what they&apos;re missing, what it costs them, and what the plan provides — before you ever say the carrier name. &ldquo;Because you have full Medicaid, there&apos;s a plan built specifically for your situation — $229 a month for food, zero coinsurance, zero premium. Right now you have none of that. Are you open to hearing about it?&rdquo; Once he says yes, the carrier can come up. The value has to arrive before the name does. And when you get to a belief-level objection like &ldquo;I don&apos;t want managed care&rdquo; — stop arguing and start asking. &ldquo;Tell me what worries you about it.&rdquo; That one question changes everything.</p>
        </section>

      </div>
    </PageShell>
  )
}
