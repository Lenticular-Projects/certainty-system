'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function TeresaElgrinoCallPage() {
  return (
    <PageShell signal="amber">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/manuel-medrano" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Manuel Medrano · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Manuel Medrano × Teresa Elgrino</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 52:08 · Findlay, Ohio (ZIP 45840) · <strong style={{ color: 'var(--mustard-dark)' }}>58 / 100</strong> · Not Enrolled (Uncloseable)</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Teresa Elgrino called in response to a TV ad for the $1,420 healthy allowance card. She is a 60-year-old dual-eligible Medicaid/Medicare beneficiary on a Humana plan in Findlay, Ohio. Manuel completed a thorough discovery phase and identified a UnitedHealthcare plan offering $116/month in OTC/grocery benefits versus her current $100/month with Humana — a $16/month differential.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The call turned on one critical differentiator Teresa raised repeatedly: Humana&apos;s grocery allowance rolls over unused balances month-to-month, while UnitedHealthcare resets each month. Teresa was knowledgeable, specific, and firm. She also noted Humana had higher hospital and vision allowances. Manuel attempted multiple reframes — the annualized value comparison, the QMB protection argument, the rollover practicality challenge — but Teresa held her position with logic and conviction throughout.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The outcome is correctly classified as uncloseable given what was offered. However, Manuel missed a critical pivot: Teresa&apos;s full Medicaid/QMB status created a viable INT SEP pathway to a D-SNP plan, which could have offered a materially different value proposition. That unexplored pathway is the one chance Manuel had to convert this call.</p>
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
              { cat: 'Signal Reading',      score: 9,  max: 20 },
              { cat: 'Math Breakdown',      score: 11, max: 20 },
              { cat: 'Objection Handling',  score: 7,  max: 15 },
              { cat: 'Call Outcome Quality',score: 8,  max: 10 },
              { cat: 'Compliance',          score: 10, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>58/100 — strong compliance and lead control, weak signal reading on D-SNP pathway, recycled objection responses. The D-SNP miss is the reason this wasn&apos;t a close.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Manuel Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Regional Variation Education (13:07):</strong> When Teresa pushed back on the $1,420 ad, Manuel correctly explained that the TV figure is a national maximum divided by region — then did the math live: $116 x 12 = $1,392. Patient, accurate, and useful.</li>
            <li><strong>Prior Authorization Discovery (24:10):</strong> Manuel found that Humana&apos;s transportation benefit requires prior authorization — information Teresa had never been told. Her reaction (&ldquo;What the hell? I&apos;ve never heard of that!&rdquo;) showed it landed. Honest, useful, and credibility-building.</li>
            <li><strong>Part B / QMB Value Framing (30:21):</strong> Manuel correctly identified and quantified the Part B premium value ($206/month = $2,472/year) that QMB protects for Teresa. Accurate, differentiating, and most agents overlook it on dual-eligible calls.</li>
            <li><strong>Composure Under Sustained Objection (43:38):</strong> Teresa raised the rollover objection six times in progressively more frustrated language. Manuel never became defensive, never raised his voice, and maintained a professional frame through the full 52 minutes.</li>
            <li><strong>Professional Call Close (51:44):</strong> Manuel didn&apos;t beg, didn&apos;t burn the bridge, and gave Teresa practical advice about updating her address with Humana. The call ended on good terms.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC6 · 5:02, 19:37, 47:37</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>D-SNP Pathway Never Searched</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Teresa confirmed full Medicaid at 5:02. That&apos;s the INT SEP — enrollment in a Dual Special Needs Plan is available any month, repeatable. D-SNPs are specifically built for dual-eligible beneficiaries and typically offer richer benefits than standard MAPD plans. Manuel verified QMB level and searched standard UHC MAPD. The D-SNP conversation never happened. He spent the next 47 minutes defending a $16/month advantage on the wrong product tier.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Teresa, since you have full Medicaid, I want to check something for you first. There&apos;s a type of plan called a Dual Special Needs Plan that&apos;s built specifically for people on both Medicare and Medicaid. Give me one moment — I want to make sure we&apos;re looking at the right type of plan for you.&rdquo; Then run a D-SNP search for ZIP 45840 before presenting any MA plan.</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC1 · 17:54, 43:38, 45:13, 50:09</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Same Reframe, Six Deliveries</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>The rollover objection was raised six times. Manuel answered with the same two arguments each time: &ldquo;you&apos;ll spend it all anyway&rdquo; and &ldquo;QMB covers everything.&rdquo; When a reframe doesn&apos;t convert on the second delivery, repeating it on the fourth and fifth attempt loses credibility and signals you&apos;re out of moves.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>After the second rollover objection: &ldquo;Teresa, you&apos;re right — I hear you. Let me step back from that for a second. The real question is which plan puts more money in your hands at the end of the year. On paper that&apos;s $192 more. But before we go further, let me check something I should have looked at first — with your Medicaid, you may qualify for a Dual Special Needs Plan that changes this whole conversation.&rdquo;</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC2 · 10:47, 44:35</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Client Gold Heard — Not Deployed</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>At 10:47 Teresa said &ldquo;I&apos;ve been with a lot of people and I just kept moving around to find the right one.&rdquo; That&apos;s a frustrated switcher telling you she has unmet needs and is exhausted from shopping. Manuel moved past it and continued the feature comparison. At 44:35 she revealed she&apos;s on disability, groceries are tight, and she runs out before month-end — the humanization hook for the Step 3 math. Manuel acknowledged but didn&apos;t deploy it.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>At 10:47: &ldquo;Teresa, I hear you — you&apos;ve been moving around because nothing has felt like the right fit. With your Medicaid, you may qualify for a Dual Special Needs Plan that most agents never even mention. Let me pull that up before we look at anything else.&rdquo;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Gold Audit */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Client Gold Audit</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #1 · 10:47 · MISSED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;I&apos;ve been with a lot of people and I just kept moving around to find the right one.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>This reveals FRUSTRATION and SEARCHING — Teresa is not loyal to Humana. She&apos;s exhausted from shopping and settling. The invitation here is to offer something fundamentally different, not a $16 improvement. Deploy: &ldquo;Teresa, you&apos;ve been bouncing around because none of these plans have been designed for your specific situation. With your Medicaid, you should be on a plan built for dual-eligible beneficiaries — that&apos;s a completely different tier. Let me check.&rdquo;</p>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #2 · 44:35 · MISSED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;When you got bills to pay, it&apos;s hard to keep... And you got to try to buy groceries and put, just make sure you got groceries for the, it&apos;ll last for the whole month.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>This reveals FINANCIAL SCARCITY — Teresa is on fixed disability income, groceries are a real constraint, and she&apos;s managing a tight budget. This is the Step 3 humanization hook. Manuel responded with &ldquo;extra money is extra money&rdquo; — acknowledged but didn&apos;t deploy. Deploy: &ldquo;Teresa, you told me you spend the whole hundred every month and still use cash. That means $16 more a month is real money you don&apos;t have today — not a rounding error, not a grocery card feature. It&apos;s one fewer week where the card runs short.&rdquo;</p>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '16px' }}>Manuel — this was a professionally handled call under sustained pressure and your composure was genuine. But the outcome was preventable, and it came down to one decision point.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '16px' }}>At 5:02, Teresa said &ldquo;Yeah, I have Medicaid too.&rdquo; That&apos;s the INT SEP — the signal that tells you to search a Dual Special Needs Plan, not a standard Medicare Advantage plan. D-SNPs are built for people exactly like Teresa: dual-eligible, QMB level, fixed disability income. If a D-SNP exists in Hancock County with a richer grocery allowance or rollover terms — that entire objection cycle never happens. You spent 40 minutes defending $16/month when you may have had a completely different product available. Before you present any plan to a dual-eligible member, run the D-SNP check first. That&apos;s the rule.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The second lesson: when you&apos;ve used the same reframe four times and it hasn&apos;t worked, stop. The rollover argument was correct — but after the second time Teresa said no, you needed a completely different frame, not a repeat. At 47:37 the move was: &ldquo;Teresa, before I give up on this, let me check something I should have checked at the start. With your Medicaid, you may qualify for a specialized plan I haven&apos;t shown you yet.&rdquo; That line buys another five minutes and a real shot. You let that window close without trying it.</p>
        </section>

      </div>
    </PageShell>
  )
}
