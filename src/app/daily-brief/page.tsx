'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import styles from './page.module.css'

// ── Monday, April 21, 2026 — Team Daily Brief ─────────────────────────────────

const whatWorked = [
  {
    title: 'Qualifying events caught in real time',
    detail: "Several calls today turned on a single piece of information: a recent move mentioned in passing, a Part B start date buried in the conversation, a Medicaid status confirmed despite consumer confusion, a chronic diagnosis dropped without emphasis. Agents who caught these signals and knew what to do with them created enrollment pathways where the call appeared closed. A routine address question unlocked a move-triggered window. A consumer who said \"I just got Medicare\" opened an initial enrollment period. These aren't luck — they're the product of listening for what the system allows, not just what the consumer is asking for.",
    example: '"When did you make that move? The reason I ask — if it was in the last couple of months, you have a special enrollment window that may only be open a short time. That means we may need to act today."',
    exampleLabel: 'What that sounds like:',
  },
  {
    title: 'Benefit anchoring held under pressure',
    detail: "When consumers pushed back on switching plans, expressed skepticism about card disruptions, or questioned whether a new plan was worth it, several agents held their frame and came back with confidence. The food card, the give-back amount, the OTC benefit — they stayed the center of the presentation even when the conversation tried to move off them. Reframing a disruption concern into a reason to switch is a skill. It appeared today and it worked.",
    example: '"That\'s actually exactly why we\'re making the change today — so that disruption doesn\'t happen again. The new plan deposits that money directly. You won\'t have to chase it."',
    exampleLabel: 'The reframe that held:',
  },
  {
    title: 'Compliance execution on enrolled calls',
    detail: "The calls that reached enrollment today mostly did it cleanly. Plan name disclosed. Premium stated. Disenrollment warning delivered. Effective date confirmed. Voice signatures captured. At least one agent held the compliance line when a consumer tried to skip CMS disclosures, kept the call on track, and still enrolled. Compliance isn't the ceiling — it's the floor. Hitting it every time is what keeps enrollments valid and keeps the team out of audit exposure.",
    example: null,
    exampleLabel: null,
  },
]

const whatDidnt = [
  {
    title: 'The math stopped at the monthly number',
    urgency: 'critical' as const,
    freq: 'Nearly every call today',
    detail: "The monthly benefit was stated correctly and then left there. \"$184 a month\" is right. \"$2,208 more in your pocket next year\" is what moves people. \"$267 a month\" is correct. \"$3,204 added to your food budget over the next 12 months\" lands differently. On fixed income, annual math sounds like something that changes a situation. Monthly math sounds like a line item. The annualization step is one sentence — and it was missing on the overwhelming majority of calls today. The number is already there. Multiply it and say it out loud.",
    move: '"You\'re getting $184 added to your Social Security check every month — that\'s $2,208 over the course of the year. On a fixed income, that\'s not a plan feature. That\'s a real difference."',
    moveLabel: 'What the annualization sounds like:',
  },
  {
    title: 'Permission-seeking language handed the close back',
    urgency: 'critical' as const,
    freq: 'Multiple calls · multiple agents',
    detail: "\"It's your decision, but...\" \"I can't force you to...\" \"If you wanted to, you could...\" All three appeared on calls today, and in each case the agent was preparing to accept a no before the consumer gave one. A consumer who hears \"it's your decision\" has been handed the door — they didn't ask for it. The correct move at the close is stated next steps. Not an option. Not a question. A direction. When you have everything you need, the next sentence is: \"I have your address — let me get this locked in for May 1st.\" That's it.",
    move: '"I have everything I need. Let me go ahead and get you set up — your coverage starts May 1st and your card will be active the first of the month."',
    moveLabel: 'What the assumptive close sounds like:',
  },
  {
    title: 'First soft objection accepted as the final answer',
    urgency: 'high' as const,
    freq: 'Multiple missed calls today',
    detail: "A consumer says \"let me think about it\" or \"let me call you back\" — and the call ends. No reframe. No one more question. Just acceptance. A soft exit is not a no. A no is \"I'm not interested, don't call me again.\" Everything else — hesitation, delay, vagueness, \"maybe later\" — is a question in disguise. The question is: give me one more reason. Most of the missed calls today ended on a soft exit with zero pushback. One sentence changes many of them. Ask the question before you let them go.",
    move: '"Before you go — you called because you wanted [the specific thing they mentioned]. Give me 60 more seconds and I\'ll show you exactly what it looks like. If it doesn\'t feel right, we hang up friends."',
    moveLabel: 'When the soft exit comes:',
  },
]

export default function DailyBriefPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        {/* ── Header ── */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Morning Brief</span>
          </div>
          <h1 className={styles.pageTitle}>Monday Debrief</h1>
          <p className={styles.period}>Calls from April 20, 2026</p>
          <p className={styles.updatedAt}>Published April 21 · 21 calls reviewed</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>58</span>
            <span className={styles.scoreLabel}>Day Average</span>
            <span className={styles.scoreRange}>April 20 · 21 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>21</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>April 20, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>11</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>9 Missed · 1 No-Sale</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC2</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Client Gold heard, not used</span>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>The gap today wasn&apos;t in finding the plan &mdash; the right plan was identified on most calls. The gap was in the moment between hearing something that mattered and using it. When someone says their food runs out before the month does, or their mortgage takes their whole check, or they haven&apos;t had dental care in years &mdash; that&apos;s not background information. That&apos;s the close. Stop the presentation, say it back to them, and connect the plan to that moment. Every time. That&apos;s the move that converts the work that&apos;s already being done.</p>
        </motion.div>

        {/* ── What Worked ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Worked</h2>
          <div className={styles.workedList}>
            {whatWorked.map((item, i) => (
              <div key={i} className={styles.workedCard}>
                <div className={styles.workedHeader}>
                  <span className={styles.workedBadge}>STRENGTH</span>
                </div>
                <p className={styles.workedTitle}>{item.title}</p>
                <p className={styles.workedDetail}>{item.detail}</p>
                {item.example && (
                  <div className={styles.workedExample}>
                    <span className={styles.workedExampleLabel}>{item.exampleLabel}</span>
                    <p className={styles.workedExampleText}>{item.example}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── What Didn't Work ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Kept the Day from Being Bigger</h2>
          <div className={styles.patternList}>
            {whatDidnt.map((p, i) => (
              <div key={i} className={`${styles.patternCard} ${styles[`pattern_${p.urgency}`]}`}>
                <div className={styles.patternHeader}>
                  <span className={`${styles.urgencyBadge} ${styles[`badge_${p.urgency}`]}`}>
                    {p.urgency === 'critical' ? 'CRITICAL' : 'HIGH PRIORITY'}
                  </span>
                  <span className={styles.freqBadge}>{p.freq}</span>
                </div>
                <p className={styles.patternTitle}>{p.title}</p>
                <p className={styles.patternDetail}>{p.detail}</p>
                <div className={styles.patternMove}>
                  <span className={styles.patternMoveLabel}>{p.moveLabel}</span>
                  <p className={styles.patternMoveText}>{p.move}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </PageShell>
  )
}
