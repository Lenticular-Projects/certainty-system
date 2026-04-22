'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function ArteezCareyCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/robert-pegler" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Robert Pegler · Weekly Brief</Link>

        <div style={{ marginBottom: '32px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Robert Pegler × Arteez Carey Jr.</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 12:54 · <strong style={{ color: 'var(--terracotta)' }}>32 / 100</strong> · Missed Opportunity</p>
        </div>

        <div style={{ background: 'rgba(201, 85, 64, 0.08)', borderLeft: '3px solid var(--terracotta)', padding: '16px 20px', borderRadius: '8px', marginBottom: '32px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Compliance Alert — Audit Red Flag</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--ink)', margin: 0 }}>DST (Disaster SEP) raised proactively at 10:19. CMS explicitly prohibits agents from advertising DST — it must only be volunteered by the consumer. Two compliant pathways (INT and CSN) were available and unused.</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Arteez called in looking for a food card benefit. You ran a clean compliance opening and collected data efficiently. Then the call went wrong in two consecutive moments.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>At 5:12, Arteez confirmed she has full Medicaid. The INT SEP opens D-SNP enrollment any month, repeatable — a valid, compliant year-round pathway. You noted it, said you&apos;d show her prescription assistance, and moved on. Never circled back. At 5:57, she disclosed she&apos;s in cancer remission — a year-round CSN qualifying condition for C-SNP enrollment. You said &ldquo;oh, good. Good, good&rdquo; and moved to medications. Never followed up.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Instead, you pursued a 5-star plan (none available in her county) and then raised a disaster declaration window at 10:19 — a CMS-prohibited move. You ended the call suggesting an AEP callback in October while two always-open SEP pathways sat unused. Two missed SEPs plus a compliance alert in a single call.</p>
          </div>
        </section>

        {/* Score Breakdown */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Certainty Score Breakdown</h2>
          <div style={{ background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', borderBottom: '1px solid rgba(19,17,16,0.08)', background: 'rgba(19,17,16,0.03)' }}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 8, max: 20 },
              { cat: 'Signal Reading', score: 4, max: 20 },
              { cat: 'Math Breakdown', score: 4, max: 20 },
              { cat: 'Objection Handling', score: 6, max: 15 },
              { cat: 'Call Outcome Quality', score: 3, max: 10 },
              { cat: 'Compliance', score: 7, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>Compliance depressed by the DST proactive mention at 10:19. Score Reading and Outcome hit hard by two missed SEPs.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Clean TPMO sequence (0:44):</strong> Disclaimer, plan count, alternative resources all delivered inside 90 seconds.</li>
            <li><strong>Efficient data collection:</strong> ZIP, Medicare verification, qualifying questions handled cleanly before attempting presentation.</li>
            <li><strong>Professional tone throughout:</strong> Even when the call went off-rails with the DST direction, tone stayed warm and non-pressured.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC6 · 5:12</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>INT SEP Missed — Full Medicaid Disclosed, Not Pursued</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Arteez confirmed full Medicaid at 5:12. INT is year-round, repeatable — a compliant pathway to D-SNP enrollment any month of the year. You noted it, pivoted to prescription assistance, and never returned.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Arteez, because you have full Medicaid, you can enroll any month of the year into a plan designed specifically for folks on both Medicare and Medicaid — no waiting. Let me find the one that matches what you&apos;re looking for.&rdquo;</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC6 · 5:57</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>CSN SEP Missed — Cancer Remission Disclosed, Not Probed</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Arteez disclosed cancer remission. Chronic condition qualifiers open CSN — year-round enrollment into a Chronic Special Needs Plan. You said &ldquo;oh good, good good&rdquo; and moved to medications. One follow-up question unlocks the pathway.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;How long have you been managing this? Let me check whether there&apos;s a Chronic Special Needs Plan in your area — those are built for folks with ongoing conditions and they open a year-round enrollment window.&rdquo;</p>
              </div>
            </div>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.10)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 3 · RC4 · 10:19 · CRITICAL</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>DST (Disaster SEP) Raised Proactively — CMS Prohibited</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>You brought up a disaster-declaration enrollment window. Agents are explicitly prohibited from advertising DST. Only when a consumer volunteers disaster impact can the agent verify. This is an audit red flag.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;You mentioned you&apos;re on Medicaid — that opens a year-round enrollment window for a plan designed for your situation. And you mentioned you&apos;re in remission — that also opens a window. Let&apos;s see which gets you the best benefit package today.&rdquo; Never lead with DST.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Robert — this is the call we need to talk about. Arteez gave you two valid, year-round SEP pathways in the first 6 minutes and you had a compliant enrollment sitting right there. Instead, you pursued a 5-star plan that didn&apos;t exist in her county, then raised DST — which is an advertising violation. The DST mention is the one I need you to lock down immediately. When a consumer gives you Medicaid, probe INT. When they give you a chronic condition, probe CSN. Those are the compliant tools. DST stays closed until the consumer opens it. Re-run this call in your head — the close was there at 5:12.</p>
        </section>

      </div>
    </PageShell>
  )
}
