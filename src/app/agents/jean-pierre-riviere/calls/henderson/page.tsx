'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function HendersonCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/jean-pierre-riviere" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Jean Pierre Riviere · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Jean Pierre Riviere × Henderson</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 22, 2026 · 8:44 · Illinois (ZIP 60438) · <strong style={{ color: 'var(--terracotta)' }}>19 / 100</strong> · MISSED OPPORTUNITY</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Henderson called to learn more about benefits he had seen online — food card, flex card, money package. He was cooperative at the start: gave his zip code, confirmed his name, agreed to the callback number. Jean Pierre delivered the TPMO disclaimer correctly at 1:54 and confirmed basic eligibility questions. Then at 3:20, without any value bridge, he asked for the Medicare number. Henderson pushed back immediately: &ldquo;I heard this would take less than a minute. You had two questions to ask me.&rdquo;</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>That was not an objection to the number — it was a signal that Henderson felt the call was not proceeding as he&apos;d been led to expect. He felt misled. Jean Pierre&apos;s response was to explain the literal sequence of questions: &ldquo;The first question was your zip code and your Medicare is the second question.&rdquo; That completely missed the emotional cue. The right move was to acknowledge the feeling of being rushed, explain why the number was needed in plain terms, and ask once more with a reason. Instead the call ended before a plan was ever named.</p>
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
              { cat: 'Signal Reading',        score: 5,  max: 20 },
              { cat: 'Math Breakdown',        score: 0,  max: 20 },
              { cat: 'Objection Handling',    score: 2,  max: 15 },
              { cat: 'Call Outcome Quality',  score: 0,  max: 10 },
              { cat: 'Compliance',            score: 7,  max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>19/100 — the compliance foundation was there, but asking for PII without building value first destroyed a cooperative lead.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Correct TPMO disclaimer (1:54):</strong> Delivered the required disclaimer clearly and early — two carriers, 18 plans, alternatives available. This is the right compliance step at the right time.</li>
            <li><strong>Confirmed callback number (0:49):</strong> Proactively confirmed the callback number before the disclaimer. Solid procedural habit — means the lead isn&apos;t lost if the call drops.</li>
            <li><strong>Identified the motivation immediately (0:32):</strong> Asked directly what Henderson was looking for — food card, flex card, money package, social security — and matched his stated interest. That&apos;s a fast qualification that most agents skip.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC1 · 3:20</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Medicare number requested before building value</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>At 3:20, after the disclaimer and a few eligibility questions, you asked for the Medicare number with no explanation of why. Henderson had been told the call would take less than a minute. When you asked for personal identifying information without explaining how it connected to the benefit he called about, he felt misled. The number request isn&apos;t the problem — the timing and the missing &ldquo;why&rdquo; are. Build the value bridge first.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Mr. Henderson, to find the specific food and flex card benefits you called about, I need to pull up your file with your Medicare number — it&apos;s the key that shows me which plans and benefit levels you&apos;re eligible for in your area. Without it I&apos;m just guessing. Can I grab that from you?&rdquo;</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC2 · 3:42</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Logic response to an emotional objection</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>When Henderson said &ldquo;I heard this would take less than a minute — you had two questions,&rdquo; he was communicating frustration and a feeling of being misled, not asking for a literal count of the questions. Your response — &ldquo;the first question was your zip code and Medicare is the second question&rdquo; — answered the literal words and completely missed the emotional point. He didn&apos;t need an explanation of the question sequence. He needed acknowledgment that his time was being respected and a reason to give you 60 more seconds.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;I hear you — you want this to be fast and I respect your time. The Medicare number is literally the only thing I need to look up the food card benefits in your area. It takes 30 seconds. Can I grab that and show you what you&apos;re eligible for right now?&rdquo;</p>
              </div>
            </div>

          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Jean Pierre, Henderson was cooperative, gave you his information, confirmed the callback — and then you lost him by asking for the Medicare number without a reason. He didn&apos;t refuse. He questioned the process. That is different. The response to a process question is not an explanation of the process — it&apos;s a reminder of what&apos;s in it for him. &ldquo;Mr. Henderson, the Medicare number is the key that pulls up which food card amounts you qualify for in your zip code. I can look it up and have an answer for you in 30 seconds.&rdquo; Build the value before you ask for the information. Who you are, what you&apos;re going to find, why it&apos;s worth a few minutes — then ask for the number.</p>
        </section>

      </div>
    </PageShell>
  )
}
