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

export default function RickyDeWittCallPage() {
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
          <h1 className={styles.agentName}>Ricky DeWitt</h1>
          <p className={styles.period}>April 14, 2026 · 17:50 · The Benefits Seeker</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(52), fontWeight: 700 }}>52 / 100</span>
            {' · '}INCOMPLETE
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(52) }}>52</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>17:50</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 14, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1.1rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Still active at transcript end</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1 / RC2 / RC3</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Dead air · Missed gold · No math</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>Ricky DeWitt called in specifically for one thing: the grocery allowance card. At 1:25 he told you exactly what he wanted — "Just that grocery card thing." That clarity was your green light and you used it well early on. At 6:18 you asked about chronic conditions, Ricky disclosed four cardiac stents, and at 6:38 you immediately connected the stents to C-SNP eligibility and the $200/month card he came in for. That sequence — screening, identifying, connecting — was fast and correct.</p>
            <p>The call stalled at Phase IV. Dr. Kate Smith at Somerset Family Practice doesn't accept Devoted Health, and from 9:00 to 14:06 you spent five minutes working through the provider portal while Ricky listened. Some of that time included a 90-second sidebar about allergies and voices at 12:25 — dead air at the worst possible moment, right after the doctor network obstacle surfaced. At 14:06 you found Dr. John Thomas Brennan at Somerset Primary Care. Ricky said "I remember him. Yes, yeah." That was your closing line.</p>
            <p>Instead, you continued the NPI lookup. At 16:05 Ricky asked to call back and check on the doctor situation. You told him you'd have to start all over from the beginning. The call was still active at 17:50 mid-comparison — not lost, but not won. The path was clear the entire time. The gap was in the anchor work at two decisive moments.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>Your compliance execution on this call was above the bar. At 0:30 you delivered a complete TPMO disclaimer with the exact count — four organizations, 29 products — plus Medicare.gov, 1-800-MEDICARE, and SHIP. That level of specificity shows you know what you're doing. The pre-enrollment sequence was clean from 0:01 through 4:02: recorded line, TPMO, callback number, decision-maker, nursing home status, SSN, permission to determine eligibility — all in sequence with no gaps.</p>
            <p>The C-SNP identification at 6:38 was expert-level product knowledge. You went beyond standard screening questions to ask directly about chronic conditions, identified four cardiac stents, and instantly connected them to C-SNP eligibility and the exact benefit Ricky called about. That pivot — from screening to plan identification to benefit anchor — happened in under 20 seconds. At 11:50 when you confirmed Somerset Family Practice didn't accept Devoted, you were transparent and direct rather than trying to paper over the obstacle. You gave him two options and he told you he didn't mind switching doctors. That was a clear path forward and you found Dr. Brennan within two minutes.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When Ricky said "I remember him" about Dr. Brennan, stop everything and say: "Ricky, you know Dr. Brennan — that's your doctor right there. Same town, same area, he's accepting new patients. That doctor situation you were worried about? It just solved itself. Let's get your medications added and lock this in for May 1st."</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>At 14:16, Ricky said "I remember him. Yes, yeah." — three words that closed the only open question on this call. His doctor-change anxiety was the one thing standing between him and enrollment. He just told you he already knows the proposed alternative doctor. That fear dissolved in one sentence. The correct response was to stop the NPI lookup, deploy the recognition, and move to medications: "You know Dr. Brennan — that's your guy. Let's add your meds and get you set for May 1st."</p>
            <p>Instead, you moved to the NPI system. The consumer's doctor-change anxiety had no anchor to resolve it, and when the topic came back up at 16:05 he asked to call back. At that point the restart deterrent — "we'll have to start all the way over from the beginning" — created friction rather than confidence. The reframe you needed: "Ricky, you said yourself you know Dr. Brennan. He's in Somerset, he's accepting new patients, and your Humana plan covers you all the way through April 30th. Zero gap. Let's spend three minutes on your medications and you're done."</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 11, max: 20 },
              { cat: 'Signal Reading', score: 12, max: 20 },
              { cat: 'Math Breakdown', score: 8, max: 20 },
              { cat: 'Objection Handling', score: 6, max: 15 },
              { cat: 'Call Outcome Quality', score: 0, max: 10 },
              { cat: 'Compliance', score: 15, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>52 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Ashley Whitehurst · Ricky DeWitt · April 14, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 — Dead Air Navigation · RC2 — Client Gold Not Deployed · RC3 — Math Breakdown Incomplete</p>
        </div>

      </div>
    </PageShell>
  )
}
