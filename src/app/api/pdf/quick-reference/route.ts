import { renderToBuffer } from '@react-pdf/renderer'
import { QuickReferencePdf } from '@/components/pdf/QuickReferencePdf'

export const dynamic = 'force-dynamic'

export async function GET() {
  const buffer = await renderToBuffer(QuickReferencePdf())
  const bytes = new Uint8Array(buffer)

  return new Response(bytes, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="sep-money-codes-quick-reference.pdf"',
      'Cache-Control': 'no-store',
    },
  })
}
