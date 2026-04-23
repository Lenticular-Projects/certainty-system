'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function FrankShepherdCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/rudy-schprejer" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Rudy Schprejer · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Rudy Schprejer × Frank Shepherd</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 48:36 · Palm Beach, FL · <strong style={{ color: 'var(--sage-dark)' }}>78 / 100</strong> · ENROLLED</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Rudy successfully enrolled Frank Shepherd into the Devoted Health Gift Back 015 HMO plan, effective May 1, 2026, with a $184.70 monthly give-back. The call began mid-problem — Frank&apos;s preferred dental provider, Juan Marcano, did not accept the Devoted plan. Rather than losing the sale, Rudy put Frank on hold and called the provider&apos;s office directly to verify. After a five-minute hold, he returned with honest bad news, immediately pivoted to what Frank could have — Dr. David Wiseman, the $1,250 dental allowance, and the give-back — and kept the sale moving.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The pivotal moment came at 10:22 when Frank said &ldquo;I got people calling me because I sang for a living&rdquo; and tried to disengage. Rudy didn&apos;t accept it. He asked directly: &ldquo;Do you have enough time for me to go ahead and do the application? Because next week is literally the first of the month.&rdquo; Frank said yes, and the enrollment proceeded. Confirmation code T2W9SLB253 was issued at approximately 45:00.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The call scored 78/100 — strong outcome with warm rapport throughout. The gap in the score is a missing opening compliance disclosure (call began as a reconnection with no TPMO or recording notice) and incomplete Step 3 math humanization. Frank&apos;s dental costs, PO box bills, and Uber rides were never connected to the $2,180 annual give-back number Rudy stated.</p>
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
              { cat: 'Lead Quality',        score: 15, max: 20 },
              { cat: 'Signal Reading',       score: 15, max: 20 },
              { cat: 'Math Breakdown',       score: 13, max: 20 },
              { cat: 'Objection Handling',   score: 13, max: 15 },
              { cat: 'Call Outcome Quality', score: 9,  max: 10 },
              { cat: 'Compliance',           score: 13, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>78/100 — enrolled. Clean outcome with strong close mechanics and authentic rapport. Compliance gap from missing opening disclosure and incomplete math humanization hold the score below 80.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Transparent Provider Pivot (8:25):</strong> When Rudy returned from hold with bad news about Juan Marcano, he delivered it honestly and immediately pivoted to what Devoted offered — dental benefits package, Dr. David Wiseman, $184.70 give-back. No attempt to hide the limitation. That transparency is what kept Frank on the call.</li>
            <li><strong>Assertive Close When Consumer Threatened to Hang Up (10:35):</strong> Frank indicated he needed to get off the phone. Rudy did not fold: &ldquo;Do you have enough time for me to go ahead and do the application?&rdquo; That is the right move — not aggressive, not passive. Frank said yes. That is the line that closed this enrollment.</li>
            <li><strong>Warm Rapport Throughout (16:45):</strong> Rudy engaged genuinely with Frank&apos;s Vick&apos;s Cream story, his singing career, and his housing plans. This is not small talk — it is the kind of authentic connection that produces referrals and retained enrollments.</li>
            <li><strong>Complete Compliance Disclosure (30:08):</strong> Full CMS disclosure read — plan name, premium, disenrollment warning, coverage period, Privacy Act, enrollment rights. Electronic confirmation code T2W9SLB253 was issued and spelled out letter by letter.</li>
            <li><strong>Referral Ask at Close (48:14):</strong> &ldquo;If you know anyone, Mr. Shepherd, that I can help just like I helped you, give them my number.&rdquo; Natural, warm, professional. This is pipeline behavior.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC3 · 15:07, 15:23</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math Humanization Missing — Step 3 Not Executed</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Rudy stated $184.70/month and &ldquo;approximately $2,180 a year&rdquo; — Steps 1 and 2 completed. But Frank&apos;s life is not in numbers. He&apos;s saving $1,000 for his PO box (22:45). He takes Uber to every appointment (1:15). He needs dental work and has no nearby provider. The $2,180 annual give-back should have been his PO box, his Uber fund, and his dental budget — in one sentence.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Frank, that $2,180 a year — that&apos;s your PO box paid and money left over. That&apos;s your Uber rides to the dentist covered. That&apos;s $184 every single month deposited into your Social Security check. That&apos;s the plan paying you to be on it.&rdquo;</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC4 · 0:00</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Opening Compliance Missing — Reconnection Requires Restart</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>The call began as a reconnection with &ldquo;Sorry, you got disconnected.&rdquo; No TPMO disclaimer or recording notice was delivered. Whether it is a fresh call or a reconnection, every recorded call requires opening compliance elements. If this call is audited, the opening cannot be confirmed clean.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Frank, sorry about that — before we continue, just a quick note: I represent multiple carriers and this call may be recorded for quality and compliance. Now — let&apos;s get you that $184.&rdquo;</p>
              </div>
            </div>

          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Rudy — this was a strong performance under pressure. You had four potential failure points on this call: bad-news provider reveal, a five-minute hold, Frank threatening to hang up, and a mailing address change mid-enrollment. You handled all four without losing your frame or the sale. The close at 10:35 is exactly what closers do. Most agents would have said &ldquo;I understand, I&apos;ll call you back.&rdquo; You asked for the application directly. That&apos;s the difference.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '12px' }}>The next level is Step 3 of the math. You gave Frank the numbers — $184.70 a month, $2,180 a year. But Frank doesn&apos;t live in numbers. At 22:45 he told you he was saving $1,000 just to pay his PO box. That was your line: &ldquo;Frank, that $184 every month — that&apos;s your PO box paid and money left over. That&apos;s what this plan does for you.&rdquo; Connect the math to his actual life. One sentence. And on any reconnection — even a 10-second one — restart with TPMO and recording notice. Thirty seconds and you&apos;re protected.</p>
        </section>

      </div>
    </PageShell>
  )
}
