'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function JoanMyzeleCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/karimah-ali" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Karimah Ali · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Karimah Ali × Joan Myzele</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 24, 2026 · 47:49 · Dunedin, FL · <strong style={{ color: 'var(--sage-dark)' }}>78 / 100</strong> · Enrolled (C-SNP · CSN)</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Joan Myzele — DOB July 1, 1943, Dunedin FL, Pinellas County, COPD diagnosis — was enrolled into the CarePlus CARE Breeze HMO C-SNP (H1019-154), effective May 1, 2026. The enrollment hook was the OTC card: her current plan paid $35/month; the new C-SNP pays $195/month — a $160/month upgrade. Joan chose the $195 option without hesitation at 9:07: &ldquo;I&apos;d rather receive the $195 on the card.&rdquo; She was enrolled. All three medications confirmed at zero cost. Dr. Gwendolyn Casanova-Felix (Dunedin FL) confirmed in-network. Walgreens as preferred pharmacy.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This was a well-structured call with clean C-SNP identification and strong consumer-guided close. Joan essentially closed herself when she picked the $195 option. The two gaps: the OTC upgrade ($160/month = $1,920/year; total $2,340/year) was never annualized, and a year was stated incorrectly as &ldquo;May 1, 2022&rdquo; instead of 2026 during the enrollment process. The year error is the more significant risk — if Joan or her doctor notices the date in her enrollment documentation, it could trigger a follow-up call or confusion about her effective date.</p>
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
              { cat: 'Lead Quality', score: 14, max: 20 },
              { cat: 'Signal Reading', score: 17, max: 20 },
              { cat: 'Math Breakdown', score: 16, max: 20 },
              { cat: 'Objection Handling', score: 12, max: 15 },
              { cat: 'Call Outcome Quality', score: 9, max: 10 },
              { cat: 'Compliance', score: 10, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>78/100 — clean C-SNP enrollment. Strong signal reading and consumer-led close. Year error (2022 instead of 2026) and missing annualization cost meaningful points.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>C-SNP/COPD pathway identified correctly:</strong> You recognized Joan&apos;s COPD diagnosis as a C-SNP qualifier, confirmed the chronic condition special needs plan eligibility, and built the entire presentation around the $195/month OTC benefit that the C-SNP unlocks. This is the correct enrollment architecture — most agents miss the C-SNP signal and present standard D-SNP benefits instead.</li>
            <li><strong>Consumer led the close (9:07):</strong> When you presented the two options — $35/month OTC on the current plan vs. $195/month on the new C-SNP — Joan said &ldquo;I&apos;d rather receive the $195 on the card.&rdquo; The close happened because the choice structure was clean. You gave her two options and let her pick the better one. No pressure, no asking for permission.</li>
            <li><strong>Carrier continuity framing (10:43):</strong> When Joan asked if the plan was still Care Plus, you confirmed immediately: &ldquo;No, it&apos;s still going to be Care Plus.&rdquo; This is the same-carrier anxiety that 80% of Medicare consumers have. You addressed it before it became an objection. STRONG read.</li>
            <li><strong>Confirmation and plan number delivered:</strong> Confirmation code FJKOL6N8CS provided. Plan member services number 1-800-794-4105 provided. Both items on the recording. The post-enrollment checklist was complete.</li>
            <li><strong>All three medications at zero cost confirmed:</strong> Armour Thyroid, Trazodone, and Albuterol sulfate all verified on the formulary before enrollment. Consumer had no surprise drug costs to discover after May 1st.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC3 · 9:07</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>OTC Upgrade Never Annualized — $2,340/Year Left Unspoken</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Joan picked the $195/month option immediately. She was excited. But the annual impact — $195 × 12 = $2,340/year, which is $1,920 more than her current $35/month plan — was never said. Joan is 82 years old. She may describe this change to her doctor, her pharmacist, a neighbor. The number she can repeat is the number that locks in the loyalty and generates referrals. &ldquo;$2,340 a year&rdquo; is a sentence she can say to someone else. &ldquo;$195 a month&rdquo; is a number she might forget.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Joan, that $195 you just chose — over the year that&apos;s $2,340 for groceries and health supplies. And that&apos;s almost $1,920 more than you&apos;re getting right now. This plan is literally paying you more to be on it.&rdquo;</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC4 · Enrollment Script</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Year Error — &ldquo;May 1, 2022&rdquo; Stated Instead of May 1, 2026</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>During the enrollment confirmation process, the effective date was stated as &ldquo;May 1, 2022&rdquo; instead of &ldquo;May 1, 2026.&rdquo; The consumer did not flag it. The enrollment submission itself should reflect the correct date in the system, but if Joan or her doctor reviews the verbal confirmation, the wrong year may cause confusion about when coverage actually begins. Effective date precision is non-negotiable in enrollment calls — it is a material fact.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>Slow down on date reading. Say the full four-digit year out loud, pause, then continue. &ldquo;May first, twenty-twenty-six&rdquo; — each word deliberate. If you catch yourself mid-sentence with the wrong year, correct it immediately before moving forward.</p>
              </div>
            </div>

          </div>
        </section>

        {/* The Moment That Decided This Call */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>The Moment That Decided This Call</h2>
          <div style={{ padding: '20px 24px', background: 'rgba(19,17,16,0.03)', borderRadius: '10px', borderLeft: '3px solid var(--ink-60)' }}>
            <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 10px' }}>9:07 — Joan says: &ldquo;I&apos;d rather receive the $195 on the card.&rdquo;</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This is the moment you let the consumer close herself. You put two options on the table — $35 or $195 — and Joan picked the better one. That&apos;s clean selling. The C-SNP identification before this moment was the work that made it possible. Most agents never check for COPD as a C-SNP qualifier. You did. That single read created a $160/month upgrade that the consumer immediately chose. The enrollment was decided here, nine minutes into a 47-minute call.</p>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Karimah, the C-SNP read on this call is what separates you from most agents in this pool. You saw the COPD, you knew it qualified Joan for the chronic condition SNP, and you built the entire call around the $195/month benefit that unlocked. Joan didn&apos;t need to be persuaded — she needed to be shown the option. You showed it. She picked it. That&apos;s how it&apos;s supposed to work.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>Two things to tighten: First, when Joan picked the $195 at 9:07, follow it immediately with the annual number. &ldquo;That&apos;s $2,340 a year — almost $1,920 more than you&apos;re getting now.&rdquo; She was excited. That was the moment to anchor the number. Second, slow down on effective dates. Say the year as four separate digits, pause, then continue. &ldquo;May first, twenty-twenty-six.&rdquo; It takes two extra seconds and it prevents a material error on the recording. Everything else on this call was exactly right.</p>
        </section>

      </div>
    </PageShell>
  )
}
