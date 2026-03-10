'use client'

import Link from 'next/link'
import { callRubrics } from '@/lib/trainee/analysis-rubric'

const calls = [
  { id: 'call-1', ...callRubrics['call-1'], unlocked: true },
  { id: 'call-2', ...callRubrics['call-2'], unlocked: false },
  { id: 'call-3', ...callRubrics['call-3'], unlocked: false },
]

export default function TraineeDashboard() {
  return (
    <div
      style={{
        maxWidth: 640,
        margin: '0 auto',
        padding: '48px 24px',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-playfair, Georgia, serif)',
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: 8,
        }}
      >
        Training Dashboard
      </h1>
      <p
        style={{
          fontSize: '0.9375rem',
          color: 'var(--ink-60, #666)',
          lineHeight: 1.6,
          marginBottom: 32,
        }}
      >
        Listen to each call, analyze it using the Certainty System framework, and pass the AI evaluation to unlock the next.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {calls.map((call) => {
          const isReady = call.unlocked && call.agentName !== 'TBD'
          return (
            <div
              key={call.id}
              style={{
                padding: '20px 24px',
                background: call.unlocked ? '#fff' : '#f5f4f2',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: 12,
                opacity: call.unlocked ? 1 : 0.5,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 4,
                }}
              >
                <span
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: call.unlocked ? '#2D5A3D' : '#C8C4BD',
                  }}
                >
                  {call.id.replace('call-', 'Call ')}
                </span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--ink-20, #aaa)',
                  }}
                >
                  {call.duration}
                </span>
              </div>
              <div style={{ fontSize: '1.0625rem', fontWeight: 700, marginBottom: 4 }}>
                {call.title}
              </div>
              <div
                style={{
                  fontSize: '0.8125rem',
                  color: 'var(--ink-60, #666)',
                  marginBottom: 12,
                }}
              >
                Agent: {call.agentName}
              </div>
              {isReady ? (
                <Link
                  href={`/trainee/analysis/${call.id}`}
                  style={{
                    display: 'inline-block',
                    padding: '8px 20px',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    background: '#1a1a1a',
                    color: '#fff',
                    borderRadius: 8,
                  }}
                >
                  Start Analysis
                </Link>
              ) : (
                <span
                  style={{
                    display: 'inline-block',
                    padding: '8px 20px',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    background: '#e8e6e3',
                    color: '#999',
                    borderRadius: 8,
                  }}
                >
                  {call.unlocked ? 'Coming Soon' : 'Locked'}
                </span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
