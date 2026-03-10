'use client'

import { signIn } from 'next-auth/react'

export default function TraineeLogin() {
  return (
    <div
      style={{
        minHeight: 'calc(100vh - 49px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
      }}
    >
      <div
        style={{
          maxWidth: 400,
          width: '100%',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-playfair, Georgia, serif)',
            fontSize: '1.75rem',
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          Trainee Portal
        </h1>
        <p
          style={{
            fontSize: '0.9375rem',
            color: 'var(--ink-60, #666)',
            lineHeight: 1.6,
            marginBottom: 32,
          }}
        >
          Sign in with your Google account to access the training program.
        </p>
        <button
          onClick={() => signIn('google', { callbackUrl: '/trainee' })}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            width: '100%',
            padding: '12px 24px',
            fontSize: '0.9375rem',
            fontWeight: 600,
            fontFamily: 'var(--font-geist, system-ui, sans-serif)',
            background: '#1a1a1a',
            color: '#fff',
            border: 'none',
            borderRadius: 10,
            cursor: 'pointer',
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  )
}
