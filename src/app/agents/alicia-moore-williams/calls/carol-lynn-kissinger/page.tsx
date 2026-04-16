'use client'

import PageShell from '@/components/layout/PageShell'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import Link from 'next/link'
import styles from './page.module.css'

function scoreColor(score: number) {
  if (score >= 75) return 'var(--sage-dark)'
  if (score >= 55) return 'var(--mustard-dark)'
  return 'var(--terracotta)'
}

export default function CarolKissingerCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        {/* ── Header ── */}
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
            <span className={styles.dot}>·</span>
            <Link href="/agents/alicia-moore-williams" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Alicia Moore Williams
            </Link>
          </div>
          <h1 className={styles.agentName}>Carol Lynn Kissinger</h1>
          <p className={styles.period}>April 14, 2026 · 16:59 · Reading, PA</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(52), fontWeight: 700 }}>52 / 100</span>
            {' · '}Incomplete · High-Difficulty Call
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(52) }}>52</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>16:59</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>High-Difficulty Call</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC2</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Client Gold missed at 6:47</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>This was one of the most logistically complex calls of the week. Carol Lynn Kissinger is elderly and hard-of-hearing. Her husband Harry answered first and handed the phone over. Caregiver Doretta Rockwell was present in the background. When the Medicare card was produced, it was Harry&apos;s card, not Carol&apos;s. You navigated each of these obstacles cleanly — staying patient, redirecting to the correct beneficiary, and working through the environment without losing composure.</p>
            <p>At 6:47 Carol said: &ldquo;Anything we can get, we can use. These guys are givers.&rdquo; That was your strongest Client Gold of the call — an unprompted statement of financial openness and a clear signal that she was ready to move. It was not picked up. The call continued on the discovery track and ended mid-CVD screening question at 16:59, with enrollment never reached.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Multi-party call management from the start:</strong> When Harry answered and handed off to Carol, you re-established the call context, confirmed Carol as the beneficiary, and kept Doretta appropriately in the background rather than letting the call fragment into three conversations. That&apos;s advanced call control.</p>
            <p><strong>Wrong Medicare card caught and corrected:</strong> When Harry&apos;s card was read out, you identified the mismatch and guided Carol to locate her own card without making either of them feel embarrassed. Clean, professional, and patient.</p>
            <p><strong>Composure through hearing and environmental challenges:</strong> A hard-of-hearing consumer with a caregiver present and a husband who answered first — this is the highest-difficulty call configuration. You stayed calm and kept the call moving forward for nearly 17 minutes.</p>
            <p><strong>Compliance delivered without gaps:</strong> Full TPMO disclosure completed despite the environmental complexity. Maximum compliance score reflects this.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>At 6:47 Carol told you she was a receiver, not a resister. &ldquo;Anything we can get, we can use&rdquo; is not background chatter — it is an enrollment signal. The line: &ldquo;Carol, I love hearing that. Then let me show you exactly what you qualify for. Can I get your date of birth so I can pull up what&apos;s available in your ZIP?&rdquo; That sentence pivots from discovery to enrollment before the moment passes.</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>6:47 — &ldquo;Anything we can get, we can use. These guys are givers.&rdquo;</strong></p>
            <p>In 17 minutes of a difficult call, this was the clearest opening you had. Carol was not expressing a mild preference — she was telling you her household runs on every benefit they can access and that the people around her actively pursue help. That is Client Gold: motivation confirmed, resistance absent, household receptive.</p>
            <p>The correct response to that statement is a pivot to eligibility confirmation — not more discovery questions. You had enough information to begin the plan lookup. The CVD screening questions that followed at 16:59 were discovery-phase behavior on a call that had passed the discovery phase at 6:47.</p>
            <p>On a high-difficulty call like this, every Client Gold moment matters more because you don&apos;t know how many more you&apos;ll get before the environment deteriorates again. Carol told you she was ready. The next move was yours.</p>
          </div>
        </motion.div>

        {/* ── Score Breakdown ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span>
              <span>Score</span>
              <span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 13, max: 20 },
              { cat: 'Signal Reading', score: 9, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 8, max: 15 },
              { cat: 'Call Outcome Quality', score: 7, max: 10 },
              { cat: 'Compliance', score: 15, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: row.score === 0 ? 'var(--terracotta)' : scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>52 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Alicia Moore Williams · Carol Lynn Kissinger · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC2 · Client Gold Missed · High-Difficulty · Reading PA</p>
        </div>

      </div>
    </PageShell>
  )
}
