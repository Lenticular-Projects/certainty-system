import { AmbientProvider } from '@/context/AmbientContext'
import { MotionProvider } from '@/components/layout/MotionProvider'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import './hub.css'

export default function HubLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MotionProvider>
      <AmbientProvider>
        <Nav />
        {children}
        <Footer />
      </AmbientProvider>
    </MotionProvider>
  )
}
