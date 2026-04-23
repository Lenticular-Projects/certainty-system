'use client';

import Link from 'next/link';
import PageShell from '@/components/layout/PageShell';
import styles from '../../../marcus-hughes/page.module.css';

export default function KaramelCallPage() {
  return (
    <PageShell signal="amber">
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
            Karen Framel
          </h1>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '14px', color: '#666' }}>April 20, 2026 · 13m 16s</span>
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
            <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--mustard-dark)' }}>
              58
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
              Not Enrolled
            </div>
            <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>Correct No-Sale</div>
          </div>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '12px' }}>Executive Summary</h2>
          <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#333', margin: '0 0 12px 0' }}>
            This was a correct no-sale call that ended with the consumer deciding to stay on her existing Aetna plan. Karen executed a solid compliance intro and gathered good health history data, including Medicare card verification and current medication inventory.
          </p>
          <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#333', margin: '0 0 12px 0' }}>
            The critical miss came at 10:38 when the consumer disclosed a chronic dental pain issue that prevents her from eating and significantly impacts her quality of life. This was a text-book Client Gold moment—a non-medical pain point that creates real emotional enrollment leverage—but Karen didn't recognize it as such and moved on to standard plan research instead of exploring the emotional weight of that disclosure.
          </p>
          <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#333', margin: 0 }}>
            The math breakdown was incomplete (no annualization of costs), and the enrollment attempt at the end felt transactional rather than connected to what the consumer had shared about her life. Because the consumer genuinely preferred her existing plan after full comparison, the no-sale is correct—but the opportunity to reframe the decision or create stronger enrollment urgency was missed.
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
              { category: 'Lead Quality', score: 14, max: 20 },
              { category: 'Signal Reading', score: 8, max: 20 },
              { category: 'Math Breakdown', score: 12, max: 20 },
              { category: 'Objection Handling', score: 10, max: 15 },
              { category: 'Call Outcome Quality', score: 7, max: 10 },
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
            <li>Strong Medicare card verification at the start; set a clear compliance tone for the call.</li>
            <li>Thorough medication inventory collection; caught all current prescriptions and dosages without rushing.</li>
            <li>Correct C-SNP routing decision when the consumer mentioned arthritis—appropriate plan pathway identified.</li>
            <li>Calm, non-defensive demeanor when the consumer expressed preference for her existing plan; didn't argue or pressure.</li>
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
                RC2: Client Gold Not Deployed
              </div>
              <p style={{ fontSize: '14px', color: '#333', margin: '8px 0 0 0', lineHeight: '1.5' }}>
                At 10:38, the consumer disclosed chronic dental pain affecting her ability to eat and her quality of life. This is a non-medical pain point—a classic Client Gold moment—but Karen responded with "Let me look at your plan options" instead of acknowledging the emotional weight and exploring whether plan changes could help (e.g., better dental coverage, network dentists). The moment was missed, and leverage was lost.
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
                Karen presented monthly premium and copay examples but did not annualize the cost picture or compare annual out-of-pocket maximums between plans. Without annualization, the consumer couldn't visualize the true financial difference over a year, especially relevant given her disclosed ongoing dental needs.
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
              <span style={{ fontWeight: 600, color: 'var(--mustard-dark)' }}>Chronic Dental Pain</span> (10:38) — MISSED
            </div>
            <div style={{
              backgroundColor: '#fffbf0',
              border: '1px solid #f0e0c0',
              borderRadius: '6px',
              padding: '12px 14px',
              fontSize: '14px',
              color: '#333'
            }}>
              <span style={{ fontWeight: 600, color: 'var(--mustard-dark)' }}>Arthritis</span> (7:45) — LEVERAGED (C-SNP correctly routed)
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
              <strong>Karen—when a consumer discloses an ongoing health or lifestyle pain point (dental pain, mobility, sleep, medication side effects), pause and ask: "How much does this impact your daily life?" or "Is this something you'd want better coverage for?"</strong>
            </p>
            <p style={{ margin: 0 }}>
              This shifts the conversation from what plans exist to why this consumer should care about changing. In this case, exploring whether the new plan's dental network or copay structure could ease her pain would have reframed the choice from "which plan is closest to my current one" to "which plan solves my biggest problem." That's enrollment leverage. You read the arthritis signal correctly and routed C-SNP—apply the same clinical ear to everyday life impacts.
            </p>
          </div>
        </section>

      </div>
    </PageShell>
  );
}
