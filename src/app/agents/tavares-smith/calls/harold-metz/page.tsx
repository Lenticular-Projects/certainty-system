'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function HaroldMetzCallPage() {
  return (
    <PageShell signal="amber">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/tavares-smith" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Tavares Smith · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Tavares Smith × Harold Metz</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 20, 2026 · 41:25 · Tulsa, OK (ZIP 74145) · <strong style={{ color: 'var(--mustard-dark)' }}>73 / 100</strong> · ENROLLED</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Harold Metz is a newly minted Medicare beneficiary (Part B effective February 2026) who had just relocated from an apartment flood situation to Tulsa, Oklahoma — making this an OEPN-driven enrollment under the new-to-Medicare mover pathway. Harold called in asking about a $3,400 food card. Tavares navigated a mid-call pivot when the initially targeted give-back plan didn&apos;t fit Harold&apos;s situation (no Social Security income yet), and ultimately enrolled Harold in the Devoted Choice Give Back 006 PPO with a May 1, 2026 effective date.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The enrollment was technically correct. The coaching opportunity is in the execution gaps: nearly four minutes of unexplained hold time between 12:00 and 15:57, a benefits presentation that recited numbers without anchoring any of them to Harold&apos;s three stated needs (no car, no teeth, housing instability), and zero replacement math after the Social Security pivot. Harold enrolled on trust. With the right deployment, he would have enrolled on conviction.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>One compliance note: at 28:17 Harold said &ldquo;I don&apos;t know anything about that&rdquo; in response to the Medicare Advantage vs. Medigap disclosure. Tavares&apos; explanation — &ldquo;this isn&apos;t a supplement plan, that&apos;s the best way I could put it&rdquo; — was legally insufficient. Harold agreed without demonstrating understanding. This must be resolved before confirmation on any future compliance disclosure where a consumer expresses confusion.</p>
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
              { cat: 'Lead Quality',        score: 15, max: 20 },
              { cat: 'Signal Reading',       score: 13, max: 20 },
              { cat: 'Math Breakdown',       score: 10, max: 20 },
              { cat: 'Objection Handling',   score: 12, max: 15 },
              { cat: 'Call Outcome Quality', score: 10, max: 10 },
              { cat: 'Compliance',           score: 13, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>73/100 — enrolled on the correct SEP with appropriate plan selection. Points lost on hold time, zero replacement math after the plan pivot, and the MA/Medigap compliance soft-spot.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Immediate Pivot When Plan Didn&apos;t Fit (11:49):</strong> When Harold disclosed no Social Security income — making the Part B give-back plan irrelevant — Tavares pivoted without hesitation or embarrassment. Went back to research, found a better fit, and maintained Harold&apos;s confidence throughout. This is confident agent behavior under unexpected qualification constraints.</li>
            <li><strong>Doctor Network Verification (8:43):</strong> Tavares found Dr. John Caradini in the system, confirmed his full address, and honestly disclosed the system warning about new patient acceptance at 29:02. Transparent doctor network handling builds trust and protects against post-enrollment complaints.</li>
            <li><strong>Consumer Accessibility Awareness (25:32):</strong> Tavares noted Harold&apos;s hearing difficulty and vision limitation and selected large print for plan materials. Unprompted accessibility accommodation demonstrates attentiveness beyond the transaction.</li>
            <li><strong>Post-Enrollment Loyalty Anchor (40:13):</strong> Closed with &ldquo;if another health insurance agent calls you about your plan and it&apos;s not me, I want you to hang the phone up.&rdquo; Proactive retention behavior that reduces churn risk from competitor outreach during OEP and AEP.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC2 · 9:51, 6:31, 10:32</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Client Gold Registered, Not Deployed</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Harold gave three powerful signals during discovery. At 9:51: &ldquo;Now that I&apos;m on Medicare, and I&apos;m back in a stable address...&rdquo; — his emotional anchor for the entire call, revealing that this enrollment represents a fresh start after housing instability and an apartment flood. At 6:31: no vehicle, relies on buses — a daily healthcare access constraint. At 10:32: no teeth, wants dentures someday — a future financial concern. None of these were referenced once during the six-minute benefits presentation at 17:42. Harold got a list of numbers instead of a solution to his life.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Harold, you told me three things that matter — your doctor Dr. Caradini, getting around without a car, and eventually getting dentures. Let me walk through exactly how this plan covers each of those.&rdquo; Anchor every benefit to a stated need. Signal reading is only complete when the signal is deployed.</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC3 · 11:49, 15:57</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>No Replacement Math After Plan Pivot</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>The give-back annualization at 11:39 was correct — $160/month converted to $1,920/year. Then Harold disclosed no Social Security and the math was abandoned entirely. When Tavares pivoted to the Devoted plan at 15:57, the rationale was &ldquo;strongest coverage in your area&rdquo; — with zero numbers to support it. Harold&apos;s prior plan had been giving him $50/quarter ($200/year OTC). The Devoted plan&apos;s $0 PCP copay was never compared to anything. Harold enrolled on the agent&apos;s recommendation alone.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Harold, your old plan was giving you $50 every three months — $200 a year. This plan: $0 copays every time you see Dr. Caradini. If you see him four times this year, that&apos;s four visits at zero dollars — compared to plans that charge $15 or $20 each time. And once Social Security kicks in, that $160 a month starts automatically. You&apos;re not giving up anything — you&apos;re building a better foundation.&rdquo;</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC4 · 28:17, 31:28</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Compliance Disclosure Handling — Two Soft Spots</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>At 28:17, Harold said &ldquo;I don&apos;t know anything about that&rdquo; when asked about Medicare Advantage vs. Medigap. The explanation given — &ldquo;this isn&apos;t a supplement plan, that&apos;s the best way I could put it&rdquo; — is not an adequate response. Harold accepted without demonstrating genuine understanding. At 31:28, Tavares framed the CMS boilerplate as &ldquo;I don&apos;t know why the government makes us do it, but a lot of this stuff won&apos;t even apply.&rdquo; This signals to the consumer that the disclosures don&apos;t matter — a compliance culture risk and an audit risk.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>On MA vs. Medigap: &ldquo;Harold, a supplement plan adds onto Medicare. This plan — Medicare Advantage — replaces Medicare. Devoted Health pays your bills instead of Medicare directly. Same government coverage, different delivery. You with me on that?&rdquo; Wait for genuine confirmation. On boilerplate: &ldquo;Harold, I&apos;m going to walk you through your rights and protections as a member — this covers what Devoted is required to do for you.&rdquo;</p>
              </div>
            </div>

          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '14px' }}>Tavares — this was a solid enrollment and the Social Security pivot at 11:49 is worth calling out specifically. A lot of agents fumble when the lead plan falls apart mid-call. You went back to research, made a decision, and brought Harold along without making him feel like a problem. That&apos;s composure under pressure.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '14px' }}>Here&apos;s what to sit with: Harold gave you three gifts during discovery that you never used. He told you at 9:51 that Medicare and a stable address mean he&apos;s finally settled after an apartment flood disrupted his life — that&apos;s the emotional anchor for the entire enrollment. He told you he has no car and relies on buses. He told you he has no teeth and wants dentures someday. When you moved into the benefits read at 17:42, Harold got a list of numbers instead of a solution to his specific situation. The fix is simple: after discovery, open your presentation with &ldquo;Harold, you told me three things that matter — let me show you exactly how this plan handles each one.&rdquo;</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>On the compliance moment at 28:17: when a consumer says &ldquo;I don&apos;t know anything about that&rdquo; in response to a required disclosure, you must stop and explain it clearly before moving forward. A two-sentence plain-English version of the MA vs. Medigap distinction — then wait for a real &ldquo;I understand&rdquo; before proceeding. You&apos;re close to being very good at this. The Client Gold deployment and the compliance clarity are the two things that take you there.</p>
        </section>

      </div>
    </PageShell>
  )
}
