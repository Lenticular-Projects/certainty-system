'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Daily Brief: April 13, 2026 ─────────────────────────────────────────────

const dayCalls = [
  { consumer: 'TJ', date: '04-13', duration: '2:22', score: 29, outcome: 'MISSED OPPORTUNITY', type: 'The Money Caller', href: '/agents/robert-pegler/calls/tj' },
  { consumer: 'Unknown', date: '04-13', duration: '5:31', score: 42, outcome: 'INCOMPLETE', type: 'Dual-Eligible — Dropped Call', href: '/agents/robert-pegler/calls/unknown-consumer-5m31s' },
  { consumer: 'Dwight Chattahill', date: '04-13', duration: '18:47', score: 56, outcome: 'CORRECT NO-SALE', type: 'Complex — Network Conflict', href: '/agents/robert-pegler/calls/dwight-chattahill' },
]

const patterns = [
  {
    title: '"I Don\'t Want to Change" — Accepted as the Final Answer',
    rc: 'RC1 — Loss of Lead',
    urgency: 'critical' as const,
    body: `On your TJ call today, the consumer confirmed they're on Humana. When you heard "I don't want to change," you offered to transfer them to a Humana agent — twice — and the call ended at 2:22. Here is what happened on that call: TJ told you they have Humana and don't have the food card. TJ called you because they want the food card. Those two facts together are the entire enrollment argument. You had it in your hands and handed them back to the carrier that isn't giving them what they called for.

Tomorrow, when a consumer says "I don't want to change," the response is: "I understand — most people feel that way. But here's what you just told me: you called about the grocery card, and Humana doesn't include that in your plan. The plans I work with do. That's not a change — that's getting what you called for." One sentence. The contradiction is the reframe.`,
  },
  {
    title: 'Medicaid Confirmed — D-SNP Not Offered',
    rc: 'RC6 — Missed SEP Opportunity',
    urgency: 'high' as const,
    body: `On your second call today, the consumer said at 0:55: "I even got some Medicaid." You acknowledged it and moved on without exploring the D-SNP pathway. That consumer — Tennessee caller, $22/month income, acute food insecurity, Medicaid confirmed — is a textbook Dual-Eligible Special Needs Plan candidate. The INT SEP was open the moment she confirmed Medicaid.

Tomorrow, any time a consumer mentions Medicaid, state assistance, or "I have both" — stop and say: "You mentioned Medicaid. That actually qualifies you for a special type of Medicare plan designed for your situation. It includes the grocery card benefit and it's available to you right now." You captured her callback number (731-389-6183). That lead is still open — call it back today.`,
  },
  {
    title: 'Stroke Disclosed — CSN Not Explored',
    rc: 'RC6 — Missed SEP Opportunity',
    urgency: 'medium' as const,
    body: `On the Dwight Chattahill call, Dwight disclosed a mild stroke 2-3 months prior at 11:02. You acknowledged it emotionally but didn't explore the Chronic Special Needs Plan pathway. A stroke within the last year is a CSN trigger — there may be a C-SNP in Muskogee County with specialized cardiac and stroke care.

In Dwight's case the network incompatibility ended the call correctly regardless. But tomorrow: when a consumer discloses a serious diagnosis — stroke, heart condition, diabetes, COPD — ask the follow-up: "When was that diagnosed? Because there may be a plan specifically designed for that condition that gives you more support."`,
  },
]

const workOns = [
  {
    num: '01',
    title: 'When they confirm their plan doesn\'t have what they called for — that\'s the reframe.',
    detail: 'On TJ\'s call at 1:20, the consumer said they have Humana and don\'t want to change. But TJ called about the food card — and Humana doesn\'t have it. That contradiction is the entire case. The response: "You called about the grocery card, and you just told me Humana doesn\'t have it. That\'s exactly why I\'m calling — the plan I\'m looking at in your area does. Two minutes." Say this before any transfer offer.',
  },
  {
    num: '02',
    title: 'Medicaid = enroll now — say it out loud.',
    detail: 'The INT SEP means a Medicaid-confirmed consumer can enroll any month, right now. When a consumer confirms Medicaid, your next sentence is: "With Medicaid, you qualify to enroll in a better plan today — you don\'t have to wait until October." Then move into the enrollment. The Tennessee consumer from your second call is a live lead. Follow up on 731-389-6183.',
  },
  {
    num: '03',
    title: 'Serious condition disclosure → ask when it was diagnosed.',
    detail: 'On Dwight\'s call at 11:02, the stroke disclosure opened a potential CSN pathway. After any serious diagnosis disclosure, ask: "When was that diagnosed? Because there are plans specifically designed for your condition that may give you more coverage in that area." This takes 10 seconds and may open a SEP window.',
  },
]

const pastReports = [
  {
    title: 'Daily Brief — April 13, 2026',
    type: 'Daily Brief',
    date: 'April 14, 2026',
    score: '42 / 100',
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

export default function RobertPeglerPage() {
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
          <h1 className={styles.agentName}>Robert Pegler</h1>
          <p className={styles.period}>April 13, 2026 → Going into April 14</p>
          <p className={styles.updatedAt}>Generated April 14, 2026 · 3 calls reviewed</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(42) }}>42</span>
            <span className={styles.scoreLabel}>Day Average</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>3</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>April 13, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>1</span>
            <span className={styles.scoreLabel}>Correct No-Sale</span>
            <span className={styles.scoreRange}>1 Missed · 1 Incomplete</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC6</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Medicaid + CSN not explored</span>
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Today</h2>
          <div className={styles.summaryCard}>
            <p>Your best work today was the Dwight Chattahill call. Eighteen minutes in, you were building a strong case — and then you found the incompatibility. Dwight&apos;s pain management doctor and injection facility aren&apos;t in UHC&apos;s network, and UHC is the only carrier in Muskogee County. You called it correctly at 16:26. You didn&apos;t push through an enrollment that would have caused him direct harm. That is the right call, and it is not easy to make with 18 minutes invested. You also caught and corrected Social Security Office misinformation about a 12-month trial period — that kind of knowledge protects consumers from bad decisions.</p>
            <p>The pattern that cost you today: the "I don&apos;t want to change" objection was accepted as final on the TJ call, and a Medicaid disclosure at 0:55 on your second call passed without a D-SNP conversation. Tomorrow, those are the two pivots to have ready. And there&apos;s a live lead from today&apos;s second call — callback number 731-389-6183, Tennessee, Medicaid confirmed, dual-eligible. The INT SEP is still open.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer tells you why their current plan isn&apos;t working, they&apos;ve already made the case for switching — your job is to agree with them out loud.</p>
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
                <span className={styles.consumerName}>
                  {call.href ? (
                    <Link href={call.href} style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'var(--ink-20)', textUnderlineOffset: '3px' }}>
                      {call.consumer}
                    </Link>
                  ) : call.consumer}
                </span>
                <span className={styles.callMeta}>{call.date}</span>
                <span className={styles.callMeta}>{call.duration}</span>
                <span className={styles.callScore} style={{ color: scoreColor(call.score) }}>{call.score}</span>
                <span className={`${styles.pill} ${outcomeClass(call.outcome)}`}>{call.outcome}</span>
                <span className={styles.callType}>{call.type}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Day Average: <strong>42 / 100</strong></span>
              <span>Correct No-Sales: <strong>1 of 3</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well Today</h2>
          <div className={styles.summaryCard}>
            <p><strong>Dwight Chattahill (04-13) — Correct No-Sale:</strong> When you found that Dwight&apos;s pain management doctor and injection facility aren&apos;t in network — and UHC is the only carrier in Muskogee County — you stopped. You didn&apos;t manufacture an enrollment that would have caused direct harm to a consumer&apos;s access to care. That decision, made with 18 minutes of your time already invested, is professional integrity. It is the right call and a hard one.</p>
            <p><strong>Correcting misinformation (Dwight Chattahill):</strong> At some point on that call, Dwight had been told by the Social Security Office that he was in a 12-month trial period with his plan. You identified that as incorrect and set the record straight. That kind of knowledge — knowing what SSA gets wrong — protects consumers from making bad decisions based on bad information. That is the job.</p>
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
          <p>The Certainty System · Robert Pegler · April 13, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC6 · INT SEP · D-SNP · CSN · Live Lead: 731-389-6183</p>
        </div>

      </div>
    </PageShell>
  )
}
