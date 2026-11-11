import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0c10] flex items-center justify-center px-6">
        <div className="text-center">
          <p className="font-display text-8xl font-extrabold text-[#e8c84a] opacity-30">404</p>
          <h1 className="font-display text-3xl font-extrabold text-[#f0f2f5] mt-2 mb-4">Page Not Found</h1>
          <p className="text-[#8892a4] mb-8">This shipment seems to have gone off-route.</p>
          <Link href="/" className="px-6 py-3 rounded-xl bg-[#e8c84a] text-[#0a0c10] font-semibold hover:bg-[#f0d46a] transition-colors">
            Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
