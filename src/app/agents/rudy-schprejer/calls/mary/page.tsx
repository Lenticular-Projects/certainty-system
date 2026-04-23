'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function MaryCallPage() {
  return (
    <PageShell signal="red">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/rudy-schprejer" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Rudy Schprejer · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Rudy Schprejer × Mary</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 20, 2026 · 57:55 · Apollo Beach, FL · <strong style={{ color: 'var(--terracotta)' }}>41 / 100</strong> · MISSED OPPORTUNITY</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Mary is a dual-eligible D-SNP consumer in Apollo Beach, Florida — a quarterly INT SEP window, year-round enrollable. Rudy confirmed her Medicaid status at 2:50 and correctly identified that keeping her specialist (Dr. Bishno) was her primary concern after she received a letter saying United was dropping him. The discovery phase was strong: SEP established, core pain point identified, data collected.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The call collapsed at 5:15 when the doctor lookup began. Rudy attempted to verify Dr. Bishno and Sarah Mastro in real time but could not control the process — the lookup ran in circles for the remainder of the 57-minute call, yielding confusing results without ever confirming whether the doctors were in-network. No plan was presented. No math was run. No close was attempted. The call ended with Mary still participating in a stalled doctor search.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>The second structural failure: Mary&apos;s daughter held her Medicare card and managed her decisions. Rudy worked around the daughter (using SSN for verification at 1:53) without addressing her influence on the sale. Even if the doctor lookup had resolved, the daughter remained a cancellation risk. The last viable recovery window was at 8:07 — parking the exhaustive lookup and pivoting to value with one must-keep doctor as the anchor.</p>
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
              { cat: 'Lead Quality',        score: 8,  max: 20 },
              { cat: 'Signal Reading',       score: 13, max: 20 },
              { cat: 'Math Breakdown',       score: 0,  max: 20 },
              { cat: 'Objection Handling',   score: 9,  max: 15 },
              { cat: 'Call Outcome Quality', score: 0,  max: 10 },
              { cat: 'Compliance',           score: 11, max: 15 },
            ].map((c, i, arr) => (
              <div key={c.cat} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '12px 18px', fontSize: '0.9375rem', color: 'var(--ink)', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.06)' : 'none' }}>
                <span>{c.cat}</span>
                <span style={{ fontWeight: 700, fontVariantNumeric: 'tabular-nums' }}>{c.score}</span>
                <span style={{ color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{c.max}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>41/100 — missed. System navigation paralysis caused zero math, zero presentation, zero close attempt on a D-SNP consumer with a quarterly open enrollment window.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Creative Verification Pivot (1:53):</strong> When Mary said her daughter had her Medicare card and wouldn&apos;t let her give out the number, Rudy didn&apos;t lose the call — he immediately pivoted to SSN verification. That tactical move kept the call alive.</li>
            <li><strong>Core Pain Point Identified (5:10):</strong> Mary disclosed that United was dropping her specialist, Dr. Bishno, and she was worried about losing him. Rudy correctly identified this as the primary concern and focused the discovery process on it.</li>
            <li><strong>SEP Established Correctly (2:50 and 3:22):</strong> Rudy confirmed D-SNP status and the ongoing quarterly INT enrollment window — the compliance basis for a plan change was correctly identified early.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC3 · 5:15, 8:07, 10:25</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>System Navigation Paralysis</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>The doctor lookup that began at 5:15 consumed the rest of the call. The process ran in circles — wrong names, nurse practitioners instead of specialists — without ever resolving. No plan was presented. The last viable window to recover was at 8:07: park the full list, focus on one must-keep doctor, and pivot to value. That move was never made.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;Mary, this is taking longer than I want — let&apos;s do this: I&apos;m marking Dr. Bishno as your must-keep doctor. I&apos;m confident I can find a plan that keeps him AND gets you the extra money. Can we look at that plan first, and I&apos;ll confirm the others after?&rdquo;</p>
              </div>
            </div>

            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 2 · RC2 · 1:29, 1:53</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Third Party Blind Spot — Daughter as Decision-Maker</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Mary&apos;s daughter holds her Medicare card and manages her decisions. Rudy worked around her tactically (SSN pivot) but never addressed her role strategically. Even a successful enrollment on this call would have carried a high cancellation risk — the real decision-maker was never involved.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>&ldquo;It sounds like your daughter really looks out for you — that&apos;s great. My goal is to find a plan that gives you better benefits and gives her peace of mind too. Would it make sense to include her in a quick three-way call?&rdquo;</p>
              </div>
            </div>

          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Rudy — the discovery on this call was strong. You confirmed D-SNP status, identified the SEP window, found the core pain point (losing Dr. Bishno), and kept Mary on the line when she couldn&apos;t find her Medicare card. That&apos;s a good setup.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '12px' }}>The call died when the doctor lookup went sideways and you let it run for 50 minutes. The rule for doctor verification: you get five minutes maximum. At five minutes, you park the full list and pivot — &ldquo;Let&apos;s focus on your one must-keep doctor and look at whether the plan works for you. We can verify the rest after.&rdquo; The recovery window on this call was at 8:07. After that, the momentum was gone.</p>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', marginTop: '12px' }}>The daughter situation needed to be addressed, not worked around. She controls the Medicare card — she controls the enrollment. The move was to get her on a three-way before any application, not to bypass her and hope the enrollment holds. D-SNP consumers with active family gatekeepers need the gatekeeper sold or they call back and cancel. That&apos;s the pattern to break.</p>
        </section>

      </div>
    </PageShell>
  )
}
