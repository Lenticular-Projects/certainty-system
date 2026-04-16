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

export default function JudithStedingCallPage() {
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
            <Link href="/agents/rosina-klimoski" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Rosina Klimoski
            </Link>
          </div>
          <h1 className={styles.agentName}>Judith Steding</h1>
          <p className={styles.period}>April 14, 2026 · 4:20 · ZIP 34655</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(27), fontWeight: 700 }}>27 / 100</span>
            {' · '}Missed Opportunity · Script Fumble + MOV SEP Missed
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(27) }}>27</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>4:20</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '0.85rem' }}>MISSED OPP</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Not Enrolled</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC6+RC1</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>SEP Miss + Discovery</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Judith Steding called from ZIP 34655 — a consumer who had recently moved to the area. The call lasted 4 minutes and 20 seconds. It ended when Judith said &ldquo;I&apos;m going to pass.&rdquo; Two things caused this call to collapse before it could go anywhere: a visible script fumble at 3:30 that broke her confidence in you, and a compliance problem — a double TPMO disclosure — that introduced confusion at the wrong moment.</p>
            <p>The larger miss was structural: she told you she had just moved. That is a moving SEP (MOV SEP) — an enrollment window triggered by a recent change of residence. You had a legitimate path to enroll her outside AEP, and it wasn&apos;t named. By the time the script fumble hit at 3:30, you had already lost the ground needed to recover.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Compliance baseline (10/15):</strong> Even with the double TPMO issue, you got to 10 out of 15 on compliance — which means the bones of the compliance script were present. That structure is valuable. The problem was sequencing, not effort.</p>
            <p><strong>Objection awareness (4/15):</strong> You recognized that she was pulling back and made some attempt to address it. On a 4-minute call where the script broke down at 3:30, getting any recovery attempt in before she hung up shows you were still trying to read the call.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>She told you she just moved. A recent move opens a special enrollment window right now — not during AEP. Name it before anything else: &ldquo;Judith, I completely understand — but before you go, you mentioned you just moved here. A recent move actually opens a special enrollment window, which means I may be able to get you into a better plan today.&rdquo;</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>3:30 — &ldquo;I don&apos;t know where my...&rdquo; Script fumble. Consumer said: &ldquo;I&apos;m going to pass.&rdquo;</strong></p>
            <p>A script fumble in the fourth minute of a call is survivable if you have trust built. You didn&apos;t have enough yet — and the double TPMO disclosure before the fumble had already introduced unnecessary friction. When a consumer hears confusion from an agent about what to say next, their instinct is to protect themselves. Judith&apos;s &ldquo;I&apos;m going to pass&rdquo; is a protection move, not a plan rejection.</p>
            <p>But the real miss happened earlier — at the moment she said she had just moved. ZIP 34655 was new for her. That is a moving SEP: a 60-day window from the date of the move to enroll in a new Medicare Advantage plan without waiting for AEP. If you had named that window in the first two minutes, the call has a completely different shape. She calls in curious about options — and you tell her she has a special enrollment window right now. That creates urgency and positions you as someone who knows something valuable.</p>
            <p>The recovery at 3:50: <em>&ldquo;Judith, I completely understand — but before you go, you mentioned you just moved here. A recent move actually opens a special enrollment window, which means I may be able to get you into a better plan today. I don&apos;t need much — can I just check one thing for you?&rdquo;</em></p>
            <p>That line doesn&apos;t need a perfect delivery. It just needs to name the window before she&apos;s off the phone.</p>
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
              { cat: 'Lead Quality', score: 5, max: 20 },
              { cat: 'Signal Reading', score: 3, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 4, max: 15 },
              { cat: 'Call Outcome Quality', score: 5, max: 10 },
              { cat: 'Compliance', score: 10, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: row.score === 0 ? 'var(--terracotta)' : scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>27 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Rosina Klimoski · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC6 · RC1 · MOV SEP Missed · Double TPMO · ZIP 34655</p>
        </div>

      </div>
    </PageShell>
  )
}
