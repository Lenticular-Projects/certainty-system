'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function MaryKaulaitCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/andres-duran" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Andres Duran · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Andres Duran × Mary Kaulait</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 20, 2026 · 44:23 · Anadarko, Oklahoma · <strong style={{ color: 'var(--sage-dark)' }}>82 / 100</strong> · Enrolled</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Mary was a Medicaid dual-eligible consumer in Anadarko, Oklahoma. Andres identified her eligibility early, confirmed INT (Medicaid = year-round qualifying event), and enrolled her on the Aetna Medicare Dual Care PPO. The plan was appropriate for her situation and her doctors were verified in network.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The signature move of this call was the MOOP anchor — established at the discovery phase, returned to throughout the call, and used as the closing argument. At 28:14, when Mary said &ldquo;I want to make sure that the bills are going to stop coming,&rdquo; Andres had the answer ready: $0 out-of-pocket MOOP under the new plan. That was the emotional and financial hook that closed the call.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The post-enrollment loyalty anchor at 39:46 — warning Mary against competitor calls — is the move that protects this enrollment from reversal. One compliance issue: DST SEP was cited at 24:03 instead of INT. Enrollment stands; SEP documentation needs correction.</p>
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
              { cat: 'Lead Quality',        score: 17, max: 20 },
              { cat: 'Signal Reading',      score: 17, max: 20 },
              { cat: 'Math Breakdown',      score: 16, max: 20 },
              { cat: 'Objection Handling',  score: 13, max: 15 },
              { cat: 'Call Outcome Quality', score: 9, max: 10 },
              { cat: 'Compliance',          score: 10, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>82/100 · Highest score in this batch. Compliance deducted 5 points for DST vs INT SEP documentation. The enrollment is correct — the SEP code on file needs correction.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What You Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>MOOP anchor sustained through the entire call:</strong> You established the outstanding medical bills as the pain point in discovery, returned to the $0 MOOP figure during plan presentation, and closed directly on it. &ldquo;That&apos;s the bill that&apos;s going to stop, Mary.&rdquo; This is what a close looks like — you named the specific problem and the specific solution in the same breath.</li>
            <li><strong>Correct dual-eligibility identification (early in call):</strong> You caught Medicaid status early, confirmed INT qualifying event, and selected a plan designed for dual-eligible consumers. The Aetna Medicare Dual Care PPO was the right call — the network, the premium, and the benefits matched her situation exactly.</li>
            <li><strong>Post-enrollment loyalty anchor (39:46):</strong> &ldquo;Don&apos;t fall for somebody who calls you and tells you they&apos;re going to get you more money. Your health is more important than $30.&rdquo; That line protects the enrollment from competitor calls in the days after. Most agents don&apos;t think past the close. You did.</li>
            <li><strong>Doctor network verified before plan named:</strong> All relevant specialists confirmed in Aetna network before the plan was recommended. No assumption made about network coverage.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · Compliance · 24:03</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>DST SEP Cited Instead of INT</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>At 24:03, DST (Disaster SEP) was cited as the qualifying enrollment pathway. CMS prohibits agents from proactively advertising DST — it must be volunteered by the consumer. The correct SEP for Mary was INT: Medicaid status is a year-round qualifying event that does not depend on disaster status, and the agent should never raise DST proactively. The enrollment stands because Mary legitimately qualifies under INT. The SEP code on file needs to be corrected with your supervisor before your next Medicaid call.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Mary, because you&apos;re on Medicaid, you have a year-round window to look at plans — we don&apos;t have to wait for open enrollment. That&apos;s what makes today work.&rdquo;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Gold Audit */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Client Gold Audit</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #1 · 28:14 · LEVERAGED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;I want to make sure that the bills are going to stop coming.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>You had the answer ready: $0 out-of-pocket MOOP. This was the emotional and financial hook that converted the call. Fully leveraged — exactly the right response at exactly the right moment.</p>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #2 · 39:46 · LEVERAGED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>Post-enrollment loyalty anchor.</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>The warning against competitor calls after enrollment is a move most agents don&apos;t make. &ldquo;Your health is more important than $30&rdquo; — that&apos;s a re-enrollment prevention line. Well deployed.</p>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Andres — this call shows what you can do when you identify the right plan for the right person and build the close around their specific situation. The MOOP anchor, the post-enrollment loyalty line — those are advanced moves. The one thing to fix: when Medicaid is confirmed, use INT SEP explicitly and never raise DST. &ldquo;Because you&apos;re on Medicaid, you have a year-round window&rdquo; — that&apos;s the line. Review the SEP code documentation on this enrollment with your supervisor before your next Medicaid call.</p>
        </section>

      </div>
    </PageShell>
  )
}
