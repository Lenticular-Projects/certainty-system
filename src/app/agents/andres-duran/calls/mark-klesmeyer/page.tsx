'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function MarkKlesmeyerCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/andres-duran" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Andres Duran · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Andres Duran × Mark Klesmeyer</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 18:07 · Florida (ZIP 33322) · <strong style={{ color: 'var(--terracotta)' }}>57 / 100</strong> · Missed Opportunity</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Andres worked a high-complexity call with a medically involved consumer (5 specialists, multiple conditions, recently activated Part B) and built a genuinely compelling case for a Devoted Health plan — $0 specialist copay, $3,500 dental, $184/month premium rebate, $0 deductibles. Mark was engaged throughout, asked detailed questions about deductibles, diagnostics, blood work, and hospital coverage, and clearly understood the value being presented.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The call collapsed at 16:46 when Mark raised a valid doctor network verification objection. Andres responded dismissively ('I just called your doctors') rather than validating Mark's underlying concern. This is a real issue — the insurance company's network directory and the doctor's actual billing department don't always align. Andres needed an empathetic reframe, not a factual pushback. He then attempted a close at 17:43 without resolving the trust gap, and Mark shut it down firmly: 'I'm not making any changes yet.'</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This was a closeable call. Mark revealed significant Client Gold — extensive dental needs, frequent specialist visits, multiple conditions — and Andres correctly identified and presented relevant benefits. The failure was in the final 90 seconds: a surrendered objection followed by a premature, unanchored close attempt.</p>
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
              { cat: 'Lead Quality', score: 13, max: 20 },
              { cat: 'Signal Reading', score: 11, max: 20 },
              { cat: 'Math Breakdown', score: 12, max: 20 },
              { cat: 'Objection Handling', score: 5, max: 15 },
              { cat: 'Call Outcome Quality', score: 3, max: 10 },
              { cat: 'Compliance', score: 13, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>57/100 reflects strong preparation and presentation work that collapsed on a single unresolved objection in the final 90 seconds of a high-complexity call.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Clean TPMO Compliance Delivery (0:50):</strong> Delivered the full TPMO disclaimer with all required elements — 4 organizations, 31 products, Medicare.gov, 1-800-MEDICARE, SHIP reference — within the first 90 seconds. Conversational, not robotic.</li>
            <li><strong>Thorough Doctor Network Verification (3:42):</strong> Verified 5 specialists one by one with difficult-to-spell names, confirmed locations, and confirmed in-network status for each. This is exactly what builds credibility with a medically complex consumer.</li>
            <li><strong>Dental Signal Caught and Deployed (10:39):</strong> When Mark confirmed he has dental work to do, Andres immediately tied it back to the $3,500 dental allowance and used it as a plan differentiator. Textbook Client Gold deployment.</li>
            <li><strong>Honest Uncertainty Handling (15:35):</strong> When Mark asked about freestanding lab locations, Andres admitted he wasn't 100% sure what it meant, then worked through the logic transparently. This built genuine credibility.</li>
          </ul>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Andres, this was one of the more technically sound calls you've run — you handled a complex medical profile with 6 specialists, delivered compliance cleanly, and built a genuinely compelling plan comparison. Mark was evaluating this seriously for 18 minutes, asking detailed questions about deductibles, blood work, and hospital coverage. You had a closeable consumer. The reason he walked has nothing to do with the plan — it has everything to do with what happened at 16:46.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>When Mark said he wanted to call his doctors, he was telling you about a scar. He's been burned before — an agent told him a doctor was in-network and the billing department said otherwise. That's not an objection you can dismiss. 'I just called your doctors' doesn't mean anything to a consumer who's had that exact experience. What Mark needed in that moment was someone to say: 'You're right — the directory and the billing desk don't always match up. That's real.' Then give him a concrete path: Devoted's direct provider line, the option to apply and revoke before the effective date, and the urgency frame he needed to act today.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>Here are three things to take forward: First, practice the network objection reframe until it's automatic — validate, give the direct verification number, offer the revocable application. Second, when you note that someone's Part B just started this year, say it out loud as an enrollment window: 'You're in an initial enrollment window right now — after this period closes, you'd have to wait for open enrollment in the fall.' That's legitimate urgency and you left it on the table. Third, annualize every benefit. $184 a month is $2,208 a year. Mark has dental work to do — $3,500 covers most of it. Add it up for him. Concrete numbers make decisions concrete.</p>
        </section>

      </div>
    </PageShell>
  )
}
