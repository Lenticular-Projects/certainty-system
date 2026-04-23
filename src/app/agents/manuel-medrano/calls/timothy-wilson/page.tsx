'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function TimothyWilsonCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/manuel-medrano" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Manuel Medrano · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Manuel Medrano × Timothy Wilson</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 22, 2026 · 34:06 · Lake Placid, Florida (Highlands County) · <strong style={{ color: 'var(--terracotta)' }}>48 / 100</strong> · Missed Opportunity</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Timothy Wilson came in as a warm transfer — 18 minutes already on the phone before Manuel picked up, pre-qualified for a C-SNP based on a cardiac condition and what the system flagged as dual eligibility. Manuel identified a Humana Gold Plus C-SNP with a $177/month Part B giveback within the first three minutes, correctly collected a long complex medication list (he&apos;s a liver transplant recipient on tacrolimus and multiple post-transplant medications), and moved toward enrollment by the 20-minute mark.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The sale ended at 27:50 when Timothy asked if the plan was an HMO and Manuel confirmed it was. Timothy had a prior negative experience — &ldquo;When I got into Humana Gold Plus, it screwed everything up because majority of the doctors don&apos;t take that card&rdquo; (30:05). That statement was the entire reason for the resistance. Manuel responded by checking network availability and confirming that the Adventist hospital was in network — the right data, at the wrong moment. The consumer needed to feel heard before he could hear anything else. Manuel kept presenting facts while Timothy kept shutting down, and the call ended abruptly at 34:06.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This is a coaching note Jonathan added specifically for this call: when Timothy brought up his concerns about HMOs, the move was to acknowledge it and redirect — not ask him to walk through what went wrong. The more he talks about the past bad experience, the more he talks himself back into it. Acknowledge it once, then bring the conversation forward. Don&apos;t let it live in the past.</p>
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
              { cat: 'Lead Quality',         score: 8,  max: 20 },
              { cat: 'Signal Reading',       score: 8,  max: 20 },
              { cat: 'Math Breakdown',       score: 9,  max: 20 },
              { cat: 'Objection Handling',   score: 2,  max: 15 },
              { cat: 'Call Outcome Quality', score: 10, max: 10 },
              { cat: 'Compliance',           score: 11, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>48/100 — the product was right and the math was there, but 2/15 on objection handling reflects a critical failure: logic used to counter an emotional objection. The sale was available until 27:50.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Manuel Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Fast Product Identification (2:33):</strong> Manuel had the C-SNP with a $177/month Part B giveback surfaced and described within the first three minutes. That&apos;s $2,124/year back to a consumer on Medicare. The instinct was right and the speed was right.</li>
            <li><strong>Diligent Medication Collection (4:36–12:37):</strong> Timothy&apos;s medication list was long and complex — tacrolimus, mycophenolate, prednisone, tamsulosin, losartan, mirtazapine, carvedilol. All post-transplant, all critical. Manuel worked through it patiently and completely. This protects Timothy from a coverage gap he never anticipated.</li>
            <li><strong>Clear Benefit Walkthrough (20:41):</strong> During the application phase, Manuel covered premiums, copays, drug tiers, MOOP, and specialty visit costs clearly and methodically. Timothy said he understood the benefits before objecting — the communication was clean.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC2 · 27:50, 30:05, 30:13</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Logic Response to Emotional Objection</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>At 27:50, Timothy asked if the plan was an HMO and raised his concern about the Humana Gold Plus not being accepted in his county. At 30:05, he named the emotion: &ldquo;it screwed everything up.&rdquo; Manuel responded by checking whether the Adventist hospital was in network. Correct data — wrong sequence. You can&apos;t fix an emotional objection with a fact. The fact might be true and still not land. The consumer had to feel heard before he could hear anything.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Mr. Wilson, I hear you — a lot of people have had issues with certain HMO plans, and the last thing I want is to repeat that for you. What I want to show you is what&apos;s different about this one specifically and what it actually looks like for you day-to-day. Before we go another step, let&apos;s pause and confirm your most important doctors and hospitals against this exact plan — not the one from two years ago. If they&apos;re not in, I won&apos;t ask you to move.&rdquo;</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC1 · 29:03, 31:19</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Past Experience Accepted as Present Fact</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Timothy&apos;s objection was &ldquo;the Humana Gold Plus doesn&apos;t work in my area.&rdquo; That was true of his experience two years ago. Manuel never created a distinction between the old plan and this specific C-SNP. He confirmed the plan name (&ldquo;Humana Gold Plus HMO&rdquo;) without framing it as a different, specialized product — which validated Timothy&apos;s fear instead of separating it.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;I understand why you feel that way — and that experience was real. What&apos;s important to know is that this is a Chronic Special Needs Plan, which has a different, specialized network than the standard Gold Plus plan you had before. They&apos;re not the same product. Let&apos;s verify your doctors against this specific plan&apos;s network right now — not the one from two years ago.&rdquo;</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC3 · 32:32</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math Annualized Too Late — Never Humanized</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>The $177/month giveback was stated clearly at 3:11. The annualization — $2,124/year — didn&apos;t come until 32:32, used as a last-ditch attempt after Timothy had already made his final decision. The savings were never connected to anything real in Timothy&apos;s life. A transplant recipient with a complex medication list and a fixed $206 Medicare Part B bill has specific things that $2,124/year could mean to them.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>Early in the call, after stating the giveback: &ldquo;That&apos;s $177 a month back to you — over $2,100 a year, tax-free, coming back from your Part B premium every month. With the medications you&apos;re managing post-transplant, that&apos;s real money that stays with you.&rdquo; Build the value before the resistance, not after it arrives.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Gold Audit */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Client Gold Audit</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #1 · 30:05 · MISSED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;When I got into Humana Gold Plus, it screwed everything up because majority of the doctors don&apos;t take that card.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>This is the single most important statement on the call — the &ldquo;why&rdquo; behind everything that followed. Manuel focused on the logic (&ldquo;doctors don&apos;t take that card&rdquo;) and skipped the emotion (&ldquo;screwed everything up&rdquo;). The emotion was the unlock. Deploy: &ldquo;That sounds incredibly frustrating — the last thing you want is to go through that again. I completely understand. Let&apos;s pause right here. My job is to make sure what I&apos;m showing you is different, and we&apos;re going to confirm that together before anything changes.&rdquo;</p>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #2 · 13:51 · MISSED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;Tampa General did the liver transplant.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>A liver transplant is a life-defining medical event. The ongoing relationship with Tampa General&apos;s transplant team isn&apos;t optional — it&apos;s permanent. Manuel acknowledged it factually but never made it the anchor for the network verification or the urgency frame. Deploy: &ldquo;Thank you for sharing that. Ensuring your continued care with the transplant team at Tampa General is the first thing I want to confirm. Let&apos;s verify they&apos;re a preferred provider on this plan before we go any further.&rdquo;</p>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '16px' }}>Manuel — you picked up a tough situation on this one. Timothy had already been on the phone for 18 minutes by the time you got him, and he came in with a specific fear baked in. The product was right. The math was right. The value was real. The one thing that ended this call was what happened at 27:50.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '16px' }}>When Timothy brought up his concerns about HMOs, the move was to acknowledge it and redirect — don&apos;t ask him to walk through what went wrong. The more he talks about the past bad experience, the more he talks himself back into it. Instead: &ldquo;I hear you — a lot of people have had issues with certain HMO plans. What I want to show you is what&apos;s different about this one specifically and what it actually looks like for you day-to-day.&rdquo; Acknowledge it once, then bring the conversation forward. Don&apos;t let it live in the past.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The specific script for the Scared Switcher: &ldquo;Mr. Wilson, that sounds incredibly frustrating — and you&apos;re right to be cautious. I don&apos;t want to repeat that for you. Before we go one more step, let&apos;s pause the application and confirm your most important doctors and hospitals against this exact plan. If they&apos;re not in network, I won&apos;t ask you to move. If they are, you&apos;ll know it before anything changes.&rdquo; That gives him control, and control is what he needed.</p>
        </section>

      </div>
    </PageShell>
  )
}
