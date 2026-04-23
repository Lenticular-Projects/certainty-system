'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function RonaldJonesCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/andres-duran" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Andres Duran · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Andres Duran × Ronald Jones</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 43:31 · Flat Rock, NC · <strong style={{ color: 'var(--sage-dark)' }}>76 / 100</strong> · Enrolled</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Ronald called from Flat Rock, NC as a disability-qualified Medicare enrollee. At 3:31, he mentioned &ldquo;I&apos;m on disability&rdquo; — a signal Andres caught and treated as a qualifying event rather than a passing detail. As the full scope of Ronald&apos;s conditions emerged, Andres upgraded him from the initially presented standard Devoted plan to the Devoted Chronic Premium HMO-C SNP — a plan specifically built for consumers with qualifying chronic conditions. The upgrade was correct, the plan was appropriate, and the enrollment was completed.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The plan presentation at 23:49 used assumptive language — &ldquo;What I&apos;m going to do next, Mr. Jones, I&apos;m going to read over the Devoted Chronic Condition plan&rdquo; — without asking permission. That&apos;s the correct close posture for a consumer who has already confirmed eligibility and interest. Ronald enrolled and the call ended positively.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Two areas to strengthen on the next call like this: annualize the math (the monthly numbers were present; the annual total was not stated), and deploy the hurricane displacement disclosure — Ronald mentioned displacement that could have been flagged as a Client Gold anchor for the close.</p>
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
              { cat: 'Lead Quality',        score: 15, max: 20 },
              { cat: 'Signal Reading',      score: 14, max: 20 },
              { cat: 'Math Breakdown',      score: 13, max: 20 },
              { cat: 'Objection Handling',  score: 13, max: 15 },
              { cat: 'Call Outcome Quality', score: 9, max: 10 },
              { cat: 'Compliance',          score: 12, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>76/100 · Enrolled · Math Breakdown (13/20) deducted for no annualization. Compliance (12/15) reflects clean SOA and TPMO with minor documentation note.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What You Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>C-SNP signal identified and acted on (3:31):</strong> &ldquo;I&apos;m on disability&rdquo; is easy to hear and move past. You stopped, probed for the qualifying conditions, and upgraded the plan mid-call to one built for Ronald&apos;s exact situation. That&apos;s not a common move — most agents present the plan they started with.</li>
            <li><strong>Assumptive close language (23:49):</strong> &ldquo;What I&apos;m going to do next, Mr. Jones, I&apos;m going to read over the Devoted Chronic Condition plan.&rdquo; No permission asked. No &ldquo;would it be okay if&rdquo;. Straight to enrollment. That&apos;s the posture that converts calls like this.</li>
            <li><strong>Objection reframing (13/15):</strong> When Ronald raised concerns about changing plans mid-year, you walked him through the C-SNP qualifying pathway without making him feel like he was being pushed. The reframe was informational and calm — exactly the right tone for a consumer who needs to feel confident in the decision.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC1 · Math Phase</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Monthly Math Not Annualized</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>The monthly figures were correct and present. The annual total — what Ronald saves or gains in a full year — was never stated. Annualizing the math makes the benefit feel real and large. &ldquo;That&apos;s $X a month — which is $Y a year, Mr. Jones&rdquo; takes 5 seconds and locks the number in the consumer&apos;s memory.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;And that&apos;s [monthly savings] a month — so over the course of the year, Mr. Jones, that&apos;s [annual savings]. That&apos;s the number I want you to have.&rdquo;</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC1 · Mid-call</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Hurricane Displacement Not Deployed as Client Gold</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Ronald mentioned being displaced by a hurricane — a significant life event that makes stability and certainty more valuable to him. That&apos;s the emotional anchor for the close, not just the plan benefits. &ldquo;You&apos;ve already been through a lot — this is the part I can make sure you don&apos;t have to worry about.&rdquo; That line was available. It wasn&apos;t used.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Mr. Jones — you&apos;ve already had to deal with a lot of disruption. The one thing I can take off your plate right now is this. Your healthcare stays consistent, your doctors stay the same, and your costs are locked in. That part doesn&apos;t have to change.&rdquo;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Gold Audit */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Client Gold Audit</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #1 · 3:31 · LEVERAGED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;I&apos;m on disability.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>You caught this and probed for qualifying conditions. The resulting plan upgrade — from standard Devoted to Devoted Chronic Premium HMO-C SNP — is the direct result of treating this as a signal. Fully leveraged.</p>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #2 · Mid-call · MISSED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;We had to relocate after the hurricane.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>A consumer who has experienced displacement values stability differently than someone who hasn&apos;t. This is the emotional anchor for the close — not the plan features. &ldquo;This is the part I can make sure stays stable&rdquo; is the line that converts a rational yes into a committed yes.</p>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Andres — the C-SNP identification on this call is one of the best moves of the week. Catching &ldquo;I&apos;m on disability&rdquo; and upgrading the plan mid-call requires both product knowledge and signal awareness — and you had both. Two things to add on the next call like this: annualize the math (&ldquo;that&apos;s $X a month — $Y a year&rdquo;), and listen for life events that create emotional anchors for the close. Ronald told you he was displaced by a hurricane. That&apos;s not just context — that&apos;s the reason healthcare stability matters more to him than to most people. Use it.</p>
        </section>

      </div>
    </PageShell>
  )
}
