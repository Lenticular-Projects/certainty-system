'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief: April 13–17, 2026 ─────────────────────────────────────────

const callsByDate = [
  {
    date: 'Wednesday, April 15',
    calls: [
      {
        consumer: 'Ms. McCloud',
        duration: '44:01',
        score: 79,
        outcome: 'ENROLLED',
        outcomeNote: 'Devoted C-SNP Choice Premium — cardiac consumer, warm transfer',
        type: 'C-SNP via Warm Transfer — Cardiac + Extra Help',
        href: '/agents/jeri-vivas/calls/ms-mccloud',
      },
    ],
  },
]

const patterns = [
  {
    title: 'Loyalty objection accepted without one reframe attempt',
    rc: 'RC1',
    urgency: 'critical' as const,
    summary: 'When a consumer says they\'ve been with UnitedHealthcare for years — especially after a health event — that\'s an emotional anchor, not a hard no. Ronnie Phillips told you at 14:27, 16:17, and 18:55 that he was loyal to UHC after his stroke. Each time you accepted it instead of going back to the money. His doctors were confirmable, his gap was $94/month ($1,128/year), and you had the math. Loyalty survives when the agent confirms nothing changes except the benefit amount. It needs one question answered first: "Are your doctors in network?"',
    fix: '"Ronnie, I hear you — UnitedHealthcare was there for you after your stroke and that matters. Let me pull up Devoted\'s network right now and confirm your doctors are in. If they\'re in, nothing changes about your care. The only difference is $177 a month instead of $271. Your doctors stay. Your coverage stays. You just get $1,128 a year back. Can I check that right now?"',
  },
  {
    title: 'Carrier appointment not confirmed before 18 minutes of discovery',
    rc: 'RC1',
    urgency: 'high' as const,
    summary: 'Ava Vaughn said "Humana Go" at 0:33. Eighteen minutes of discovery, rapport, and goodwill later you found out you couldn\'t complete the enrollment. The appointment check is a 5-second internal question — "Do I hold a Humana appointment?" — that protects everything built after it. A warm transfer takes 30 seconds and preserves the relationship.',
    fix: '"Ms. Vaughn, I want to make sure I\'m the right agent to help you with that Humana plan — let me transfer you to my colleague who handles Humana directly. She already knows your situation and she\'ll take great care of you. One moment."',
  },
  {
    title: 'Math presented but never connected to the consumer\'s situation',
    rc: 'RC3',
    urgency: 'high' as const,
    summary: 'You present numbers correctly. The gap is step three: connecting the annual figure to something the consumer said. Janice Brantley called about money for utilities and Uber. The $400/month food card is $4,800/year. That sentence was never said. Ronnie had a $94/month gap — $1,128/year — that you stated and never anchored. The annual number lands when it connects to their life, not when it stands alone.',
    fix: '"Janice, that\'s $400 every single month — $4,800 a year going back into your pocket. You said you use Uber and you said utilities are tight. That\'s what this card is for. That money is yours starting April 1st."',
  },
  {
    title: 'SEP windows confirmed but not deployed as urgency',
    rc: 'RC6',
    urgency: 'medium' as const,
    summary: 'Ronnie Phillips confirmed both a recent move and active Medicaid — MOV SEP and INT SEP, either of which creates same-day enrollment eligibility. You told him to wait until October. With an active SEP window, October is not the answer. The SEP is the answer to the AEP objection — it removes the wait entirely.',
    fix: '"Ronnie, before we talk about October — you mentioned you moved a few months ago. When exactly was that? Because if it was in the last two months, you have a special enrollment window open right now. We don\'t need October. We can do this today."',
  },
]

const pastReports = [
  {
    active: true,
    type: 'Weekly Brief',
    title: 'Weekly Brief — April 13–17, 2026',
    score: '79 / 100',
    date: 'Apr 16, 2026',
  },
  {
    active: false,
    type: 'Weekly Brief',
    title: 'Weekly Brief — March 30–April 3, 2026',
    score: '54.1 / 100',
    date: 'Apr 4, 2026',
  },
]

// ── Helpers ──────────────────────────────────────────────────────────────────

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

export default function JeriVivasPage() {
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
          <h1 className={styles.agentName}>Jeri Vivas</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 16 · 1 call reviewed (Wed)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(79) }}>79</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>1 call · Apr 15</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>1</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)' }}>1</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>Ms. McCloud · Devoted C-SNP</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>RC1</span>
            <span className={styles.scoreLabel}>Recurring Pattern</span>
            <span className={styles.scoreRange}>Soft exit accepted — no reframe</span>
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
              { metric: 'Sales',       prior: '9',     current: '4',      delta: '−5',        dir: 'down' },
              { metric: 'Conversion',  prior: '7.76%', current: '4.65%',  delta: '−3.11pp',   dir: 'down' },
              { metric: 'CPA',         prior: '$193',  current: '$322',   delta: '+$129',      dir: 'down' },
              { metric: 'Total Calls', prior: '116',   current: '86',     delta: '−30',        dir: 'neutral' },
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
            <p>One call this week and it was a clean enrollment. Ms. McCloud came in as a warm transfer from Ratika — a cardiac consumer with CHF, AFib, stents, and a pacemaker who needed a C-SNP. Jeri handled the full chronic condition questionnaire, managed an overwhelmed elderly consumer with patience and warmth, explained Extra Help correctly, and completed the enrollment. That&apos;s what a strong call looks like when Jeri stays in the work.</p>
            <p>The coaching this week draws from the full recent picture — particularly the March 30–April 3 batch — because the pattern that surfaces across eight calls is more instructive than one strong call. When Jeri engages, she closes. The calls she&apos;s losing are not hard calls: they&apos;re calls where the consumer showed loyalty or hesitation, got one acknowledgment, and was allowed to exit. The loyalty reframe is the one move that changes those outcomes most directly.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>
            When a consumer says they&apos;re loyal to a carrier, the answer is not to honor the loyalty —
            it&apos;s to confirm their doctors are in network. &ldquo;Let me pull up Devoted&apos;s provider
            directory right now and confirm your doctor is in. If he is, nothing changes about your care.
            The only difference is your benefit amount goes up.&rdquo; That one question converts
            loyalty from a wall into a door.
          </p>
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
            <span>Week Average: <strong>79 / 100</strong></span>
            <span>Enrolled: <strong>1 of 1</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>The strongest moment of the week was at 6:39 on the McCloud call. Ms. McCloud was overwhelmed — elderly, cardiac, multiple comorbidities, fragile on the phone — and when she got flustered, you said: &quot;I hear you. Sorry for sideswipping you like that.&quot; That&apos;s exactly right. You de-escalated with warmth, without losing ground or apologizing for doing your job. The call kept moving and she stayed with you all the way to the e-signature.</p>
            <p>The C-SNP identification is a genuine skill. You completed the full chronic heart condition questionnaire correctly at 31:17 — all cardiac conditions covered, Extra Help applied to the premium, effective date confirmed. That is technically complete work. On the Janice Brantley call, you caught the formulary exception for Invega mid-call, reframed it cleanly (&quot;it works the same way as what you currently have&quot;), and the consumer accepted it without pushback. Those are the moments that matter and you handled both of them well.</p>
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
                  <span className={styles.priorityTitle}>{p.title}</span>
                </div>
                <p className={styles.priorityDetail}>{p.summary}</p>
                <div className={styles.priorityMove}>
                  <span className={styles.priorityMoveLabel}>Instead:</span>
                  <p className={styles.priorityMoveText}>{p.fix}</p>
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
                <p className={styles.workOnTitle}>Check carrier appointment in the first 60 seconds</p>
                <p className={styles.workOnDetail}>When a consumer names their current carrier, verify internally that you hold that appointment before running discovery. If you don&apos;t, warm transfer immediately. Don&apos;t spend 18 minutes building a relationship you can&apos;t close. The transfer protects the consumer and your time.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Loyalty objection = one question, not an exit</p>
                <p className={styles.workOnDetail}>The loyalty objection survives when you never answer the consumer&apos;s real question: &quot;Will my doctors still be there?&quot; Pull up the provider directory. Confirm their primary and their specialist by name. When you say &quot;Dr. [name] is in-network on Devoted,&quot; the loyalty frame dissolves. You can&apos;t close a loyalty objection without doing the network check. Do the check.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>After every monthly number: annualize and connect</p>
                <p className={styles.workOnDetail}>$400/month is information. &quot;$4,800 a year — Janice, you said utilities are tight. That&apos;s what this card is for.&quot; is a close. Add two sentences after every monthly figure: the annual number, then a connection to something the consumer said in discovery. Those two sentences are where the math becomes a decision.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>04</span>
              <div>
                <p className={styles.workOnTitle}>When a consumer mentions a move or Medicaid — ask the SEP questions</p>
                <p className={styles.workOnDetail}>&quot;When exactly did you move?&quot; and &quot;Is the state paying your Part B premium?&quot; Those two questions can turn an AEP objection into a same-day enrollment. Ronnie Phillips had both a MOV SEP and an INT SEP available on April 1st. He was told to wait until October. He didn&apos;t need to wait.</p>
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
          <p>The Certainty System · Jeri Vivas · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC3 · RC6 · C-SNP · MOV SEP · INT SEP · Loyalty Reframe · Annualization</p>
        </div>

      </div>
    </PageShell>
  )
}
