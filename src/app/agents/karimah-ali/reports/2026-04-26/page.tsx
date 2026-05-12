'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from '../../page.module.css'

// ── Archived Weekly Brief — April 26, 2026 ──────────────────────────────────
// Permanent archive of the Apr 26 brief delivered to Karimah.
// When a new brief ships on the main agent page, this one stays as-is.
// CRM (source of truth):
//   Apr 13–17 (5 days): 94 all_calls · 61 billable · 14 sales · 14.89% conv · $83.57 CPA
//   Apr 20–24 (5 days): ~95 all_calls (est.) · 9 sales (7 confirmed + 2 provisional)
//     Apr 20–22 confirmed: 63 all_calls · 37 billable · 7 sales · 11.11% conv · $84.71 CPA
//     Apr 23–24 provisional: +2 sales (Robinson 84/100 + Myzele 78/100)
// Coaching sample: 11 reviewed calls across Apr 20–24

const trendRows = [
  { metric: 'Sales',      lastWeek: '14',       thisPeriod: '9',       movement: '↓ Slight dip in pace',          dir: 'down' },
  { metric: 'Conversion', lastWeek: '14.89%',   thisPeriod: '~9.5%',   movement: '↓ −5.4pp',                      dir: 'down' },
  { metric: 'CPA',        lastWeek: '$83.57',   thisPeriod: '~$110',   movement: '↓ Rising (still efficient)',     dir: 'down' },
]

const reviewedCalls = [
  {
    date: 'Monday, April 20',
    calls: [
      { consumer: 'Marie Jean',     duration: '1:36:26', score: 79, outcome: 'ENROLLED',          type: 'New to Medicare · C-SNP · ICEP · Delray Beach',                   href: '/agents/karimah-ali/calls/marie-jean' },
      { consumer: 'Martha L. Gross', duration: '48:19',  score: 72, outcome: 'ENROLLED',          type: 'D-SNP · INT · Lima, OH — $240/month OTC upgrade',                 href: '/agents/karimah-ali/calls/martha-l-gross' },
      { consumer: 'Jesse Burdette',  duration: '12:08',  score: 48, outcome: 'MISSED OPPORTUNITY', type: 'Handoff call with Robert Pegler · C-SNP · Knoxville, TN',         href: '/agents/karimah-ali/calls/jesse-burdette' },
    ],
  },
  {
    date: 'Tuesday, April 21',
    calls: [
      { consumer: 'Sheila Terry',  duration: '1:22:38', score: 80, outcome: 'ENROLLED', type: 'D-SNP · Grocery benefit restore $71→$230 · Oxford, NC',       href: '/agents/karimah-ali/calls/sheila-terry' },
      { consumer: 'Wilhelm Patt',  duration: '52:00',   score: 75, outcome: 'ENROLLED', type: 'C-SNP · 5 resistance attempts · Miami',                       href: '/agents/karimah-ali/calls/wilhelm-patt' },
    ],
  },
  {
    date: 'Wednesday, April 22',
    calls: [
      { consumer: 'Not Stated',    duration: '2:56',  score: 27, outcome: 'MISSED OPPORTUNITY', type: 'Food card caller · trust breakdown at SSN step',         href: '/agents/karimah-ali/calls/not-stated' },
      { consumer: 'John Torres',   duration: '40:00', score: 54, outcome: 'MISSED OPPORTUNITY', type: 'MOV SEP · Trauma loyalist · Orlando, FL',               href: '/agents/karimah-ali/calls/john-torres' },
      { consumer: 'Lewis Parker',  duration: '4:31',  score: 38, outcome: 'INCOMPLETE',         type: 'Identity theft survivor · SSN refusal · Lima, OH',       href: '/agents/karimah-ali/calls/lewis-parker' },
    ],
  },
  {
    date: 'Thursday, April 23',
    calls: [
      { consumer: 'Ronnie Robinson', duration: '1:17:21', score: 84, outcome: 'ENROLLED', type: 'The Veteran · Humana USAA PPO · $185 Part B giveback + $4,000 dental · Lakeland, FL', href: '/agents/karimah-ali/calls/ronnie-robinson' },
    ],
  },
  {
    date: 'Friday, April 24',
    calls: [
      { consumer: 'Joan Myzele',     duration: '47:49', score: 78, outcome: 'ENROLLED',    type: 'C-SNP · COPD · $195 OTC upgrade · Dunedin, FL',                  href: '/agents/karimah-ali/calls/joan-myzele' },
      { consumer: 'H.G. Sutherland', duration: '7:41',  score: 58, outcome: 'INCOMPLETE',  type: 'Benefit seeker · Diabetes/CSN signal missed · Palm Bay, FL',   href: '/agents/karimah-ali/calls/hg-sutherland' },
    ],
  },
]

const whatYouDidWell = [
  {
    title: "Ronnie Robinson — 77 minutes, a Veteran's trust, and a $6,580 annual swing",
    body: "On Thursday, Robinson came in frustrated and confused — a previous agent had sold him a plan that conflicted with his VA benefits, and he came in saying 'my insurance agent got it all screwed up.' You didn't rush to fix it. You listened, named the problem precisely at 12:23 ('The confusion here is that you get all your medication at the VA, but this plan also covers your medication — it's causing confusion with the VA'), and then said the line that won the call at 30:59: 'Let's clear up the confusion with this for you so you don't have this worrying on your head.' A veteran who had been burned by the insurance industry walked off that call saying 'you just took some pressure off me.' That is the full expression of what this work is supposed to do.",
  },
  {
    title: 'D-SNP and C-SNP identification that produces enrollments',
    body: "Three of your strongest enrollments this week came directly from correct plan-type identification. On Martha Gross (Apr 20), you caught the D-SNP INT window and upgraded her OTC from $100 to $240/month — her son-in-law said 'That's wonderful, you didn't know that.' On Sheila Terry (Apr 21), you identified partial Medicaid, correctly applied the D-SNP SEP, and traced the benefit loss that had been taken from her — '$230 down to $71' — which became the whole enrollment. On Joan Myzele (Apr 24), you identified COPD as the C-SNP qualifier, presented both the Part B give-back and the OTC card as distinct options, and let Joan choose. She picked $195 instantly: 'I'd rather receive the $195 on the card where I can use it for grocery.' You put the right options on the table and got out of the way.",
  },
  {
    title: 'Same-carrier continuity — the anxiety you removed every time',
    body: "Three separate consumers this week asked some version of 'am I going to lose my current plan/carrier?' On Joan: 'No, it's still going to be Care Plus — there are more than one Care Breeze plan.' That is the sentence that removed the biggest objection on that call. On Martha: 'It's not going to be a big change to what you currently have, but it is going to be a bit of an upgrade.' On Sheila: holding the frame against the Humana preference by going straight to the data — the UHC plan had the $230, Humana didn't. Clean, confident, factual. Every time.",
  },
]

const whatToWorkOn = [
  {
    num: 1,
    title: 'Annualize every dollar — no exceptions',
    body: "This appeared on five calls this week. On Ronnie Robinson, you presented the $185 Part B giveback but never said $2,220/year. On Joan Myzele, you presented $195/month but never said $2,340/year. On Martha Gross, you presented $240/month but never said $2,880/year. On Sheila Terry, the $159/month grocery restore was in the call — $1,908/year was never spoken. Every time you name a benefit, the next sentence is the annual math. That's the rule.",
    script: '"Ms. Myzele, that\'s $195 every month — which is $2,340 more in your pocket every year. You went from $35 to $195. That\'s almost $2,000 more a year just from this one change."',
  },
  {
    num: 2,
    title: 'When a consumer has trauma history — lead with continuity, not benefits',
    body: "The John Torres call is the one to study. Torres revealed at 8 minutes that an 18-wheeler hit him at 18 — paralyzed neck-down, 29 months hospitalized, 48% burns. Everything after that was that history talking. The reframe this call needed: 'John, after everything you've been through, I completely understand why you protect what's working. What if the only thing that changes here is the number on your card? Your doctors stay exactly the same. Your pharmacy stays exactly the same.' That's reassurance, not a benefits pitch. It's the only thing that could have moved him.",
    script: '"John, I hear you — and after everything you\'ve been through, that makes complete sense. What if I told you the only thing that changes is this number? Your doctors stay exactly the same. Your pharmacy stays exactly the same. Your coverage stays exactly the same. The only difference is more money. Can I show you that for two minutes?"',
  },
  {
    num: 3,
    title: "When a consumer discloses chronic conditions — it's an enrollment key",
    body: "H.G. Sutherland confirmed diabetes at 5:49 on Friday. You acknowledged it medically and moved on. You missed: 'Mr. Sutherland, diabetes — that's actually really important for what I'm going to show you. There are plans specifically designed for people managing diabetes. They often come with better benefits. Let me see if one of those is available in your area.' Diabetes is not a health detail. It is a year-round C-SNP enrollment window.",
    script: '"Mr. Sutherland, you mentioned diabetes — that\'s actually really important. There are plans specifically designed for people with diabetes that sometimes offer a higher food card and additional benefits. Let me check if one of those is available in your zip code. That\'s going to be a key part of what I have ready at 4 o\'clock."',
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

export default function KarimahAliApr26ReportPage() {
  const totalReviewed = reviewedCalls.reduce((sum, g) => sum + g.calls.length, 0)

  return (
    <PageShell signal="green">
      <div className={styles.page}>

        {/* Breadcrumb */}
        <Link href="/agents/karimah-ali" style={{ fontSize: '0.8125rem', color: 'var(--ink-60)', textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>
          ← Back to Karimah Ali
        </Link>

        {/* Header */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Archived Weekly Brief</span>
          </div>
          <h1 className={styles.agentName}>Karimah Ali — April 26, 2026</h1>
          <p className={styles.period}>Weekly Brief · Covering April 20–24, 2026</p>
          <p className={styles.updatedAt}>Delivered April 26, 2026 · {totalReviewed} calls reviewed</p>
        </motion.div>

        {/* Trend Snapshot */}
        <motion.div className={styles.trendSnapshot} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(19,17,16,0.08)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>Trend Snapshot</h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Apr 13–17 vs Apr 20–24 · from CRM</span>
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
            9 sales across a full week — pace dipped from last week&apos;s 2.8/day to roughly 1.8/day, with CPA rising to approximately $110. Conversion moved from 14.89% to ~9.5%, a 5.4pp drop. The enrolled calls were high-quality — Robinson (84), Terry (80), Myzele (78), Jean (79), Patt (75) — but three winnable calls didn&apos;t convert. Tightening the trust frame, the empathy-pivot, and the chronic-condition-to-plan connection is the path back toward 14–15% conversion territory.
          </p>
        </motion.div>

        {/* Executive Summary */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <h2 className={styles.sectionTitle}>Executive Summary</h2>
          <div className={styles.execSummaryInner}>
            <p><strong>What drove 6 enrollments in 5 days:</strong> You read plan pathways faster than most agents recognize them. D-SNP, C-SNP, MOV SEP, INT SEP — you&apos;re identifying the right door on call after call. Martha Gross got $140/month more in OTC because you called back with her medication list. Sheila Terry got her $230 grocery benefit restored because you found the benefit loss in the system before she told you about it. Joan Myzele chose her own plan when you put two options on the table and let her decide. And Ronnie Robinson — a veteran who opened the call furious at the insurance industry — ended it saying &ldquo;you just took some pressure off me.&rdquo; The 84/100 score on that call is the high mark of this week and it came from staying calm, naming his confusion, and making the plan work with his VA benefits instead of against them.</p>
            <p><strong>Where the conversion dip came from:</strong> Three calls this week produced no enrollment when they could have. Lewis Parker hung up at 4:31 because the Medicare ID vs. SSN distinction wasn&apos;t established before his identity-theft history triggered. John Torres spent 40 minutes engaged and went into a callback because the primary objection — &ldquo;I&apos;m not going to change&rdquo; — was not reframed. H.G. Sutherland&apos;s diabetes disclosure at 5:49 opened a year-round C-SNP enrollment window that went unexplored. The annualization gap also ran across five calls this week — monthly numbers were stated and annual numbers were never spoken. That one change alone is worth several thousand dollars a year in closes.</p>
          </div>
        </motion.div>

        {/* The One Thing */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Every time you name a monthly benefit, the next sentence is the annual math — no exceptions. &ldquo;That&apos;s $195 every month — which is $2,340 more in your pocket this year.&rdquo; You have the number on every call. The step missing is saying it out loud.</p>
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
            These are the calls pulled for coaching this period. CRM total was approximately 9 sales / ~95 calls (est.) — this was a coaching sample, not an audit of every call.
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
            <span>Reviewed Avg: <strong>63 / 100</strong></span>
            <span>Reviewed Enrolled: <strong>6 of 11</strong></span>
            <span style={{ opacity: 0.7 }}>CRM Total: 9 sales / ~95 calls (est.)</span>
          </div>
        </motion.div>

        {/* Footer */}
        <div className={styles.footer}>
          <p>The Certainty System · Karimah Ali · Weekly Brief · April 26, 2026 · Archived</p>
        </div>

      </div>
    </PageShell>
  )
}
