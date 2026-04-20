'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief: April 13–17, 2026 ─────────────────────────────────────────

const callsByDate = [
  {
    date: 'Monday, April 13',
    calls: [
      { consumer: 'Carol Hill', duration: '27:22', score: 32, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'The Compliant Non-Closer', href: '/agents/manuel-medrano/calls/carol-hill' },
    ],
  },
  {
    date: 'Wednesday, April 15',
    calls: [
      { consumer: 'Diane Hill', duration: '3:03', score: 22, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'SSN Hesitation — Aborted Call', href: '/agents/manuel-medrano/calls/diane-hill' },
      { consumer: 'Eileen Stewart', duration: '11:27', score: 63, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Transportation-Dependent Consumer', href: '/agents/manuel-medrano/calls/eileen-stewart' },
      { consumer: 'Gail Waters', duration: '53:14', score: 79, outcome: 'ENROLLED', outcomeNote: null, type: 'New Medicare Beneficiary — Dual Eligible', href: '/agents/manuel-medrano/calls/gail-waters' },
    ],
  },
  {
    date: 'Thursday, April 16',
    calls: [
      { consumer: 'Dolores Harris', duration: '26:02', score: 58, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'The Loyal Incumbent', href: '/agents/manuel-medrano/calls/dolores-harris' },
    ],
  },
]

const patterns = [
  {
    title: 'Client Gold heard and not deployed — three times this week',
    rc: 'RC2',
    urgency: 'critical' as const,
    body: 'On Carol Hill, Gail Waters, and Dolores Harris — across three different calls — a consumer gave you something real and the call moved on without acknowledging it. Carol gave you her dog, her fall, and "my last breath." Gail said "kind of" when asked if she skips meals — food insecurity, on a call where the whole product is a $240/month grocery card. Dolores had cancer, heart surgery, multiple specialists. None of it was connected to the benefit. Client Gold is the reason someone says yes instead of maybe.',
    rule: 'When a consumer gives you something personal — stop. Two sentences of acknowledgment. Then tie it to the plan value. That is the close.',
    callRef: 'Gail said "kind of" about skipping meals at 43:47. The OTC food card is $240/month. Those two facts are the entire pitch — and they were never connected.',
    moveLabel: 'Connect the plan to their actual life.',
    move: '"Gail, you just told me you sometimes skip a meal. Starting May 1st, you don\'t. That card loads $240 every single month. That\'s your grocery budget handled. That\'s why I\'m glad we got this set up today."',
  },
  {
    title: 'Math presented but never annualized',
    rc: 'RC3',
    urgency: 'high' as const,
    body: 'On the Gail Waters enrollment, $240/month was stated — but $2,880/year was never said. On the Carol Hill call, $251/month was presented — but $3,012/year was never connected to her life. On Dolores Harris, $4,260/year was annualized at 23:21 — which was actually the strongest math moment of the week. The annual number matters because monthly numbers feel abstract. "Two hundred and forty dollars a month" is a payment. "Almost three thousand dollars a year in groceries" is a transformation.',
    rule: null,
    callRef: 'Gail asked about the card delivery date at 14:19 — she was mentally enrolled. At that point the annual number would have confirmed she made the right decision. It was never stated.',
    moveLabel: 'Take 15 seconds to say the annual number.',
    move: '"That\'s $240 a month — which comes out to $2,880 a year. Almost three thousand dollars in groceries. For someone just starting out on Medicare, that\'s real money."',
  },
  {
    title: 'SSN hesitation handled clinically — not with warmth',
    rc: 'RC1',
    urgency: 'high' as const,
    body: 'On the Diane Hill call, she said "I might give you my social" — soft hesitation, not refusal. The response was a compliance explanation. The call ended at 3:03. This is one of the most common and most winnable objections in Medicare sales. The consumer is not saying no — they\'re saying they need a safer path. The pivot to the Medicare card gives them that path. Validate the fear first, then offer the alternative.',
    rule: null,
    callRef: 'Diane said "I might give you my social" at 2:49. She had already given her name and date of birth without resistance. The trust barrier was specifically about the SSN.',
    moveLabel: 'Validate and pivot immediately.',
    move: '"I completely understand — you\'re being smart. Your Medicare card number is actually the safer option — no financial information on it at all. It\'s the red, white, and blue card that says Medicare Health Insurance on the front. Do you know where it is?"',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 13–17 (partial)', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '32 / 100', active: false },
  { title: 'Weekly Brief — April 13–17', type: 'Weekly Brief', date: 'Apr 20, 2026', score: '51 / 100', active: true },
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

export default function ManuelMedranoPage() {
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
          <h1 className={styles.agentName}>Manuel Medrano</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 20 · 5 calls reviewed</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(51) }}>51</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>5 calls · Mon, Wed, Thu</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>5</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 13–16, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>1</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>2 Missed · 2 Correct No-Sale</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC2</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Client Gold heard — not deployed</span>
          </div>
        </motion.div>

        {/* ── Performance Digest ── */}
        <motion.div className={styles.section} {...SPRING}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid rgba(19,17,16,0.08)' }}>
            <h2 className={styles.sectionTitle} style={{ margin: 0, padding: 0, border: 'none' }}>Performance Digest</h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--ink-60)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Weekly</span>
          </div>
          <div style={{ background: 'rgba(251,248,243,0.82)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.5)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '12px 20px', background: 'rgba(19,17,16,0.04)', borderBottom: '1px solid rgba(19,17,16,0.08)', gap: '12px' }}>
              {(['Metric', 'Apr 6–10', 'Apr 13–17', 'Change'] as string[]).map(h => (
                <span key={h} style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--ink-60)' }}>{h}</span>
              ))}
            </div>
            {([
              { metric: 'Sales',       prior: '3',     current: '14',      delta: '+11',        dir: 'up' },
              { metric: 'Conversion',  prior: '2.83%', current: '12.96%',  delta: '+10.13pp',   dir: 'up' },
              { metric: 'CPA',         prior: '$428',  current: '$101',    delta: '−$327',      dir: 'up' },
              { metric: 'Total Calls', prior: '106',   current: '108',     delta: '+2',         dir: 'neutral' },
            ] as Array<{ metric: string; prior: string; current: string; delta: string; dir: 'up' | 'down' | 'neutral' }>).map((row, i, arr) => (
              <div key={row.metric} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', padding: '14px 20px', gap: '12px', alignItems: 'center', borderBottom: i < arr.length - 1 ? '1px solid rgba(19,17,16,0.08)' : 'none' }}>
                <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--ink)' }}>{row.metric}</span>
                <span style={{ fontSize: '0.9375rem', fontVariantNumeric: 'tabular-nums', color: 'var(--ink-60)' }}>{row.prior}</span>
                <span style={{ fontSize: '0.9375rem', fontWeight: 700, fontVariantNumeric: 'tabular-nums', color: 'var(--ink)' }}>{row.current}</span>
                <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: row.dir === 'up' ? 'var(--sage-dark)' : row.dir === 'down' ? 'var(--terracotta)' : 'var(--ink-60)' }}>{row.delta}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Executive Summary ── */}
        <motion.div className={styles.execSummary} {...SPRING}>
          <div className={styles.execSummaryInner}>
            <p>Five calls this week — one enrollment, two missed opportunities, two correct no-sales. The Gail Waters enrollment was real and clean. The two misses both had consumers who gave you everything you needed to close, and both calls ended without those moments being used.</p>
            <p><strong>What&apos;s working:</strong> your rapport is genuine and it drives results. Gail Waters was a brand-new Medicare beneficiary who had never had a plan before. You confirmed full Medicaid eligibility in under 6 minutes, found the UHC Dual Complete at $240/month, ran the WellCare comparison ($1.99 vs. $240), and closed before she finished asking about card delivery. She was laughing and engaged the entire call. That warmth is not a soft skill — it&apos;s the thing that keeps consumers on the phone long enough to enroll. You also completed the full Health Risk Assessment post-enrollment, which most agents skip. That shows professional discipline.</p>
            <p><strong>What&apos;s costing you:</strong> on the Gail call and on the Carol Hill call, consumers gave you Client Gold that connected directly to the product you were selling — and both moments passed without being used. Gail said she sometimes skips meals. The product is a $240/month grocery card. Those two facts are the entire pitch, and they were never connected. On the Carol Hill call, her dog, her fall, and &ldquo;my last breath&rdquo; were all on the table. Neither call needed a better plan or a better discovery. Both needed one sentence connecting the benefit to the life.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer tells you something real &mdash; that they skip meals, that they fell and their dog didn&apos;t leave them, that they&apos;re dealing with a loss &mdash; stop and connect it to the plan. &ldquo;That&apos;s exactly why I&apos;m glad we got this set up today &mdash; starting May 1st, that card loads $240 every month. You don&apos;t skip meals.&rdquo; That sentence turns a transaction into a reason. It&apos;s the line that closes.</p>
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
                    <span className={styles.consumerName}>
                      <Link href={call.href} style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'var(--ink-20)', textUnderlineOffset: '3px' }}>
                        {call.consumer}
                      </Link>
                    </span>
                    <span className={styles.callMeta}>{call.duration}</span>
                    <span className={styles.callScore} style={{ color: scoreColor(call.score) }}>{call.score}</span>
                    <span className={styles.outcomeCell}>
                      <span className={`${styles.pill} ${outcomeClass(call.outcome)}`}>{call.outcome}</span>
                      {call.outcomeNote && <span className={styles.outcomeNote}>{call.outcomeNote}</span>}
                    </span>
                    <span className={styles.callType}>{call.type}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className={styles.callTableFooter}>
            <span>Week Average: <strong>51 / 100</strong></span>
            <span>Enrolled: <strong>1 of 5</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>The Gail Waters enrollment was a clean, warm close on a new beneficiary who needed guidance.</strong> You confirmed full Medicaid eligibility at 5:30, immediately searched for the highest OTC D-SNP plan, and presented the WellCare vs. UHC comparison — $1.99 versus $240/month — as a clear decision. Gail was laughing by 13:51 when you told her she couldn&apos;t use the card to go to the club. She asked about card delivery at 14:19, before enrollment had even started. That&apos;s the enrolled mindset — and it happened because of your rapport. You also completed the full Health Risk Assessment post-enrollment. Most agents skip it. You didn&apos;t.</p>
            <p><strong>The Eileen Stewart correct no-sale was handled with real professionalism.</strong> Eileen&apos;s transportation benefit was genuine and specific — she recently took a 90-minute Uber to McKinney for a cardiology appointment, and none of the plans you surfaced could confirm that coverage. Your reframe at 10:48 was strong: you named the $1,200 annual cost of staying and asked whether transportation justified it. She said yes, and her reasoning was sound. You accepted the outcome without pressure. A consumer who makes an informed no is not a lost sale — it&apos;s a well-served consumer who may call back when her situation changes.</p>
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
                <p className={styles.priorityDetail}>{p.body}</p>
                {p.rule && <p className={styles.priorityRule}>{p.rule}</p>}
                <p className={styles.priorityCallRef}>{p.callRef}</p>
                <div className={styles.priorityMove}>
                  <span className={styles.priorityMoveLabel}>{p.moveLabel}</span>
                  <p className={styles.priorityMoveText}>{p.move}</p>
                </div>
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
                <p className={styles.workOnTitle}>Connect the benefit to the specific life — every call</p>
                <p className={styles.workOnDetail}>When a consumer tells you something real — skipping meals, a fall, living alone — stop. &ldquo;That&apos;s exactly why I&apos;m glad we got this handled today. Starting May 1st, that $240 loads every month. You don&apos;t skip meals.&rdquo; That sentence costs 10 seconds. It is the difference between a transaction and a close that sticks.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Annualize the OTC on every call where it&apos;s the main benefit</p>
                <p className={styles.workOnDetail}>$240/month = $2,880/year. Say the annual number out loud. For a consumer who just started Medicare and doesn&apos;t fully understand what they&apos;re getting, &ldquo;almost three thousand dollars a year&rdquo; is the number that makes it real. Monthly numbers feel like bills. Annual numbers feel like windfalls. Take 15 seconds.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>SSN hesitation = Medicare card pivot, immediately</p>
                <p className={styles.workOnDetail}>Any hesitation on the SSN gets one response: &ldquo;You don&apos;t need to give me your social at all — your Medicare card number is actually the safer option. It&apos;s just a combination of letters and numbers, no financial information. Red, white, and blue card. Do you know where it is?&rdquo; That sentence is a reflex. Practice it before your next shift.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Reports ── */}
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
          <p>The Certainty System · Manuel Medrano · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC2 · RC3 · Client Gold · OTC Annualization · SSN Objection · D-SNP</p>
        </div>

      </div>
    </PageShell>
  )
}
