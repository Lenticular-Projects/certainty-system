import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { traineeName, traineeEmail } = await request.json()

    const resendKey = process.env.RESEND_API_KEY
    const managerEmail = process.env.MANAGER_EMAIL

    if (!resendKey || !managerEmail) {
      console.log('Notification skipped — RESEND_API_KEY or MANAGER_EMAIL not set')
      return NextResponse.json({ message: 'Notification skipped' })
    }

    // Dynamic import to avoid issues when resend isn't configured
    const { Resend } = await import('resend')
    const resend = new Resend(resendKey)

    await resend.emails.send({
      from: 'Certainty System <training@updates.thecertaintysystem.com>',
      to: managerEmail,
      subject: `Training Complete: ${traineeName}`,
      text: `${traineeName} (${traineeEmail}) has completed all call analysis exercises in the Certainty System Training Portal.`,
    })

    return NextResponse.json({ message: 'Notification sent' })
  } catch (error) {
    console.error('Notification error:', error)
    return NextResponse.json(
      { error: 'Failed to send notification' },
      { status: 500 }
    )
  }
}
