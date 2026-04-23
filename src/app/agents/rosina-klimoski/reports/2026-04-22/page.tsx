'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from '../../page.module.css'

// ── Archived Weekly Brief — April 22, 2026 ──────────────────────────────────
// Permanent archive of the Apr 22 brief delivered to Rosina.
// When a new brief ships on the main page, this one stays exactly as-is.
// CRM (source of truth):
//   Apr 13–17 (5 days): 115 all_calls · 87 billable · 7 sales · 6.09% conv · $215.29 CPA
//   Apr 20–22 (3 days):  35 all_calls · 31 billable · 1 sale  · 2.86% conv · $430.00 CPA

const trendRows = [
  { metric: 'Calls',      lastWeek: '115',      thisPeriod: '35',      movement: '↓ Low volume (11.7/day vs 23/day)', dir: 'down' },
  { metric: 'Sales',      lastWeek: '7',        thisPeriod: '1',       movement: '↓ 1 sale in 3 days',                dir: 'down' },
  { metric: 'Conversion', lastWeek: '6.09%',    thisPeriod: '2.86%',   movement: '↓ −3.23pp',                          dir: 'down' },
  { metric: 'CPA',        lastWeek: '$215.29',  thisPeriod: '$430.00', movement: '↑ +$214.71',                         dir: 'down' },
]

const reviewedCalls = [
  {
    date: 'Tuesday, April 21',
    calls: [
      { consumer: 'Anna Lyon', duration: '12:55', score: 59, outcome: 'CORRECT NO-SALE', type: 'Resistant switcher · food bank · VA veteran', href: '/agents/rosina-klimoski/calls/anna-lyon' },
    ],
  },
]

const whatYouDidWell = [
  {
    title: "Kept a resistant caller engaged for 13 minutes",
    body: "Anna Lyon opened the call at 0:14 with 'I understood I did not have to change my benefits' — that's a caller who called for information, not enrollment, and is ready to hang up. Your response at 0:20 ('We're not going to change anything unless you decide that yes') was natural and effective. Most agents lose this type of caller inside the first 60 seconds. You bought 13 minutes of genuine engagement. That's the foundation of every close.",
  },
  {
    title: "Identified the right product for a VA-only veteran",
    body: "You figured out at 5:18 that Anna uses the VA exclusively for prescriptions, which meant the MA-only giveback plan was the correct fit — dropping the MAPD's prescription component would not trigger a Part D penalty because VA counts as credible coverage. You explained this accurately at 11:42 under a direct consumer question about penalties. That's specialized knowledge, correctly deployed, that directly removed a real enrollment barrier.",
  },
  {
    title: "Explored the COPD disclosure for a C-SNP before ruling it out",
    body: "When Anna disclosed COPD at 9:23, you immediately checked for a chronic condition plan in her area. You didn't just note it and move on — you actually looked. When none was available, you ruled it out properly. Most agents would have accepted the COPD disclosure as conversation and moved on. You understood it as a potential SEP qualification pathway. That's the right instinct.",
  },
]

const whatToWorkOn = [
  {
    num: 1,
    title: "File Client Gold the moment it's said — deploy it when you present the plan",
    body: "Anna told you at 2:27 that she was sitting at a food bank on $1,121 a month. You said 'Yeah, I know, I understand' and moved to Medicare card collection. Six minutes later at 8:02, you presented the $110/month giveback with no emotional context. Those two moments — the food bank and the $110 — are the same story. They needed to be in the same sentence. When a consumer gives you their pain this clearly, write it down and bring it back when you present the number.",
    script: "\"Ms. Anna, you mentioned earlier you were at the food bank right now. This plan puts $110 back in your Social Security check every single month — that's more than $1,300 a year. That's groceries. And because you go to the VA, not one doctor changes. This is exactly what this benefit is built for.\"",
  },
  {
    num: 2,
    title: "Go directly at the doctor-change trauma — don't minimize the paperwork",
    body: "At 8:38 Anna restated 'I do not wish to switch' and you accepted it. At 10:35 she told you why: 'the doctor was changed before I could even sneeze.' That's the real objection — it was never about paperwork. Her fear was specific and legitimate, and it had a specific and accurate answer: she only uses the VA, which means there are no civilian doctors to change. That's the reframe that opens the door. You addressed the logistics ('you wouldn't have to do much legwork') but not the emotion. The emotion is where the close lives.",
    script: "\"Ms. Anna, I hear exactly what happened — last time, they changed your doctor without asking. That cannot happen here. You only use the VA. There are no civilian doctors on this plan. Nobody changes anything at the VA. The only thing that changes is $110 more in your pocket every month. Five minutes on the phone with me and it's done.\"",
  },
  {
    num: 3,
    title: "Humanize the math — connect the number to what the consumer already told you",
    body: "At 10:25 you stated '$1,312.20 for the year.' That's the annualized figure — good. The next step is connecting that number to something the consumer told you it would mean to them. Anna told you she's at a food bank on $1,121 a month paying rent. $1,312 is a year of groceries. It's more than one month of rent. That's the sentence that turns a math fact into a motivation. Never let a benefit number stand alone.",
    script: "\"Ms. Anna, think about what that actually means. $1,312 is a year's worth of groceries. You told me you're at the food bank right now — that's the money this plan puts back in your pocket. And your doctors at the VA? They don't change at all.\"",
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

export default function RosinaKlimoskiApr22ReportPage() {
  const totalReviewed = reviewedCalls.reduce((sum, g) => sum + g.calls.length, 0)

  return (
    <PageShell signal="red">
      <div className={styles.page}>

        {/* Breadcrumb */}
        <Link href="/agents/rosina-klimoski" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>
          ← Back to Rosina Klimoski
        </Link>

        {/* Header */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Archived Weekly Brief</span>
          </div>
          <h1 className={styles.agentName}>Rosina Klimoski — April 22, 2026</h1>
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
            Two things happened this period. <strong style={{ color: 'var(--ink)' }}>Volume dropped</strong> — 35 calls in 3 days vs 115 in 5 days last week (11.7/day vs 23/day). And <strong style={{ color: 'var(--ink)' }}>efficiency dropped on top of that</strong> — the one call that did convert came in at 2.86% (half of last week&apos;s 6.09%) and CPA doubled to $430. Fewer shots, and the ones you took closed less. The coaching below is the efficiency half — when a call does land in your queue, these are the moments that decide it.
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p><strong>What&apos;s working:</strong> Your signal identification is real. On the Anna Lyon call you picked up on the VA coverage at 5:18 and immediately recognized it meant she was the right fit for an MA-only giveback plan — no prescription penalty risk. When COPD came up at 9:23, you went looking for a C-SNP pathway before closing the door. And you kept a caller on the line for 13 minutes who opened the call saying she didn&apos;t want to change anything — your opening pivot was natural and professional. That&apos;s the trust foundation every close needs.</p>
            <p><strong>What&apos;s costing you:</strong> Anna Lyon told you at 2:27 she was sitting at a food bank on $1,121 a month. You said &ldquo;yeah, I know&rdquo; and moved to data collection. When you presented the $110/month giveback at 8:02, that food bank moment was the sentence that would have made the number land — and you never came back to it. When she restated &ldquo;I do not wish to switch&rdquo; at 8:38, you accepted it. Her real objection came out at 10:35 — &ldquo;the doctor was changed before I could even sneeze&rdquo; — and the answer was right there: she only uses the VA, so no civilian doctor can ever change. That reframe existed. It just never got said. The $430 CPA comes back down when Client Gold stops being acknowledged and starts being deployed.</p>
          </div>
        </motion.div>

        {/* The One Thing */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer tells you their pain — food bank, fixed income, bad prior switch — write it down. When you get to the benefit, say it back: &ldquo;You told me you&apos;re at the food bank. This is the $110 that pays for groceries.&rdquo; That&apos;s the line that turns a math presentation into an enrollment.</p>
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
            This was the call we pulled for coaching this period. CRM total this period was 1 sale / 35 calls — this was a coaching sample, not an audit of every call.
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
            <span>Reviewed Avg: <strong>59 / 100</strong></span>
            <span>Reviewed Enrolled: <strong>0 of 1</strong></span>
            <span style={{ opacity: 0.7 }}>CRM Total: 1 sale / 35 calls</span>
          </div>
        </motion.div>

        {/* Footer */}
        <div className={styles.footer}>
          <p>The Certainty System · Rosina Klimoski · Weekly Brief · April 22, 2026 · Archived</p>
        </div>

      </div>
    </PageShell>
  )
}
