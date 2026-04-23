'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function UnknownConsumerCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/guillermo-cruz" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Guillermo Cruz · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Guillermo Cruz × Unknown Caller</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 20, 2026 · 03:52 · Weatherford, TX area (ZIP 76068) · <strong style={{ color: 'var(--terracotta)' }}>18 / 100</strong> · MISSED OPPORTUNITY</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Happened</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>A consumer who had already responded to a marketing piece, claimed a card, and called in expecting to receive benefits — a HOT lead by definition — hit a passive permission-seeking opener and disengaged in under four minutes. The call never advanced past Phase II (data collection) and ended when the consumer refused to provide a Medicare number.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The pivotal failure came at 0:38 when the consumer asked &ldquo;Do I have to go over it with you?&rdquo; — a value test, not a refusal — and Guillermo answered with &ldquo;Yes, I would be the one verifying if you qualify for additional benefits.&rdquo; That is a bureaucratic positioning statement, not a benefit hook. The consumer needed a reason to stay engaged. Instead they got a job description. Trust was never recovered. Three HOT buying signals — the claimed card, an explicit &ldquo;I&rsquo;m interested in applying for Medicare benefits&rdquo; at 1:55, and a grocery allowance question at 3:40 — were each met with process instead of value. The call ended before a single benefit was discussed.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The grocery allowance question at 3:40 is the most important data point in this call — not because it came at the end, but because it reveals what this consumer called in for. They knew what they wanted. They just couldn&rsquo;t get Guillermo to show it to them fast enough. If that benefit had been named in the first 30 seconds, this call goes differently.</p>
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
              { cat: 'Lead Quality',        score: 4,  max: 20 },
              { cat: 'Signal Reading',       score: 2,  max: 20 },
              { cat: 'Math Breakdown',       score: 0,  max: 20 },
              { cat: 'Objection Handling',   score: 4,  max: 15 },
              { cat: 'Call Outcome Quality', score: 2,  max: 10 },
              { cat: 'Compliance',           score: 6,  max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums', color: 'var(--terracotta)' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>18/100. Call collapsed before it began — compliance was correct for the phases reached, but the permission-seeking opener and failure to frame data requests as benefit gateways made all downstream scoring irrelevant.</p>
        </section>

        {/* Coaching Rec */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '14px' }}>Guillermo, your process knowledge is solid — you hit the TPMO disclaimer correctly, collected residency status, grabbed the callback number, and checked for medications at the right time. The compliance backbone is there. But this call is a case study in what happens when you lead with process instead of value.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '14px' }}>Here&rsquo;s the problem in one sentence: you asked for permission to do your job instead of showing up with something the consumer needed. &ldquo;Did you want to go over plans?&rdquo; is a question that can be answered no. &ldquo;I pulled up your zip code — there are benefits in your area I want to make sure you&rsquo;re not missing out on&rdquo; is not. At 1:55, when the consumer said &ldquo;I&rsquo;m just interested in applying for Medicare benefits&rdquo; — that was your green light. That was the moment to accelerate directly to enrollment, not to pivot to a callback number. You missed a consumer who was already waving you in.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>The fix is a mindset shift: lead with the specific benefit the consumer wants, frame every data request as the key that unlocks it. &ldquo;Your Medicare number is what tells the system exactly what you&rsquo;ve got coming to you — including the grocery allowance&rdquo; is not a data ask. It&rsquo;s an enrollment gateway. Use it.</p>
        </section>

      </div>
    </PageShell>
  )
}
