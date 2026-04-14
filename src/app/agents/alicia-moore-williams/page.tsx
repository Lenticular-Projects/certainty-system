'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import styles from './page.module.css'

// ── Daily Brief: April 13, 2026 ─────────────────────────────────────────────

const dayCalls = [
  { consumer: 'Unknown', date: '04-13', duration: '5:25', score: 32, outcome: 'MISSED OPPORTUNITY', type: 'The Money Caller' },
  { consumer: 'Unknown', date: '04-13', duration: '6:47', score: 26, outcome: 'MISSED OPPORTUNITY', type: 'The Money Caller' },
]

const patterns = [
  {
    title: 'Surrendered on First Objection — Both Calls',
    rc: 'RC1 — Loss of Lead',
    urgency: 'critical' as const,
    body: `Both calls today ended the same way: a consumer objected once, and you offered a callback or a referral. On your 165747 call at 2:37, the consumer asked "What if I choose not to?" — you offered to call them back without a single reframe attempt. On your 170810 call, the consumer said "I had somebody check already" — you sent them to Medicare.gov and suggested they talk to their broker. In both cases, the call was over within seconds of the first real resistance.

This is the one pattern that is costing you every enrollment right now. Before you offer any callback, say one thing that gives the consumer a reason to stay. On the 170810 call, the response to "I had somebody check already" was: "What did they find? Because plans changed in 2026 and I'm looking at your area right now — there are plans here with $150 a month for groceries. Give me two minutes and I'll tell you if what you have is the best available." That's it. That sentence keeps the call alive.`,
  },
  {
    title: '"Do I Get More Money?" — Client Gold Ignored',
    rc: 'RC2 — Client Gold Ignored',
    urgency: 'high' as const,
    body: `On your 165747 call, the consumer asked whether they'd get more money on their card. That question is a HOT buying signal — the consumer is telling you exactly what they want and implying they'd switch if the answer is yes. You acknowledged it once and never came back to it.

When a consumer asks a question like that, you answer it, you name the dollar amount, and you connect it immediately to the enrollment: "Yes — the plan I'm looking at for your area has $150 a month for groceries. That's the benefit we can lock in today." Then you move. The consumer asking about more money is the consumer telling you they're ready.`,
  },
  {
    title: 'No Dollar Figure Stated on Either Call',
    rc: 'RC3 — Math Breakdown Not Attempted',
    urgency: 'medium' as const,
    body: `Neither call today reached the point where a dollar figure was stated. Both consumers were warm inbound Money Callers — they called specifically about a grocery benefit — and neither heard a specific dollar amount for what they'd receive on a new plan.

The dollar figure is the close. On any Money Caller call, after compliance and zip collection, the next sentence is: "I'm looking at plans in your area right now — there are options with up to $150 a month for groceries. Let me pull up exactly what you qualify for." That number creates urgency and gives the consumer something concrete to say yes to.`,
  },
]

const workOns = [
  {
    num: '01',
    title: 'One reframe before you let anyone go.',
    detail: 'Tomorrow, the rule is simple: before you offer a callback or end any call, say one thing that gives the consumer a concrete reason to stay. On the 170810 call at 2:23: "What did they find? Because plans changed this year and I\'m looking at $150 a month for groceries in your area. Give me two minutes." That one sentence keeps the lead alive. Practice it until it comes out automatically.',
  },
  {
    num: '02',
    title: 'State the dollar figure early — it\'s the close.',
    detail: 'On every Money Caller call after you collect the zip code, say the number: "I\'m showing plans in your area with up to $150 a month for groceries. Let me pull up exactly what you qualify for." The number gives the consumer something concrete to say yes to. Without it, the call has no anchor.',
  },
  {
    num: '03',
    title: 'When they ask "do I get more?" — treat it as a yes.',
    detail: 'A consumer asking whether they\'d get more money on their card has just told you they\'re ready. Answer with the number: "Yes — $150 a month on this plan, compared to what you have now. That\'s the benefit we can lock in today." Then ask for the Medicare card. Don\'t acknowledge it and move on — use it.',
  },
]

const pastReports = [
  {
    title: 'Daily Brief — April 13, 2026',
    type: 'Daily Brief',
    date: 'April 14, 2026',
    score: '29 / 100',
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

export default function AliciaMooreWilliamsPage() {
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
          <h1 className={styles.agentName}>Alicia Moore Williams</h1>
          <p className={styles.period}>April 13, 2026 → Going into April 14</p>
          <p className={styles.updatedAt}>Generated April 14, 2026 · 2 calls reviewed</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(29) }}>29</span>
            <span className={styles.scoreLabel}>Day Average</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>2</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>April 13, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>0</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>2 Missed Opportunity</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Surrendered on first objection</span>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Today</h2>
          <div className={styles.summaryCard}>
            <p>Your compliance opens were sharp on both calls today. On your second call, you had TPMO and SOA delivered within 13 seconds of the consumer picking up — that is disciplined, professional, and exactly right. Your rapport was warm throughout both calls; neither consumer was hostile or distrustful. That ease you create is a real asset. People who feel comfortable stay on the phone, and staying on the phone is the first condition for enrolling.</p>
            <p>Both calls today were warm inbound Money Callers — consumers who saw an ad about a grocery benefit and called. Both ended on the first objection. Tomorrow, the correction is one behavior: before you offer any callback or referral, say one thing that gives the consumer a concrete reason to stay on the call for two more minutes.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Before you offer a callback, say one line that gives the consumer a concrete reason to stay on the call.</p>
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
              <span>Day Average: <strong>29 / 100</strong></span>
              <span>Enrolled: <strong>0 of 2</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well Today</h2>
          <div className={styles.summaryCard}>
            <p><strong>Compliance opens — both calls:</strong> TPMO and SOA delivered cleanly on both calls, with your second call clocking in at 13 seconds — one of the fastest and cleanest compliance opens on the team. That discipline is the foundation everything else gets built on.</p>
            <p><strong>Consumer rapport:</strong> Both consumers were warm and comfortable with you throughout. Neither call had hostility or suspicion. The trust you build in the first 60 seconds is real, and it matters — a consumer who trusts you will stay on the phone long enough to hear the offer. Your job tomorrow is to use that trust window to deliver the close before the first objection arrives.</p>
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
          <p>The Certainty System · Alicia Moore Williams · April 13, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · RC3 · The Money Caller · First Objection Reframe</p>
        </div>

      </div>
    </PageShell>
  )
}
