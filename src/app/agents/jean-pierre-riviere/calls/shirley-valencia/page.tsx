'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function ShirleyValenciaCallPage() {
  return (
    <PageShell signal="yellow">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/jean-pierre-riviere" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Jean Pierre Riviere · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Jean Pierre Riviere × Shirley Valencia</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 22, 2026 · 20:26 · Irvington, NJ (ZIP 07111) · <strong style={{ color: 'var(--mustard-dark)' }}>53 / 100</strong> · MISSED OPPORTUNITY</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Shirley Valencia called about the food card. She had diabetes and high blood pressure — both C-SNP qualifying conditions. Jean Pierre identified that within 90 seconds, which was fast and correct. He confirmed she was on a Clover plan charging a $21 premium — on a fixed income — and became genuinely concerned on her behalf. He attempted a math comparison showing her MOOP would drop from $13,000 to $8,850 with a switch.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The call broke down at 9:26 when Jean Pierre discovered he wasn&apos;t appointed to write the Humana C-SNP plan that fit her best. Instead of pivoting to a comparable C-SNP he could write, he spent the next 11 minutes telling Shirley to call her current carrier and ask if they offered a chronic plan. He gave her homework. At 18:16 he told her to call the number on the back of her Clover card and ask about their chronic plan portfolio. Shirley left with his phone number and a research assignment — not an enrollment.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The solution needed to stay in Jean Pierre&apos;s hands, not hers. When the Humana plan wasn&apos;t available, the pivot was to a C-SNP he could write — show the comparison, anchor on the grocery benefit she explicitly called about, and close on that call.</p>
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
              { cat: 'Lead Quality',         score: 8,  max: 20 },
              { cat: 'Signal Reading',        score: 12, max: 20 },
              { cat: 'Math Breakdown',        score: 12, max: 20 },
              { cat: 'Objection Handling',    score: 5,  max: 15 },
              { cat: 'Call Outcome Quality',  score: 5,  max: 10 },
              { cat: 'Compliance',            score: 11, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>53/100 — the best score of this period. Discovery and signal reading were strong. The call died on a failure to pivot when the preferred plan was unavailable.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>C-SNP qualification in 90 seconds (1:35):</strong> Confirmed diabetes and high blood pressure fast, recognized those as C-SNP qualifying conditions, and immediately began working toward the right plan type. That qualification speed matters on food card calls — it gets you to the plan that has the benefit she called about.</li>
            <li><strong>Caught the premium problem (8:20):</strong> When you saw Shirley was paying a $21 monthly premium on a fixed income, you flagged it directly: &ldquo;Why would they put you in a plan that charges you a premium?&rdquo; That showed genuine advocacy and shifted Shirley&apos;s perception of you from salesperson to advisor. That&apos;s a trust-building moment.</li>
            <li><strong>Math comparison attempted (13:40):</strong> Correctly compared the $13,000 MOOP on Clover to the $8,850 on the new plan — $4,150 in reduced risk. That&apos;s the right mechanical structure. Step 3 (humanizing that number back to the grocery card she called about) was missing, but the foundation was there.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC1 · 9:26</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>When the Humana plan wasn&apos;t available — pivot, don&apos;t give homework</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>At 9:26 you told Shirley you couldn&apos;t write the Humana plan because you&apos;re not appointed to it. That was an honest moment. But instead of pivoting to a C-SNP you could write, you spent the next 11 minutes directing her to call her current carrier and ask about their chronic plan portfolio. At 18:16 you gave her the homework explicitly: &ldquo;Call the number in the back of your Clover card and ask if they have a chronic special needs plan.&rdquo; Shirley left with a research assignment. The solution must stay in your hands. When Humana isn&apos;t available, the move is: &ldquo;That Humana plan is a great option. I also have an Aetna C-SNP right here designed for diabetes — let me show you how it compares to your Clover plan.&rdquo;</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;That Humana plan is one option — I&apos;m not appointed to write it, but I&apos;m not done yet. I have an Aetna chronic plan right here that also covers diabetes and includes a grocery benefit. Let me pull up the comparison so you can see the numbers side by side. You called about the food card — let&apos;s make sure you leave this call with a real answer.&rdquo;</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC2 · 14:27</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Logic response to an emotional objection — the $24 moment</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>At 14:27 Shirley said &ldquo;I don&apos;t think I want to change&rdquo; — then immediately said &ldquo;What the hell can I do with $24?&rdquo; That second sentence is the key. She was frustrated with the process, exhausted from being bounced around insurance calls — but the $24 frustration was still alive. That&apos;s the anchor. Respond to the $24, not the &ldquo;I don&apos;t want to change.&rdquo; She told you exactly what she needed. She needed more than $24 for groceries. That&apos;s the only reason she called.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Shirley, I hear you — you are completely fed up with the process and that makes sense. Let&apos;s forget the process entirely. The only thing that matters is the $24. You called because $24 is not enough. If I can show you a plan that puts $50 or more in grocery benefits in your pocket every month — that&apos;s double what you&apos;re getting now — would it be worth one more look?&rdquo;</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC3 · 13:40</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math breakdown was incomplete — numbers never connected back to the grocery card</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>The MOOP comparison was correct: $13,000 down to $8,850, $4,150 in reduced risk. That is Step 1 and Step 2 of a math breakdown — compare and annualize. But Step 3 — humanize — was missing. The $4,150 number stayed abstract. Shirley called about the $24 food card. The math needed to connect back to that frustration to have emotional weight.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;That&apos;s $4,000 back in your pocket for the year — and on top of that, you&apos;d be getting a grocery benefit of [$X] a month instead of that $24 from SNAP. That&apos;s what you called about. That&apos;s what this plan does for you.&rdquo;</p>
              </div>
            </div>

          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginBottom: '14px' }}>Jean Pierre, this was your best call of the period and it still ended with a consumer doing homework. The discovery was fast, the advocacy was real, and the math attempt showed you understand the structure. What went wrong happened at 9:26 — the moment you found out you couldn&apos;t write the Humana plan and had no ready pivot.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Know your C-SNP portfolio. When the first-choice plan isn&apos;t available, you need a second option loaded and ready. &ldquo;That Humana plan is one option — I also have an Aetna C-SNP right here.&rdquo; That sentence keeps the solution in your hands. The moment you tell a consumer to call their carrier and ask about chronic plans, you&apos;ve transferred the work to someone who didn&apos;t call you to do that work. Shirley called about $24 for groceries. She told you at 14:43 exactly how frustrated she was with that number. She was ready to change if you gave her a plan that solved the $24 problem. That plan existed. Get it in front of her.</p>
        </section>

      </div>
    </PageShell>
  )
}
