'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function AliciaMizeCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/jean-pierre-riviere" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Jean Pierre Riviere · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Jean Pierre Riviere × Alicia Mize</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 22, 2026 · 4:35 · Burnet County, TX · <strong style={{ color: 'var(--terracotta)' }}>14 / 100</strong> · MISSED OPPORTUNITY</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Alicia Mize called about the grocery card. She was frustrated with the volume of calls she receives and was guarded from the start. When Jean Pierre asked for her Medicare number at 3:03, she refused: &ldquo;No, you&apos;re not getting my Medicare number.&rdquo; He responded with &ldquo;So how am I going to help you?&rdquo; — which put the problem on her and surrendered all authority. Then came 47 seconds of dead air. The call ended with &ldquo;Then I can&apos;t help you, ma&apos;am&rdquo; and &ldquo;What would you like to do?&rdquo; — both final surrenders.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This call was not unwinnable. Alicia&apos;s Medicare number refusal is one of the most common objections on this type of call. The correct response validates her caution, explains the necessity in one sentence, and keeps the door open. The call died on a failure to handle a predictable objection — not because the consumer was unreachable.</p>
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
              { cat: 'Lead Quality',         score: 5,  max: 20 },
              { cat: 'Signal Reading',        score: 4,  max: 20 },
              { cat: 'Math Breakdown',        score: 0,  max: 20 },
              { cat: 'Objection Handling',    score: 2,  max: 15 },
              { cat: 'Call Outcome Quality',  score: 0,  max: 10 },
              { cat: 'Compliance',            score: 3,  max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>14/100 on a high-difficulty call — the call collapsed at a predictable objection that has a known, trainable response.</p>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC2 · 3:10</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Logic response to an emotional objection — consumer became the obstacle</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>When Alicia said &ldquo;you&apos;re not getting my Medicare number,&rdquo; she was expressing fear and protective instinct — not a logistics question. Responding with &ldquo;So how am I going to help you?&rdquo; made her responsible for solving the problem. She became the obstacle in her own enrollment. When a consumer hesitates, back up and keep the door open: &ldquo;Let me back up — I don&apos;t need anything you&apos;re not comfortable with. Can I just walk you through what&apos;s available in your area?&rdquo;</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Ms. Mize, that is 100% the right instinct. You should never give that number to just anyone. The only reason I ask is to confirm which plans and grocery benefits you&apos;re eligible for in your area — it&apos;s on a secure, recorded line. Can I explain how that protection works?&rdquo;</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC3 · 3:16</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>47 seconds of dead air after the objection</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>After &ldquo;So how am I going to help you?&rdquo; there was 47 seconds of silence. On a call with a skeptical consumer, dead air communicates uncertainty and incompetence. The moment you hit resistance, narrate. Even &ldquo;Let me pull up the guidelines on that for you&rdquo; is better than silence. When you&apos;re in the system, say so: &ldquo;I&apos;m looking at what&apos;s available in Burnet County right now, give me just one second.&rdquo;</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;I&apos;m pulling up your zip code right now — give me just one second. I want to show you exactly what&apos;s available in Burnet County before we go any further.&rdquo; Narrate what you&apos;re doing. Dead air makes consumers uneasy.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Jean Pierre, the Medicare number objection is one of the most predictable objections you will face on grocery card calls. This consumer was not unreachable — she was protective of her information, which is the right instinct. Your job is to validate that instinct first, then explain exactly why the number is needed and how it&apos;s protected, then ask again. The line that would have changed this call: &ldquo;Ms. Mize, that is exactly the right instinct — you should never give that number to just anyone. The only reason I ask is to confirm which grocery card benefits you&apos;re eligible for in Burnet County. It&apos;s on a secure, recorded line — that&apos;s why we started this call by telling you it was being recorded. Can I take 60 seconds to walk you through what&apos;s available?&rdquo; Drill this response until it&apos;s automatic. Also: narrate what you&apos;re doing in the system. Never let more than 5 seconds pass in silence.</p>
        </section>

      </div>
    </PageShell>
  )
}
