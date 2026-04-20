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
      { consumer: 'Anthony Johnson', duration: '58:59', score: 61, outcome: 'ENROLLED', outcomeNote: 'UHC C-SNP — May 1', type: 'Food Card Caller — Veteran / DST Compliance Flag', href: '/agents/natasha-jones/calls/anthony-johnson' },
      { consumer: 'Bernard Cobol', duration: '44:54', score: 68, outcome: 'INCOMPLETE', outcomeNote: 'Enrollment completed but scored Incomplete in system', type: 'New Medicare Beneficiary — ICEP — Veteran', href: '/agents/natasha-jones/calls/bernard-cobol' },
    ],
  },
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Bonnie Jackson', duration: '8:13', score: 42, outcome: 'INCOMPLETE', outcomeNote: null, type: 'Discovery Stalled — Close Not Attempted', href: '/agents/natasha-jones/calls/bonnie-jackson' },
      { consumer: 'Donna Hicks', duration: '5:25', score: 38, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'SSN Asked Too Early — Consumer Spooked', href: '/agents/natasha-jones/calls/donna-hicks' },
      { consumer: 'Unknown Consumer', duration: '3:33', score: 62, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Privacy Objector — Correct No-Sale', href: '/agents/natasha-jones/calls/unknown-consumer-3m33s' },
    ],
  },
  {
    date: 'Wednesday, April 15',
    calls: [
      { consumer: 'Joyce Alexander', duration: '20:20', score: 50, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Had All Info to Enroll Ralph — Handed Off Instead', href: '/agents/natasha-jones/calls/joyce-alexander' },
      { consumer: 'Rita Weiburg', duration: '3:40', score: 50, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'No Medicare Card — Daughter Has It', href: '/agents/natasha-jones/calls/rita-weiburg' },
      { consumer: 'Sandra Frakes', duration: '4:05', score: 30, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'HOT Lead — Lost at SSN Friction', href: '/agents/natasha-jones/calls/sandra-frakes' },
    ],
  },
  {
    date: 'Friday, April 17',
    calls: [
      { consumer: 'Margaret Mackey', duration: '5:54', score: 33, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Uncloseable — Principled No', href: '/agents/natasha-jones/calls/margaret-mackey' },
    ],
  },
]

const patterns = [
  {
    title: 'You have everything to close — and you hand it off instead',
    rc: 'RC1',
    urgency: 'critical' as const,
    body: 'When you have the Medicare ID, the diagnosis, the benefit interest, and the proxy authorization, you have the enrollment. Handing off at that moment doesn\'t protect the call — it ends it. Consumers who say they don\'t answer unknown numbers will not answer a callback. The window closes when the call does.',
    rule: 'When you have the information and the authorization, do not hand off what you can close.',
    callRef: 'On the Joyce Alexander call at 15:47, you had Ralph\'s Medicare ID, DOB, Parkinson\'s diagnosis, and spousal proxy authorization. Joyce told you she doesn\'t pick up unknown numbers. You handed off to a specialist named Rosie.',
    moveLabel: 'When you have everything needed:',
    move: '"Joyce, you just told me you don\'t pick up unknown numbers — so let\'s handle Ralph right now. I have everything I need. It takes five minutes and his coverage starts May 1st. I\'m going to get him enrolled right now."',
  },
  {
    title: 'SSN before trust ends the call before it starts',
    rc: 'RC1',
    urgency: 'critical' as const,
    body: 'HOT inbound callers are pre-qualified and ready to engage. Asking for a Social Security number before a single benefit has been shown converts a warm call to a suspicious one. The timing is the problem — not the SSN itself. Medicare card first. SSN is the backup.',
    rule: 'Lead with Medicare card every time. SSN is the fallback. Never reverse the order.',
    callRef: 'Donna Hicks was asked for her full SSN at 3:37, before any plan or benefit had been shown. Sandra Frakes hit the same ask at 3:34. Both were HOT inbound callers. Both ended the call at the SSN request.',
    moveLabel: 'Flip the order starting today:',
    move: '"I can look you up two ways — your Medicare card, or your Social Security number. Which one do you have handy?" If they hesitate on SSN: "No problem — your Medicare card works even better. Do you have that nearby?"',
  },
  {
    title: 'DST must never be agent-initiated — compliance risk on the Anthony Johnson call',
    rc: 'RC4',
    urgency: 'critical' as const,
    body: 'The Anthony Johnson enrollment is at audit risk. At 15:10, you raised the CMS winter storm declaration yourself — named the emergency, explained the enrollment window, and invited Johnson to confirm impact. DST is a consumer-initiated SEP. You cannot raise it. If an auditor reviews this call, the enrollment could be voided. Pull it from your process entirely unless the consumer mentions the disaster first.',
    rule: 'NEVER mention a disaster declaration or CMS emergency window. If the consumer brings it up, you may follow through. You may not initiate it.',
    callRef: 'At 15:10: "I\'m showing in your county of Ohio, as you probably know, there was a winter storm that recently impacted your area, and because of the declaration, CMS has opened a special enrollment period." That sentence cannot be agent-initiated.',
    moveLabel: 'If the consumer doesn\'t bring it up — don\'t bring it up:',
    move: 'Use the IEP, ICEP, or any other valid SEP that doesn\'t require consumer-initiated disclosure. If a consumer mentions the storm themselves, ask: "How did that affect you?" Then you may document it. Never lead with the SEP name.',
  },
  {
    title: 'Parkinson\'s was a C-SNP SEP that was never named',
    rc: 'RC6',
    urgency: 'high' as const,
    body: 'When a consumer mentions a qualifying chronic condition, that mention is a year-round enrollment trigger. Parkinson\'s disease qualifies for C-SNP plans with an SEP available any month of the year. When the objection is "we\'ll see our agent in October," the only thing that collapses that wall is naming the SEP. Without naming it, October sounds real and fixed.',
    rule: null,
    callRef: 'Joyce Alexander mentioned Ralph\'s Parkinson\'s at 10:17. The C-SNP SEP was not named. When Joyce said "we\'ll see our agent in October," there was no response addressing why October wasn\'t necessary.',
    moveLabel: 'When a chronic condition opens a SEP:',
    move: '"Ralph actually doesn\'t have to wait until October. His Parkinson\'s means he can switch to a better plan any month of the year — that\'s a Special Enrollment Period. We can get him started today. I\'m going to take care of that right now."',
  },
]

const pastReports = [
  { title: 'Weekly Brief — April 14 (partial)', type: 'Weekly Brief', date: 'Apr 15, 2026', score: '42 / 100', active: false },
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

export default function NatashaJonesPage() {
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
          <h1 className={styles.agentName}>Natasha Jones</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 20 · 9 calls reviewed (Mon–Fri)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(48) }}>48</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Mon–Fri · 9 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>9</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 13–17, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)' }}>1</span>
            <span className={styles.scoreLabel}>Enrolled</span>
            <span className={styles.scoreRange}>3 Correct No-Sale · 3 Missed · 1 Incomplete</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC4</span>
            <span className={styles.scoreLabel}>Top Pattern</span>
            <span className={styles.scoreRange}>DST compliance violation — Anthony Johnson call</span>
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
              { metric: 'Sales',       prior: '4',      current: '9',     delta: '+5',        dir: 'up' },
              { metric: 'Conversion',  prior: '12.90%', current: '6.43%', delta: '−6.47pp',   dir: 'down' },
              { metric: 'CPA',         prior: '$106',   current: '$239',  delta: '+$133',      dir: 'down' },
              { metric: 'Total Calls', prior: '31',     current: '140',   delta: '+109',       dir: 'neutral' },
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
            <p>Nine calls across five days — one enrollment, one compliance flag that needs immediate attention, and a week-over-week pattern that shows your discovery is strong and your closes are not happening when they should. The Anthony Johnson enrollment on Monday is real, but it carries a DST compliance issue that could void it in audit. That&apos;s the priority this week.</p>
            <p><strong>What&apos;s working:</strong> your patience on the Anthony Johnson call kept a 59-minute, low-bandwidth consumer on the line and you got him enrolled. The Bernard Cobol call showed clean new-beneficiary handling — ICEP correctly applied, VA coverage considered, full benefit presentation executed. And your Rita Weiburg handling was exactly right: when she couldn&apos;t produce the Medicare card, you framed it as her choice, kept zero pressure, and left the relationship warm. She said &ldquo;And you too. Thank you.&rdquo; That&apos;s a contact you can call back. Your discovery work on Joyce Alexander was also excellent — you caught her dental misconception at 7:25 and corrected it in real time.</p>
            <p><strong>What&apos;s costing you:</strong> three things. First, the DST violation on Anthony Johnson — you raised the winter storm SEP yourself at 15:10. That is prohibited by CMS and puts the enrollment at audit risk. Fix this immediately. Second, the SSN order — Donna Hicks and Sandra Frakes both hung up the moment you asked for it, before any benefit had been shown. Lead with the Medicare card. Third: on Joyce Alexander you had Ralph&apos;s Medicare ID, Parkinson&apos;s diagnosis, and spousal authorization — and you handed off to a specialist. Joyce told you she doesn&apos;t pick up unknown numbers. That callback didn&apos;t happen.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Your discovery is genuinely strong &mdash; you find the things most agents miss. The move that converts more of that discovery into enrollments is closing from what you already have. When you have the Medicare ID, the diagnosis, and the authorization, stop explaining and close: &ldquo;I have everything I need right here &mdash; I&apos;m going to get this done for you right now.&rdquo; You don&apos;t need more information. You need to use what you already collected.</p>
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
            <span>Enrolled: <strong>1 of 9</strong> · Correct No-Sales: <strong>3</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>The Anthony Johnson enrollment — your patience kept a hard call alive.</strong> Johnson was a low-bandwidth consumer who struggled with medications and had extended technical difficulties across a nearly 59-minute call. Your warmth never broke — &ldquo;Take your time, I want to help you and make sure you get that food card every month&rdquo; — and you kept him on the line through every delay. You also correctly identified that his Medicare Advantage plan had lapsed and connected it to his Social Security reduction, surfacing a fact he wasn&apos;t aware of. That system literacy saved him money he didn&apos;t know he was losing.</p>
            <p><strong>Joyce Alexander — your discovery was genuinely strong.</strong> You caught Joyce&apos;s dental misconception at 7:25 and corrected it in real time — she had been avoiding the dentist for a year over a billing error you fixed in under two minutes. You also executed a clean spousal pivot when her upgrade didn&apos;t work: you followed her lead to Ralph, collected his Medicare ID and DOB efficiently, and built a complete picture for enrollment. That&apos;s expert call navigation. Rita Weiburg was also handled correctly — patient, low-pressure, warm exit. She said &ldquo;And you too. Thank you.&rdquo; That&apos;s a contact you can call back.</p>
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
                <p className={styles.workOnTitle}>Remove DST from your process — it cannot be agent-initiated</p>
                <p className={styles.workOnDetail}>The Anthony Johnson enrollment is at audit risk. You raised the CMS winter storm declaration at 15:10. Agents cannot do this. If a consumer mentions a disaster, you may follow through. If they don&apos;t mention it, it doesn&apos;t exist for you. Pull it from your process entirely. For inbound callers with a lapsed plan or IEP eligibility, those are your SEPs — use them.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Lead with Medicare card — SSN is the backup</p>
                <p className={styles.workOnDetail}>Starting today, flip the order. Ask for the Medicare card first. If they don&apos;t have it: &ldquo;No problem — I can also look you up with your Social Security number.&rdquo; SSN as the primary ask ended Donna and Sandra&apos;s calls before a single benefit was shown. The card feels official. Use it first, every time.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>When you have everything to close — close, don&apos;t hand off</p>
                <p className={styles.workOnDetail}>On the Joyce Alexander call you had Ralph&apos;s Medicare ID, DOB, Parkinson&apos;s diagnosis, and Joyce&apos;s proxy authorization. Joyce told you she doesn&apos;t answer unknown numbers. That was your signal to close in place: &ldquo;Good — I have everything I need. Let me get Ralph enrolled right now while I have you. It takes five minutes and his coverage starts May 1st. I&apos;m going to take care of this for you.&rdquo; Practice that sentence.</p>
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
          <p>The Certainty System · Natasha Jones · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC4 · RC1 · RC6 · DST Compliance · SSN Friction · Close-in-Place · Spousal Pivot · Anthony Johnson · Joyce Alexander</p>
        </div>

      </div>
    </PageShell>
  )
}
