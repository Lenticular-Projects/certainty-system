import { renderToBuffer } from '@react-pdf/renderer'
import { ManagerGuidePdf } from '@/components/pdf/ManagerGuidePdf'

export const dynamic = 'force-dynamic'

export async function GET() {
  const buffer = await renderToBuffer(ManagerGuidePdf())
  const bytes = new Uint8Array(buffer)

  return new Response(bytes, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="sep-manager-training-guide.pdf"',
      'Cache-Control': 'no-store',
    },
  })
}
