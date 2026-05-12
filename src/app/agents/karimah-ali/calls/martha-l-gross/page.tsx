'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function MarthaLGrossCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/karimah-ali" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Karimah Ali · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Karimah Ali × Martha L. Gross</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 20, 2026 · 48:19 · Lima, OH · <strong style={{ color: 'var(--sage-dark)' }}>72 / 100</strong> · Enrolled (D-SNP · INT)</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This was a callback — Karimah had spoken with Martha Gross in a prior session and committed to calling back once Martha had her full medication list from the doctor. She followed through. That single act of follow-through is what built the platform for this enrollment: when the son-in-law heard that his mother-in-law&apos;s OTC benefit could go from approximately $100/month to $240/month, his immediate reaction at 12:03 was &ldquo;Oh, she&apos;d be eligible for $240, honey. That&apos;s wonderful. You didn&apos;t know that.&rdquo; Martha was enrolled into the Humana Gold Plus SMPDE H6622-087 HMO D-SNP, effective May 1, 2026, at a $0 monthly premium.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Martha is 82 years old with a medical profile that includes diabetes, asthma, a prior heart attack, a prior stroke, high blood pressure, high cholesterol, and kidney problems. She takes 12 medications plus a DME item (wall grab bar). The call was a three-person conversation — Martha, her husband, and her son-in-law who read the medication bag. You managed all three without losing control. The primary gaps: the $240/month benefit was never annualized ($2,880/year), the benefit use-case (food, utilities, OTC products) was not explained, and the post-enrollment confirmation code, plan member services number, and agent contact info were not given on the recording.</p>
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
              { cat: 'Signal Reading', score: 13, max: 20 },
              { cat: 'Math Breakdown', score: 14, max: 20 },
              { cat: 'Objection Handling', score: 11, max: 15 },
              { cat: 'Call Outcome Quality', score: 7, max: 10 },
              { cat: 'Compliance', score: 13, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>72/100 — UNCLOSEABLE range. Enrolled despite a complex three-person call and extensive medication list. Post-enrollment checklist gap and missing annualization cost meaningful points.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Follow-through on prior session commitment:</strong> Karimah called back specifically to collect the medication list she had promised to get. This is the act that earned Martha&apos;s trust and gave the son-in-law a reason to stay on the line. The enrollment was possible because you followed through.</li>
            <li><strong>$240/month upgrade identified and presented cleanly (12:00):</strong> You confirmed the current approximate OTC amount (~$100), surfaced the $240 upgrade immediately, and the son-in-law&apos;s spontaneous reaction (&ldquo;Oh, she&apos;d be eligible for $240, honey. That&apos;s wonderful.&rdquo;) confirmed the impact. No overreach — you found the number and let it land.</li>
            <li><strong>Zero-cost medication confirmation before the close (13:08):</strong> Before asking Martha to get on the line, you confirmed with the son-in-law that all medications were covered at zero copay. That sequence — medication coverage confirmed, then consumer asked to enroll — is the correct order. It eliminated the biggest unknown before the ask.</li>
            <li><strong>Same-carrier continuity framing (13:47):</strong> &ldquo;It&apos;s not going to be a big change to what you currently have, but it is going to be a bit of an upgrade.&rdquo; For an 82-year-old who has been on Humana since 2021, this framing removed the anxiety of switching. Exactly right.</li>
            <li><strong>Voice signature obtained despite consumer confusion (37:04 / 37:32):</strong> Martha initially said &ldquo;Yes&rdquo; when asked to say &ldquo;I agree.&rdquo; You corrected cleanly — &ldquo;Ms. Gross, if you can say I agree and that will complete the form&rdquo; — and she did. The two-part signature is valid. Getting a clean voice signature from an 82-year-old who needs family assistance on every call is real skill.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC3 · 12:00, 13:40</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>OTC Benefit Never Annualized or Contextualized</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>You stated $240/month clearly and the son-in-law was immediately excited. But the HRA later revealed that Martha has pain at 8/10, falls twice per month, and described her financial situation as &ldquo;very hard.&rdquo; The full context — $2,880 more per year, usable for groceries, utilities, and OTC products — was never said. The son-in-law&apos;s excitement would have been even greater with the annual number and a concrete use-case attached to it.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;That $240 you can use for groceries, household essentials, or even to help pay the electric bill. Over the year, that&apos;s $2,880 more in her pocket just from this one change.&rdquo;</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC3 · Post-enrollment</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Post-Enrollment Checklist Missing from Recording</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>The confirmation code, plan member services number, and agent contact information are not present in the transcript. Martha has 12 medications, a prior heart attack, a prior stroke, and kidney problems. If anything goes wrong with this plan after May 1st, she and her family need to be able to call someone. These three items are non-negotiable on every enrollment recording.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Ms. Gross, your confirmation number is [code] — write that down. If you ever need to reach the plan, Humana&apos;s number is [number]. And my direct number is [number] — call me anytime.&rdquo;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Karimah, the callback was the right move — you committed to getting that medication list and you followed through, which is exactly what builds trust with consumers and their families. The $240 upgrade landed well, and managing a three-person call (Martha, her husband, and the son-in-law who read the medication bag) without losing the thread is real skill. The son-in-law became an ally the moment he heard $240 — that&apos;s what good call management looks like.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>The gap to fix is what comes after you submit the application. The confirmation code, the plan member services number, and your contact info need to be on every recording without exception. A consumer this medically complex — 12 medications, prior heart attack and stroke, kidney problems, pain at 8/10, falls twice per month — she and her family need to be able to call someone if something goes wrong. Put those three things in your close routine as a non-negotiable. And next time you present the $240, follow it with the annual number and the use-case: &ldquo;$2,880 a year for groceries, utilities, and health supplies.&rdquo; That&apos;s the sentence that makes it real.</p>
        </section>

      </div>
    </PageShell>
  )
}
