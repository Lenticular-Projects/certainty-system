'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function BarbaraMcKinneyCallPage() {
  return (
    <PageShell signal="amber">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/michael-fernandez" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Michael Fernandez · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Michael Fernandez × Barbara McKinney</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 15:00 · Cincinnati, OH (ZIP 45211) · <strong style={{ color: 'var(--mustard-dark)' }}>60 / 100</strong> · Not Enrolled (Correct No-Sale)</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Barbara McKinney called in response to an advertisement about a "$3,400 benefit card," hoping to access grocery or utility benefits. She is a 77-year-old Cincinnati resident on a fixed Social Security income of $1,521/month who just switched to the Mount Carmel Medical No Premium HMO on January 1, 2026. She revealed early in the call that she is preparing for open heart surgery — meeting with her cardiac and vascular surgeons on April 27 — to repair two aortic aneurysms.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Michael correctly identified that Barbara&apos;s current plan cannot and should not be changed while she has an active major surgical procedure imminent. He made the ethically and clinically sound decision to decline enrollment, explained her current plan&apos;s benefits (OTC, flex extras, Part B give-back), introduced the concept of a Chronic Special Needs Plan (C-SNP) as a future option post-recovery, and closed by offering to text his contact information for a follow-up after her recovery.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This is a correct no-sale. The outcome is NOT_ENROLLED_UNCLOSEABLE because the agent encountered a genuinely unwinnable situation — not through agent error, but because changing Barbara&apos;s insurance days before a major cardiac surgery would be medically dangerous and likely non-compliant. Michael handled this with appropriate compassion and left the door open for a future enrollment opportunity.</p>
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
              { cat: 'Signal Reading', score: 10, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 12, max: 15 },
              { cat: 'Call Outcome Quality', score: 8, max: 10 },
              { cat: 'Compliance', score: 15, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>60/100 reflects a correct no-sale situation — the agent&apos;s primary job was to assess, serve, and leave the door open, which he did competently.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Correct Clinical Decision — Did Not Touch the Plan (9:33):</strong> Michael correctly identified that changing Barbara&apos;s Medicare Advantage plan days before open heart surgery would be medically dangerous and potentially non-compliant. His statement &ldquo;Right now, right now, your plan, I don&apos;t want to touch it because of your situation with your heart problem&rdquo; is exactly the right call. Not every agent would have the discipline to walk away from an enrollment opportunity — this is professional-grade judgment.</li>
            <li><strong>C-SNP Introduction — Correct Plan Type Identified (9:51):</strong> Michael correctly identified that Barbara&apos;s chronic heart condition qualifies her for a Chronic Special Needs Plan and named the correct carrier (UnitedHealthcare) with a real benefit figure ($200–$395/month utility card at 10:17). This is substantively correct and shows genuine product knowledge. Most agents would not make this connection unprompted.</li>
            <li><strong>Compliance Delivered Cleanly and Completely (0:48):</strong> TPMO disclaimer at 0:57 with correct org count (3 organizations, 33 products). SOA with full plan type enumeration at 1:16. Recorded line notice at 0:02. Decision-maker check, nursing home check, phone confirmation — all present. This is textbook Phase II compliance execution.</li>
            <li><strong>Text Follow-Up Secured (12:43):</strong> Michael asked for and received permission to text Barbara his contact information (12:43–12:47). This creates a touchpoint and keeps the future C-SNP opportunity alive. Given the enrollment cannot happen today, securing a documented follow-up mechanism is the right next step.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(237, 174, 130, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--mustard-dark)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--mustard-dark)', margin: '0 0 6px' }}>Pattern 1 · RC6 · 9:51, 10:03, 12:43</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>CSN SEP Not Named or Structured</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Barbara left this call without knowing she has a year-round enrollment window tied to her heart condition. Without this knowledge, she may wait for AEP, enroll through a different agent, or never follow up at all. A structured callback with a date and SEP education would have locked in Michael as her agent of record for the future enrollment.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Barbara, there is a Special Enrollment Period called the Chronic Special Needs Plan SEP — and the good news is it does not expire. Because you have a documented chronic heart condition, the moment your doctor clears you after surgery, I can get you into a C-SNP. I am going to put a note to call you in 6 to 8 weeks. What is a good day for me to reach you? I want to make sure I am the one who takes care of this for you.&rdquo;</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(237, 174, 130, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--mustard-dark)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--mustard-dark)', margin: '0 0 6px' }}>Pattern 2 · RC2 · 9:06, 14:03, 14:07</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Income/SNAP Signal Dropped</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Barbara disclosed a $1,521/month income and SNAP benefit receipt — strong signals for Extra Help/LIS eligibility. If she qualifies for Extra Help, she has a year-round DEP SEP for PDP changes, and potentially QMB status which affects her cost-sharing. This was a second opportunity to add value on this call, even without touching her MA plan.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Barbara, because your income is under a certain threshold and you receive SNAP, you may qualify for the Extra Help program — that is a federal program that helps people like you pay less for prescriptions. That does not require changing your Medicare Advantage plan. Let me check if you qualify, and if so, we can update your prescription drug coverage today.&rdquo;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Gold Audit (condensed) */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Client Gold Audit</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ padding: '14px 18px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '8px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #1 · 9:06 · MISSED</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--ink)', margin: 0 }}>&ldquo;I live total, I mean, I have social security, which is like $1,521 a month. That is the total that I live on, period.&rdquo; This reveals financial precarity at 77. The C-SNP utility card ($200–$395/month) represents 13–26% of her entire monthly income — life-changing math that should have been stated explicitly.</p>
            </div>
            <div style={{ padding: '14px 18px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '8px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #2 · 6:11 · PARTIALLY_USED</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--ink)', margin: 0 }}>&ldquo;I'm not going to know the exact date of that until April the 27th. That's when my son and I meet with the heart surgeon and the vascular surgeon because I have an aneurysm. As a matter of fact, I have two more aneurysms they have to repair.&rdquo; Barbara is facing serious, potentially life-threatening surgery. Michael acknowledged compassionately but did not use this to create a specific, committed future appointment.</p>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Michael, I want to start by telling you what you got right on this call — because the most important decision you made was the one that cost you a commission. Barbara was ready to be helped, but she had open heart surgery scheduled for days from now, and you said "I would not dare touch her plan right now." That is the right call. That is the call a professional makes. Not every agent has that discipline, and I want you to know that moment reflects well on you.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Now here is what I need you to build on. You correctly identified that Barbara qualifies for a Chronic Special Needs Plan — that is real product knowledge. But you left without naming the CSN Special Enrollment Period, which is year-round and does not expire. Barbara does not know she has a permanent window. She is going to wake up after surgery and think she has to wait for October. You need to tell her, before you hang up: "Barbara, there is a Special Enrollment Period tied to your heart condition that is open every single month of the year. The moment your doctor clears you, I can get you into that C-SNP. I am going to call you in six weeks." No specific date, no specific commitment from you — means she may never call back, and someone else gets that enrollment.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>One more thing. When Barbara told you she lives on $1,521 a month and also gets SNAP, that was the most powerful sales moment of the entire call — and it came and went without you using it. The C-SNP utility card you described ($200 to $395 a month) is 13 to 26 percent of her entire income. That is her electric bill. That is her groceries for the month. You needed to say that out loud: "Barbara, on your income, this is not a small number — this is your electric bill covered every single month." That is the line that makes her count down the days until she can call you back.</p>
        </section>

      </div>
    </PageShell>
  )
}
