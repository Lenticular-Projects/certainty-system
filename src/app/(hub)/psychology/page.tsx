'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from '@carbon/icons-react'
import PageShell from '@/components/layout/PageShell'
import CrossLinks from '@/components/ui/CrossLinks'
import { SPRING, SPRING_FAST, staggerContainer, staggerChild } from '@/lib/motion'
import styles from './page.module.css'

const sections = [
  {
    slug: 'your-brain',
    label: 'Movement 1',
    title: 'Your Brain on a Call',
    description: 'Why you default to logic under pressure. Why you can\u2019t see what the client can\u2019t see. Why your voice tells on you before you finish the sentence.',
  },
  {
    slug: 'their-brain',
    label: 'Movement 2',
    title: 'Their Brain on a Call',
    description: 'What\u2019s actually happening neurologically when a client says \u201CI don\u2019t want to change\u201D or \u201CI need to think about it.\u201D Why fear takes the rational brain offline.',
  },
  {
    slug: 'why-it-works',
    label: 'Movement 3',
    title: 'Why the System Is Built This Way',
    description: 'Every pillar, signal, and protocol maps to a specific psychological mechanism. This section connects them \u2014 component by component, science to system.',
  },
]

function SectionCard({ section }: { section: typeof sections[number] }) {
  return (
    <motion.div variants={staggerChild}>
      <Link href={`/psychology/${section.slug}`} className={styles.cardLink}>
        <motion.div
          className={`${styles.card} glass`}
          whileHover={{ y: -4, scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          transition={SPRING_FAST}
        >
          <span className={styles.sectionLabel}>{section.label}</span>
          <h3 className={styles.cardTitle}>{section.title}</h3>
          <p className={styles.cardDesc}>{section.description}</p>
          <ArrowRight size={16} className={styles.cardArrow} />
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default function PsychologyOverviewPage() {
  return (
    <PageShell signal="neutral">
      {/* Header */}
      <header className={styles.header}>
        <motion.h1
          className={`${styles.headline} display-xl`}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.1 }}
        >
          The Psychology of Certainty
        </motion.h1>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.2 }}
        >
          Why the system works &mdash; at the level of how the human brain actually makes decisions. Every signal, every pillar, every protocol maps to a specific psychological mechanism backed by named research and published studies.
        </motion.p>
      </header>

      {/* Thesis */}
      <motion.div
        className={styles.thesisCard}
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={SPRING}
      >
        <p className={styles.thesisText}>
          The reason connection closes more calls than information is not because connection is a nicer way to sell. It is because information arrives at the rational brain, and the rational brain is not where decisions are made.
        </p>
      </motion.div>

      {/* Section cards */}
      <motion.div
        className={styles.cardsGrid}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
      >
        {sections.map((section) => (
          <SectionCard key={section.slug} section={section} />
        ))}
      </motion.div>

      {/* Cross links */}
      <CrossLinks
        links={[
          { label: 'Four Pillars', href: '/pillars' },
          { label: 'Three Client Signals', href: '/signals' },
          { label: 'Nine Failure Patterns', href: '/patterns' },
          { label: 'Close Confirmation Protocol', href: '/close-confirmation' },
        ]}
      />
    </PageShell>
  )
}
