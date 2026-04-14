'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import styles from './page.module.css'

// ── Daily Brief: April 13, 2026 ─────────────────────────────────────────────

const dayCalls = [
  { consumer: 'Unknown', date: '04-13', duration: '4:17', score: 42, outcome: 'MISSED OPPORTUNITY', type: 'The Money Caller' },
  { consumer: 'Unknown', date: '04-13', duration: '3:17', score: 32, outcome: 'INCOMPLETE', type: 'The Money Caller' },
  { consumer: 'Archie Daphne', date: '04-13', duration: '4:02', score: 42, outcome: 'INCOMPLETE', type: 'The Money Caller' },
  { consumer: 'Unknown', date: '04-13', duration: '3:39', score: 42, outcome: 'MISSED OPPORTUNITY', type: 'The Money Caller' },
]

const patterns = [
  {
    title: 'The Food Card Acknowledged — Never Deployed',
    rc: 'RC2 — Client Gold Ignored',
    urgency: 'critical' as const,
    body: `Every single call today came in through the same door: someone saw an ad about a grocery card and called. That card is not a topic to acknowledge and move past. It is the enrollment engine — the reason the call exists, and the thing you close around. On your 145022 call, the consumer stated their goal at 0:13. You acknowledged it once and then ran compliance. The food card never returned as a closing anchor.

The correction: when a consumer says "I'm calling about the grocery card," your response is: "Yes — that benefit is available in your area, and I want to make sure you get the right amount. Give me your zip code and I'll pull up exactly what you qualify for right now." Then compliance runs in the context of unlocking the card. Every question you ask is in service of delivering it. The consumer called for one thing. Build the entire call around that one thing.`,
  },
  {
    title: 'Product List Before Value Anchor — "It\'s Getting Too Complicated"',
    rc: 'RC1 — Loss of Lead',
    urgency: 'high' as const,
    body: `On your 092356 call today, you read the full product type list — MAPD, PDP, Medigap, stand-alone dental, stand-alone vision — before you had established any value around the food card. The consumer said "It's getting too complicated" and the call was effectively over. None of those products mattered. The consumer called about one thing.

The rule: never open the menu before they know what they're ordering. The food card is what they called about. That's where you start. Everything else gets introduced only when relevant to that consumer's specific situation.`,
  },
  {
    title: 'Dead Air During Research — No Check-In',
    rc: 'RC1 — Loss of Lead',
    urgency: 'medium' as const,
    body: `On your 093614 call, the transcript shows silent "Okay" markers from 1:27 through 4:02 — suggesting you were researching or on hold without communicating. The consumer didn't know what was happening. Dead air reads as abandonment, and the call stalled without recovery.

Every 30 seconds during any lookup or system work: "I'm still pulling this up for you, hang tight — just a moment." That one habit prevents hang-ups during research and tells the consumer the call is still live.`,
  },
]

const workOns = [
  {
    num: '01',
    title: 'The food card is the close — not the opening topic.',
    detail: 'Tomorrow, when a consumer says they\'re calling about the grocery card, don\'t acknowledge it and move to compliance. Make it the center of the call: "That benefit is available in your area — give me your zip code and I\'ll show you exactly what you qualify for." Then every question runs in service of unlocking the card.',
  },
  {
    num: '02',
    title: 'One reframe before every callback or call release.',
    detail: 'On your 145022 call, when the consumer refused their Medicare card number, the move was: "You don\'t need the card in front of you — I can look you up with just your date of birth and zip code. What\'s your birthday?" Before you offer any callback, say one thing that gives the consumer a reason to stay. That one sentence keeps the lead alive.',
  },
  {
    num: '03',
    title: 'When the call goes quiet, name it.',
    detail: 'During any system lookup or hold, check in every 30 seconds: "Still pulling this up for you, hang tight." Your 093614 call showed 2+ minutes of silence after compliance. That silence cost the call. The consumer needs to know you\'re still there.',
  },
]

const pastReports = [
  {
    title: 'Daily Brief — April 13, 2026',
    type: 'Daily Brief',
    date: 'April 14, 2026',
    score: '40 / 100',
    active: true,
  },
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

export default function MoniqueWilliamsPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        {/* ── Header ── */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Daily Brief</span>
          </div>
          <h1 className={styles.agentName}>Monique Williams</h1>
          <p className={styles.period}>April 13, 2026 → Going into April 14</p>
          <p className={styles.updatedAt}>Generated April 14, 2026 · 4 calls reviewed</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(40) }}>40</span>
            <span className={styles.scoreLabel}>Day Average</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>4</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>April 13, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>0</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>2 Missed · 2 Incomplete</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC2</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Food card never deployed</span>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Today</h2>
          <div className={styles.summaryCard}>
            <p>Your compliance opens were clean on all four calls today — every call started with a complete TPMO disclaimer, licensed agent identified, purpose stated. That consistency is real and it matters. On a day where nothing else went the way it should have, that discipline keeps you out of audit trouble and gives every consumer a professional first impression.</p>
            <p>The pattern that ran through all four calls today: the food card was acknowledged once and then disappeared. Every consumer called for the same reason — they saw an ad about a grocery benefit and wanted to know if they qualify. That card is not a topic to acknowledge and move past. It is the enrollment offer. Tomorrow, everything you do on a Money Caller call should be in service of delivering that card. The food card is the close, not the setup.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>The food card is not a topic you acknowledge — it&apos;s the enrollment offer, and every question you ask is in the service of delivering it.</p>
        </motion.div>

        {/* ── Today's Calls ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Today&apos;s Calls</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Consumer</span>
              <span>Date</span>
              <span>Duration</span>
              <span>Score</span>
              <span>Outcome</span>
              <span>Call Type</span>
            </div>
            {dayCalls.map((call, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{call.consumer}</span>
                <span className={styles.callMeta}>{call.date}</span>
                <span className={styles.callMeta}>{call.duration}</span>
                <span className={styles.callScore} style={{ color: scoreColor(call.score) }}>{call.score}</span>
                <span className={`${styles.pill} ${outcomeClass(call.outcome)}`}>{call.outcome}</span>
                <span className={styles.callType}>{call.type}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Day Average: <strong>40 / 100</strong></span>
              <span>Enrolled: <strong>0 of 4</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well Today</h2>
          <div className={styles.summaryCard}>
            <p><strong>TPMO compliance — all 4 calls:</strong> Every call today opened with a complete, clean compliance disclosure. That is not an accident — that is discipline, and it is the right foundation for everything that follows. It keeps you out of audit risk and gives every consumer a professional first impression.</p>
            <p><strong>Post-call awareness:</strong> The most important thing you demonstrated today happened after one of your calls — you debriefed yourself accurately. You knew exactly what went wrong. That analytical clarity is an asset most agents don&apos;t develop for years. The gap isn&apos;t awareness — it&apos;s running that same analysis in real time, while the consumer is still on the line.</p>
          </div>
        </motion.div>

        {/* ── Patterns ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Patterns Today</h2>
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
                {p.body.split('\n\n').map((para, j) => (
                  <p key={j} className={styles.priorityDetail}>{para}</p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── What to Work On ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What to Work On Going Into Tomorrow</h2>
          <div className={styles.workOnList}>
            {workOns.map((w, i) => (
              <div key={i} className={styles.workOnCard}>
                <span className={styles.workOnNum}>{w.num}</span>
                <div>
                  <p className={styles.workOnTitle}>{w.title}</p>
                  <p className={styles.workOnDetail}>{w.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Past Reports ── */}
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
          <p>The Certainty System · Monique Williams · April 13, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · RC3 · The Money Caller · Value Anchor Before Qualification</p>
        </div>

      </div>
    </PageShell>
  )
}
