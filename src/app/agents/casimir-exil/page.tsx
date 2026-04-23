'use client'
import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import { useState } from 'react'
import styles from './page.module.css'

export default function KazimierzExioPage() {
  const [callsOpen, setCallsOpen] = useState(true)

  return (
    <PageShell>
      <div className={styles.page}>

        {/* ── Header ── */}
        <header className={styles.header}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Agent Report</span>
          </div>
          <h1 className={styles.agentName}>Kazimierz Exio</h1>
          <p className={styles.period}>Mid-Week Report — April 22, 2026</p>
          <p className={styles.period}>Week of April 20–22</p>
          <p className={styles.updatedAt}>Updated April 22 · 1 call reviewed</p>
        </header>

        {/* ── Trend Snapshot ── */}
        <section className={styles.trendSnapshot}>
          <h2 className={styles.sectionTitle}>CRM Trend Snapshot</h2>
          <div className={styles.trendTable}>
            <div className={styles.trendHeader}>
              <span>Period</span>
              <span>Sales</span>
              <span>Conv %</span>
              <span>CPA</span>
            </div>
            <div className={styles.trendRow}>
              <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--ink)' }}>
                This Period
                <br />
                <span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--ink-60)' }}>Apr 20–21 · 16 calls · 11 billable</span>
              </span>
              <span className={styles.trendUp}>2</span>
              <span className={styles.trendUp}>12.50%</span>
              <span className={styles.trendUp}>$72.50</span>
            </div>
            <div className={styles.trendRow}>
              <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--ink-60)' }}>
                Last Week
                <br />
                <span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--ink-60)' }}>New hire — no prior data</span>
              </span>
              <span className={styles.trendNeutral}>—</span>
              <span className={styles.trendNeutral}>—</span>
              <span className={styles.trendNeutral}>—</span>
            </div>
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--ink-60)', marginTop: '8px', fontStyle: 'italic' }}>
            First period tracked — new hire. 2 sales in first 2 days is a strong debut.
          </p>
        </section>

        {/* ── The One Thing ── */}
        <motion.div
          className={styles.oneThing}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={SPRING}
        >
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>
            Your job is to identify SEPs — not create them. When Gary said "No, we're not, thank goodness," that was your answer. A consumer who can't confirm a qualifying event cannot be enrolled under that SEP. You had a valid path right in front of you — his Type 2 diabetes. Use what's real.
          </p>
        </motion.div>

        {/* ── Executive Summary ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.summaryCard}>
            <div className={styles.execSummaryInner}>
              <p>
                <strong>What's working:</strong> You opened your account with 2 sales in your first 2 days — 12.50% conversion and a $72.50 CPA on 11 billable calls. That's a strong debut. On the Gary Rich call, you showed something most new agents don't have: patience. Gary is 83 with arthritis, moves at his own pace, and you never rushed him. That's why a 65-minute call ended in an enrollment instead of a hang-up. You confirmed the doctor before the pitch, you annualized the give-back to $1,956 and it landed, and you ran a complete health risk assessment after the voice signature. The fundamentals are there.
              </p>
              <p>
                <strong>What's costing you:</strong> The DST invocation on the Gary Rich call is a compliance issue that needs to be corrected before your next call. At 25:16 you brought up the Disaster Special Election Period for winter storm power outages — and Gary immediately told you he was NOT affected. That's a disqualification. Instead of accepting it, you coached him toward a qualifying answer and submitted the enrollment under DST. This is a CMS audit flag, and it may put the enrollment at risk of reversal. The compliant path was available: Gary confirmed Type 2 diabetes at 11:27. If Devoted has a C-SNP in Hays County, CSN is your correct SEP — year-round, consumer-confirmed, no expiring window. You need to verify that and flag this enrollment for compliance review.
              </p>
            </div>
          </div>
        </section>

        {/* ── Your Tells ── */}
        <section className={styles.yourTells}>
          <h2 className={styles.sectionTitle}>Your Tells</h2>
          <div className={styles.tellsBlock}>
            <p style={{ fontSize: '0.875rem', color: 'var(--ink-60)', lineHeight: 1.7, fontStyle: 'italic' }}>
              YOUR TELLS — needs more data (coming in next report). One reviewed call isn't enough to establish enrolled vs. missed deltas. Check back after this week's calls are analyzed.
            </p>
          </div>
        </section>

        {/* ── Patterns ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Patterns — Chronic · Emerging · Resolved</h2>
          <div className={styles.patternsGrid}>

            {/* Chronic */}
            <div className={styles.patternColumn}>
              <p className={`${styles.patternColumnHeader} ${styles.patternColumnChronic}`}>Chronic</p>
              <div className={`${styles.patternCard} ${styles.patternCardChronic}`}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-60)', marginBottom: '6px' }}>
                  First Period
                </p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--ink-60)' }}>
                  Establishing baseline — no recurring patterns yet. Chronic column updates after 2+ weeks of call data.
                </p>
              </div>
            </div>

            {/* Emerging */}
            <div className={styles.patternColumn}>
              <p className={`${styles.patternColumnHeader} ${styles.patternColumnEmerging}`}>Emerging</p>
              <div className={`${styles.patternCard} ${styles.patternCardEmerging}`} style={{ border: '1px solid rgba(224, 92, 52, 0.25)', borderLeft: '4px solid var(--terracotta)', background: 'rgba(252, 238, 233, 0.7)' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: '4px' }}>
                  CRITICAL · RC4
                </p>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px', lineHeight: 1.4 }}>
                  SEP Coaching — Prohibited DST Invocation
                </p>
                <p style={{ fontSize: '0.8125rem', lineHeight: 1.65, color: 'var(--ink-60)', marginBottom: '8px' }}>
                  Gary Rich call (Apr 21): After Gary denied any weather impact, you continued coaching him toward DST qualification. Consumer's "No, we're not, thank goodness" is a disqualification — not a prompt to keep probing.
                </p>
                <p style={{ fontSize: '0.8125rem', fontStyle: 'italic', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.6, borderLeft: '3px solid var(--terracotta)', paddingLeft: '10px' }}>
                  Instead: "SEPs require a real, consumer-confirmed triggering event. Identify them — don't suggest them when the consumer hasn't described one. If no valid SEP exists after discovery, correct no-sale is the right call."
                </p>
              </div>
              <div className={`${styles.patternCard} ${styles.patternCardEmerging}`} style={{ marginTop: '10px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--mustard-dark)', marginBottom: '4px' }}>
                  HIGH · RC2
                </p>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px', lineHeight: 1.4 }}>
                  Client Gold Left on the Table
                </p>
                <p style={{ fontSize: '0.8125rem', lineHeight: 1.65, color: 'var(--ink-60)', marginBottom: '8px' }}>
                  Gary's wife woke up suddenly blind in one eye. You said "Wow" and moved on. That moment — Gary as caregiver, managing his own health, anxiety about everything — was the close. You enrolled without it. With it, the call takes 30 minutes.
                </p>
                <p style={{ fontSize: '0.8125rem', fontStyle: 'italic', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.6, borderLeft: '3px solid var(--mustard)', paddingLeft: '10px' }}>
                  Instead: "Gary, that's a lot to carry. Let me make sure your coverage is locked in so that's one less thing on your plate while you're taking care of her."
                </p>
              </div>
              <div className={`${styles.patternCard} ${styles.patternCardEmerging}`} style={{ marginTop: '10px' }}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--mustard-dark)', marginBottom: '4px' }}>
                  MEDIUM · RC1
                </p>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px', lineHeight: 1.4 }}>
                  Call Duration — 65 Min for a Simple Enrollment
                </p>
                <p style={{ fontSize: '0.8125rem', lineHeight: 1.65, color: 'var(--ink-60)', marginBottom: '8px' }}>
                  This call should take 35–40 minutes. Property tangents (22:53–24:44), life stories, Houston in 1968 — you let them run. Gary said "my arm's going to sleep" during the attestation. Arrive at compliance reading with a fresh consumer, not a tired one.
                </p>
                <p style={{ fontSize: '0.8125rem', fontStyle: 'italic', fontWeight: 600, color: 'var(--ink)', lineHeight: 1.6, borderLeft: '3px solid var(--mustard)', paddingLeft: '10px' }}>
                  Instead: "Gary, I love that — hold that thought, let me get everything locked in for you first and then we can catch up."
                </p>
              </div>
            </div>

            {/* Resolved */}
            <div className={styles.patternColumn}>
              <p className={`${styles.patternColumnHeader} ${styles.patternColumnResolved}`}>Resolved</p>
              <div className={`${styles.patternCard} ${styles.patternCardResolved}`}>
                <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--ink-60)', marginBottom: '6px' }}>
                  First Period
                </p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.6, color: 'var(--ink-60)' }}>
                  No prior patterns — nothing to resolve yet.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── Calls ── */}
        <section className={styles.section}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', paddingBottom: '12px', borderBottom: 'var(--rule-lt)' }}>
            <h2 className={styles.sectionTitle} style={{ marginBottom: 0, paddingBottom: 0, borderBottom: 'none' }}>
              This Period's Calls
            </h2>
            <button
              className={styles.collapsibleCallsToggle}
              onClick={() => setCallsOpen(prev => !prev)}
            >
              {callsOpen ? 'Hide' : 'Show'} calls
            </button>
          </div>

          {/* Date group: April 21 */}
          {callsOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={SPRING}
            >
              <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', marginBottom: '10px' }}>
                April 21, 2026
              </p>
              <div className={styles.callTable}>
                <div className={styles.callTableHeader}>
                  <span>Consumer</span>
                  <span>Score</span>
                  <span>Outcome</span>
                  <span>Call Type</span>
                  <span>Key Pattern</span>
                </div>
                <div className={styles.callRow}>
                  <div>
                    <Link href="/agents/kazimierz-exio/calls/gary-rich" className={styles.consumerName} style={{ textDecoration: 'none', borderBottom: '1px dotted var(--ink-20)' }}>
                      Gary Rich
                    </Link>
                    <p className={styles.callMeta}>Wimberley, TX · 1:05:38</p>
                  </div>
                  <span className={styles.callScore} style={{ color: 'var(--mustard-dark)' }}>76</span>
                  <div className={styles.outcomeCell}>
                    <span className={`${styles.pill} ${styles.pillEnrolled}`}>Enrolled</span>
                    <span className={styles.outcomeNote}>May 1, 2026</span>
                  </div>
                  <span className={styles.callType}>The Friendly Skeptic<br />The Slow Mover</span>
                  <span className={styles.callMeta} style={{ color: 'var(--terracotta)', fontStyle: 'italic' }}>DST compliance flag — review SEP coding</span>
                </div>
                <div className={styles.callTableFooter}>
                  <span>Day average: <strong>76 / 100</strong></span>
                  <span>1 call · 1 enrolled</span>
                </div>
              </div>
            </motion.div>
          )}
        </section>

        {/* ── Report History ── */}
        <section className={styles.reportHistory}>
          <h2 className={styles.sectionTitle}>Report History</h2>
          <div className={styles.reportHistoryEntry} style={{ opacity: 1, borderColor: 'rgba(143, 175, 148, 0.4)', background: 'rgba(238, 243, 239, 0.85)' }}>
            <div className={styles.reportLeft}>
              <span className={styles.reportType}>Mid-Week Report · Active</span>
              <span className={styles.reportTitle}>Apr 22 · First period — 2 sales · $72.50 CPA</span>
            </div>
            <div className={styles.reportRight}>
              <span className={styles.reportScore}>76 avg</span>
              <span className={styles.reportDate}>Apr 20–22, 2026</span>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className={styles.footer}>
          <p>Certainty System · certainty.vercel.app/agents/kazimierz-exio</p>
          <p style={{ marginTop: '4px' }}>Updated April 22, 2026 · 1 call reviewed · Mid-Week Report</p>
        </footer>

      </div>
    </PageShell>
  )
}
