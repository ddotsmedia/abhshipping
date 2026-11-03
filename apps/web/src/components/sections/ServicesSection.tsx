import Link from 'next/link'
import { Plane, Ship, Truck, FileCheck, Warehouse, Package, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Plane,
    title: 'Air Freight',
    description:
      'Express and standard air cargo solutions with door-to-door delivery across all major global airports.',
    href: '/services/air-freight',
  },
  {
    icon: Ship,
    title: 'Sea Freight',
    description:
      'FCL and LCL ocean freight with competitive rates and reliable transit times on major trade lanes.',
    href: '/services/sea-freight',
  },
  {
    icon: Truck,
    title: 'Land Transport',
    description:
      'Regional road freight across the GCC and Middle East with temperature-controlled options available.',
    href: '/services/land-transport',
  },
  {
    icon: FileCheck,
    title: 'Customs Clearance',
    description:
      'Expert customs brokerage ensuring smooth import and export compliance at all UAE entry points.',
    href: '/services/customs',
  },
  {
    icon: Warehouse,
    title: 'Warehousing',
    description:
      'Secure, modern warehousing in Dubai with inventory management, pick-and-pack, and distribution.',
    href: '/services/warehousing',
  },
  {
    icon: Package,
    title: 'Project Cargo',
    description:
      'Specialized handling for oversized, heavy lift, and high-value cargo requiring custom logistics planning.',
    href: '/services/project-cargo',
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-[#e8c84a] uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-[#f0f2f5]">
            End-to-End Freight Solutions
          </h2>
          <p className="mt-4 text-[#8892a4] max-w-xl mx-auto">
            From a single parcel to complex supply chains, we have the expertise and network to
            deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.href}
                href={service.href}
                className="group relative p-7 rounded-2xl bg-[#1c2230] border border-[#2a3347] hover:border-[#e8c84a]/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-11 h-11 rounded-xl bg-[#252d3d] flex items-center justify-center mb-5 group-hover:bg-[#e8c84a]/10 transition-colors">
                  <Icon className="w-5 h-5 text-[#e8c84a]" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#f0f2f5] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#8892a4] leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="flex items-center gap-1.5 text-sm font-semibold text-[#e8c84a] opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
