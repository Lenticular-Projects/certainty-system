'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function JohnTorresCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/karimah-ali" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Karimah Ali · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Karimah Ali × John Torres</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 22, 2026 · 40:00 · Orlando, FL · <strong style={{ color: 'var(--mustard-dark)' }}>54 / 100</strong> · Missed Opportunity (D-SNP · MOV)</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>John Torres — mid-60s, Orlando FL, dual-eligible, recently relocated from Kissimmee (34744) to Orlando (32824) — had a live MOV SEP on the table from the first five minutes of this call. The move was confirmed. The SEP was identified. The math was solid: his current Aetna plan had a $171/month OTC benefit; you found a comparable plan with comparable coverage. You had everything needed to close. The call ended at 40 minutes with a callback set for 3pm, and John Torres still on his current plan.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>What cost this enrollment was a single moment at 28:00. John said &ldquo;even if they pay me a hundred bucks more, I&apos;m not going to change.&rdquo; He wasn&apos;t saying no to the plan — he was saying he doesn&apos;t trust change. John Torres is a trauma survivor: 18-wheeler accident at age 18, paralyzed neck-down, six-month coma, 29 months hospitalized, burns over 48% of his body. He has three specialists and a psychiatrist. He has spent his adult life protecting what is stable. When he said &ldquo;I&apos;m not going to change,&rdquo; he wasn&apos;t talking about insurance. He was talking about his life. The reframe that closes this call doesn&apos;t argue with his caution — it honors it and redirects it. You didn&apos;t find that reframe. The callback is not the solution — a MOV SEP doesn&apos;t wait for callbacks.</p>
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
              { cat: 'Signal Reading', score: 8, max: 20 },
              { cat: 'Math Breakdown', score: 10, max: 20 },
              { cat: 'Objection Handling', score: 5, max: 15 },
              { cat: 'Call Outcome Quality', score: 2, max: 10 },
              { cat: 'Compliance', score: 13, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>54/100 — live MOV SEP surrendered at primary objection. Strong lead and compliance; signal reading and objection handling both fell short of what this consumer required.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>MOV SEP identified correctly at 5:00:</strong> You confirmed the move from Kissimmee to Orlando, recognized the qualifying event, and built the call plan around it. The correct SEP pathway was identified and the enrollment window was live. That&apos;s the right read.</li>
            <li><strong>Specialist network confirmed before presenting:</strong> You checked Dr. Nair (pain management), Dr. Maria Cruz Lozano (psychiatrist), and the Chinese primary care physician against the new plan&apos;s network. Running the specialist check before the pitch is the right sequence — it removes the biggest in-call objection before it can land.</li>
            <li><strong>Math executed cleanly:</strong> You surfaced the $171/month OTC on the current Aetna plan and presented the comparable benefit on the new plan. The consumer understood what he was getting. The numbers were clear.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC1 · 28:00</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Trauma Loyalist Objection — Surrendered Without Reframe</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>John said &ldquo;even if they pay me a hundred bucks more, I&apos;m not going to change&rdquo; at 28:00. This is not a price objection. It&apos;s a stability objection from someone whose life has been defined by medical trauma and recovery. The word &ldquo;change&rdquo; is the trigger — not the money. You needed a reframe that acknowledged his caution, reframed the change as protection rather than disruption, and asked one more question. Instead, the call moved toward a callback. A man who has been paralyzed, burned, and hospitalized for two years does not fear insurance change because of the paperwork. He fears it because stability is how he stayed alive.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;John, I hear you. After everything you&apos;ve been through, you know better than anyone how important it is to protect what&apos;s working. What if I told you that the only thing that changes is the number on your card? Same doctors. Same pharmacy. Same coverage. The only difference is your grocery benefit goes up and your premium stays at zero. You&apos;re not changing anything that matters — you&apos;re just getting more out of what you already have.&rdquo;</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC6 · 5:00</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>MOV SEP Available — Not Converted to Urgency Frame</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>You identified the move from Kissimmee to Orlando correctly at 5:00. But the SEP urgency was never named as a reason to act today. John confirmed the move. You built the call. But John never heard the words &ldquo;you have a special enrollment window right now because of your move, and that window closes.&rdquo; When a trauma loyalist objects to change, the answer is urgency — not argument. If he understands that delaying means losing the window, the conversation shifts from &ldquo;should I change&rdquo; to &ldquo;when do I have to decide.&rdquo;</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;John, I want to make sure you understand something important — because you moved, you have a special enrollment period open right now. This isn&apos;t something you can come back to in a few weeks. This window is open today. Once it closes, you&apos;re locked in until next October. I&apos;m not trying to rush you — I just want you to have all the information before you decide.&rdquo;</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC1 · 36:00</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Callback Accepted — Live SEP Window Left Open</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>A callback was scheduled for 3pm. A MOV SEP doesn&apos;t defer gracefully. Every hour that passes after a consumer says &ldquo;call me later&rdquo; is an hour for the decision to harden into a no. John already told you he doesn&apos;t change. The reframe was available. The urgency frame was available. The call should have been closed before 3pm was ever offered.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;John, before we hang up — I want to be straight with you. I can call you at 3, and I will. But I also want you to know that the enrollment window doesn&apos;t reset. Everything I&apos;ve got for you right now, I&apos;ll have at 3. So if you&apos;re ready, we can take care of it right now and you don&apos;t have to think about it again.&rdquo;</p>
              </div>
            </div>

          </div>
        </section>

        {/* Closer's Edge */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>The Moment That Decided This Call</h2>
          <div style={{ padding: '20px 24px', background: 'rgba(19,17,16,0.03)', borderRadius: '10px', borderLeft: '3px solid var(--ink-60)' }}>
            <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 10px' }}>28:00 — John says: &ldquo;even if they pay me a hundred bucks more, I&apos;m not going to change.&rdquo;</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This was the moment. Not an objection to the plan — a declaration about his identity. John Torres has survived things that would end most people. He protects what is stable with everything he has. The line that closes this call doesn&apos;t fight his resistance. It joins it: &ldquo;John, I hear you. After everything you&apos;ve been through, you know better than anyone how important it is to protect what&apos;s working. What if I told you that the only thing that changes is the number on your card? Same doctors. Same pharmacy. Same coverage.&rdquo; That&apos;s not a sales pitch. That&apos;s the truth — and it&apos;s the only frame that reaches a man who has been through what he has been through.</p>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Karimah, you read the SEP correctly and you built a clean case. The lead quality on this call was strong — dual-eligible, confirmed move, live enrollment window. You did the work. The gap is what happened at 28:00 when John said he wasn&apos;t going to change. That&apos;s the moment this call needed a different gear, and you didn&apos;t shift into it.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>Here&apos;s what you need to build: a trauma-informed stability reframe. John Torres is not the last person you will call who has been through something serious. When someone says &ldquo;I don&apos;t change,&rdquo; the answer is never more reasons to change. It&apos;s a reframe that makes the change invisible: same doctors, same pharmacy, same coverage — the only difference is more money in your pocket. Name the continuity first, then name the upgrade. And the one thing you must add every time you have a live SEP on the table: name the window. Say &ldquo;you have a special enrollment period open right now because of your move, and it closes.&rdquo; That sentence is what converts urgency into action.</p>
        </section>

      </div>
    </PageShell>
  )
}
