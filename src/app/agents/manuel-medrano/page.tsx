'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief: April 13–17, 2026 ─────────────────────────────────────────

const callsByDate = [
  {
    date: 'Monday, April 13',
    calls: [
      { consumer: 'Carol Hill', duration: '27:22', score: 32, outcome: 'MISSED OPPORTUNITY', type: 'The Compliant Non-Closer', href: '/agents/manuel-medrano/calls/carol-hill' },
    ],
  },
]

const patterns = [
  {
    title: 'INT SEP confirmed — AEP callback given instead',
    rc: 'RC6',
    urgency: 'critical' as const,
    summary: 'Carol\'s Medicaid was confirmed at 8:27. That opened an INT SEP — enrollment available right then, not in October. At 23:03 you told her she\'d need to wait for AEP. She was trusting, cooperative, and ready to follow your lead.',
    fix: '"Ms. Hill, because you have Medicaid, you have a special enrollment window open right now — not just in October. Let\'s get you into this plan today."',
  },
  {
    title: 'DST SEP invoked — this is a compliance violation',
    rc: 'RC4',
    urgency: 'critical' as const,
    summary: 'At 21:52 you told Carol "CMS has opened a special enrollment period for residents of affected counties" due to a winter storm. DST is a CMS-declared emergency tool — agents are prohibited from raising it. This is an audit exposure event.',
    fix: 'Never mention storm SEPs. When Medicaid is confirmed, INT SEP is the only tool you need — and it\'s open year-round.',
  },
  {
    title: 'Client Gold not deployed — 3 life-fear moments',
    rc: 'RC2',
    urgency: 'high' as const,
    summary: 'Carol said her dog "sat next to me when I fell and waited for somebody to come." She lives alone at 91. "She had my last breath." Three powerful signals — all heard, none deployed. The $3,012 annual benefit was never connected to her specific life.',
    fix: '"That story about your dog waiting with you when you fell — that\'s exactly why we need to get this handled today. This plan puts $251 a month in your pocket and your doctor is already in-network. Let\'s do it."',
  },
  {
    title: 'Medication blocker accepted — 3 workarounds available',
    rc: 'RC1',
    urgency: 'high' as const,
    summary: 'Daughter wasn\'t available for meds list. Carol herself had already named two workaround paths: Drug Mart in New Philly (4:12) and Dr. Harder\'s office (19:51). Neither was attempted.',
    fix: '"I can call Drug Mart right now while we\'re on the line — that takes 2 minutes and we can get everything handled today."',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 13', type: 'Weekly Brief', date: 'Apr 15, 2026', score: '32 / 100', active: true },
]

// ── Helpers ─────────────────────────────────────────────────────────────────

function outcomeClass(outcome: string) {
  if (outcome === 'ENROLLED') return styles.pillEnrolled
  if (outcome === 'MISSED OPPORTUNITY') return styles.pillMissed
  if (outcome === 'INCOMPLETE') return styles.pillIncomplete
  if (outcome === 'CORRECT NO-SALE') return styles.pillNeutral
  return styles.pillNeutral
}

function scoreColor(score: number) {
  if (score >= 75) return 'var(--sage-dark)'
  if (score >= 55) return 'var(--mustard-dark)'
  return 'var(--terracotta)'
}

export default function ManuelMedranoPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        {/* ── Header ── */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Weekly Brief</span>
          </div>
          <h1 className={styles.agentName}>Manuel Medrano</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 15 · 1 call reviewed (Mon)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(32) }}>32</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Mon · 1 call</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>1</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 13, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>0</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>1 Missed Opportunity</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC6</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Missed INT SEP</span>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When Medicaid is confirmed, the enrollment window is open right now — not in October. &ldquo;Ms. Hill, because you have Medicaid, we can get you into this plan today.&rdquo; That&apos;s the sentence that changes the outcome.</p>
        </motion.div>

        {/* ── This Week's Calls ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>This Week&apos;s Calls</h2>
          {callsByDate.map((group) => (
            <div key={group.date} style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)', marginBottom: '0.5rem' }}>
                {group.date}
              </p>
              <div className={styles.callTable}>
                <div className={styles.callTableHeader}>
                  <span>Consumer</span>
                  <span>Duration</span>
                  <span>Score</span>
                  <span>Outcome</span>
                  <span>Call Type</span>
                </div>
                {group.calls.map((call, i) => (
                  <div key={i} className={styles.callRow}>
                    <span className={styles.consumerName}>
                      <Link href={call.href} style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'var(--ink-20)', textUnderlineOffset: '3px' }}>
                        {call.consumer}
                      </Link>
                    </span>
                    <span className={styles.callMeta}>{call.duration}</span>
                    <span className={styles.callScore} style={{ color: scoreColor(call.score) }}>{call.score}</span>
                    <span className={`${styles.pill} ${outcomeClass(call.outcome)}`}>{call.outcome}</span>
                    <span className={styles.callType}>{call.type}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className={styles.callTableFooter}>
            <span>Week Average: <strong>32 / 100</strong></span>
            <span>Enrolled: <strong>0 of 1</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Compliant open (0:52):</strong> Full TPMO disclaimer with correct organization count (six organizations, 36 products), 1-800-MEDICARE reference, and recorded-line disclosure — all within the first 16 seconds. That&apos;s textbook execution and the foundation the rest of the call gets built on.</p>
            <p><strong>Patience with a cognitively challenged consumer:</strong> Carol is 91, living alone, and needed extra time with SSNs, medication names, and phone numbers. You handled every confusion with consistent warmth and never showed frustration. That patience kept her on the phone and trusting you — most agents lose consumers like Carol in the first five minutes.</p>
            <p><strong>Annualization at 24:26:</strong> When Carol asked what the benefit was for a year, you answered immediately: &ldquo;$3,000 a year.&rdquo; That&apos;s Step 2 executed correctly. The number was in front of her.</p>
            <p><strong>Correct DST exit (23:03):</strong> Once Carol confirmed the storm didn&apos;t affect her, you backed off cleanly and didn&apos;t try to manufacture storm impact. That exit was right — the invocation was the violation, not the exit.</p>
          </div>
        </motion.div>

        {/* ── Patterns ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Patterns This Week</h2>
          <div className={styles.priorityList}>
            {patterns.map((p, i) => (
              <div key={i} className={`${styles.priorityCard} ${styles[`priority_${p.urgency}`]}`}>
                <div className={styles.priorityHeader}>
                  <span className={`${styles.urgencyBadge} ${styles[`badge_${p.urgency}`]}`}>
                    {p.urgency === 'critical' ? 'CRITICAL' : p.urgency === 'high' ? 'HIGH PRIORITY' : 'OPPORTUNITY'}
                  </span>
                  <span className={styles.rcCode}>{p.rc}</span>
                </div>
                <p className={styles.priorityTitle}>{p.title}</p>
                <p className={styles.priorityDetail}>{p.summary}</p>
                <p className={styles.priorityDetail} style={{ fontStyle: 'italic', opacity: 0.75, marginTop: '0.25rem' }}>
                  Instead: {p.fix}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── What to Work On ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What to Work On</h2>
          <div className={styles.workOnList}>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>01</span>
              <div>
                <p className={styles.workOnTitle}>Execute INT SEP when Medicaid is confirmed</p>
                <p className={styles.workOnDetail}>The moment Medicaid is confirmed, say: &ldquo;Ms. Hill, because you have Medicaid, your enrollment window is open right now — not just in October. That means we can get you into this plan today. I just need a few more pieces and we&apos;re done before we hang up.&rdquo; You already have the qualification — use it.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Connect the number to their life — Step 3</p>
                <p className={styles.workOnDetail}>You got to $3,000 a year — that&apos;s Step 2. Step 3 is connecting it to Carol specifically: &ldquo;That&apos;s your dog food, your Tylenol, your personal care. That&apos;s your daughter not having to pick up your over-the-counter items every visit. Real money in your pocket.&rdquo; Numbers alone don&apos;t close. Numbers tied to a person&apos;s life do.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>Medication blocker: try the pharmacy first</p>
                <p className={styles.workOnDetail}>When the consumer doesn&apos;t have their medication list: &ldquo;No problem — you mentioned Drug Mart in New Philly has your records on file. Can I call them right now while we&apos;re on the line? That takes about two minutes and we can keep this moving.&rdquo; The workaround exists. Try it before converting to a callback.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Reports ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Reports</h2>
          <div className={styles.reportList}>
            {pastReports.map((r, i) => (
              <div key={i} className={`${styles.reportCard} ${r.active ? styles.reportActive : ''}`}>
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
          <p>The Certainty System · Manuel Medrano · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC6 · RC4 · RC2 · RC1 · INT SEP · DST Compliance · Client Gold</p>
        </div>

      </div>
    </PageShell>
  )
}
