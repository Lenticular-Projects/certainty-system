'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function DeborahParteeCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/natasha-jones" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Natasha Jones · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Natasha Jones × Deborah Partee</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 22, 2026 · 5:44 · ZIP 30035 · <strong style={{ color: 'var(--terracotta)' }}>25 / 100</strong> · MISSED OPPORTUNITY</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Deborah Partee called in response to a TV ad offering to check eligibility for a food card benefit. She told Natasha she had been promised only two questions — when the call moved past that into full discovery, her frustration started building. The call ended at 5:44 when Deborah refused to give her Social Security number and Natasha couldn&apos;t offer a path forward. No plan was named, no benefit was quoted, and the call never reached the math.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The critical moment was 4:50. Deborah said: &ldquo;I don&apos;t do that over the phone. I&apos;m not sure why you need to have all that information.&rdquo; That&apos;s not a roadblock — it&apos;s a signal. She&apos;s cautious, not hostile. She&apos;s protecting herself, not refusing to engage. The move at that pivot point was to validate the fear completely and offer an alternative path: the Medicare card number. Natasha&apos;s response acknowledged the concern but then explained the process — which is a logic response to an emotional objection. It didn&apos;t address what Deborah actually needed to hear.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>One compliance note: at 3:12, Natasha said &ldquo;all the plans carry the food card.&rdquo; That&apos;s factually incorrect and a compliance risk — agents cannot use absolutes when describing benefit availability. The call ended at 5:39 when Natasha said &ldquo;that&apos;s the only way I&apos;m able to assist you,&rdquo; which functioned as an ultimatum. Deborah politely ended the call.</p>
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
              { cat: 'Lead Quality', score: 7, max: 20 },
              { cat: 'Signal Reading', score: 5, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 4, max: 15 },
              { cat: 'Call Outcome Quality', score: 2, max: 10 },
              { cat: 'Compliance', score: 7, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>25/100 — call ended before math or plan presentation. The SSN pivot at 4:50 was the moment this call was decided.</p>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '16px' }}>Natasha — this call was there to be had. Deborah wasn&apos;t hostile. She called about the food card, gave you her ZIP code, told you her name, her date of birth. She was moving forward. What stopped her was fear — a legitimate, reasonable fear about giving out her Social Security number to someone she didn&apos;t call herself. That fear needed to be met with validation first, not process explanation.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '16px' }}>The script at 4:50 was already in your hand. She told you she doesn&apos;t do that over the phone. You already knew the Medicare card was the alternative — you offered it at 5:32. But you offered it after you explained the process, which made it feel like an afterthought. Flip the order: validate the fear completely first, then offer the alternative as the solution. &ldquo;You are right to be cautious. You should never give that to someone you didn&apos;t call yourself. We don&apos;t need your Social — we can use your Medicare card number instead. Would that be more comfortable?&rdquo; Then pause. That pause matters. She needs to feel like she&apos;s in control of the decision, not like she&apos;s being asked to hand something over.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '16px' }}>Jonathan&apos;s note on the SSN pivot: Natasha had already correctly moved from Medicare card to SSN after Deborah said she didn&apos;t have the card — that&apos;s the right sequence. The breakdown happened when Deborah pushed back on the SSN itself. At that specific pivot, before moving forward, give her a reason to feel comfortable: &ldquo;You&apos;re right to be cautious, and I want you to feel completely comfortable. The only reason I need that is to pull up the specific plans available to you so I can show you what you&apos;re eligible for. Your information is completely secure.&rdquo; Then pause. Let her respond. The goal is to make her feel like she&apos;s in control — not like she&apos;s being asked to hand something over.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>One thing to clean up: at 3:12 you said &ldquo;all the plans carry the food card.&rdquo; That&apos;s not accurate and it&apos;s a compliance flag. The correct language is: &ldquo;Many plans offer this benefit — let&apos;s check what&apos;s available in your area.&rdquo; Never use absolutes with benefit availability.</p>
        </section>

      </div>
    </PageShell>
  )
}
