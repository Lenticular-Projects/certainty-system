'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function DeweyBakerCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/tavares-smith" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Tavares Smith · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Tavares Smith × Dewey Baker</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 20, 2026 · 08:00 · Commerce, Georgia · <strong style={{ color: 'var(--terracotta)' }}>27 / 100</strong> · Missed Opportunity (Hangup)</p>
        </div>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Dewey Baker, an 83-year-old UnitedHealthcare member, entered the call passively and disclosed early he did not want to change his insurance. You correctly reframed toward a benefits review ('Let's make sure you're maximizing your benefits'), which temporarily saved the call. However, the recovery was only surface-level — Dewey's core concern was never neutralized.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>After pulling up his account, you presented a $35/quarter OTC allowance, then immediately pivoted to 'I can see what other benefits are out there' — inviting comparison shopping Dewey had already refused. When he dismissed this with 'Forget it,' you escalated the pressure with a plan-update lecture. Dewey hung up at 7:54. The core failure was missed Client Gold: his diabetes and high blood pressure qualified him for a C-SNP year-round under CSN SEP — a frame never deployed.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The call ended because you pushed a sale instead of solving a problem. A consumer who explicitly refused switching could have been retained with the right specialized-plan frame. This was a closeable call that became a hangup due to agent behavior.</p>
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Certainty Score Breakdown</h2>
          <div style={{ background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', borderBottom: '1px solid rgba(19,17,16,0.08)', background: 'rgba(19,17,16,0.03)' }}>
              <span>Category</span>
              <span>Score</span>
              <span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 6, max: 20 },
              { cat: 'Signal Reading', score: 4, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 4, max: 15 },
              { cat: 'Call Outcome Quality', score: 3, max: 10 },
              { cat: 'Compliance', score: 10, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Clean TPMO Compliance (0:41):</strong> Delivered full TPMO disclaimer without fumbling — organization count, product count, Medicare.gov reference. This is often rushed; you got it right.</li>
            <li><strong>Smart Initial Recovery (1:37):</strong> When Dewey said he didn't want to switch, you pivoted to 'let's maximize your benefits' — reframing from sale to audit. Correct instinct that kept the call alive six more minutes.</li>
            <li><strong>Complete Pre-Enrollment Verification (1:44):</strong> Callback number, decision-maker, nursing home status — all three checks handled efficiently without awkwardness.</li>
          </ul>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC1 · 7:07</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Loyalty Frame Broken by Agent</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>At 1:37, you reframed as a benefits audit. At 7:07, you broke that frame by inviting comparison shopping — the exact pitch Dewey refused at 1:33. This turned a cooperating consumer hostile.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>After presenting the UHC figure, stay in frame: 'Dewey, that's what you're getting on UHC. Let me check if there's a version of UHC that gives you more — without changing anything.' Never invite external comparison.</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC2 · 6:17</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Client Gold Ignored — Chronic Conditions</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Dewey disclosed diabetes and high blood pressure — qualifying him for a C-SNP year-round under CSN SEP. You acknowledged and moved on without connecting to plan value. This was the most powerful enrollment hook and was never used.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>Right after conditions: 'Dewey, those two conditions actually qualify you for a Chronic Special Needs Plan — built specifically for people managing what you're managing. Let me check if UHC has one in Jackson County.'</p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Tavares, you got an 83-year-old resistant consumer to stay on the phone eight minutes with clean compliance and a smart initial pivot. The problem wasn't your instincts — it was what happened after.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>At 6:17, Dewey told you he has diabetes and high blood pressure. That should have changed the entire call. Those two conditions together qualify him for a C-SNP year-round. Instead of stopping and saying 'Dewey, those conditions actually qualify you for a specialized plan built for people in your situation,' you moved on. You walked past the enrollment hook. Then at 7:07, you invited him to compare plans — the exact thing he refused at 1:33. You broke the contract, and that's what set off the hangup chain.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '14px' }}>Here's what to take into every loyalist call: when they say 'I don't want to switch,' take it off the table for good and mean it. Say 'I'm not moving you off UHC' and then don't invite comparison shopping. If their conditions qualify for a specialized plan, frame it as 'this is a different category built specifically for your situation,' not 'here's what else is out there.' Dewey wasn't uncloseable. He was a man who wanted to feel like his current plan was being respected. He hung up the moment he felt it wasn't.</p>
        </section>
      </div>
    </PageShell>
  )
}
