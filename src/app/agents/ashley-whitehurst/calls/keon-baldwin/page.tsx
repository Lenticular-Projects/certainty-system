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

export default function KeonBaldwinCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <Link href="/agents/ashley-whitehurst" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              ← Ashley Whitehurst
            </Link>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
          </div>
          <h1 className={styles.agentName}>Keon Baldwin</h1>
          <p className={styles.period}>April 15, 2026 · 6:00 · Wrong Reason Caller — Existing Enrollee</p>
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
            <span className={styles.scoreValue}>6:00</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)', fontSize: '1rem' }}>CORRECT NO-SALE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Existing enrollee — card issue resolved</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1rem' }}>RC4</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Premature SSN collection</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Keon Baldwin was transferred to you from another representative about his flex card allowance — specifically, he'd never received it. He was not shopping for a new plan. At 0:10 he told you he was being transferred about "what you call a transfer period." The audio quality was poor and the conversation was confusing early on, but you held the call together. At 0:25 Keon mentioned he had Medicaid and Medicare — dual eligible status. You asked for the zip code at 1:09, confirmed Philadelphia County SC (ZIP 29128), and delivered the full TPMO disclaimer at 1:31.</p>
            <p>At 2:11 Keon signaled he already had coverage: "I was able to see if I already had my insurance." You asked for his Medicare ID, he offered his social security instead, and you collected it at 2:30 without framing the purpose of the lookup first. At 2:54 you got his name (Keon Baldwin) and at 3:28 you found an address discrepancy — old address 1221 Rice Street vs. his current 811 East Bernon Road. That discrepancy was the whole case. By 4:47 you identified his Devoted C-SNP that started in April and confirmed the card likely went to the wrong address. At 5:29 you gave him the Devoted customer service number: 1-800-338-6833. He thanked you and the call ended at 6:00. Good situational read and correct resolution.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>The TPMO disclaimer at 1:31 was complete and correct — four organizations, 37 products, Medicare.gov, 1-800-MEDICARE, SHIP. Delivered cleanly on a confusing transfer call. The strongest moment on this call was your read at 4:35. When Keon said "Everything I have is fine — it's just that I never see the card," you immediately shifted modes. No plan switch pitch, no artificial urgency, no trying to create a need that wasn't there. You identified his plan in the system, saw the address discrepancy, diagnosed the problem, and gave him a direct action step. That's what a correct no-sale looks like — and it matters. Keon left the call with a concrete phone number and a clear next step.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>Before collecting any PII, frame the purpose in one sentence: "To pull up your existing coverage and see what's going on with your card, can I get either your Medicare ID or the last four of your Social?" Purpose before collection — it's more compliant and more trust-building.</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>The score penalty on this call comes from one moment: at 2:30 you asked "Okay, what's your social?" with no framing for why you needed it. The consumer had just said he might already have coverage — the collection should have been explicitly tied to a service purpose: "To look up your current plan and find out what happened with your card, let me get the last four of your Social." That framing protects you on audit and builds trust with the consumer.</p>
            <p>The bigger lesson worth noting: when a 44-year-old mentions Medicaid and Medicare in the first 30 seconds, that's almost certainly disability-based Medicare — a dual-eligible profile. You didn't need to do anything differently on this call since Keon was satisfied with his coverage, but getting in the habit of naming what you see ("Got it — so you have both Medicaid and Medicare, which means you're in exactly the right setup with the Devoted C-SNP") signals expertise and makes consumers feel like they're talking to someone who actually understands their situation.</p>
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
              { cat: 'Signal Reading', score: 11, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 10, max: 15 },
              { cat: 'Call Outcome Quality', score: 7, max: 10 },
              { cat: 'Compliance', score: 9, max: 15 },
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
          <p>The Certainty System · Ashley Whitehurst · Keon Baldwin · April 15, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC4 — Compliance Process Gap (SSN framing) · Devoted C-SNP address mismatch resolved</p>
        </div>

      </div>
    </PageShell>
  )
}
