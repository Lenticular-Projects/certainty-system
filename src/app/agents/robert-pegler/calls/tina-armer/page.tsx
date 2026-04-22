'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function TinaArmerCallPage() {
  return (
    <PageShell signal="amber">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/robert-pegler" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Robert Pegler · Weekly Brief</Link>
        <div style={{ marginBottom: '32px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Robert Pegler × Tina Armer</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 06:06 · Oklahoma (ZIP 74962) · <strong style={{ color: 'var(--mustard-dark)' }}>57 / 100</strong> · Correct No-Sale · <em>CSN missed</em></p>
        </div>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: '0 0 14px' }}>Tina called about a food benefit card. During the eligibility hold, she disclosed a second heart attack in February 2026, pulmonary and leg blood clots, and active oxygen therapy. You correctly identified this as a medically sensitive situation and did not push enrollment. Tina also had no interest in UHC (your only carrier for her area) and explicitly declined. Your ethical judgment and bedside manner were right.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The miss: cardiovascular disorder and blood clots are qualifying conditions for a C-SNP year-round under CSN. You never checked whether a C-SNP was available in ZIP 74962 before accepting the no-sale. A C-SNP would have been medically appropriate — supporting her treatment — and was a viable enrollment pathway regardless of AEP timing.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Certainty Score Breakdown</h2>
          <div style={{ background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', borderBottom: '1px solid rgba(19,17,16,0.08)', background: 'rgba(19,17,16,0.03)' }}><span>Category</span><span>Score</span><span>Max</span></div>
            {[{ cat: 'Lead Quality', score: 12, max: 20 }, { cat: 'Signal Reading', score: 7, max: 20 }, { cat: 'Math Breakdown', score: 4, max: 20 }, { cat: 'Objection Handling', score: 11, max: 15 }, { cat: 'Call Outcome Quality', score: 8, max: 10 }, { cat: 'Compliance', score: 13, max: 15 }].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}><span>{c.cat}</span><span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span><span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span></div>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Robert — your bedside manner on Tina&apos;s call was exactly right. She&apos;s medically fragile and you adjusted your tone instead of pushing. That&apos;s real. The coaching is only this: when a consumer gives you a cardiac history like Tina&apos;s, the check for a C-SNP takes 20 seconds and is the most medically-appropriate plan you could put her on. <em>&ldquo;Tina, with your cardiac history, there may be a plan designed specifically for people managing heart conditions, and it has a year-round enrollment window. Let me look at that real quick before we decide anything.&rdquo;</em></p>
        </section>
      </div>
    </PageShell>
  )
}
