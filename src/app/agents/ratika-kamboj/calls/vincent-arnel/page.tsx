'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function VincentArnelCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/ratika-kamboj" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Ratika Kamboj · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Ratika Kamboj × Vincent Arnel</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 20, 2026 · 16:26 · Nashville, TN (ZIP 37207) · <strong style={{ color: 'var(--terracotta)' }}>37 / 100</strong> · Missed Opportunity</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Vincent Arnel called looking for the $200/month food card benefit he used to receive on his Devoted Health C-SNP plan, which he switched away from earlier this month. Ratika quickly diagnosed the problem — Vincent has Type 2 diabetes and depression, qualifying him for a Chronic Special Needs Plan (C-SNP), and his Devoted plan was delivering $200/month while his current Health Spring Preferred plan gives only $110 every three months. The diagnosis was correct. The execution was not.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The pivotal failure happened between 11:23 and 13:50. After Vincent repeatedly said he did not want to go back to Devoted, Ratika had one move: find him a different C-SNP with a comparable or better food allowance. Instead, she kept pushing Devoted — the only plan she had ready — without exploring alternatives. Consumer expressed clear intent ('Is there any other plan out there?') three separate times and the agent never delivered an answer.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The call ended with Ratika telling the consumer to call Health Spring directly for his OTC benefits — effectively ending the call with zero value delivered. Vincent Arnel was a textbook closeable: he has a qualifying chronic condition, confirmed Medicaid LIS Level 1, is actively dissatisfied with his current plan, and stated explicitly what he wants. This was a solvable problem. The agent surrendered because she had only one plan ready and no backup when the consumer said no.</p>
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
              { cat: 'Lead Quality', score: 7, max: 20 },
              { cat: 'Signal Reading', score: 9, max: 20 },
              { cat: 'Math Breakdown', score: 5, max: 20 },
              { cat: 'Objection Handling', score: 3, max: 15 },
              { cat: 'Call Outcome Quality', score: 2, max: 10 },
              { cat: 'Compliance', score: 11, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums', color: 'var(--terracotta)' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>37/100 reflects a call where the diagnostic work was solid but every conversion opportunity was surrendered due to a single-plan mindset and inability to handle repeated objections to that plan.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Complete TPMO Compliance Delivery (0:57):</strong> Ratika delivered a fully compliant TPMO disclaimer — plan count (3 organizations, 19 products), referral to Medicare.gov and 1-800-Medicare, scope of discussion question for Medicare Advantage, non-obligatory enrollment statement — all within the first 90 seconds.</li>
            <li><strong>Proactive Medicaid and LIS Identification (5:10):</strong> When the consumer denied having Medicaid or Extra Help, Ratika proactively identified signals in her system and asked permission to check his Medicaid level. She correctly found partial Medicaid and LIS Level 1 — information the consumer himself didn't know he had.</li>
            <li><strong>Accurate C-SNP Situation Diagnosis (10:22):</strong> Ratika correctly connected the dots: consumer had a C-SNP (Devoted), he has Type 2 diabetes qualifying him for it, he switched away unknowingly, and the switch cost him his $200/month food benefit. This diagnosis was clinically accurate and delivered clearly.</li>
            <li><strong>Doctor and Plan History Verification (9:48):</strong> Agent confirmed the consumer's sole physician (Dr. Tara Long), reviewed prior plan history (Devoted HMO C-SNP), and correctly noted that the previous plan was tailored to his chronic conditions. This due diligence established the factual basis for a plan recommendation.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC1 · 11:23–13:50</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Single-Plan Tunnel Vision</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Consumer explicitly asked 'Is there any other plan out there?' at least twice and received no answer. Agent had a willing buyer with chronic conditions, LIS Level 1, and explicit desire for a food card benefit — and could not close because she had only one plan ready.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Instead</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>"I hear you — you don't want Devoted. Let me pull up the other Chronic Special Needs Plans available in Davidson County for someone with Type 2 diabetes and depression. Because of your conditions, you can enroll in any C-SNP year-round."</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC2 · 14:50, 11:11</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Client Gold Ignored — Financial Insecurity</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Consumer stated 'I need all the benefits I can get as a senior citizen' — both are fear-of-financial-shortfall statements. Agent never deployed these emotionally. If the $1,960 annual gap had been humanized, the consumer's resistance would have been significantly lower.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Instead</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>"Vincent, that's exactly why this matters. Right now you're leaving $1,960 on the table every year. That's nearly $2,000 in groceries you're giving up every year."</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC6 · 6:41, 9:21</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Missed SEP Pathway — CSN Not Used as Enrollment Tool</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Consumer has Type 2 diabetes and depression — both confirmed qualifying conditions for a C-SNP via the CSN Special Enrollment Period. This SEP is open year-round. Agent identified the conditions but never used the CSN SEP as the mechanism to get the consumer into an alternative C-SNP.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Instead</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>"Because you have Type 2 diabetes and depression, you qualify for what's called a Chronic Special Needs Plan at any time of year. Let me check every C-SNP available in Davidson County and find you the one with the best food allowance."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Ratika — your compliance delivery is one of the cleanest I've reviewed — you hit every TPMO element in under 90 seconds and your system-based discovery (finding the LIS Level 1 when the consumer denied it) shows real instincts for this work. The diagnosis on this call was perfect: you correctly identified that Vincent had a C-SNP, lost his $200/month food benefit when he switched, has qualifying chronic conditions (diabetes and depression), and is actively looking to restore the benefit. That's a complete clinical read. The problem is what happened next.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>When Vincent said 'I don't want Devoted' at 11:36, you had one move that you didn't make: pivot to alternative C-SNP options. Instead you pushed Devoted four more times. A consumer who says 'I don't want that plan — is there anything else?' is not objecting to switching plans. He's objecting to that specific carrier. Going into any C-SNP call with only one plan is the core problem to fix. Know the landscape before you pick up.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Here is the line that would have changed this call: "Vincent, you just told me you need all the benefits you can get as a senior — and I agree with you. Right now you are leaving $1,960 in food money on the table every year. You don't have to go back to Devoted. Because of your diabetes and depression, you can switch into any Chronic Special Needs Plan in Davidson County at any time of year. Let me check the full list right now — give me 60 seconds and I will tell you exactly what your options are."</p>
        </section>

      </div>
    </PageShell>
  )
}
