'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function RoyBumgarnerCallPage() {
  return (
    <PageShell signal="amber">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>

        <Link href="/agents/josner-saintil" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Josner Saintil · Weekly Brief</Link>

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Josner Saintil × Roy Bumgarner</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 57:46 · Rutherford County, NC · <strong style={{ color: 'var(--sage-dark)' }}>75 / 100</strong> · ENROLLED</p>
        </div>

        {/* Compliance Alert Banner */}
        <div style={{ marginBottom: '40px', padding: '18px 20px', background: 'rgba(201, 85, 64, 0.08)', borderRadius: '10px', border: '2px solid var(--terracotta)' }}>
          <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 8px' }}>Compliance Alert · HIGH SEVERITY · 15:53</p>
          <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>DST cited as standalone SEP — this is a prohibited practice</p>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 12px' }}>At 15:53 Josner stated: &ldquo;We&apos;ll use the recent winter storm that had happened in North Carolina here, because I know it affected you and others.&rdquo; DST (Disaster Special Enrollment Period) is not a standalone SEP — it only extends a pre-existing enrollment window the beneficiary already missed due to the disaster. Agents cannot proactively raise DST as a qualifying basis. Doing so on a recorded line creates audit exposure and potential disenrollment risk.</p>
          <div style={{ padding: '10px 14px', background: 'rgba(255,255,255,0.5)', borderRadius: '6px', borderLeft: '3px solid var(--terracotta)' }}>
            <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 4px' }}>Correct Pathway — INT SEP</p>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--ink)', margin: 0 }}>Roy has partial Medicaid (QI level) and is enrolling into a D-SNP. That qualifies under <strong>INT (Income-Related Change SEP)</strong> — available any month of the year, no external event required, fully audit-proof. <em>The correct language: &ldquo;Since you have Medicaid, you actually qualify to switch into this plan any time of year. That&apos;s a special qualification for people in your situation — we don&apos;t need any other reason.&rdquo;</em></p>
          </div>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Josner enrolled Roy Bumgarner into UnitedHealthcare Dual Complete North Carolina D001 HMO POS D-SNP, effective May 1, 2026, at a $0 net premium (QI Medicaid covers the $25.30 listed premium). Roy called in frustrated about his current WellCare plan — specifically that his food allowance card was unusable at Walmart and that UnitedHealthcare had previously paid his primary care doctor while WellCare would not. Josner correctly identified both emotional anchors — the broken food card and the doctor network gap — and structured the case around restoring what Roy already knew worked.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The pivotal moment came at 10:37 when Josner confirmed Dr. Patrick Salmon was in-network on UHC and framed the switch as fixing a problem rather than selling something new. At 10:50 he stated he would not proceed if Salmon wasn&apos;t covered — a trust-building move that eliminated Roy&apos;s core objection before it could surface. Roy&apos;s resistance was minimal throughout; he was already predisposed to return to UHC. Josner capitalized by moving efficiently to application, and the call enrolled cleanly with voice signature at 48:50.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Two compliance issues shadow the enrollment. First, Roy&apos;s SSN was collected at 3:38 before Josner requested eligibility permission at 3:58 — a sequencing violation. Second, and more seriously, Josner cited the winter storm as the SEP basis at 15:53, invoking DST as a standalone qualifying event — a practice explicitly prohibited by CMS. Roy qualifies for INT SEP (Medicaid beneficiary enrolling into D-SNP), which is available any month and requires no external event. The enrollment may stand, but the DST citation creates audit exposure.</p>
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
              { cat: 'Lead Quality',        score: 15, max: 20, note: 'Clean control · SSN-before-consent sequencing error' },
              { cat: 'Signal Reading',       score: 14, max: 20, note: 'Food card + doctor anchors leveraged · income stress missed' },
              { cat: 'Math Breakdown',       score: 13, max: 20, note: 'Step 1 completed · no annualization or humanization' },
              { cat: 'Objection Handling',   score: 12, max: 15, note: 'Clean pivot on medication hesitation · minimal resistance' },
              { cat: 'Call Outcome Quality', score:  9, max: 10, note: 'Correct plan · wrong SEP basis cited during enrollment' },
              { cat: 'Compliance',           score: 12, max: 15, note: 'DST standalone citation (HIGH) · SSN before consent (MEDIUM)' },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>
                  {c.cat}
                  {c.note && <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--ink-60)', marginTop: '2px' }}>{c.note}</span>}
                </span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>75/100 reflects a clean enrollment on a cooperative consumer with two compliance violations — DST standalone citation and SSN collected before consent — creating material audit exposure despite strong execution.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Immediately Matched Consumer&apos;s Emotional Anchor (0:19):</strong> Roy said &ldquo;that food allowance card is what I&apos;m calling about.&rdquo; Josner reflected it back in the first 20 seconds and kept the call grounded in Roy&apos;s reality throughout. He didn&apos;t pivot to a product pitch.</li>
            <li><strong>Doctor-First Enrollment Framework (10:50):</strong> Josner stated he would not proceed with UHC if Dr. Patrick Salmon wasn&apos;t in-network. This pre-emptive commitment built enormous trust. When Salmon was confirmed at 11:30 and Josner said &ldquo;thank God, so we actually have some good news&rdquo; — enrollment was near-certain from that point forward.</li>
            <li><strong>Assumptive Close After Doctor Confirmation (13:29):</strong> Once Josner confirmed Salmon in-network, he moved immediately to application without asking permission to proceed. The framing — &ldquo;So what we can do for you is just to get you those benefits back for you here&rdquo; — invited compliance rather than a yes/no decision.</li>
            <li><strong>Medication Hesitation Pivot (14:34):</strong> When Roy declined the medication list, Josner correctly offered an alternative path — &ldquo;we can do the application without the medications since you were already on UHC&rdquo; — and sought permission. He did not halt or surrender the enrollment.</li>
            <li><strong>Maintained Rapport Across 58-Minute Call (27:06):</strong> Josner kept warmth and personal connection throughout, including a genuine shared-birthday moment with Roy. This non-transactional interaction builds the trust that keeps consumers on the line through long compliance reading sections.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            {/* Pattern 1 — DST */}
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.07)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC4 · 15:53, 16:22, 29:25</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>DST Invoked as Standalone SEP — Prohibited Citation</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>At 15:53 you said: &ldquo;We&apos;ll use the recent winter storm that had happened in North Carolina here, because I know it affected you and others, basically correct.&rdquo; DST is not a standalone qualifying event — it only extends a pre-existing enrollment window the consumer already missed due to the disaster. Agents cannot proactively raise or advertise DST as the basis for enrollment. Roy qualifies under INT (partial Medicaid enrolling into D-SNP), which is open any month of the year, requires no external event, and is fully audit-proof. The DST citation on a recorded line creates disenrollment review risk. Remove it from your process entirely.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Roy, since you have Medicaid, you actually qualify to switch into this plan any time of year. That&apos;s a special qualification for people in your situation — we don&apos;t need any other reason. Let me get you set up today.&rdquo;</p>
              </div>
            </div>

            {/* Pattern 2 — SSN */}
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC4 · 3:38, 3:58</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>SSN Collected Before Eligibility Permission — Sequencing Violation</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Roy provided his full SSN at 3:38. You requested eligibility lookup permission at 3:58 — 20 seconds after the SSN was already on the recording. Consent must precede collection on a recorded line. This is a sequencing error, not a missing step — you asked the right question, just in the wrong order. Reverse it: ask permission first, then ask for the number.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Before I look up your Medicare information, I do need your permission to pull your eligibility on your behalf — is that okay? Great. And I can use your Medicare card number or your Social Security number, whichever you have handy.&rdquo;</p>
              </div>
            </div>

            {/* Pattern 3 — Math */}
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.04)', borderRadius: '10px', borderLeft: '3px solid rgba(201,85,64,0.5)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC3 · 12:25, 12:44</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math Breakdown Incomplete — Annualization and Humanization Missing</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>You correctly identified WellCare&apos;s $94/month food benefit versus UHC&apos;s ~$300 (Step 1 — the comparison). You stopped there. Step 2 is the annual number: $206 more per month is $2,472 more per year in grocery money — a number that actually registers emotionally. Step 3 is connecting it to Roy&apos;s life: at 52:50 he revealed utilities are tight. That&apos;s the humanization moment. The full math makes the value feel real rather than abstract, and it closes buyer&apos;s remorse risk post-enrollment.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Roy, that&apos;s $206 more per month — $2,472 more per year just in grocery money. You mentioned utilities are tight. When this card covers your groceries, that money stays in your pocket for utilities instead. That&apos;s real relief, starting May 1st.&rdquo;</p>
              </div>
            </div>

            {/* Pattern 4 — Plan Reading */}
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.03)', borderRadius: '10px', borderLeft: '3px solid rgba(201,85,64,0.35)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Pattern 4 · RC1 · 17:00, 41:15</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Excessive Verbatim Plan Reading on Irrelevant Sections</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Approximately 24 minutes of the call was verbatim plan document reading, including sections you repeatedly acknowledged didn&apos;t apply to Roy. Roy was cooperative and stayed on the line, but this pattern on a skeptical consumer would cost the enrollment. Learn which sections apply to Medicaid D-SNP enrollees and accelerate through the rest.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Roy, I&apos;m required to read certain disclosures, but I&apos;m going to focus on what actually matters for you. You have Medicaid, so your premium is zero, your doctor co-pay is zero, and your food benefit is up to $300 a month. The rest is standard legal language I&apos;ll read quickly — just let me know if you have questions.&rdquo;</p>
              </div>
            </div>

          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '14px' }}>Josner — this was a well-structured enrollment on a consumer who was already halfway there. Roy called in with a specific problem, and you solved it directly. The line at 10:50 — &ldquo;if it can&apos;t cover Mr. Patrick, then we can&apos;t use it&rdquo; — is the best moment of the call. It shows Roy you&apos;re on his side. When you confirmed Salmon in-network and said &ldquo;thank God, we have some good news,&rdquo; the trust you built in that moment is why he signed without hesitation. That framing is worth keeping and repeating on every similar call.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '14px' }}>Here&apos;s what needs to change immediately: at 15:53 you cited the winter storm as Roy&apos;s qualifying event. That is a prohibited citation on a recorded line. DST is not a standalone SEP — it only extends an existing window someone already missed because of the disaster. Roy doesn&apos;t need DST. He has partial Medicaid and is enrolling into a D-SNP — that&apos;s INT, available any month, no weather event required. &ldquo;Since you have Medicaid, you qualify to switch any time of year — we don&apos;t need any other reason&rdquo; is both accurate and audit-proof. Remove the storm language from your process entirely. Also fix the SSN sequence: ask for eligibility permission first, then ask for the number — not the other way around.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>On the opportunity side: at 12:44 you told Roy WellCare gives him $94 versus UHC&apos;s $300. That&apos;s Step 1. Step 2 is &ldquo;$206 more per month is $2,472 more per year.&rdquo; Step 3 is connecting it to Roy&apos;s life — at 52:50 he told you utilities are tight. That&apos;s your close: &ldquo;When this card covers your groceries, that money stays for utilities.&rdquo; Roy was already sold, so it didn&apos;t matter here. On your next skeptic, it&apos;s the line that makes them feel it — and feeling it is what prevents buyer&apos;s remorse calls the next day.</p>
        </section>

      </div>
    </PageShell>
  )
}
