import SepCategoryContent from './SepCategoryContent'

export function generateStaticParams() {
  return [
    { slug: 'new-to-medicare' },
    { slug: 'financial-eligibility' },
    { slug: 'location-life-change' },
    { slug: 'chronic-special-needs' },
    { slug: 'institutionalized-ltc' },
    { slug: 'involuntary-disenrollment' },
    { slug: 'voluntary-changes' },
    { slug: 'star-ratings' },
    { slug: 'disaster-extension' },
    { slug: 'election-periods' },
  ]
}

export default async function SepCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <SepCategoryContent slug={slug} />
}
