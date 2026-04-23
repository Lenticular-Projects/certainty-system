'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function AnnaLyonCallPage() {
  return (
    <PageShell signal="amber">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/rosina-klimoski" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Rosina Klimoski · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Rosina Klimoski × Anna Lyon</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 12:55 · Bedford, TX (ZIP 76022) · <strong style={{ color: 'var(--mustard-dark)' }}>59 / 100</strong> · Not Enrolled (Correct No-Sale)</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Anna Lyon, a 67-year-old Navy veteran in Bedford, Texas, called about a food allowance card while sitting at a food bank on $1,121 a month. She opened the call stating she did not want to change her benefits — a resistant-switcher profile rooted in a prior plan switch that had changed her doctors without warning. Rosina kept her engaged through a clean compliance sequence and methodical discovery, identifying that Anna had no Medicaid (ruling out D-SNP grocery benefit), used the VA exclusively for prescriptions, and had a potential COPD-based C-SNP pathway worth checking.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The Aetna MA-only Eagle plan ($110/month giveback) was the correct product: no civilian doctors to change, no Part D penalty risk given VA credible coverage. Rosina presented it accurately at 8:02. The pivotal failure came immediately after — at 8:38, Anna restated her refusal and Rosina accepted it without any reframe. The emotional hook that would have re-opened the door — connecting the $110/month directly to the food bank Anna described at 2:27 — was never deployed.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This was a correct no-sale. No qualifying product existed for the grocery card Anna specifically wanted (requires Medicaid or C-SNP, neither available), COPD was checked and ruled out, and the consumer&apos;s resistance was genuine and trauma-anchored. The coaching opportunity is the gap between what Rosina correctly identified and what she failed to say: Client Gold was filed but never deployed, and the doctor-change reframe — the one answer that addressed Anna&apos;s actual fear — went unsaid until it was too late.</p>
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
              { cat: 'Lead Quality',        score: 14, max: 20, note: 'Strong opening, passive on the mid-call restate' },
              { cat: 'Signal Reading',      score: 10, max: 20, note: 'Identified signals, failed to deploy them' },
              { cat: 'Math Breakdown',      score: 8,  max: 20, note: 'Number stated, humanization missing' },
              { cat: 'Objection Handling',  score: 7,  max: 15, note: '2 surrenders, 2 weak reframes' },
              { cat: 'Call Outcome Quality',score: 7,  max: 10, note: 'Correct no-sale · VA penalty knowledge solid' },
              { cat: 'Compliance',          score: 13, max: 15, note: 'Minor gap on info-sharing concern at 6:10' },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none', alignItems: 'start' }}>
                <div>
                  <span style={{ display: 'block' }}>{c.cat}</span>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--ink-60)', marginTop: '2px' }}>{c.note}</span>
                </div>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>59/100 — high-difficulty uncloseable call. Correct product identified, correct no-sale called. Coaching gap: Client Gold acknowledged but never deployed; doctor-change trauma left unaddressed until the call was already over.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Opening Objection Pivot (0:20):</strong> Consumer immediately stated she didn&apos;t want to change benefits. Rosina responded: &ldquo;We&apos;re not going to change anything unless you decide that yes — my job is to check what&apos;s available.&rdquo; Natural, non-pushy, effective. Most agents lose this caller inside 60 seconds. Rosina kept her for 13 minutes.</li>
            <li><strong>VA Coverage + Part D Penalty Knowledge (11:42):</strong> When Anna asked directly about penalties, Rosina accurately explained that VA prescription coverage counts as credible coverage — dropping the MAPD&apos;s prescription component would not trigger a late enrollment penalty. Specialized knowledge delivered with confidence at a high-stakes moment.</li>
            <li><strong>C-SNP Pathway Check on COPD Disclosure (9:24):</strong> When Anna disclosed COPD at 9:23, Rosina immediately moved to check for a chronic condition plan in the area. She didn&apos;t just note the condition and move on — she actively looked for a qualifying product before ruling it out. That&apos;s correct SEP practice.</li>
            <li><strong>Correct No-Sale Judgment:</strong> No qualifying product existed for the grocery card Anna wanted. Aetna giveback was the right offer — Anna&apos;s resistance was genuine and rooted in prior trauma. Rosina correctly stopped rather than pushing into inappropriate enrollment territory. The call ended respectfully.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC2 · 2:27, 8:02, 10:21</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Client Gold Ignored — Food Bank Moment</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>At 2:27, Anna said she was sitting at a food bank on $1,121 a month. Rosina acknowledged it (&ldquo;Yeah, I know, I understand, especially with the prices&rdquo;) and moved to Medicare card collection. Six minutes later at 8:02, the $110/month giveback was presented as a standalone number — without any reference to the food bank, the $1,121 income, or the rent. The math was present. The humanity was absent. This is the single moment that cost the most potential on this call.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Ms. Anna, you mentioned earlier you were at the food bank right now. This plan puts $110 back in your Social Security check every single month — that&apos;s more than $1,300 a year. That&apos;s groceries. That&apos;s exactly what this benefit is built for people in your situation. And because you go to the VA, not one doctor changes. This isn&apos;t another HealthSpring situation.&rdquo;</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC1 · 8:38, 10:35</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Objection Surrendered — Doctor-Change Trauma Left Unaddressed</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>At 8:38, Anna restated &ldquo;I do not wish to switch&rdquo; and Rosina accepted it without any reframe attempt. At 10:35 Anna finally named the actual fear: &ldquo;the doctor was changed before I could even sneeze.&rdquo; Rosina&apos;s response addressed the paperwork logistics but not the doctor-change trauma — the actual emotional root of every objection on this call. The answer to that fear was accurate, specific, and available: she only uses the VA, so there are no civilian doctors to change on this plan. That answer was never given until it was too late.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Ms. Anna, I hear exactly what happened — last time, they changed your doctor without asking. That cannot happen here. You only use the VA. There are no civilian doctors on this plan. Nobody changes anything at the VA. The only thing that changes is $110 more in your pocket every month. Five minutes on the phone with me and it&apos;s done. Can I walk you through what the application looks like?&rdquo;</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC3 · 10:21–10:25</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math Not Humanized — Step 3 Missing</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Rosina correctly annualized the giveback to $1,312.20/year at 10:25 — that&apos;s the right move. The next step is humanization: connecting that number to something the consumer told you matters to them. Anna told Rosina she was at a food bank on $1,121 a month with rent to pay. $1,312 is a year of groceries. It&apos;s more than one month of her rent. Those connections were never made, so the math landed as a statistic rather than a motivation.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Ms. Anna, think about what that actually means. $1,312 is a year&apos;s worth of groceries. You told me you&apos;re at the food bank right now — that&apos;s the money this plan puts back in your pocket. And your doctors at the VA? They don&apos;t change at all.&rdquo;</p>
              </div>
            </div>

          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '14px' }}>Rosina — this was a correct no-sale and you should feel good about the compliance and discovery work on this call. You kept a resistant consumer on the line for nearly 13 minutes, found the right product, and correctly ruled out every alternative pathway before calling the no-sale. That&apos;s solid, professional judgment.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '14px' }}>But here&apos;s where the money was left: Anna told you at 2:27 that she was sitting at a food bank on $1,121 a month. You said &ldquo;Yeah, I know&rdquo; and moved on. Rosina, that was the enrollment narrative of the entire call — and when you got to 8:02 and presented the $110/month giveback, that food bank moment was the sentence that would have made it land. &ldquo;Ms. Anna, you told me you&apos;re at the food bank right now. This plan puts $110 back in your Social Security every single month — and because you go to the VA, not one doctor changes.&rdquo; That&apos;s not just presenting a feature. That&apos;s connecting a real person&apos;s real situation to a real solution. That&apos;s the difference between a consumer who thinks &ldquo;that&apos;s interesting&rdquo; and one who says &ldquo;okay, let&apos;s do it.&rdquo;</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>On the objection at 8:38: Anna&apos;s real fear wasn&apos;t paperwork — it was doctors changing without warning. You found out at 10:35. The reframe that unlocks that fear is specific and accurate: she only uses the VA, and this plan doesn&apos;t touch the VA. No civilian doctors. Nothing changes except $110 more in her pocket. That answer existed the whole call — it just needed to get said earlier, directly, to the right fear. For every call going forward: when a consumer says they don&apos;t want to switch, ask yourself what they&apos;re actually afraid of losing. Nine times out of ten, the answer to that fear is sitting right in the discovery you already did.</p>
        </section>

      </div>
    </PageShell>
  )
}
