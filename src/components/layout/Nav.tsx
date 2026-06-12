'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, Close, Search } from '@carbon/icons-react'
import { motion, AnimatePresence } from 'framer-motion'
import { SPRING_FAST, EASE_SPRING } from '@/lib/motion'
import styles from './Nav.module.css'

const philosophyLinks = [
  { label: 'Human Layer',        href: '/human-layer',        desc: 'The psychology of why people buy' },
  { label: 'Call Types',         href: '/call-types',         desc: 'Know your caller before they speak' },
  { label: 'Signals',            href: '/signals',            desc: 'Read red, yellow, green in seconds' },
  { label: 'Pillars',            href: '/pillars',            desc: 'The three foundations of every close' },
  { label: 'Patterns',           href: '/patterns',           desc: 'Train your pattern recognition for calls' },
  { label: 'Ad Reframes',        href: '/ad-reframes',        desc: 'Re-narrate the ad — don\'t argue with it' },
  { label: 'Storytelling',       href: '/storytelling',       desc: 'Move people with narrative' },
  { label: 'Math Breakdown',     href: '/math-breakdown',     desc: 'Numbers that make Medicare simple' },
  { label: 'Psychology',         href: '/psychology',         desc: 'Why agents succeed or fail' },
  { label: 'Close Confirmation', href: '/close-confirmation', desc: 'Lock in the yes' },
]

const toolLinks = [
  { label: 'Objection Handbook',   href: '/objections',           desc: "Scripts for every objection you'll face" },
  { label: 'SEP Check',            href: '/sep-check',            desc: 'Real-time eligibility verification' },
  { label: 'SEP Guides',           href: '/sep',                  desc: 'All 37 codes organized by category' },
  { label: 'C-SNP Playbook',       href: '/csnp',                 desc: 'The year-round sales opportunity in Medicare' },
  { label: 'Compliance Sheet',     href: '/sep-compliance',       desc: 'What gets agents flagged, suspended, or terminated' },
  { label: 'How Calls Are Graded', href: '/how-calls-are-graded', desc: 'The scoring system explained' },
  { label: 'Medicare 101',         href: '/medicare-101',         desc: 'The essential knowledge baseline' },
]

export default function Nav() {
  const pathname = usePathname()
  const [philosophyOpen, setPhilosophyOpen] = useState(false)
  const [toolOpen, setToolOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setPhilosophyOpen(false)
        setToolOpen(false)
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const philosophyActive = philosophyLinks.some((l) => pathname.startsWith(l.href))
  const toolActive = toolLinks.some((l) => pathname.startsWith(l.href))

  const openPhilosophy = () => { setPhilosophyOpen(true); setToolOpen(false) }
  const openTool = () => { setToolOpen(true); setPhilosophyOpen(false) }

  return (
    <motion.nav
      aria-label="Main"
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={SPRING_FAST}
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.wordmark}>
          The Certainty System
        </Link>

        <div className={styles.desktopLinks}>
          {/* Philosophy dropdown */}
          <div
            className={styles.moreWrapper}
            onMouseEnter={openPhilosophy}
            onMouseLeave={() => setPhilosophyOpen(false)}
          >
            <button
              className={`${styles.link} ${styles.moreBtn} ${philosophyActive ? styles.active : ''}`}
              onClick={() => philosophyOpen ? setPhilosophyOpen(false) : openPhilosophy()}
              aria-expanded={philosophyOpen}
              aria-haspopup="menu"
            >
              Philosophy
              <motion.span animate={{ rotate: philosophyOpen ? 180 : 0 }} transition={SPRING_FAST} style={{ display: 'inline-flex' }}>
                <ChevronDown size={14} />
              </motion.span>
            </button>
            <AnimatePresence>
              {philosophyOpen && (
                <motion.div
                  className={styles.dropdown}
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={SPRING_FAST}
                >
                  {philosophyLinks.map((link) => (
                    <Link key={link.href} href={link.href}
                      className={`${styles.dropdownLink} ${pathname.startsWith(link.href) ? styles.active : ''}`}
                      aria-current={pathname.startsWith(link.href) ? 'page' : undefined}
                      onClick={() => setPhilosophyOpen(false)}
                    >
                      <span className={styles.dropdownLinkTitle}>{link.label}</span>
                      <span className={styles.dropdownLinkDesc}>{link.desc}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/objections" aria-current={pathname.startsWith('/objections') ? 'page' : undefined} className={`${styles.link} ${styles.directLink} ${pathname.startsWith('/objections') ? styles.active : ''}`}>
            Objection Handbook
          </Link>
          <Link href="/sep-check" aria-current={pathname.startsWith('/sep-check') ? 'page' : undefined} className={`${styles.link} ${styles.directLink} ${pathname.startsWith('/sep-check') ? styles.active : ''}`}>
            SEP Check
          </Link>

          {/* Tools dropdown */}
          <div
            className={styles.moreWrapper}
            onMouseEnter={openTool}
            onMouseLeave={() => setToolOpen(false)}
          >
            <button
              className={`${styles.link} ${styles.moreBtn} ${toolActive ? styles.active : ''}`}
              onClick={() => toolOpen ? setToolOpen(false) : openTool()}
              aria-expanded={toolOpen}
              aria-haspopup="menu"
            >
              Tools
              <motion.span animate={{ rotate: toolOpen ? 180 : 0 }} transition={SPRING_FAST} style={{ display: 'inline-flex' }}>
                <ChevronDown size={14} />
              </motion.span>
            </button>
            <AnimatePresence>
              {toolOpen && (
                <motion.div
                  className={styles.dropdown}
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={SPRING_FAST}
                >
                  {toolLinks.map((link) => (
                    <Link key={link.href} href={link.href}
                      className={`${styles.dropdownLink} ${pathname.startsWith(link.href) ? styles.active : ''}`}
                      aria-current={pathname.startsWith(link.href) ? 'page' : undefined}
                      onClick={() => setToolOpen(false)}
                    >
                      <span className={styles.dropdownLinkTitle}>{link.label}</span>
                      <span className={styles.dropdownLinkDesc}>{link.desc}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <button
          className={styles.searchBtn}
          onClick={() => window.dispatchEvent(new Event('open-search'))}
          aria-label="Search (Ctrl+K)"
          title="Search (Ctrl+K)"
        >
          <Search size={16} />
          <span className={styles.searchHint}>⌘K</span>
        </button>

        <button className={styles.hamburger} onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'}>
          {mobileOpen ? <Close size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: EASE_SPRING }}
            style={{ overflow: 'hidden' }}
          >
            <div className={styles.mobileSectionHeader}>Philosophy</div>
            {philosophyLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className={`${styles.mobileLink} ${pathname.startsWith(link.href) ? styles.active : ''}`}
                aria-current={pathname.startsWith(link.href) ? 'page' : undefined}
                onClick={() => setMobileOpen(false)}
              >{link.label}</Link>
            ))}
            <div className={styles.mobileSectionHeader}>Tools</div>
            {toolLinks.map((link) => (
              <Link key={link.href} href={link.href}
                className={`${styles.mobileLink} ${pathname.startsWith(link.href) ? styles.active : ''}`}
                aria-current={pathname.startsWith(link.href) ? 'page' : undefined}
                onClick={() => setMobileOpen(false)}
              >{link.label}</Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
