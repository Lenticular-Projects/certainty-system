import Nav from '@/components/layout/Nav'
import '../(hub)/hub.css'

export default function DailyBriefLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      {children}
    </>
  )
}
