'use client'

import { useState, useMemo, useRef, useEffect } from 'react'
import Fuse from 'fuse.js'
import { Search, Close, ArrowRight } from '@carbon/icons-react'
import { motion } from 'framer-motion'
import { SPRING } from '@/lib/motion'
import PageShell from '@/components/layout/PageShell'
import ExpandCollapse from '@/components/ui/ExpandCollapse'
import CrossLinks from '@/components/ui/CrossLinks'
import { objections, sections } from '@/lib/objections-data'

const sectionDescriptions: Record<string, string> = {
  'All': 'Every objection across all categories. Use search to find what you just heard.',
  'Fear of Change & Switching': 'The client is protecting what they have. Fear drives the words, not logic.',
  'Commercial & Benefit': 'They called about a benefit they saw advertised. Motivated — but often misinformed about how it works.',
  'Ad-Driven Misconceptions': 'Caller already has a story from the ad. Reframe the belief — don\'t correct it.',
  'Stall': 'Not saying no — not saying yes. They\'re buying time.',
  'Network & Coverage': 'Doctor, hospital, and provider network concerns.',
  'Loyalty': 'They have a relationship — with their plan, their agent, or their carrier.',
  'Timing': 'Not now. Call me back. I need more time.',
  'Benefit & Plan Comparison': 'Side-by-side plan comparisons and specific benefit questions.',
  'Trust & Credibility': 'They don\'t believe you, the company, or the process yet.',
  'Fear of Losing Existing Benefits': 'Doctor coverage, VA benefits, Medicaid — they don\'t want to lose what they already have.',
  'Financial': 'The numbers don\'t feel worth it — or the cost feels too risky.',
  'Family & Third Party': 'Someone else needs to be involved before they can decide.',
  'Resistance at Close': 'Final resistance at the exact moment of commitment.',
}
import styles from './page.module.css'

export default function ObjectionsPage() {
  const [query, setQuery] = useState('')
  const [activeTab, setActiveTab] = useState('All')
  const [browseExpanded, setBrowseExpanded] = useState(false)
  const [browseVersion, setBrowseVersion] = useState(0)
  const searchRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Seed from ?q= so the global search palette can deep-link an entry
    const q = new URLSearchParams(window.location.search).get('q')
    if (q) setQuery(q)
    searchRef.current?.focus()
  }, [])

  useEffect(() => {
    setBrowseExpanded(false)
    setBrowseVersion(0)
  }, [activeTab])

  const fuse = useMemo(
    () =>
      new Fuse(objections, {
        keys: [
          { name: 'clientPhrase', weight: 1 },
          { name: 'tags', weight: 0.8 },
          { name: 'underneath', weight: 0.4 },
          { name: 'responses.text', weight: 0.6 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
      }),
    []
  )

  const isSearching = query.trim().length > 0

  const searchResults = useMemo(() => {
    if (!isSearching) return []
    const results = fuse.search(query).map((r) => r.item)
    if (activeTab !== 'All') {
      return results.filter((o) => o.section === activeTab)
    }
    return results
  }, [query, fuse, isSearching, activeTab])

  const browseResults = useMemo(() => {
    if (activeTab === 'All') return objections
    return objections.filter((o) => o.section === activeTab)
  }, [activeTab])

  return (
    <PageShell signal="neutral">
      <motion.h1
        className="display-xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={SPRING}
      >
        Objection Handbook
      </motion.h1>

      <motion.p
        className={`body-lg ${styles.intro}`}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...SPRING, delay: 0.1 }}
      >
        When a client says something that stops the call, find it here. Every entry is organized by what the client said. Look up the words you just heard. Deploy the response.
      </motion.p>

      {/* Search bar */}
      <motion.div
        className={styles.searchWrapper}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...SPRING, delay: 0.15 }}
      >
        <Search size={20} className={styles.searchIcon} />
        <input
          ref={searchRef}
          type="text"
          className={styles.searchInput}
          placeholder="Search by what the client said..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button
            className={styles.clearBtn}
            onClick={() => setQuery('')}
            aria-label="Clear search"
          >
            <Close size={20} />
          </button>
        )}
      </motion.div>

      {/* Inline search results — between search bar and category tabs */}
      {isSearching && (
        <div className={styles.searchResults}>
          <p className={styles.count}>
            {searchResults.length} {searchResults.length === 1 ? 'objection' : 'objections'} matching &ldquo;{query}&rdquo;
            {activeTab !== 'All' && ` in ${activeTab}`}
          </p>
          <div className={styles.cards}>
            {searchResults.map((obj) => (
              <ExpandCollapse
                key={obj.id + '-search'}
                defaultExpanded={true}
                clientPhrase={obj.clientPhrase}
                underneath={obj.underneath}
                doNotSay={obj.doNotSay}
                responses={obj.responses}
                pillar={obj.pillar}
                signal={obj.signal}
              />
            ))}
            {searchResults.length === 0 && (
              <div className={styles.empty}>
                <p>No objections found. Try different words.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Filter cards */}
      <div className={styles.tabs}>
        {sections.map((section, i) => (
          <motion.button
            key={section}
            className={`${styles.tab} ${activeTab === section ? styles.tabActive : ''}`}
            onClick={() => setActiveTab(section)}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...SPRING, delay: 0.2 + i * 0.04 }}
          >
            <h3 className={styles.tabHeading}>{section}</h3>
            <p className={styles.tabDesc}>{sectionDescriptions[section]}</p>
            <ArrowRight size={16} className={styles.tabArrow} />
          </motion.button>
        ))}
      </div>

      {/* Browse list — hidden while searching */}
      {!isSearching && (
        <>
          <div className={styles.browseHeader}>
            <p className={styles.count}>
              {browseResults.length} {browseResults.length === 1 ? 'objection' : 'objections'}
              {activeTab !== 'All' && ` in ${activeTab}`}
              {' · '}{browseResults.reduce((sum, o) => sum + o.responses.length, 0)} rebuttals
            </p>
            <button
              className={styles.expandAllBtn}
              onClick={() => {
                setBrowseExpanded(!browseExpanded)
                setBrowseVersion(v => v + 1)
              }}
            >
              {browseExpanded ? 'Collapse all' : 'Expand all'}
            </button>
          </div>

          <div className={styles.cards}>
            {browseResults.map((obj) => (
              <ExpandCollapse
                key={obj.id + '-' + browseVersion}
                defaultExpanded={browseExpanded}
                clientPhrase={obj.clientPhrase}
                underneath={obj.underneath}
                doNotSay={obj.doNotSay}
                responses={obj.responses}
                pillar={obj.pillar}
                signal={obj.signal}
              />
            ))}
          </div>
        </>
      )}

      <CrossLinks links={[
        { label: 'Four Pillars', href: '/pillars' },
        { label: 'Three Client Signals', href: '/signals' },
        { label: '9 Call Types', href: '/call-types' },
        { label: 'Storytelling', href: '/storytelling' },
      ]} />
    </PageShell>
  )
}
