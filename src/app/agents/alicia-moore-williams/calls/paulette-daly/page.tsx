'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function PauletteDalyCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/alicia-moore-williams" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Alicia Moore Williams · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Alicia Moore Williams × Paulette Daly</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 20, 2026 · 89:49 · Hermitage, Tennessee · <strong style={{ color: 'var(--sage-dark)' }}>78 / 100</strong> · Enrolled</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Alicia Moore Williams successfully enrolled Paulette Daly into the Devoted Health C-SNP Choice Premium 018 Tennessee PPO C-SNP plan with a May 1, 2026 effective date and a confirmation number issued. The qualifying basis used was Paulette's documented chronic condition of asthma, enabling the C-SNP enrollment. The call resulted in a full voice signature — Paulette stated her name, date of birth (February 14, 1953), and "I agree" — and confirmation was texted to her.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The call ran nearly 90 minutes, which is well above target for a straight inbound enrollment. The extended duration was driven by a slow doctor lookup (~7 minutes searching for Dr. Stinson-Reynolds), extended medication collection with conversational digressions, a very long plan benefit reading with copay-by-copay recitation, and a lengthy post-enrollment Health Risk Assessment. Alicia is a rapport-heavy agent — she consistently builds trust through personal disclosure — but this rapport style bleeds into efficiency.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The plan match was correct: Paulette called seeking a food/grocery card, had asthma as a qualifying chronic condition, was leaving a HealthSpring Medicare Advantage plan, and had a confirmed in-network primary care physician. Alicia correctly identified the C-SNP pathway, confirmed the doctor's network status, presented the $200/month OTC benefit prominently, and closed with full compliance disclosures. The enrollment was complete and compliant. The score reflects the outcome and solid compliance while accounting for efficiency drag and missed opportunities to deploy Client Gold moments to deepen commitment and speed the close.</p>
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
              { cat: 'Signal Reading', score: 16, max: 20 },
              { cat: 'Math Breakdown', score: 12, max: 20 },
              { cat: 'Objection Handling', score: 13, max: 15 },
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
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>78/100 reflects successful enrollment on correct plan with full compliance. Score accounts for efficiency drag from a 90-minute call that should have been 35 minutes.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Identified and Pursued the C-SNP Pathway (20:33):</strong> When Paulette confirmed asthma at 10:34, Alicia immediately noted "asthma is chronic" and began building toward the C-SNP plan. This was the correct clinical pathway and the key that unlocked the $200/month OTC benefit Paulette came in for.</li>
            <li><strong>Held the Compliance Line at Call Opening (0:32):</strong> When Paulette tried to skip disclaimers, Alicia said clearly "You really can't because this is Medicare" — professional, firm, non-apologetic. Many agents would stumble or apologize here. Alicia didn't flinch.</li>
            <li><strong>Confirmed Doctor In-Network Before Committing (42:41):</strong> Before pivoting to enrollment, Alicia confirmed "Dr. Julie was in-network — so you're all set there." This is correct sequencing — never commit to enrollment without confirming the doctor. She searched thoroughly and only moved forward once confirmed.</li>
            <li><strong>Connected Vision Need to Plan Benefit (40:46):</strong> Alicia remembered Paulette's disclosure about needing glasses at 30:15, and came back to it at 40:37 with "$300 towards the glasses" — telling her to schedule an eye appointment once approved. Effective signal-to-benefit deployment that accelerated Paulette's buy-in.</li>
            <li><strong>Full Compliance Execution — Voice Signature Clean (1:15:53):</strong> The Phase VI enrollment reading was complete and the voice signature was collected correctly. Paulette stated her full name, date of birth, and "I agree." Confirmation number issued and texted. No compliance gaps.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC2 · 14:01</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Client Gold Not Mathematically Deployed</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Paulette was already a motivated buyer, so this didn't cost the enrollment — but it cost the emotional certainty that makes consumers evangelize the plan. When Paulette said "my mortgage takes my whole Social Security check," that was the moment to stop and bridge it explicitly to the OTC card benefit with dollar figures.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>"Ms. Daly — you said your mortgage takes your whole Social Security check. With this plan, your $200/month food card can be used toward eligible utility costs — electric bills, water bills. That's real money back in your pocket every single month. That's $2,400 a year. For $27.70 a month. That's the trade we're talking about."</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC1 · 11:38, 43:10, 1:17:00</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Call Efficiency Failure — 90 Minutes for Low-Complexity Enrollment</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>A 90-minute call for a cooperative, low-complexity, inbound lead is an efficiency failure. The same outcome could have been achieved in 30-35 minutes. This limits the number of enrollments Alicia can complete in a day and risks consumer fatigue — particularly during the extended benefit reading and post-enrollment HRA.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>"Ms. Daly, the plan that fits you best gives you $200/month for groceries and utilities, $300 toward glasses, your doctor is in-network, and it's $27.70/month. Let me pull up the enrollment form." Summarize benefits in 3-4 sentences. Reserve full copay-by-copay reading for consumers who ask or who see specialists frequently.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Gold Audit */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Client Gold Audit</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ padding: '14px 18px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '8px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #1 · 14:01 · MISSED</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--ink)', margin: 0 }}>"My monthly mortgage almost takes my whole Social Security cash." This is the emotional close of the call sitting in discovery. Alicia heard it and acknowledged the general sentiment, then moved into plan research. The math that would have completed the moment — "$200 a month is $2,400 a year, and you told me your mortgage takes everything — this puts real money back" — was never said.</p>
            </div>
            <div style={{ padding: '14px 18px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '8px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #2 · 30:15 · LEVERAGED</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--ink)', margin: 0 }}>"I need to get glasses, but I haven't had the finances for that right now." Alicia heard this, catalogued it, and returned to it at 40:37 with the $300 vision benefit. She connected the stated need directly to the plan's deliverable. Well executed — this accelerated Paulette's buy-in.</p>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Alicia, you enrolled Paulette cleanly and the compliance execution was spotless — from the firm redirect on the disclaimers at 0:27 through to the voice signature at 1:15:53. You correctly identified asthma as the C-SNP pathway, confirmed the doctor in-network, and made the food card the center of the presentation. That's the right call structure. The enrollment happened because you knew what you were doing.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>Here's the one thing that would have made this call elite: at 14:01 Paulette told you "my mortgage almost takes my whole Social Security cash." She revealed her deepest financial fear. You heard it, acknowledged it in spirit, and moved into plan research. But you never said the sentence that would have locked her in emotionally: "Ms. Daly, this $200/month food card — that's money you can use for eligible utility costs, electric bills, even rent and mortgage. That's $2,400 a year this plan puts back in your pocket." That sentence takes 10 seconds. It connects her fear directly to the solution. You had all the ingredients — you just didn't mix them. Make it a rule: every time a consumer reveals a financial fear, anchor the plan's dollar value to that exact fear before you move on.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>The other thing to work on is call duration. At 90 minutes, this was three times the optimal length for this type of call. Paulette was cooperative and low-complexity — one doctor, simple medications, clear primary need. Summarize benefits in 3-4 sentences for healthy consumers. Reserve full copay-by-copay reading for those who ask. The HRA can be deferred to the plan's follow-up process. Every extra minute on this call is a minute you're not available for the next Paulette. Speed is not rushing — it's respecting the consumer's time and keeping yourself available for the next enrollment.</p>
        </section>

      </div>
    </PageShell>
  )
}
