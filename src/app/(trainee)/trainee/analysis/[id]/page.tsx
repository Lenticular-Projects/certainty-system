import { callRubrics } from '@/lib/trainee/analysis-rubric'
import CallAnalysisForm from '@/components/trainee/CallAnalysisForm'
import { notFound } from 'next/navigation'

interface Props {
  params: { id: string }
}

export function generateStaticParams() {
  return Object.keys(callRubrics).map((id) => ({ id }))
}

export default function AnalysisPage({ params }: Props) {
  const rubric = callRubrics[params.id]

  if (!rubric) {
    notFound()
  }

  return <CallAnalysisForm callId={params.id} rubric={rubric} />
}
