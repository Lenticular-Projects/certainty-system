'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function FreddieTaylorJrCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/tavares-smith" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Tavares Smith · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Tavares Smith × Freddie Taylor Jr.</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 49:24 · Lewisville, TX (Dallas County) · <strong style={{ color: 'var(--sage-dark)' }}>76 / 100</strong> · ENROLLED</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Freddie W. Taylor Jr. is a 69-year-old Lewisville, TX resident with Medicare since 2012, full Medicaid, and Extra Help/LIS. He called in wanting a HealthSpring plan — motivated primarily by a food/grocery card. Tavares correctly identified that HealthSpring was unavailable outside AEP, pivoted to the UHC Complete Care TX3P HMO POS C-SNP based on Freddie&apos;s chronic condition profile (heart failure, COPD, asthma, chronic pain), and enrolled Freddie with a May 1, 2026 effective date and a full voice signature.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The C-SNP identification was the decisive move of the call. Tavares heard the chronic conditions at 5:54, pivoted within three minutes, and got Freddie&apos;s agreement within 30 seconds of the pivot. All seven Phase VI compliance elements were present. Three doctors verified in-network. 11/11 medications confirmed covered — including correctly catching the Oxycodone that wasn&apos;t pulled from the system automatically.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The primary coaching opportunity is in what was left unspoken. The call ran nearly 50 minutes against a realistic 30-minute target — driven by excessive hold time. The 11/11 medication confirmation was delivered as a data point rather than a relief moment. The specialist copay savings ($30/visit, $360/year) were stated but never annualized or connected to Freddie&apos;s actual pharmacy. And when Freddie said he was hurting at 32:11, the response was a time estimate rather than an acknowledgment. All three of these are the difference between a consumer who enrolled and a consumer who is loyal.</p>
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
              { cat: 'Lead Quality',        score: 14, max: 20 },
              { cat: 'Signal Reading',       score: 14, max: 20 },
              { cat: 'Math Breakdown',       score: 10, max: 20 },
              { cat: 'Objection Handling',   score: 12, max: 15 },
              { cat: 'Call Outcome Quality', score: 10, max: 10 },
              { cat: 'Compliance',           score: 15, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>76/100 — clean enrollment on the correct plan type with full Phase VI compliance. Points lost on hold time, unannotated math, and three undeployed Client Gold moments. Perfect compliance execution.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Correct C-SNP Pivot — Strongest Move of the Call (9:13):</strong> When Tavares recognized HealthSpring was unavailable outside AEP, he immediately pivoted to the UHC C-SNP based on the chronic conditions Freddie had disclosed moments earlier. He connected the eligibility pathway, presented the specialist copay improvement, and got consumer buy-in within 30 seconds. This is exactly how the C-SNP door is supposed to be opened.</li>
            <li><strong>Caught Himself on the DST Reference (5:28):</strong> Tavares started to reference a winter weather/disaster SEP and correctly stopped himself mid-sentence: &ldquo;What emergency? Well, hold on, before I even read that. I can&apos;t even say that.&rdquo; This DST compliance awareness is a specific audit risk many agents miss. Clean execution.</li>
            <li><strong>Medicaid/Give-Back Trade-Off Explained Correctly (10:07):</strong> Tavares correctly explained that give-back plans have zero value for Medicaid beneficiaries because Medicaid covers Part B already — and that getting the give-back would require losing Medicaid. This is a compliance-critical nuance that prevents bad enrollments. He also handled the same question again at 39:51 when Freddie raised the $130 question mid-disclosure.</li>
            <li><strong>Medication Thoroughness — Caught the Missing Drug (22:53):</strong> When Freddie flagged that the Oxycodone wasn&apos;t named, Tavares asked for the dosage, added it correctly (Oxycodone 10-325mg), and confirmed 11/11 medications covered. His response — &ldquo;that&apos;s why I repeat them back to you&rdquo; — was gracious and trust-building. Formulary accuracy protects enrollments from reversing.</li>
            <li><strong>Full Phase VI Compliance — All 7 Elements Present (38:10 through 47:35):</strong> Recorded line notice, plan name, $0 premium, disenrollment warning, May 1 effective date, understanding confirmation, and full voice signature (name spelled out, date confirmed). The C-SNP clinical verification questions (heart failure, fluid/swelling, weight monitoring) were also correctly included. No Phase VI gaps.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC2 · 32:11, 17:30, 27:02</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Three Client Gold Moments — Acknowledged, Not Deployed</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>At 17:30: &ldquo;I got a table full of medicines.&rdquo; This reveals medical overwhelm — the fear that a plan change means losing medications he depends on to function. Tavares handled it mechanically (pulled them from the system) but missed the emotional weight. At 27:02: 11 out of 11 confirmed. This should have been a relief moment — &ldquo;every single one, covered&rdquo; — not a transition to enrollment mechanics. At 32:11: &ldquo;I&apos;m hurting right now.&rdquo; Freddie is in physical pain trying to get through a phone call. A time estimate (&ldquo;five to six more minutes&rdquo;) is functionally correct but emotionally tone-deaf. The enrollment wasn&apos;t at risk — but the loyalty moment was lost.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>At 27:02: &ldquo;Freddie — all 11 of your medications. Every single one. Covered. That table full of medicines — same coverage, same Walgreens on 288. Nothing changes except your specialist costs go down $30 a visit. That&apos;s what we did today.&rdquo; At 32:11: &ldquo;Freddie, I hear you — that&apos;s exactly why we&apos;re doing this right now. This plan is built for people managing what you&apos;re managing. Five more minutes and it&apos;s locked in — put the phone down and rest.&rdquo;</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC3 · 9:38, 27:22</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math Not Annualized or Humanized</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>The specialist copay comparison ($65 → $35) was stated at 9:38 but never converted to an annual figure. For a monthly specialist patient, that&apos;s $30/month, $360/year. The OTC benefit ($50/month, $600/year) was referenced inconsistently as both &ldquo;flex card&rdquo; and &ldquo;OTC&rdquo; — and the connection to Walgreens on Loop 288 (Freddie&apos;s confirmed pharmacy) was confirmed at 25:48 but never made into the explicit close: &ldquo;That&apos;s your food card — right where you already pick up your prescriptions.&rdquo; Combined, approximately $960/year in concrete value went unspoken. Freddie called about a food card. The food card answer was in the call and never delivered directly.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Freddie, you told me you see specialists every month. That $35 copay instead of $65 — that&apos;s $30 a month back in your pocket, $360 a year. And the OTC flex card: you can use that right at Walgreens on 288 where you already pick up your prescriptions. Groceries, over-the-counter supplies, health items — that&apos;s your food card, and it&apos;s included. You called for the right thing.&rdquo;</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC1 · 4:06, 7:48, 12:00, 16:04, 34:57</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Call Ran 50 Minutes — 30-Minute Target</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Five separate hold periods accumulated approximately 12–15 minutes of dead air. The longest ran from ~12:00 to 15:57 — nearly four minutes with Harold waiting on intermittent &ldquo;Okay... okay...&rdquo; filler. With a consumer in physical pain who wanted to get off the phone at 32:11, every unnecessary minute is an enrollment risk. The slow system navigation also delayed the specialist copay comparison until after Freddie had already agreed — missing the opportunity to use math as a closing tool rather than a footnote.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>Pre-load all system tools before you dial: Medicare lookup, doctor network search, formulary check. Every hold over 60 seconds needs a verbal bridge: &ldquo;Freddie, I&apos;m pulling up all the plan options in your area — give me about 60 seconds and I&apos;ll come back with the best options for you.&rdquo; Freddie should have been enrolled in 30 minutes. He waited through pain. The next consumer might not.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '14px' }}>Tavares — this was a clean enrollment and you should feel good about it. You spotted the C-SNP opportunity fast — heard the chronic conditions at 5:54 and pivoted to the UHC Complete Care plan within three minutes. That pivot is what made this enrollment happen, and you executed it without hesitation. You also handled the give-back/Medicaid nuance correctly, caught the missing medication when Freddie flagged it, and got through all seven Phase VI elements with no gaps. The wheelchair question at the end — handled it perfectly. This is a well-run call.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '14px' }}>Here&apos;s what to take into your next call: you left the most powerful closing tools untouched. At 32:11, Freddie said &ldquo;I&apos;m hurting right now.&rdquo; That&apos;s your close — not a time estimate. The move is: &ldquo;Freddie, I hear you. That&apos;s exactly why we&apos;re doing this right now. This plan is built for people managing what you&apos;re managing. We&apos;re almost done — five more minutes and it&apos;s locked in, so you can put the phone down and rest.&rdquo; That turns a consumer enduring a call into a consumer who feels the enrollment is an act of care.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>At 27:02 when you confirmed 11/11 medications — pause. Say it like it matters: &ldquo;Freddie. All 11 of your medications. Every single one. Covered.&rdquo; That&apos;s not a data point. That&apos;s relief. On the math: he called specifically about a food card. The Walgreens confirmation at 25:48 was the moment to close that loop — &ldquo;Freddie, that&apos;s your food card, right at Walgreens where you already pick up your prescriptions.&rdquo; You had everything you needed to make this call feel like exactly what he was looking for. You just needed to say it out loud.</p>
        </section>

      </div>
    </PageShell>
  )
}
