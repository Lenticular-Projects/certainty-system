'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function KennephSmallsCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/guillermo-cruz" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Guillermo Cruz · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Guillermo Cruz × Kenneph Smalls</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 20, 2026 · 13:27 · Dallas, TX (ZIP 75241) · <strong style={{ color: 'var(--terracotta)' }}>38 / 100</strong> · Missed Opportunity</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Guillermo Cruz called Kenneph Smalls, a 60-year-old Dallas resident on UnitedHealthcare, regarding Medicare Advantage benefits. The consumer was highly sympathetic — physically disabled, managing diabetes, stroke, heart attack, and dementia, crawling to get food, barely affording groceries on $181/month. This was a genuinely upgradeable situation with dental, vision, and transportation benefits available at double the current limits, plus multiple C-SNP qualifying conditions. The call was a missed enrollment.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The agent made a solid compliance opening and a decent discovery pass, uncovering real pain points: the consumer wants new dentures, needs better glasses, and is already straining his $181 grocery card by month's end. The benefit comparison was presented clearly but mechanically — no emotional bridge was built between the consumer's stated suffering and the plan's solution. When the consumer raised a standard plan-change objection at 12:41, the agent immediately surrendered with 'All good. All good. I understand.' — two seconds of resistance and he was gone.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This was a closeable call. The consumer had expressed interest in the dental and vision upgrades, actively engaged in discovery, and had not said no to the benefits themselves — only to 'changing all my insurance.' The agent never addressed that fear directly, never reframed the switch as staying in Medicare while simply unlocking more benefits, and never connected the consumer's clearly stated physical hardship to the urgency of acting now. A one-line reframe would likely have saved this enrollment.</p>
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
              { cat: 'Signal Reading', score: 8, max: 20 },
              { cat: 'Math Breakdown', score: 5, max: 20 },
              { cat: 'Objection Handling', score: 4, max: 15 },
              { cat: 'Call Outcome Quality', score: 2, max: 10 },
              { cat: 'Compliance', score: 9, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums', color: 'var(--terracotta)' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>38/100 reflects a compliance-solid opener with a complete discovery pass that identified real upgrade opportunities, undermined by zero reframe attempt at close and surrender to a standard objection.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Complete and Accurate TPMO Disclaimer (0:23):</strong> The agent delivered the full TPMO disclaimer correctly and within 30 seconds of the call opening — including the specific plan count, alternative resources (Medicare.gov, 1-800-MEDICARE), and plan type menu. This is a compliance requirement executed to the letter.</li>
            <li><strong>Thorough Discovery Across All Benefit Domains (5:44):</strong> The agent systematically covered OTC/grocery, health conditions, dental, vision, transportation, and doctor visit frequency — all in a natural conversational flow rather than a scripted checklist. He uncovered real, specific unmet needs that gave him a clear upgrade pitch.</li>
            <li><strong>Appropriate Tone with a Vulnerable Consumer (7:13):</strong> When the consumer shared that doctors told him he'd never talk or walk again, the agent responded with genuine humanity ('Oh wow, look at you here. You're on the phone with me today. It's a miracle, right?'). This built real rapport with a consumer who needed to feel seen before he could trust.</li>
            <li><strong>Clean, Specific Benefit Comparison (11:00):</strong> The agent presented the benefit upgrade with specific numbers — dental doubled from $2,500 to $5,000, vision from $200 to $500, rides from 36 to 60 one-way trips — without vague language or overselling. The consumer could see exactly what was on the table.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC1 · 12:27, 13:13, 13:18</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Immediate Surrender on First Objection</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>A closeable enrollment. The consumer had said 'yeah, yeah' to the dental and vision upgrades moments earlier. The plan-change fear objection was standard and addressable. The agent never attempted a reframe — he accepted 'I'm alright' as a final answer without a single recovery attempt.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Instead</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>"Mr. Smalls, I hear you completely — and this is the most important thing I can tell you: you are not changing your Medicare. Your Medicare card stays the same. Your doctors stay the same. All we're doing is making sure the plan on top of your Medicare gives you the dentures you told me you want and better glasses."</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC2 · 7:13, 7:17</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Client Gold Ignored — Survival Story</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>The single most powerful emotional anchor on the call was wasted. A consumer who survived a stroke and heart attack against medical expectation is a fighter. That identity was never connected to the enrollment decision.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Instead</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>"Mr. Smalls, you told me doctors said you'd never talk or walk again — and here you are on the phone with me, still fighting for yourself. That's exactly what I want to do for you today. Let's make sure your plan is fighting just as hard for you."</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC3 · 11:00, 11:37</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math Left at Step 1 — No Annualization or Humanization</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>The benefit comparison was presented as a feature list — numbers without meaning. The consumer could not visualize why the upgrade mattered to his specific life. Without Steps 2 and 3, the math had no emotional weight and could not compete with the consumer's fear of changing plans.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Instead</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>"That extra $2,500 toward dental — Mr. Smalls, that's a full set of dentures covered. You told me you want new ones. This plan pays for them. That's $2,800 more in benefits you're leaving on the table every year you stay on the current plan."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Guillermo, you opened this call the right way — full TPMO, recorded line, callback confirmation, decision-maker check. That's a clean compliance setup and it protected you. Your discovery was also genuinely strong — you found out about the dentures, the broken glasses, the food card running out, the stroke and heart attack. You built real rapport with a man who had every reason to hang up on you. That work matters.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Here's where the call broke down: at 12:27, Kenneph said 'I don't want to change all my insurance.' You answered once and then let go. The issue is that objection has a direct answer — 'You are not changing your Medicare. Your Medicare card stays. Your doctors stay. The only thing that changes is you get $2,500 more toward dentures and real prescription glasses instead of store-bought ones.' That's the reframe. It takes 15 seconds. You never tried it. When he repeated the objection at 13:13, you said 'All good. All good.' and ended the call. Guillermo, that consumer told you he was crawling to get food. He told you he wants new dentures. He said 'yeah, yeah' when you described the dental and vision upgrade. He was not a no — he was a fear. Fear is workable. You have to try.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>For your next call, build this into muscle memory: every time a consumer says 'I don't want to change my insurance,' your next sentence is the Medicare frame. Practice it until it's automatic. Also note: this consumer had diabetes, a stroke, and a heart attack — those are qualifying conditions for a Chronic Special Needs Plan. When a consumer discloses multiple chronic conditions, always check whether a C-SNP is available in their ZIP before presenting a standard MA plan.</p>
        </section>

      </div>
    </PageShell>
  )
}
