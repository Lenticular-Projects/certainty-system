'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function KateCohenCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/andres-duran" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Andres Duran · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Andres Duran × Kate Cohen</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 20, 2026 · 19:54 · Florida (ZIP 33021) · <strong style={{ color: 'var(--terracotta)' }}>44 / 100</strong> · Missed Opportunity</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Kate Cohen, a warm and engaged prospect, called about a Social Security give-back program. She had lost her AvMed MAPD at the end of 2025 and defaulted to a WellCare PDP out of confusion. By 7:37, Andres had confirmed both her doctors in-network on Aetna, verified Memorial and Holy Cross hospitals, and demonstrated her Trilogy medication cost dropping from $600/month to $67/month — a powerful, closeable position.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The call collapsed at 16:11 when Kate requested a callback. Andres made a genuine retention attempt but ultimately surrendered by accepting a callback number at 19:07. This was a closeable consumer — both doctors confirmed, medication affordable, zero premium plan, strong buying signals — who walked away with only a callback promise.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The compliance failure was critical: Andres never established a valid SEP window for enrolling Kate in April 2026. Her AvMed plan terminated December 2025; the EOC window expired end of February. No qualifying event was discussed, and enrollment was presented as routine without SEP verification.</p>
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
              { cat: 'Lead Quality', score: 14, max: 20 },
              { cat: 'Signal Reading', score: 12, max: 20 },
              { cat: 'Math Breakdown', score: 9, max: 20 },
              { cat: 'Objection Handling', score: 7, max: 15 },
              { cat: 'Call Outcome Quality', score: 3, max: 10 },
              { cat: 'Compliance', score: 0, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>44/100 reflects strong discovery and presentation undermined by a surrendered close and critical compliance gap — no valid SEP established for April 2026 enrollment.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Immediate Plan Gap Identification (2:27):</strong> Within 2.5 minutes, Andres spotted that Kate had switched from an MAPD to a PDP and questioned why — reframing an inbound give-back inquiry into a full plan rescue conversation.</li>
            <li><strong>Doctor Network Confirmed Before Recommending (13:03):</strong> Verified both Dr. Steiner and Dr. Gotkin in-network before recommending Aetna, then used Devoted's exclusion of Dr. Gotkin to rule it out. Textbook consultative selling.</li>
            <li><strong>Medicare/Advantage Education (16:31):</strong> When Kate expressed confusion about canceling Medicare, Andres explained clearly that she keeps Medicare A and B and the Advantage plan sits on top — using her own AvMed history as the reference point.</li>
            <li><strong>Drug Cost Comparison Executed (10:57):</strong> Compared Trilogy at $600/month (WellCare) to $67/month (Aetna) — a powerful $533 monthly savings that set up the close.</li>
          </ul>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Andres, you ran a strong discovery and presentation on this call. Within three minutes you spotted that Kate had the wrong plan, confirmed both her doctors and hospitals, got her medication down from $600 to $67 a month, and had her saying 'Gosh, it's amazing.' You had everything you needed to close this call. What you didn't do was close it.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>When Kate said 'let me call you back' at 16:11, you had two doctors confirmed, two hospitals confirmed, a $533 monthly drug savings, zero premium, and zero copays on the table. That's not a situation where you accept a callback — that's a situation where you say: 'Kate, what's the one thing you need to be sure of before we move forward right now?' You told her 'I'm never going to hear from you again, that's the truth.' You were right — and you still handed her the exit ramp. When you know a callback is a loss, you can't give the callback. You pivot to the one remaining concern and you handle it.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>There's also a compliance matter you need to know: you cannot enroll someone in April 2026 without a valid SEP. Kate's AvMed plan terminated December 2025. The EOC window closed end of February. OEP closed March 31. Before you present any plan to an inbound caller in April, you need to ask: 'What qualifying event are we using to enroll you today?' — and walk through the SEP codes until you find one. If no SEP exists, you cannot proceed. On this call, that question never got asked. Fixing this protects you and protects Kate.</p>
        </section>

      </div>
    </PageShell>
  )
}
