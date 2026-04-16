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

export default function RitaWeiburgCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>
        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
            <span className={styles.dot}>·</span>
            <Link href="/agents/natasha-jones" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Natasha Jones
            </Link>
          </div>
          <h1 className={styles.agentName}>Rita Weiburg</h1>
          <p className={styles.period}>April 15, 2026 · 3:40 · Status Checker / Returning Caller</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(50), fontWeight: 700 }}>50 / 100</span>
            {' · '}CORRECT NO-SALE
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(50) }}>50</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>3:40</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1rem' }}>CORRECT NO-SALE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Verification impasse</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>No recovery after SSN refusal</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>
              Rita Weiburg, 81, called in to check on her plan status and grocery card. She&apos;s a returning
              caller — she referenced a previous interaction (&quot;You&apos;ve been through this already&quot;)
              and her daughter holds her Medicare card for safekeeping. Rita doesn&apos;t have her card available
              and has a firm, non-negotiable personal policy about giving her SSN over the phone.
            </p>
            <p>
              You delivered the full compliance block, confirmed her callback number, asked both pre-qualification
              questions, and pivoted cleanly from Medicare card to name/DOB lookup when she said she didn&apos;t
              have the card. You collected her name and date of birth (11/11/1944). At 2:59 you asked for her SSN.
              Rita said: &quot;I&apos;m in good conscience I can&apos;t give it out.&quot; You said &quot;All right,
              no problem&quot; and ended the call 30 seconds later. Rita&apos;s grocery card question — the reason
              she called — went unanswered.
            </p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>
              Your compliance execution on this call was strong for a 3:40 conversation. The full TPMO disclaimer
              was delivered at 0:58 — two organizations, 26 products, Medicare.gov and 1-800-MEDICARE references
              — without stumbling. Callback number confirmed at 1:33. Decision-maker authority and nursing home
              status both checked at 1:51. When Rita said she didn&apos;t have her Medicare card, you immediately
              pivoted to name/DOB lookup: &quot;I can look you up another way.&quot; That&apos;s good procedural
              fluency.
            </p>
            <p>
              When Rita refused the SSN, you correctly framed it as her choice — &quot;it&apos;s up to you, no
              pressure&quot; — which is the right CMS-aligned approach. Rita ended the call with &quot;And you
              too. Thank you&quot; — a positive tone that means she didn&apos;t hang up angry. You preserved the
              relationship.
            </p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>
            After the SSN refusal, you had one move: &quot;Completely understandable, Rita. Good news — we
            don&apos;t need your SSN at all if your daughter can get on the phone with your Medicare card.
            I just need those letters and numbers on the front. Can we set that up right now? Because I
            don&apos;t want you to go another day not knowing where your grocery card stands.&quot;
          </p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>
              At 2:13 Rita gave you the exact solution: &quot;My daughter holds it for safekeeping and no, it
              is not my POA.&quot; She told you where the card is and clarified the daughter has no legal
              authority — just the card. That information contained the recovery path: three-way the daughter
              in, or schedule a callback for when the daughter is present.
            </p>
            <p>
              When Rita refused SSN at 3:08 and you accepted it at 3:30, the call ended with her question
              unresolved. The right sequence after the refusal: validate the concern, offer the daughter/card
              path, lock in a specific callback time. Rita is a motivated returning caller who will pick up
              the phone again — she just needs the right path through verification. Build that path on the
              next call: Medicare card first, always, before SSN ever comes up.
            </p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 12, max: 20 },
              { cat: 'Signal Reading', score: 9, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 7, max: 15 },
              { cat: 'Call Outcome Quality', score: 8, max: 10 },
              { cat: 'Compliance', score: 14, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>50 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Natasha Jones · Rita Weiburg · April 15, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 (SSN Surrender — No Recovery) · Returning Caller · Daughter holds Medicare card</p>
        </div>
      </div>
    </PageShell>
  )
}
