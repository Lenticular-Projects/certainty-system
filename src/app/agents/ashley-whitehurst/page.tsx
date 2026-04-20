'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief: April 13–17, 2026 ──────────────────────────────────────────

const callsByDate = [
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Ricky DeWitt', duration: '17:50', score: 52, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — close not attempted', type: 'Discovery Complete — Dead Air on Network Search', href: '/agents/ashley-whitehurst/calls/ricky-dewitt' },
      { consumer: 'Unknown Consumer', duration: '15:39', score: 44, outcome: 'INCOMPLETE', outcomeNote: 'Consumer disconnected', type: 'Hold-Kill — No Recovery Protocol', href: '/agents/ashley-whitehurst/calls/unknown-consumer-15m39s' },
    ],
  },
  {
    date: 'Wednesday, April 15',
    calls: [
      { consumer: 'Karen Charles', duration: '59:00', score: 80, outcome: 'ENROLLED', outcomeNote: 'UHC C-SNP — May 1', type: 'D-SNP Dual Eligible — Doctor Loyalty Case', href: '/agents/ashley-whitehurst/calls/karen-charles' },
      { consumer: 'Keon Baldwin', duration: '6:00', score: 50, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Already Enrolled C-SNP — Correct Redirect', href: '/agents/ashley-whitehurst/calls/keon-baldwin' },
      { consumer: 'Unknown Consumer', duration: '2:40', score: 42, outcome: 'INCOMPLETE', outcomeNote: 'SSN friction — card never offered', type: 'SSN Refused — Medicare Card Never Offered', href: '/agents/ashley-whitehurst/calls/unknown-2163944544' },
      { consumer: 'Unknown Consumer', duration: '3:04', score: 22, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Soft Exit Accepted — Lead Was Workable', href: '/agents/ashley-whitehurst/calls/unknown-3374593937' },
      { consumer: 'Unknown Consumer', duration: '3:38', score: 52, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Genuinely Uncloseable — TV Ad Caller', href: '/agents/ashley-whitehurst/calls/unknown-5045144693' },
    ],
  },
  {
    date: 'Thursday, April 16',
    calls: [
      { consumer: 'Peggy Roquemore', duration: '41:01', score: 76, outcome: 'ENROLLED', outcomeNote: 'People\'s Health D-SNP — May 1', type: 'D-SNP Dual Eligible — Near-Dropout Recovered', href: '/agents/ashley-whitehurst/calls/peggy-roquemore' },
    ],
  },
  {
    date: 'Friday, April 17',
    calls: [
      { consumer: 'Betty McAllister', duration: '3:15', score: 18, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Privacy Objector — Medicaid Signal Ignored', href: '/agents/ashley-whitehurst/calls/betty-mcallister' },
    ],
  },
]

const patterns = [
  {
    title: 'You identified the D-SNP opportunity on every qualified caller — but only converted when you deployed Client Gold',
    rc: 'RC2',
    urgency: 'critical' as const,
    body: 'Karen Charles closed because you named the doctor and said "she is in network — you don\'t have to switch." Peggy Roquemore nearly fell off at 28:19 and held because you returned to the comparison data. Betty McAllister said "I have Medicaid" twice and was gone in 3 minutes because you never named the benefit. The pattern across all three: the enrollment lived or died at the moment you either deployed what the consumer told you — or didn\'t. The Karen Charles close was a textbook example. Use that same formula every call.',
    rule: 'When a consumer gives you their core fear or constraint — income, doctor, health condition — you stop and deploy it immediately as the reason they need the plan.',
    callRef: 'Betty McAllister disclosed Medicaid at 0:11 and again at 1:31. The D-SNP value preview — "$200–$400/month food card, zero copays, free rides" — was never said. She declined to share her date of birth and the call ended at 3:15.',
    moveLabel: 'The moment you hear Medicaid — deploy the D-SNP preview.',
    move: '"Betty, because you have Medicaid, you\'re in a special category. There are plans designed for people like you — they include a monthly food card, free rides to your doctor, and zero out-of-pocket costs. Let me see what\'s available in your zip code right now. All I need is your date of birth."',
  },
  {
    title: 'Math stops at Step 1 — annualization and humanization are missing on every call',
    rc: 'RC3',
    urgency: 'high' as const,
    body: 'On the Karen Charles call, you showed $75 vs $133 — that\'s Step 1. You never said "$696 more a year. That\'s the money you\'ve been borrowing from your kids." On the Peggy Roquemore call, you showed $101/month but never said "$1,212 a year for groceries — specifically for someone managing kidney disease." The comparison is the setup. The annualization and the emotional connection are what make it stick. Every benefit you quote needs all three steps before you move on.',
    rule: null,
    callRef: 'On the Karen Charles call at 20:10, Ashley presented $133 vs $75 and moved on. Karen had told her at 8:12 she borrows from her children every month. The $696/year connection to that exact pain was never made.',
    moveLabel: 'After any monthly number — say it annually, then connect it to their life.',
    move: '"Karen, that\'s $58 more every month. Over the year, that\'s almost $700 extra — that\'s the money you\'ve been asking your kids for. This plan puts that back where it belongs, with you."',
  },
  {
    title: 'Client Gold is acknowledged but not deployed',
    rc: 'RC2',
    urgency: 'medium' as const,
    body: 'Karen told you at 16:17 that her doctor had been with her through her husband\'s death. Peggy said at 5:24 "I feel like I\'m going to lose all that." Both moments received a social acknowledgment and a move to the next step. The correct response is to stop and anchor: turn their emotional disclosure into the reason they need to complete the enrollment right now. These are the moments that lock in commitment.',
    rule: null,
    callRef: 'On the Karen Charles call at 16:17 — "She\'s been with me through my husband\'s death." Ashley acknowledged it and moved on. The stronger line: "I\'m going to make absolutely sure this plan keeps Dr. Barnes-Lark. She\'s been through the hard things with you — you deserve that continuity."',
    moveLabel: 'When a consumer reveals something real — stop and anchor it.',
    move: '"Karen, your husband made sure you had good coverage when he was here. Let\'s make sure this plan does the same thing for you — starting May 1st." Then move to enrollment.',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 13–17 (partial)', type: 'Weekly Brief', date: 'Apr 16, 2026', score: '44 / 100', active: false },
  { title: 'Weekly Brief — April 13–17', type: 'Weekly Brief', date: 'Apr 20, 2026', score: '48 / 100', active: true },
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

export default function AshleyWhitehurstPage() {
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
          <h1 className={styles.agentName}>Ashley Whitehurst</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 20 · 9 calls reviewed (Tue–Fri)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(48) }}>48</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Tue–Fri · 9 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>9</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 14–17, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>2</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>2 Correct No-Sale · 2 Incomplete · 2 Missed</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC2</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>Client Gold not deployed — 4 of 9 calls</span>
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
              { metric: 'Sales',       prior: '10',    current: '7',     delta: '−3',        dir: 'down' },
              { metric: 'Conversion',  prior: '6.13%', current: '5.83%', delta: '−0.30pp',   dir: 'down' },
              { metric: 'CPA',         prior: '$205',  current: '$205',  delta: 'no change',  dir: 'neutral' },
              { metric: 'Total Calls', prior: '163',   current: '120',   delta: '−43',        dir: 'neutral' },
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
            <p>Nine calls, two enrollments, a full week. You converted two genuinely complex D-SNP cases — a Medicaid dual with nine medications and a hard doctor loyalty constraint (Karen Charles), and a dual-eligible dialysis patient who nearly backed out mid-compliance (Peggy Roquemore). Both of those required real skill to close. The week also had a 22 and an 18 — calls where the lead was alive and the consumer left without understanding what they qualified for.</p>
            <p><strong>What&apos;s working:</strong> the Karen Charles enrollment was your best call of the batch. At 17:34 you confirmed Dr. LaDonna Barnes-Lark was in-network with UHC and Karen committed on the spot — &ldquo;that&apos;s more important to me than a few extra things.&rdquo; That close happened because you listened to what she told you and filtered the entire plan selection around her non-negotiable. The Peggy Roquemore near-dropout recovery at 28:31 was also real — when she said she wanted to stay with Humana, you didn&apos;t fold. You returned to the comparison and held the enrollment together. And your correct no-sale on Keon Baldwin (already enrolled C-SNP, needed service, not a switch) showed the right situational awareness.</p>
            <p><strong>What&apos;s costing you:</strong> three calls where a consumer disclosed a major signal and you acknowledged it socially and moved on. Karen told you at 8:12 she borrows from her kids every month — that&apos;s the enrollment anchor, not the $133 card. Peggy disclosed dialysis at 22:12 and you noted it but never used it. Betty McAllister said &ldquo;I have Medicaid&rdquo; twice and was gone in three minutes because no D-SNP benefit preview was ever delivered. When a consumer gives you their fear or their pain, stop and deploy it. That&apos;s the moment the call turns.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>You closed Karen Charles because you listened to what she told you and built the entire enrollment around it. Do that same thing the moment any consumer reveals their fear or constraint &mdash; stop, name it, and anchor the plan to it: &ldquo;That&apos;s exactly why we&apos;re doing this. Let me get you started right now.&rdquo; The Karen Charles formula works every time you use it. Use it every call.</p>
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
            <span>Week Average: <strong>48 / 100</strong></span>
            <span>Enrolled: <strong>2 of 9</strong> · Correct No-Sales: <strong>2</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>The Karen Charles enrollment was the best call in the batch.</strong> At 17:34 you confirmed Dr. LaDonna Barnes-Lark was in the UHC network and Karen said &ldquo;that&apos;s more important to me than a few extra things.&rdquo; That close happened because you correctly filtered the plan selection around her one non-negotiable — her doctor — rather than chasing the highest benefit card. You then ran through nine medications, a second doctor, a pharmacy verification, and full Phase VI compliance. That&apos;s a high-complexity D-SNP enrollment done right.</p>
            <p><strong>The Peggy Roquemore recovery at 28:31 was also real.</strong> When she said &ldquo;I want to stay with Humana,&rdquo; you came straight back with the side-by-side comparison and held the enrollment. You also used the Hurricane Ida disaster SEP correctly — asked the qualifying event question, heard her confirm power outage, and applied it properly. That&apos;s textbook SEP execution. And your correct no-sale on Keon Baldwin — already enrolled C-SNP, needed service resolution, not a switch — showed you read the situation fast and didn&apos;t waste time pushing an enrollment that wasn&apos;t appropriate.</p>
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
                <p className={styles.workOnTitle}>When you hear Medicaid — deliver the D-SNP value preview immediately</p>
                <p className={styles.workOnDetail}>&ldquo;Betty, because you have Medicaid, you&apos;re in a special category. There are plans designed for people like you — they include a monthly food card, free rides to your doctor, and zero out-of-pocket costs. All I need is your date of birth to see exactly what&apos;s available.&rdquo; The Betty McAllister call ended in 3 minutes because this sentence was never said. She said Medicaid at 0:11 and again at 1:31. Both times — silence. Start saying it.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Deploy Client Gold — stop and anchor when a consumer reveals something real</p>
                <p className={styles.workOnDetail}>Karen told you at 8:12 she borrows from her kids every month. Peggy said at 5:24 she&apos;s afraid of losing her coverage. Both got &ldquo;I understand&rdquo; and a topic change. The correct move: stop, name their fear, and connect it directly to the plan. &ldquo;Karen, that&apos;s exactly why we&apos;re doing this — $700 more a year so you stop making that call to your kids.&rdquo; That sentence makes the enrollment irreversible. Practice it.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>Always say the annual number — and connect it to what they told you</p>
                <p className={styles.workOnDetail}>$58 more per month is $696 a year. $101 more per month is $1,212 a year. Say the annual number out loud on every call, then connect it to the specific thing the consumer told you they need. The Karen Charles call was an 80 instead of a 90+ because &ldquo;$696 more a year — that&apos;s the money you&apos;ve been borrowing from your kids&rdquo; was never said. That sentence deepens commitment and prevents post-enrollment doubt. Never leave a benefit figure as just a monthly number.</p>
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
          <p>The Certainty System · Ashley Whitehurst · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC2 · RC3 · Client Gold · D-SNP Value Preview · Math Annualization · Karen Charles · Peggy Roquemore</p>
        </div>

      </div>
    </PageShell>
  )
}
