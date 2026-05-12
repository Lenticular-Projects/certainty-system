'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function SheilaTerryCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/karimah-ali" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Karimah Ali · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Karimah Ali × Sheila Terry</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 1:22:38 · Oxford, NC · <strong style={{ color: 'var(--sage-dark)' }}>80 / 100</strong> · Enrolled (D-SNP · INT)</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Sheila Terry — 74, Oxford, NC, COPD/diabetes/cardiovascular, 17–18 medications — was enrolled into the UHC Dual Complete NCD001 HMO-POS SNP, effective May 1, 2026. The enrollment hook was a benefit restoration: Ms. Terry had previously been on a plan with a $230/month grocery benefit, her plan changed, and her benefit dropped to $71. She was &ldquo;shocked when it changed the whole business plan.&rdquo; You surfaced that loss from the system data before she even told you about it, and you named the fix at 18:23: &ldquo;I&apos;ll go ahead and get you back on the plan that had the $230 for you.&rdquo; That sentence is what enrolled her.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The compliance execution was perfect — TPMO, SOA, decision-maker, full disclosure reading, voice signature, confirmation number, agent info, health assessment. You identified partial Medicaid at 4:39, correctly applied the D-SNP INT SEP pathway, and handled the only objection (Humana preference at 13:04) cleanly. The primary gaps are efficiency and math: the call ran 82+ minutes with a 20-minute medication collection (roughly double the efficient target), and the annual financial story — $159/month grocery restore = $1,908/year, plus medications going to zero on 17+ drugs — was never assembled into a complete picture.</p>
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
              { cat: 'Math Breakdown', score: 11, max: 20 },
              { cat: 'Objection Handling', score: 13, max: 15 },
              { cat: 'Call Outcome Quality', score: 10, max: 10 },
              { cat: 'Compliance', score: 15, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>80/100 — clean enrollment of a cooperative D-SNP consumer. Perfect compliance and call outcome; math story incomplete and call length reflects medication collection inefficiency.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Benefit loss surfaced from the system before the consumer named it (4:55):</strong> You pulled the data and said &ldquo;You were receiving $230 for your grocery benefit. And now you are receiving $71.&rdquo; The consumer confirmed: &ldquo;I was shocked when it changed.&rdquo; You found her pain before she told you. That&apos;s the kind of signal reading that closes calls.</li>
            <li><strong>Benefit restoration as the enrollment anchor (18:23):</strong> &ldquo;I&apos;ll go ahead and get you back on the plan that had the $230 for you.&rdquo; No permission-seeking, no hesitation. You named what she lost, named the fix, and declared the enrollment in one sentence. This is the closing line of the call — it happened at 18 minutes and the rest was execution.</li>
            <li><strong>Humana objection handled cleanly (16:40):</strong> When Ms. Terry said she wanted Humana, you didn&apos;t argue. You simply stated &ldquo;The options with Humana would not be as strong to you as what you can currently receive with UnitedHealthcare&rdquo; and immediately returned to the $230 benefit. Confident, factual, no defensive posture. STRONG reframe.</li>
            <li><strong>Assumptive close at 40:19:</strong> &ldquo;Let me go ahead and get you covered with this plan for May 1st.&rdquo; No question, no request for permission. The consumer&apos;s response — &ldquo;Oh my goodness, that sounds good&rdquo; — confirmed she was already there. You declared the enrollment and she followed.</li>
            <li><strong>Perfect compliance execution:</strong> TPMO (0:44), SOA (1:23), decision-maker (1:46), full disclosure reading (1:01–1:11), voice signature (1:12:13), confirmation code G9B3V4M98S, agent info spelled out (KARIMAH ALI, 561-771-4941). 15/15 compliance — the cleanest execution in the week.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC3 · 40:51</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math Story Left Incomplete — Annual Value Never Assembled</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>The zero-medication-cost reveal at 40:51 landed beautifully — &ldquo;Oh my goodness, that sounds good.&rdquo; But the full financial picture was never assembled. The grocery restore is $159/month = $1,908/year. Medications going to zero on 17+ drugs represents substantial additional savings. Ms. Terry was already enrolled — but the annualized math would have created a loyalty anchor she&apos;d repeat to her daughter. Numbers that people can say out loud are numbers that generate referrals.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Ms. Terry, let me put that in perspective. Your grocery benefit goes from $71 to $230 — that&apos;s $159 more every single month, or almost $1,900 a year. Plus your medications go to zero. You&apos;re gaining thousands of dollars back that you were losing. That&apos;s the plan working for you the way it should.&rdquo;</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC1 · 17:52–38:23</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Medication Collection Ran 20 Minutes — Double the Efficient Target</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>The medication collection was thorough and necessary for drug coverage accuracy. But it ran approximately 20 minutes with multiple spelling loops and clarification cycles. Setting a frame before starting gives the consumer a timeline to work within and keeps the energy moving.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Ms. Terry, I need to go through your medications one by one — this usually takes about 10 minutes but it&apos;s the most important part because it determines your drug costs on the new plan. Ready?&rdquo; Then: name, strength, frequency — one structured ask per medication.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Karimah, this was a clean enrollment and you should be proud of how you identified the D-SNP pathway and used the grocery benefit loss as your hook. The moment you said &ldquo;I&apos;ll go ahead and get you back on the plan that had the $230 for you&rdquo; (18:23) — that&apos;s your closing line. You found the pain, named the fix, and the rest of the call was execution. The compliance was perfect. The assumptive close was perfect. The confirmation and agent info were complete. This call had everything.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>The one thing to add: after you reveal zero-cost medications, annualize it. Ms. Terry was already sold, but if you&apos;d said &ldquo;That&apos;s your grocery benefit going from $71 to $230 — $159 more every month, almost $1,900 a year — plus your medications all going to zero,&rdquo; you would have given her a number to remember and tell her son. People hold onto numbers. They repeat them to family. That&apos;s how you get the next call.</p>
        </section>

      </div>
    </PageShell>
  )
}
