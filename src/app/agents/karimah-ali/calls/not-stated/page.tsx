'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function NotStatedCallPage() {
  return (
    <PageShell signal="yellow">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/karimah-ali" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Karimah Ali · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Karimah Ali × Not Stated</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 22, 2026 · 2:56 · Jacksonville, FL (ZIP 32206) · <strong style={{ color: 'var(--terracotta)' }}>27 / 100</strong> · Missed Opportunity</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This is a 2:56 call that ended when the consumer hung up. The opening compliance disclosures were clean. The consumer stated her motivation clearly at 1:18 — &ldquo;the food card&rdquo; — and was cooperative until the agent reached the Medicare verification step. When the consumer didn&apos;t have her Medicare card handy, Karimah asked for her name to look up the account. The consumer responded at 2:34 with &ldquo;Do you need my social?&rdquo; — and Karimah said &ldquo;Okay, we can look it up that way. Let&apos;s go ahead and do that.&rdquo; The consumer said &ldquo;I&apos;m hanging up now. Don&apos;t call back&rdquo; two seconds later. The call was over.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px', margin: 0 }}>The root cause is RC2 — wrong response to a trust signal. The consumer&apos;s question about her SSN was not a logistical one; it was a test of trust. She was checking whether this was safe. By accepting the SSN immediately without hesitation, Karimah failed that test. The correct response was to de-escalate: acknowledge the instinct to be careful, decline the SSN, and pivot to the less-sensitive Medicare card number.</p>
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
              { cat: 'Objection Handling', score: 2, max: 15 },
              { cat: 'Call Outcome Quality', score: 2, max: 10 },
              { cat: 'Compliance', score: 11, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>27/100 — call ended at 2:56. Compliance scores reflect clean opening; all other categories reflect the inability to proceed past the trust breakdown at 2:34.</p>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Karimah — the consumer offered her Social Security number, but when you moved forward with it, she pulled back immediately and the call ended. Here&apos;s what was happening: she offered the SSN, but she wasn&apos;t fully settled into that step yet. That question — &ldquo;Do you need my social?&rdquo; — was a trust checkpoint, not a logistical hand-off. She was checking whether it was safe to give it to you.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>When someone offers the SSN but you sense any hesitation, don&apos;t rush to accept it. Reassure her first:</p>
          <div style={{ margin: '16px 0', padding: '14px 18px', background: 'rgba(19,17,16,0.04)', borderRadius: '8px', borderLeft: '3px solid var(--ink-20)' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;That&apos;s a great question — and you&apos;re smart to be careful. I appreciate that. Just so you know, your information is completely secure, and actually, we don&apos;t even need your Social Security number to check this. We can look everything up with just the number on your red, white, and blue Medicare card. Is that nearby?&rdquo;</p>
          </div>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>Give her a moment to feel comfortable about the step she just offered to take before you move forward. Acknowledge the instinct, offer the safer alternative, let her breathe. The food card motivation was there — she called for it. The only thing between her and you was one trust checkpoint you needed to pass first.</p>
        </section>

      </div>
    </PageShell>
  )
}
