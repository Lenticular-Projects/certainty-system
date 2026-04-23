'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'
import styles from '../../page.module.css'

export default function TimothyWilsonCallPage() {
  return (
    <PageShell signal="yellow">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/jeri-vivas" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Jeri Vivas · Weekly Brief</Link>

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Jeri Vivas × Timothy Wilson</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 22, 2026 · 17:55 · Lake Placid, Florida (ZIP 33852) · <strong style={{ color: 'var(--mustard-dark)' }}>62 / 100</strong> · MISSED OPPORTUNITY</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Timothy Wilson called in as a Money Caller with significant C-SNP eligibility — a transplant and heart valve implant disclosed at 7:22, plus a recent move that opened a MOV SEP window. Jeri delivered clean compliance from the first line, patiently navigated confusion over the Medicare card, found the C-SNP angle with one direct question about chronic conditions, identified vision as the primary driver, and built the full value stack: $177 Part B giveback, $50 food card, specialist copay reduction from $30 to $10, MOOP cut from $4,000 to $2,000. By 13:49 Timothy said yes.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>What followed was 2 minutes and 47 seconds of dead air — Pattern 5, System Navigation Paralysis — while Jeri worked on bringing in the enrollment specialist. When a consumer has just said yes and sits in silence that long, that yes starts to erode. The transfer at 16:38 was abrupt: a new agent (Manuel Medrano) opened a fresh introduction over a consumer who had already agreed to move forward, and the call ended mid-sentence at 17:55. The enrollment was not completed.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The compliance score is perfect. The objection handling score is full — no objections were raised, correct per the Laydown Lead Rule. The loss is entirely in the transition from yes to enrollment. One sentence at 13:50 would have changed the outcome.</p>
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
              { cat: 'Lead Quality',         score: 8,  max: 20, note: 'Complete loss of control after 13:50' },
              { cat: 'Signal Reading',        score: 14, max: 20, note: 'C-SNP identified · vision leveraged · MOV noted but not named' },
              { cat: 'Math Breakdown',        score: 5,  max: 20, note: 'Monthly numbers stated · no annualization · no humanization' },
              { cat: 'Objection Handling',    score: 15, max: 15, note: 'No objections raised · full credit per Laydown Lead Rule' },
              { cat: 'Call Outcome Quality',  score: 5,  max: 10, note: 'Math attempted · no recovery from silence · fumbled transfer' },
              { cat: 'Compliance',            score: 15, max: 15, note: 'Perfect — TPMO at 0:20 · SOA at 0:53 · clean sequence' },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none', alignItems: 'start' }}>
                <div>
                  <span>{c.cat}</span>
                  {c.note && <p style={{ fontSize: '0.75rem', color: 'var(--ink-60)', margin: '2px 0 0', lineHeight: 1.4 }}>{c.note}</p>}
                </div>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>62/100 — strong foundational elements (perfect compliance, full objection handling) with a critical execution failure in the final phase.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Textbook Compliance Execution (0:20):</strong> TPMO disclaimer, plan count, alternative resources, Scope of Appointment — all delivered cleanly in the correct sequence inside the first 90 seconds without sounding scripted. Both eligibility screening questions asked before data collection began.</li>
            <li><strong>Patient Problem-Solving on Card Confusion (3:20):</strong> When Timothy provided a Humana card instead of the red, white, and blue Medicare card, Jeri stayed calm and guided him through the alternative verification path without frustration. He found the correct card at 5:22. The lead was preserved.</li>
            <li><strong>C-SNP Identification with One Question (7:17):</strong> Asked directly about chronic conditions. Timothy disclosed a transplant and heart valve implant. Jeri immediately pivoted toward C-SNP eligibility and a stronger plan — the correct strategic move.</li>
            <li><strong>Needs-Based Benefit Presentation (12:05):</strong> After Timothy said vision was &ldquo;the big one&rdquo; at 10:29, Jeri presented the $200 vision allowance directly. He was listening and tailoring — not reading a generic script.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC3 · 13:50</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>System Navigation Paralysis — 2:47 of dead air after the yes</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Timothy said yes at 13:49. The very next sound was 2 minutes and 47 seconds of silence while Jeri worked on the warm transfer. This is the single reason the enrollment was lost. When a consumer sits in silence that long after agreeing, the yes starts to feel uncertain — and by the time Manuel joined at 16:38, Timothy was back at zero rapport.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Timothy, while I get my enrollment specialist on the line — is the vision coverage one of the things you were most looking forward to?&rdquo; Keep him talking. Keep his energy in the call. Any warm question works — the job is to never let it go silent.</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC2 · 11:32</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Incomplete Math Breakdown — monthly figures only, no annualization</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>The $177 giveback and $50 food card were presented correctly as monthly figures. Neither was ever annualized. Monthly numbers are easy to forget — $227 a month doesn&apos;t feel permanent. $2,700 a year feels like a decision.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Mr. Wilson, that $177 giveback plus the $50 food card is $227 in your pocket every month. Annually, that&apos;s over $2,700. That&apos;s real money back to you each year — on top of the $200 vision allowance.&rdquo;</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC6 · 6:31</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>MOV SEP not named — consumer never understood why today was possible</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Timothy said &ldquo;recently moved there&rdquo; at 6:31. The agent noted it and moved on. The consumer never heard the words &ldquo;special enrollment window&rdquo; — never understood that the recent move is the legal basis for making the change today, outside of AEP. Without that frame, a consumer who later wonders &ldquo;can I wait until October?&rdquo; has no anchor to hold onto.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Because you recently moved, that actually opens a special enrollment window for you right now — you don&apos;t have to wait for open enrollment. Let&apos;s take advantage of that today.&rdquo;</p>
              </div>
            </div>

          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '14px' }}>Jeri — this call shows everything you can do. The opening was clean. The C-SNP identification was sharp. The value stack worked — vision, giveback, food card, specialist copay, MOOP. He said yes. That&apos;s a real close built on real relationship work.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '14px' }}>What I want you to think about is what happened after: almost 3 minutes of silence while you worked on getting Manuel on the line. When a consumer has just said yes and then sits in silence that long, that yes starts to feel uncertain. Any time you&apos;re doing a warm transfer, keep him in the conversation: <em>&ldquo;Timothy, while I get my enrollment specialist on — is the dental coverage one of the things you were most looking forward to?&rdquo;</em> Keep his energy up. Don&apos;t let the silence undo the work you already did.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '0' }}>Two other things to add on top of that: annualize your numbers after the yes ($177/mo + $50/mo = $2,700/year — say it out loud), and name the MOV SEP when a consumer says they moved. &ldquo;Because you recently moved, you have a special window right now.&rdquo; That sentence cuts off the October objection before it exists. You have the instincts — these are the finishing touches that convert closes into enrollments.</p>
        </section>

      </div>
    </PageShell>
  )
}
