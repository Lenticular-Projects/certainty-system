'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function JesseBurdetteCallPage() {
  return (
    <PageShell signal="amber">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/robert-pegler" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Robert Pegler · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Robert Pegler × Jesse Burdette</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 20, 2026 · 12:08 · Knoxville, TN · <strong style={{ color: 'var(--mustard-dark)' }}>48 / 100</strong> · Missed Opportunity</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Robert identified a strong chronic C-SNP opportunity with Jesse Burdette — a Knoxville consumer with ASIM diagnosis and no OTC benefit — and presented a UnitedHealthcare plan offering $117/month in OTC card benefits. The plan presentation was solid and the math was partially completed.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>At 8:26, Jesse said "I'm not going to change. I like my Humana." Robert's response was immediate and complete surrender — he offered to transfer Jesse to a Humana agent rather than attempting a single reframe. No counter-argument was made. The $1,400/year OTC opportunity was abandoned in under 15 seconds. Robert had the sale in his hands and gave it back.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The call ended with a callback promise to Manuel after a failed internal transfer attempt. Jesse explicitly flagged he might not answer unrecognized numbers. This is the worst possible exit: the lead is warm, the opportunity is real, and the handoff may never connect.</p>
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
              { cat: 'Signal Reading', score: 10, max: 20 },
              { cat: 'Math Breakdown', score: 9, max: 20 },
              { cat: 'Objection Handling', score: 4, max: 15 },
              { cat: 'Call Outcome Quality', score: 4, max: 10 },
              { cat: 'Compliance', score: 13, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>48/100 reflects competent technical execution through discovery and presentation that collapsed at the single objection point — a pattern-defining surrender.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Clean Compliance Execution (0:40):</strong> Robert delivered the full TPMO disclaimer with carrier count, Medicare.gov reference, SHIP mention, and scope of discussion — all within the first 90 seconds.</li>
            <li><strong>Sharp CSN Signal Read (3:53):</strong> When Jesse mentioned ASIM, Robert immediately connected it to chronic condition special needs plans and pivoted appropriately. This is exactly the kind of clinical awareness that drives enrollments.</li>
            <li><strong>Math Step 2 Executed (7:09):</strong> Robert annualized the OTC card correctly — "$117 monthly, over the course of a full year, we're talking about over $1,400 in assistance." He presented both premium and zero-premium options, giving Jesse a real comparison.</li>
            <li><strong>Efficient Data Collection (2:05):</strong> Robert collected name, DOB, SSN, and eligibility lookup permission smoothly and professionally without hesitation.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC1 · 8:26, 8:31</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Carrier Loyalty Surrendered Without Reframe Attempt</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>A confirmed CSN-qualified lead with active interest in the OTC card was handed off at the first sign of resistance. The $117/month, $1,400/year opportunity was abandoned in under 15 seconds. Robert had the diagnosis, the plan, the math, and the consumer's attention — and surrendered all of it immediately.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>"Jesse, I hear you — and I'll absolutely get you over to our Humana team if that's what you decide. But before I do, can I show you one number? You're currently getting zero dollars in OTC on your Humana plan. This plan gives you $117 a month — $1,404 a year. Can we look at the side-by-side for two minutes before you decide?"</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC3 · 7:16</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math Step 3 Missing — No Humanization</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Robert presented the dollar amount but never connected it to Jesse's life. Jesse knows he'd get $1,400/year — but he doesn't know what that means for him. Without humanization, the math stays abstract and the carrier loyalty anchor holds.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>"Jesse, with your CPAP and the medications you're managing, that $117 OTC card covers the health supplies you're already buying — masks, filters, over-the-counter supplies. People managing conditions like yours get the most value out of that benefit."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Robert, the first eight minutes of this call were excellent. You ran clean compliance, sharp clinical discovery, and a solid plan presentation. You found Jesse's CSN qualification, built the case for the C-SNP, and got the math on the table. That's real skill — and it's why this one hurts. At 8:26, Jesse said "I like my Humana" and you folded in under 10 seconds. No reframe. No counter. That's not respect for the consumer — that's fear of the objection. It cost you a confirmed CSN lead with $1,400 a year on the table. Write the carrier-loyalty reframe on a sticky note and put it on your monitor: "Before I transfer you, here's what you'd be leaving on the table." Practice it until it comes out automatically. You already know how to find the opportunity — now learn how to fight for it.</p>
        </section>

      </div>
    </PageShell>
  )
}
