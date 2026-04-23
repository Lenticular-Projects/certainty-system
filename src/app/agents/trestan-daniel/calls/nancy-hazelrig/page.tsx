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

export default function NancyHazelrigCallPage() {
  return (
    <PageShell signal="amber">
      <div className={styles.page}>

        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <Link href="/agents/trestan-daniel" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              ← Trestan Daniel
            </Link>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
          </div>
          <h1 className={styles.agentName}>Nancy Hazelrig</h1>
          <p className={styles.period}>April 14, 2026 · 6:03 · The Grocery Card Caller</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(51), fontWeight: 700 }}>51 / 100</span>
            {' · '}CORRECT NO-SALE
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(51) }}>51</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ fontSize: '1.4rem' }}>6:03</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--sage-dark)', fontSize: '0.85rem' }}>CORRECT NO-SALE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Blount County, AL</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1 / RC2</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Offered callback instead of holding</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Nancy Hazelrig called in specifically asking about a grocery card. She is a Humana Advantage member in Blount County, AL who does not currently receive an OTC/food benefit on her plan. Her sole purpose on this call was to find out if she could get a grocery card. Your compliance work was solid — TPMO at 2:08, contact number confirmed, decision-maker and LTC status checked.</p>
            <p>The call stalled at account verification. Nancy did not have her Medicare card. When you correctly explained that the Humana card could not be used and that you needed the red, white, and blue Medicare card or SSN, she went to look. She came back empty-handed. At 4:58 she said she doesn&apos;t normally give out her Social Security number. At 5:27 she confirmed she still couldn&apos;t find the card and wasn&apos;t willing to provide the SSN. You ended professionally: &quot;Just give us a call back once you find it.&quot; The door was left open.</p>
            <p>This was a genuine verification barrier, not a sales failure. You handled the compliance correctly and the lead professionally. The missed opportunity was not trying to hold while she searched.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>When Nancy offered her Humana member number at 3:51, you correctly and clearly distinguished between her insurance account and her Medicare account — explaining that you needed the Medicare account to verify eligibility. That distinction confuses most agents. You delivered it without hesitation and without being condescending. That&apos;s product knowledge working in real time.</p>
            <p>Your TPMO disclaimer at 2:08 was complete — organization count, plan count, Medicare.gov, 1-800-MEDICARE, and SHIP. All required elements, natural delivery. And when Nancy said at 3:14 that she didn&apos;t want solicitation calls, you acknowledged it without protest and kept moving. You respected the boundary without losing control of the call.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer can&apos;t find their Medicare card, stay on the line: &quot;Nancy, take your time — I&apos;ll hold right here with you. It usually looks like a credit card with your name and a Medicare number on it. Check your wallet, a folder where you keep important documents. No rush at all.&quot; That single move converts a callback into a completed verification call about 30% of the time.</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>At 3:42 Nancy went to look for her Medicare card. She came back two minutes later having not found it. The call was still alive at that moment. What would have kept it alive: staying on the line while she searched.</p>
            <p>When you say &quot;take your time, I&apos;ll hold right here,&quot; you stay part of the search. When you say &quot;call us back when you find it,&quot; you remove yourself from it and put the entire burden on a woman who was already frustrated enough to go looking once and come up empty. The callback closes at maybe half the rate of an in-call completion. Nancy had a hot reason to call — she doesn&apos;t have a grocery card and wants one. That motivation was real. The hold gives it somewhere to go.</p>
            <p>The other thing worth building: before you hit the SSN ask, try the card one more time with a reframe. &quot;Your Medicare number is completely different from your Social Security number — it only shows what plan you&apos;re on. Is there anywhere else you might keep important cards or papers?&quot; Sometimes that distinction alone brings the card out.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span>
              <span>Score</span>
              <span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 9, max: 20 },
              { cat: 'Signal Reading', score: 8, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 8, max: 15 },
              { cat: 'Call Outcome Quality', score: 8, max: 10 },
              { cat: 'Compliance', score: 13, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>51 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Trestan Daniel · Nancy Hazelrig · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 — Offered callback instead of holding during card search · RC2 — Grocery card buying signal not leveraged before verification</p>
        </div>

      </div>
    </PageShell>
  )
}
