import Nav from '@/components/layout/Nav'
import '../(hub)/hub.css'

export default function AgentsLayout({
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
