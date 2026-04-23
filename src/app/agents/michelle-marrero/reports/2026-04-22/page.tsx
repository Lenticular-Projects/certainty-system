'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from '../../page.module.css'

// ── Archived Weekly Brief — April 22, 2026 ──────────────────────────────────
// This page is a permanent archive of the Apr 22 brief delivered to Michelle.
// When a new brief ships on the main agent page, this one stays exactly as-is.
// CRM (source of truth):
//   Apr 13–17 (5 days): 124 all_calls · 77 billable · 7 sales ·  5.65% conv · $214.29 CPA
//   Apr 20–22 (3 days):  73 all_calls · 53 billable · 9 sales · 12.33% conv · $102.67 CPA

const trendRows = [
  { metric: 'Sales',      lastWeek: '7',       thisPeriod: '9',       movement: '↑ +2 in fewer days', dir: 'up' },
  { metric: 'Conversion', lastWeek: '5.65%',   thisPeriod: '12.33%',  movement: '↑ +6.68pp',          dir: 'up' },
  { metric: 'CPA',        lastWeek: '$214.29', thisPeriod: '$102.67', movement: '↓ −$111.62',         dir: 'up' },
]

const reviewedCalls = [
  {
    date: 'Monday, April 20',
    calls: [
      { consumer: 'Robert Cook', duration: '43:50', score: 84, outcome: 'MISSED OPPORTUNITY', type: 'C-SNP pivot · third-party + time stop', href: '/agents/michelle-marrero/calls/robert-cook' },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      { consumer: 'Brian Graese', duration: '21:44', score: 62, outcome: 'CORRECT NO-SALE', type: 'Doctor network conflict · PCP out-of-network', href: '/agents/michelle-marrero/calls/brian-graese' },
      { consumer: 'Karen Colm',   duration: '10:11', score: 61, outcome: 'CORRECT NO-SALE', type: 'Active chemo · new enrollee · no-change call', href: '/agents/michelle-marrero/calls/karen-colm' },
    ],
  },
]

const whatYouDidWell = [
  {
    title: 'Diagnostic C-SNP pivot on Robert Cook',
    body: "Robert called asking about a $44 give-back and opened as a Scared Switcher who did not want to change his Humana plan. You heard \"chest pains\" at 6:40, stayed with it through an unclear hospitalization story, and confirmed cardiomyopathy at 11:58. That single diagnosis pivot turned a routine benefit inquiry into a $3,493-a-year upgrade conversation. When Robert stalled at 34:26 and said he wanted to call Humana himself, you pulled up their plan inventory on the spot and confirmed they have no chronic plans in his county — you answered his question before he could leave to find the answer himself. That's the move that keeps the call alive.",
  },
  {
    title: 'Ethical no-sale calls on two genuinely uncloseable callers',
    body: "Brian Graese had a three-year PCP relationship that the upgrade plan didn't cover — you accepted his refusal without pressure and closed using his own words (\"I don't want to mess up anything with your benefits\"). Karen Colm was one day into her first chemotherapy treatment with transitional dual coverage still active — you advised her to hold course and left her your number for when it mattered. Both calls were correct. Agents who can distinguish \"not today\" from \"never\" protect the business and build a referral base.",
  },
  {
    title: 'CRM trajectory this period — strongest stretch of your month',
    body: 'Nine sales in three days against seven in a full five-day week. Conversion more than doubled from 5.65% to 12.33%. CPA dropped $111.62. That is not a drift — that is a different agent showing up. The coaching sample caught one compliance line that needs correcting, but the production story is an agent who is closing harder and qualifying faster than she was last week.',
  },
]

const whatToWorkOn = [
  {
    num: 1,
    title: '"I\'m Medicare" — fix this before your next call',
    body: 'On Karen Colm at 0:52, you said "I\'m Medicare, we require that you know that I work for Medicare." That statement directly contradicts the TPMO disclaimer you delivered 15 seconds earlier — which correctly states you do NOT represent all plans and the consumer should contact Medicare.gov for all options. You are a licensed Medicare insurance agent working with private Medicare Advantage carriers. Medicare is a federal government program. Saying "I\'m Medicare" implies you represent the federal program. This is the line CMS auditors flag. It needs to be locked in and corrected before the next call.',
    script: '"I\'m a licensed Medicare insurance agent" or "I\'m not directly connected to the federal Medicare program — I\'m a licensed broker who represents multiple carriers in your area."',
  },
  {
    num: 2,
    title: 'Complete the Math Breakdown — give them the annual number before you end the call',
    body: 'Robert Cook sold himself on the plan at 41:54 — "on a yearly basis it would be a couple thousand dollars or so." That math came from him, not you. The number is $3,493 in total annual value and it needed to come from your mouth before the callback. On Brian Graese, seven benefits were listed but never summed — $40 food card + $39 Part B giveback + $300 vision alone is nearly $1,000 a year. Benefits listed as a sequence feel like a brochure. Benefits summed into one annual number feel like money.',
    script: '"Let me add this up for you. The food card is [X] a month — that\'s [annualized] a year. Add [benefit 2] and [benefit 3] and you\'re looking at [total] in your pocket this year. That\'s the number I want you to walk away with."',
  },
  {
    num: 3,
    title: 'Check for C-SNP before making any no-sale call on a cancer patient',
    body: 'Karen Colm disclosed kidney cancer and active chemotherapy at 5:06 — a CSN SEP trigger. A C-SNP in ZIP 45034 could have offered better oncology care coordination and lower chemo copays than her current give-back plan. You made the no-sale without checking. The correct sequence: hear a chronic condition diagnosis → run the C-SNP check → then decide. If no C-SNP exists in the county, the no-sale stands and you\'ve done your job fully. If one exists, that enrollment is the most beneficial thing you can do for her.',
    script: '"Because you have an active cancer diagnosis, there\'s a specific type of Medicare plan built for people going through treatment. Let me take two minutes to check if one is available in your area before we leave you on your current plan."',
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

export default function MichelleMarreroApr22ReportPage() {
  const totalReviewed = reviewedCalls.reduce((sum, g) => sum + g.calls.length, 0)

  return (
    <PageShell signal="yellow">
      <div className={styles.page}>

        {/* Breadcrumb */}
        <Link href="/agents/michelle-marrero" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>
          ← Back to Michelle Marrero
        </Link>

        {/* Header */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Archived Weekly Brief</span>
          </div>
          <h1 className={styles.agentName}>Michelle Marrero — April 22, 2026</h1>
          <p className={styles.period}>Weekly Brief · Covering April 20–22, 2026</p>
          <p className={styles.updatedAt}>Delivered April 22, 2026 · {totalReviewed} calls reviewed</p>
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
            9 sales in 3 days — more than last week&apos;s 7 in less time. Conversion more than doubled to 12.33%. CPA dropped $111.62. This is the strongest stretch of your month. The coaching sample caught a compliance line that needs correcting before tomorrow&apos;s shift — but the production story is an agent who is closing harder and qualifying faster than she was a week ago.
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> Your diagnostic instinct. On Robert Cook, you heard &ldquo;chest pains,&rdquo; stayed with it through a meandering hospitalization story, and confirmed cardiomyopathy at 11:58 — then pivoted the entire call to a C-SNP with $3,493 in annual value. Robert opened as a Scared Switcher who didn&apos;t want to change his Humana plan. By 41:54 he was telling you the plan sounded great and doing the annualized math himself. Your objection handling on that call — answering Robert&apos;s Humana question before he could go find the answer himself — is the move that keeps calls alive. Your two correct no-sales (Brian&apos;s doctor network conflict, Karen&apos;s active chemo) show judgment that doesn&apos;t come from scripts. You can read a situation, make a call, and close it with grace.</p>
            <p><strong>What&apos;s costing you:</strong> One compliance line that needs to be corrected before tomorrow. On Karen Colm at 0:52, you said &ldquo;I&apos;m Medicare.&rdquo; You are not Medicare. You are a licensed Medicare insurance agent working with private carriers. Medicare is a federal government program. The TPMO disclaimer you delivered 15 seconds earlier is designed to establish exactly that distinction — and &ldquo;I&apos;m Medicare&rdquo; undoes it in three words. CMS auditors flag this. The correct language is in this brief. This is the one thing to lock in tonight.</p>
          </div>
        </motion.div>

        {/* The One Thing */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>You are not Medicare. You are a licensed Medicare insurance agent. Those are not the same thing — and every call starts with making that clear. &ldquo;I&apos;m a licensed Medicare insurance agent&rdquo; is the line. Say it until it&apos;s automatic.</p>
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
            These are the calls we pulled for coaching this period. Your CRM total was 9 sales / 73 calls — this was a coaching sample, not an audit of every call.
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
            <span>Reviewed Avg: <strong>69 / 100</strong></span>
            <span>Reviewed Enrolled: <strong>0 of 3</strong></span>
            <span style={{ opacity: 0.7 }}>CRM Total: 9 sales / 73 calls</span>
          </div>
        </motion.div>

        {/* Footer */}
        <div className={styles.footer}>
          <p>The Certainty System · Michelle Marrero · Weekly Brief · April 22, 2026 · Archived</p>
        </div>

      </div>
    </PageShell>
  )
}
