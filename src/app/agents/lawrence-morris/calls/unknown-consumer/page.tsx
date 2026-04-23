'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function UnknownConsumerCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/lawrence-morris" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Lawrence Morris · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Lawrence Morris × Unknown Caller</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 22, 2026 · 2:29 · Seabrook, Texas (ZIP 77586) · <strong style={{ color: 'var(--terracotta)' }}>21 / 100</strong> · Missed Opportunity</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This call is a MISSED OPPORTUNITY with a Certainty Score of 21. The client, a Commercial Myth Caller, was motivated solely by acquiring a &ldquo;food benefit card&rdquo; they likely saw advertised. The agent, Lawrence, correctly identified that this benefit is part of a Medicare Advantage plan but failed to build any value or trust around the process required to get it.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The root cause of failure was RC2 — WRONG RESPONSE TO SIGNAL. The call was lost at 2:16 when the consumer expressed strong resistance to sharing information (&ldquo;I&apos;m not willing to go over that with you. It&apos;s massive.&rdquo;). This was a clear RED signal of distrust and overwhelm. Instead of naming the emotion and reframing the request as a benefit to the consumer, the agent passively accepted the objection (&ldquo;Okay, well that&apos;s not a problem&rdquo;), which surrendered control of the call and led directly to the consumer shutting down completely moments later.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Lawrence did correctly deliver the TPMO disclaimer, showing adherence to that part of the script. However, the one thing that would have changed the outcome was a confident reframe at 2:16. By failing to address the consumer&apos;s resistance, he allowed their initial confusion and distrust to escalate, making the call unrecoverable.</p>
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
              { cat: 'Lead Quality', score: 7, max: 20 },
              { cat: 'Signal Reading', score: 5, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 2, max: 15 },
              { cat: 'Call Outcome Quality', score: 0, max: 10 },
              { cat: 'Compliance', score: 7, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>21/100 — a fundamental breakdown in signal reading and objection handling on a medium-difficulty call type.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Correctly Identified Benefit Source (0:18):</strong> When the consumer stated they were calling for a food card, Lawrence immediately and correctly explained that the benefit runs through Medicare Advantage plans. This set the stage correctly, even though he couldn&apos;t capitalize on it.</li>
            <li><strong>Delivered TPMO Disclaimer (1:10):</strong> The agent followed compliance requirements by reading the TPMO disclaimer before proceeding. While the delivery was clunky and created friction, the act of reading it was correct procedure.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC2 · 1:34</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Logic Response to Emotional Objection</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>It created a disconnect with the consumer, who felt unheard. This eroded trust early in the call, making subsequent requests for information more difficult.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>Instead of &ldquo;I have to read that for everything,&rdquo; try: &ldquo;I know, that&apos;s a lot of legal stuff, my apologies. Let&apos;s get right to what you called about — that food card.&rdquo;</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 4 · RC1 · 2:20, 2:28</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Permission-Seeking Language</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>This was a complete surrender of the call&apos;s frame. By passively accepting the consumer&apos;s refusal to cooperate (&ldquo;Okay, well that&apos;s not a problem&rdquo;), the agent signaled he had no path forward, which invited the consumer to end the call.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>At 2:20, instead of &ldquo;Okay, well that&apos;s not a problem,&rdquo; say: &ldquo;I hear you — it feels invasive to share that. The only reason I ask is to make sure the plan we find actually saves you money. Let&apos;s keep it simple and get you that food card.&rdquo;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Gold Audit */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Client Gold Audit</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #1 · 0:13 · MISSED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;I thought I was just applying for a food benefit card.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>This was the entire reason for the call. You acknowledged it but never used it to frame the value of your process. Every request for information should have been tied back to this goal — &ldquo;The only reason I&apos;m asking is to confirm you qualify for that food card.&rdquo;</p>
            </div>
          </div>
        </section>

        {/* The Moment That Decided This Call */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>The Moment That Decided This Call</h2>
          <div style={{ padding: '20px 22px', background: 'rgba(19,17,16,0.92)', borderRadius: '10px', color: '#fff' }}>
            <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', margin: '0 0 10px' }}>2:16 — The One Move</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, margin: '0 0 12px' }}>When the consumer said &ldquo;I&apos;m not willing to go over that,&rdquo; that was a RED signal of distrust and overwhelm — not a logical objection. The call needed an emotional reframe, not agreement. Naming the fear and tying the request back to the food card they already said they wanted was the one move that could have saved the call.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, margin: 0, fontStyle: 'italic', color: 'rgba(255,255,255,0.88)' }}>&ldquo;I hear you, it feels like a lot to share with a stranger. The only reason we check is to make sure the plan we find actually works for you. Let&apos;s keep it simple and focus on getting you that food card.&rdquo;</p>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Lawrence, your highest-leverage opportunity is addressing emotional resistance — Pattern 3 (Logic Response to Emotional Objection). At 2:16, when the client said &ldquo;I&apos;m not willing to go over that with you,&rdquo; that was a RED signal of distrust. The correct response was not to agree, but to reframe and stay anchored to the food card — the goal they already told you they wanted. Name the emotion first (&ldquo;I hear you, it feels like a lot&rdquo;), then tie the request back to their goal (&ldquo;the only reason I ask is to make sure we get you that food card&rdquo;). Role-play this exact scenario five times until naming the emotion and reframing the request becomes automatic.</p>
        </section>

      </div>
    </PageShell>
  )
}
