import Link from 'next/link'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <main className={styles.wrap}>
      <p className={styles.eyebrow}>404 — Page not found</p>
      <h1 className={styles.title}>That page isn&rsquo;t in the system.</h1>
      <p className={styles.body}>
        The link may be outdated, or the address has a typo. Everything you
        need is still one click away.
      </p>
      <div className={styles.links}>
        <Link href="/" className={styles.primary}>Back to the Hub</Link>
        <Link href="/objections" className={styles.secondary}>Objection Handbook</Link>
        <Link href="/sep-check" className={styles.secondary}>SEP Check</Link>
      </div>
    </main>
  )
}
