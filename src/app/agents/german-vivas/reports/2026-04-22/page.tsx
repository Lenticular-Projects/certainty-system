'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from '../../page.module.css'

// ── Archived Weekly Brief — April 22, 2026 ──────────────────────────────────
// This page is a permanent archive of the Apr 22 brief delivered to German.
// When a new brief ships on the main agent page, this one stays exactly as-is.
// CRM (source of truth):
//   Apr 13–17: not in CRM view — German was new to roster this period
//   Apr 20–22 (3 days): 69 all_calls · 57 billable · 4 sales · 5.80% conv · $194.50 CPA

const trendRows: { metric: string; lastWeek: string; thisPeriod: string; movement: string; dir: 'up' | 'down' | 'neutral' }[] = [
  { metric: 'Sales',      lastWeek: '—', thisPeriod: '4',       movement: 'First tracked period', dir: 'neutral' },
  { metric: 'Conversion', lastWeek: '—', thisPeriod: '5.80%',   movement: 'First tracked period', dir: 'neutral' },
  { metric: 'CPA',        lastWeek: '—', thisPeriod: '$194.50', movement: 'Baseline to beat',     dir: 'neutral' },
]

const reviewedCalls = [
  {
    date: 'Monday, April 20',
    calls: [
      { consumer: 'Hobart Lovingood', duration: '48:21', score: 76, outcome: 'ENROLLED', type: 'D-SNP Dual Eligible · QMB · Tampa FL', href: '/agents/german-vivas/calls/hobart-lovingood' },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      { consumer: 'Rogelio Perez', duration: '44:42', score: 84, outcome: 'ENROLLED', type: 'IEP New Enrollee · Aetna PPO · Weslaco TX', href: '/agents/german-vivas/calls/rogelio-perez' },
    ],
  },
]

const whatYouDidWell = [
  {
    title: 'Dual-eligible identification when the consumer said he had no Medicaid',
    body: "On Hobart Lovingood, the consumer told you he had no Medicaid — but your system said otherwise. At 7:02 you surfaced it: \"You do have Medicaid as well.\" You explained QMB clearly and positively in under 30 seconds, and immediately matched it to the Devoted Dual Plus D-SNP. That pivot — from Original Medicare to a D-SNP — is the most technically demanding skill in the Medicare Advantage toolkit. You didn't hesitate, and that's what unlocked the food card enrollment.",
  },
  {
    title: 'Out-of-network doctor recovery without losing the call',
    body: "At 18:56 on the Hobart call, Dr. Adam Berry came back out of network. You didn't apologize or stall — you told Hobart there was a replacement, found Dr. Sam Diesty on Swan Avenue, confirmed the consumer recognized the area ('I know exactly what I sent'), and texted the full contact details before moving on. Agents lose calls at this exact moment all the time. You absorbed it and kept moving.",
  },
  {
    title: 'IEP urgency framing that protected Rogelio — and closed the call',
    body: "Rogelio Perez was brand new to Medicare and had no idea what the late enrollment penalty was. At 6:00 you told him directly: 'If you didn't call in by next month, you would end up getting penalized for every month you don't have one.' You framed yourself as the person protecting him from that outcome. That framing is why Rogelio said 'Wow, $0, thank you' at 15:14 and why he left calling you the agent for the life of his policy. 4 sales on Spanish-language calls this period — that IEP move is part of why.",
  },
]

const whatToWorkOn = [
  {
    num: 1,
    title: 'State the annual total — not just the monthly number',
    body: "On both calls this period, you presented benefits as individual figures and stopped there. Hobart's plan puts $6,256 per year in value in his hands on a $0 premium — you never said that. Rogelio's plan saves $360 on medications plus $2,000 dental plus $300 vision — you never said that either. Hobart told you at 46:12 that Social Security doesn't cover rent, food, and basic needs. Rogelio told you at 36:51 that he lost all his money since December. You had the exact number to anchor against those fears on both calls. That line — said once, clearly — makes the enrollment irreversible in the consumer's mind.",
    script: '"Mr. Lovingood, let me put this in perspective — that food card is $263 a month, that\'s $3,156 a year. Add the $2,500 dental, $400 eyewear, and $200 OTC, we\'re talking over $6,200 a year in benefits on a zero-dollar premium. On a fixed Social Security income, that\'s a meaningful number."',
  },
  {
    num: 2,
    title: 'Connect transportation to the no-car disclosure — immediately',
    body: "On Rogelio at 7:14, he said 'No, I don't have a car.' You acknowledged it and moved to dental. The transportation benefit on this plan is the most emotionally resonant supplemental benefit for someone without a vehicle — it solves a real daily problem they deal with every time they need a doctor visit. You connected transportation well on the Hobart call (unlimited rides, 11:23). On Rogelio, it never landed. The moment someone says no car, that benefit is your next sentence.",
    script: '"That\'s actually one of the most important benefits on this plan for you — it includes covered transportation to your doctor appointments at zero cost. No car needed. That\'s your rides handled."',
  },
  {
    num: 3,
    title: 'Replace permission-seeking with assumptive transitions',
    body: "On the Hobart call you asked 'Is that okay?' and 'Is that alright?' at 19:12, 19:29, and 22:04. These phrases slow the call down and invite the consumer to pump the brakes at exactly the wrong moment — you were already in Phase VI, and Hobart had already said yes. You don't need permission to proceed when someone has committed. Replace each 'Is that okay?' with a statement that continues forward and keeps control.",
    script: '"So we\'ll get you set up with Dr. Diesty — he\'s right there on Swan Avenue." Then move. No question. You control the pace.',
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

export default function GermanVivasApr22ReportPage() {
  const totalReviewed = reviewedCalls.reduce((sum, g) => sum + g.calls.length, 0)

  return (
    <PageShell signal="yellow">
      <div className={styles.page}>

        {/* Breadcrumb */}
        <Link href="/agents/german-vivas" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>
          ← Back to German Vivas
        </Link>

        {/* Header */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Archived Weekly Brief</span>
          </div>
          <h1 className={styles.agentName}>German Vivas — April 22, 2026</h1>
          <p className={styles.period}>Weekly Brief · Covering April 20–22, 2026</p>
          <p className={styles.updatedAt}>Delivered April 22, 2026 · {totalReviewed} calls reviewed</p>
        </motion.div>

        {/* Trend Snapshot */}
        <motion.div className={styles.trendSnapshot} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(19,17,16,0.08)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>Trend Snapshot</h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Apr 20–22 · from CRM · first tracked period</span>
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
                <span className={row.dir === 'up' ? styles.trendUp : row.dir === 'down' ? styles.trendDown : styles.trendNeutral}>{row.movement}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', marginTop: '14px', lineHeight: 1.65 }}>
            New to the roster this period — no prior week to compare against. 4 sales in 3 days on Spanish-language calls sets your first baseline. Both reviewed calls this period were enrollments. The coaching below is about closing the gap between good and dominant — sharpening the math framework is how CPA comes down and conversion comes up.
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> You&apos;re closing on Spanish-language calls and you&apos;re doing it with real skill. The dual-eligible identification on Hobart Lovingood — surfacing Medicaid when the consumer denied having it, explaining QMB in plain terms, and immediately matching to the Devoted Dual Plus D-SNP — is an advanced move and you executed it without hesitation. When Dr. Adam Berry came back out of network at 18:56, you found Dr. Diesty, confirmed the consumer recognized Swan Avenue, texted the details, and kept the enrollment moving. On Rogelio Perez, you recognized the IEP window immediately, framed the penalty risk as consumer protection, and the $0 drug cost reveal at 15:02 landed exactly how it should — &ldquo;Wow, $0, thank you&rdquo; is what a committed consumer sounds like. Both calls closed clean.</p>
            <p><strong>What to sharpen:</strong> The math framework is the consistent gap. On both calls you presented individual benefit figures and stopped — monthly numbers only, no annualization, no connection to the financial fears the consumers told you about. Hobart disclosed at 46:12 that Social Security doesn&apos;t cover rent and food. Rogelio disclosed at 36:51 that he lost all his money since December. The annual totals — $6,200+ for Hobart, $2,660+ for Rogelio — were sitting right there and neither consumer ever heard them. A consumer who understands exactly how much money this plan puts back in their pocket is a loyal member who doesn&apos;t get poached. Practice stating the annual total on every call.</p>
          </div>
        </motion.div>

        {/* The One Thing */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>After every benefit reveal, say the annual number. &ldquo;$263 a month — that&apos;s $3,156 a year.&rdquo; Every call, every time. The monthly number gets a nod. The annual number is what makes a consumer feel certain they made the right decision.</p>
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
            These are the calls we pulled for coaching this period. Your CRM total was 4 sales / 69 calls — this was a coaching sample, not an audit of every call.
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
            <span>Reviewed Avg: <strong>80 / 100</strong></span>
            <span>Reviewed Enrolled: <strong>2 of 2</strong></span>
            <span style={{ opacity: 0.7 }}>CRM Total: 4 sales / 69 calls</span>
          </div>
        </motion.div>

        {/* Footer */}
        <div className={styles.footer}>
          <p>The Certainty System · German Vivas · Weekly Brief · April 22, 2026 · Archived</p>
        </div>

      </div>
    </PageShell>
  )
}
