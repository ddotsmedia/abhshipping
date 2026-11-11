import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Shield, Globe2, Award, Users } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'ABH Shipping — 25+ years of global freight forwarding expertise from Dubai, UAE.',
}

const values = [
  { icon: Shield, title: 'Reliability', description: '99.2% on-time delivery rate built over 25 years of consistent service.' },
  { icon: Globe2, title: 'Global Reach', description: 'Direct partnerships with 500+ agents across 150+ countries worldwide.' },
  { icon: Award, title: 'Compliance', description: 'Fully licensed UAE freight forwarder, FIATA member, IATA accredited.' },
  { icon: Users, title: 'People First', description: 'Dedicated account managers — no call centers, real relationships.' },
]

const milestones = [
  { year: '1999', event: 'Founded in Dubai with a focus on UAE–India trade lanes' },
  { year: '2005', event: 'Expanded to full GCC road freight coverage' },
  { year: '2010', event: 'Opened dedicated sea freight department; FCL/LCL capability' },
  { year: '2015', event: 'Achieved IATA accreditation for air cargo handling' },
  { year: '2020', event: 'Launched 24/7 digital cargo tracking platform' },
  { year: '2024', event: 'Surpassed 50,000 annual shipments; 150+ country network' },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-[#0a0c10]">
        {/* Hero */}
        <section className="pt-32 pb-20 px-6 lg:px-8 max-w-6xl mx-auto">
          <p className="text-sm font-semibold text-[#e8c84a] uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="font-display text-5xl lg:text-6xl font-extrabold text-[#f0f2f5] max-w-2xl">
            Moving the World from Dubai Since 1999
          </h1>
          <p className="mt-6 text-[#8892a4] text-lg max-w-xl leading-relaxed">
            ABH Shipping was founded with a single mission: make international freight simple, transparent, and reliable for UAE businesses. Twenty-five years later, we're one of the region's most trusted freight forwarders.
          </p>
          <Link href="/quote" className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#e8c84a] text-[#0a0c10] font-semibold hover:bg-[#f0d46a] transition-colors">
            Work with Us
          </Link>
        </section>

        {/* Values */}
        <section className="py-20 bg-[#1c2230] border-y border-[#2a3347]">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <h2 className="font-display text-3xl font-extrabold text-[#f0f2f5] mb-10 text-center">Our Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ icon: Icon, title, description }) => (
                <div key={title} className="p-6 rounded-2xl bg-[#252d3d] border border-[#2a3347]">
                  <div className="w-10 h-10 rounded-lg bg-[#e8c84a]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#e8c84a]" />
                  </div>
                  <h3 className="font-display font-bold text-[#f0f2f5] mb-2">{title}</h3>
                  <p className="text-sm text-[#8892a4] leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-display text-3xl font-extrabold text-[#f0f2f5] mb-10 text-center">25 Years of Growth</h2>
          <ol className="relative border-l border-[#2a3347] ml-4 space-y-8">
            {milestones.map(({ year, event }) => (
              <li key={year} className="ml-6">
                <span className="absolute -left-2.5 w-5 h-5 rounded-full bg-[#e8c84a] flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-[#0a0c10]" />
                </span>
                <span className="text-xs font-bold text-[#e8c84a] uppercase tracking-widest">{year}</span>
                <p className="mt-1 text-[#f0f2f5] text-sm">{event}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>
      <Footer />
    </>
  )
}
