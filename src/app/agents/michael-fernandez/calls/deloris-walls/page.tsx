'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function DelorisWallsCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/michael-fernandez" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Michael Fernandez · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Michael Fernandez × Deloris Walls</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 20, 2026 · 20:50 · Little Rock, AR (ZIP 72204) · <strong style={{ color: 'var(--terracotta)' }}>34 / 100</strong> · Missed Opportunity</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Deloris Walls is a dual-eligible Medicare/Medicaid beneficiary (Level 1 low income) currently enrolled in a Devoted C-SNP who called about a grocery/flex card benefit. Michael correctly spotted that a Medicaid Level 1 consumer sitting in a C-SNP was almost certainly misplaced — she should be in a D-SNP with a richer dual-eligible benefit package. He pulled up UHC Dual Complete options and built a solid comparison: dental parity, 36 zero-copay rides vs. zero on Devoted, $99 food card difference.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Deloris told Michael twice she was going back to United — at 7:01 and 15:14. She confirmed the 36 rides would be &ldquo;a big help.&rdquo; The INT SEP window is open every month. The sale was fully closeable. At 17:02 Michael attempted a close with &ldquo;if you wanted to get back into UnitedHealthcare...&rdquo; — permission-seeking language that handed authority back to the consumer. When she said &ldquo;I&apos;m just going to stick with Devoted until...&rdquo; he immediately pivoted to a callback arrangement. No reframe. No urgency. No close.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The failure here isn&apos;t product knowledge — it&apos;s close execution. Michael had everything he needed. The consumer had already told him the answer. &ldquo;Eventually&rdquo; is not a no. It&apos;s a close trigger.</p>
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
              { cat: 'Lead Quality',         score: 9,  max: 20 },
              { cat: 'Signal Reading',        score: 9,  max: 20 },
              { cat: 'Math Breakdown',        score: 6,  max: 20 },
              { cat: 'Objection Handling',    score: 3,  max: 15 },
              { cat: 'Call Outcome Quality',  score: 4,  max: 10 },
              { cat: 'Compliance',            score: 13, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>34/100 — low-difficulty, fully closeable call scored low due to a clean surrender on a soft objection with an active INT SEP and a pre-decided consumer.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>D-SNP Misplacement Diagnosed (5:44):</strong> Within minutes of pulling up Deloris&apos;s account, Michael identified that her Medicaid Level 1 status should have placed her in a D-SNP rather than a C-SNP. A skilled, high-value diagnostic move that positioned the comparison conversation correctly.</li>
            <li><strong>Transportation Benefit as Pain-Point Connector (14:38):</strong> Michael specifically called out that Devoted has zero transportation while UHC Dual Complete offers 36 zero-copay rides — directly connecting to her situation. Consumer confirmed this &ldquo;is a big help.&rdquo; Right instinct. The missed step was closing on it.</li>
            <li><strong>Correctly Framed May 1st Enrollment Window (17:06):</strong> When offering the switch, Michael correctly stated a May 1st effective date — demonstrating knowledge of the INT SEP window and D-SNP enrollment mechanics.</li>
            <li><strong>Full Pre-Enrollment Compliance Execution (1:00):</strong> TPMO disclaimer, SOA, opt-in question, callback confirmation, decision-maker check, nursing home check, and Medicare card verification — all completed correctly and in sequence through the first 2:36 of the call.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC1 · 17:22, 17:28, 17:44</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Surrender on Soft Objection</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>When Deloris said &ldquo;I&apos;m just going to stick with the Devoted until...&rdquo; — the word &ldquo;until&rdquo; signals she hasn&apos;t decided. Her next question about October enrollment windows proves she&apos;s still calculating. Michael immediately pivoted to callback arrangement — texted his number, explained how to reach him, said &ldquo;when you&apos;re ready, give me a call.&rdquo; No reframe. No deployment of her own prior statements. No close.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Deloris, you&apos;ve told me twice you&apos;re going back to United. You confirmed the 36 rides would be a big help. And groceries are expensive on a fixed income — that $99 difference is $1,188 a year. Everything you need is already on this plan. Let&apos;s make eventually today. What&apos;s your date of birth?&rdquo;</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC2 · 9:18, 15:50</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Client Gold Ignored — Food Insecurity Not Deployed</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>At 9:18 Deloris said &ldquo;I was telling them that I needed the food plan because grocery didn&apos;t get so high.&rdquo; That&apos;s her real financial fear — food insecurity on a fixed income. Michael said &ldquo;mm-hmm&rdquo; and asked about doctor visit frequency. The $99/month difference was later stated as a fact but never connected to this moment. Abstract math doesn&apos;t close sales. Humanized math does.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Deloris, you told me groceries have gotten expensive. That $99 difference isn&apos;t just $99 — it&apos;s $1,188 a year in your grocery budget. That&apos;s real money. And that&apos;s on top of 36 free rides and $3,000 dental. This plan pays for itself.&rdquo;</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC1 · 17:02</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Permission Language in the Close</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;If you wanted to get back into UnitedHealthcare, I can put you back&rdquo; is not a close — it&apos;s an invitation to say no. Permission language (&ldquo;if you wanted to,&rdquo; &ldquo;it&apos;s your decision&rdquo;) hands authority back to the consumer right before the moment she needs to feel confident in the decision. Every close must be assumptive and anchored to what she already said she wanted.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Deloris, based on everything you&apos;ve told me, here&apos;s what I&apos;m going to do — I&apos;m going to get you enrolled in UHC Dual Complete starting May 1st. Can you confirm your date of birth so we can get this locked in?&rdquo;</p>
              </div>
            </div>
          </div>
        </section>

        {/* The One Move */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>The Moment That Decided This Call</h2>
          <div style={{ padding: '18px 20px', background: 'rgba(19,17,16,0.03)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 8px' }}>15:14 — Deloris confirms the transport benefit and re-states intent to go back to United</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 12px' }}>&ldquo;Yes, it is. That&apos;s why I&apos;m going... I&apos;m going back with them eventually.&rdquo;</p>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>This is the second time Deloris stated she was going back to United — and now she&apos;s just confirmed the transport benefit is a real need. That&apos;s a double signal: emotional intent AND rational benefit validation. The correct move is to close on this moment immediately. Instead, Michael moved to the $99 food card difference — building more case when the case was already built.</p>
          </div>
          <div style={{ marginTop: '12px', padding: '14px 18px', background: 'rgba(125, 157, 123, 0.06)', borderRadius: '8px', borderLeft: '3px solid var(--sage-dark)' }}>
            <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--sage-dark)', margin: '0 0 6px' }}>The One Move</p>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.65, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Deloris, you just said that rides would be a big help and you&apos;re going back eventually. There&apos;s no reason to wait. Let me get you started today so those 36 rides are yours starting May 1st. Can I get your date of birth?&rdquo;</p>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Michael, this call has your fingerprints all over a win that didn&apos;t happen — and that&apos;s the most frustrating kind. You diagnosed the D-SNP misplacement in under 6 minutes. You ran a clean compliance section. You presented transportation and dental in a way that landed — Deloris literally said &ldquo;Yes, it is a big help.&rdquo; And then you asked &ldquo;if you wanted to&rdquo; and handed her the exit door. She walked through it.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '12px' }}>Here is what you need to hear: Deloris told you twice she was going back to United. Your job at both of those moments was to say &ldquo;Then let&apos;s make eventually today.&rdquo; Instead you treated her future intent as a reason to be patient rather than a reason to close. For your next call: the moment a consumer says &ldquo;eventually&rdquo; or &ldquo;probably going to,&rdquo; that word is your close trigger. Collapse the timeline. Let her choose the start date, not whether to switch.</p>
        </section>

      </div>
    </PageShell>
  )
}
