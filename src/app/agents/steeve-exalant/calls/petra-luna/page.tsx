'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function PetraLunaCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/steeve-exalant" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Steeve Exalant · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Steeve Exalant × Petra Luna</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 20, 2026 · 43:47 · Greenville, South Carolina (ZIP 29607) · <strong style={{ color: 'var(--sage-dark)' }}>75 / 100</strong> · Enrolled (MOV SEP)</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Steeve Exalant successfully enrolled Petra M. Luna, a 79-year-old dual-eligible consumer who had just moved from New York to Greenville, South Carolina, into Health Springs Medicare Advantage with a valid MOV Special Enrollment Period. The enrollment was legitimate and correctly executed — the consumer had relocated from New York the prior Saturday, her existing VNS Health Easy Care plan was New York-specific and non-transferable, and Steeve correctly identified the move as her qualifying event at 0:48.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The call&apos;s defining challenge was managing a highly verbal, frequently distracted consumer who spoke in tangents (missionary work in South Africa, fraud fears, past employment as a psychotherapist, Medicaid transfer concerns) and needed repeated reassurance. Steeve navigated this with genuine patience and warmth for 44 minutes, keeping the enrollment on track without losing her trust. He proactively found two in-network doctors, connected the give-back benefit to her financial anxiety, and delivered thorough post-enrollment support setup including Medicare number, Medicaid transfer information, and his direct line.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The score reflects genuine execution gaps alongside the enrolled outcome: recording consent was not formally requested (opening referenced &ldquo;the Recorder&rdquo; rather than asking directly), no Scope of Appointment was referenced, the $185/month give-back was never annualized to $2,220/year, and the Health Risk Assessment was left incomplete when the consumer disconnected at 43:34. Voice signature obtained cleanly at 30:21 with full name, DOB, and understanding confirmation.</p>
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
              { cat: 'Lead Quality', score: 15, max: 20 },
              { cat: 'Signal Reading', score: 16, max: 20 },
              { cat: 'Math Breakdown', score: 12, max: 20 },
              { cat: 'Objection Handling', score: 11, max: 15 },
              { cat: 'Call Outcome Quality', score: 9, max: 10 },
              { cat: 'Compliance', score: 12, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>75/100 floored at enrollment minimum — raw subscores reflect genuine compliance and math gaps on an otherwise correctly executed enrollment.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Immediate MOV SEP Identification (0:48):</strong> When the consumer said &ldquo;I moved,&rdquo; Steeve immediately followed up with &ldquo;Did you just move?&rdquo; and built the entire enrollment structure around the MOV SEP. Without catching this signal, there may have been no qualifying window for enrollment.</li>
            <li><strong>Give-Back as Financial Hook — Well Deployed (9:24):</strong> Steeve correctly identified the consumer&apos;s financial anxiety at 2:58 (&ldquo;I have nothing&rdquo;) and deployed the $185/month give-back as the primary benefit anchor, connecting it to her prior New York pharmacy card benefit. Familiar-to-new framing reduced resistance to the plan change.</li>
            <li><strong>Patience and Rapport Under a Difficult Consumer (15:30):</strong> Petra Luna was highly verbal, prone to tangents, and distracted throughout 44 minutes. Steeve acknowledged each tangent warmly and returned to enrollment without becoming transactional or dismissive. This rapport management is what kept the enrollment alive.</li>
            <li><strong>Doctor Network Immediately Addressed (15:05):</strong> Upon learning the consumer had no established doctors in South Carolina, Steeve proactively found two nearby in-network providers (Dr. John Adams at 15:08 and Dr. Robert Bayless at 19:27) and committed to sending their information. This removed a practical barrier to enrollment.</li>
            <li><strong>Thorough Compliance Reading (31:43):</strong> Steeve delivered the full enrollment application disclosure clearly and completely — covering disenrollment rules, service area, PFFS language, privacy act, and appeal rights — without skipping or rushing any sections despite a very long call.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC4 · 0:02</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Recording Consent Not Formally Requested</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;I&apos;m the presentation with Medicare and the Recorder&rdquo; at 0:02 is not a recording consent ask. It implies recording but does not constitute the formal &ldquo;do I have your permission?&rdquo; required to clear a CMS audit. This enrollment is otherwise clean — this is the only thing that could put it at risk.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Hi, this is Steeve Exalant, licensed Medicare specialist. Before we begin, this call may be recorded for quality and compliance purposes — do I have your permission to record?&rdquo; First words, every call.</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC4 · 0:00</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Scope of Appointment Not Referenced</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>No SOA was referenced on this call. There is no moment where Steeve asked the consumer to confirm what plan types she agreed to discuss. This is a standard CMS audit item and the second-most common compliance finding after recording consent.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Before we continue, I want to confirm — you reached out about Medicare Advantage plans and prescription drug options today, correct? Great, I&apos;ll note that as our scope of appointment.&rdquo; After the TPMO disclaimer, every call.</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC3 · 9:49, 14:30, 20:53</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math Not Annualized — Give-Back Undersold</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>The $185/month give-back was cited at least five times and never converted to its annual value of $2,220. For a consumer on a fixed income who opened the call saying she has nothing, the annual figure creates a completely different sense of value and urgency. The monthly figure is a feature. The annual figure is a close.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Ms. Luna, that&apos;s $185 every single month — which means Health Springs is putting $2,220 back in your pocket this year. That&apos;s your grocery money for the year, handled.&rdquo; Then pause. That one line turns the enrollment from a smart decision into an obvious one.</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 4 · RC1 · 38:39, 43:34</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Health Risk Assessment Not Completed</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>The HRA was left incomplete because the consumer disconnected. Presenting the HRA at the very end of a 44-minute call — when consumer fatigue is highest — puts it at maximum risk of being cut off. The HRA should be positioned immediately after the voice signature before any post-close conversation.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Perfect — now I have 5 quick health questions required by Health Springs to complete your enrollment. It only takes two minutes and it helps them make sure you get the best care when you come in. Ready?&rdquo; Immediately after the voice signature, before the loyalty anchor.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Client Gold Audit */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Client Gold Audit</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #1 · 2:58 · PARTIALLY_USED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;Are you giving out any money at all? Because I have nothing. I don&apos;t have any money.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>The consumer&apos;s most direct statement of financial fear. The initial response (&ldquo;That&apos;s Medicare — so Medicare is the one that gives that out&rdquo;) was a deflection. Steeve did eventually lead with the give-back starting at 9:24, which partially addressed this gold, but never explicitly said &ldquo;Remember when you told me you have nothing? This plan fixes that.&rdquo; The connection was implicit, not anchored. Stronger deployment: &ldquo;Ms. Luna, you told me you have nothing. I want you to hear this — Health Springs is going to put $185 back on your check every single month. You&apos;re going to have more money after this call than before it.&rdquo;</p>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #2 · 10:22 · LEVERAGED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;I want to go to the dentist.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>Active dental desire stated clearly. Steeve confirmed $0 dental immediately. The one missed step: this was not brought back at the pre-close (28:43). Strongest close anchor on this call; should have been the bridge to the signature. Stronger deployment at close: &ldquo;Ms. Luna, the moment May 1st comes, you can call that dental office and schedule your appointment — routine cleanings and exams are zero dollars on Health Springs. That&apos;s handled.&rdquo;</p>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #3 · 15:39 · MISSED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;I&apos;ve been living in South Africa for 21 years. I&apos;ve never used this stuff.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>This reveals the consumer&apos;s core identity: independent, self-sufficient, hasn&apos;t relied on the healthcare system. She hasn&apos;t needed it — until now, at 79, in a new city with no doctors, no Medicaid in SC yet, and a Medicare card that doesn&apos;t work. Steeve acknowledged it warmly but didn&apos;t use it as an enrollment reason. Stronger deployment: &ldquo;Ms. Luna, you&apos;ve been doing everything on your own for 21 years. You&apos;re clearly someone who doesn&apos;t ask for help unless she needs it. Right now, in a new city with no doctor — you need this. Let me set you up today so when you walk into that doctor&apos;s office, everything is right.&rdquo;</p>
            </div>

          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '14px' }}>Steeve — this was a legitimate win. Dual-eligible mover, valid MOV SEP, correct effective date, and you kept a very chatty 79-year-old on track for 44 minutes without losing her trust or the enrollment. The patience you showed on this call is a real skill — it&apos;s the reason it closed. Take credit for that.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '14px' }}>Here&apos;s the two-line fix that protects every enrollment you do: at the very start of every call, say &ldquo;This call may be recorded for quality purposes — do I have your permission?&rdquo; Then after the TPMO disclaimer, add: &ldquo;Before we go further, I want to confirm — you wanted to discuss Medicare Advantage options today, correct? Great, I&apos;ll note that as our scope.&rdquo; That&apos;s it. Two lines. Without them, every call you close has a compliance flag. With them, you&apos;re bulletproof.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>On the money side: when you present the give-back, always annualize it. You told Ms. Luna &ldquo;$185 a month&rdquo; at least five times. What you never said was &ldquo;$2,220 a year.&rdquo; For a woman who opened the call saying she has nothing, that annual figure is a different emotional statement entirely. And at the close — she told you she has nothing and she wants to go to the dentist. At 28:43, the line was already written: &ldquo;Ms. Luna — you told me you have nothing and you want to go to the dentist. May 1st, that&apos;s handled. Zero dollars, walk right in.&rdquo; You got it anyway because your rapport was strong. Imagine how fast it closes when you add that line.</p>
        </section>

      </div>
    </PageShell>
  )
}
