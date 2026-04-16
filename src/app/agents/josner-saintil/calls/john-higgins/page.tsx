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

export default function JohnHigginsCallPage() {
  return (
    <PageShell signal="green">
      <div className={styles.page}>

        <motion.div className={styles.header} {...SPRING}>
          <div className={styles.headerMeta}>
            <span className={styles.systemLabel}>The Certainty System</span>
            <span className={styles.dot}>·</span>
            <span className={styles.systemLabel}>Call Report</span>
            <span className={styles.dot}>·</span>
            <Link href="/agents/josner-saintil" className={styles.systemLabel} style={{ textDecoration: 'underline', cursor: 'pointer' }}>
              Josner Saintil
            </Link>
          </div>
          <h1 className={styles.agentName}>John Higgins</h1>
          <p className={styles.period}>April 15, 2026 · 14:31 · Salisbury, NC</p>
          <p className={styles.updatedAt}>
            <span style={{ color: scoreColor(48), fontWeight: 700 }}>48 / 100</span>
            {' · '}Incomplete · Phone failure mid-discovery — callback required
          </p>
        </motion.div>

        <motion.div className={styles.scorecardRow} {...SPRING}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: scoreColor(48) }}>48</span>
            <span className={styles.scoreLabel}>Certainty Score</span>
            <span className={styles.scoreRange}>Out of 100</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue}>14:31</span>
            <span className={styles.scoreLabel}>Duration</span>
            <span className={styles.scoreRange}>April 15, 2026</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--mustard-dark)', fontSize: '1.1rem' }}>INCOMPLETE</span>
            <span className={styles.scoreLabel}>Outcome</span>
            <span className={styles.scoreRange}>Phone failure at 10:54</span>
          </div>
          <div className={styles.scoreCard}>
            <span className={styles.scoreValue} style={{ color: 'var(--terracotta)', fontSize: '1rem' }}>RC2 · RC6</span>
            <span className={styles.scoreLabel}>Root Cause</span>
            <span className={styles.scoreRange}>Client Gold + SEP missed</span>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What Happened</h2>
          <div className={styles.summaryCard}>
            <p>John Higgins is a 69-year-old Salisbury, NC resident with prostate cancer, five active specialists, monthly IV infusions for bone density, and both Medicaid and Medicare — putting him on a D-SNP already through Devoted Health. He called specifically about the $144 Part B give-back. That is a pre-sold, pre-qualified, emotionally motivated lead who walked in ready to talk.</p>
            <p>You opened clean. Compliance was sharp. You confirmed his ZIP, delivered the TPMO disclaimer at 1:11, confirmed his callback number at 2:07, and moved methodically through qualification — Medicare card, VA/Tricare, name, DOB, address. You even picked up that he had recently moved addresses (1837 Woodbridge Drive) at 6:21, and that he had both Medicaid and Medicare at 7:37. You asked about chronic conditions and learned about the prostate cancer and monthly IV infusions at 9:03. All of that was solid discovery work.</p>
            <p>Then the phone fell apart. From 10:54 onward the call degraded — John couldn&apos;t hear you, and you handled it calmly. The callback proposal at 13:35 was the right call: &ldquo;Let me hang up and call you back to see if the call quality improves.&rdquo; John agreed. The problem is that none of those signals — the cancer, the dual eligibility, the address change — were connected to anything before the phone failed. You had the gold in hand and the call ended before you could use it. The callback is where this lead either gets saved or lost.</p>
          </div>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>What You Did Well</h2>
          <div className={styles.summaryCard}>
            <p><strong>Compliance was spotless (1:11):</strong> TPMO disclaimer delivered correctly with the four-organization, 47-product disclosure. Decision-maker status confirmed, nursing home status confirmed, VA/Tricare question asked. You ran the full Phase I protocol without a gap. That is the baseline every call needs.</p>
            <p><strong>You stayed composed when the phone broke down (13:35):</strong> When the connection degraded, you didn&apos;t panic. You apologized without losing authority, kept the consumer calm, and proposed the callback in a way that John accepted immediately. Handling an unpredictable operational problem without losing your footing is a real skill — you showed it here.</p>
            <p><strong>Medical discovery initiative (8:55):</strong> You proactively asked about chronic conditions and ongoing treatments, and followed up on the specifics — how often the IV, how often the bone shot. The instinct to go deeper on medical complexity is right. The gap was in what to do with what you learned, not in the asking.</p>
          </div>
        </motion.div>

        <motion.div className={styles.oneThing} {...SPRING}>
          <span className={styles.oneThingLabel}>The One Thing</span>
          <p className={styles.oneThingText}>When you call John back: open with the cancer, not the give-back. &ldquo;Mr. Higgins, before I show you the give-back numbers, I want to make sure your oncology team is covered on whatever we pick. Who is your oncologist and where do you get your infusions done?&rdquo; That one question builds more trust than everything else you could say combined.</p>
        </motion.div>

        <motion.div className={styles.section} {...SPRING}>
          <h2 className={styles.sectionTitle}>The Moment That Decided This Call</h2>
          <div className={styles.summaryCard}>
            <p><strong>9:03 — &ldquo;Yeah, I&apos;ve got prostate cancer.&rdquo;</strong></p>
            <p>John disclosed active prostate cancer with monthly IV infusions. This is the most powerful piece of information on this call — and you acknowledged it and moved on. Your response at 9:13 was &ldquo;And they&apos;re keeping you under control, you&apos;re getting the other mission?&rdquo; and at 9:19: &ldquo;you should be fine on that end if they&apos;re monitoring it.&rdquo; That is normalizing a cancer diagnosis on a Medicare call. It&apos;s not wrong to say, but it leaves the gold on the table.</p>
            <p>What John actually told you is: <em>his oncology team is mission-critical to his daily life</em>. Every plan recommendation you make for this consumer must center on whether that oncology team stays covered. That one connection — from diagnosis to network coverage — is what turns a benefits call into a trust conversation. The correct response at 9:03: &ldquo;John, prostate cancer with monthly infusions — your oncology team is the most important thing we&apos;re protecting here. Before we talk give-back dollars, I need to confirm your cancer doctors are in-network on any plan I recommend. Can you tell me who your oncologist is?&rdquo;</p>
            <p>On the callback, this is your opening move. Not the give-back math — the cancer coverage check. That is the sentence that makes John feel like you are different from every other agent he has ever talked to.</p>
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
              { cat: 'Signal Reading', score: 6, max: 20 },
              { cat: 'Math Breakdown', score: 0, max: 20 },
              { cat: 'Objection Handling', score: 9, max: 15 },
              { cat: 'Call Outcome Quality', score: 6, max: 10 },
              { cat: 'Compliance', score: 15, max: 15 },
            ].map((row, i) => (
              <div key={i} className={styles.callRow}>
                <span className={styles.consumerName}>{row.cat}</span>
                <span className={styles.callScore} style={{ color: scoreColor(Math.round((row.score / row.max) * 100)) }}>{row.score}</span>
                <span className={styles.callMeta}>{row.max}</span>
              </div>
            ))}
            <div className={styles.callTableFooter}><span>Total: <strong>48 / 100</strong></span></div>
          </div>
        </motion.div>

        <div className={styles.footer}>
          <p>The Certainty System · Josner Saintil · John Higgins · April 15, 2026</p>
          <p style={{ marginTop: 4, opacity: 0.5 }}>RC2 · RC6 · D-SNP · CSN SEP · MOV SEP · Prostate Cancer · Salisbury NC</p>
        </div>

      </div>
    </PageShell>
  )
}
