'use client';

import Link from 'next/link';
import PageShell from '@/components/layout/PageShell';
import styles from '../../../marcus-hughes/page.module.css';

export default function ShirleyAndrewsCallPage() {
  return (
    <PageShell signal="red">
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
            Shirley Andrews
          </h1>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '14px', color: '#666' }}>April 22, 2026 · 9m 31s</span>
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
            <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--terracotta)' }}>
              39
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
            <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>Missed Opportunity</div>
          </div>
        </div>

        {/* Executive Summary */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 600, color: 'var(--ink)', marginBottom: '12px' }}>Executive Summary</h2>
          <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#333', margin: '0 0 12px 0' }}>
            A 9.5-minute missed opportunity with a "Scared Switcher" persona: a long-time BCBS customer (49 years) expressing anxiety about leaving her current plan for an unknown alternative. This is the classic loyalty + fear dynamic—the hardest consumer to move, and the one most likely to regret staying if we abandon the attempt.
          </p>
          <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#333', margin: '0 0 12px 0' }}>
            At 3:45, Shirley said: "I've been with BCBS for 49 years. I'm scared to switch. What if something goes wrong?" This is not a logical objection—it's an emotional one rooted in security and trust. Ashley responded with "Well, the new plan is actually very similar..." and proceeded into a feature-by-feature comparison. This is a logic response to an emotional objection, which is the primary failure pattern. Shirley needed reassurance and emotional validation first ("I understand—that loyalty means something, and switching is scary"), not data.
          </p>
          <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#333', margin: 0 }}>
            No recovery attempt was made. When Shirley declined, Ashley accepted the refusal without exploring the fear, offering alternative pathways, or presenting a reframe that could have addressed the underlying anxiety. This call could have been an enrollment with the right emotional pivot.
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
              { category: 'Signal Reading', score: 6, max: 20 },
              { category: 'Math Breakdown', score: 4, max: 20 },
              { category: 'Objection Handling', score: 3, max: 15 },
              { category: 'Call Outcome Quality', score: 3, max: 10 },
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
            <li>Solid compliance opening; Medicare card and Social Security verified without friction.</li>
            <li>Calm, non-aggressive tone; Shirley felt heard, not pressured (at least initially).</li>
            <li>Attempted to address the objection; did not ignore the fear or dismiss it.</li>
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
                RC2: Logic Response to Emotional Objection + Client Gold Ignored
              </div>
              <p style={{ fontSize: '14px', color: '#333', margin: '8px 0 0 0', lineHeight: '1.5' }}>
                At 3:45, Shirley disclosed 49 years of BCBS loyalty and expressed fear about switching. This is an emotional objection rooted in security and trust, not logic. Ashley responded with "The new plan is actually similar—here are the features..." This is the textbook error: answering feelings with facts. Shirley needed emotional acknowledgment first: "I get it—49 years is a long relationship, and change is scary. But here's why this change actually protects that loyalty you value..." The 49-year loyalty should have been leveraged as Client Gold—reframed as a reason to stay protected and secure, not a reason to stay stuck.
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
                RC3: Incomplete Math Breakdown + No Recovery Attempt
              </div>
              <p style={{ fontSize: '14px', color: '#333', margin: '8px 0 0 0', lineHeight: '1.5' }}>
                Ashley presented one plan option briefly but did not annualize costs or compare financial scenarios. More critically, when Shirley declined, Ashley accepted the refusal immediately without: (a) exploring the fear further ("What specifically worries you most?"), (b) offering a reframe that addressed the emotional concern, or (c) proposing a path forward (trial period, callback, etc.). A 30-second recovery attempt could have shifted this outcome.
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
              <span style={{ fontWeight: 600, color: 'var(--mustard-dark)' }}>49-Year BCBS Loyalty</span> (3:45) — MISSED (not reframed or leveraged)
            </div>
            <div style={{
              backgroundColor: '#fffbf0',
              border: '1px solid #f0e0c0',
              borderRadius: '6px',
              padding: '12px 14px',
              fontSize: '14px',
              color: '#333'
            }}>
              <span style={{ fontWeight: 600, color: 'var(--mustard-dark)' }}>Switch Anxiety</span> (3:45) — IDENTIFIED but not addressed with emotional empathy
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
              <strong>Ashley—Shirley was a Scared Switcher, and you had an enrollment in reach. Here's the fix: feelings first, facts second.</strong>
            </p>
            <p style={{ margin: '0 0 12px 0' }}>
              When she said "I'm scared to switch," you went into features. Wrong lever. Instead: "Shirley, I get it—49 years with BCBS means something. Change is scary. But here's the truth: this new plan keeps you covered the same way BCBS does, and it saves you money. We're not taking away your protection; we're protecting you even better." That reframes her loyalty as a reason to move, not a reason to stay stuck.
            </p>
            <p style={{ margin: 0 }}>
              And when she declined: don't accept it silently. Say: "Before we hang up—what's the one thing you'd want to know about this plan before you say no?" One more question often unlocks the real objection. You had 30 seconds to recover this call, and it would have worked.
            </p>
          </div>
        </section>

      </div>
    </PageShell>
  );
}
