'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function RogelioPérezCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/german-vivas" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to German Vivas · Weekly Brief</Link>

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>German Vivas × Rogelio Perez</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 44:42 · Weslaco, TX (ZIP 78580) · <strong style={{ color: 'var(--sage-dark)' }}>84 / 100</strong> · ENROLLED — Aetna Medicare Signature PPO · May 1, 2026</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>German enrolled Rogelio Perez in the Aetna Medicare Signature PPO effective May 1, 2026. Rogelio was brand new to Medicare — he retired in late 2024 after a vision condition (double vision) forced him to leave his job, and his Part B became effective February 2026. This was a textbook IEP call: the consumer had never enrolled in Medicare Advantage, had active dental and vision needs, and was paying out-of-pocket for his blood pressure medication.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>German identified the IEP window immediately at 6:32 and framed the enrollment as consumer protection against the late-enrollment penalty. The call&apos;s emotional pivot came at 15:02 when German revealed that Rogelio&apos;s blood pressure medication — currently $30/month out-of-pocket — would cost $0 on the new plan. Rogelio&apos;s response was genuine: &ldquo;Wow, $0, thank you.&rdquo; That moment sealed the call. Voice signature was completed at 34:30 with full name, DOB, and verbal agreement. German&apos;s post-enrollment loyalty anchor — &ldquo;I&apos;m gonna be your agent for the life of this policy&rdquo; — was delivered naturally, backed by a concrete October AEP review booking.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The call&apos;s gap, consistent with the prior day&apos;s call, is the math framework. German named individual benefit amounts but never annualized or connected them to Rogelio&apos;s stated financial hardship — at 36:51, after enrollment was complete, Rogelio disclosed: &ldquo;I struggled for a while since December when I couldn&apos;t retire because I lost all my money.&rdquo; The annual savings ($360 medication + $2,000 dental + $300 vision = $2,660+) were never stated. The second gap: when Rogelio said &ldquo;No, I don&apos;t have a car&rdquo; at 7:14, the transportation benefit was not connected to that disclosure.</p>
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
              { cat: 'Lead Quality',         score: 14, max: 20 },
              { cat: 'Signal Reading',        score: 15, max: 20 },
              { cat: 'Math Breakdown',        score: 12, max: 20 },
              { cat: 'Objection Handling',    score: 13, max: 15 },
              { cat: 'Call Outcome Quality',  score: 10, max: 10 },
              { cat: 'Compliance',            score: 15, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>84/100 — enrolled IEP call with strong compliance and complete outcome quality. The gap to 90+ is closed by executing the full math framework.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What You Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>IEP Recognition and Urgency Framing (1:28, 6:00):</strong> When Rogelio disclosed he had just retired and received Medicare, you responded immediately: &ldquo;So that qualifies you off the bat.&rdquo; You then explained the late enrollment penalty risk clearly and without pressure: &ldquo;If you didn&apos;t call in by next month, you would end up getting penalized for every month you don&apos;t have one.&rdquo; You framed yourself as the person protecting him, not selling him something. That&apos;s exactly right.</li>
            <li><strong>The $0 Drug Cost Reveal (15:02):</strong> You held the silence after telling Rogelio his blood pressure medication would be $0 for the whole year. He said &ldquo;Wow, $0, thank you.&rdquo; That was the moment he committed. The contrast between his current $30/month out-of-pocket and the plan cost was earned by the discovery work you did earlier — you knew he was paying out-of-pocket because you asked at 12:23.</li>
            <li><strong>Benefit Trifecta Matched to Discovery (10:55–12:06):</strong> You connected dental needs to the $2,000 allowance (10:59), the vision condition to $0 copay and $300 allowance (11:34), and medications to the $0 drug cost reveal (15:02). The sequencing from discovery to benefits was logical and personalized. Each benefit landed because you had listened first.</li>
            <li><strong>Spanish Cultural Connection and Lifetime Agent Anchor (24:10, 37:06):</strong> When you offered Rogelio your Spanish name, his response was warm and immediate. That small personal moment built trust at a critical point in the call — just before Phase VI compliance. Your post-enrollment anchor (&ldquo;I&apos;m gonna be your agent for the life of this policy&rdquo;) was delivered naturally, not scripted. You backed it up by booking a specific October AEP review — a commitment with a date, not just a promise.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC3 · 15:02, 36:51</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math Not Annualized or Humanized</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>You revealed the $0 drug cost and stopped there. The annual savings — $360 on medication, $2,000 dental allowance, $300 vision, $0 doctor visits — add up to $2,660+ in real annual value on a $0 premium plan. You never stated that total. At 36:51, after enrollment, Rogelio told you: &ldquo;I struggled for a while since December when I couldn&apos;t retire because I lost all my money.&rdquo; That was the exact moment to quantify what this plan does for him financially. You accepted the gratitude and moved on.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Rogelio, let me tell you what today actually means for you. Your blood pressure medication goes from $30 a month to $0 — that&apos;s $360 a year. Your dental work can continue under a $2,000 allowance. Your eye care is covered. We just put over $2,600 back in your pocket this year, starting May 1st. Things are falling in place because you made the right call today.&rdquo;</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC2 · 7:14, 10:27</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Transportation Benefit Not Connected to the No-Car Disclosure</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>At 7:14, Rogelio said &ldquo;No, I don&apos;t have a car.&rdquo; You acknowledged it and moved immediately to dental. The Silver Sneaker gym benefit was presented at 10:27 instead — a gym membership is less immediately relevant to someone who can&apos;t get to a doctor without help. The transportation benefit on this plan directly solves a daily real-world problem Rogelio told you he has. The moment he said no car was the moment to name it.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;That&apos;s actually one of the most important benefits on this plan for you — it includes non-emergency medical transportation so you can get to your doctor appointments at no cost. No car needed. That&apos;s your rides handled.&rdquo; Say this immediately. Then move to dental.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '16px' }}>German — you did a lot of things right on this call. You recognized the IEP window immediately, ran a thorough discovery, and connected the plan benefits directly to what Rogelio needed. The $0 drug cost reveal at 15:02 was perfectly timed and landed exactly how it should — &ldquo;Wow, $0, thank you&rdquo; is what a closing moment sounds like. Your compliance execution was clean all the way through, your doctor verification was sharp, and your post-enrollment anchoring was natural and warm. This was a strong call.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '16px' }}>Here&apos;s where you left money on the table — not for this call, but for the pattern going forward. At 36:51, Rogelio told you: &ldquo;I struggled for a while since December when I couldn&apos;t retire because I lost all my money.&rdquo; That was the biggest Client Gold on the entire call, and it came after enrollment. The right move is to pause and quantify: &ldquo;Your medication goes from $30 a month to $0 — that&apos;s $360 a year. Your dental work can continue, your eye care is covered. We just put over $2,600 back in your pocket this year. Things are falling in place because you made the right call today.&rdquo; That line, said with conviction, makes the enrollment irreversible in the consumer&apos;s mind and prevents buyer&apos;s remorse.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>One more: at 7:14 Rogelio said &ldquo;No, I don&apos;t have a car.&rdquo; You moved on. The transportation benefit on a MAPD plan is one of the most emotionally resonant extras for someone in that situation — it solves a real daily problem. Next time, respond immediately: &ldquo;That&apos;s actually a key benefit on this plan — it includes covered transportation to your medical appointments. No car needed.&rdquo; You had dental, vision, drugs — you were one benefit away from the full four. On your next new-to-Medicare call, lead with all four when you get the signals.</p>
        </section>

      </div>
    </PageShell>
  )
}
