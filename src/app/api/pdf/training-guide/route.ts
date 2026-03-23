import { renderToBuffer } from '@react-pdf/renderer'
import { TrainingGuidePdf } from '@/components/pdf/TrainingGuidePdf'

export const dynamic = 'force-dynamic'

export async function GET() {
  const buffer = await renderToBuffer(TrainingGuidePdf())
  const bytes = new Uint8Array(buffer)

  return new Response(bytes, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="sep-training-guide.pdf"',
      'Cache-Control': 'no-store',
    },
  })
}
