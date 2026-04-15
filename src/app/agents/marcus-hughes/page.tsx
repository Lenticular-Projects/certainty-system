'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import styles from './page.module.css'

// ── Weekly Brief: March 30 – April 3, 2026 ──────────────────────────────────

const callsByDate = [
  {
    date: 'Monday, March 30',
    calls: [
      { consumer: 'Mary Carey', duration: '36:41', score: 82, outcome: 'ENROLLED', type: 'The Plan Switcher' },
      { consumer: 'Tonya McLean McCoy', duration: '50:03', score: 68, outcome: 'ENROLLED', type: 'Chronic Condition / C-SNP' },
      { consumer: 'Boyce Little', duration: '21:51', score: 46, outcome: 'MISSED OPPORTUNITY', type: 'The Money Caller / Loyal Ager' },
    ],
  },
]

const patterns = [
  {
    title: '"I already have an agent" — absorbed instead of reframed',
    rc: 'RC4',
    urgency: 'high' as const,
    summary: 'Boyce Little, 18:11: loyalty-to-local-agent objection arrived. You clarified he\'d still be on Aetna — correct. Then offered a callback instead of closing. A 95-year-old veteran who said he wanted more money. Closeable to the end.',
    fix: '"Keep that appointment — absolutely go see him. But you called today because you wanted more money. I have it right here. Two minutes. You go see him tomorrow and tell him you already handled it. Can we finish this up?"',
  },
  {
    title: 'C-SNP suitability coached on wrong condition',
    rc: 'RC7',
    urgency: 'critical' as const,
    summary: 'Tonya McLean McCoy, 38:41: cardiovascular suitability question came up. Tonya had answered "no" — you guided her toward "yes." Her MS (disclosed 14:03) was itself a qualifying C-SNP condition. The enrollment was valid on MS alone.',
    fix: 'Know C-SNP qualifying conditions before the qualification sequence. When MS is disclosed, that is your qualifying condition. Build suitability on what is documented — never coach a response to a question whose correct answer is uncertain.',
  },
  {
    title: 'Math stops at Step 2 — humanize to close',
    rc: 'RC3',
    urgency: 'medium' as const,
    summary: 'Both enrollments closed on rapport and benefit awareness. The Math Breakdown stopped one step short on both calls — annualized number stated, never connected to something the consumer said.',
    fix: 'After annualizing: "That\'s $360 back on your Social Security next year — the same year you told me you\'re paying $200 out of pocket for dental." The humanized sentence is the close. Stop at Step 2 and you leave it on the table.',
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

export default function MarcusHughesPage() {
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
          <h1 className={styles.agentName}>Marcus Hughes</h1>
          <p className={styles.period}>Week of March 30 – April 3, 2026</p>
          <p className={styles.updatedAt}>Updated April 5 · 3 calls reviewed (Mon)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(65) }}>65</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Mon · 3 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>3</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Mar 30, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>2</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>1 Missed Opportunity</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC4</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Loyalty objection absorbed</span>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When the consumer says &ldquo;I already have an agent,&rdquo; they&apos;ve just told you exactly what leverage you have — find what that agent hasn&apos;t done for them, name it, and close it.</p>
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
                    <span className={styles.consumerName}>{call.consumer}</span>
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
            <span>Week Average: <strong>65 / 100</strong></span>
            <span>Enrolled: <strong>2 of 3</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Network pivot on Mary Carey (9:43):</strong> You caught that the higher-benefit UnitedHealthcare plan was out of network for her primary physician — before she objected. You pivoted to Aetna, protected her care relationships, and enrolled. That is not a compromise, that is a close. Most agents push the higher-benefit plan and walk into a wall.</p>
            <p><strong>C-SNP close on Tonya McLean McCoy (26:33):</strong> The name-lookup failure burned 8 minutes at the start and would have broken most agents&apos; frame. You held it together, collected a thorough medication list, identified C-SNP eligibility, and closed. When you get to the close, you close.</p>
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
                <p className={styles.workOnTitle}>Build the loyalty-agent reframe — have it ready before you offer a callback</p>
                <p className={styles.workOnDetail}>On Boyce Little at 19:11 you had a clear last window. He said &ldquo;I&apos;ll find out tomorrow, then.&rdquo; That was your moment. Next time: agree with the relationship, name what his agent hasn&apos;t done, and close it: &ldquo;Did he ever get you $30 a month back on your Social Security? That&apos;s what I&apos;ve got right here. Two minutes. Let&apos;s handle it now.&rdquo;</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Know C-SNP qualifying conditions before the qualification sequence</p>
                <p className={styles.workOnDetail}>Before the next C-SNP enrollment, review qualifying chronic conditions so you can pivot cleanly to the documented condition. Tonya&apos;s MS was disclosed at 14:03. That was your qualifier. Suitability risk on a valid enrollment is unnecessary exposure.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>Humanize the number — Step 3 of Math Breakdown</p>
                <p className={styles.workOnDetail}>After annualizing, connect the number to something they said: &ldquo;That&apos;s $360 back on your Social Security — the same year you told me you&apos;re paying $200 out of pocket for dental.&rdquo; That sentence is the close. Everything before it is setup.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Reports ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Reports</h2>
          <div className={styles.reportList}>
            <div className={`${styles.reportCard} ${styles.reportActive}`}>
              <div className={styles.reportLeft}>
                <span className={styles.reportType}>Weekly Brief</span>
                <span className={styles.reportTitle}>Weekly Brief — March 30 – April 3, 2026</span>
              </div>
              <div className={styles.reportRight}>
                <span className={styles.reportScore}>65 / 100</span>
                <span className={styles.reportDate}>Apr 5, 2026</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Marcus Hughes · Week of March 30 – April 3, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC3 · RC4 · RC7 · C-SNP · Loyalty Objection · Math Breakdown Step 3</p>
        </div>

      </div>
    </PageShell>
  )
}
