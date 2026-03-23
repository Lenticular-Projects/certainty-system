'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from '@carbon/icons-react'
import PageShell from '@/components/layout/PageShell'
import CrossLinks from '@/components/ui/CrossLinks'
import { SPRING, SPRING_FAST, staggerContainer, staggerChild } from '@/lib/motion'
import styles from './page.module.css'

const categories = [
  {
    slug: 'new-to-medicare',
    label: 'Category 1',
    title: 'New to Medicare',
    description: 'IEP, IEP2, ICEP, OEP-N, RET \u2014 the five codes that start every Medicare journey.',
    codes: 5,
  },
  {
    slug: 'financial-eligibility',
    label: 'Category 2',
    title: 'Financial Eligibility',
    description: 'INT, DEP, MCD, NLS \u2014 Medicaid and Extra Help SEPs. The highest-volume codes on inbound calls.',
    codes: 4,
  },
  {
    slug: 'location-life-change',
    label: 'Category 3',
    title: 'Location & Life Changes',
    description: 'MOV, INC, RUS, LAW \u2014 triggered by where they live, where they came from, their legal status.',
    codes: 4,
  },
  {
    slug: 'chronic-special-needs',
    label: 'Category 4',
    title: 'Chronic & Special Needs',
    description: 'CSN, PAP, PAC, SNP \u2014 the biggest off-season enrollment opportunity in Medicare.',
    codes: 4,
  },
  {
    slug: 'institutionalized-ltc',
    label: 'Category 5',
    title: 'Institutionalized & LTC',
    description: 'OEP-I, LTC \u2014 two codes, one rule: MA/MAPD vs PDP.',
    codes: 2,
  },
  {
    slug: 'involuntary-disenrollment',
    label: 'Category 6',
    title: 'Involuntary Disenrollment',
    description: 'LCC, INV, REC, EOC, MYT \u2014 when the beneficiary loses coverage through no fault of their own.',
    codes: 5,
  },
  {
    slug: 'voluntary-changes',
    label: 'Category 7',
    title: 'Voluntary Changes',
    description: 'LEC, OSD, 12G, 12J, CDC, DIF, ACC \u2014 triggered by the beneficiary\u2019s own actions.',
    codes: 7,
  },
  {
    slug: 'star-ratings',
    label: 'Category 8',
    title: 'Star Ratings',
    description: '5ST, LPI \u2014 one rewards quality, the other protects from it.',
    codes: 2,
  },
  {
    slug: 'disaster-extension',
    label: 'Category 9',
    title: 'Disaster Extension',
    description: 'DST \u2014 the most misunderstood and most watched SEP code in the system.',
    codes: 1,
  },
  {
    slug: 'election-periods',
    label: 'Category 10',
    title: 'Election Periods',
    description: 'AEP, OEP, SEP Season \u2014 the annual calendar every SEP lives inside.',
    codes: 3,
  },
]

function CategoryCard({ category }: { category: typeof categories[number] }) {
  return (
    <motion.div variants={staggerChild}>
      <Link href={`/sep/${category.slug}`} className={styles.cardLink}>
        <motion.div
          className={`${styles.card} glass`}
          whileHover={{ y: -4, scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          transition={SPRING_FAST}
        >
          <div className={styles.cardHeader}>
            <span className={styles.sectionLabel}>{category.label}</span>
            <span className={styles.codeBadge}>
              {category.codes} {category.codes === 1 ? 'code' : 'codes'}
            </span>
          </div>
          <h3 className={styles.cardTitle}>{category.title}</h3>
          <p className={styles.cardDesc}>{category.description}</p>
          <ArrowRight size={16} className={styles.cardArrow} />
        </motion.div>
      </Link>
    </motion.div>
  )
}

export default function SepGuidesPage() {
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
          The SEP Guides
        </motion.h1>
        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...SPRING, delay: 0.2 }}
        >
          Deep-dive training on every Special Enrollment Period category. Learn the codes, understand the triggers, master the talk tracks &mdash; and know which SEP to use before the client finishes their sentence.
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
          Every enrollment outside of AEP requires an SEP. The agents who know all 37 codes work year-round. The ones who don&rsquo;t sit idle for six months.
        </p>
      </motion.div>

      {/* Resources card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={SPRING}
        style={{ marginBottom: 'var(--space-8)' }}
      >
        <Link href="/sep/quick-reference" className={styles.cardLink}>
          <motion.div
            className={`${styles.card} glass`}
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            transition={SPRING_FAST}
            style={{ borderLeft: '4px solid var(--sage-dark)' }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.sectionLabel}>Quick Reference</span>
              <span className={styles.codeBadge}>Money Codes</span>
            </div>
            <h3 className={styles.cardTitle}>The Money Codes</h3>
            <p className={styles.cardDesc}>
              The codes that make you money during SEP season. Trigger phrases, time windows, confusion killers &mdash; everything you need on a single page during a live call.
            </p>
            <ArrowRight size={16} className={styles.cardArrow} />
          </motion.div>
        </Link>
      </motion.div>

      {/* Category cards */}
      <motion.div
        className={styles.cardsGrid}
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-40px' }}
      >
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </motion.div>

      {/* Cross links */}
      <CrossLinks
        links={[
          { label: 'Money Codes', href: '/sep/quick-reference' },
          { label: 'SEP Check Tool', href: '/sep-check' },
          { label: 'Compliance Cheat Sheet', href: '/sep-compliance' },
          { label: 'Objections', href: '/objections' },
        ]}
      />
    </PageShell>
  )
}
