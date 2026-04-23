'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function PaulMarieCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/marcus-hughes" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Marcus Hughes · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Marcus Hughes × Paul Marie</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 43:31 · North Carolina (ZIP 27262) · <strong style={{ color: 'var(--sage-dark)' }}>82 / 100</strong> · Enrolled</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Marcus Hughes enrolled Paul Marie — an 84-year-old dual-eligible beneficiary in High Point, NC — into UnitedHealthcare Dual Complete at $0 premium with a May 1, 2026 effective date. Marcus correctly identified Paul's LIS eligibility level change (level 2 → level 1) as the qualifying SEP and moved the call efficiently through discovery, plan presentation, and full disclosure. The enrollment was completed electronically with a confirmation code issued.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The call had genuine warmth throughout. Marcus connected naturally with Paul — a widower, veteran, and active 84-year-old — and built real trust. The OTC benefit upgrade from $70 to $230/month was the headline win and Paul responded immediately. The doctor network check, medication coverage, dental and vision presentation, and Medicaid verification were all executed cleanly.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>One compliance moment required a real-time save: at 26:58, Paul said 'No' when asked if he understood this is a Medicare Advantage plan and not a supplement. Marcus handled it smoothly, explaining Paul was staying with UnitedHealthcare, keeping his doctors, and just upgrading his benefits. The enrollment closed cleanly after that clarification. The call was competent, warm, and productive — a textbook dual-eligible enrollment.</p>
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
              { cat: 'Lead Quality', score: 16, max: 20 },
              { cat: 'Signal Reading', score: 14, max: 20 },
              { cat: 'Math Breakdown', score: 10, max: 20 },
              { cat: 'Objection Handling', score: 13, max: 15 },
              { cat: 'Call Outcome Quality', score: 9, max: 10 },
              { cat: 'Compliance', score: 13, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>82/100 reflects a clean dual-eligible enrollment with strong compliance and good rapport, limited by incomplete math execution and partial Client Gold deployment.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>OTC Benefit Anchoring — Correct Value Identification (6:47):</strong> Marcus immediately identified the LIS level change and translated it into a concrete dollar figure ($230/month) that directly matched what Paul called in for. He also anchored the upgrade against Paul's current $70 allowance, which gave Paul an immediate comparison point.</li>
            <li><strong>Patience During Medicare ID Lookup (2:23):</strong> Paul spent approximately 90 seconds finding his Medicare card, including retrieving his glasses. Marcus maintained a calm, unhurried tone ('Take your time, okay?') without pressure or impatience. This preserved trust with an 84-year-old consumer who needed to move at his own pace.</li>
            <li><strong>MA/Supplement Confusion Recovery (27:00):</strong> When Paul said 'No' to understanding this was a Medicare Advantage and not a supplement plan, Marcus pivoted cleanly — reassuring Paul he was staying with UnitedHealthcare and just upgrading benefits. The recovery was smooth, accurate, and warm, preventing a potential enrollment stall.</li>
            <li><strong>Dental and Vision Benefit Presentation Tied to Consumer Need (15:23):</strong> Marcus connected the dental and vision benefits directly to what Paul revealed — five years without glasses and a need for a full dental procedure. He presented specific dollar figures ($300 vision, $2,000 dental) rather than generic benefit statements.</li>
            <li><strong>Full Health Assessment Completion (34:07):</strong> Marcus administered the complete post-enrollment health assessment covering medical conditions, SDOH factors (food security, transportation, social isolation), mental health screening, and living situation. This is a compliance requirement that many agents rush or skip.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC3 · 7:00, 7:36</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math Not Completed — OTC Comparison Stated But Not Annualized or Humanized</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>The enrollment closed anyway, but the math step was an opportunity to deepen commitment and eliminate any post-enrollment doubt. Paul's $70 vs. $230 comparison was stated but never annualized ($1,920/year) or tied back to his specific financial pain (car repair debt, grocery budget). A full math step would have made this a 90+ call.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>After stating the $230 vs. $70 figure, add: 'Paul, let me put that in real numbers for you. That's a $160-a-month difference. Over a year that's $1,920 extra in your pocket just for groceries and utilities. You told me $70 barely covers potatoes. This plan changes that.'</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC2 · 1:39</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Client Gold Ignored — Widow Signal Not Deployed</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Paul's disclosure that his wife died three years ago was a trust-building opportunity and a solo-decision-maker confirmation. Marcus expressed condolences appropriately but did not deploy this as a rapport anchor. A direct personal acknowledgment ('Paul, I want to make sure I take care of this for you — you shouldn't have to figure this out alone') would have deepened trust and accelerated the enrollment.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>'Paul, I'm sorry about your wife. I want to make sure you're well taken care of on this call. That's what I'm here for.' Then proceed. Fifteen words. That's the deployment.</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC2 · 7:54, 8:05</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Hot Signal Not Anchored — $70 Grocery Story Missed</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Paul described his $70 OTC allowance with vivid resignation — a 10-pound bag of potatoes and a gallon of milk. This was the emotional peak of the call. Marcus agreed and moved on without pivoting it into an enrollment anchor. The line 'That's exactly why I'm glad you called today, Paul — we're about to triple that' would have locked in Paul's commitment before the medication list was even collected.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>'Paul, that's exactly why I'm glad you called today. We're about to triple that — from $70 to $230, starting May 1st. That's a real grocery trip. Let me get you set up right now.'</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Gold Audit */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Client Gold Audit</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Gold #1 · 7:54 · MISSED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;$70, I'd buy you a 10-pound bag of potatoes and 10 pounds of milk. And a gallon of milk. And that's it. And that's your whole grocery trip.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>This statement revealed acute food insecurity and financial resignation. Paul wasn't complaining abstractly — he described his actual grocery budget with specificity. The fear underneath is deprivation: not having enough on a fixed income at age 84. Marcus agreed ('Yeah, it's ridiculous') but did not deploy this as an enrollment anchor. The correct move was to name what Paul just said and make the $230 benefit feel immediate and real.</p>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Gold #2 · 1:39 · MISSED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;My wife died three years ago.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>Paul mentioned his wife's death in the context of confirming he makes his own healthcare decisions. This reveals he is alone — no spouse to help navigate complex insurance decisions, no second voice in the home. The underlying fear is isolation and vulnerability. Marcus expressed condolences appropriately but treated this as biographical data rather than a trust-and-certainty signal.</p>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(111, 159, 102, 0.08)', borderRadius: '10px', borderLeft: '3px solid var(--sage-dark)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--sage-dark)', margin: '0 0 6px' }}>Gold #3 · 15:45 · LEVERAGED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;I got to go to the hospital and lay overnight because they got to cut the rest of my teeth out because they're all broken.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>Paul revealed a significant upcoming dental procedure that will require hospitalization. The fear here is medical cost and physical discomfort. Marcus correctly presented the $2,000 dental allowance and framed it as coverage now 'in your back pocket.' This was the best Client Gold deployment of the call — Marcus connected a real stated need to a specific benefit.</p>
            </div>
          </div>
        </section>

        {/* The Moment That Decided This Call */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>The Moment That Decided This Call</h2>
          <div style={{ padding: '20px 24px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
            <p style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 8px' }}>6:47 — Benefit Statement</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}><strong>Marcus:</strong> "I can actually get the increase for you up to $230 per month for your groceries and utilities. Would you say that would help you out?"</p>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', marginTop: '12px' }}>This was the moment the sale was made. Paul called in response to a TV ad about the food card and was looking for a money upgrade. When Marcus stated the $230 figure, Paul immediately said 'I'm making a note of it' — committing to memory a number that tripled his current benefit. From this moment on, Paul was an enrolled consumer in intent. Everything that followed was clarification and compliance execution.</p>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Marcus, this was a clean enrollment and you should be proud of it. You read the call well — Paul came in as a money caller, and you matched him with the right benefit at the right moment. The LIS level change SEP was correctly identified and the UHC Dual Complete was the right match. That's not always easy to spot on the fly.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>The one area that would have made this call exceptional instead of solid: the math step. Paul handed you the perfect setup at 7:54 when he said '$70 buys a 10-pound bag of potatoes and a gallon of milk — and that's your whole grocery trip.' That was your moment. You agreed and moved on. But if you'd said 'Paul, that's exactly why I'm glad you called today — we're going from $70 to $230, that's $1,920 extra in your pocket every year. That's real groceries. Let's get this locked in right now,' the call would have shortened by 10-15 minutes and Paul would have felt the decision in his gut rather than just in his head. Always complete the math: state the difference, annualize it, humanize it back to what they just told you.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>The other note is small but worth building into your habit: when Paul told you his wife died three years ago, that was a Client Gold moment. He's 84, he's alone, he makes all his own decisions with nobody to call. A simple 'Paul, I want to make sure I take good care of you on this call — that's what I'm here for' goes a long way with someone in his position. You expressed condolences, which was right. But deploy that moment — it deepens trust and it accelerates the yes. Keep doing what you're doing on rapport. Now just complete the math every time.</p>
        </section>

      </div>
    </PageShell>
  )
}
