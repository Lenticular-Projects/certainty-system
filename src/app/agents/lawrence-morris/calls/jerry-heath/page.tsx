'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function JerryHeathCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/lawrence-morris" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Lawrence Morris · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Lawrence Morris × Jerry Heath</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 20, 2026 · 32:28 · Jasper, Georgia (Pickens County) · <strong style={{ color: 'var(--sage-dark)' }}>77 / 100</strong> · Enrolled</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Lawrence enrolled Jerry into the Devoted Choice Give Back PPO, effective May 1, 2026, at a $0 monthly premium with a $184.70/month Part B give-back added to his Social Security check. The pivotal moment came at 8:16 when Lawrence identified the give-back program as the best available option for Jerry&apos;s zip code and pivoted cleanly from the grocery card framing to the SS check increase — Jerry&apos;s real financial pain. From that point forward, the call was a controlled march to enrollment.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The DST (disaster/emergency) SEP qualification for Pickens County was handled professionally at 12:07–13:51. Lawrence introduced it with authority, connected it to Jerry&apos;s real experience (power outages, wind storms, rural roads), and used it as the enrollment window without overselling. Jerry confirmed the impact naturally and Lawrence moved forward without hesitation. This was confident, compliant SEP execution.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The compliance read (22:38–26:42) was extensive and Jerry took it with good humor. Lawrence&apos;s rapport throughout — the Christmas birthday moment at 3:56, the comment about recording being &ldquo;a book&rdquo; at 26:46 — kept the call warm across a 32-minute runtime. The enrollment closed cleanly at 30:42 with a confirmation code issued. Jerry&apos;s final question about whether the money comes on a card (31:21) was a trust-check Lawrence answered directly and correctly.</p>
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
              { cat: 'Signal Reading', score: 14, max: 20 },
              { cat: 'Math Breakdown', score: 13, max: 20 },
              { cat: 'Objection Handling', score: 13, max: 15 },
              { cat: 'Call Outcome Quality', score: 10, max: 10 },
              { cat: 'Compliance', score: 12, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>Enrolled call on a cooperative, low-complexity consumer. Score reflects a clean execution with minor math and signal-reading gaps that didn&apos;t cost the sale but represent coaching opportunities.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Immediate Benefit Pivot on the Food/Money Call (0:29):</strong> Correctly identified that grocery benefits run through Medicare Advantage and oriented Jerry toward the solution within 30 seconds — no time wasted on irrelevant options.</li>
            <li><strong>DST SEP Qualification Executed with Authority (12:07):</strong> Introduced the Pickens County disaster SEP confidently — explained the declared emergency, the CMS-opened window, and the temporary nature without overselling. Verified Jerry&apos;s real-world impact (power loss, wind, rural roads) before using it as the enrollment basis.</li>
            <li><strong>SS Check Give-Back Framing Was Exactly Right (8:51):</strong> After Jerry revealed his SS check dropped from $900 to $600 due to Part B deduction, immediately reframed the give-back as &ldquo;putting money back&rdquo; and later as &ldquo;a raise on your check&rdquo; — the correct emotional frame for a consumer whose primary concern is monthly income.</li>
            <li><strong>Rapport Management Across a Long Call (3:56):</strong> Caught the Christmas birthday (12/25) and turned it into a natural human moment. Similar beats around the compliance disclaimer (&ldquo;I thought it was a book&rdquo;) kept the tone light across a 32-minute call.</li>
            <li><strong>Post-Enrollment Clarity on Give-Back Timeline (31:47):</strong> When Jerry asked about money coming on a card, corrected it clearly and added important context: may take a month or two to kick in but they will back-pay, and to stay on the plan. Proactive expectation-setting that reduces future churn.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC3 · 9:46, 10:26, 16:54</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Math Not Completed — Annualization and Humanization Missing</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>The give-back was presented as a monthly number but never annualized ($2,216.40/year) and never tied to Jerry&apos;s specific food insecurity context. This left the most powerful emotional closing frame unused. The sale closed anyway on a cooperative consumer — but on any hesitant prospect, this would cost the enrollment.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Jerry, that&apos;s $184 a month — that&apos;s $2,216 a year going back into your pocket. You told me your SS check went from $900 down to $600. This brings you back up to $784 every month. That&apos;s your grocery money, your gas money, your breathing room. Let&apos;s lock that in for you.&rdquo;</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC2 · 29:05, 29:19</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Client Gold Ignored — Food Insecurity Not Deployed</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Jerry confirmed at 29:05 that he ate less because there wasn&apos;t enough money for food and that SNAP ($300/month) doesn&apos;t go far. This was the most emotionally resonant statement in the call. It came during the health survey post-enrollment, so it didn&apos;t cost this sale — but it represents a pattern of missing the humanization step that would matter on a closer call.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Jerry, I&apos;m glad you told me that. The give-back on this plan — $184 every month — that&apos;s real food money. That&apos;s not a brochure number, that&apos;s groceries. That&apos;s what this is designed for. Let&apos;s make sure we get this for you.&rdquo;</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Gold Audit */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Client Gold Audit</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--sage-dark)', margin: '0 0 6px' }}>Gold #1 · 8:46 · LEVERAGED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;That was giving me 900, but then they started taking out this Medicare. So now I get 600 a month.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>Financial loss and a feeling of being reduced — the Part B deduction feels like something taken from him. Lawrence correctly identified this as the primary deployment opportunity and pivoted immediately to the give-back as &ldquo;putting money back.&rdquo; Used it throughout the presentation (8:51, 10:26, 14:01). To sharpen: &ldquo;You went from $900 to $600. Jerry, that&apos;s $300 a month they took. We&apos;re getting $184 of it back.&rdquo;</p>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Gold #2 · 29:05 · MISSED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;Well, yes, sir. Well, I get $300 a month on SNAP, but it don&apos;t go far.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>The deepest Gold in the call — food insecurity confirmed, SNAP inadequate, eating less than he should. It came post-enrollment during the health survey, so the sale was already closed. Lawrence acknowledged with &ldquo;I completely understand&rdquo; and moved on. On a hesitant prospect, this would be the closing statement: &ldquo;That $184 a month we&apos;re adding to your check? That&apos;s not extra — that&apos;s groceries. That&apos;s exactly what this was designed for.&rdquo;</p>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Gold #3 · 5:55 · MISSED</p>
              <p style={{ fontSize: '0.9375rem', fontStyle: 'italic', color: 'var(--ink)', margin: '0 0 10px' }}>&ldquo;Well, actually I don&apos;t drive. My sister-in-law, she drives.&rdquo;</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>Jerry depends on his sister-in-law for transportation — potential isolation and dependency. The plan&apos;s transportation benefits (rides to appointments) were never connected to this. Suggested deployment: &ldquo;Since you depend on your sister-in-law for rides — this plan includes transportation benefits to doctor&apos;s appointments. That means you don&apos;t have to ask her every time. That&apos;s yours now.&rdquo;</p>
            </div>
          </div>
        </section>

        {/* The Moment That Decided This Call */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>The Moment That Decided This Call</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>At 6:59, Lawrence delivered the winning line: <em>&ldquo;Now is there — if we can get you qualified here, we&apos;re actually going to be able to get some money back for you.&rdquo;</em> That single sentence set the direction of the entire enrollment. Everything after — the plan presentation, the DST SEP qualification, the give-back math, the compliance read — was a controlled march from a frame that had already been set. Jerry came in asking about grocery cards; Lawrence translated that into &ldquo;money back on your check&rdquo; before the plan was ever named. That pivot was the call.</p>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Lawrence, this was a clean enrolled call and you should feel good about it. The give-back framing was exactly right — the moment Jerry told you his check went from $900 to $600, you pivoted to &ldquo;we&apos;re going to put money back on your check&rdquo; and held that frame all the way through enrollment. That&apos;s the right instinct and you executed it consistently. The DST SEP qualification was also well done — you introduced it with authority, verified Jerry&apos;s real experience before using it, and moved forward without overselling. That&apos;s compliant and professional.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Here&apos;s the one coaching point that will make your enrolled calls even more powerful: close the math loop every time you present the give-back. You said $184.70 multiple times, but you never said $2,216 a year. On a consumer like Jerry — who told you he gets $300 in SNAP and it doesn&apos;t go far, who told you he eats less because money is tight — the annual number is the closing number. &ldquo;$184 a month, that&apos;s $2,216 a year going back into your pocket, Jerry. That&apos;s your grocery money&rdquo; — that&apos;s the line that converts a cooperative consumer into a committed one. You had all the pieces; you just didn&apos;t assemble them at the end.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>One more thing: the food insecurity answer came up in your health survey questions after the enrollment was already done. Start surfacing those questions earlier — during discovery, before the plan presentation — so you can use what you learn. &ldquo;Are you eating okay? Is money tight for groceries?&rdquo; — those answers should be in your hands before you present the plan, not after. Jerry told you something powerful at minute 29. If you&apos;d known that at minute 6, your plan presentation would have had a completely different emotional charge.</p>
          </div>
        </section>

      </div>
    </PageShell>
  )
}
