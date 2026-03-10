import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { db } from '@/lib/db'
import { traineeProfiles } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'

export async function POST(request: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { accessCode } = await request.json()

  const validCodes = (process.env.TRAINEE_ACCESS_CODES ?? '')
    .split(',')
    .map((c) => c.trim())
    .filter(Boolean)

  if (!validCodes.includes(accessCode)) {
    return NextResponse.json({ error: 'Invalid access code' }, { status: 400 })
  }

  // Check if already registered
  const existing = await db
    .select()
    .from(traineeProfiles)
    .where(eq(traineeProfiles.userId, session.user.id))
    .limit(1)

  if (existing.length > 0) {
    return NextResponse.json({ message: 'Already registered' })
  }

  await db.insert(traineeProfiles).values({
    userId: session.user.id,
    accessCode,
    displayName: session.user.name ?? 'Trainee',
  })

  return NextResponse.json({ message: 'Registered' })
}
