'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function BrianGraeseCallPage() {
  return (
    <PageShell signal="amber">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/michelle-marrero" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Michelle Marrero · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Michelle Marrero × Brian Graese</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 21:44 · Miami, FL (ZIP 33186) · <strong style={{ color: 'var(--mustard-dark)' }}>62 / 100</strong> · Correct No-Sale</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Michelle Marrero handled a Medicare Advantage upgrade call with Brian Graese, a 80-year-old diabetic with hypertension on a UnitedHealthcare Special Needs Plan. The call was initiated by the consumer in response to a grocery card offer, and Michelle executed compliance thoroughly, collected verification data after Brian could not locate his Medicare card, and presented a meaningful upgrade package — including a $39 Part B giveback, $40 monthly food card, $0 copays on dental and vision, and 60 free transportation rides.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The pivotal moment came at 18:41 when Michelle confirmed that Brian's primary care physician, Christopher DaFonseca, was not in-network on the upgraded UnitedHealthcare plan. Brian immediately declined the option to find a new in-network doctor, stating clearly at 19:11: "I do not want to mess up anything." Michelle honored that preference and appropriately ceased enrollment efforts.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This is a CORRECT NO-SALE. The upgraded plan would have disrupted Brian's established care relationship with a physician he has seen for three years. Michelle made the right professional call. The no-sale is not a failure — it is evidence of compliant, consumer-first salesmanship. There was no closeable path here without violating the consumer's stated priority.</p>
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
              { cat: 'Lead Quality', score: 12, max: 20 },
              { cat: 'Signal Reading', score: 9, max: 20 },
              { cat: 'Math Breakdown', score: 9, max: 20 },
              { cat: 'Objection Handling', score: 12, max: 15 },
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
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>62/100 reflects a correct no-sale — the consumer had an unresolvable doctor network conflict. The call was professionally handled throughout.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Complete and Efficient TPMO Compliance (0:36):</strong> Michelle delivered all required CMS disclosures within the first 90 seconds — organization count, plan type list, Medicare.gov alternative, OmegaCare affiliation. Recorded line was noted at 0:00. This is textbook compliance execution.</li>
            <li><strong>Smooth Pivot to Manual Lookup (4:42):</strong> When Brian couldn't find his Medicare card, Michelle transitioned to manual verification without friction — collecting name spelling, date of birth, and SSN methodically. She handled a potentially awkward moment professionally.</li>
            <li><strong>Correct No-Sale Decision (19:06):</strong> When Brian refused to change doctors and his PCP was confirmed out-of-network, Michelle made the right call: she did not push the enrollment. She tried one additional UHC option search, found no viable alternative, and closed appropriately. This protects Brian and OmegaCare from a mismatched enrollment.</li>
            <li><strong>Professional Close on a No-Sale (21:19):</strong> Michelle's closing statement — "I'm sorry I wasn't able to assist you further. I don't want to mess up anything with your benefits" — was warm, transparent, and matched Brian's own language. Mirroring a consumer's exact phrasing at close builds lasting trust.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC2 · 7:03</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Client Gold Ignored — Home Nurse Signal Dropped</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Brian's home nurse visit was the most powerful personal detail on this call. It revealed health complexity, possible frequent medical contact, and caregiver involvement — all of which could have been used to anchor the plan's care management and transportation benefits more powerfully. Michelle missed an opportunity to connect emotionally with Brian's actual health situation.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>When Brian said "I got a nurse here," the correct response: "Oh — is that a nurse that visits regularly? Because with your conditions, one of the things this plan does is cover transportation to every appointment at zero cost — 60 free rides. That's designed for people who have regular care needs."</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC3 · 11:47</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math Not Annualized or Humanized</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Michelle listed benefits verbally but did not sum them into total annual value or connect them to Brian's specific conditions. The $40 food card, $39 Part B giveback, and transportation benefits represent nearly $1,000 in annual value — but Brian never heard that number. Without annualization, the offer felt like a list of features rather than a concrete financial improvement.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>After listing benefits: "Brian, let me add this up for you. The $40 food card is $480 a year. The $39 back on your Social Security is another $468. That's almost $1,000 in your pocket just from switching. For a diabetic who was just hospitalized for blood pressure, these $0 specialist copays matter every single appointment."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Michelle, this was a professional no-sale and you should feel good about it. You protected Brian from a plan that would have disrupted a three-year doctor relationship, and you did it with grace. Your compliance execution in the first 90 seconds was flawless — every CMS requirement delivered cleanly, in sequence, with no stumbling. Your close using Brian's own words ("I don't want to mess up anything") was instinctive trust-building at its best. That's a technique top closers use deliberately — you did it naturally.

Here's what to sharpen for next time. When Brian said "I got a nurse here" at 7:03, that was the moment you had a window into who Brian really is — an 80-year-old managing serious conditions with active medical support at home. You asked if he could stay on the phone, which was polite, but you left the gold on the table. Ask one more question: "Is that a nurse that comes regularly?" That answer would have let you anchor the transportation benefit differently: "Those 60 free rides are designed for people exactly like you — someone who has regular care appointments and needs reliable transportation." That's the line that makes Brian feel seen, not sold.

On the math side, you built a solid list of benefits — but Brian heard a list, not a number. Before moving to doctor collection, take 20 seconds to annualize: "$40 a month in groceries is $480 a year. The $39 Part B giveback is another $468. That's close to $1,000 back in your pocket this year, not counting what you'd save on copays." That number changes how the offer feels.</p>
        </section>

      </div>
    </PageShell>
  )
}
