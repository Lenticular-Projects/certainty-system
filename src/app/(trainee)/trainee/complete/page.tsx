export default function CompletePage() {
  return (
    <div
      style={{
        maxWidth: 640,
        margin: '0 auto',
        padding: '64px 24px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: 'rgba(45, 90, 61, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px',
          fontSize: '2rem',
        }}
      >
        &#10003;
      </div>
      <h1
        style={{
          fontFamily: 'var(--font-playfair, Georgia, serif)',
          fontSize: '1.75rem',
          fontWeight: 700,
          marginBottom: 12,
        }}
      >
        Training Complete
      </h1>
      <p
        style={{
          fontSize: '1rem',
          color: 'var(--ink-60, #666)',
          lineHeight: 1.7,
          marginBottom: 32,
        }}
      >
        You have completed all call analysis exercises. Your manager has been
        notified. You now have access to the full Certainty System Knowledge Hub
        as a reference tool.
      </p>
      <a
        href="/"
        style={{
          display: 'inline-block',
          padding: '12px 32px',
          fontSize: '0.9375rem',
          fontWeight: 600,
          background: '#1a1a1a',
          color: '#fff',
          borderRadius: 10,
        }}
      >
        Open Knowledge Hub
      </a>
    </div>
  )
}
