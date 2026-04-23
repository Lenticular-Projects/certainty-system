'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function DeborahRoostCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/lawrence-morris" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Lawrence Morris · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Lawrence Morris × Deborah Roost</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 20, 2026 · 10:43 · Payne, Ohio · <strong style={{ color: 'var(--terracotta)' }}>40 / 100</strong> · Missed Opportunity</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Lawrence connected with Deborah Roost, a 70-year-old Type 2 diabetic on an Aetna C-SNP plan in Payne, Ohio who called specifically asking about the food/grocery card. The call began well — Lawrence quickly identified her existing $200/month Aetna benefit and surfaced a competing Devoted C-SNP plan paying $395/month. The critical pivot came at 7:51 when Lawrence presented the upgraded benefit. However, the presentation stalled immediately on the doctor network issue: Lawrence disclosed that Dr. Hogan&apos;s participation in Devoted could not be confirmed, and rather than resolving that obstacle, he accepted the uncertainty and closed the presentation.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The fatal moment was 10:22 when Deborah said &ldquo;I&apos;ll check that out and get back with you.&rdquo; Lawrence responded with a brief year-end review reminder and said goodbye — a full surrender with no attempt to handle the objection, no reframe of the doctor network risk, and no scheduling of a follow-up. This is a textbook RC1 loss of lead.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The call also missed a major Client Gold signal: Deborah revealed at 1:40 that the only medication she has trouble getting is Ozempic — a Tier 5-6 specialty drug that costs hundreds to thousands of dollars per month out of pocket. Lawrence never returned to this pain point. The math opportunity (potential $195/month uplift in flex benefits plus potential Ozempic cost reduction) was never annualized or humanized. A consumer who called asking specifically about money walked away with no enrollment and no follow-up plan.</p>
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
              { cat: 'Signal Reading', score: 9, max: 20 },
              { cat: 'Math Breakdown', score: 5, max: 20 },
              { cat: 'Objection Handling', score: 4, max: 15 },
              { cat: 'Call Outcome Quality', score: 4, max: 10 },
              { cat: 'Compliance', score: 10, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>40/100 reflects a warm lead lost to a passive close, a missed Client Gold on a high-cost drug, and incomplete math — not a genuinely unwinnable call.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Clean TPMO Disclaimer Delivery (0:44):</strong> Full TPMO with the five-organization count, 46-product count, Medicare.gov reference, and plan type overview — accurate and complete within the first 90 seconds.</li>
            <li><strong>Recognized C-SNP Status and Surfaced Upgrade Path (4:48):</strong> Correctly identified Deborah&apos;s Aetna plan as a C-SNP, confirmed her existing $200 benefit, and found a competing C-SNP (Devoted) at $395. Most agents would have ended the call seeing an existing plan — you found the upgrade.</li>
            <li><strong>Doctor Network Disclosure Before Presenting the Plan (6:54):</strong> Asked for Dr. Hogan&apos;s name before presenting the Devoted upgrade. Honest, consumer-protective, right ethical sequence.</li>
            <li><strong>Verified Decision-Making Capacity and Living Situation (1:18):</strong> Decision-making capacity and nursing home check both completed before plan discussion.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC1 · 10:22, 10:26</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Loss of Lead — Surrendered Close</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>A warm, qualified, benefit-motivated caller left unenrolled after you accepted a callback objection with no pushback. The doctor network obstacle was entirely resolvable with a two-minute on-hold call to Dr. Hogan&apos;s office — an offer you never made. &ldquo;I&apos;ll check that out&rdquo; almost certainly means she forgets, gets confused, or talks to another agent.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Deborah, I completely understand — your doctor is everything. Here&apos;s what I want to do: let me put you on hold for two minutes and call Dr. Hogan&apos;s office right now to confirm whether he takes Devoted. If he does, we can get you set up today and you&apos;ll be getting $395 instead of $200 starting next month. Can I do that for you real quick?&rdquo;</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC2 · 1:40, 1:54</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Client Gold Ignored — Ozempic Pain Point Dropped</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Deborah volunteered her highest-cost medication struggle unprompted — Ozempic can cost over $1,000/month out of pocket. You acknowledged it and promised to return to it, then never did. The entire math presentation could have been anchored to drug coverage plus flex benefit combined savings, which would have been a far more compelling case than the flex card alone.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Ozempic — that&apos;s a big one, and I&apos;m glad you brought it up. Let me flag that right now. When I pull up the Devoted plan, I&apos;m going to check two things for you: the flex card amount and whether Ozempic is covered better than it is on your Aetna plan. Because if both of those are better, we could be talking about thousands of dollars back in your pocket this year. Okay?&rdquo;</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC3 · 7:51, 9:04</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math Not Completed — No Annualization or Humanization</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>You presented the comparison as &ldquo;$200 vs. $395&rdquo; and stopped. No annualization ($2,340/year difference), no humanization tied to Deborah&apos;s stated Ozempic cost or grocery needs. An incomplete math presentation gives the consumer no emotional reason to act — it feels like a number, not a solution to her life.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Deborah, let me put that in real numbers. Right now you&apos;re getting $200 a month — that&apos;s $2,400 a year. With the Devoted plan, that jumps to $395 a month — $4,740 a year. That&apos;s $2,340 more every year, just in the flex card alone. And if the Ozempic coverage is better on top of that, we&apos;re talking about even more. That&apos;s real money.&rdquo;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Gold Audit */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Client Gold Audit</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #1 · 1:40 · MISSED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;The only one I have trouble getting is the Ozimic.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>Ozempic is a GLP-1 agonist widely prescribed for Type 2 diabetes. Without adequate Part D coverage, it commonly costs $800–$1,200/month out of pocket. Deborah&apos;s phrasing — &ldquo;the only one I have trouble getting&rdquo; — reveals financial strain and a medication access barrier. You said &ldquo;we will go over that in a second&rdquo; and never returned. The plan comparison could have been anchored to this drug coverage pain alongside the flex card.</p>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #2 · 5:06 · PARTIALLY_USED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;Well, the first of the month I get some groceries, yeah. Well, I got groceries or medicine or whatever I use it for.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>Deborah is splitting her monthly benefit card between food and medication — a real financial lifeline, not a nice-to-have. You correctly confirmed this and used it to pivot toward the upgrade, but never connected the extra $195/month to the specific way she uses it, which would have made the upgrade feel urgent and personal rather than abstract.</p>
            </div>
          </div>
        </section>

        {/* The Moment That Decided This Call */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>The Moment That Decided This Call</h2>
          <div style={{ padding: '20px 22px', background: 'rgba(19,17,16,0.92)', borderRadius: '10px', color: '#FBF8F3' }}>
            <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'rgba(251,248,243,0.6)', margin: '0 0 8px' }}>The One Move · 10:22</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, fontStyle: 'italic', margin: 0 }}>&ldquo;Deborah, your doctor is the right thing to check — let me call Dr. Hogan&apos;s office right now while I have you on the line. Two minutes on hold and we&apos;ll know for sure. If he&apos;s in the network, you&apos;ll be getting $395 next month instead of $200. That&apos;s almost $2,400 more this year, plus we still need to check on the Ozempic coverage. Can I do that for you?&rdquo;</p>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Lawrence, you found the upgrade on this call — that&apos;s the hardest part, and you did it. You recognized Deborah was on a C-SNP, confirmed her existing $200 benefit, and surfaced the Devoted plan at $395. Most agents would have looked at an existing plan and called it a dead end. You didn&apos;t. That matters.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>But here&apos;s what you left on the table: Deborah told you at 1:40 that Ozempic was the only medication she had trouble getting. Ozempic can cost over $1,000 a month without the right coverage. That&apos;s not a footnote — that&apos;s the headline. When she said that, you had two enrollment drivers: the grocery card AND the drug coverage. You said &ldquo;we&apos;ll go over that in a second&rdquo; and you never went back. That line needs to be your anchor for the entire math presentation: &ldquo;Deborah, I&apos;m looking at two things for you right now — the flex card amount and what happens to your Ozempic. Let&apos;s see if we can solve both.&rdquo; That&apos;s what moves someone from curious to committed.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The close at 10:22 was the call. Deborah said &ldquo;I&apos;ll check that out and get back with you&rdquo; — which sounds like a no, but isn&apos;t. She didn&apos;t say she didn&apos;t want it. She said she was uncertain about her doctor. That&apos;s a solvable problem in two minutes. The script is simple: &ldquo;Deborah, your doctor is the right thing to check. Let me call Dr. Hogan&apos;s office right now — put you on hold for two minutes — and we&apos;ll know before you hang up. If he&apos;s in the Devoted network, you&apos;ll be getting $395 next month. Can I do that for you?&rdquo; That offer keeps the door open. What you did instead — accepting the callback and giving a year-end review reminder — is the same as saying goodbye to the enrollment. The close is in-call or it doesn&apos;t happen.</p>
          </div>
        </section>

      </div>
    </PageShell>
  )
}
