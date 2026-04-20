import Nav from '@/components/layout/Nav'
import '../(hub)/hub.css'

export default function TeamReportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}
