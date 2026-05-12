'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function RonnieRobinsonCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/karimah-ali" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Karimah Ali · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Karimah Ali × Ronnie Robinson</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 23, 2026 · 1:17:21 · Lakeland, FL · <strong style={{ color: 'var(--sage-dark)' }}>84 / 100</strong> · Enrolled (D-SNP · INT)</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Ronnie Lorenzo Robinson — DOB September 19, 1953, Lakeland FL, U.S. Army veteran, dual-eligible — was enrolled into the Humana USAA Honor Giveback PPO at a $0 monthly premium, effective May 1, 2026. He had been confused by the dual Medicare/VA coverage interaction — a previous agent had &ldquo;got it all screwed up&rdquo; — and had arrived on this call distrustful and cautious. The enrollment anchor was simplicity: &ldquo;Well, let&apos;s clear up the confusion with this for you so you don&apos;t have this worrying on your head, okay?&rdquo; (30:59). That sentence is what enrolled him.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The key benefits: $185/month Part B giveback, $4,000 annual dental allowance, $30/month OTC card. Ronnie&apos;s response at 75:12 — &ldquo;You just took some pressure off me&rdquo; — confirmed that the confusion resolution was the primary value delivered, not the math. The compliance execution was perfect: voice signature at 65:24, confirmation number at 67:12, full TPMO and disclosure sequence. The one gap in an otherwise excellent call: the annualized value of the Part B giveback ($2,220/year) and total annual package ($6,580) were never assembled into a number he could repeat to his family.</p>
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
              { cat: 'Lead Quality', score: 19, max: 20 },
              { cat: 'Signal Reading', score: 18, max: 20 },
              { cat: 'Math Breakdown', score: 9, max: 20 },
              { cat: 'Objection Handling', score: 15, max: 15 },
              { cat: 'Call Outcome Quality', score: 8, max: 10 },
              { cat: 'Compliance', score: 15, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>84/100 — near-perfect enrollment of a distrustful veteran with prior agent damage. Perfect objection handling and compliance; math story left incomplete. Strong signal read throughout.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Confusion-resolution as the enrollment anchor (30:59):</strong> &ldquo;Well, let&apos;s clear up the confusion with this for you so you don&apos;t have this worrying on your head, okay?&rdquo; Ronnie had been burned by a prior agent and arrived on this call defensive. You didn&apos;t lead with benefits or math — you led with the thing he actually needed: clarity. That sentence is what kept him on the line for 77 minutes and earned the enrollment. His own words confirm it: &ldquo;You just took some pressure off me&rdquo; (75:12).</li>
            <li><strong>VA/Medicare dual coverage clarified correctly:</strong> The Medicare Advantage + VA interaction is one of the most consistently confusing coverage situations for veterans. You explained it cleanly — Medicare Advantage covers civilian care, VA covers VA care, they don&apos;t interfere with each other — and you did it without condescension. Ronnie felt like he understood his coverage for the first time.</li>
            <li><strong>Every objection handled and closed (15/15 objection score):</strong> Ronnie came in with multiple objections built on prior agent confusion. You addressed each one directly, stayed patient, and never let the trust erode. 15/15 on objection handling is the best score in the reviewed week.</li>
            <li><strong>Part B giveback presented with impact (25:47):</strong> $185/month going back to his pocket every month. You named the benefit, confirmed the amount, and connected it to his existing premium deduction. The framing was clear.</li>
            <li><strong>Perfect compliance (15/15):</strong> TPMO complete, voice signature at 65:24 (&ldquo;My name, Ronnie Lorenzo Robinson. Date of birth, September the 19th, 1953... Oh, agree.&rdquo;), confirmation number provided at 67:12, agent contact info and plan member services number both delivered. Clean close on a complex call.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC3 · 25:47</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Annual Value Never Assembled — $6,580 Package Left Unspoken</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>The $185/month Part B giveback was named but never annualized. The $30/month OTC was mentioned but not added. The $4,000 dental allowance was stated but not connected to the total. The annual package — ($185 + $30) × 12 = $2,580, plus $4,000 dental = $6,580 in total annual value — was never assembled into a single number. Ronnie was already enrolled; the annualized math would have created a loyalty anchor he&apos;d repeat to his wife, his VA buddies, his son. Numbers that people can say out loud are numbers that generate referrals.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Ronnie, let me put this all together for you. The Part B giveback is $185 a month — that&apos;s $2,220 a year going back into your pocket just from that. Your OTC card adds another $360 a year. And the dental is $4,000 a year. We&apos;re talking about over $6,500 in annual value in this plan. That&apos;s what this plan is doing for you.&rdquo;</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Moment That Decided This Call */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>The Moment That Decided This Call</h2>
          <div style={{ padding: '20px 24px', background: 'rgba(19,17,16,0.03)', borderRadius: '10px', borderLeft: '3px solid var(--ink-60)' }}>
            <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 10px' }}>30:59 — &ldquo;Well, let&apos;s clear up the confusion with this for you so you don&apos;t have this worrying on your head, okay?&rdquo;</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This is the line that enrolled Ronnie Robinson. Not the Part B giveback. Not the dental. Not the OTC card. He had been burned before. He came in guarded. The moment you said &ldquo;so you don&apos;t have this worrying on your head&rdquo; — you named what he actually wanted from this call. He didn&apos;t want benefits. He wanted to stop being confused about his own coverage. You gave him that before you gave him anything else. That&apos;s the close. The rest of the call was execution.</p>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Karimah, this is the best call of your week and one of the best calls in the reviewed batch. You took a consumer who had been burned by a previous agent, who was confused about his own coverage, who arrived distrustful — and you enrolled him cleanly. The compliance was perfect. The objection handling was perfect. The VA/Medicare clarification was exactly what he needed. &ldquo;You just took some pressure off me&rdquo; — that&apos;s the standard you should hold every call to.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>The one thing to add: after you deliver the benefits, assemble the annual total. Ronnie was already sold, but if you&apos;d said &ldquo;Ronnie, let me put this all together — that&apos;s over $6,500 in annual value between the Part B giveback, the OTC card, and the dental,&rdquo; you would have given him a number to remember and tell his VA buddies. Veterans talk to other veterans. Numbers that people can say out loud are numbers that generate referrals. Build the annual total into your close — it takes 15 seconds and it compounds.</p>
        </section>

      </div>
    </PageShell>
  )
}
