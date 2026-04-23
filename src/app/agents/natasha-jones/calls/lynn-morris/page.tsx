'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function LynnMorrisCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/natasha-jones" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Natasha Jones · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Natasha Jones × Lynn Morris</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 01:01:54 · Mooringsport, Louisiana · <strong style={{ color: 'var(--sage-dark)' }}>78 / 100</strong> · ENROLLED · HIGH difficulty</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Natasha enrolled Lynn Morris into People&apos;s Health Secure Complete HMO-POS (UnitedHealthcare) at $0 premium, effective May 1, 2026. Confirmation number 6TN435VF6G issued. Lynn is medically complex — COPD, fibromyalgia, ADHD, severe chronic pain from a broken neck history, and a cracked rib from a recent fall in her deteriorating city housing. She&apos;s on QMB extended Medicaid, uses her OTC benefit to buy food, and came into this call with serious trust damage from a prior agent who misrepresented her benefits and filed a complaint against. Two of her five medications were out of formulary.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This was a callback after a prior disconnect. Natasha reopened warmly: &ldquo;We got disconnected, Ms. Morris, and you were right.&rdquo; Lynn had been waiting and was immediately grateful. Natasha navigated two-doctor verification, a full health questionnaire, and five medications — including two formulary exceptions — without losing warmth or control. The MCD SEP (Medicaid status change) was correctly invoked at 37:41.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The pivotal moment: at 30:47 Natasha confirmed medication copays were $0, and Lynn said &ldquo;I don&apos;t have to spend my food money on it.&rdquo; That was her enrollment in her own words. Lynn ended the call saying &ldquo;You definitely are the girl to call.&rdquo; The compliance gap was a missing TPMO disclaimer on the reconnect call — every callback requires it, even mid-enrollment.</p>
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
              { cat: 'Lead Quality', score: 15, max: 20 },
              { cat: 'Signal Reading', score: 15, max: 20 },
              { cat: 'Math Breakdown', score: 11, max: 20 },
              { cat: 'Objection Handling', score: 12, max: 15 },
              { cat: 'Call Outcome Quality', score: 9, max: 10 },
              { cat: 'Compliance', score: 16, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>78/100 on a HIGH difficulty call. Trust rebuilding, complex medical profile, two formulary exceptions, and a patient health questionnaire. Math annualization is the primary gap.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Trust Rebuilt Through Verification, Not Promises (5:49):</strong> When Lynn said she filed a complaint against a prior agent who &ldquo;falsely represented themselves,&rdquo; Natasha didn&apos;t over-explain or get defensive. She went straight to work — checking doctors, medications, and benefits in real time. Behavioral trustworthiness landed harder than any script would have.</li>
            <li><strong>Warm Redirection of Extended Tangents (14:00):</strong> Lynn went on long stories about her housing mold, the Red River, food prices, and her building management. Natasha redirected each one with brief empathetic acknowledgments and clean pivots back to enrollment without ever breaking the warmth. In an hour-long call, that discipline is what keeps things moving.</li>
            <li><strong>Correct Formulary Exception Guidance (25:23):</strong> Two of Lynn&apos;s five medications were out of formulary. Natasha disclosed it clearly, explained the prior authorization process without creating anxiety, and Lynn immediately accepted it: &ldquo;Every year I have to have it done, I know.&rdquo; Correct handling of a potentially call-ending moment.</li>
            <li><strong>Thorough Benefits Walk (27:06):</strong> Natasha covered every benefit category: telehealth, fitness, dental ($2,000), labs at $0, specialist at $0, emergency, hearing aids, transportation (36 rides), vision ($250), podiatry. Lynn got a full picture of her coverage. This thoroughness was visible to her.</li>
            <li><strong>Post-Enrollment Accessibility Promise (55:00):</strong> Before ending, Natasha gave Lynn her direct number (561-931-4013) and said &ldquo;never feel that your questions is too small, too dumb.&rdquo; For a consumer who had been misled before, that promise was meaningful — and it&apos;s what made Lynn say &ldquo;you definitely are the girl to call.&rdquo;</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC4 · 0:00</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>TPMO Disclaimer Absent on Reconnect</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>This call opened mid-conversation with no &ldquo;this call is recorded&rdquo; and no TPMO language at any point in the reconnect. CMS audits look for the disclaimer on every call, including callbacks. Without it, the enrollment documentation is technically incomplete from the opening.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Ms. Morris, I want to let you know this call may be recorded for quality purposes. I&apos;m Natasha Jones, a licensed insurance agent — not affiliated with Medicare or any government agency. My agency represents multiple carriers. Now, picking up where we left off...&rdquo; — 20 seconds, mandatory on every reconnect.</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC2 · 14:23</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Trust Wound Acknowledged But Not Deployed</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>When Lynn said &ldquo;I&apos;ve been lied to so many times, I don&apos;t know what to believe anymore,&rdquo; Natasha responded with warmth but didn&apos;t explicitly position herself as different. She was doing it behaviorally — verifying everything in real time — but she never said it out loud. Saying it out loud makes it a contract. It turns her wound into your enrollment engine.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Lynn, I hear you — and I want you to hold me to this. I&apos;m going to pull up every benefit in the system right now so you can see it yourself. You don&apos;t have to take my word for anything. Let&apos;s verify everything together.&rdquo;</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC3 · 8:21, 31:36</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math Not Annualized — Food Insecurity Anchor Unused</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Natasha stated the OTC increase from $157 to $200 and confirmed $0 medication copays, but never annualized either number. The $43/month OTC increase is $516/year. Lynn told you directly she runs out of food money before the month ends and uses her OTC benefit for groceries. &ldquo;$516 more per year for food&rdquo; is a real statement to a person in that situation. She left without ever hearing that number.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Lynn, you&apos;re going from $157 to $200 — that&apos;s $43 more every month, which is $516 more per year just for food and household essentials. On a fixed income, that is real money.&rdquo; Then pause and let her react. When she said &ldquo;I don&apos;t have to spend my food money on it&rdquo; at 31:42 — that was the close. Say: &ldquo;That&apos;s exactly right. Are you ready to get this started today?&rdquo;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '16px' }}>Natasha — this was a genuinely excellent call. Lynn Morris came in carrying a serious trust wound. A prior agent misrepresented her benefits, she filed a formal complaint, and she told you directly she&apos;d been lied to so many times she didn&apos;t know what to believe anymore. You enrolled her anyway. You did it through warmth, patience, and real-time verification — checking her doctors, her medications, her formulary. Lynn ended the call saying &ldquo;You definitely are the girl to call.&rdquo; That&apos;s the highest compliment in this business, and you earned it on a high-difficulty call with two formulary exceptions and an hour-long health questionnaire.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '16px' }}>Here&apos;s the growth point: at 14:23, Lynn handed you the most powerful enrollment engine on the call — her pain from being betrayed. You were already doing the right thing behaviorally, verifying everything in real time. But you didn&apos;t say it out loud. Saying it out loud is what makes it a contract: &ldquo;Lynn, I want you to hold me to this. I&apos;m going to pull up every benefit in the system so you can see it yourself.&rdquo; That turns her wound into your close on every call like this one. You didn&apos;t need it here because she trusted you anyway — but on harder calls, saying it is the difference.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>The math gap is the same as every call this period: annualize every number. Lynn told you directly she runs out of food money before the end of the month. When you said &ldquo;$200 OTC&rdquo; at 8:21, the number that needed to follow was &ldquo;$516 more per year for groceries.&rdquo; And when she said &ldquo;I don&apos;t have to spend my food money on it&rdquo; at 31:42 — that was her enrollment. Lock it immediately: &ldquo;That&apos;s exactly right — are you ready to get this going today?&rdquo; The enrollment happened anyway. On harder calls, that habit will save sales you would otherwise lose.</p>
        </section>

      </div>
    </PageShell>
  )
}
