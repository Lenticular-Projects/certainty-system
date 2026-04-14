'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import styles from './page.module.css'

// ── Daily Brief: April 13, 2026 ─────────────────────────────────────────────

const dayCalls = [
  { consumer: 'Robin Hargett', date: '04-13', duration: '10:24', score: 58, outcome: 'CORRECT NO-SALE', type: 'Complex Dual-Eligible' },
  { consumer: 'Mary Lancaster', date: '04-13', duration: '13:08', score: 33, outcome: 'MISSED OPPORTUNITY', type: 'The Money Caller — MOV SEP' },
  { consumer: 'Unknown', date: '04-13', duration: '3:02', score: 35, outcome: 'MISSED OPPORTUNITY', type: 'The Money Caller — Veteran' },
  { consumer: 'Frank Yannis', date: '04-13', duration: '18:06', score: 52, outcome: 'MISSED OPPORTUNITY', type: 'Complex Dual-Eligible — Closeable' },
]

const patterns = [
  {
    title: 'Full Discovery Done — Close Surrendered at the End',
    rc: 'RC1 — Loss of Lead',
    urgency: 'critical' as const,
    body: `On Frank Yannis's call today, you ran 18 minutes with a dual-eligible diabetic who called specifically about the grocery card — and had an active dental need. You worked through his Medicare card, plan options, doctor network, and medications. The technical case was built. At minute 17, Frank asked for a brochure. You said "Unfortunately I would not be able to send you a brochure" — and the call ended.

The brochure ask is not a "no." It's "show me more before I commit" — the closest thing to a yes you can get without a yes. At 17:36, the correct response was: "I can't mail one out, but everything I'm describing is in your plan documents and I can walk you through the key details right now. Let's lock in your coverage today and you'll receive everything in writing." That sentence keeps the call alive. Tomorrow, any time a consumer asks for materials — brochure, website, something in writing — hear it as "I'm not fully convinced yet" and respond with more commitment, not a dead end.`,
  },
  {
    title: 'SEP Identified — Cold Callback Offered Instead of Enrollment',
    rc: 'RC6 — Missed SEP Opportunity',
    urgency: 'high' as const,
    body: `On Mary Lancaster's call today, you correctly identified that she had recently moved — a MOV Special Enrollment Period, open right now. Then you offered a callback. When you identify a SEP, you have the legal justification to enroll this consumer today. The SEP is the enrollment hook — not a detail to pass along.

Next time you identify a MOV: "Because you moved recently, you have a special window to change your coverage right now — this isn't something we have to schedule, we can take care of it today." The system failure that burned 6 minutes in the middle of that call hurt the momentum. But even with that recovery gap, you had the SEP identified and a warm consumer who stayed on the line for 13 minutes. The close was available.`,
  },
  {
    title: 'SSN Refusal — No Alternative Offered Before Release',
    rc: 'RC1 — Loss of Lead',
    urgency: 'medium' as const,
    body: `On your 3:02 call today, a veteran in Florida declined to give his SSN. You offered it as the only verification option, he declined, and the call ended. The alternative is name and date of birth — most systems support lookup by name + DOB without SSN.

Before releasing any caller who declines SSN, offer the alternative: "No problem at all — I can also look you up with just your name and date of birth. What's your full name?" That one sentence keeps the lead alive. It takes 10 seconds and has a real close rate.`,
  },
]

const workOns = [
  {
    num: '01',
    title: 'When you\'ve done the work, don\'t give away the close.',
    detail: 'On Frank Yannis\'s call at 17:36, you had 18 minutes of discovery built and a consumer who wanted to switch. His brochure ask was a buying signal, not an exit. The response: "I can\'t mail one, but I can walk you through the key details right now, and you\'ll receive everything in writing once you\'re enrolled. Let\'s take care of this today." Practice this tonight so it comes out automatically.',
  },
  {
    num: '02',
    title: 'The MOV SEP is a reason to enroll today — say it.',
    detail: 'On Mary Lancaster\'s call, you identified the MOV and then offered a callback. The correct pivot: "Because you moved recently, you have a window to change your coverage right now — not something we need to schedule, we can handle it today." The SEP is the close. When you find it, use it.',
  },
  {
    num: '03',
    title: 'SSN declined → offer name + DOB before hanging up.',
    detail: 'Always have the alternative ready: "No problem — I can also pull you up with just your name and date of birth. What\'s your full name?" That one question keeps the call alive when SSN is off the table. It takes 10 seconds.',
  },
]

const pastReports = [
  {
    title: 'Daily Brief — April 13, 2026',
    type: 'Daily Brief',
    date: 'April 14, 2026',
    score: '44 / 100',
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

export default function RosinaKlimoskiPage() {
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
          <h1 className={styles.agentName}>Rosina Klimoski</h1>
          <p className={styles.period}>April 13, 2026 → Going into April 14</p>
          <p className={styles.updatedAt}>Generated April 14, 2026 · 4 calls reviewed</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(44) }}>44</span>
            <span className={styles.scoreLabel}>Day Average</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>4</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>April 13, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>1</span>
            <span className={styles.scoreLabel}>Correct No-Sale</span>
            <span className={styles.scoreRange}>3 Missed Opportunity</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC1</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Discovery done — close surrendered</span>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Today</h2>
          <div className={styles.summaryCard}>
            <p>Your Robin Hargett call was the best thing you did today. Robin is in Lancaster, SC — dual-eligible, on UnitedHealthcare D-SNP with a $261 spending card. You ran the comparison, found a Humana option, started building the case — and then caught your own screen error at 9:01 and reversed your framing. You told Robin the truth: the numbers don&apos;t support switching. That is professional integrity in a high-pressure moment. A lesser agent locks in the enrollment and hopes compliance doesn&apos;t catch it. You caught it yourself. That call was a correct no-sale and it reflects real discipline.</p>
            <p>The pattern that cost you the most today: you did the work on every call — long discovery, correct SEP identification, full plan comparison on Frank Yannis — and then handed away the close at the very end. The Frank Yannis call was 18 minutes of correct execution that ended at minute 17 on a brochure objection you could have reframed in one sentence. Tomorrow, the correction is finishing what you start.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When you&apos;ve identified the SEP and done the full discovery, the only thing left is to ask — don&apos;t hand them a callback, hand them the enrollment.</p>
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
              <span>Day Average: <strong>44 / 100</strong></span>
              <span>Correct No-Sales: <strong>1 of 4</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well Today</h2>
          <div className={styles.summaryCard}>
            <p><strong>Robin Hargett (04-13) — Correct No-Sale:</strong> You ran the comparison, caught your own screen error at 9:01, and reversed your framing. Robin was already on the best available plan. Telling her that — while looking at commission on the table — is professional integrity, and it is not a small thing. Correct no-sales protect both the consumer and your credibility. This call was done right.</p>
            <p><strong>Frank Yannis (04-13) — Full Discovery Execution:</strong> 18 minutes with a dual-eligible diabetic who called about the grocery card. You ran plan comparison, identified dental and OTC benefits, verified his doctor network, and ran his medications. You demonstrated that you can carry a complex call all the way through the technical work. The problem wasn&apos;t the discovery — it was that you handed the close away at the very end. The work was there. Tomorrow, finish it.</p>
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
          <p>The Certainty System · Rosina Klimoski · April 13, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC6 · MOV SEP · Brochure Reframe · Robin Hargett: Correct No-Sale</p>
        </div>

      </div>
    </PageShell>
  )
}
