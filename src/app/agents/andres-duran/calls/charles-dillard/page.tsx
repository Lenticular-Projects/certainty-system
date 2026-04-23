'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function CharlesDillardCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/andres-duran" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Andres Duran · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Andres Duran × Charles Dillard</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 16:32 · Louisiana (ZIP 71292) · <strong style={{ color: 'var(--terracotta)' }}>32 / 100</strong> · Missed Opportunity</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Charles Dillard, an 84-year-old veteran in West Monroe, Louisiana, called in response to an advertisement about a grocery/food card benefit. He was on a Blue Cross Blue Shield plan and had Medicare Part A and B. Andres explained the food card is tied to Medicare Advantage health insurance and that Charles would have to switch plans to get it — which Charles declined because he wanted to keep his BCBS coverage and had a trusted insurance agent friend.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The critical failures were two surrendered objections in 90 seconds (at 5:01 and 5:47), zero math presentation despite Charles stating 'I could use help with groceries' at 7:09, and failure to identify a CSN SEP pathway through his aortic valve replacement and ongoing cardiology care. Charles also revealed he is a veteran accessing VA services — an enrollment window Andres partially identified but then abandoned.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This was not an uncloseable lead. Charles called himself after missing an earlier callback and stayed on the call for 16+ minutes. He explicitly stated he could use grocery help. The outcome was attributable to surrendered objections and process errors, not consumer unwillingness.</p>
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
              { cat: 'Lead Quality', score: 7, max: 20 },
              { cat: 'Signal Reading', score: 4, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 4, max: 15 },
              { cat: 'Call Outcome Quality', score: 5, max: 10 },
              { cat: 'Compliance', score: 12, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>32/100 reflects two surrendered objections and zero math in a call where the consumer was genuinely interested in a specific benefit — this was not fully uncloseable.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Accurate Food Card Explanation (6:28):</strong> Andres clearly and accurately explained that the grocery card is a health insurance benefit tied to Medicare Advantage, not a standalone government benefit. This was honest and correct framing.</li>
            <li><strong>Veteran Plan Identification (12:18):</strong> Andres recognized Charles's veteran status and pivoted to present veteran-specific plan options with real benefit numbers ($100–$185/month Social Security giveback, $200/quarter OTC). This showed product knowledge and signal recognition.</li>
            <li><strong>Rapport During Personal Disclosure (9:16):</strong> When Charles began sharing personal history (wife's passing, military service, medical journey), Andres responded warmly without rushing him, maintaining rapport and keeping Charles on the call through the full conversation.</li>
          </ul>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Andres, you had a real shot with Charles Dillard today and left it on the table. Let me be direct: two surrenders in 90 seconds — 'okay, okay, I hear you' at 5:01 and 'I guess I'm out of options' at 5:47 — cost you this enrollment. Charles literally called you back himself because he wanted the grocery card. That's not an uncloseable lead. That's someone who needed you to show up with confidence, not accommodation.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>Here's what Charles told you that you didn't use: He's 84, widowed since 2014, managing everything alone, needs grocery help, has a heart condition from an aortic valve replacement, and is a veteran. That's not small talk — that's your sales story. The line that closes Charles is: 'Mr. Charles, you've been taking care of yourself since 2014. Let me take this one thing off your plate today. I can get you a grocery card and $1,200 a year back in your pocket. That's what you called about — let's get it done.' You never said anything close to that.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>Two things to drill before your next call: First, memorize your reframes for 'I want to keep what I have' and 'I have an agent friend.' Both objections are coming again — they're not surprises. Second, Charles mentioned his heart condition. That's a CSN SEP — a year-round enrollment window for people with cardiovascular conditions. When someone says 'I had my aortic valve replaced,' the next words out of your mouth are: 'That actually qualifies you for a specialized plan. Let me check if it's in your area.' That's not a nice-to-have — that's a skill that makes you money year-round when everyone else is waiting for AEP.</p>
        </section>

      </div>
    </PageShell>
  )
}
