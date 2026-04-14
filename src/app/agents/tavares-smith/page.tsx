'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import styles from './page.module.css'

// ── Daily Brief: April 13, 2026 ─────────────────────────────────────────────

const dayCalls = [
  { consumer: 'Glinda Robinson', date: '04-13', duration: '53:44', score: 53, outcome: 'MISSED OPPORTUNITY', type: 'The Detail Staller' },
  { consumer: 'Not Stated', date: '04-13', duration: '4:14', score: 35, outcome: 'MISSED OPPORTUNITY', type: 'Commercial Myth Caller' },
  { consumer: 'Not Stated', date: '04-13', duration: '6:26', score: 32, outcome: 'MISSED OPPORTUNITY', type: 'The Scared Switcher' },
]

const patterns = [
  {
    title: 'Logic Against Emotion — All Three Calls',
    rc: 'RC2 — Wrong Response to Signal',
    urgency: 'critical' as const,
    body: `Every call today hit the same wall: when a consumer pushed back emotionally, you explained the product instead of naming the feeling. On Glinda's call at 49:29, when she said she needed her insurance lady, you tried to replace the relationship instead of validating it. On the 6:26 call, when the new enrollee said he wasn't comfortable giving information, you explained system security — he wasn't arguing with your security, he was afraid.

The correction is the same on every call: name the emotion first, then make one small ask. "That makes complete sense — you should never give out information until you're comfortable. Let me tell you how the card benefit works without any personal info, and if it sounds good, we'll figure out verification after." Practice this tonight. The move is: validate → small ask. Never justify → push.`,
  },
  {
    title: 'Passive Callback Releases the Lead Permanently',
    rc: 'RC1 — Loss of Lead',
    urgency: 'high' as const,
    body: `On your 4:14 call, the consumer said he was in the street and would call back. You ended with "whenever you can get to that information, give us a call back." That callback will not happen. The consumer had a reason to call — he saw an ad about groceries — and you had him on the line. At 4:05, the correct move was to name a specific time: "I have an opening at 3:30 this afternoon. Will you be home? I'll call you directly."

On Glinda Robinson's call at 49:29, you had a 53-minute closeable call — dual-eligible, plan comparison done, $2,880 annual gain identified — and surrendered it on an objection you could have reframed. Before any passive callback, say one thing that gives the consumer a reason to stay or a specific next step that locks the lead.`,
  },
  {
    title: 'Math Breakdown Stops One Step Before the Close',
    rc: 'RC3 — Math Breakdown Incomplete',
    urgency: 'medium' as const,
    body: `On Glinda Robinson's call you ran Steps 1 and 2 correctly — plan comparison, annualized savings ($2,880). Step 3, Humanization, was never delivered. That step is the close. Glinda told you at 2:23 she lives on a low income. That sentence was the humanization bridge: "Glinda, that's nearly $3,000 more per year. You mentioned you're on a low income — what would an extra $250 a month for groceries and utilities mean for you?"

That question is the one that converts. You built the entire case and stopped one sentence before the end. Tomorrow, after every annualization number, connect it back to something the consumer said.`,
  },
]

const workOns = [
  {
    num: '01',
    title: 'Validate the emotion before you explain the solution.',
    detail: 'On Glinda\'s call at 49:29 and on the 6:26 call at 5:14, consumers were in fear. Your logical responses made it worse. Tomorrow, the first thing out of your mouth after any emotional resistance is: "That makes complete sense." Then — and only then — make one small ask. This sequence works on every objection type.',
  },
  {
    num: '02',
    title: 'Replace passive callbacks with specific appointment times.',
    detail: 'At 4:05 on the 4:14 call, you released the lead with a vague invitation. Instead: "I have an opening at 3:30 this afternoon — will you be home? I\'ll call you directly." A time converts a maybe into a commitment. If they say no to 3:30, offer another time. Never end without a specific next step.',
  },
  {
    num: '03',
    title: 'Complete the Math Breakdown through Step 3 — Humanize the number.',
    detail: 'After you state the annual figure, connect it to what the consumer told you. Glinda said she was low income at 2:23. That was your bridge: "That\'s $250 more a month for groceries and utilities — for someone on a fixed income, that\'s real." The math sets up the close. Step 3 is the close.',
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

export default function TavaresSmithPage() {
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
          <h1 className={styles.agentName}>Tavares Smith</h1>
          <p className={styles.period}>April 13, 2026 → Going into April 14</p>
          <p className={styles.updatedAt}>Generated April 14, 2026 · 3 calls reviewed</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(40) }}>40</span>
            <span className={styles.scoreLabel}>Day Average</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>3</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>April 13, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>0</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>3 Missed Opportunity</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC2</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Logic vs. Emotion — 3 calls</span>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Today</h2>
          <div className={styles.summaryCard}>
            <p>Your best work today happened on the Glinda Robinson call — 53 minutes, a dual-eligible Ohio consumer who called about food assistance, and you found her a plan that more than doubled her monthly OTC benefit. You ran full compliance, identified the INT/DEP SEP correctly, verified her doctors and drugs. That is real discovery work. Most agents can't carry a 53-minute call. You can, and the technical case you built was sound.</p>
            <p>The pattern that cost you all three calls today is the same one: when a consumer pushed back with emotion — Glinda's loyalty to her insurance lady, the consumer in the street who didn't have his information, the new enrollee who wasn't ready to share personal data — you responded with logic. You explained why the process is quick, why your systems are secure, why the plan is a no-brainer. None of that reached them. Tomorrow, the correction is one behavior: name the feeling before you explain anything.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer resists, stop explaining why the plan is good — start acknowledging why the hesitation is real, then give them one reason to stay on the line for 60 more seconds.</p>
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
              <span>Enrolled: <strong>0 of 3</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well Today</h2>
          <div className={styles.summaryCard}>
            <p><strong>Glinda Robinson (04-13):</strong> 53 minutes of disciplined discovery — compliance clean from the jump, INT/DEP SEP correctly identified at 7:15, plan comparison built with specific dollar figures, doctor and drug verification completed. You identified that the new plan more than doubled her OTC monthly benefit and annualized the savings. The technical case was complete. The only thing missing was the humanization that closes it.</p>
            <p><strong>Compliance execution (all 3 calls):</strong> Your compliance openings were consistent. On your third call today, you scored 15/15 in compliance — perfect execution of TPMO and SOA on a new Medicare enrollee who didn't yet have his card. That discipline doesn't disappear; it compounds.</p>
            <p><strong>Alternative verification (4:14 call, 3:34):</strong> When the consumer said he didn't have his Medicare card, you correctly pivoted to offer name, date of birth, and social as an alternative path. The right tactical move — the problem wasn't the knowledge, it was the emotional bridge needed to deliver it.</p>
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
          <p>The Certainty System · Tavares Smith · April 13, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · RC3 · Phase IV · Math Breakdown Step 3 · Emotional Reframe</p>
        </div>

      </div>
    </PageShell>
  )
}
