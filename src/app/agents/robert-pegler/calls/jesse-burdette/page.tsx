'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function JesseBurdetteCallPage() {
  return (
    <PageShell signal="amber">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/robert-pegler" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Robert Pegler · Weekly Brief</Link>
        <div style={{ marginBottom: '32px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Robert Pegler × Jesse Burdette</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 20, 2026 · 12:08 · <em>Joint call with Karimah Ali</em> · <strong style={{ color: 'var(--mustard-dark)' }}>52 / 100</strong> · Incomplete</p>
        </div>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Joint call with Karimah Ali. Discovery stalled before a plan could be presented. Full call analysis archive at <code style={{ fontSize: '0.875rem', background: 'rgba(19,17,16,0.05)', padding: '1px 6px', borderRadius: '4px' }}>03-reports/call-reports/2026-04-20_to_04-21/Robert_Pegler_with_Karimah_Ali_vs_Jesse_Burdette_04-20-2026_12m08s.md</code>.</p>
        </section>

        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Robert — on joint calls, define lead vs. support in the first 30 seconds. The consumer shouldn&apos;t feel handled by committee. Lead agent owns the close; support agent fills product gaps. Tight frame.</p>
        </section>
      </div>
    </PageShell>
  )
}
