'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function LewisParkerCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/karimah-ali" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Karimah Ali · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Karimah Ali × Lewis Parker</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 22, 2026 · 4:31 · Lima, OH · <strong style={{ color: 'var(--terracotta)' }}>38 / 100</strong> · Incomplete</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Lewis Parker — 74, Lima OH, DOB 12/22/1951, lives alone — was a 4-minute call that ended when he said &ldquo;last time I gave that out, I ended up getting screwed up and I ain&apos;t doing it again. Bye.&rdquo; The call terminated at 3:35. He was referring to his Social Security number. He had been the victim of identity theft.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>You had a strong opening: you pivoted off the Aetna loyalty signal at 1:24 with &ldquo;let&apos;s just go ahead and take a look and see what you currently have&rdquo; — a soft, non-confrontational anchor that would have kept him in the conversation. You offered the Medicare number as an alternative to SSN at 3:16, which was the right instinct. But you offered it after the resistance had already crystallized. The recovery script for an identity theft disclosure needs to come the moment he hesitates — not after he&apos;s already halfway out. A prepared response to that exact disclosure, delivered at 3:16 or earlier, likely keeps this call alive.</p>
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
              { cat: 'Lead Quality', score: 10, max: 20 },
              { cat: 'Signal Reading', score: 7, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 6, max: 15 },
              { cat: 'Call Outcome Quality', score: 5, max: 10 },
              { cat: 'Compliance', score: 10, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>38/100 — call terminated by identity theft disclosure at 3:35. Math score zero (no presentation reached). Correct instinct on Medicare number alternative — deployed too late.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Aetna loyalty pivot at 1:24:</strong> When Lewis signaled Aetna loyalty, you didn&apos;t argue — you said &ldquo;let&apos;s just go ahead and take a look and see what you currently have.&rdquo; That&apos;s the correct response. You made the review feel like verification, not replacement. He stayed on the line.</li>
            <li><strong>Medicare number offered as alternative at 3:16:</strong> Recognizing that SSN was triggering resistance, you offered the Medicare card number as an alternative path. The instinct was right. The timing was the variable — this offer needed to land before his resistance had converted to a decision to hang up.</li>
            <li><strong>TPMO completed (4 orgs, 33 products):</strong> The compliance opening covered the required disclosures cleanly, including carrier count, Medicare.gov reference, and call recording notice.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC1 · 2:54</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>No Data Security Preamble Before SSN Request</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>The SSN request at 2:54 landed without any framing around why it&apos;s needed, how it&apos;s protected, or what the alternatives are. For any consumer, a cold SSN request creates friction. For an identity theft victim, it triggers a hard stop. A two-sentence security preamble before the ask changes the entire dynamic — it demonstrates that you understand the concern before it surfaces, which is the only way to prevent the shutdown.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Mr. Parker, to pull up your current plan I&apos;m going to ask for the last four of your Social Security — this is a secure line and it goes directly into the Medicare system, same as when your doctor&apos;s office checks your coverage. If you prefer, your Medicare number works just as well. Which would you like to use?&rdquo;</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC2 · 3:35</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Identity Theft Disclosure — No Prepared Recovery Response</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>When Lewis said &ldquo;last time I gave that out, I ended up getting screwed up,&rdquo; the call had one viable recovery moment: acknowledge the experience, affirm his caution, and redirect to the Medicare number immediately — before he reaches &ldquo;I ain&apos;t doing it again. Bye.&rdquo; The window between his disclosure and his hang-up is approximately 8 seconds. A prepared response closes that gap. Without it, the hang-up is almost certain.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Recovery Script (identity theft disclosure)</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Mr. Parker, I completely understand — and honestly, good for you for protecting yourself. You don&apos;t need your Social Security at all. Give me the number on the front of your red, white, and blue Medicare card — that&apos;s all I need. Your SSN never has to be on this call.&rdquo;</p>
              </div>
            </div>

          </div>
        </section>

        {/* The Moment That Decided This Call */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>The Moment That Decided This Call</h2>
          <div style={{ padding: '20px 24px', background: 'rgba(19,17,16,0.03)', borderRadius: '10px', borderLeft: '3px solid var(--ink-60)' }}>
            <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 10px' }}>3:35 — Lewis says: &ldquo;last time I gave that out, I ended up getting screwed up and I ain&apos;t doing it again. Bye.&rdquo;</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This is the only moment that mattered. Everything before 3:35 was setup. The call lives or dies on what comes out of your mouth in the 8 seconds between his disclosure and his hang-up. The recovery script: &ldquo;Mr. Parker, I completely understand — and honestly, good for you for protecting yourself. You don&apos;t need your Social Security at all. Give me the number on your Medicare card — that&apos;s all I need.&rdquo; That sentence keeps him on the line. Without it, the hang-up is almost certain. Build this response into your muscle memory — you will have this conversation again.</p>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Karimah, the Aetna pivot at 1:24 was the right move — you kept him in the conversation when a less experienced agent would have argued the plan. The Medicare number alternative at 3:16 was the right instinct. The gap is timing: both of those moves needed to happen about 90 seconds earlier than they did.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>Here&apos;s what to add to your data collection sequence: before you ever ask for the Social Security number, frame the ask. Two sentences: why it&apos;s needed, how it&apos;s protected, and the Medicare card alternative. Deliver this before any resistance appears. For consumers who have been through identity theft — and there are more of them than you think — this preamble is what keeps them on the phone. And if they disclose identity theft anyway, you have one response: &ldquo;Good for you for protecting yourself. You don&apos;t need your Social Security — your Medicare card number is all I need.&rdquo; Practice that line until it comes out clean and fast. It&apos;s the difference between a 4-minute hang-up and a completed enrollment.</p>
        </section>

      </div>
    </PageShell>
  )
}
