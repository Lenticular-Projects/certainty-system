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

export default function RobertNalemCallPage() {
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
            <Link href="/agents/andres-duran" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Andres Duran
            </Link>
          </div>
          <h1 className={styles.agentName}>Robert Nalem</h1>
          <p className={styles.period}>April 14, 2026 · 3:49 · Wake County, NC</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(22), fontWeight: 700 }}>22 / 100</span>
            {' · '}Missed Opportunity · The Confused Caller
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(22) }}>22</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>3:49</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1.1rem' }}>MISSED</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Missed Opportunity</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1 · RC6</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Passive close + SEP missed</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Robert Nalem called about the food/savings card and opened by saying he wanted to stay with Cigna. You moved through the opening cleanly — TPMO delivered at 0:42, Medicare card collected at 2:08. Then, at 3:23, you discovered from the system that Robert&apos;s plan had already transitioned from Cigna to Humana on April 1st — news Robert had no idea about.</p>
            <p>His response at 3:31 — &ldquo;I did?&rdquo; — was genuine shock. A senior who didn&apos;t know his plan changed without him choosing it. That single moment was your entire enrollment opportunity: a confused beneficiary who needed someone to take charge and explain his options, including the food card he called about. Instead you delivered the information passively. He said &ldquo;I better check with my daughter&rdquo; and the call ended at 3:40. His original question was never answered. No callback was scheduled. Zero value was delivered.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Clean, professional opening:</strong> You identified yourself, stated the recorded line, and confirmed the reason for the call immediately — no fumbling, no filler. Solid start.</p>
            <p><strong>Complete TPMO compliance at 0:42:</strong> Full disclaimer with carrier count, Medicare.gov reference, and 1-800-MEDICARE — delivered correctly and early. This is the standard.</p>
            <p><strong>System intelligence at 3:23:</strong> You caught the Cigna-to-Humana transition in real time. That&apos;s a sharp lookup — the information was right there and you surfaced it. The problem was what happened next, not the discovery itself.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When Robert said &ldquo;I did?&rdquo; at 3:31, that was your opening, not your exit. The line: &ldquo;Yes sir — and because this change may have caught you off guard, you actually have a special enrollment window right now to look at your options. Let me take two minutes to check what that includes — and the food card you called about. Does that work?&rdquo;</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>3:31 — &ldquo;I did?&rdquo;</strong></p>
            <p>Robert&apos;s shock that his plan had changed was the clearest possible signal that this call mattered. He didn&apos;t choose Humana. Someone or something made that switch without his awareness. That is a textbook DIF (deemed enrollment) SEP — a three-month window from April 1st where he could legitimately choose a plan. You had his ZIP, you had his MBI, you had the hook (the food card he called about). You needed one sentence to hold the call together.</p>
            <p>When he then said &ldquo;I better check with my daughter&rdquo; at 3:40, that was a scheduling opportunity, not a goodbye. The move: <em>&ldquo;Of course — what time tomorrow works for both of you? I&apos;ll call you together so she can hear it from me directly. Takes ten minutes.&rdquo;</em> Instead, the call ended. He left confused and his question went unanswered.</p>
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
              { cat: 'Lead Quality', score: 6, max: 20 },
              { cat: 'Signal Reading', score: 2, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 4, max: 15 },
              { cat: 'Call Outcome Quality', score: 2, max: 10 },
              { cat: 'Compliance', score: 8, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: row.score === 0 ? 'var(--terracotta)' : scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>22 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Andres Duran · Robert Nalem · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · RC6 · DIF SEP Missed · The Confused Caller · Wake County NC</p>
        </div>

      </div>
    </PageShell>
  )
}
