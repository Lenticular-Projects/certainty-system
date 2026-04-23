'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function FlorentinhaCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/rudy-schprejer" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Rudy Schprejer · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Rudy Schprejer × Florentina</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 22, 2026 · 02:33 · Florida · <strong style={{ color: 'var(--terracotta)' }}>19 / 100</strong> · MISSED OPPORTUNITY</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Florentina called in specifically for the food card benefit — a motivated, inbound caller. She confirmed Medicare Part A and B, gave her zip code (32976), answered qualifying questions, and stayed on the line through the TPMO disclaimer. She was there and ready.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>At 2:18, when asked for her Medicare card number, Florentina said &ldquo;I was told I shouldn&apos;t give out that number.&rdquo; That was a fear signal, not a hard no. She wasn&apos;t done — she was asking for a reason to trust. Rudy had already asked for the Medicare card (she had it). Moving to SSN as a fallback was the right pivot. But instead of a trust bridge, Rudy issued an ultimatum: &ldquo;Then I can&apos;t help you, ma&apos;am.&rdquo; Florentina said &ldquo;I will cancel&rdquo; and the call ended at 2:33 — under three minutes on a motivated caller who had called in for something she wanted.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This call was there to be had. She was not guarded, she was cautious — and caution is manageable with one sentence of validation. The scoring reflects a fundamental breakdown at the only objection on the call, with zero reframe attempted.</p>
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
              { cat: 'Lead Quality',        score: 5, max: 20 },
              { cat: 'Signal Reading',       score: 5, max: 20 },
              { cat: 'Math Breakdown',       score: 0, max: 20 },
              { cat: 'Objection Handling',   score: 0, max: 15 },
              { cat: 'Call Outcome Quality', score: 0, max: 10 },
              { cat: 'Compliance',           score: 9, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>19/100 — a motivated inbound caller lost at the first and only objection in 2:33. An ultimatum where a trust bridge was needed.</p>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Rudy — Florentina called in for the food card. She confirmed Medicare A and B, stayed through the TPMO disclaimer, answered every qualifying question. She was a motivated inbound caller who had picked up the phone to get something she wanted.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '12px' }}>When she said &ldquo;I was told I shouldn&apos;t give out that number&rdquo; at 2:18, that was not a rejection. That was a fear signal. She was asking for a reason to trust you. You had already asked for the Medicare card — she actually had it. Moving to SSN as a fallback was the right pivot. But she needed a bridge first, not an ultimatum.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '12px' }}>The line: &ldquo;You&apos;re right to be cautious — that&apos;s exactly the right instinct. The only reason I need that number is to confirm which plans in your zip code include the food card benefit you called in for. Your information is completely secure, and we only need it to pull up what&apos;s available for you.&rdquo; Then let her respond. She was there and ready. That call was there to be had.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '12px' }}>The pattern to build: when a consumer hesitates on PII, validate the caution first, explain the purpose second, then ask again. Validation is not weakness — it is the thing that keeps the call alive. &ldquo;Then I can&apos;t help you&rdquo; is the fastest way to give a motivated caller a reason to leave.</p>

          <div style={{ marginTop: '24px', padding: '16px 20px', background: 'rgba(19,17,16,0.04)', borderRadius: '10px', borderLeft: '3px solid var(--ink-20)' }}>
            <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 8px' }}>The Line — Deploy on the Next PII Objection</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;You&apos;re right to be cautious — that&apos;s a very smart instinct. The only reason I ask for that number is so I can confirm exactly which plans in your zip code include the food card benefit you called about. This call is recorded and your information is protected. Can I show you what&apos;s available for you?&rdquo;</p>
          </div>
        </section>

      </div>
    </PageShell>
  )
}
