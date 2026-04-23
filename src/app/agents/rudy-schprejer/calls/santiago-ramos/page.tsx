'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function SantiagoRamosCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/rudy-schprejer" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Rudy Schprejer · Weekly Brief</Link>

        <div style={{ marginBottom: '24px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Rudy Schprejer × Santiago Ramos</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 09:04 · Hialeah, FL · <strong style={{ color: 'var(--terracotta)' }}>48 / 100</strong> · MISSED OPPORTUNITY</p>
        </div>

        {/* Compliance Alert Banner */}
        <div style={{ marginBottom: '40px', padding: '16px 20px', background: 'rgba(201, 85, 64, 0.08)', borderRadius: '10px', border: '2px solid var(--terracotta)' }}>
          <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Compliance Flag — Plan Misidentification</p>
          <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Devoted Health described as &ldquo;Blue Cross Blue Shield&rdquo; — at 7:03</p>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>Devoted Health is an independent Medicare Advantage carrier with no affiliation with Blue Cross Blue Shield. Naming the wrong carrier on a recorded call is a compliance and consumer protection issue — a consumer who believes they are enrolling in BCBS is not making an informed decision. The correct identification: &ldquo;Devoted Health — a five-star-rated independent Medicare Advantage plan.&rdquo; Never introduce a carrier by the wrong name.</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Santiago Ramos is a 60-year-old disability Medicare beneficiary in Hialeah, FL, recently enrolled in an Aetna Medicare Select HMO. He has 6 doctors and takes 12 medications. The math was strongly in his favor: a move to Devoted would have given him $184.70/month back in Social Security plus a tripling of his OTC benefit — a combined annual improvement of approximately $2,492.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The call died at 8:06 when Santiago asked &ldquo;I have to change A?&rdquo; — a fear-based clarifying question about Medicare Part A. Rudy answered &ldquo;Yeah. Yeah. That&apos;s the only downside.&rdquo; That answer was factually incorrect — switching Medicare Advantage plans does not change Part A. The false confirmation triggered an immediate &ldquo;I want to stay with Aetna&rdquo; from Santiago at 8:39. Rudy agreed immediately, recommended OEP, and ended the call.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The objection was not a final decision — it was a fear response to a misunderstanding Rudy himself created. One clarifying sentence could have reopened the conversation. There was also a carrier misidentification at 7:03: Rudy described Devoted as &ldquo;with Blue Cross Blue Shield.&rdquo; Devoted is an independent carrier. Naming the wrong carrier on a recorded call is a separate compliance issue from the Part A misstatement.</p>
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
              { cat: 'Lead Quality',        score: 13, max: 20 },
              { cat: 'Signal Reading',       score: 8,  max: 20 },
              { cat: 'Math Breakdown',       score: 8,  max: 20 },
              { cat: 'Objection Handling',   score: 3,  max: 15 },
              { cat: 'Call Outcome Quality', score: 3,  max: 10 },
              { cat: 'Compliance',           score: 13, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>48/100 — missed. Strong compliance opening and correct upgrade identification; collapsed entirely at a self-created objection with zero reframe attempt. $2,492/year in annual benefit improvement walked out in under 30 seconds.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Complete TPMO Compliance Delivery (0:54):</strong> Three organizations, 41 products, Medicare.gov reference, and 1-800-MEDICARE number — all included, delivered within the first minute, smoothly and not robotically. This is the standard every call should match.</li>
            <li><strong>Efficient Data Collection (1:54):</strong> Callback consent, decision-making authority, residential status, MBI, and permission to pull Medicare records — collected in logical sequence without feeling scripted.</li>
            <li><strong>Correct Upgrade Identification (6:15):</strong> Found a 5-star plan upgrade from Santiago&apos;s 4.5-star Aetna. The instinct to present the improvement was right. The math genuinely favored a switch. The execution of the close was where the call fell apart — not the identification.</li>
            <li><strong>Health-First Framing Before the Financial Pitch (6:43):</strong> &ldquo;More important than anything else is your medical needs. Your health is more important to me than the money.&rdquo; Correct positioning for a risk-averse consumer with 6 doctors. Built credibility before the financial ask.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC1 · 8:07, 8:14, 8:39 — CRITICAL</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Self-Created Objection — Confirmed a Misconception</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Santiago asked &ldquo;I have to change A?&rdquo; — a fear question, not a decision. Switching Medicare Advantage plans does not change Part A. Rudy confirmed the misconception: &ldquo;Yeah. Yeah. That&apos;s the only downside to all this.&rdquo; That created the fear that ended the call. Santiago said &ldquo;I want to stay with Aetna&rdquo; at 8:39 and Rudy agreed immediately — no isolation, no reframe, no correction of the false premise. The rule: when a consumer asks a fear question that contains a false premise, your first sentence corrects the premise. Never confirm a misconception.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Santiago, your Part A stays exactly the same — the government Medicare doesn&apos;t change. What changes is the private insurance company managing your extra benefits. Right now that&apos;s Aetna. I&apos;m showing you Devoted, which gives you $184 back every month in your Social Security. Your doctors, your Medicare — all of that stays. We&apos;re just upgrading which company sends you the extra benefits.&rdquo;</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC4 · 7:03 — COMPLIANCE FLAG</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Carrier Misidentification — Devoted Described as Blue Cross Blue Shield</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>At 7:03: &ldquo;It&apos;s with Blue Cross Blue Shield. I don&apos;t know if you&apos;ve heard of them. It&apos;s called Devoted Medicare.&rdquo; Devoted Health is not affiliated with BCBS. Naming the wrong carrier on a recorded call misinforms the consumer about which company they are enrolling with. This is a compliance issue and a consumer protection issue.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Verification Habit</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;The plan is called Devoted Health — it&apos;s a five-star-rated independent Medicare Advantage plan available in your zip code. It&apos;s not affiliated with your current carrier, which is exactly why it can offer benefits Aetna can&apos;t match.&rdquo;</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC3 · 7:05–7:38</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math Not Annualized — $2,492/Year Never Stated</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Monthly figures were presented but never totaled into an annual impact. $184.70/month give-back plus $23/month OTC improvement is $2,492/year. For a disability Medicare consumer on a fixed income, that number has real weight. By the time Santiago&apos;s fear of &ldquo;changing&rdquo; arrived at 8:06, he had never processed the full financial stake. When the annual number is real in the consumer&apos;s mind, the fear of switching shrinks in proportion.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Santiago, let me give you the real number: right now Aetna is giving you $120 a year on your OTC card. Devoted gives you $400. That&apos;s $280 more just there. Plus $184.70 every month goes back into your Social Security — that&apos;s $2,216 a year. Combined, we&apos;re talking about $2,492 more in your pocket every year. For someone on a fixed income, that&apos;s real money.&rdquo;</p>
              </div>
            </div>

          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Rudy — your compliance opening on this call was on point. The TPMO delivery was complete, data collection was smooth, and you found the right upgrade for Santiago. The Devoted plan with the Part B give-back was the correct call. You lost this one at 8:14, and it was self-inflicted.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '12px' }}>When Santiago asked &ldquo;I have to change A or no?&rdquo; — that was a question born from confusion, not a decision. You confirmed the confusion instead of correcting it. Switching Medicare Advantage plans does NOT change Part A. The moment you said &ldquo;Yeah. Yeah. That&apos;s the only downside&rdquo; you created the fear that ended the call. Going forward: when a consumer asks a fear question that contains a false premise, your first sentence is always the correction. &ldquo;No — your Part A stays exactly the same.&rdquo; Then answer the actual question. Never confirm a misconception.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '12px' }}>Two more things before you present Devoted again: (1) Devoted Health is not Blue Cross Blue Shield — it is an independent five-star carrier. Never introduce it with the wrong name on a recorded call. (2) Before any close on a consumer with 12 medications and 6 doctors, annualize the math out loud. $2,492 a year is a number with real weight. Say it before the objection hits. When the financial stake is real in the consumer&apos;s mind, the fear of switching shrinks in comparison.</p>
        </section>

      </div>
    </PageShell>
  )
}
