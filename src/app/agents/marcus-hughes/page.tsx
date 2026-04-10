'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import styles from './page.module.css'

// ── Weekly Brief: March 30 – April 3, 2026 ──────────────────────────────────

const weekCalls = [
  { consumer: 'Mary Carey', date: '03-30', duration: '36:41', score: 82, outcome: 'ENROLLED', type: 'The Plan Switcher' },
  { consumer: 'Tonya McLean McCoy', date: '03-30', duration: '50:03', score: 68, outcome: 'ENROLLED', type: 'Chronic Condition / C-SNP' },
  { consumer: 'Boyce Little', date: '03-30', duration: '21:51', score: 46, outcome: 'MISSED OPPORTUNITY', type: 'The Money Caller / Loyal Ager' },
]

const weekOverWeek = [
  { metric: 'Platform Calls', prev: '109', curr: '109', delta: '—' },
  { metric: 'Platform Sales', prev: '13', curr: '10', delta: '-3', down: true },
  { metric: 'Conversion %', prev: '11.93%', curr: '10.84%', delta: '-1.09 pts', down: true },
  { metric: 'CPA', prev: '$202.10', curr: '$113.23', delta: '-$88.87', up: true },
  { metric: 'Certainty Score Avg', prev: '71 / 100', curr: '65 / 100', delta: '-6 pts', down: true },
  { metric: 'Enrollment Rate (reviewed)', prev: '75% (3/4)', curr: '67% (2/3)', delta: '-8 pts', down: true },
]

const patterns = [
  {
    title: 'Objection Surrender at the Loyalty Wall',
    rc: 'RC4 — Pressure Drop / Premature Release',
    urgency: 'high' as const,
    body: `On the Boyce Little call, the loyalty-to-local-agent objection arrived at 18:11 and you absorbed it. You correctly clarified Boyce wasn't changing companies — still on Aetna — but then pivoted to a false-urgency claim rather than anchoring on what was actually true: his local agent had never gotten him $30 a month back on his Social Security.

The correction is one reframe to have ready: "Keep that appointment — absolutely go see him. But you called today because you wanted more money. I have it right here. It takes two minutes. You go see him tomorrow and you can tell him you already handled it. Can we finish this up?"`,
  },
  {
    title: 'Compliance Exposure on C-SNP Qualification',
    rc: 'RC7 — Suitability / Enrollment Validity Risk',
    urgency: 'critical' as const,
    body: `On the Tonya McLean McCoy call, the cardiovascular suitability question at 38:41 created a serious compliance exposure. Tonya had answered "no" to the cardiovascular question — and you guided her toward answering "yes." Her Multiple Sclerosis, disclosed at 14:03, is itself a qualifying C-SNP condition. The enrollment was valid on MS alone.

The correction: know your C-SNP qualifying conditions cold before the qualification sequence. When a consumer discloses MS, that is your qualifying condition. Build the suitability case on what is documented — never coach an answer to a question whose correct answer is uncertain.`,
  },
  {
    title: 'Math That Informs but Does Not Close',
    rc: 'RC2 — Math Breakdown Incomplete',
    urgency: 'medium' as const,
    body: `Across both enrollments this week, the Math Breakdown stopped one step short. Both consumers enrolled on rapport and benefit awareness — a real skill. But the math is the close on a hesitant consumer.

Compare → Annualize → Humanize. Step 3 is the close. A number they can feel — "$360 back in your pocket next year, the same year you told me you're paying $200 out of pocket for your dental" — is the reframe that holds. You are leaving that tool in the bag on every call.`,
  },
]

const workOns = [
  {
    num: '01',
    title: 'Build the loyalty-agent reframe and deploy it before you offer a callback.',
    detail: 'On the Boyce Little call at 19:11 you had a clear last window. Boyce said "I\'ll find out tomorrow, then." That was your moment to anchor. Next time: agree with the relationship, name what his agent hasn\'t done ("did he ever get you $30 a month back on your Social Security?"), and close it ("That\'s what I\'ve got right here. Two minutes. Let\'s handle it now").',
  },
  {
    num: '02',
    title: 'Know your C-SNP qualifying conditions by memory — build suitability on what is documented.',
    detail: 'Before the next C-SNP enrollment, review the qualifying chronic conditions so you can pivot cleanly to the documented condition without coaching an uncertain answer. Tonya\'s MS was disclosed at 14:03. That\'s your qualifier. Suitability risk on a valid enrollment is an unnecessary exposure.',
  },
  {
    num: '03',
    title: 'Complete the Math Breakdown through Step 3 — Humanize — before you move to the close.',
    detail: 'After you present the benefit figures, state the annual number out loud ("that\'s $360 back on your Social Security over 12 months"), then connect it to something the consumer said. That last sentence is the close. Everything before it is setup. Stop ending the math at Step 2.',
  },
]

const pastReports = [
  {
    title: 'Weekly Brief — March 30 – April 3, 2026',
    type: 'Weekly Brief',
    date: 'April 5, 2026',
    score: '65 / 100',
    active: true,
  },
]

// ── Helpers ─────────────────────────────────────────────────────────────────

function outcomeClass(outcome: string) {
  if (outcome === 'ENROLLED') return styles.pillEnrolled
  if (outcome === 'MISSED OPPORTUNITY') return styles.pillMissed
  if (outcome === 'INCOMPLETE') return styles.pillIncomplete
  return styles.pillNeutral
}

function scoreColor(score: number) {
  if (score >= 75) return 'var(--sage-dark)'
  if (score >= 55) return 'var(--mustard-dark)'
  return 'var(--terracotta)'
}

export default function MarcusHughesPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        {/* ── Header ── */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Agent Profile</span>
          </div>
          <h1 className={styles.agentName}>Marcus Hughes</h1>
          <p className={styles.period}>Weekly Brief — March 30 – April 3, 2026</p>
          <p className={styles.updatedAt}>Generated April 5, 2026 · 3 calls reviewed</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(65) }}>65</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Prior week: 71</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>67%</span>
            <span className={styles.scoreLabel}>Enrollment Rate</span>
            <span className={styles.scoreRange}>2 of 3 reviewed calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>10</span>
            <span className={styles.scoreLabel}>Platform Sales</span>
            <span className={styles.scoreRange}>Prior week: 13</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>$113</span>
            <span className={styles.scoreLabel}>CPA</span>
            <span className={styles.scoreRange}>Prior week: $202</span>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>This Week</h2>
          <div className={styles.summaryCard}>
            <p>Your best moment this week happened on the Mary Carey call — a 36-minute enrollment where you caught a doctor-network conflict at 9:43 before it became an objection, pivoted immediately from UnitedHealthcare to Aetna to protect her existing care relationships, and closed cleanly. That pivot is not a small thing. Most agents in that position keep pushing the higher-benefit plan and walk into a wall. You read the room, adjusted, and enrolled.</p>
            <p>The pattern that cost you the most this week was objection surrender — specifically, loyalty-to-another-agent objections that you absorbed rather than reframed. On the Boyce Little call, a 95-year-old veteran who had already told you he wanted more money, you received a closeable call and gave it back. The correction is one behavior: stop accepting "I have an agent" as the final answer. That objection is not a wall — it is an opening.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Before your next call, remind yourself: the consumer who says "I already have an agent" has just told you exactly what leverage you have — find what that agent hasn't done for them, name it, and close it.</p>
        </motion.div>

        {/* ── Week's Calls ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Week's Calls</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Consumer</span>
              <span>Date</span>
              <span>Duration</span>
              <span>Score</span>
              <span>Outcome</span>
              <span>Call Type</span>
            </div>
            {weekCalls.map((call, i) => (
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
              <span>Week Average: <strong>65 / 100</strong></span>
              <span>Enrolled Average: <strong>75 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Week-over-Week ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Week-over-Week</h2>
          <div className={styles.wowTable}>
            <div className={styles.wowHeader}>
              <span>Metric</span>
              <span>Mar 23–27</span>
              <span>Mar 30–Apr 3</span>
              <span>Change</span>
            </div>
            {weekOverWeek.map((row, i) => (
              <div key={i} className={styles.wowRow}>
                <span className={styles.wowMetric}>{row.metric}</span>
                <span className={styles.wowVal}>{row.prev}</span>
                <span className={styles.wowVal}>{row.curr}</span>
                <span className={`${styles.wowDelta} ${row.down ? styles.deltaDown : row.up ? styles.deltaUp : ''}`}>{row.delta}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Mary Carey (03-30):</strong> When you pulled her doctor's name at 9:43 and confirmed the higher-benefit UnitedHealthcare plan was out of network for her primary physician, you had a decision to make in real time. You pivoted. That is not a compromise — that is a close. Agents who don't read that signal lose the enrollment trying to defend a number.</p>
            <p><strong>Tonya McLean McCoy (03-30):</strong> The name-lookup failure that burned nearly 8 minutes at the start would have caused a less controlled agent to lose the frame entirely. You held the call together, collected a thorough medication list, correctly identified Tonya's C-SNP eligibility, and closed at 26:33. When you get to the close, you close.</p>
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
                {p.body.split('\n\n').map((para, j) => (
                  <p key={j} className={styles.priorityDetail}>{para}</p>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── What to Work On ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What to Work On Next Week</h2>
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
          <h2 className={styles.sectionTitle}>Past Reports</h2>
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
          <p>The Certainty System · Marcus Hughes · March 30 – April 3, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC2 · RC4 · RC6 · RC7 · Phase V · Phase VI · Math Breakdown Step 3</p>
        </div>

      </div>
    </PageShell>
  )
}
