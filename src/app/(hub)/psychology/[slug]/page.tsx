import PsychologyContent from './PsychologyContent'

export function generateStaticParams() {
  return [
    { slug: 'your-brain' },
    { slug: 'their-brain' },
    { slug: 'why-it-works' },
  ]
}

export default function PsychologyPage({ params }: { params: { slug: string } }) {
  return <PsychologyContent slug={params.slug} />
}
