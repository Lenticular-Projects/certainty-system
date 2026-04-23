'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function RosettaPaulCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/ashley-whitehurst" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Ashley Whitehurst · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Ashley Whitehurst × Rosetta Paul</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 22, 2026 · 27:13 · Riverview, FL (ZIP 33578) · <strong style={{ color: 'var(--terracotta)' }}>65 / 100</strong> · Missed Opportunity</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This call is a MISSED OPPORTUNITY with a Certainty Score of 65. The client, Rosetta, is a classic Scared Switcher, motivated by getting more grocery money but paralyzed by fear from a negative plan change experience last year. The agent, Ashley, performed an excellent Math Breakdown, clearly articulating the financial upside of switching plans, but ultimately failed to close because she couldn't overcome the client's emotional resistance.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The root cause of this missed sale is RC2 — WRONG RESPONSE TO SIGNAL. The pivotal moment occurred at 24:07 when the client explicitly stated her fear: "I'm afraid of and for what happened last year." Instead of naming and reframing this fear, Ashley responded with a logical reassurance about the plan's benefits, a classic Pattern 3 error (Logic Response to Emotional Objection). This misstep invalidated the client's feelings and prevented the trust needed to move forward, leading to the client deferring the decision to her son.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Ashley did a fantastic job identifying and leveraging the client's frustration with her current grocery card (Client Gold). However, the one thing that would have changed the outcome was addressing the client's fear directly. By failing to reframe the emotional objection, the agent allowed the client's past negative experience to dictate the outcome of the call, despite presenting a logically superior option.</p>
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
              { cat: 'Signal Reading', score: 12, max: 20 },
              { cat: 'Math Breakdown', score: 18, max: 20 },
              { cat: 'Objection Handling', score: 5, max: 15 },
              { cat: 'Call Outcome Quality', score: 9, max: 10 },
              { cat: 'Compliance', score: 11, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>65/100 reflects strong technical execution in some areas but a critical failure in emotional intelligence — excellent Math Breakdown undercut by poor Objection Handling.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Excellent Math Breakdown (5:37):</strong> The agent perfectly annualized the monthly savings ($100/mo → ~$1200/yr), making the financial benefit of switching tangible and significant for the client.</li>
            <li><strong>Leveraged Client Gold (18:35):</strong> After the client complained about not being able to buy sardines (12:07), the agent masterfully brought it back later, stating, "with this plan... you're going to be able to use your food card for those sardines." This showed she was listening and tied the solution directly to the client's stated pain.</li>
            <li><strong>Strong Benefit Articulation (15:12):</strong> The agent delivered a comprehensive and compelling "zero-dollar" summary of the Devoted plan's benefits, effectively communicating the value proposition for a dual-eligible member.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC2 · 5:35, 6:08, 13:18, 24:17</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Logic Response to Emotional Objection</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>By repeatedly responding to the client's fear and hesitation with facts and figures, the agent failed to build the emotional trust required for the client to feel safe enough to make a change. This cost the entire enrollment.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>"Rosetta, I hear you. It sounds like you had a really bad experience and you're worried about being put in that position again. That's completely understandable. Can you tell me what happened so I can make sure we avoid that?"</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC1 · 25:34</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Third Party Blind Spot</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>This provided the client an easy exit from the call. Instead of treating the son as a necessary part of the decision, the agent treated him as an obstacle and surrendered, losing any chance to influence the final decision-maker.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>"That's a smart idea, it's a big decision. Is he available to join us on the line for a few minutes so I can answer any questions he might have directly?"</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Gold Audit */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Client Gold Audit</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #1 · 6:33 · LEVERAGED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>"I'm spending more on grocery now. You know. And I'm not getting enough... Almost all fruits... you you buy pineapples, then I have to pay for that out of my pocket."</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>The agent effectively used this pain point throughout the call, highlighting how the new plan's less restrictive card and higher dollar amount would solve this specific problem.</p>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 6px' }}>Gold #2 · 24:07 · MISSED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>"I'm afraid of and for what happened last year. last year I had to make do with 125 a month from and then that was not enough."</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>This was the most critical piece of Client Gold, revealing the emotional core of her resistance. The agent heard the words but missed the emotion, responding with logic instead of empathy.</p>
            </div>
          </div>
        </section>

        {/* Closer's Edge */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>The Moment That Decided This Call</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}><strong>The One Move (24:07):</strong> At 24:07, after the client said "I'm afraid," the agent needed to stop selling the plan and start solving the fear. A simple, empathetic response like, "That sounds like it was a terrible experience. Tell me what happened," would have shifted the entire dynamic of the call from a transaction to a consultation, building the trust needed to close.</p>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Ashley, your highest-leverage skill gap on this call was Pattern 3: Logic Response to Emotional Objection. When Rosetta said at 24:07, "I'm afraid of and for what happened last year," the correct response was not to promise the new plan was better, but to name her fear. You should have said: "Rosetta, I hear that. It sounds like you went through a really difficult time last year and you're worried about getting trapped in a bad situation again. That's completely understandable." For practice, role-play the "Scared Switcher" call type, focusing exclusively on naming the client's stated emotion in your first sentence before attempting any solution. This is a core tenet of reframing RED signals.</p>
        </section>

      </div>
    </PageShell>
  )
}
