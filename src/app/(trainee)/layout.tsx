import './trainee.css'

const HUB_REFS = [
  { label: 'Human Layer', href: '/human-layer' },
  { label: 'Call Types', href: '/call-types' },
  { label: 'Signals', href: '/signals' },
  { label: 'Pillars', href: '/pillars' },
  { label: 'Storytelling', href: '/storytelling' },
  { label: 'Math Breakdown', href: '/math-breakdown' },
  { label: 'Patterns', href: '/patterns' },
  { label: 'Objections', href: '/objections' },
  { label: 'Close Confirmation', href: '/close-confirmation' },
]

export default function TraineeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* ── Primary Header ── */}
      <header className="traineeHeader">
        <div className="traineeHeaderInner">
          <span className="traineeHeaderLogo">
            The Certainty System
          </span>
          <span className="traineeHeaderLabel">Training Portal</span>
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
                target="_blank"
                rel="noopener noreferrer"
                className="refBarLink"
              >
                {ref.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {children}
    </>
  )
}
