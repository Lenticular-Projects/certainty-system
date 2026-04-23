'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function JeanGoldCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/jean-pierre-riviere" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Jean Pierre Riviere · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Jean Pierre Riviere × Jean Gold</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 12:55 · Austin, TX (ZIP 78724) · <strong style={{ color: 'var(--terracotta)' }}>28 / 100</strong> · MISSED OPPORTUNITY</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Jean Gold came in through a warm 3-way referral arranged by her friend Dorina. She was already unhappy with Aetna — her previous plan, WellPoint, had exited Texas and she was auto-enrolled in an Aetna HMO she didn&apos;t choose, with a doctor she didn&apos;t recognize on the card. She had been trying to fix the situation and hadn&apos;t gotten help from anyone. Jean Pierre handled the 3-way intro gracefully, activated Dorina&apos;s social proof, and correctly identified May 1st as the effective date. He validated Jean&apos;s Aetna frustration directly and positioned himself as the person who could fix it.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The compliance sequence was violated: Medicare number was collected at 4:12 and zip at 5:12 before the TPMO disclaimer arrived at 9:01 — over 8 minutes late. When Jean said &ldquo;can you call me back later please&rdquo; at 11:51, Jean Pierre immediately agreed without any recovery attempt. No plan was named. No benefits were compared. No math was presented. A warm referral with a named pain point and active dissatisfaction ended as an unanchored callback.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The WellPoint exit also flagged an EOC or DIF SEP that was never explored — two questions at 7:19 would have established whether a year-round enrollment window was open. That window was left on the table alongside the enrollment itself.</p>
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
              { cat: 'Lead Quality',         score: 7,  max: 20 },
              { cat: 'Signal Reading',        score: 5,  max: 20 },
              { cat: 'Math Breakdown',        score: 0,  max: 20 },
              { cat: 'Objection Handling',    score: 4,  max: 15 },
              { cat: 'Call Outcome Quality',  score: 4,  max: 10 },
              { cat: 'Compliance',            score: 8,  max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>28/100 reflects strong raw material — warm referral, unhappy consumer, named pain point — mishandled at every execution stage.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>3-way intro handled smoothly (1:31):</strong> Thanked Dorina warmly, transitioned cleanly to 1-on-1 when she hung up, and immediately activated the social proof: &ldquo;Dorina was talking so highly of you.&rdquo; Most agents fumble this setup. You turned it into a trust moment.</li>
            <li><strong>Consumer validation on Aetna (7:59):</strong> When Jean described the WellPoint exit and the wrong doctor, you said &ldquo;you&apos;re right, they should have done that for you.&rdquo; Correct instinct — positioned you as an advocate before she had reason to defend Aetna.</li>
            <li><strong>May 1st urgency lever (8:21):</strong> Correctly identified and named the effective date: &ldquo;Right now it&apos;s going to be effective in a few days, in nine days on the first.&rdquo; That is the right urgency frame. The problem was not identifying it — it was not deploying it again when she asked for the callback.</li>
            <li><strong>TPMO recovery when she was confused (9:26):</strong> When Jean said she had no idea what the disclaimer meant, you explained it in plain language — &ldquo;it&apos;s like a template, it means I work with 16 plans in your area, not every plan.&rdquo; You stayed calm and didn&apos;t get defensive.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC1 · 11:51</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Callback surrender — close not attempted</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Jean said &ldquo;can you call me back later please.&rdquo; That is a soft deflection from someone caught off guard — not a hard no. You immediately agreed: &ldquo;What time would you like?&rdquo; No reframe, no urgency reference, no attempt. The May 1st lever was in your hand. You didn&apos;t swing it. The callback has no guarantee of converting — and this one didn&apos;t need a callback to close.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Jean, I know Dorina surprised you today — but here&apos;s why she called me right now specifically: your May 1st window is open. You&apos;ve been trying to fix the Aetna situation for months. I&apos;m the person who actually does it. Give me 5 more minutes — your doctor goes back on that card before the end of this week. If you still want to wait after that, I&apos;ll call you at exactly 2:35.&rdquo;</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC4 · 3:42, 9:01</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>TPMO disclaimer delivered after data collection</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Medicare number was collected at 4:12, zip at 5:12. The TPMO disclaimer didn&apos;t arrive until 9:01 — over 8 minutes into the call. That&apos;s a compliance sequencing violation. It&apos;s also why Jean was confused when it arrived: the context for it had never been set. The disclaimer landing mid-conversation, unexplained, was the moment her trust dropped and never fully recovered.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Jean, before I pull anything up — I&apos;m required to let you know I work with about 16 Medicare carriers in your area, not every plan available. If you ever want to compare more, you can always call 1-800-Medicare. Now — can I take your zip code so I can see what&apos;s available for you?&rdquo;</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC6 · 7:19</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>SEP missed — EOC / DIF not explored</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Jean said WellPoint &ldquo;was pulling away from Texas&rdquo; and she was switched to Aetna without choosing it. That is a textbook EOC or DIF qualifying event — either one opens a year-round enrollment window. You acknowledged the situation and moved on. Two questions would have established the qualifying event and the legal authority to enroll her today. Without them, you were proceeding without knowing if you could actually enroll her — and you missed the selling point that she had a window open right now.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Jean, when exactly did you get that letter from WellPoint — was it in the fall or more recently? And when did your Aetna coverage start?&rdquo; Those two questions tell you which SEP applies and whether the window is still open. Then: &ldquo;Good news — because WellPoint left your area, you have a Special Enrollment Period right now that lets us get you onto a better plan. That&apos;s exactly why I can make this happen by May 1st.&rdquo;</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 4 · RC2 · 7:52</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Client Gold ignored — wrong doctor signal not weaponized</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Jean said &ldquo;they got some other doctor, I don&apos;t even know who she is.&rdquo; That is the strongest closing line on this call — specific, emotional, actionable. You said &ldquo;you&apos;re right&rdquo; and moved on to recommending UnitedHealthcare. Doctor confirmation is the natural close with this consumer. You never asked for the doctor&apos;s name. You never offered to verify she was in-network. The consumer&apos;s core fear — loss of her own doctor — was acknowledged and dropped.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Jean, your doctor is everything. What&apos;s her name — the one from your WellPoint card?&rdquo; [Get the name.] &ldquo;Okay — I&apos;m pulling up the United plan right now. If she&apos;s in-network, I&apos;m fixing this for you today. Give me 30 seconds.&rdquo; Doctor confirmation is the close for this consumer. Use it.</p>
              </div>
            </div>

          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '14px' }}>Jean Pierre, you had everything you needed on this call and you left it on the table. Dorina handed you a warm lead — a consumer who was already unhappy, who had been trying to fix it for months, who was introduced by her trusted friend. Jean Gold told you exactly what she needed. At 7:52 she said the card has &ldquo;some other doctor&rdquo; she doesn&apos;t even know. At 8:15 she said she&apos;d &ldquo;tried to fix it&rdquo; and nobody helped her. That is not a cold lead. That is a consumer ready to be enrolled.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>When she asked for the callback at 11:51, your line was: &ldquo;Jean, I know Dorina surprised you — but here&apos;s why she called me today specifically: your May 1st window is open right now. You&apos;ve been trying to fix this for months. I&apos;m the person who actually does it. Give me 5 more minutes. If you still want to call back after that, I&apos;ll call you at exactly 2:35.&rdquo; You had the urgency, the referral credibility, and the pain point — all three. Use all three in that moment, every time. And move the disclaimer to the front of every call, before the first data ask, no exceptions.</p>
        </section>

      </div>
    </PageShell>
  )
}
