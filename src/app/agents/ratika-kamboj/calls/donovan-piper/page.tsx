'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function DonovanPiperCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/ratika-kamboj" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Ratika Kamboj · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Ratika Kamboj × Donovan Piper</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 19:07 · Naples, FL (ZIP 34120) · <strong style={{ color: 'var(--terracotta)' }}>34 / 100</strong> · Missed Opportunity</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Ratika took an inbound call from Donovan Piper, a Naples, FL Medicare beneficiary with full Medicaid (D-SNP eligible) who was calling specifically to find a better food allowance card. His current Aetna plan had cut his OTC card from $250 to $192 and dropped Walmart acceptance — a concrete, named frustration that served as the perfect enrollment hook. The pivotal moment came at 11:44 when Ratika presented Humana's rollover OTC benefit and began a genuine close, but then softened immediately at 11:46 — 'I know you don't want to change, but you know what? Remember, you're not changing — you're upgrading.' That pivot was the right instinct but landed without conviction, and Piper returned to loyalty to Aetna at 12:18.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The call was further undermined by two structural problems. First, Ratika never identified or leveraged the INT SEP — Piper disclosed full Medicaid eligibility at 0:31 and gave his Medicaid ID at 6:21, yet Ratika never connected this to D-SNP eligibility, which would have given her a year-round, repeatable enrollment pathway with plans specifically built for dual-eligible beneficiaries. Second, the Math Breakdown was absent — Ratika named the $250 Humana OTC benefit and the $229 UnitedHealthcare flex card but never built a side-by-side comparison showing the annualized value gain over Piper's current $192/month plan.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The call ended abruptly at 19:07 mid-sentence with no close attempt, no callback booked, and no enrollment. Given Piper's concrete financial motivation (reduced OTC allowance), his stated need (food card that works at Walmart), and his full Medicaid status, this was a closeable call. Ratika had the Client Gold and the plan solution — she lacked the closing conviction to deploy them.</p>
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
              { cat: 'Signal Reading', score: 5, max: 20 },
              { cat: 'Math Breakdown', score: 2, max: 20 },
              { cat: 'Objection Handling', score: 4, max: 15 },
              { cat: 'Call Outcome Quality', score: 3, max: 10 },
              { cat: 'Compliance', score: 12, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums', color: 'var(--terracotta)' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>34/100 reflects a call where strong compliance execution was undermined by absent math, a missed D-SNP/INT SEP pathway, and a complete failure to close a consumer who had named his exact pain point at the start of the call.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Clean TPMO Compliance Execution (0:50):</strong> Ratika delivered the TPMO three-carrier disclaimer, SOA question, non-obligation statement, and callback permission in correct sequence without sounding scripted. This set a compliant, professional foundation.</li>
            <li><strong>Effective First Objection Reframe (1:38):</strong> When Piper said 'I'm with Aetna and I'm not paying you,' Ratika correctly reframed: she acknowledged Aetna, said she works with them, and positioned the conversation as finding upgrades rather than replacements. This kept the call alive.</li>
            <li><strong>Full Medicaid Data Collected (6:21):</strong> Ratika asked about Medicaid level and collected the Medicaid ID number — critical qualifying data that confirmed full dual eligibility. The data was there; she simply did not connect it to the INT SEP pathway.</li>
            <li><strong>Rollover Feature Presentation (11:05):</strong> Ratika correctly identified and presented the Humana OTC rollover feature as a direct response to Piper's food card need. The feature directly addressed his stated motivation and generated a clarifying question from the consumer — a positive engagement signal.</li>
            <li><strong>Dental Discovery (14:08):</strong> Ratika proactively asked about dental needs and uncovered a specific, costly procedure need (implants and snap-in dentures) — solid needs discovery that identified a second strong enrollment lever.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC6 · 0:31, 6:21, 6:30</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>INT SEP Not Identified — D-SNP Pathway Missed</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Piper had full Medicaid confirmed (6:30 — 'two MBs considered full'). The INT SEP gives Ratika a year-round, repeatable enrollment pathway into a D-SNP — no AEP required, no OEP window. A D-SNP is purpose-built for dual-eligible beneficiaries and would have given Piper the enhanced food/OTC/dental benefits he was calling about with a compliant SEP mechanism.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Instead</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>"Because you have both Medicare and Medicaid, you qualify for a special enrollment period any time of year — it's called an INT SEP. And there are plans built specifically for people in your situation called Dual Special Needs Plans — D-SNPs. Let me check what D-SNPs are available in your zip code right now."</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC2 · 7:27, 8:06, 15:41</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Client Gold Ignored — Walmart Complaint Never Weaponized</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Piper's Walmart complaint was the emotional engine of the call. He called because his card dropped $58/month and Walmart stopped accepting it. Ratika acknowledged this but never built math around it or used it as a closing anchor. The UnitedHealthcare plan at $229/month (vs. Aetna's $192) is a $37/month gain — $444/year — with Walmart access restored. This specific, concrete argument was never made.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Instead</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>"Mr. Piper, right now Aetna gives you $192 a month and you can't use it at Walmart. This plan gives you $229 a month — that's $37 more every single month — and you CAN use it at Walmart. That's $444 more per year. Are you ready to get this started today?"</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC1 · 12:18, 12:25, 19:05</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Loyalty Objection Surrendered — Call Ended Without Close</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>When Piper said 'I'm staying with Aetna because I've been with them for this long,' Ratika validated the loyalty and moved to presenting a second plan — but the frame was never broken. The consumer never felt the urgency of switching or the cost of staying. The call drifted into a second plan presentation that also ended without a close attempt.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Instead</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>"Aetna already dropped your card from $250 to $192 and took away Walmart. What does loyalty get you when the plan keeps cutting your benefits every year? The plan I'm showing you right now gives you $229 a month — that's $37 more — AND Walmart back. Let me get this started today."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Ratika, you had a call today that was yours to win — and I want you to understand exactly why it ended the way it did, because the fix is specific and learnable.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>You had all three pieces of the puzzle in your hands. First: Piper told you at 0:31 that he has full Medicaid. When you confirmed 'two MBs considered full' at 6:30, you had the INT SEP activated — a year-round, repeatable enrollment pathway into a D-SNP. You never named it. The entire enrollment attempt had no compliant pathway behind it because you didn't identify the mechanism that makes the enrollment legal. Before you present any plan to a dual-eligible beneficiary, you need to say: 'Because you have both Medicare and Medicaid, you qualify to enroll in a D-SNP any month of the year — that's the special plan I want to show you.'</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Second: Piper handed you the close at 7:27 when he said his card dropped from $250 to $192 and Walmart stopped accepting it. That's a 23% cut and a loss of grocery access. That's the financial betrayal you needed to name. When you got to the UnitedHealthcare plan at 15:31, the close should have been: 'Mr. Piper, right now Aetna gives you $192 a month and you can't use it at Walmart. This plan gives you $229 — that's $37 more every month, and Walmart is back. That's $444 more per year. Are you ready to get started today?' You presented the features. You never built the math. Features list doesn't close — specific dollars with a named problem attached closes.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Third: when Piper said 'I'm staying with Aetna because I've been with them for this long' at 12:18, you validated his loyalty instead of breaking the frame. The line is: 'Mr. Piper, Aetna already cut your card by $58 a month and took away Walmart. Is that loyalty?' Never validate a loyalty objection from a plan that has already let the consumer down.</p>
        </section>

      </div>
    </PageShell>
  )
}
