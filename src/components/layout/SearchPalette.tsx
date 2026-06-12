'use client'

import { useState, useEffect, useMemo, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Fuse from 'fuse.js'
import { searchIndex, type SearchEntry } from '@/lib/search-index'
import styles from './SearchPalette.module.css'

const MAX_RESULTS = 8

export default function SearchPalette() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const fuse = useMemo(
    () =>
      new Fuse(searchIndex, {
        keys: [
          { name: 'title', weight: 1 },
          { name: 'keywords', weight: 0.8 },
          { name: 'desc', weight: 0.4 },
        ],
        threshold: 0.35,
        ignoreLocation: true,
      }),
    []
  )

  const results: SearchEntry[] = useMemo(() => {
    if (!query.trim()) return searchIndex.filter((e) => e.type === 'page').slice(0, MAX_RESULTS)
    return fuse.search(query).slice(0, MAX_RESULTS).map((r) => r.item)
  }, [query, fuse])

  const close = useCallback(() => {
    setOpen(false)
    setQuery('')
    setSelected(0)
  }, [])

  const go = useCallback(
    (entry: SearchEntry) => {
      close()
      router.push(entry.href)
    },
    [close, router]
  )

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    const onOpenEvent = () => setOpen(true)
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('open-search', onOpenEvent)
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('open-search', onOpenEvent)
    }
  }, [])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  useEffect(() => {
    setSelected(0)
  }, [query])

  if (!open) return null

  return (
    <div className={styles.backdrop} onClick={close}>
      <div
        className={styles.palette}
        role="dialog"
        aria-modal="true"
        aria-label="Search the Certainty System"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === 'Escape') close()
          if (e.key === 'ArrowDown') {
            e.preventDefault()
            setSelected((s) => Math.min(s + 1, results.length - 1))
          }
          if (e.key === 'ArrowUp') {
            e.preventDefault()
            setSelected((s) => Math.max(s - 1, 0))
          }
          if (e.key === 'Enter' && results[selected]) {
            e.preventDefault()
            go(results[selected])
          }
        }}
      >
        <input
          ref={inputRef}
          className={styles.input}
          type="text"
          placeholder="Search pages and objections…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search"
        />
        <ul className={styles.results} role="listbox">
          {results.map((entry, i) => (
            <li key={`${entry.href}-${entry.title}`} role="option" aria-selected={i === selected}>
              <button
                className={`${styles.result} ${i === selected ? styles.resultSelected : ''}`}
                onClick={() => go(entry)}
                onMouseEnter={() => setSelected(i)}
              >
                <span className={styles.resultTitle}>{entry.title}</span>
                <span className={styles.resultMeta}>
                  {entry.type === 'objection' ? `Objection — ${entry.desc}` : entry.desc}
                </span>
              </button>
            </li>
          ))}
          {results.length === 0 && (
            <li className={styles.empty}>No matches — try the client&rsquo;s exact words.</li>
          )}
        </ul>
        <div className={styles.hint}>↑↓ to navigate · Enter to open · Esc to close</div>
      </div>
    </div>
  )
}
