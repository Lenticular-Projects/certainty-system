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

export default function EvaMitchellCallPage() {
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
            <Link href="/agents/monique-williams" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Monique Williams
            </Link>
          </div>
          <h1 className={styles.agentName}>Eva Mitchell</h1>
          <p className={styles.period}>April 14, 2026 · 8:27 · Fort Myers, FL</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(57), fontWeight: 700 }}>57 / 100</span>
            {' · '}Correct No-Sale · Mismatched Expectation
          </p>
        </motion.div>

        {/* ── Score Strip ── */}
        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(57) }}>57</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>8:27</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)', fontSize: '0.9rem' }}>CORRECT</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>No-Sale · Uncloseable</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1rem' }}>RC1</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Permission loop · 4x at 5:25–6:33</span>
          </div>
        </motion.div>

        {/* ── What Happened ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Eva Mitchell is 86 and called from Fort Myers about the food card she saw advertised on TV. At 2:39 she told you directly: &ldquo;The food card is the only thing I need.&rdquo; You pivoted to medication questions. From that point the call was working against itself — Eva had come for one thing and the conversation had moved somewhere else.</p>
            <p>Between 5:25 and 6:33 you asked the consent question &ldquo;Do I have permission to determine eligibility on your behalf, ma&apos;am?&rdquo; four times. Eva grew confused with each repetition. At 8:09 she apologized — &ldquo;Oh, I didn&apos;t understand that&rdquo; — which was your recovery window. Instead of using it to re-anchor on the food card, the call wound down. The outcome here was ultimately correct: Eva&apos;s situation may have been genuinely uncloseable. But the call burned more time than necessary getting to that answer, and the recovery window at 8:09 was real.</p>
          </div>
        </motion.div>

        {/* ── What You Did Well ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Math presented clearly when reached:</strong> When the plan comparison came up, the numbers were delivered in a way Eva could follow. The math breakdown score reflects that the case was made correctly once you got there.</p>
            <p><strong>Patience with an elderly caller:</strong> At 86, Eva&apos;s pace and comprehension required you to slow down and repeat. You didn&apos;t push or show frustration. That is the right baseline for this caller profile.</p>
            <p><strong>Compliance complete and early:</strong> Full TPMO disclaimer delivered before discovery — no gaps, no shortcuts.</p>
          </div>
        </motion.div>

        {/* ── The One Thing ── */}
        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>At 2:39 Eva told you what she wanted. The right response was: &ldquo;That&apos;s exactly what we&apos;re going to get you. Let me pull up what&apos;s available for your ZIP code — I just need your Medicare ID and we&apos;ll see exactly what food benefit you qualify for.&rdquo; Lead with her goal, not yours. The medications and eligibility questions follow once she sees you&apos;re working toward the same thing she is.</p>
        </motion.div>

        {/* ── The Moment That Decided This Call ── */}
        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>5:25–6:33 — Permission question asked four times without variation.</strong></p>
            <p>The consent question is a compliance requirement, not a script loop. When a consumer doesn&apos;t understand the first ask, the second ask shouldn&apos;t be identical to the first. By the fourth repetition, Eva was confused and the call had lost momentum it never fully recovered.</p>
            <p>The better approach after a failed first ask: simplify the language. <em>&ldquo;Eva, I just need your okay to look up your plan options — may I do that?&rdquo;</em> If the full scripted version isn&apos;t landing, a plain-language version that captures the intent still satisfies the spirit of the requirement and keeps the call alive.</p>
            <p>At 8:09 when Eva said &ldquo;Oh, I didn&apos;t understand that,&rdquo; she was handing you a second chance. She wasn&apos;t refusing — she was confused and willing. The recovery line: &ldquo;No problem at all, Eva. Let me ask it simply — can I look up what food card benefit you qualify for?&rdquo; That re-anchors on her goal, resolves the confusion, and gives you a clean path forward.</p>
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
              { cat: 'Lead Quality', score: 10, max: 20 },
              { cat: 'Signal Reading', score: 10, max: 20 },
              { cat: 'Math Breakdown', score: 12, max: 20 },
              { cat: 'Objection Handling', score: 8, max: 15 },
              { cat: 'Call Outcome Quality', score: 8, max: 10 },
              { cat: 'Compliance', score: 9, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}>
              <span>Total: <strong>57 / 100</strong></span>
            </div>
          </div>
        </motion.div>

        {/* ── Footer ── */}
        <div className={styles.footer}>
          <p>The Certainty System · Monique Williams · Eva Mitchell · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 · Permission Loop · Correct No-Sale · Fort Myers FL</p>
        </div>

      </div>
    </PageShell>
  )
}
