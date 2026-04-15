import '../(trainee)/trainee.css'
import Link from 'next/link'

const HUB_REFS = [
  { label: '← Home', href: '/' },
  { label: 'Human Layer', href: '/human-layer' },
  { label: 'Call Types', href: '/call-types' },
  { label: 'Signals', href: '/signals' },
  { label: 'Pillars', href: '/pillars' },
  { label: 'Math Breakdown', href: '/math-breakdown' },
  { label: 'Objections', href: '/objections' },
  { label: 'Patterns', href: '/patterns' },
  { label: 'Storytelling', href: '/storytelling' },
  { label: 'Close Confirmation', href: '/close-confirmation' },
]

const AGENTS = [
  { label: 'Marcus Hughes', href: '/agents/marcus-hughes' },
  { label: 'Robert Pegler', href: '/agents/robert-pegler' },
  { label: 'Tavares Smith', href: '/agents/tavares-smith' },
  { label: 'Rosina Klimoski', href: '/agents/rosina-klimoski' },
  { label: 'Monique Williams', href: '/agents/monique-williams' },
  { label: 'Alicia Moore Williams', href: '/agents/alicia-moore-williams' },
  { label: 'Manuel Medrano', href: '/agents/manuel-medrano' },
]

export default function AgentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* ── Primary Header ── */}
      <header className="traineeHeader">
        <div className="traineeHeaderInner">
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span className="traineeHeaderLogo">The Certainty System</span>
          </Link>
          <span className="traineeHeaderLabel">Agent Portal</span>
        </div>
      </header>

      {/* ── Knowledge Hub Reference Bar ── */}
      <nav className="refBar" aria-label="Knowledge Hub Reference">
        <div className="refBarInner">
          <span className="refBarPrefix">Reference</span>
          <div className="refBarLinks">
            {HUB_REFS.map((ref) => (
              <a
                key={ref.href}
                href={ref.href}
                target={ref.href === '/' ? undefined : '_blank'}
                rel={ref.href === '/' ? undefined : 'noopener noreferrer'}
                className="refBarLink"
              >
                {ref.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Agents Bar ── */}
      <nav className="refBar" aria-label="Agents" style={{ borderTop: '1px solid rgba(19,17,16,0.05)' }}>
        <div className="refBarInner">
          <span className="refBarPrefix">Agents</span>
          <div className="refBarLinks">
            {AGENTS.map((agent) => (
              <a
                key={agent.href}
                href={agent.href}
                className="refBarLink"
              >
                {agent.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {children}
    </>
  )
}
