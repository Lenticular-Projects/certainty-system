'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

// ── Weekly Brief: April 13–17, 2026 ─────────────────────────────────────────

const callsByDate = [
  {
    date: 'Tuesday, April 14',
    calls: [
      { consumer: 'Dennis Brendel', duration: '20:19', score: 36, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Daughter Gatekeeper — $580 Left on Table', href: '/agents/michelle-marrero/calls/dennis-brendel' },
      { consumer: 'Jerry Hawley', duration: '20:24', score: 29, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Qualification Collapse', href: '/agents/michelle-marrero/calls/jerry-hawley' },
      { consumer: 'Regina DePaiva', duration: '36:36', score: 47, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Voice Signature Confusion — No Recovery', href: '/agents/michelle-marrero/calls/regina-depaiva' },
      { consumer: 'Unknown Consumer', duration: '3:03', score: 42, outcome: 'INCOMPLETE', outcomeNote: 'Discovery — consumer disconnected', type: 'Short Call', href: '/agents/michelle-marrero/calls/unknown-consumer-3m03s' },
      { consumer: 'Unknown Consumer', duration: '3:33', score: 55, outcome: 'INCOMPLETE', outcomeNote: 'Dual-Eligible — Phone died before MBI', type: 'Disconnected Before MBI', href: '/agents/michelle-marrero/calls/unknown-consumer-3m33s' },
      { consumer: 'Unknown Consumer', duration: '2:08', score: 55, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Short — Already Enrolled', href: '/agents/michelle-marrero/calls/unknown-consumer-2m08s' },
      { consumer: 'William McCown', duration: '6:35', score: 62, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'Already on Best Plan', href: '/agents/michelle-marrero/calls/william-mccown' },
      { consumer: 'William White', duration: '11:44', score: 28, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Benefit Confusion — Early Exit', href: '/agents/michelle-marrero/calls/william-white' },
    ],
  },
  {
    date: 'Wednesday, April 15',
    calls: [
      { consumer: 'John Petipas', duration: '20:06', score: 40, outcome: 'MISSED OPPORTUNITY', outcomeNote: null, type: 'Giveback Gap — Math Never Run', href: '/agents/michelle-marrero/calls/john-petipas' },
      { consumer: 'John Pettipas', duration: '47:13', score: 68, outcome: 'INCOMPLETE', outcomeNote: 'Enrollment agreed — Phase VI not completed', type: 'Enrollment Agreement Reached — Lost on Hold', href: '/agents/michelle-marrero/calls/john-pettipas' },
      { consumer: 'Michelle Sedita', duration: '3:38', score: 38, outcome: 'INCOMPLETE', outcomeNote: 'Discovery done — close not attempted', type: 'SSN Refused — No Reframe, No Anchor', href: '/agents/michelle-marrero/calls/michelle-sedita' },
    ],
  },
  {
    date: 'Thursday, April 16',
    calls: [
      { consumer: 'Carleen Isaacs', duration: '37:32', score: 42, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'OTC Card Troubleshoot — No Switch Path', href: '/agents/michelle-marrero/calls/carleen-isaacs' },
    ],
  },
  {
    date: 'Friday, April 17',
    calls: [
      { consumer: 'Dara Martin', duration: '5:54', score: 35, outcome: 'CORRECT NO-SALE', outcomeNote: null, type: 'No Medicare Card — Callback', href: '/agents/michelle-marrero/calls/dara-martin' },
    ],
  },
]

const patterns = [
  {
    title: 'The close is done — complete Phase VI before anything else',
    rc: 'RC4',
    urgency: 'critical' as const,
    summary: 'When a consumer agrees to enroll, the compliance close is the only thing that makes it real. Everything else — gym research, wellness tips, texting addresses — comes after the voice signature. The John Pettipas 47-minute call ended mid-hold with no voice signature because 8 minutes of bonus value-adds were delivered before the compliance chain was closed.',
    fix: 'Instead: The moment you hear yes, say "Give me two minutes to read two quick disclosures and get your verbal confirmation — then we\'re all set." Voice signature first. Bonus value after.',
  },
  {
    title: 'When the math is done, say the number out loud',
    rc: 'RC3',
    urgency: 'high' as const,
    summary: 'John Pettipas called because he needed $200 a month for groceries. The plan savings — $370 deductible reduction, $35 drug reduction, $100 OTC — totaled $63/month. That number was never spoken. The math was completed but the humanization step ("that\'s your grocery money") was skipped on both John Pettipas calls and on Dennis Brendel.',
    fix: 'Instead: After the comparison, say "John, you told me you needed $200 a month for groceries. On this plan, you\'re keeping $370 in your deductible pocket and getting $100 in OTC. That\'s close to $63 a month back. I just found your grocery money." State the number. Connect it to what they told you.',
  },
  {
    title: 'Every third-party gatekeeper gets one direct close — then own it',
    rc: 'RC1',
    urgency: 'high' as const,
    summary: 'Dennis Brendel told you his daughter made the Humana decision, that he makes his own choices, and said "No, no" when you told him Humana takes $20 a month from Social Security. That was the close trigger. The correct move was: "Dennis, you said no, no — that\'s your gut. You told me you make your own decisions. Let me lock you back in Devoted right now." Instead, the offer was to call the daughter, which handed the decision off the call.',
    fix: 'Instead: When a consumer owns their decision-making and reacts emotionally to bad news, close directly. Never hand off to a third party as your primary strategy. "Dennis, $580 a year is yours — let\'s keep it. I just need 60 seconds."',
  },
]

const pastReports = [
  {
    title: 'Weekly Brief — April 14 (Tue only)',
    type: 'Weekly Brief',
    date: 'Apr 15, 2026',
    score: '44 / 100',
    active: false,
  },
  {
    title: 'Weekly Brief — April 13–17',
    type: 'Weekly Brief',
    date: 'Apr 20, 2026',
    score: '44 / 100',
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

export default function MichelleMarreroPage() {
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
          <h1 className={styles.agentName}>Michelle Marrero</h1>
          <p className={styles.period}>Week of April 13–17, 2026</p>
          <p className={styles.updatedAt}>Updated April 20 · 13 calls reviewed (Tue–Fri)</p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(44) }}>44</span>
            <span className={styles.scoreLabel}>Week Average</span>
            <span className={styles.scoreRange}>Tue–Fri · 13 calls</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>13</span>
            <span className={styles.scoreLabel}>Calls Reviewed</span>
            <span className={styles.scoreRange}>Apr 14–17, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>5</span>
            <span className={styles.scoreLabel}>Missed Opportunities</span>
            <span className={styles.scoreRange}>3 Incomplete · 4 Correct No-Sale · 0 Enrolled</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)' }}>RC4</span>
            <span className={styles.scoreLabel}>Critical Flag</span>
            <span className={styles.scoreRange}>Phase VI before value-adds</span>
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
              { metric: 'Sales',       prior: '11',     current: '7',     delta: '−4',        dir: 'down' },
              { metric: 'Conversion',  prior: '11.00%', current: '5.65%', delta: '−5.35pp',   dir: 'down' },
              { metric: 'CPA',         prior: '$90',    current: '$214',  delta: '+$124',      dir: 'down' },
              { metric: 'Total Calls', prior: '100',    current: '124',   delta: '+24',        dir: 'neutral' },
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
            <p>Thirteen calls across four days — five missed opportunities, three incompletes, four correct no-sales. The John Pettipas call was the week in one story: 47 minutes, all doctors verified, enrollment agreement reached, and then eight minutes of gym research before the voice signature. When his son called, there was nothing to show for it. This week is about what happens after the yes.</p>
            <p><strong>What&apos;s working:</strong> your discovery and verification work is thorough and consistent. On the John Pettipas 47-minute call, you stopped selling when John raised the prior UHC doctor concern and verified Dr. Mitchell before pitching — that one move turned a deal-breaker into a deal-maker. On Regina DePaiva, you identified the C-SNP opportunity immediately, verified all three specialists, and had her agreeing through the entire call. The relationship work — loyalty anchors, going above-and-beyond on arthritis resources — is real. Your correct no-sales (William McCown, the 2:08 short call) show you know when not to push. That judgment is important.</p>
            <p><strong>What&apos;s costing you:</strong> three patterns showed up across multiple calls this week. First: Phase VI is not optional once there&apos;s agreement — the voice signature comes before any bonus activity, every time. Second: when you complete the math comparison, say the dollar number and connect it to what the consumer told you they need — the humanization step is the close. Third: when a consumer reacts emotionally to bad news, that&apos;s the close trigger — close directly, don&apos;t hand off to third parties.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>You earn the agreement — the doctor verification, the math, the relationship. The move that converts more of those into enrollments is closing the compliance chain the moment you have the yes: &ldquo;Two minutes for two quick disclosures and you&apos;re locked in.&rdquo; Get the voice signature. Then deliver the bonus value. That&apos;s the sequence.</p>
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
            <span>Week Average: <strong>44 / 100</strong></span>
            <span>Enrolled: <strong>0 of 13</strong></span>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>The John Pettipas 47-minute call had your best technical move of the week.</strong> At 24:10, John told you UHC hadn&apos;t covered his doctor — the same reason he left UHC and went back to Humana. Instead of defending the plan or talking past it, you stopped and verified Dr. Charles Mitchell before saying another word about UHC. He came back in-network at 32:25. That one instinct turned a potential deal-breaker into the moment the enrollment became inevitable. The loyalty anchor and the arthritis research after that were above-and-beyond — real relationship investment.</p>
            <p><strong>Regina DePaiva — 36 minutes of correct diagnostic work.</strong> C-SNP identified right away, all three specialists verified ($60 vs $35 flex card), formulary exception for Entresto and Plavix handled honestly. You had a medically complex consumer trusting you through the whole call. The call fell apart in the final 60 seconds on a voice signature question she misread — one recovery line (&ldquo;Regina, saying yes just confirms what we already discussed&rdquo;) would have closed it. The setup was yours.</p>
            <p><strong>Your correct no-sales show real judgment.</strong> William McCown and the 2:08 short call were both called correctly — you read the situations and didn&apos;t push. That accuracy protects your compliance record and your reputation with consumers.</p>
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
                <p className={styles.workOnTitle}>Voice signature before value-adds — every time</p>
                <p className={styles.workOnDetail}>The moment you have enrollment agreement, the next two sentences are: &ldquo;I need two quick minutes for two disclosures and your verbal confirmation — then you&apos;re locked in.&rdquo; That sequence closes the call. After the voice signature, give them everything — gym research, wellness tips, referrals. But the compliance chain closes first. No exceptions.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>02</span>
              <div>
                <p className={styles.workOnTitle}>Say the number and connect it to what they told you</p>
                <p className={styles.workOnDetail}>John Pettipas told you he needed $200 a month for groceries. The math showed $63/month in savings. Those two facts were never connected on the call. After any comparison, land the humanization: &ldquo;John, you told me you needed grocery money. On this plan, you&apos;re keeping $370 in your deductible and getting $100 in OTC. That&apos;s close to $63 a month back. I just found your grocery money.&rdquo; The savings mean nothing until they&apos;re attached to what the consumer actually needs.</p>
              </div>
            </div>
            <div className={styles.workOnCard}>
              <span className={styles.workOnNum}>03</span>
              <div>
                <p className={styles.workOnTitle}>Emotional reactions are close triggers — act on them immediately</p>
                <p className={styles.workOnDetail}>Dennis Brendel said &ldquo;No, no&rdquo; when you told him Humana takes $20 a month from Social Security. That was his gut saying no to the switch. The correct move at that moment: &ldquo;Dennis, you said no, no — that&apos;s your answer. Let me lock you back in Devoted right now. 60 seconds.&rdquo; When a consumer reacts emotionally to bad news, that emotion is the close. Don&apos;t offer to call a third party. Close the person who&apos;s on the phone.</p>
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
          <p>The Certainty System · Michelle Marrero · Week of April 13–17, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC3 · RC4 · Phase VI · Math Humanization · Close Triggers</p>
        </div>

      </div>
    </PageShell>
  )
}
