'use client'

import PageShell from '@/components/layout/PageShell'
import Link from 'next/link'

export default function KarenColmCallPage() {
  return (
    <PageShell signal="amber">
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '64px 24px 96px', position: 'relative', zIndex: 1 }}>
        <Link href="/agents/michelle-marrero" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>← Back to Michelle Marrero · Weekly Brief</Link>

        <div style={{ marginBottom: '40px' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>The Certainty System · Call Analysis</p>
          <h1 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--ink)', margin: '8px 0' }}>Michelle Marrero × Karen Colm</h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)' }}>April 21, 2026 · 10:11 · King Mills, Ohio (ZIP 45034) · <strong style={{ color: 'var(--mustard-dark)' }}>61 / 100</strong> · Correct No-Sale</p>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Executive Summary</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Karen Colm called in response to a TV commercial about a grocery card available with Medicare. She is a newly enrolled Humana Honor Give-Back Medicare Advantage member (Part C), 75 years old, living in King Mills, Ohio. She is actively battling kidney cancer — she had her kidney removed recently and started her first chemotherapy treatment the day before this call, with treatments scheduled every three weeks for the next year.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>Michelle Marrero correctly identified that Karen is already in a Medicare Advantage plan, is within her first 90 days (OEP-N window), and has transitional private insurance through her husband ending this month. Michelle explained the $79/month give-back Social Security benefit and $50/quarter OTC card, then appropriately advised against any plan changes during active chemotherapy treatment — reasoning that Karen should use Humana in May when her husband's insurance ends and assess coverage continuity then.</p>
            <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', margin: 0 }}>This is a correct no-sale. Switching Karen's plan during active chemo would risk coverage gaps for her treatments. Michelle's advice to hold course, monitor Humana's performance in May, and call back if coverage issues arise was sound, ethical, and agent-appropriate. The call score reflects a properly handled uncloseable situation — not a failure.</p>
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
              { cat: 'Signal Reading', score: 12, max: 20 },
              { cat: 'Math Breakdown', score: 5, max: 20 },
              { cat: 'Objection Handling', score: 10, max: 15 },
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
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '10px', fontStyle: 'italic' }}>61/100 reflects a properly handled no-sale situation — the 50–75 range is appropriate for a call where the agent made the correct ethical judgment and left the door open for future enrollment.</p>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>What Agent Did Right</h2>
          <ul style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)', paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Correct No-Sale Call Under Active Medical Crisis (7:14):</strong> Michelle's decision to advise against plan changes while Karen is in active chemotherapy and has transitional dual coverage is the most important moment of this call. She correctly identified that disrupting coverage during active cancer treatment could harm the consumer and potentially violate ethical enrollment standards. This took moral courage and clinical awareness — many agents would have pursued an enrollment regardless.</li>
            <li><strong>Clean TPMO Disclaimer Delivery (0:37):</strong> Michelle delivered the TPMO disclaimer accurately — 4 carriers, 38 products, Medicare.gov, 1-800-Medicare reference — without stumbling or rushing. This is compliance-required content delivered in a natural, conversational tone that didn't alienate the consumer.</li>
            <li><strong>Efficient Data Collection and Identity Verification (2:54):</strong> From zip code to Medicare number to confirmed identity to DOB to address to permission for eligibility determination — Michelle ran through the full data collection sequence efficiently in under 4 minutes. The consumer had to retrieve her Medicare card and Michelle waited patiently, then collected the MBI accurately.</li>
            <li><strong>OEP-N Window Education (7:47):</strong> Michelle correctly explained the 90-day trial period for new Medicare enrollees (OEP-N) and the AEP/OEP windows at 9:02–9:16. This education gives Karen real value and plants the seed for a future callback with proper urgency context.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ padding: '16px 20px', background: 'rgba(201, 85, 64, 0.05)', borderRadius: '10px', borderLeft: '3px solid var(--terracotta)' }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', margin: '0 0 6px' }}>Pattern 1 · RC6 · 5:06</p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: '0 0 8px' }}>Missed CSN SEP — Cancer C-SNP Not Explored</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px' }}>Karen has kidney cancer with active chemotherapy — a qualifying condition for C-SNP enrollment under the CSN SEP code. A cancer-focused C-SNP in Warren County (if one exists) could offer condition-specific care coordination, lower oncology copays, and better cancer care management than a standard give-back MA plan. Michelle gave up a potentially beneficial and legal enrollment by not checking for C-SNP availability.</p>
              <div style={{ padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>Prevention Script</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>Karen, because you have an active cancer diagnosis, there's a specific type of Medicare plan called a Chronic Condition Special Needs Plan — a C-SNP — that's designed for people going through cancer treatment. These plans can have better coverage for your chemo appointments and care coordination. Let me check if one is available in your ZIP code, because if there is, that would be the right plan for your situation right now.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontFamily: 'var(--font-playfair, Georgia, serif)', fontSize: '1.375rem', fontWeight: 700, marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid rgba(19,17,16,0.12)' }}>Coaching Recommendation</h2>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.75, color: 'var(--ink)' }}>Michelle, this was a mature, integrity-driven call and I want to recognize that first. The decision to not enroll Karen during active chemotherapy, with dual transitional coverage in place, was the right call — and a lot of agents would have gone for the enrollment anyway. That judgment protects consumers and builds the kind of trust that generates referrals. That's the Certainty System at its best.

Here's what will make you even better on calls like this: when a consumer reveals kidney cancer and tells you she started chemo yesterday (5:06), that's a CSN flag — a year-round SEP for chronic conditions including cancer. Before defaulting to a no-sale, the correct move is to check if a C-SNP exists in ZIP 45034. C-SNPs are built for exactly this situation — better oncology care coordination, lower copays for condition-specific treatment. If one exists, enrolling Karen into it would have been the most beneficial thing you could do for her — legally, medically, and financially. Always run the C-SNP check before making the no-sale call on a cancer patient.</p>
        </section>

      </div>
    </PageShell>
  )
}
