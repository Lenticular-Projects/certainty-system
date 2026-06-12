// Smoke check: builds must already exist (`npm run build`). Starts the
// production server, asserts every top-level route responds 200, exits 1 on
// any failure. Run via `npm run smoke`.
import { spawn } from 'node:child_process'

const PORT = process.env.SMOKE_PORT || 4321
const ROUTES = [
  '/',
  '/ad-reframes',
  '/blocked',
  '/call-types',
  '/close-confirmation',
  '/csnp',
  '/how-calls-are-graded',
  '/how-objections-are-graded',
  '/human-layer',
  '/math-breakdown',
  '/medicare-101',
  '/objections',
  '/patterns',
  '/pillars',
  '/psychology',
  '/sep',
  '/sep-check',
  '/sep-compliance',
  '/sep/quick-reference',
  '/signals',
  '/storytelling',
]

const server = spawn('npx', ['next', 'start', '-p', String(PORT)], {
  stdio: ['ignore', 'pipe', 'inherit'],
  // ALLOWED_IPS + forced x-forwarded-for below let requests through the IP
  // middleware without touching the real allowlist.
  env: { ...process.env, NODE_ENV: 'production', ALLOWED_IPS: '127.0.0.1' },
})

const waitForReady = new Promise((resolve, reject) => {
  const timer = setTimeout(() => reject(new Error('server did not start within 30s')), 30000)
  server.stdout.on('data', (chunk) => {
    process.stdout.write(chunk)
    if (String(chunk).includes('Ready')) {
      clearTimeout(timer)
      resolve()
    }
  })
  server.on('exit', (code) => reject(new Error(`server exited early (${code})`)))
})

let failures = 0
try {
  await waitForReady
  for (const route of ROUTES) {
    const res = await fetch(`http://localhost:${PORT}${route}`, {
      redirect: 'manual',
      headers: { 'x-forwarded-for': '127.0.0.1' },
    })
    const ok = res.status === 200
    if (!ok) failures++
    console.log(`${ok ? 'PASS' : 'FAIL'} ${res.status} ${route}`)
  }
} catch (err) {
  console.error(err.message)
  failures++
} finally {
  server.kill()
}

console.log(failures === 0 ? `\nSmoke: all ${ROUTES.length} routes OK` : `\nSmoke: ${failures} FAILURE(S)`)
process.exit(failures === 0 ? 0 : 1)
