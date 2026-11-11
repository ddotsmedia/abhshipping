import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { CtaSection } from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Air freight, sea freight, land transport, customs clearance, warehousing and project cargo by ABH Shipping.',
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0a0c10] pt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 text-center">
          <p className="text-sm font-semibold text-[#e8c84a] uppercase tracking-widest mb-3">What We Do</p>
          <h1 className="font-display text-5xl font-extrabold text-[#f0f2f5]">Our Services</h1>
          <p className="mt-4 text-[#8892a4] max-w-xl mx-auto">End-to-end freight solutions for businesses of every size, to every corner of the world.</p>
        </div>
        <ServicesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
