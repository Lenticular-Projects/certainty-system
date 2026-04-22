'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function ThomasCoulsonCallPage() {
  return (
    <PageShell signal="amber">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/robert-pegler" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Robert Pegler · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Robert Pegler × Thomas Coulson</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 05:30 · Georgia (ZIP 30809) · <strong style={{ color: 'var(--mustard-dark)' }}>50 / 100</strong> · Not Enrolled (Uncloseable)</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Thomas called in response to an advertisement about a $44 Part B give-back addition to his Social Security benefit. Robert correctly identified this as a Medicare Advantage product, confirmed Parts A and B, and established the Georgia ZIP code. Compliance disclosures were delivered cleanly within 90 seconds.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The pivotal issue emerged at 1:44 when Thomas revealed he has a caseworker who assists with decisions but wasn&apos;t present. His statements throughout suggested cognitive difficulty — memory problems, couldn&apos;t recall his appointment time, needed to reach a &ldquo;security office&rdquo; to verify what he was supposed to be doing. These signals made it clear Thomas could not and should not make a plan change decision independently.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Robert correctly recognized the situation, offered a conference-call option with the caseworker, and arranged a callback. This is a correct no-sale — pushing enrollment on a cognitively impaired, proxy-dependent consumer would have been an ethical and compliance violation. The callback handoff was handled professionally.</p>
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
              { cat: 'Signal Reading', score: 9, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 10, max: 15 },
              { cat: 'Call Outcome Quality', score: 8, max: 10 },
              { cat: 'Compliance', score: 10, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>50/100 near the top of the UNCLOSEABLE range — reflects strong compliance and outcome judgment on a call that was correctly not closed.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Clean Compliance Execution (0:39):</strong> TPMO disclaimer, plan count, alternative resources, Scope of Appointment, callback consent — all delivered in under 90 seconds without sounding scripted.</li>
            <li><strong>Correct Decision-Maker Identification (1:44):</strong> Asked &ldquo;do you normally make your own healthcare decisions, or do you have someone who helps you out?&rdquo; When caseworker dependency emerged, adjusted call path instead of pushing forward.</li>
            <li><strong>Ethical Outcome Determination (4:34):</strong> Recognized Thomas couldn&apos;t make a meaningful enrollment decision independently — memory issues, absent caseworker, &ldquo;security office&rdquo; verification need — and chose not to push.</li>
            <li><strong>Professional Callback Handoff (5:01):</strong> Texted contact info, confirmed full name, ended warmly. Consumer left knowing who called, what it was about, and how to reach back.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC1 · 2:54</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>SEP Probe Skipped</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>You mentioned exceptions exist for changing plans outside open enrollment but never asked the specific questions that would reveal a qualifying event. If Thomas has a chronic condition or receives Medicaid, a SEP window may have been open. The call ended with no knowledge of his eligibility status.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Real quick, Thomas — do you have any ongoing health conditions like diabetes, heart disease, or COPD? And are you on Medicaid or getting any extra help with your Medicare costs?&rdquo; These two questions take 20 seconds and could reveal a year-round SEP.</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC1 · 4:42, 5:13</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Callback Not Anchored</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Callback arranged with no specific time window. Unanchored callbacks convert at a fraction of the rate of scheduled ones. Thomas has memory issues and a caseworker who may not be easy to coordinate — without a specific time, this lead is likely to go cold.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Thomas, when do you think your caseworker will be available — later today or tomorrow? I want to make sure I call at a time that works for both of you.&rdquo;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Gold Audit */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Client Gold Audit</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #1 · 0:08 · PARTIALLY_USED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;I guess I applied for $44 added to my Social Security.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>The $44 give-back is a financial motivator. You acknowledged it and confirmed plan type but didn&apos;t develop it into a benefit anchor. On the callback with the caseworker, this number should lead the conversation — &ldquo;$44 a month, $528 a year, nothing else changes.&rdquo;</p>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #2 · 1:54 · MISSED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;She didn&apos;t show up today, and now I got to tell her the security because I spoke to her on the phone, but I wouldn&apos;t feel about it because I&apos;m not in the position to go and find it.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>Thomas revealed vulnerability and fear of acting without caseworker approval. The emotional hook isn&apos;t the $44 — it&apos;s doing the right thing, with the right person&apos;s blessing. This is the line for the callback: &ldquo;You want to make sure your caseworker is in the loop — that&apos;s exactly the right instinct.&rdquo;</p>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Robert — this was a correct no-sale and you handled it with discipline. The caseworker identification at 1:44 is exactly what protects the enrollment and the consumer. For calls like this, the 20-second SEP probe before accepting the callback is the next step up — two questions (&ldquo;ongoing conditions?&rdquo; and &ldquo;Medicaid?&rdquo;) can turn a cold callback into a warm one with the caseworker ready. And anchor every callback to a specific time. Unscheduled callbacks on a memory-impaired consumer go cold fast.</p>
        </section>

      </div>
    </PageShell>
  )
}
