'use client';

import Link from 'next/link';
import PageShell from '@/components/layout/PageShell';
import styles from '../../../marcus-hughes/page.module.css';

export default function MarvinFarrierCallPage() {
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
            Marvin Farrier
          </h1>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '14px', color: '#666' }}>April 20, 2026 · 34m 06s</span>
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
              77
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
            A 65-minute enrollment with a strong opening and clear plan routing. Ashley identified Marvin's LIS eligibility early (5:14) and correctly steered him into a C-SNP pathway, showing mature signal reading. The compliance sequence was solid, and medication inventory was thorough.
          </p>
          <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#333', margin: '0 0 12px 0' }}>
            The call contained approximately 15-20 minutes of off-topic tangents where Marvin went into detailed stories about his family, military history, and leisure interests. While these moments built rapport, they consumed significant call time without advancing the clinical or enrollment narrative. The math breakdown, though present, was not comprehensive—Ashley presented individual drug tiers but did not compare annual cost scenarios or annualize the premium difference.
          </p>
          <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#333', margin: 0 }}>
            Despite these gaps, the call closed successfully. The LIS leverage and C-SNP routing were the critical drivers. This is a strong enrollment that would have been exceptional with tighter time management and more complete math.
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
              { category: 'Lead Quality', score: 17, max: 20 },
              { category: 'Signal Reading', score: 18, max: 20 },
              { category: 'Math Breakdown', score: 14, max: 20 },
              { category: 'Objection Handling', score: 13, max: 15 },
              { category: 'Call Outcome Quality', score: 8, max: 10 },
              { category: 'Compliance', score: 7, max: 15 }
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
            <li>Identified LIS eligibility at 5:14 and recognized the enrollment leverage immediately; pivoted to C-SNP routing without hesitation.</li>
            <li>Built strong rapport; consumer felt heard and comfortable throughout the call despite its length.</li>
            <li>Clean medication inventory and formulary cross-check; no gaps in prescription coverage assessment.</li>
            <li>Smooth close; handled enrollment affirmation with warmth and clarity; no buyer's remorse language.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

            {/* RC1 */}
            <div style={{
              border: '1px solid #ddd',
              borderLeft: '4px solid var(--terracotta)',
              borderRadius: '6px',
              padding: '16px',
              backgroundColor: '#fafaf8'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--terracotta)', marginBottom: '4px' }}>
                RC1: Extended Off-Topic Tangents
              </div>
              <p style={{ fontSize: '14px', color: '#333', margin: '8px 0 0 0', lineHeight: '1.5' }}>
                Between 18:30 and 35:45, Marvin went into extended stories about his family, military background, and hobbies. While these moments built valuable rapport, they consumed 15-20 minutes without advancing the clinical or enrollment narrative. A gentle redirect ("That's great—I want to make sure we get you covered...") would have preserved rapport while keeping the call on track.
              </p>
            </div>

            {/* RC3 */}
            <div style={{
              border: '1px solid #ddd',
              borderLeft: '4px solid var(--terracotta)',
              borderRadius: '6px',
              padding: '16px',
              backgroundColor: '#fafaf8'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--terracotta)', marginBottom: '4px' }}>
                RC3: Incomplete Math Breakdown
              </div>
              <p style={{ fontSize: '14px', color: '#333', margin: '8px 0 0 0', lineHeight: '1.5' }}>
                Ashley presented individual drug tier copays and covered medications but did not compare annual cost scenarios or show a side-by-side of the new plan's premium vs. Marvin's existing plan. A simple annualized comparison ("Here's your annual cost under the new plan vs. what you're paying now...") would have strengthened the financial justification for the switch and left Marvin with a clearer picture of the savings.
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
              <span style={{ fontWeight: 600, color: 'var(--mustard-dark)' }}>LIS Eligibility</span> (5:14) — LEVERAGED
            </div>
            <div style={{
              backgroundColor: '#fffbf0',
              border: '1px solid #f0e0c0',
              borderRadius: '6px',
              padding: '12px 14px',
              fontSize: '14px',
              color: '#333'
            }}>
              <span style={{ fontWeight: 600, color: 'var(--mustard-dark)' }}>C-SNP Availability</span> (6:02) — LEVERAGED
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
              <strong>Ashley—you nailed the clinical reading and routing on this call. Your next level is time management with talkative consumers.</strong>
            </p>
            <p style={{ margin: '0 0 12px 0' }}>
              When Marvin went into stories, you let them run because building rapport matters—and you were right to prioritize that. But 15-20 minutes of tangents is leaving money on the table. Next time, after he finishes a personal story, use: "I appreciate you sharing that with me—I want to make sure we get you taken care of today so you can enjoy [thing he mentioned]." That acknowledges him, then redirects.
            </p>
            <p style={{ margin: 0 }}>
              Also: annualize the math. Show Marvin his annual premium under the old plan vs. the new one. That number alone seals enrollments. You have the signal reading to pull off both rapport and efficiency. Let's lock it in.
            </p>
          </div>
        </section>

      </div>
    </PageShell>
  );
}
