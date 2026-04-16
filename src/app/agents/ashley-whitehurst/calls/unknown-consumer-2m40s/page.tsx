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

export default function UnknownConsumer2m40sCallPage() {
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
          <h1 className={styles.agentName}>Unknown Consumer</h1>
          <p className={styles.period}>April 15, 2026 · 2:40 · The Money Caller</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(42), fontWeight: 700 }}>42 / 100</span>
            {' · '}INCOMPLETE
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(42) }}>42</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>2:40</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1.1rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>SSN refused — polite exit</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC1</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>No trust bridge before verification</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>The consumer called in specifically for the OTC allowance card — "The cash, well I can go shopping" at 0:57. That's a HOT buying signal in the first minute. You confirmed zip code 44115 (Cleveland), delivered the full TPMO disclaimer cleanly at 0:24, confirmed the callback number at 1:20, and got the healthcare decision-maker verification at 1:26. The compliance sequence was clean and fast. When the consumer mentioned the allowance card you immediately connected it to Medicare Advantage at 1:02 — the right product education in one sentence.</p>
            <p>At 1:33 you asked for the Medicare card. The consumer said they didn't have it. At 1:40 you went straight to SSN: "Okay, so the only other way to pull you up would be by your social. Is that okay with you?" The consumer said "yeah" — then immediately walked it back: "I really don't like getting out my social." At 1:55 your response was "That's why I just asked you if it would be okay with you, sir" — technically true, slightly defensive. At 2:04 you introduced the Medicare ID as the alternative but framed it as a constraint: "There's only two ways that we're able to pull you up in the system." The consumer apologized and left. The call was 2:40.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p>Your TPMO compliance opener was one of your cleaner executions — four organizations, 41 products, Medicare.gov, 1-800-MEDICARE — delivered accurately and without rushing at 0:24. The callback number and decision-maker verification at 1:20 were done even as the call was heading toward a short exit, which takes discipline. Most agents skip those on a 2-minute call. You didn't. And at 1:02 when the consumer described wanting a shopping card, you connected it to Medicare Advantage in one sentence without overcomplicating it. That's the right instinct every time.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When a consumer says "I really don't like getting out my social," the first words out of your mouth are: "That's exactly the right instinct — and the Medicare card is actually the safer option. It's the long number on the front of your red, white, and blue card. Is there any chance you have that nearby? We can skip the social entirely."</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p>The call turned at 1:40 when you framed SSN as the primary option rather than offering the Medicare card first. "So the only other way to pull you up would be by your social" made SSN feel like the default and the Medicare card like a fallback. The sequence should always be: Medicare card first (less threatening, consumers are more willing), SSN as backup. Leading with the less scary option changes the whole dynamic of that exchange.</p>
            <p>When the consumer pushed back at 1:49, the door wasn't locked — their exit line was "I'm sorry to bother you," which is a polite apology, not a hostile slam. The consumer didn't want to hang up; they wanted to feel safe. A validation-first response — "I hear you, and that tells me you're careful about your information, which is smart" — followed by the Medicare card as the better option would have kept them on the line. The federal-compliance framing at 2:08 ("It is a federally regulated system") felt institutional and cold when the consumer needed warmth and a solution.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>Score Breakdown</h2>
          <div className={styles.callTable}>
            <div className={styles.callTableHeader}>
              <span>Category</span><span>Score</span><span>Max</span>
            </div>
            {[
              { cat: 'Lead Quality', score: 10, max: 20 },
              { cat: 'Signal Reading', score: 5, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 7, max: 15 },
              { cat: 'Call Outcome Quality', score: 5, max: 10 },
              { cat: 'Compliance', score: 15, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>42 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Ashley Whitehurst · Unknown Consumer (2:40) · April 15, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC1 — No Trust Bridge Before Verification · ZIP 44115 Cleveland OH</p>
        </div>

      </div>
    </PageShell>
  )
}
