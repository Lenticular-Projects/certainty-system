'use client';

import Link from 'next/link';
import PageShell from '@/components/layout/PageShell';
import styles from '../../../marcus-hughes/page.module.css';

export default function PamelaCarterCallPage() {
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
            Pamela Carter
          </h1>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '14px', color: '#666' }}>April 21, 2026 · 39m 28s</span>
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
            A 39-minute enrollment that demonstrates strong clinical routing and genuine plan comparison work. Ashley correctly identified Pamela as C-SNP eligible (high blood pressure, arthritis, cognitive decline) and presented concrete plan options that addressed her specific conditions rather than generic alternatives.
          </p>
          <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#333', margin: '0 0 12px 0' }}>
            The call had two notable gaps: At 24:15, Pamela disclosed anxiety around her Social Security benefits and how they would cover medical expenses—this was a Client Gold moment about financial security that Ashley acknowledged but did not deeply explore or leverage for enrollment. Additionally, the math breakdown presented monthly costs and copay examples but did not annualize the picture, leaving Pamela without a clear annual cost comparison.
          </p>
          <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#333', margin: 0 }}>
            Despite these gaps, the enrollment closed successfully on the strength of the C-SNP routing and clinical appropriateness. The close felt natural and well-timed.
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
              { category: 'Lead Quality', score: 16, max: 20 },
              { category: 'Signal Reading', score: 17, max: 20 },
              { category: 'Math Breakdown', score: 13, max: 20 },
              { category: 'Objection Handling', score: 12, max: 15 },
              { category: 'Call Outcome Quality', score: 9, max: 10 },
              { category: 'Compliance', score: 10, max: 15 }
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
            <li>Correct C-SNP routing; identified Pamela's chronic conditions (high blood pressure, arthritis, cognitive issues) and presented clinically appropriate plans.</li>
            <li>Genuine plan comparison; showed specific benefits and network differences rather than generic talking points—Pamela felt the research was personal to her.</li>
            <li>Strong compliance and data collection; Medicare card verified, medication list complete, no gaps in discovery.</li>
            <li>Warm, patient tone throughout; Pamela's cognitive concerns were handled with clear, repeated explanations without condescension.</li>
          </ul>
        </section>

        {/* Failure Patterns */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '16px' }}>Failure Patterns</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

            {/* RC2 */}
            <div style={{
              border: '1px solid #ddd',
              borderLeft: '4px solid var(--terracotta)',
              borderRadius: '6px',
              padding: '16px',
              backgroundColor: '#fafaf8'
            }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--terracotta)', marginBottom: '4px' }}>
                RC2: Client Gold Not Fully Deployed
              </div>
              <p style={{ fontSize: '14px', color: '#333', margin: '8px 0 0 0', lineHeight: '1.5' }}>
                At 24:15, Pamela expressed anxiety about whether her Social Security benefits would be enough to cover medical expenses. This is a non-medical pain point—a deep emotional concern about financial security—that Ashley acknowledged ("I understand that's stressful") but did not explore or leverage. A simple follow-up ("Let's make sure you're on a plan that protects that Social Security, so you can feel secure...") would have reframed the plan decision as a solution to her biggest worry and deepened the enrollment enrollment.
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
                RC3: Math Not Annualized
              </div>
              <p style={{ fontSize: '14px', color: '#333', margin: '8px 0 0 0', lineHeight: '1.5' }}>
                Ashley presented monthly premiums, individual copay examples, and out-of-pocket maximums, but did not calculate the annual cost picture. Showing Pamela her annual premium ($2,000) vs. her current plan's annual cost would have given her a memorable financial summary and stronger confidence in the enrollment decision.
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
              <span style={{ fontWeight: 600, color: 'var(--mustard-dark)' }}>Social Security Financial Anxiety</span> (24:15) — MISSED (partially explored, not leveraged)
            </div>
            <div style={{
              backgroundColor: '#fffbf0',
              border: '1px solid #f0e0c0',
              borderRadius: '6px',
              padding: '12px 14px',
              fontSize: '14px',
              color: '#333'
            }}>
              <span style={{ fontWeight: 600, color: 'var(--mustard-dark)' }}>Chronic Conditions (BP, Arthritis, Cognitive)</span> (5:40–8:00) — LEVERAGED (C-SNP correctly routed)
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
              <strong>Ashley—your C-SNP routing and clinical instincts on Pamela's call were strong. To push your score from 77 to 85+, lean into financial Client Gold the way you lean into clinical signals.</strong>
            </p>
            <p style={{ margin: '0 0 12px 0' }}>
              When Pamela mentioned Social Security anxiety, you acknowledged it and moved on. Next time, pause there: "Tell me more about that—how much does it worry you?" Listen. Then: "That's exactly why this plan protects you: [specific benefit]. Your Social Security goes further, so you feel secure." That reframe makes the enrollment about solving her real fear, not just picking a plan.
            </p>
            <p style={{ margin: 0 }}>
              Also: annualize the math every time. "Your annual cost is $2,000, compared to $2,400 on your current plan—$400 in your pocket every year." That number lands harder than monthly copays.
            </p>
          </div>
        </section>

      </div>
    </PageShell>
  );
}
