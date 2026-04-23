'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function MarkMillerCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/natasha-jones" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Natasha Jones · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Natasha Jones × Mark Miller</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 20, 2026 · 40:40 · Columbus, Georgia (ZIP 31903) · <strong style={{ color: 'var(--sage-dark)' }}>75 / 100</strong> · ENROLLED</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Natasha enrolled Mark Miller, a 69-year-old dual-eligible beneficiary in Columbus, Georgia, onto UnitedHealthcare Dual Complete G8 S3, effective May 1, 2026. Every benefit category improved: OTC from $194 to $240 per month, dental from $2,500 to $3,500, vision from $200 to $400, and monthly premium dropping from $25.40 to $11.10. Mark called specifically about his food card and that single concern organized the entire enrollment.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The pivotal moment was at 10:43. Mark asked, &ldquo;But it won&apos;t mess with my 194?&rdquo; and Natasha answered directly: &ldquo;No, it&apos;s going to go up — your 194 is going to go up.&rdquo; Mark said &ldquo;Oh, let&apos;s go ahead&rdquo; in real time. The enrollment was secured at that moment. Every minute after 10:43 was execution. The INT SEP was correctly invoked using Mark&apos;s confirmed dual Medicaid eligibility at 26:39.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The call ran 40+ minutes on a dual-eligible upgrade that should target 25. Extended provider lookup holds (7:22–9:16, 18:40–20:01), a slow medication identification process where Natasha guessed the drug name (&ldquo;Predazon&rdquo;) and Mark tentatively agreed, and a verbatim disclosure read without comprehension checks added unnecessary time. None of this cost the enrollment — Mark was committed from 10:43 — but it cost capacity that could have been a second enrollment.</p>
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
              { cat: 'Signal Reading', score: 15, max: 20 },
              { cat: 'Math Breakdown', score: 12, max: 20 },
              { cat: 'Objection Handling', score: 13, max: 15 },
              { cat: 'Call Outcome Quality', score: 9, max: 10 },
              { cat: 'Compliance', score: 11, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>75/100 — floor of ENROLLED range. Strong outcome and objection handling offset by incomplete math (Steps 2 and 3 missing) and an avoidably long call.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Consumer-Led Frame Adopted from Word One (0:35):</strong> Mark said &ldquo;I&apos;m talking about the food cards&rdquo; and Natasha responded: &ldquo;Yeah, absolutely. It&apos;s attached to the Medicare Advantage plan. I can see if you qualify.&rdquo; She adopted his language and made the food card the organizing principle of the entire call. No friction, no pivot away from what mattered to him.</li>
            <li><strong>Five Identical Objections, Five Calm Answers (10:43):</strong> Mark asked about his OTC card disruption five times in different forms. Natasha answered with the same clear, direct confidence each time. &ldquo;Your 194 is going to go up&rdquo; is the winning line — positive, specific, benefit-framed. She never softened, never deflected, never showed frustration.</li>
            <li><strong>Genuine Rapport Through a 40-Minute Hold-Heavy Call (14:52):</strong> While hunting for Dr. Chabir Mote Walla in the system, Natasha said &ldquo;I&apos;m going to be singing the song, It&apos;s Gonna Take a Miracle&rdquo; — and Mark said it was his favorite song. An unscripted connection that kept a 69-year-old on the line through extended holds.</li>
            <li><strong>Correct INT SEP Execution (26:19):</strong> Natasha confirmed Medicaid/dual eligibility at 26:39 and used the INT SEP to complete the enrollment outside AEP. Correct pathway, correctly executed.</li>
            <li><strong>Clean Voice Signature (40:05):</strong> Guided Mark through the signature cleanly — told him exactly what to say before he said it. He gave name and verbal agreement without hesitation.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC3 · 10:01, 11:43</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math Incomplete — Steps 2 and 3 Missing</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Natasha presented all the numbers: OTC $194 to $240, dental $2,500 to $3,500, vision $200 to $400, premium down $14.30. She stopped at Step 1 (comparison) and never executed Step 2 (annualization) or Step 3 (humanization). The $46/month OTC increase is $552/year. Mark is a fixed-income, disabled man who called about a food card — that&apos;s the number that should have landed. He left enrolled without knowing how much better off he actually is.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Mark, that&apos;s an extra $46 a month — but think about it over the year. That&apos;s $552 more on your card every year. That&apos;s your groceries, your household supplies, the things you&apos;re already spending money on. It just shows up automatically.&rdquo;</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC1 · 7:22, 18:40</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Call Efficiency — Dual-Eligible Upgrade Should Target 25 Minutes</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Mark said &ldquo;Oh, let&apos;s go ahead&rdquo; at 10:43 — the enrollment was done in his mind. The call ran another 30 minutes after that. Extended provider holds (18 minutes total searching for Dr. Chabir Mote Walla), a slow medication process, and a verbatim 4-minute disclosure read inflated the call. The time from 10:43 to the voice signature at 40:05 is a capacity problem — in that 29 minutes, another enrollment could have started.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>For dual-eligible upgrades: hit OTC early, confirm increase, confirm doctor in-network fast (search by facility name, not just last name), collect medication, move to enrollment. Target 25 minutes. When on hold, narrate: &ldquo;I&apos;m in the system pulling up your UHC record right now&rdquo; — silence creates uncertainty.</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC4 · 16:48</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Medication Name Guessed — Unverified Drug Entered</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Mark said &ldquo;food text, something like that&rdquo; and &ldquo;pressure pills.&rdquo; Natasha guessed &ldquo;Predazon&rdquo; and Mark weakly agreed without having the bottle in front of him. The likely actual medication is Prednisone or a generic antihypertensive — a different drug. An unconfirmed drug in the enrollment record creates formulary accuracy risk downstream.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;No problem — is it a pill or liquid? What color is it, and what&apos;s it for — just blood pressure, or something else too?&rdquo; If still unclear: &ldquo;We can enter it as blood pressure medication and you can confirm the exact name when your packet arrives.&rdquo; Never guess a drug name.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '16px' }}>Natasha — this was a clean dual-eligible upgrade and you should feel good about it. The line at 10:43 — &ldquo;your 194 is going to go up&rdquo; — is exactly what that call needed. Direct, positive, benefit-framed. Mark asked the same question five times and you answered it five times without wavering. That consistency is what builds trust with a consumer who&apos;s protecting what he already has. The rapport at 14:52 was real, and the voice signature was clean. You earned that enrollment.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '16px' }}>Here&apos;s the growth point: the math stopped at Step 1. You said &ldquo;$240 OTC&rdquo; and moved on. But Mark is a disabled man on a fixed income who called because of his food card — the number that needed to land was &ldquo;$552 more a year for groceries.&rdquo; That&apos;s not a feature, it&apos;s a solved problem. Same thing when he said &ldquo;I&apos;m disabled&rdquo; at 30:01 — you said &ldquo;You&apos;re disabled. All right.&rdquo; and moved to the next question. That moment was sitting there: &ldquo;Mark, because you have both Medicare and Medicaid, this door is open year-round — that&apos;s your protection.&rdquo; Use the Client Gold when it lands in your lap.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Efficiency note: once Mark said &ldquo;let&apos;s go ahead&rdquo; at 10:43, 29 more minutes of execution followed. For a dual-eligible upgrade, your target opening to voice signature is 25 minutes. Compress the provider search by using facility name first. If you can&apos;t name the medication after three tries, enter it as a drug category and note it for confirmation. Don&apos;t sacrifice the rapport — just trust that the relationship is already built and move with purpose.</p>
        </section>

      </div>
    </PageShell>
  )
}
