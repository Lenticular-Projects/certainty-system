'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function FreyaMcMillanCallPage() {
  return (
    <PageShell signal="amber">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/robert-pegler" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Robert Pegler · Weekly Brief</Link>
        <div style={{ marginBottom: '32px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Robert Pegler × Freya McMillan</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 07:48 · <strong style={{ color: 'var(--mustard-dark)' }}>60 / 100</strong> · Correct No-Sale · <em>CSN missed</em></p>
        </div>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: '0 0 14px' }}>Freya called about OTC/food card benefits. You determined she&apos;s already on a Humana Gold Plus D-SNP with $100/month OTC — a competitive dual plan. Outside of OEP, a plan change had gone into effect the prior month. On the surface, a correct no-sale.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>At 5:07, Freya disclosed fluoxetine for depression. You confirmed the medication and moved on. Depression treated with medication qualifies for C-SNP enrollment under CSN — a year-round window independent of AEP. You never asked whether the condition was ongoing or verified whether a C-SNP exists in ZIP 44123. One follow-up could have unlocked a same-day enrollment.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Certainty Score Breakdown</h2>
          <div style={{ background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', borderBottom: '1px solid rgba(19,17,16,0.08)', background: 'rgba(19,17,16,0.03)' }}><span>Category</span><span>Score</span><span>Max</span></div>
            {[{ cat: 'Lead Quality', score: 14, max: 20 }, { cat: 'Signal Reading', score: 6, max: 20 }, { cat: 'Math Breakdown', score: 5, max: 20 }, { cat: 'Objection Handling', score: 12, max: 15 }, { cat: 'Call Outcome Quality', score: 7, max: 10 }, { cat: 'Compliance', score: 13, max: 15 }].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}><span>{c.cat}</span><span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span><span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span></div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Pattern</h2>
          <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
            <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>RC6 · 5:07</p>
            <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>CSN Probe Missed — Fluoxetine Disclosed, Not Pursued</p>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Any medication for a chronic condition — depression, diabetes, COPD, heart — is a CSN probe trigger. You confirmed the med and moved to the next line.</p>
            <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Have you been managing that condition for a while? Let me check whether there&apos;s a Chronic Special Needs Plan in your area — those are designed for folks with ongoing conditions, and they open a year-round enrollment window.&rdquo;</p>
            </div>
          </div>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Robert — Freya&apos;s current plan is genuinely competitive, so the no-sale was defensible. But the fluoxetine moment at 5:07 was a legitimate C-SNP pathway you didn&apos;t explore. Next time a consumer lists a medication for depression, anxiety, diabetes, cardiac, or COPD — pause. Ask the question. It&apos;s 20 seconds and it can convert a &ldquo;stay on your current plan&rdquo; into a same-day enrollment.</p>
        </section>
      </div>
    </PageShell>
  )
}
