'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function JudithCopelandCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/casimir-exil" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Casimir Exil · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Casimir Exil × Judith Copeland</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 22, 2026 · 4:28 · Florida (ZIP 33418) · <strong style={{ color: 'var(--terracotta)' }}>20 / 100</strong> · Missed Opportunity</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This call is a MISSED OPPORTUNITY with a Certainty Score of 20. Judith is a Commercial Myth Caller, motivated by an ad promising a &lsquo;$186 a month increase.&rsquo; The call failed because you were unable to build any trust with a skeptical and fearful client, leading to a complete shutdown during the information-gathering phase.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The root cause is RC2 — WRONG RESPONSE TO SIGNAL. You repeatedly met the client&rsquo;s RED signals of skepticism and fear with logic-based responses instead of empathy and reframing. The call was irrevocably lost at 3:28 when Judith refused to provide her Social Security number. Your response, an appeal to your own authority (&lsquo;I am a licensed agent&rsquo;), directly contradicted the client&rsquo;s emotional state of distrust and ended any possibility of moving forward.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>While you correctly delivered the required TPMO disclaimer at 0:15, the critical failure to handle the SSN objection at 3:28 was the singular reason for the loss. A proper reframe acknowledging the client&rsquo;s fear would have been the only way to salvage the call. This was compounded by a critical compliance error at 1:07 where you stated &lsquo;I work for Medicare,&rsquo; which is a prohibited statement that further eroded credibility.</p>
          </div>
        </section>

        {/* Certainty Score Breakdown */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Certainty Score Breakdown</h2>
          <div style={{ background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', borderBottom: '1px solid rgba(19,17,16,0.08)', background: 'rgba(19,17,16,0.03)' }}>
              <span>Category</span>
              <span>Score</span>
              <span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 5, max: 20 },
              { cat: 'Signal Reading', score: 3, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 2, max: 15 },
              { cat: 'Call Outcome Quality', score: 2, max: 10 },
              { cat: 'Compliance', score: 8, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>20/100 reflects a fundamental breakdown in trust-building and objection handling on a high-difficulty call with a skeptical client.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Delivered TPMO Disclaimer (0:15):</strong> You delivered the required TPMO disclaimer early in the call, following compliance protocol correctly.</li>
            <li><strong>Obtained Scope of Appointment (1:07):</strong> You properly asked for permission to discuss plan options, satisfying the requirement to obtain an SOA before proceeding.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC2 · 3:28</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Logic Response to Emotional Objection</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>When Judith expressed fear about her SSN at 3:28, your logic-based response (&lsquo;I am a licensed agent&rsquo;) destroyed all trust and made it impossible to proceed. This cost the entire call. A fearful client needs empathy first, not justification of your credentials.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>Ma&rsquo;am, that is 100% the right instinct. You should never give that number out to someone you&rsquo;re not comfortable with. We don&rsquo;t actually need the social. Can we use your Medicare card number instead?</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC2 · 0:37</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Client Gold Ignored</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Judith stated her motivation was an ad promising a &lsquo;$186 a month increase.&rsquo; You acknowledged this but never used it as leverage to build value or overcome her later objections. This was the entire reason for the call and should have been the central anchor when the SSN objection arose.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>At 3:28 when Judith objected: &ldquo;I understand completely. The only reason I need to verify your information is to see if you qualify for that $186 increase you called about. We can use your Medicare ID instead of your Social, if you&rsquo;re more comfortable with that.&rdquo;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Gold Audit */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Client Gold Audit</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #1 · 0:37 · MISSED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;Well, it said that I was entitled to $186 a month increase.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>You acknowledged this statement but never used it as a lever to build value or overcome the client&rsquo;s later objections. This was the entire reason for the call and should have been the central anchor. When Judith later objected to providing her SSN, you should have said: &ldquo;I understand. The only way for me to check if you qualify for that $186 benefit you called about is to pull up your profile in the secure system. Can we use your Medicare ID number instead of your Social?&rdquo;</p>
            </div>
          </div>
        </section>

        {/* The Moment That Decided This Call */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>The Moment That Decided This Call</h2>
          <div style={{ padding: '20px', background: 'rgba(113, 99, 81, 0.05)', borderRadius: '10px', borderLeft: '4px solid var(--ink-60)' }}>
            <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', lineHeight: 1.75, color: 'var(--ink)', margin: '0 0 12px' }}>&ldquo;I&rsquo;m not going to give that out over the phone.&rdquo; (3:28)</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This is the call&rsquo;s point of failure. Judith expressed deep distrust (RED signal). Your next move determined the outcome. Instead of validating her fear and pivoting to the Medicare card, you responded with &ldquo;I am a licensed agent.&rdquo; This logic-based defense destroyed trust and solidified her decision to disengage. The only move that would have salvaged this call was immediate empathy and reframing: &ldquo;You&rsquo;re right to be careful — let&rsquo;s use your Medicare card instead.&rdquo;</p>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Casimir, the highest-leverage skill to focus on is handling trust-based objections, specifically the SSN refusal at 3:28. When Judith said &ldquo;I&rsquo;m not going to give that out,&rdquo; the correct response was not to justify yourself, but to validate her. You should have said: &ldquo;Judith, that is exactly the right instinct. You should never give that number to anyone you&rsquo;re not 100% comfortable with. The good news is, we don&rsquo;t need it. We can use the number on your red, white, and blue Medicare card instead. Can you grab that for me?&rdquo; Practice role-playing this specific objection until validating the emotion and pivoting to the Medicare card becomes automatic. This is a classic example of responding to a RED signal with a reframe, not logic. The second issue is your opening at 0:09. When Judith asked &ldquo;Are you selling insurance?,&rdquo; your answer &ldquo;No, ma&rsquo;am, we help people out with Medicare benefits&rdquo; was evasive. A direct, confident answer would have set a better tone: &ldquo;That&rsquo;s a great question. I&rsquo;m a licensed agent, and my job is to review your current Medicare benefits to make sure you&rsquo;re not missing out on anything you&rsquo;re entitled to.&rdquo; Finally, eliminate the prohibited statement at 1:07. Never say &ldquo;I work for Medicare.&rdquo; Use: &ldquo;I am a state-licensed independent agent who represents a number of Medicare plans.&rdquo;</p>
        </section>

      </div>
    </PageShell>
  )
}
