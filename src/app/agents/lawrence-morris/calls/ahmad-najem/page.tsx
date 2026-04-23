'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function AhmadNajemCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/lawrence-morris" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Lawrence Morris · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Lawrence Morris × Ahmad Najem</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 24:46 · Port St. Lucie, FL · <strong style={{ color: 'var(--terracotta)' }}>46 / 100</strong> · Missed Opportunity</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Lawrence spoke with Ahmad Najem, an 83-year-old Medicare Advantage beneficiary on a Humana Full Access Give Back PPO in Port St. Lucie, FL. Ahmad called about the food/grocery card benefits he had seen advertised. Lawrence correctly identified Ahmad&apos;s chronic conditions — Type 2 Diabetes and a serious heart condition (prior bypass + implanted cardiac defibrillator) — and discovered Ahmad has no Medicaid, making a D-SNP unavailable. Lawrence presented a C-SNP option (Humana Gold Plus Diabetes and Heart HMO) that included a $195/month grocery card benefit.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The call pivoted decisively at 13:48 when Ahmad disclosed a traumatic prior experience with an HMO: missed doctor appointments due to referral failures, billing disputes, and an overnight hotel stay to attend appointments. Lawrence acknowledged the objection and began looking for PPO alternatives, but the only PPO option found was Devoted at $185/month give back and an OTC/grocery card of only $82/quarter — a worse financial position than Ahmad&apos;s current plan. Lawrence failed to reframe this dead end into an enrollment close, and the call drifted into Ahmad lecturing about how insurance companies only benefit Medicaid beneficiaries.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The call ended without a close attempt. Lawrence never asked Ahmad if he wanted to move forward, never anchored on the suitability of the C-SNP despite the HMO objection, and never deployed Ahmad&apos;s own Client Gold — the harrowing account of driving from Port St. Lucie and staying in a hotel to make doctor appointments — as an emotional anchor for why having the right plan matters. The call drifted to a mutual resignation and ended on Ahmad&apos;s terms, not Lawrence&apos;s.</p>
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
              { cat: 'Lead Quality', score: 11, max: 20 },
              { cat: 'Signal Reading', score: 10, max: 20 },
              { cat: 'Math Breakdown', score: 9, max: 20 },
              { cat: 'Objection Handling', score: 5, max: 15 },
              { cat: 'Call Outcome Quality', score: 4, max: 10 },
              { cat: 'Compliance', score: 7, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>46/100 — an agent who executed discovery and compliance correctly but was unable to convert a closeable, interested consumer into an enrollment due to failure to close and surrendered objection handling.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Income Objection — Accurate and Confident Reframe (1:31):</strong> When Ahmad challenged the income requirement myth, Lawrence delivered a clear, accurate correction: &ldquo;No, your income has nothing to do with if you qualify for these programs.&rdquo; He drew the Medicaid vs. Medicare distinction correctly and held the frame under pushback. This was the best moment in the call.</li>
            <li><strong>TPMO Disclaimer — Complete and Professional (2:33):</strong> Full CMS-compliant TPMO disclaimer with all required elements — carrier count, product count, Medicare.gov, 1-800-MEDICARE, and state health insurance program reference. Delivered naturally without sounding scripted.</li>
            <li><strong>Chronic Condition Discovery and C-SNP Pivot (7:12):</strong> Lawrence proactively asked about chronic conditions and correctly identified that Ahmad&apos;s diabetes and cardiac diagnoses qualified him for a C-SNP. He named the plan correctly (Humana Gold Plus Diabetes and Heart) and explained the acronym. Most agents miss C-SNPs entirely.</li>
            <li><strong>Multi-Dimension Plan Comparison (17:33):</strong> When Ahmad reduced the comparison to $20 in grocery card difference, Lawrence correctly expanded the frame to include deductible ($500 vs $0), max OOP ($6,700 vs $3,300), and specialist copay ($45 vs $15). Right instinct, even if humanization was absent.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC2 · 15:00, 15:32, 16:05</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Client Gold Ignored — The Hotel Story</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Ahmad revealed his most powerful emotional statement — that he drove from Port St. Lucie and stayed overnight in a hotel just to attend doctor appointments because of referral failures. This is not a financial objection. This is a dignity and access objection. It reveals his core fear: that insurance bureaucracy will physically prevent him from getting the care he needs. Lawrence heard this story and never connected it to the solution he was offering. The C-SNP he presented includes a nurse care coordinator who manages referrals — the exact problem Ahmad described. That connection was never made, and the enrollment opportunity slipped away.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Ahmad — hold on. You drove from Port St. Lucie and stayed in a hotel just because the referral didn&apos;t go through? That&apos;s not just an inconvenience — that&apos;s a system that failed you when you needed care. The plan I&apos;m looking at assigns you a nurse care coordinator whose job is to manage exactly this kind of thing — making sure your referrals go through, your appointments are set, and you&apos;re not sitting in a hotel room waiting. That&apos;s the plan I&apos;m trying to put you on.&rdquo;</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC1 · 22:28, 23:47, 24:03</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>No Close Attempted — Call Ended on Consumer&apos;s Terms</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Ahmad was a motivated caller with verified chronic conditions, an active C-SNP eligibility, and genuine interest in grocery card benefits. He was never asked whether he wanted to move forward. When the Devoted PPO came up short at 21:48, Lawrence accepted the math as a dead end instead of reframing the C-SNP option — which remained the best financial package — and closing despite the HMO concern. The call ended with Ahmad delivering a resignation narrative and Lawrence offering only passive agreement.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Ahmad, I want to go back to something. The C-SNP gives you $195 in grocery money, cuts your deductible to zero, and drops your out-of-pocket by over $3,000 a year. The HMO concern is real — I get it. But this plan comes with a dedicated care coordinator for your diabetes and heart condition. Their only job is handling your referrals and making sure your appointments go through. This is a fundamentally different structure than what you experienced before. Can we get you enrolled today?&rdquo;</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC1 · 19:26, 20:36</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Frame Loss — Agreed With Consumer&apos;s Cynicism</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>From approximately 19:26 onward, Ahmad took over the call with a series of philosophical monologues about insurance companies. At 20:36, Lawrence agreed — &ldquo;I think that&apos;s any of these companies nowadays. You&apos;re absolutely right about that.&rdquo; Agreeing that insurance companies &ldquo;don&apos;t give a damn&rdquo; undermines the value of the product you&apos;re selling and validates the consumer&apos;s resignation instead of challenging it.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Ahmad, I completely hear you — insurance companies have let you down before. That&apos;s exactly why I want to make sure we find the right one today. Here&apos;s what I see in front of me...&rdquo; — then redirect to a specific plan detail and ask a closed question to regain control.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Gold Audit */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Client Gold Audit</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #1 · 15:00 · MISSED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;I drove from Port St. Lucie and stay in a hotel because I cannot drive back on the same day. And all of that because I couldn&apos;t see the doctor because I didn&apos;t have a referral.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>This statement reveals Ahmad&apos;s deepest fear: that insurance bureaucracy will physically strand him when he needs medical care. An 83-year-old with a cardiac defibrillator driving hours and paying for a hotel room just to see a doctor is not a financial complaint — it&apos;s a story about survival and dignity. Lawrence heard this and continued talking about numbers. He never deployed this as the emotional anchor for why the C-SNP&apos;s care coordination would prevent exactly this outcome.</p>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #2 · 5:36 · MISSED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;It&apos;s funny. You were telling me some few things today I&apos;ve never known before. I thought the whole thing is basically you have to be pretty poor for you to be able to qualify for that. And you just proved that to me.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>A trust-peak moment — Ahmad is telling Lawrence explicitly that he changed his mind and that Lawrence has earned credibility. This was the moment to anchor the relationship and deepen the emotional investment. Instead, Lawrence immediately moved to Medicare card reading. He never reflected this trust moment back to Ahmad, which would have made Ahmad feel heard and invested in the outcome.</p>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #3 · 22:28 · MISSED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;I don&apos;t know why people, they don&apos;t want to admit it, the fact that you only get these grocery cards and extra money if you are on Medicaid or if you are very poor. Even though I&apos;ve been retired for 15 years, you&apos;re not going to give them a credit card like that.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>Ahmad reveals a sense of injustice and invisibility — the feeling that hard-working, financially stable retirees are overlooked by a system designed for those on public assistance. Lawrence could have used this to reframe the C-SNP enrollment as exactly the kind of benefit Ahmad has been told doesn&apos;t exist for someone like him — but instead let Ahmad spiral into resignation.</p>
            </div>
          </div>
        </section>

        {/* The Moment That Decided This Call */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>The Moment That Decided This Call</h2>
          <div style={{ padding: '20px 24px', background: 'rgba(19,17,16,0.04)', borderRadius: '10px', borderLeft: '3px solid var(--ink)' }}>
            <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 8px' }}>15:32 · The One Move</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', fontStyle: 'italic', margin: 0 }}>&ldquo;Ahmad, I want to go back to that hotel story. You drove from Port St. Lucie and stayed overnight just to see your doctor — and you still couldn&apos;t get in because of a referral. I have a plan that assigns you a nurse coordinator whose entire job is making sure that never happens again. It pays $195 a month in grocery money, cuts your deductible to zero, and cuts your worst-case medical bills in half. You&apos;ve been told no before — that was the wrong plan. This is the right one. Can we get you enrolled today?&rdquo;</p>
          </div>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', marginTop: '14px' }}>The call had two decisive windows. At 13:48, the HMO objection needed a reframe built around care coordination. At 22:28, Ahmad&apos;s resignation monologue was the final close opportunity — the C-SNP directly contradicted the belief he was expressing. A single strong reframe and enrollment ask at either moment could have changed the outcome.</p>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Lawrence, the core of what happened on this call is that you found the right plan, with the right consumer, and never asked for the sale. That&apos;s the only thing that needs to change.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>You did something most agents miss entirely — you asked about chronic conditions, identified a C-SNP, and named it correctly. That&apos;s advanced product knowledge and it got you further into this conversation than most agents would have gotten. The income objection at 1:31 was your best moment — confident, accurate, held your ground. The TPMO disclaimer at 2:33 was clean. The math comparison at 17:33 showed the right instinct even if it wasn&apos;t finished. You&apos;re doing a lot right.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Here&apos;s what cost you the enrollment: Ahmad told you a story at 15:00 that was your close. He drove from Port St. Lucie, paid for a hotel, and still couldn&apos;t see his doctor because of a referral. That&apos;s a man telling you his deepest fear about healthcare access. You heard it and kept talking about numbers. The C-SNP you found includes a nurse care coordinator whose job is to prevent exactly what Ahmad described. That connection — &ldquo;the thing that happened to you in that hotel? This plan is designed to stop that from ever happening again&rdquo; — that&apos;s the line that gets the enrollment. Find the Client Gold, reflect it back, connect it to the solution.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>On closing: when the Devoted PPO came up short at 21:48, you had a decision to make — reframe back to the C-SNP or close on what you have. You did neither. Ahmad was actively engaged until the end. He was frustrated about the system, not unwilling to enroll. At 22:28, when he said &ldquo;I don&apos;t know why people don&apos;t want to admit it&rdquo; — that was your window. The answer to that speech is: &ldquo;Ahmad, I&apos;m going to admit something right now. The plan I found you does give you $195 a month in grocery money. That&apos;s real. And it&apos;s available to you because of your diabetes and heart condition — not because you&apos;re poor. Can we get you into this plan today?&rdquo; Say those exact words. Never leave a call with a qualified consumer without asking.</p>
          </div>
        </section>

      </div>
    </PageShell>
  )
}
