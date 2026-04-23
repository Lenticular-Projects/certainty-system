'use client';

import Link from 'next/link';
import PageShell from '@/components/layout/PageShell';
import styles from '../../../marcus-hughes/page.module.css';

export default function EarlJonasCallPage() {
  return (
    <PageShell signal="green">
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>

        {/* Breadcrumb */}
        <div style={{ marginBottom: '24px' }}>
          <Link href="/agents/ashley-whitehurst" style={{ color: 'var(--ink)', textDecoration: 'none', fontSize: '14px' }}>
            ← Ashley Whitehurst
          </Link>
        </div>

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ margin: '0 0 8px 0', fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 600, color: 'var(--ink)' }}>
            Earl Jonas
          </h1>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '14px', color: '#666' }}>April 21, 2026 · 20m 53s</span>
          </div>
        </div>

        {/* Score Strip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '16px',
          marginBottom: '40px'
        }}>
          <div style={{
            backgroundColor: '#f5f5f5',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Score
            </div>
            <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--sage-dark)' }}>
              82
            </div>
            <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>/ 100</div>
          </div>

          <div style={{
            backgroundColor: '#f5f5f5',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '16px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Outcome
            </div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--ink)' }}>
              Enrolled
            </div>
            <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>Live as of call</div>
          </div>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '12px' }}>Executive Summary</h2>
          <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#333', margin: '0 0 12px 0' }}>
            A clean 20-minute enrollment with expert SEP identification and VA adaptation. The pivotal moment came at 3:07 when Earl disclosed a recent move across state lines—Ashley immediately recognized this as a MOV SEP and pivoted to plan research without hesitation. This signal reading was textbook.
          </p>
          <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#333', margin: '0 0 12px 0' }}>
            The call moved efficiently through compliance, data collection, and plan presentation. However, two gaps emerged: the math breakdown did not annualize costs (presenting only monthly premiums and copays), and Ashley spent time reading through Earl's drug tier detail in depth despite him being a VA patient with VA pharmacy access. For a VA-eligible consumer, federal pharmacy benefits generally supersede Medicare drug coverage, making that segment redundant.
          </p>
          <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#333', margin: 0 }}>
            The enrollment closed smoothly on the strength of the SEP pathway and clean call flow. This is a strong close with room for sharper clinical routing on VA cases and more complete math.
          </p>
        </section>

        {/* Certainty Score Breakdown */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}>Certainty Score Breakdown</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '12px'
          }}>
            {[
              { category: 'Lead Quality', score: 18, max: 20 },
              { category: 'Signal Reading', score: 19, max: 20 },
              { category: 'Math Breakdown', score: 13, max: 20 },
              { category: 'Objection Handling', score: 14, max: 15 },
              { category: 'Call Outcome Quality', score: 9, max: 10 },
              { category: 'Compliance', score: 9, max: 15 }
            ].map((item, idx) => (
              <div key={idx} style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '12px',
                backgroundColor: '#f9f9f9',
                border: '1px solid #e5e5e5',
                borderRadius: '6px',
                fontSize: '14px'
              }}>
                <span style={{ fontWeight: 500, color: 'var(--ink)' }}>{item.category}</span>
                <span style={{ fontWeight: 600, color: '#666' }}>{item.score}/{item.max}</span>
              </div>
            ))}
          </div>
        </section>

        {/* What Agent Did Right */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}>What Agent Did Right</h2>
          <ul style={{ margin: 0, paddingLeft: '20px', color: '#333', lineHeight: '1.7' }}>
            <li>Caught the MOV SEP signal at 3:07 (recent move across state lines); pivoted to appropriate plan pathway without delay.</li>
            <li>Identified VA eligibility and adapted the call accordingly; showed clinical awareness of federal benefit interactions.</li>
            <li>Clean compliance sequence; Medicare card and Social Security verified early and efficiently.</li>
            <li>Smooth close; consumer felt supported and clear on next steps; no objection recovery needed.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

            {/* RC3 */}
            <div style={{
              border: '1px solid #ddd',
              borderLeft: '4px solid var(--terracotta)',
              borderRadius: '6px',
              padding: '16px',
              backgroundColor: '#fafaf8'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--terracotta)', marginBottom: '4px' }}>
                RC3: Math Not Annualized
              </div>
              <p style={{ fontSize: '14px', color: '#333', margin: '8px 0 0 0', lineHeight: '1.5' }}>
                Ashley presented monthly premiums ($150/month for Plan A vs. $180/month for Plan B) and individual copay examples, but did not calculate the annual cost picture. Showing Earl his annual premium ($1,800 vs. $2,160) would have quantified the choice more clearly and left him with a memorable financial summary.
              </p>
            </div>

            {/* RC1 */}
            <div style={{
              border: '1px solid #ddd',
              borderLeft: '4px solid var(--terracotta)',
              borderRadius: '6px',
              padding: '16px',
              backgroundColor: '#fafaf8'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--terracotta)', marginBottom: '4px' }}>
                RC1: Unnecessary Drug Tier Read for VA Patient
              </div>
              <p style={{ fontSize: '14px', color: '#333', margin: '8px 0 0 0', lineHeight: '1.5' }}>
                Ashley spent 8-10 minutes walking through drug tier detail for Earl's current medications. However, Earl is a VA-eligible consumer with access to VA pharmacy benefits, which generally supersede Medicare drug coverage. For VA patients, Medicare formulary detail is often not the primary decision driver. The time was valuable but misdirected; a brief summary ("Your current meds are well-covered") would have sufficed.
              </p>
            </div>

          </div>
        </section>

        {/* Client Gold Audit */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}>Client Gold Audit</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{
              backgroundColor: '#fffbf0',
              border: '1px solid #f0e0c0',
              borderRadius: '6px',
              padding: '12px 14px',
              fontSize: '14px',
              color: '#333'
            }}>
              <span style={{ fontWeight: 600, color: 'var(--mustard-dark)' }}>MOV SEP (Recent Move)</span> (3:07) — LEVERAGED
            </div>
            <div style={{
              backgroundColor: '#fffbf0',
              border: '1px solid #f0e0c0',
              borderRadius: '6px',
              padding: '12px 14px',
              fontSize: '14px',
              color: '#333'
            }}>
              <span style={{ fontWeight: 600, color: 'var(--mustard-dark)' }}>VA Eligibility</span> (4:30) — LEVERAGED
            </div>
          </div>
        </section>

        {/* Coaching Recommendation */}
        <section>
          <h2 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}>Coaching Recommendation</h2>
          <div style={{
            backgroundColor: '#1a1a1a',
            color: '#fff',
            padding: '24px',
            borderRadius: '8px',
            fontSize: '15px',
            lineHeight: '1.6'
          }}>
            <p style={{ margin: '0 0 12px 0' }}>
              <strong>Ashley—your SEP signal reading on Earl's call was excellent. Two quick wins to lock in your score above 85:</strong>
            </p>
            <p style={{ margin: '0 0 12px 0' }}>
              1. Annualize the math on every call. Monthly numbers don't stick. "Your annual cost under this plan is $1,800, compared to $2,160 on Plan B—that saves you $360 a year" is the sentence that closes deals.
            </p>
            <p style={{ margin: 0 }}>
              2. For VA-eligible consumers, skip the deep drug tier read. Say "Your current medications are well-covered, and you still have VA pharmacy access"—then move to plan decision. You don't need to read every tier for a consumer who has federal benefits on top. That time buys you breathing room for harder closes.
            </p>
          </div>
        </section>

      </div>
    </PageShell>
  );
}
