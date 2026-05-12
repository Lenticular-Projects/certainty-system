'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function JesseBurdetteCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/karimah-ali" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Karimah Ali · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Robert Pegler × Jesse Burdette <span style={{ fontSize: '1.25rem', color: 'var(--ink-60)' }}>(Karimah Ali assist)</span></h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 20, 2026 · 12:08 · Knoxville, TN (ZIP 37914) · <strong style={{ color: 'var(--terracotta)' }}>48 / 100</strong> · Missed Opportunity (C-SNP · CSN)</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This was Robert Pegler&apos;s call — Karimah was the assist agent, consulted when Robert tried to transfer Jesse to a Humana specialist. Robert identified Jesse Burdette as a CSN-qualified C-SNP prospect (ASIM diagnosis, CPAP user) with zero OTC benefit on his current Humana Gold Plus plan. Robert surfaced the $117/month UHC C-SNP option, annualized it correctly at 7:09 (&ldquo;over the course of a full year, we&apos;re talking about over $1,400 in assistance&rdquo;), and had everything needed to close. Then Jesse said &ldquo;I like my Humana&rdquo; and Robert surrendered instantly — offering a transfer with no reframe attempt. Karimah was pulled in to check if she had Humana in Tennessee. The transfer didn&apos;t connect and the call ended with a speculative callback promise to Manuel, which Jesse himself warned he might not answer.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The primary coaching takeaway from this call is for Robert, not Karimah. But for Karimah: when an internal transfer comes to you mid-call, you have one opportunity to re-engage the consumer with a warm handoff. &ldquo;Hi Jesse, I have some Humana options in Tennessee — let me check what&apos;s available for your specific situation&rdquo; is a more powerful entry than a cold hold. The consumer had been warm and engaged for 12 minutes. That warmth was available to transfer.</p>
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
              { cat: 'Lead Quality', score: 8, max: 20 },
              { cat: 'Signal Reading', score: 10, max: 20 },
              { cat: 'Math Breakdown', score: 9, max: 20 },
              { cat: 'Objection Handling', score: 4, max: 15 },
              { cat: 'Call Outcome Quality', score: 4, max: 10 },
              { cat: 'Compliance', score: 13, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>48/100 — primary agent (Robert Pegler). Competent technical execution through discovery and presentation; complete surrender at the only objection point. Karimah&apos;s assist role was limited.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Sharp CSN signal read (3:53):</strong> Jesse mentioned ASIM — Robert immediately connected it to a Chronic Special Needs Plan, confirmed the C-SNP pathway, and built the entire plan presentation around the chronic condition qualifier. This is correct clinical awareness and it was the strongest technical moment of the call.</li>
            <li><strong>Math Step 2 executed correctly (7:09):</strong> Robert stated $117/month and then annualized it — &ldquo;over the course of a full year, we&apos;re talking about over $1,400 in assistance.&rdquo; He also offered both the premium option ($27.30/month, $117 OTC) and the zero-premium option ($0/month, $85 OTC), giving Jesse a real choice.</li>
            <li><strong>Clean compliance execution (0:40):</strong> TPMO disclaimer with carrier count, Medicare.gov reference, SHIP mention, scope of discussion, callback consent, decision-maker, institutional setting — all completed within the first two minutes. One of the cleanest compliance openings in the agent pool.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC1 · 8:26</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Carrier Loyalty Objection — Complete Surrender, No Reframe</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Jesse said &ldquo;I like my Humana&rdquo; and Robert&apos;s response in under 5 seconds was: &ldquo;Okay, yeah, we have a lot of clients that say the same thing. So we have Humana agents on hand.&rdquo; The $1,400/year C-SNP opportunity was abandoned without a single reframe attempt. Carrier loyalty is the most common Medicare objection — it has a known, reliable reframe: anchor to what the consumer is leaving on the table, then ask for two more minutes.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Jesse, I hear you on Humana — before I transfer you, let me ask one thing. Your current Humana plan gives you zero on the OTC card right now. This plan gives you $117 a month — $1,400 a year — for groceries and health supplies you&apos;re already buying. Can we spend two minutes looking at that number before you decide?&rdquo;</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC5 · 8:53–12:00</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Failed Handoff — 3+ Minute Hold, Speculative Callback</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Jesse was put on hold for over three minutes while Robert attempted to reach a Humana agent. The hold eroded all the goodwill built during the call. The call ended with a callback from Manuel — which Jesse explicitly warned he might not answer. If a transfer is necessary, confirm the callback protocol before the hold, not after.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Jesse, let me have our Humana specialist call you right back — usually within 10 minutes. Is 865-740-2009 the best number? And should they text you first so you know to pick up?&rdquo; Get the commitment before the hold, not after.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>The primary coaching from this call belongs to Robert Pegler — the discovery, signal reading, and math were solid, and the surrender at the carrier loyalty objection is what cost this enrollment. For Karimah as the assist agent: when an internal transfer arrives, that consumer has already been warmed up. Use it. A warm handoff that re-anchors the value (&ldquo;Jesse, I see you on the Humana question — let me take a look at what Humana has for your situation in Knoxville and compare it against what Robert showed you&rdquo;) keeps the conversation alive and positions you as someone who is looking out for the consumer, not just completing a transfer.</p>
        </section>

      </div>
    </PageShell>
  )
}
