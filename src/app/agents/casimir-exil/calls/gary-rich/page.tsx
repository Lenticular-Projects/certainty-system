'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function GaryRichCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/casimir-exil" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Casimir Exil · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Casimir Exil × Gary Rich</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 65:38 · Wimberley, TX (ZIP 78676) · <strong style={{ color: 'var(--sage-dark)' }}>76 / 100</strong> · Enrolled</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Gary Rich, an 83-year-old retiree in Wimberley, TX, was enrolled in the Devoted Choice Give Back 001 TX PPO with a May 1, 2026 effective date. The enrollment was driven by Gary&rsquo;s interest in the Part B give-back benefit ($163.90/month), and you successfully confirmed his primary care doctor in-network and all six of his medications covered under Tier 1 or 2 at near-zero cost. The call lasted 65 minutes — roughly twice as long as necessary for this level of complexity.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The enrollment itself is complete and Gary gave a clean voice signature with name, DOB, and agreement. However, the call contains a serious compliance violation: you invoked a Disaster Special Election Period (DST) based on winter storm power outages. Gary explicitly stated he was NOT materially affected by severe weather — &lsquo;No, we&rsquo;re not, thank goodness&rsquo; and &lsquo;It could, but it hasn&rsquo;t.&rsquo; You coached Gary toward a qualifying answer, then enrolled him under DST despite Gary&rsquo;s own statements indicating no qualifying impact. This is a CMS audit red flag.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Aside from the compliance concern, the sales execution was solid. You built genuine rapport with an elderly consumer who moves slowly, showed patience throughout, completed a full health risk assessment post-enrollment, and anchored the close effectively around the $163.90 monthly savings. The call&rsquo;s primary coaching need is not closing skill — it is compliance judgment on SEP selection.</p>
          </div>
        </section>

        {/* Certainty Score Breakdown */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Certainty Score Breakdown</h2>
          <div style={{ background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', borderBottom: '1px solid rgba(19,17,16,0.08)', background: 'rgba(19,17,16,0.03)' }}>
              <span>Category</span>
              <span>Score</span>
              <span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 13, max: 20 },
              { cat: 'Signal Reading', score: 15, max: 20 },
              { cat: 'Math Breakdown', score: 12, max: 20 },
              { cat: 'Objection Handling', score: 14, max: 15 },
              { cat: 'Call Outcome Quality', score: 7, max: 10 },
              { cat: 'Compliance', score: 8, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>76/100 reflects a completed enrollment with strong rapport and partial math — but penalized for a serious DST compliance violation and significant call inefficiency.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Patient, Warm Rapport with Elderly Consumer (3:48):</strong> Gary has arthritis and moves slowly — it took him nearly 2 minutes to retrieve his Medicare card, and you never rushed him, never showed impatience, and consistently said &lsquo;Take your time, no worries.&rsquo; This built genuine trust with a consumer who is easily spooked by pressure and made enrollment possible.</li>
            <li><strong>Doctor Confirmation Before Plan Pitch (9:21):</strong> Before presenting any plan, you confirmed Dr. Benek by name and location in the Devoted network. You did the system lookup live and confirmed the specific Ranch Road 12 address. This eliminated the #1 objection before it could form.</li>
            <li><strong>Clean Annualization of the Give-Back (17:45):</strong> You correctly converted $163.90/month into &lsquo;$1,956, almost $2,000&rsquo; in annual savings. This is Math Step 2 executed properly. Gary&rsquo;s &lsquo;Wow&rsquo; reaction confirmed the number landed.</li>
            <li><strong>Full Prescription Coverage Verification (29:06):</strong> All six medications were looked up individually — tier confirmed for each (Tier 1 and 2 across the board), Wimberley Pharmacy confirmed as standard network. Zero surprises at the pharmacy was a key enrollment trust element.</li>
            <li><strong>Comprehensive Post-Enrollment Health Risk Assessment (54:53):</strong> You conducted a thorough health risk assessment after the voice signature — covering diabetes complications, cardiovascular screening, ER history, falls, smoking, vaccinations, quality of life, housing stability, ADLs, weight, and food security. This is best practice and adds value to the carrier relationship.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC4 · 25:16, 27:31, 41:21</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>DST Misuse — Prohibited SEP Invocation</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>You invoked Disaster Special Election Period based on winter storm power outages. Gary explicitly denied being materially affected: &lsquo;No, we&rsquo;re not, thank goodness.&rsquo; You then coached Gary toward a qualifying answer and enrolled him under DST. This is a CMS compliance violation. The enrollment may be at risk of audit reversal. A compliant enrollment was available via CSN (Type 2 diabetes + neuropathy, confirmed at 11:27 and 55:11).</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>At 11:27 when Gary confirmed Type 2 diabetes: &ldquo;Gary, your diabetes actually opens up a special enrollment period we can use right now — it&rsquo;s called a Chronic Condition SEP and it&rsquo;s available any time of year for people managing diabetes. Let me check if there&rsquo;s a plan in your area specifically designed for people in your situation.&rdquo; Verify Devoted C-SNP availability in Hays County. If C-SNP is not available, use OEP or verify another valid SEP before submitting.</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC2 · 12:16, 13:09</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Client Gold Ignored — Wife&rsquo;s Medical Crisis</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Gary&rsquo;s wife woke up suddenly blind in one eye two weeks before this call — Gary canceled his own appointments to manage the situation. This is a life-disrupting event revealing fear of medical vulnerability, caregiver burden, and the fragility of health. You said &lsquo;Wow&rsquo; and immediately pivoted back to medications. This emotional anchor — deployed correctly — would have made Gary feel deeply seen and dramatically accelerated the close.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>At 13:09: &ldquo;Gary, that&rsquo;s a lot to carry — worrying about your wife, dealing with your own health, managing everything. The last thing you need right now is to also be worried about whether your insurance is working for you. That&rsquo;s exactly why we need to make sure your plan is locked in and right, so that&rsquo;s one less thing on your plate.&rdquo; Then connect immediately: &ldquo;Tell me — does she have Medicare too? I want to make sure you&rsquo;re both covered.&rdquo;</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC1 · 22:53, 23:17, 35:10</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Call Duration Inefficiency — 65 Minutes for a Simple Enrollment</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Gary is elderly and gets tired. By the time the compliance attestation reading began (45:13), Gary commented &lsquo;My arm&rsquo;s going to sleep&rsquo; (46:07). The 15+ minutes of property-history tangents were entirely avoidable. An experienced agent closes this call in 35–40 minutes. The compliance reading is mandatory — but arriving there with a fatigued consumer is avoidable.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>When Gary begins a personal story unrelated to enrollment: &ldquo;Gary, I love that — hold that thought, let me get everything locked in for you first and then we can catch up. I want to make sure we take care of you properly.&rdquo; This keeps Gary engaged, feels respectful, and saves 15–20 minutes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Gold Audit */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Client Gold Audit</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #1 · 12:16 · MISSED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;My wife, I guess two weeks ago, three weeks ago now, she woke up on a Saturday morning and she can&rsquo;t see out of one eye... she&rsquo;s totally blind in the left eye now.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>Gary revealed that his wife suddenly lost vision in one eye two to three weeks prior — a devastating medical event that forced Gary to cancel his own appointments to manage the situation. This reveals fear of medical vulnerability, caregiver burden, and anxiety about managing health crises. You said &lsquo;Wow&rsquo; and redirected to medications immediately. This was the single richest emotional anchor in the call — a moment of genuine human vulnerability that, if met properly, would have deepened trust and accelerated the close significantly.</p>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #2 · 3:40 · MISSED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;I&rsquo;ve got, of course, the doctor got arthritis in all my joints and they can&rsquo;t do anything about it.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>Gary disclosed that he has arthritis throughout his joints and that there is no treatment available to him — a statement of medical resignation and chronic pain that he accepts as permanent. You acknowledged it superficially (&lsquo;no worries, take your time&rsquo;) but never returned to it. The $0 primary care copay and zero drug deductible for his medication tier could have been humanized against this exact condition.</p>
            </div>
          </div>
        </section>

        {/* The Moment That Decided This Call */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>The Moment That Decided This Call</h2>
          <div style={{ padding: '20px', background: 'rgba(113, 99, 81, 0.05)', borderRadius: '10px', borderLeft: '4px solid var(--ink-60)' }}>
            <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', lineHeight: 1.75, color: 'var(--ink)', margin: '0 0 12px' }}>&ldquo;I see here one of the richest amounts in your area with the voted, you can save up to $163 every month added back to your Social Security check from that Part B gift back.&rdquo; (15:56)</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>You read Gary&rsquo;s $0-cost preference perfectly and delivered the matching benefit. Gary&rsquo;s &lsquo;That sounds good to me&rsquo; at 16:42 confirms this was the conversion moment. You anchored the entire enrollment to Gary&rsquo;s own stated need at 2:14: &lsquo;I&rsquo;ll take whatever I can get as long as I don&rsquo;t have to pay extra for it.&rsquo;</p>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Casimir — you closed a real one today. 83-year-old consumer, arthritis, slow-moving, and you got him enrolled in 65 minutes by never rushing him, never losing patience, and hitting the right benefit at the right time. The Part B give-back was perfectly matched to what Gary told you at 2:14. You read that and executed on it. That&rsquo;s the skill. Here&rsquo;s where I need you to sharpen immediately: the DST issue at 25:16 is serious. Gary told you &lsquo;No, we&rsquo;re not, thank goodness&rsquo; when you asked if he was affected by severe winter weather. That&rsquo;s a disqualification — not a prompt to keep asking. CMS rules say you cannot bring up disaster SEPs proactively, and you cannot use them when the consumer says they weren&rsquo;t impacted. But here&rsquo;s the good news: you had a completely valid SEP right in front of you. Gary told you at 11:27 that he has Type 2 diabetes. If Devoted has a C-SNP plan available in Hays County, CSN is your compliant path — year-round, no expiring window, and it actually gets Gary into a plan designed for his condition. I need you to check whether a Devoted C-SNP exists in that county, and if it does, flag this enrollment for compliance review so we can recode it correctly. The other thing I want you to work on is the emotional moments. At 12:16, Gary told you his wife woke up blind in one eye two weeks ago. He canceled his own appointments to take care of her. That&rsquo;s fear talking — and that&rsquo;s the moment you look Gary in the eye and say: &lsquo;Gary, that&rsquo;s a lot to carry. Let me make sure your coverage is locked in so that&rsquo;s one less thing on your plate while you&rsquo;re taking care of her.&rsquo; You had the rapport to say that. The close would have happened in 20 minutes instead of 65. Patience is your superpower — now add emotional awareness to go with it.</p>
        </section>

      </div>
    </PageShell>
  )
}
