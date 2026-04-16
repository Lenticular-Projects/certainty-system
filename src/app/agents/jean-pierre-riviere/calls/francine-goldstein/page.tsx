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

export default function FrancineGoldsteinCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
            <span className={styles.dot}>·</span>
            <Link href="/agents/jean-pierre-riviere" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Jean Pierre Riviere
            </Link>
          </div>
          <h1 className={styles.agentName}>Francine Goldstein</h1>
          <p className={styles.period}>April 14, 2026 · 15:09 · Correct No-Sale</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(58), fontWeight: 700 }}>58 / 100</span>
            {' · '}NOT ENROLLED — UNCLOSEABLE (CORRECT NO-SALE)
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(58) }}>58</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>15:09</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>Apr 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)', fontSize: '0.85rem' }}>CORRECT NO-SALE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Already at max benefit</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1rem' }}>INT · MOV</span>
            <span className={styles.scoreLabel}>SEPs Present</span>
            <span className={styles.scoreRange}>Michigan move pending</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Francine Goldstein, a dual Medicare/Medicaid beneficiary in Indianapolis (zip 46250), called hoping to access benefits she could apply to bills and gasoline beyond her existing OTC allowance. You correctly identified her situation within minutes: she is on a fully integrated UnitedHealthcare D-SNP plan carrying a $378/month OTC benefit — the maximum available for dual-eligible members in Marion County. There was no upgrade to offer.</p>
            <p>This was a correct no-sale, executed with discipline. You confirmed her plan structure, explained why no better option existed in her county, clarified the enrollment window calendar when she asked, and set yourself up as her go-to agent for the upcoming annual enrollment period and for her potential Michigan move. No enrollment was warranted and none was attempted.</p>
            <p>The call had one meaningful drift — over a minute lost to a Bimini flying story at 6:28 after the Medicare number was confirmed — and one missed opportunity: you never asked about chronic conditions, which is the CSN SEP screen that works year-round on every dual member call.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>At 8:02 you delivered the correct no-sale determination clearly and without hedging: "I cannot be able to qualify for anything higher than what you already have." That takes discipline. A lot of agents manufacture confusion or push an unnecessary plan change just to close something. You looked at her situation and called it straight.</p>
            <p>When Francine mentioned a possible Michigan move at 12:06, you immediately understood the enrollment implications — asked for the destination zip, explained that Medicaid eligibility varies by state, and correctly deferred until she has a confirmed address. That is expert-level MOV SEP awareness on a correct no-sale call.</p>
            <p>Your AEP/OEP/SEP education at 10:08 was accurate and consumer-friendly. When she asked why people are enrolling in April if AEP is October-December, you gave her a clear breakdown of all three windows. That is exactly the kind of knowledge that builds trust and earns referrals.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>On the Michigan move: "Ms. Goldstein, when you move to Michigan, that's a special enrollment event. Call me first — before you call anyone else — and I'll make sure you're set up with the best plan Michigan has for your situation. I want to be the one who does that for you."</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>At 12:06, Francine said she may be moving to Michigan in the next two months. That is the most important moment in this call. The MOV SEP creates a real future enrollment opportunity — and Francine already has an existing agent (she revealed at 13:04 that she called because her own agent told her to check things out). You are currently her secondary contact. The Michigan move is your chance to become her primary.</p>
            <p>You handled it correctly by asking for the zip code and explaining the Medicaid state-by-state variance. The one thing missing: you didn't plant your flag explicitly enough. "Ms. Goldstein, when you move to Michigan, call me first — before you call anyone else." That one phrase turns a loose future possibility into a committed pipeline. Francine accepted it warmly when you gave her your number — she just needed that direct claim from you to anchor the relationship.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 13, max: 20 },
              { cat: 'Signal Reading', score: 15, max: 20 },
              { cat: 'Math Breakdown', score: 14, max: 20 },
              { cat: 'Objection Handling', score: 10, max: 15 },
              { cat: 'Call Outcome Quality', score: 8, max: 10 },
              { cat: 'Compliance', score: 10, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>58 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Jean Pierre Riviere · Francine Goldstein · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>Correct No-Sale · INT · MOV SEP (Michigan move, ~June 2026)</p>
        </div>
      </div>
    </PageShell>
  )
}
