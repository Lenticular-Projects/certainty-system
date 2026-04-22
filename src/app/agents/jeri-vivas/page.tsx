'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Mid-Week Report: April 22, 2026 (No calls Apr 20–21) ─────────────────────

// CRM Trend Data
const trendRows = [
  { metric: 'Sales',        lastWeek: '4',      thisPeriod: '0',   movement: 'neutral' as const },
  { metric: 'Conversion',   lastWeek: '4.65%',  thisPeriod: '0%',  movement: 'neutral' as const },
  { metric: 'CPA',          lastWeek: '$322',   thisPeriod: '—',   movement: 'neutral' as const },
  { metric: 'Total Calls',  lastWeek: '86',     thisPeriod: '0',   movement: 'neutral' as const },
]

// Patterns — all carried as Chronic (no Emerging/Resolved this period)
const chronicPatterns = [
  {
    title: 'Loyalty objection accepted without one reframe attempt',
    rc: 'RC1',
    urgency: 'critical' as const,
    summary: 'When a consumer says they\'ve been with UnitedHealthcare for years — especially after a health event — that\'s an emotional anchor, not a hard no. Ronnie Phillips told you at 14:27, 16:17, and 18:55 that he was loyal to UHC after his stroke. Each time you accepted it instead of going back to the money. Loyalty survives when the agent confirms nothing changes except the benefit amount.',
    fix: '"Ronnie, I hear you — UnitedHealthcare was there for you after your stroke and that matters. Let me pull up Devoted\'s network right now and confirm your doctors are in. If they\'re in, nothing changes about your care. The only difference is $177 a month instead of $271. Your doctors stay. Your coverage stays. You just get $1,128 a year back. Can I check that right now?"',
  },
  {
    title: 'Carrier appointment not confirmed before 18 minutes of discovery',
    rc: 'RC1',
    urgency: 'high' as const,
    summary: 'Ava Vaughn said "Humana Go" at 0:33. Eighteen minutes of discovery, rapport, and goodwill later you found out you couldn\'t complete the enrollment. The appointment check is a 5-second internal question — it protects everything built after it.',
    fix: '"Ms. Vaughn, I want to make sure I\'m the right agent to help you with that Humana plan — let me transfer you to my colleague who handles Humana directly. She already knows your situation and she\'ll take great care of you. One moment."',
  },
  {
    title: 'Math presented but never connected to the consumer\'s situation',
    rc: 'RC3',
    urgency: 'high' as const,
    summary: 'You present numbers correctly. The gap is step three: connecting the annual figure to something the consumer said. Janice Brantley called about money for utilities and Uber. The $400/month food card is $4,800/year. That sentence was never said.',
    fix: '"Janice, that\'s $400 every single month — $4,800 a year going back into your pocket. You said you use Uber and you said utilities are tight. That\'s what this card is for. That money is yours starting April 1st."',
  },
  {
    title: 'SEP windows confirmed but not deployed as urgency',
    rc: 'RC6',
    urgency: 'medium' as const,
    summary: 'Ronnie Phillips confirmed both a recent move and active Medicaid — MOV SEP and INT SEP, either of which creates same-day enrollment eligibility. With an active SEP window, October is not the answer. The SEP is the answer to the AEP objection.',
    fix: '"Ronnie, before we talk about October — you mentioned you moved a few months ago. When exactly was that? Because if it was in the last two months, you have a special enrollment window open right now. We don\'t need October. We can do this today."',
  },
]

const pastReports = [
  {
    active: true,
    type: 'Mid-Week Report',
    title: 'Mid-Week Report — April 22, 2026',
    score: 'No calls this period',
    date: 'Apr 22, 2026',
  },
  {
    active: false,
    type: 'Weekly Brief',
    title: 'Weekly Brief — April 13–17, 2026',
    score: '79 / 100',
    date: 'Apr 16, 2026',
  },
  {
    active: false,
    type: 'Weekly Brief',
    title: 'Weekly Brief — March 30–April 3, 2026',
    score: '54.1 / 100',
    date: 'Apr 4, 2026',
  },
]

// ── Page ─────────────────────────────────────────────────────────────────────

export default function JeriVivasPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        {/* ── Header ── */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Mid-Week Report</span>
          </div>
          <h1 className={styles.agentName}>Jeri Vivas</h1>
          <p className={styles.period}>Week of April 20–22, 2026</p>
          <p className={styles.updatedAt}>Updated April 22 · No new calls this period</p>
        </motion.div>

        {/* ── CRM Trend Snapshot ── */}
        <motion.div className={styles.trendSnapshot} {...SPRING}>
          <div className={styles.trendHeader}>
            <span className={styles.systemLabel}>CRM Trend Snapshot</span>
          </div>
          <div className={styles.trendTable}>
            <div className={styles.trendRow} style={{ background: 'rgba(19,17,16,0.04)', borderBottom: '1px solid rgba(19,17,16,0.08)' }}>
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>Metric</span>
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>Apr 13–17</span>
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>Apr 20–21</span>
              <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>Movement</span>
            </div>
            {trendRows.map((row, i, arr) => (
              <div
                key={row.metric}
                className={styles.trendRow}
                style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.08)' : 'none' }}
              >
                <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--ink)' }}>{row.metric}</span>
                <span style={{ fontSize: '0.9375rem', fontVariantNumeric: 'tabular-nums', color: 'var(--ink-60)' }}>{row.lastWeek}</span>
                <span style={{ fontSize: '0.9375rem', fontWeight: 700, fontVariantNumeric: 'tabular-nums', color: 'var(--ink)' }}>{row.thisPeriod}</span>
                <span className={styles.trendNeutral}>— No calls</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.75rem', color: 'var(--ink-60)', marginTop: 12, fontStyle: 'italic' }}>
            No calls recorded Apr 20–21. Last week&apos;s $322 CPA was the highest on the team — that&apos;s the number to bring down when you&apos;re back.
          </p>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>
            When a consumer says they&apos;re loyal to a carrier, the answer is not to honor the loyalty —
            it&apos;s to confirm their doctors are in network. &ldquo;Let me pull up Devoted&apos;s provider
            directory right now and confirm your doctor is in. If he is, nothing changes about your care.
            The only difference is your benefit amount goes up.&rdquo; That one question converts
            loyalty from a wall into a door.
          </p>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>No coachable calls reviewed this period. Jeri had a quiet Monday and Tuesday — no calls recorded Apr 20–21. Last week&apos;s coaching points remain active.</p>
            <p>The picture from last week: one clean enrollment on Wednesday (Ms. McCloud, 79/100, Devoted C-SNP via warm transfer). The broader coaching pattern — drawn from the full recent batch — centers on three moves: the loyalty reframe, the carrier appointment check, and annualizing numbers back to the consumer&apos;s stated need. None of those required new calls to confirm. They&apos;re the plays to have ready when you return.</p>
          </div>
        </motion.div>

        {/* ── Your Tells ── */}
        <motion.div className={styles.yourTells} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid rgba(19,17,16,0.08)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>Your Tells</h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>No calls this period — last week&apos;s patterns apply</span>
          </div>
          <div className={styles.tellsBlock}>
            <div>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--sage-dark)', marginBottom: 6 }}>When You Enroll</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink-60)' }}>You stay warm without losing momentum. McCloud at 6:39 — &quot;I hear you. Sorry for sideswiping you like that&quot; — de-escalated a fragile consumer and kept the call moving. You complete complex chronic-condition questionnaires without rushing. You catch formulary exceptions mid-call and reframe them before the consumer notices.</p>
            </div>
            <div>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--terracotta)', marginBottom: 6 }}>When You Miss</p>
              <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink-60)' }}>The loyalty objection surfaces and you accept the first statement without asking the doctor-network question. Carrier appointment isn&apos;t confirmed before 15+ minutes of discovery. Monthly math is presented correctly but never annualized or tied back to what the consumer told you in discovery. SEP signals appear but the window question is never asked.</p>
            </div>
          </div>
        </motion.div>

        {/* ── Patterns (3-column: Chronic / Emerging / Resolved) ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Patterns</h2>
          <div className={styles.patternsGrid}>

            {/* Chronic */}
            <div className={styles.patternColumn}>
              <div className={styles.patternColumnHeader} style={{ borderTopColor: 'var(--terracotta)' }}>
                <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--terracotta)' }}>Chronic</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', marginTop: 2 }}>Carried from last week</span>
              </div>
              {chronicPatterns.map((p, i) => (
                <div key={i} className={`${styles.patternCard} ${styles[`priority_${p.urgency}`]}`}>
                  <div className={styles.priorityHeader}>
                    <span className={`${styles.urgencyBadge} ${styles[`badge_${p.urgency}`]}`}>
                      {p.urgency === 'critical' ? 'CRITICAL' : p.urgency === 'high' ? 'HIGH' : 'WATCH'}
                    </span>
                    <span className={styles.rcCode}>{p.rc}</span>
                  </div>
                  <p className={styles.priorityTitle}>{p.title}</p>
                  <p className={styles.priorityDetail}>{p.summary}</p>
                  <div className={styles.priorityMove}>
                    <span className={styles.priorityMoveLabel}>Instead:</span>
                    <p className={styles.priorityMoveText}>{p.fix}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Emerging */}
            <div className={styles.patternColumn}>
              <div className={styles.patternColumnHeader} style={{ borderTopColor: 'var(--mustard)' }}>
                <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--mustard-dark)' }}>Emerging</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', marginTop: 2 }}>New patterns forming</span>
              </div>
              <div className={styles.patternCard} style={{ opacity: 0.6 }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--ink-60)', fontStyle: 'italic' }}>No new patterns this period. No calls recorded Apr 20–21.</p>
              </div>
            </div>

            {/* Resolved */}
            <div className={styles.patternColumn}>
              <div className={styles.patternColumnHeader} style={{ borderTopColor: 'var(--sage)' }}>
                <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--sage-dark)' }}>Resolved</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', marginTop: 2 }}>Fixed and holding</span>
              </div>
              <div className={styles.patternCard} style={{ opacity: 0.6 }}>
                <p style={{ fontSize: '0.875rem', color: 'var(--ink-60)', fontStyle: 'italic' }}>No new resolutions this period.</p>
              </div>
            </div>

          </div>
        </motion.div>

        {/* ── Calls ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Calls — Apr 20–21</h2>
          <div className={styles.emptyCallsState}>
            <p style={{ fontSize: '0.9375rem', color: 'var(--ink-60)', fontStyle: 'italic' }}>
              No coachable calls reviewed Apr 20–21.
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: 8, opacity: 0.7 }}>
              Last reviewed call: Ms. McCloud · Apr 15 · 79/100 · ENROLLED ·{' '}
              <Link href="/agents/jeri-vivas/calls/ms-mccloud" style={{ color: 'var(--ink-60)', textDecoration: 'underline', textDecorationColor: 'var(--ink-20)', textUnderlineOffset: '3px' }}>
                View call
              </Link>
            </p>
          </div>
        </motion.div>

        {/* ── Report History ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Report History</h2>
          <div className={styles.reportHistory}>
            {pastReports.map((r, i) => (
              <div key={i} className={`${styles.reportHistoryEntry} ${r.active ? styles.reportActive : ''}`}>
                <div className={styles.reportLeft}>
                  <span className={styles.reportType}>{r.type}</span>
                  <span className={styles.reportTitle}>{r.title}</span>
                </div>
                <div className={styles.reportRight}>
                  <span className={styles.reportScore}>{r.score}</span>
                  <span className={styles.reportDate}>{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Jeri Vivas · Mid-Week April 22, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC3 · RC6 · C-SNP · MOV SEP · INT SEP · Loyalty Reframe · Annualization</p>
        </div>

      </div>
    </PageShell>
  )
}
