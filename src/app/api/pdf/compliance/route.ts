import { renderToBuffer } from '@react-pdf/renderer'
import { ComplianceSheetPdf } from '@/components/pdf/ComplianceSheetPdf'

export const dynamic = 'force-dynamic'

export async function GET() {
  const buffer = await renderToBuffer(ComplianceSheetPdf())
  const bytes = new Uint8Array(buffer)

  return new Response(bytes, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="sep-compliance-cheat-sheet.pdf"',
      'Cache-Control': 'no-store',
    },
  })
}
