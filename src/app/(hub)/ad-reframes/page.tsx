'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from '@carbon/icons-react'
import PageShell from '@/components/layout/PageShell'
import CrossLinks from '@/components/ui/CrossLinks'
import { SPRING, SPRING_FAST, staggerContainer, staggerChild } from '@/lib/motion'
import styles from './page.module.css'

interface FrameCard {
  number: number
  callerPhrase: string
  adImplied: string
  callerBelieves: string
  reframeGoal: string
  objectionId: string
}

const frames: FrameCard[] = [
  {
    number: 1,
    callerPhrase: '"The ad said this wouldn\'t affect / change my plan."',
    adImplied: '"Add this benefit / get this card without losing anything you have."',
    callerBelieves: 'This is additive. Nothing about my coverage moves. I\'ll keep my doctors, my pills, my premium.',
    reframeGoal: 'Replace "change" with "upgrade." Show that what they value (doctors, meds, what works) stays — and the only thing that changes is what gets added to it.',
    objectionId: 'ad-wont-affect-plan',
  },
  {
    number: 2,
    callerPhrase: '"This is just an extra card / extra benefit, right?"',
    adImplied: '"Call to claim this card / benefit / allowance."',
    callerBelieves: 'This card is a separate object — like a coupon or government rebate — that arrives independent of my plan.',
    reframeGoal: 'Don\'t say "actually you have to enroll in a plan." Say: "the card lives inside the right plan — let me make sure the plan you\'re on can deliver it."',
    objectionId: 'ad-extra-card-benefit',
  },
  {
    number: 3,
    callerPhrase: '"The ad said this would only take 2 minutes / 2 questions."',
    adImplied: 'Quick eligibility check. Easy. No commitment.',
    callerBelieves: 'A real conversation about my health, plan, and money is going to feel like a bait-and-switch.',
    reframeGoal: 'Set expectations transparently up front. Earn the time by naming what you\'re protecting them from. Use checkpoints so they never feel trapped.',
    objectionId: 'ad-only-takes-2-minutes',
  },
]

interface SequenceStep {
  number: number
  title: string
  body: string
}

const sequence: SequenceStep[] = [
  {
    number: 1,
    title: 'Validate the belief',
    body: 'Never call the ad a liar. Acknowledge what they thought they were calling about. The caller wants to feel heard — not corrected.',
  },
  {
    number: 2,
    title: 'Anchor reality without contradicting them',
    body: 'Use "yes, and..." — not "no, but..." The ad wasn\'t wrong about the benefit being available. It just didn\'t explain how the benefit gets delivered.',
  },
  {
    number: 3,
    title: 'Replace the frame with a better word',
    body: '"Upgrade" not "change." "Activate" not "enroll." "Protect" not "verify." The word the caller hears decides whether the next sentence works.',
  },
  {
    number: 4,
    title: 'Keep them moving',
    body: 'End every reframe with a forward question, not a pause. "Can I run the comparison for your zip code?" — not "does that make sense?"',
  },
]

const dontDoThis: string[] = [
  'Don\'t say "the commercial is misleading" — you become part of what betrayed them.',
  'Don\'t explain the system before you validate the feeling.',
  'Don\'t read a disclosure script over the reframe — pause the reframe, do the disclosure cleanly, then return.',
  'Don\'t ask permission to continue ("is it okay if I keep going?") — make a statement of value instead.',
  'Don\'t accept "okay just send it to me" as a real ending — that\'s a soft exit, not a decision.',
]

export default function AdReframesPage() {
  return (
    <PageShell signal="neutral">
      {/* Hero */}
      <section className={styles.hero}>
        <motion.h1
          className={`${styles.headline} display-xl`}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.1 }}
        >
          Ad Reframes
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.2 }}
        >
          When the caller already has a story in their head, you don&rsquo;t argue with the ad — you re-narrate it.
        </motion.p>

        <motion.p
          className={styles.intro}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.3 }}
        >
          Medicare ads can claim almost anything. By the time the caller dials, they&rsquo;ve already constructed a story about what they&rsquo;re getting, how long it&rsquo;ll take, and what won&rsquo;t change. Your job is not to call the ad a lie — it&rsquo;s to gently rebuild the frame while keeping the caller feeling heard, respected, and still in motion toward the benefit they actually called for.
        </motion.p>
      </section>

      {/* The Three Frames */}
      <section className={styles.framesSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Section 1</p>
          <h2 className={styles.sectionTitle}>The Three Frames Ads Build</h2>
          <p className={styles.sectionDesc}>
            Three misconceptions that walk into the call before the caller does. Each one needs a different reframe.
          </p>
        </div>

        <motion.div
          className={styles.framesGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {frames.map((frame) => (
            <motion.div key={frame.number} variants={staggerChild}>
              <Link href={`/objections#${frame.objectionId}`} className={styles.cardLink}>
                <motion.div
                  className={`${styles.frameCard} glass`}
                  whileHover={{ y: -4, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={SPRING_FAST}
                >
                  <span className={styles.cardNumber}>Frame {frame.number}</span>
                  <p className={styles.callerQuote}>{frame.callerPhrase}</p>

                  <div className={styles.frameRow}>
                    <p className={styles.rowLabel}>What the ad implied</p>
                    <p className={styles.rowBody}>{frame.adImplied}</p>
                  </div>

                  <div className={styles.frameRow}>
                    <p className={styles.rowLabel}>What the caller believes</p>
                    <p className={styles.rowBody}>{frame.callerBelieves}</p>
                  </div>

                  <div className={styles.frameRow}>
                    <p className={styles.rowLabel}>Your reframe goal</p>
                    <p className={styles.rowBody}>{frame.reframeGoal}</p>
                  </div>

                  <div className={styles.cardFooter}>
                    <span className={styles.cardLinkText}>See full reframe</span>
                    <ArrowRight size={16} className={styles.cardArrow} />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* The Reframe Sequence */}
      <section className={styles.sequenceSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Section 2</p>
          <h2 className={styles.sectionTitle}>The Reframe Sequence</h2>
          <p className={styles.sectionDesc}>
            The order matters. Validate first. Anchor second. Replace the word third. Keep them moving fourth. Skip a step and the call collapses.
          </p>
        </div>

        <motion.div
          className={styles.sequenceGrid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
        >
          {sequence.map((step) => (
            <motion.div key={step.number} variants={staggerChild} className={`${styles.stepCard} glass`}>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* What Not To Do */}
      <section className={styles.dontSection}>
        <div className={styles.sectionHeader}>
          <p className={styles.sectionLabel}>Section 3</p>
          <h2 className={styles.sectionTitle}>What Not To Do</h2>
          <p className={styles.sectionDesc}>
            Pulled directly from calls that lost otherwise-closeable consumers.
          </p>
        </div>

        <motion.ul
          className={styles.dontList}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={SPRING}
        >
          {dontDoThis.map((item, idx) => (
            <li key={idx} className={styles.dontItem}>
              {item}
            </li>
          ))}
        </motion.ul>
      </section>

      {/* Cross links */}
      <section className={styles.crossSection}>
        <CrossLinks
          links={[
            { label: 'Objection Handbook', href: '/objections' },
            { label: 'Failure Patterns', href: '/patterns' },
            { label: 'Human Layer', href: '/human-layer' },
          ]}
        />
      </section>
    </PageShell>
  )
}
