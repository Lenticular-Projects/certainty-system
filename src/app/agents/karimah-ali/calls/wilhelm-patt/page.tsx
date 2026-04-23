'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function WilhelmPattCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/karimah-ali" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Karimah Ali · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Karimah Ali × Wilhelm Patt</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 52:00 · Miami, FL (ZIP 33176) · <strong style={{ color: 'var(--sage-dark)' }}>75 / 100</strong> · Enrolled (C-SNP · CSN)</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Wilhelm Patt was enrolled into the Care Complete HMO C-SNP (CarePlus) effective May 1, 2026, at a $0 monthly premium. Mr. Patt had just been discharged from Baptist Hospital on Saturday — two days before this call — after a prolonged stay that included a near-death sedation event during an endoscopy. He was 78 years old, lying in bed, widowed, and had already tried to end the call before the agent even started the compliance disclosures. Karimah held on through five termination attempts across 20 minutes and got the voice signature. That persistence is the single most important thing that happened on this call.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The C-SNP identification was correct — pacemaker at 9:21 triggered the CSN qualifier, and the $25-to-$195 grocery card upgrade became the central financial hook. The compliance disclosures were thorough despite extreme consumer resistance. The primary gaps: the call started post-reconnect with no TPMO opening, the $170/month upgrade was never annualized ($2,040/year), and three powerful Client Gold moments — the hospitalization, the near-death experience, the isolation as a widower — were met with empathy but never connected to why the plan matters. Empathy without the enrollment anchor is the pattern to fix.</p>
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
              { cat: 'Lead Quality', score: 16, max: 20 },
              { cat: 'Signal Reading', score: 14, max: 20 },
              { cat: 'Math Breakdown', score: 10, max: 20 },
              { cat: 'Objection Handling', score: 13, max: 15 },
              { cat: 'Call Outcome Quality', score: 9, max: 10 },
              { cat: 'Compliance', score: 13, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>75/100 — minimum enrolled threshold. Math gap and missing TPMO cost meaningful points; enrollment persistence and correct C-SNP identification justify the floor.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>C-SNP Identification from Pacemaker Signal (9:21):</strong> Consumer mentioned he gets the pacemaker checked annually. Karimah flagged it as a C-SNP qualifier and at 27:34 explicitly stated: &ldquo;With you having the pacemaker, you qualify for this particular plan that&apos;s going to get you that $195.&rdquo; That sentence is the winning line of the entire call. Without it, this enrollment doesn&apos;t happen.</li>
            <li><strong>Persistent Enrollment Navigation Under Resistance (29:49):</strong> Five termination attempts. 29:49 (&ldquo;I&apos;m finished over here&rdquo;), 33:43 (&ldquo;I&apos;ll telephone you&rdquo;), 34:17 (&ldquo;I&apos;ve had enough&rdquo;), 49:01 (&ldquo;I can&apos;t stand anymore&rdquo;), 49:07 (&ldquo;I&apos;ve done enough now&rdquo;). Karimah navigated every one without surrendering or over-apologizing. That controlled, calm persistence is a skill most agents don&apos;t have.</li>
            <li><strong>Grocery Card Upgrade as Central Hook (10:03):</strong> Consumer was only receiving $25/month on his current CarePlus plan. Karimah identified it immediately, positioned the $195 upgrade as the enrollment reason, and returned to it every time resistance spiked. Smart use of the one financial lever available on this call.</li>
            <li><strong>Empathetic Response to Hospitalization Trauma (30:41):</strong> When Mr. Patt described sleeping on a broken hospital bed and nearly dying during an endoscopy, Karimah responded with genuine warmth: &ldquo;I&apos;m glad you made it through and you&apos;re home now.&rdquo; That authenticity maintained the relationship through the most vulnerable moment of the call.</li>
            <li><strong>Clean Voice Signature Execution (44:51):</strong> Name (&ldquo;Wilhelm Patt&rdquo;), DOB (&ldquo;17th of January in 1948&rdquo;), and explicit agreement (&ldquo;Yes, I agree&rdquo;) — all three elements confirmed cleanly despite a consumer who had been trying to end the call for 20 minutes.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC2 · 9:29, 30:34, 31:27</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Client Gold Ignored — Hospitalization Trauma Empathized, Not Deployed</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Three Client Gold moments — just discharged from the hospital, nearly died under sedation for a day and a half, lives alone as a widower who rejected home care. Each was met with genuine empathy. None was converted into an enrollment anchor. This made the five &ldquo;I&apos;m done&rdquo; moments harder to redirect — if Mr. Patt had been emotionally anchored to why the plan matters, those resistance moments would have had a finish line to point toward.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Mr. Patt, what you went through at that hospital is exactly why I want to make sure you have the best plan behind you starting May 1st. If you ever need to go back to Baptist, I want that $195 card loaded, your doctors confirmed, and your coverage locked in. You went through a lot. Let&apos;s make sure you&apos;re protected going forward.&rdquo;</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC3 · 10:03, 21:09, 50:48</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math Not Completed — $2,040/Year Never Stated</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>The $170/month grocery upgrade was stated clearly — but it was never annualized. $2,040 per year in additional grocery purchasing power is a number a fixed-income senior who was rationing on $25/month can actually feel. That figure would also have been the most compelling response to every &ldquo;I&apos;m done&rdquo; moment: &ldquo;Mr. Patt, we&apos;re almost done — two minutes to lock in your $2,040 a year in groceries.&rdquo;</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Mr. Patt, that&apos;s $170 more per month. Over the course of a year, that&apos;s over $2,000 in extra groceries. $2,040 a year just from this one change. That&apos;s real money back in your pocket every single month.&rdquo;</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC4 · 0:00</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>TPMO Disclaimer Missing from Opening — Reconnect Protocol</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>The call begins mid-reconnect. No TPMO disclaimer, no recording notice, no agent identification. All three are required CMS elements. The reconnect scenario creates the gap — the protocol to close it takes 20 seconds and is not optional.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Mr. Patt, just so you know — this call may be recorded for quality assurance, and I&apos;m a licensed insurance agent representing CarePlus. Now let&apos;s pick up right where we left off to get you that $195 benefit.&rdquo;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Karimah — you completed something genuinely difficult on this call. Wilhelm Patt tried to end it five times while lying in a hospital bed two days after a near-death experience. You held on, kept the enrollment moving, and got the voice signature. That persistence is a skill most agents don&apos;t have, and it closed this enrollment. The C-SNP identification at 9:21 — catching the pacemaker as a qualifier and connecting it directly to the $195 benefit at 27:34 — that&apos;s the line that made the whole thing make sense to him.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>Here&apos;s where to sharpen: you had three pieces of Client Gold sitting right in front of you — the hospitalization, the near-death experience, the widower living alone — and you responded with empathy instead of enrollment anchors. When Mr. Patt said he nearly died during that endoscopy (31:27), that was your moment. Not to exploit it — but to connect it: &ldquo;Mr. Patt, what you just went through is exactly why I want you on the Care Complete plan starting May 1st. If anything like that ever happens again, you have coverage specifically designed for your pacemaker.&rdquo; And always annualize: you said $195 multiple times, which is right. But you never said $2,040. That&apos;s the number that makes it feel real and permanent — and the next time he tries to end the call, &ldquo;two more minutes to lock in your $2,040 a year&rdquo; is a lot more compelling than &ldquo;just a few more questions.&rdquo;</p>
        </section>

      </div>
    </PageShell>
  )
}
