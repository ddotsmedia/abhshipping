import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { QuoteForm } from '@/components/forms/QuoteForm'

export const metadata: Metadata = {
  title: 'Get a Quote',
  description: 'Request a freight quote from ABH Shipping. Air, sea, land and customs clearance across 150+ countries.',
}

export default function QuotePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0c10] pt-24 pb-20">
        <div className="max-w-2xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-[#e8c84a] uppercase tracking-widest mb-3">Free Quote</p>
            <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-[#f0f2f5]">Get an Instant Quote</h1>
            <p className="mt-4 text-[#8892a4]">Fill in the details below and we'll respond within 2 business hours.</p>
          </div>
          <QuoteForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
