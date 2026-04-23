'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from '../../page.module.css'

// ── Archived Weekly Brief — April 22, 2026 ──────────────────────────────────
// This page is a permanent archive of the Apr 22 brief delivered to Josner.
// When a new brief ships on the main agent page, this one stays exactly as-is.
// CRM (source of truth):
//   Apr 13–17 (5 days): 102 all_calls · 69 billable · 5 sales · 4.90% conv · $274.80 CPA
//   Apr 20–22 (3 days):  51 all_calls · 33 billable · 4 sales · 7.84% conv · $142.50 CPA

const trendRows = [
  { metric: 'Sales',      lastWeek: '5',        thisPeriod: '4',       movement: '↑ Pace up (1.33/day vs 1.0)', dir: 'up' },
  { metric: 'Conversion', lastWeek: '4.90%',    thisPeriod: '7.84%',   movement: '↑ +2.94pp',                   dir: 'up' },
  { metric: 'CPA',        lastWeek: '$274.80',  thisPeriod: '$142.50', movement: '↓ −$132.30',                  dir: 'up' },
]

const reviewedCalls = [
  {
    date: 'Tuesday, April 21',
    calls: [
      { consumer: 'Roy Bumgarner', duration: '57:46', score: 75, outcome: 'ENROLLED', type: 'The Money Caller · Rutherford County, NC', href: '/agents/josner-saintil/calls/roy-bumgarner' },
    ],
  },
]

const whatYouDidWell = [
  {
    title: 'Doctor-first enrollment framework — you made the doctor the deciding factor',
    body: "At 10:50 you told Roy you would not move forward with UHC if Dr. Patrick Salmon wasn't in-network. That line — 'if it can't cover Mr. Patrick, then we can't use it' — is the reason Roy signed without hesitation. You weren't pitching a plan; you were solving his exact problem. When you confirmed Salmon in-network at 11:30 and said 'thank God, we actually have some good news,' you eliminated the only real objection before Roy could raise it. That's textbook case-building.",
  },
  {
    title: 'You read the food card loss signal and built the whole case around restoring what Roy lost',
    body: "Roy told you at 8:06: 'They gave me $300 to get groceries with. And it worked. Now I ain't getting nothing.' That's loss aversion in plain English — he's not looking for something new, he's trying to get back what was taken. You picked it up and immediately made the switch about recovery. At 12:25 you framed WellCare's $94/month against UHC's ~$300 and made the case around usability. The consumer who can already picture his grocery card working again doesn't need much else to sign.",
  },
  {
    title: 'Assumptive close after doctor confirmation — no permission-asking, just forward motion',
    body: "At 13:29, the second you confirmed Salmon was in-network, you moved to application without asking permission to proceed: 'What we can do is make sure that we can do the application for you here, okay?' That trailing 'okay?' invited a nod, not a decision. On a consumer who just heard their doctor was covered, that's the moment to move — and you did. Assumptive close after the winning signal is the single highest-leverage close move, and you executed it cleanly.",
  },
]

const whatToWorkOn = [
  {
    num: 1,
    title: "Remove DST from your playbook permanently — Roy's SEP was INT, available any month",
    body: "At 15:53 you said on a recorded line: 'We'll use the recent winter storm that had happened in North Carolina.' DST is not a standalone SEP — it only extends a pre-existing window the beneficiary already missed because of the disaster. Roy has partial Medicaid and is enrolling into a D-SNP. That's INT. INT is available any month, requires no external event, and is fully audit-proof. You don't need a weather event to justify this enrollment. The winter storm language on a recorded line is an audit red flag that can trigger disenrollment review — and it can cost Roy his coverage.",
    script: '"Roy, since you have Medicaid, you actually qualify to switch into this plan any time of year. That\'s a special qualification for people in your situation — we don\'t need any other reason. Let me get you set up today."',
  },
  {
    num: 2,
    title: 'Finish the math — say the annual number and connect it to what the consumer told you',
    body: "At 12:25 you told Roy WellCare was giving him $94 a month and UHC was giving him almost $300. That's Step 1 — the comparison. You stopped there. Step 2 is the annual number: '$206 more per month is $2,472 more per year just in grocery money.' Step 3 is connecting it to Roy's life — at 52:50 he told you utilities are tight. That's your humanization moment: 'When this card covers your groceries, that money stays for utilities instead.' On Roy it didn't matter — he was already sold. On your next skeptic, it will be the line that closes it.",
    script: '"Roy, that\'s $206 more per month — $2,472 more per year just in grocery money. You mentioned utilities are tight. When this card covers your groceries, that money stays in your pocket for utilities instead. That\'s real relief, starting May 1st."',
  },
  {
    num: 3,
    title: "Deploy late-call Client Gold — income stress at 52:50 was a close reinforcement you left on the table",
    body: "At 52:50 Roy told you 'I paid my utilities okay. Social work hard but I pay them.' You had already enrolled him — but that line is a post-close loyalty anchor. When a consumer reveals financial fragility after the signature, you tie the benefit back to it: 'That $300 card is going to make those utilities easier — that's real money back in your pocket every month.' This is the move that prevents next-day buyer's remorse calls. Every piece of Client Gold is either leveraged in the case or deployed as loyalty reinforcement — never collected and dropped.",
    script: '"Roy, you just told me utilities are tight. Here\'s what this plan does — $300 a month on the card means you\'re not choosing between groceries and utilities anymore. That money stays in your pocket. That\'s the whole point of what we just did."',
  },
]

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

export default function JosnerSaintilApr22ReportPage() {
  const totalReviewed = reviewedCalls.reduce((sum, g) => sum + g.calls.length, 0)

  return (
    <PageShell signal="green">
      <div className={styles.page}>

        {/* Breadcrumb */}
        <Link href="/agents/josner-saintil" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>
          ← Back to Josner Saintil
        </Link>

        {/* Header */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Archived Weekly Brief</span>
          </div>
          <h1 className={styles.agentName}>Josner Saintil — April 22, 2026</h1>
          <p className={styles.period}>Weekly Brief · Covering April 20–22, 2026</p>
          <p className={styles.updatedAt}>Delivered April 22, 2026 · {totalReviewed} call reviewed</p>
        </motion.div>

        {/* Trend Snapshot */}
        <motion.div className={styles.trendSnapshot} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(19,17,16,0.08)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>Trend Snapshot</h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Apr 13–17 vs Apr 20–22 · from CRM</span>
          </div>
          <div className={styles.trendTable}>
            <div className={styles.trendHeader}>
              <span>Metric</span>
              <span>Last Week</span>
              <span>This Period</span>
              <span>Movement</span>
            </div>
            {trendRows.map((row) => (
              <div key={row.metric} className={styles.trendRow}>
                <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--ink)' }}>{row.metric}</span>
                <span style={{ fontSize: '0.9375rem', color: 'var(--ink-60)', fontVariantNumeric: 'tabular-nums' }}>{row.lastWeek}</span>
                <span style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--ink)', fontVariantNumeric: 'tabular-nums' }}>{row.thisPeriod}</span>
                <span className={row.dir === 'up' ? styles.trendUp : styles.trendDown}>{row.movement}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '14px', lineHeight: 1.65 }}>
            4 sales in 3 days on 33 billable calls — <strong style={{ color: 'var(--sage-dark)' }}>pace up, conversion up nearly 3 points, CPA cut almost in half</strong>. The trajectory is real. This week is about protecting the compliance foundation underneath those numbers so none of them get reversed.
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> The CRM numbers are moving hard in the right direction — conversion up 2.94 points, CPA down $132, daily pace accelerating. The Roy Bumgarner call shows the sales mechanics behind the numbers. Roy called frustrated about a useless WellCare food card and a doctor who wasn&apos;t getting paid. You ran doctor verification first, confirmed Dr. Patrick Salmon in-network at 11:30, and framed the switch as restoring what Roy already knew worked. At 10:50 you told him you wouldn&apos;t proceed if Salmon wasn&apos;t covered — that line eliminated the objection before he could raise it. Then you went assumptive at 13:29 the second the doctor was confirmed, no permission-asking. That&apos;s a closer&apos;s move.</p>
            <p><strong>What needs to change now:</strong> At 15:53 on Roy&apos;s call, you cited the winter storm as his qualifying SEP basis on a recorded line. That&apos;s DST — and DST is a prohibited standalone SEP citation. Roy doesn&apos;t need a weather event. He has partial Medicaid and he&apos;s enrolling into a D-SNP. That&apos;s INT, available any month, no disaster required, fully audit-proof. The storm language on a recorded line creates disenrollment exposure if the file gets pulled. Roy&apos;s enrollment may stand, but you cannot take that risk call after call. The compliant pathway was sitting right in front of you — use it. The other piece: when Roy revealed income stress at 52:50 — utilities are tight — you let it pass. That was a post-close loyalty anchor, the line that prevents buyer&apos;s remorse the next day. Tie every piece of Client Gold to the benefit before the call ends.</p>
          </div>
        </motion.div>

        {/* The One Thing */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer has Medicaid and is enrolling into a D-SNP, the SEP is INT — available any month, no external event needed. Never cite a disaster, a storm, or a missed AEP on a recorded line. The line is: &ldquo;Since you have Medicaid, you actually qualify to switch into this plan any time of year — that&apos;s a special qualification for people in your situation, we don&apos;t need any other reason.&rdquo; That&apos;s audit-proof, it&apos;s the truth, and it keeps every enrollment defensible.</p>
        </motion.div>

        {/* What You Did Well */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {whatYouDidWell.map((item, i) => (
              <div key={i} style={{ padding: '16px 20px', background: 'rgba(125, 157, 123, 0.06)', borderRadius: '10px', borderLeft: '3px solid var(--sage-dark)' }}>
                <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', marginBottom: '6px' }}>{item.title}</p>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* What to Work On */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What to Work On</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {whatToWorkOn.map((item) => (
              <div key={item.num} style={{ padding: '18px 20px', background: 'rgba(251, 248, 243, 0.82)', borderRadius: '10px', border: '1px solid rgba(19,17,16,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--terracotta)', fontVariantNumeric: 'tabular-nums', minWidth: '1.2em' }}>{item.num}.</span>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)', margin: 0 }}>{item.title}</p>
                </div>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--ink)', margin: '0 0 10px 1.7em' }}>{item.body}</p>
                <div style={{ marginLeft: '1.7em', padding: '10px 14px', background: 'rgba(19,17,16,0.04)', borderRadius: '6px', borderLeft: '2px solid var(--ink-20)' }}>
                  <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)', margin: '0 0 4px' }}>The line</p>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.65, fontStyle: 'italic', color: 'var(--ink)', margin: 0 }}>{item.script}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Calls */}
        <motion.div className={styles.section} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(19,17,16,0.08)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>Reviewed Calls This Period</h2>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginBottom: '16px', fontStyle: 'italic' }}>
            This is the call we pulled for coaching this period. Your CRM total was 4 sales / 51 calls — this was a coaching sample, not an audit of every call.
          </p>
          {reviewedCalls.map((group) => (
            <div key={group.date} style={{ marginBottom: '1.5rem' }}>
              <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-60)', marginBottom: '0.5rem' }}>{group.date}</p>
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
                      <Link href={call.href} style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'var(--ink-20)', textUnderlineOffset: '3px' }}>{call.consumer}</Link>
                    </span>
                    <span className={styles.callMeta}>{call.duration}</span>
                    <span className={styles.callScore} style={{ color: scoreColor(call.score) }}>{call.score}</span>
                    <span className={styles.outcomeCell}>
                      <span className={`${styles.pill} ${outcomeClass(call.outcome)}`}>{call.outcome}</span>
                    </span>
                    <span className={styles.callType}>{call.type}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className={styles.callTableFooter}>
            <span>Reviewed Avg: <strong>75 / 100</strong></span>
            <span>Reviewed Enrolled: <strong>1 of 1</strong></span>
            <span style={{ opacity: 0.7 }}>CRM Total: 4 sales / 51 calls</span>
          </div>
        </motion.div>

        {/* Footer */}
        <div className={styles.footer}>
          <p>The Certainty System · Josner Saintil · Weekly Brief · April 22, 2026 · Archived</p>
        </div>

      </div>
    </PageShell>
  )
}
