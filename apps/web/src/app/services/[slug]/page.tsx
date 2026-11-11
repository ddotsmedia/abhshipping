import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { CtaSection } from '@/components/sections/CtaSection'
import { Plane, Ship, Truck, FileCheck, Warehouse, Package, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const services = {
  'air-freight': {
    icon: Plane,
    title: 'Air Freight',
    headline: 'Fast, Reliable Air Cargo Worldwide',
    description: 'When speed matters, our air freight solutions deliver. We offer express, standard, and charter options across all major global airports with full door-to-door service.',
    features: ['Express next-day delivery options', 'Door-to-door service', 'Dangerous goods handling (IATA certified)', 'Temperature-controlled cargo', 'Real-time tracking', 'Charter and groupage solutions'],
  },
  'sea-freight': {
    icon: Ship,
    title: 'Sea Freight',
    headline: 'FCL & LCL Ocean Freight at Competitive Rates',
    description: 'Our sea freight department handles full container loads (FCL) and less-than-container loads (LCL) on all major trade lanes, with competitive rates and reliable transit times.',
    features: ['FCL and LCL shipments', 'Major trade lanes from Jebel Ali', 'RO-RO vehicle shipping', 'Refrigerated container (reefer) cargo', 'Breakbulk and project cargo', 'Port-to-port and door-to-door'],
  },
  'land-transport': {
    icon: Truck,
    title: 'Land Transport',
    headline: 'GCC & Middle East Road Freight',
    description: 'Reliable road freight across the UAE, Saudi Arabia, Oman, Kuwait, Bahrain, and Qatar. Temperature-controlled trucks and flatbed options available for all cargo types.',
    features: ['Full GCC coverage', 'FTL and LTL loads', 'Temperature-controlled vehicles', 'Flatbed and curtainsider trailers', 'Overnight express lanes', 'GPS-tracked fleet'],
  },
  'customs': {
    icon: FileCheck,
    title: 'Customs Clearance',
    headline: 'Expert UAE Customs Brokerage',
    description: 'Our licensed customs brokers ensure smooth, compliant import and export clearance at all UAE ports and free zones, minimising delays and duties where possible.',
    features: ['Import and export declarations', 'All UAE ports and free zones', 'Duty optimisation advice', 'HS code classification', 'ATA Carnet handling', 'Compliance documentation'],
  },
  'warehousing': {
    icon: Warehouse,
    title: 'Warehousing',
    headline: 'Secure Dubai Warehousing & Distribution',
    description: 'Modern, secure warehousing in Dubai with integrated inventory management, pick-and-pack services, and last-mile distribution across the UAE.',
    features: ['100,000+ sq ft Dubai warehouse', 'WMS inventory system', 'Pick, pack and dispatch', 'Cross-docking', 'Value-added services', 'E-commerce fulfilment'],
  },
  'project-cargo': {
    icon: Package,
    title: 'Project Cargo',
    headline: 'Oversized, Heavy Lift & High-Value Cargo',
    description: 'Specialist project cargo logistics for oversized equipment, industrial machinery, oil & gas components, and high-value shipments requiring custom handling plans.',
    features: ['Out-of-gauge cargo planning', 'Heavy lift equipment', 'Multi-modal routing', 'Site surveys and feasibility', 'Marine insurance', 'Oil & gas and construction expertise'],
  },
}

type Slug = keyof typeof services

export async function generateStaticParams() {
  return Object.keys(services).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const s = services[slug as Slug]
  if (!s) return {}
  return { title: s.title, description: s.description }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const s = services[slug as Slug]
  if (!s) notFound()
  const Icon = s.icon

  return (
    <>
      <Header />
      <main className="bg-[#0a0c10]">
        <section className="pt-32 pb-20 px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 text-sm text-[#8892a4] mb-6">
            <Link href="/services" className="hover:text-[#e8c84a] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-[#f0f2f5]">{s.title}</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#e8c84a]/10 flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-[#e8c84a]" />
              </div>
              <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-[#f0f2f5] mb-5">{s.headline}</h1>
              <p className="text-[#8892a4] leading-relaxed mb-8">{s.description}</p>
              <Link href="/quote" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#e8c84a] text-[#0a0c10] font-semibold hover:bg-[#f0d46a] transition-colors">
                Get a Quote
              </Link>
            </div>
            <div className="rounded-2xl bg-[#1c2230] border border-[#2a3347] p-7">
              <h2 className="font-display font-bold text-[#f0f2f5] mb-5">What's Included</h2>
              <ul className="space-y-3">
                {s.features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-[#f0f2f5]">
                    <CheckCircle2 className="w-4 h-4 text-[#3ddc84] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
