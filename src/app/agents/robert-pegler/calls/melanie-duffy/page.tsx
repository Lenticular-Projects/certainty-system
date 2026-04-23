'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function MelanieDuffyCallPage() {
  return (
    <PageShell signal="amber">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/robert-pegler" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Robert Pegler · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Robert Pegler × Melanie Duffy</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 07:16 · Houston, TX · <strong style={{ color: 'var(--mustard-dark)' }}>67 / 100</strong> · Correct No-Sale</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Melanie called inbound about the grocery card. She's currently on a WellCare Give Back HMO with $75/month adding to her Social Security. Outside AEP, no qualifying SEP events. Robert presented a competing plan with $30 quarterly OTC (~$120/year) vs. her current $900/year benefit. The math was quick and clean.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Robert correctly recommended she stay — switching would have cost her $780/year net. That's the right answer. Compliance was solid, objection handling was steady, and he executed a text-book correct no-sale. The call scored well because the recommendation protected Melanie's income. Two minor gaps remain on this otherwise clean call: he never annualized the OTC gap explicitly, and he didn't probe an ambiguous cardiac condition statement Melanie made at 3:20 — a potential CSN window.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This is professional work. The lesson is about tightening the close on correct-no-sales to make the recommendation bulletproof.</p>
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
              { cat: 'Signal Reading', score: 10, max: 20 },
              { cat: 'Math Breakdown', score: 12, max: 20 },
              { cat: 'Objection Handling', score: 11, max: 15 },
              { cat: 'Call Outcome Quality', score: 8, max: 10 },
              { cat: 'Compliance', score: 12, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>67/100 reflects a correct no-sale executed professionally — the core recommendation was sound and protected Melanie's income. The score gaps come from missed opportunities to strengthen the close and one unexplored chronic condition signal.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Correct Recommendation (5:15):</strong> Robert looked at her current OTC benefit ($900/year) against the alternative plan's OTC ($120/year) and told her to stay. That saved her $780/year. That's the job.</li>
            <li><strong>Quick Math (4:50):</strong> Robert calculated the quarterly OTC and made the comparison fast. No confusion. Clear numbers.</li>
            <li><strong>Steady Objection Handling (5:50):</strong> When Melanie expressed hesitation, Robert didn't push. He acknowledged and confirmed the right move — stay on the current plan. Professional tone throughout.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC2 · 3:20</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Ambiguous Chronic Condition Response Not Probed</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>At 3:20, Melanie said about her cardiac situation: "My heart's not here, it's not in touch." This is ambiguous — unclear if she has an ongoing cardiac condition or if this was a past event. Robert did not ask a follow-up. If Melanie has a documented cardiac condition, she qualifies for C-SNP enrollment. One question could have opened a different enrollment pathway.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>"Tell me more about your heart — is that something you're managing right now with a doctor? Is there a medication you take for it?"</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC1 · 4:50</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math Gap Not Annualized — Recommendation Stated but Not Justified Numerically</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Robert presented the $30 quarterly OTC (=$120/year) but never explicitly annualized the gap vs. her current $900/year and stated the $780/year advantage. The math was correct, but unstated. Annualizing the benefit gap makes the recommendation bulletproof — it gives Melanie a concrete number she can defend to herself.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>"Melanie, that $30 a quarter is $120 for the year. You're currently at $900 a year. If you switched, you'd lose $780 a year in benefits. Let's keep you on WellCare."</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC3 · 6:45</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>No Future Appointment Set — Call Ends Without Follow-Up</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>The call ended with Melanie confirmed to stay on her current plan. No callback was set. No follow-up for next AEP. On a correct no-sale, set a soft future touch: "I'll check in with you in October when open enrollment starts." That keeps the relationship warm for AEP when enrollment actually opens.</p>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Robert — this was a correct no-sale and you executed it professionally. Melanie stays on her plan, stays protected, and you made the right call. To tighten this for future correct-no-sales, do two things: (1) When a consumer mentions a condition ambiguously — like Melanie's heart comment — ask one follow-up question to clarify if it's ongoing. It takes 10 seconds and can unlock C-SNP windows. (2) Annualize the benefit gap explicitly. "You'd lose $780 a year" is more concrete than "$120 vs. $900." That language makes the recommendation bulletproof and removes doubt. Keep making these calls — they protect your customers and they build long-term relationships for AEP.</p>
        </section>

      </div>
    </PageShell>
  )
}
