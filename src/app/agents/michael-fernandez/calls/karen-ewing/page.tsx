'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function KarenEwingCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/michael-fernandez" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Michael Fernandez · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Michael Fernandez × Karen Ewing</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 20, 2026 · 12:37 · Warrior, AL (Jefferson County, ZIP 35180) · <strong style={{ color: 'var(--terracotta)' }}>42 / 100</strong> · Missed Opportunity</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Karen Ewing is a warm referral from Mr. Sisson — a Viva Medicare Extra Help D-SNP member in Jefferson County, Alabama with COPD and Type 2 diabetes. She engaged fully in the early minutes, providing her DOB, SSN, and Medicare number. When Michael asked for her medication list to run a proper plan comparison, she disclosed at 9:58 that she had no intention of leaving Viva. The call ended at 12:27 on an unanchored callback promise — no reframe, no objection pivot, no enrollment.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Karen was not a refusal. She was a loyalist evaluating. She gave Michael her SSN and her surgical history — cardiac, knee replacement, dentures, diabetes. Every benefit on the plan he was presenting mapped directly to something she told him. When she said "I thought this was going to be something different" at 9:58, she was looking for a solution built around her. Michael gave her a list of someone else's benefits instead.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The INT SEP window was wide open — partial Medicaid paying her Part B premium qualifies for D-SNP enrollment any month of the year. Michael verified the Medicaid status and moved on without naming the window. That single piece of information would have created urgency and framed the call as an opportunity Karen couldn&apos;t afford to miss.</p>
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
              { cat: 'Lead Quality',         score: 10, max: 20 },
              { cat: 'Signal Reading',        score: 8,  max: 20 },
              { cat: 'Math Breakdown',        score: 6,  max: 20 },
              { cat: 'Objection Handling',    score: 4,  max: 15 },
              { cat: 'Call Outcome Quality',  score: 3,  max: 10 },
              { cat: 'Compliance',            score: 11, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>42/100 — strong compliance foundation, failed persuasion layer. A warm referral lost to loyalty objection surrender and absent emotional anchoring.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Adaptive Data Collection (5:05):</strong> When Karen couldn&apos;t find her Medicare card, Michael immediately pivoted to name/DOB/SSN lookup without losing momentum. &ldquo;We can do this a different way&rdquo; kept the call moving — genuine composure under a common friction point.</li>
            <li><strong>Plan Intelligence and System Navigation (7:07):</strong> Correctly pulled Karen&apos;s current plan, identified D-SNP + Extra Help + partial Medicaid status, and confirmed the Medicaid tier accurately. Strong backend competency.</li>
            <li><strong>Concrete Benefit Numbers Presented (10:33):</strong> Michael did present specific figures — $321/month food card, $27.70 premium, $3K dental, $300 eyewear — rather than speaking in vague generalities. The numbers existed. They just weren&apos;t personalized or annualized.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC2 · 7:51, 8:07, 8:24</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Client Gold Ignored — Medical Narrative Not Deployed</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Karen disclosed cardiac surgery, knee replacement, dentures, diabetes management, and home health visits — a complete roadmap of her benefit needs. Every item mapped to a specific plan benefit. Michael responded with &ldquo;Well, all Medicare plans do that&rdquo; — minimizing her experience rather than using it as the anchor for the entire pitch. That&apos;s what she meant at 9:58 when she said &ldquo;I thought this was going to be something different.&rdquo;</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Karen — cardiac, knee replacement, dentures, diabetes — you&apos;ve been through a lot. And I want to make sure the plan you&apos;re on is working as hard as you need it to. Can I show you something? Because what I have in your area has $3,000 in dental benefits per year, and it covers your heart conditions specifically. That&apos;s built for someone with your history. Let me just show you the numbers side by side.&rdquo;</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC1 · 11:31, 11:49, 12:17</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Surrender to Callback — Lead Lost</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Karen gave her SSN, DOB, and Medicare number — she was in the conversation. When she requested a callback at 11:31, Michael accepted with zero urgency frame and no next-step anchor: &ldquo;If I don&apos;t answer, just send me a text.&rdquo; No reframe, no medication ask, no specific time. Unanchored callbacks with satisfied loyalists have an extremely low conversion rate.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Karen, before you go — you mentioned the zero copays are the big thing for you. The plan I&apos;m looking at in your county also has zero copay for your primary care. Can I just get your medication list real quick while I have you — even the top three or four? It&apos;ll take two minutes, and then when you call back I&apos;ll already have everything ready for you. What&apos;s the first one?&rdquo;</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC6 · 7:07, 7:25</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>INT SEP Not Named — Urgency Never Created</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Karen&apos;s partial Medicaid (QMB/SLMB paying Part B premium) qualifies for INT SEP — D-SNP enrollment any month of the year. Michael verified the Medicaid status and confirmed it, then moved on. Without naming the SEP, there is no urgency. Karen has no reason to act before October.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Karen, here&apos;s something important — because Medicaid is helping pay your premium, you actually have a special enrollment period that&apos;s open right now. You don&apos;t have to wait until October. If we find something better for you today, we can move you today. Let me show you what&apos;s available in Jefferson County for someone in your exact situation.&rdquo;</p>
              </div>
            </div>
          </div>
        </section>

        {/* The One Move */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>The Moment That Decided This Call</h2>
          <div style={{ padding: '18px 20px', background: 'rgba(19,17,16,0.03)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 8px' }}>8:07 — Karen&apos;s medical narrative</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 12px' }}>&ldquo;I had cardiac removed and I had to get dentures and diabetes exams and my eyes and stuff. And then, I mean, they&apos;ve really been helpful when I had knee replacement surgery.&rdquo;</p>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>Karen handed Michael the entire pitch in one breath. Cardiac → plan coverage. Dentures → $3,000 dental. Diabetes → possible C-SNP. Eyes → $300 eyewear. The correct move was to stop immediately, reflect every item back, and connect each benefit dollar to something she just described. Instead Michael responded with &ldquo;Well, all Medicare plans do that.&rdquo; That was the moment the call started to slip.</p>
          </div>
          <div style={{ marginTop: '12px', padding: '14px 18px', background: 'rgba(125, 157, 123, 0.06)', borderRadius: '8px', borderLeft: '3px solid var(--sage-dark)' }}>
            <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--sage-dark)', margin: '0 0 6px' }}>The One Move</p>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.65, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Karen, you&apos;ve been through cardiac surgery, a knee replacement, and diabetes management — you&apos;ve needed your plan to show up for you. What I&apos;m looking at in Jefferson County right now has $3,000 in dental, $321 a month in groceries, and the same zero copay structure you have today, for $27.70 a month. That&apos;s less than a dollar a day to add all of that. Before you go, give me your top three medications — just three — and I&apos;ll have everything ready when you call back.&rdquo;</p>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Michael, this call had everything you needed to close — a warm referral, a consumer who gave you her SSN and DOB, COPD and T2D on file, cardiac surgery, knee replacement, dentures, and an INT SEP window wide open because of her Medicaid status. Karen was not a refusal. She was a loyalist evaluating whether you understood her situation well enough to trust. You didn&apos;t give her a reason to trust you — you gave her a list of someone else&apos;s benefits.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '12px' }}>For your next call with a satisfied loyalist: never lead with the new plan — lead with their story. Reflect their medical history back to them, connect every benefit to something they already told you, and name the SEP window if it exists. When Karen said Medicaid was paying her Part B premium, your next line should have been: &ldquo;Karen, because of that Medicaid coverage, you actually have a special enrollment window open right now — you don&apos;t have to wait until October.&rdquo; That reframe turns a pitch into an opportunity she can&apos;t afford to miss.</p>
        </section>

      </div>
    </PageShell>
  )
}
