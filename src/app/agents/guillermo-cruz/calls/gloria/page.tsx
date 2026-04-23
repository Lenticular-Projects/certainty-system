'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function GloriaCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/guillermo-cruz" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Guillermo Cruz · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Guillermo Cruz × Gloria</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 12:17 · Baker County, FL (ZIP 32063) · <strong style={{ color: 'var(--terracotta)' }}>28 / 100</strong> · Missed Opportunity</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Guillermo Cruz called Gloria, a 77-year-old Humana member in Baker County, FL, and never got past data collection. The call stalled completely on the SSN request — Gloria declined three times to provide it, and each time Guillermo backed off without a meaningful pivot. The call lasted 12:17 and never reached Plan Presentation.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The pivotal failure came at 6:26 when Gloria said 'I don't like to give my social a one line.' Guillermo gave a reasonable response about recording and regulations, but then returned to the SSN request at 7:43 — still asking for the full social. When she declined again at 11:30, he said 'I understand, it's okay' and essentially conceded the call. A strong closer would have pivoted entirely away from the SSN and used the HealthyBenefitsPlus card she found at 9:07 — a card she'd never activated — as the hook to build urgency and get her engaged.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This was a closeable call. Gloria was on a plan for 5+ years with no issues, but she had an unactivated flex card worth unknown monthly value, no OTC allowance she knew about, and expressed curiosity about what she might be missing. She was not hostile — she was cautious. A trust-first reframe and a pivot away from SSN collection into a benefits overview could have kept the call alive.</p>
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
              { cat: 'Signal Reading', score: 3, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 5, max: 15 },
              { cat: 'Call Outcome Quality', score: 3, max: 10 },
              { cat: 'Compliance', score: 10, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums', color: 'var(--terracotta)' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>28/100 reflects a call that stalled entirely in Phase II — no plan was presented, no math was done, and the consumer was never given a reason to stay engaged beyond her own curiosity.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Clean TPMO Compliance Opening (0:21):</strong> Guillermo delivered the TPMO disclaimer with correct, complete language — one organization, one product, referenced Medicare.gov and 1-800-MEDICARE and SHIP. This was delivered confidently within the first 34 seconds.</li>
            <li><strong>Callback, Decision-Maker, and Nursing Home — All Confirmed (1:04):</strong> Three compliance checkboxes completed cleanly and efficiently back-to-back at 1:04, 1:15, and 1:24. No hesitation, proper framing, consumer confirmed all three without issue.</li>
            <li><strong>Privacy Objection Reframe — Best Attempt of the Call (8:01):</strong> At 8:01 Guillermo said 'Keep in mind my name is Guillermo Cruz and I'm a licensed agent with MegaCare on a recorded line. This call is regulated with the federal government.' This was his best reframe attempt — credible, specific, and professionally delivered. It wasn't enough to break through, but the instinct was correct.</li>
            <li><strong>Gracious, Professional Close-Out (12:12):</strong> When the call ended, Guillermo said 'Sorry we couldn't help you out today, okay?' and let her go without pressure. This preserved any chance of a future callback and maintained brand reputation.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC1 · 6:26, 7:43, 9:43, 11:22</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>SSN Loop — Stuck on Blocked Path</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Guillermo returned to the SSN request four times after the consumer indicated privacy concern. Each return lowered trust and eroded engagement. By the third refusal (11:30), Gloria was done. The call never advanced past Phase II.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Instead</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>"No problem at all, Gloria — you're right to protect that. Here's what I can do without that: let me pull up what's available in your zip code and show you what other Humana members in Baker County are receiving. You can listen and decide if you want to know more — no personal information needed for this part."</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC2 · 9:07, 9:28, 9:43</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Client Gold Ignored — Unactivated Flex Card</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Gloria found her unactivated HealthyBenefitsPlus card at 9:07 — a card with real monthly value she had never accessed. Guillermo asked about the amount, she said she didn't know, and he returned to the SSN request. The card should have become the anchor of the entire second half of the call.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Instead</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>"Gloria, that card has money loaded on it every single month — and you've never touched it. I can tell you right now what you're getting and whether there's a plan in your area that gives you more. Let me at least show you the numbers — you don't have to do anything today, just see what you might be leaving behind."</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC3 · 0:00</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math Not Attempted</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Gloria was never shown a single number — no benefit comparison, no annualized value, no 'here's what $X per month means to you.' Without math, there was no reason for her to reconsider staying with Humana.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Instead</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>"In Baker County, plans are offering up to $200/month in OTC and grocery allowance — that's $2,400 a year in your pocket. Your current card, once you activate it, may give you much less. Let me show you the comparison."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Guillermo, you opened this call exactly right — compliance was clean, your trust reframe at 8:01 was your best move, and you stayed patient while Gloria spent four minutes looking for her card. That patience is a real strength. But this call should have enrolled, and here's exactly where it went wrong.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>You hit a hard wall at 6:26 when Gloria refused the SSN. The right move is to treat that as a permanent road closure and immediately find a different route — never the same road again. The pivot is: 'No problem at all — let me show you what's available in Baker County right now. You don't need to give me anything for this part — just listen.' Then go straight into a benefits overview for zip 32063. You don't need the SSN to present plans. You need it to enroll. Instead, you returned to the SSN four times over six minutes. Each return lowered her trust.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>At 9:07, Gloria found her unactivated HealthyBenefitsPlus flex card — that was the call. She's been leaving money on the table every single month and didn't even know the card existed. You had the hook: 'Gloria, that card has money on it every month you've never touched. Let me find out how much and whether you're getting the best deal in your area.' She is on Social Security only (3:50). Every dollar matters to her. The unactivated card plus the fixed income is the entire emotional case for switching — and you walked past both of them to ask for the SSN again.</p>
        </section>

      </div>
    </PageShell>
  )
}
