import Link from 'next/link'
import { Ship, Mail, Phone, MapPin } from 'lucide-react'

const services = [
  { href: '/services/air-freight', label: 'Air Freight' },
  { href: '/services/sea-freight', label: 'Sea Freight' },
  { href: '/services/land-transport', label: 'Land Transport' },
  { href: '/services/customs', label: 'Customs Clearance' },
  { href: '/services/warehousing', label: 'Warehousing' },
  { href: '/services/project-cargo', label: 'Project Cargo' },
]

const company = [
  { href: '/about', label: 'About Us' },
  { href: '/careers', label: 'Careers' },
  { href: '/blog', label: 'News & Insights' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="bg-[#1c2230] border-t border-[#2a3347]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#e8c84a] flex items-center justify-center">
                <Ship className="w-4 h-4 text-[#0a0c10]" strokeWidth={2.5} />
              </div>
              <span className="font-display font-bold text-xl text-[#f0f2f5]">
                ABH <span className="text-[#e8c84a]">Shipping</span>
              </span>
            </Link>
            <p className="text-sm text-[#8892a4] leading-relaxed mb-6">
              Global freight forwarding and logistics solutions from the UAE to 150+ countries
              worldwide.
            </p>
            <div className="space-y-2.5">
              <a
                href="mailto:info@abhshipping.com"
                className="flex items-center gap-2 text-sm text-[#8892a4] hover:text-[#e8c84a] transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                info@abhshipping.com
              </a>
              <a
                href="tel:+97142000000"
                className="flex items-center gap-2 text-sm text-[#8892a4] hover:text-[#e8c84a] transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                +971 4 200 0000
              </a>
              <div className="flex items-start gap-2 text-sm text-[#8892a4]">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Dubai, United Arab Emirates</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-[#f0f2f5] mb-4">Services</h3>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#8892a4] hover:text-[#e8c84a] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-[#f0f2f5] mb-4">Company</h3>
            <ul className="space-y-2.5">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#8892a4] hover:text-[#e8c84a] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-display font-semibold text-[#f0f2f5] mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/tracking"
                  className="text-sm text-[#8892a4] hover:text-[#e8c84a] transition-colors"
                >
                  Track Shipment
                </Link>
              </li>
              <li>
                <Link
                  href="/quote"
                  className="text-sm text-[#8892a4] hover:text-[#e8c84a] transition-colors"
                >
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-[#8892a4] hover:text-[#e8c84a] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-[#8892a4] hover:text-[#e8c84a] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#2a3347] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#8892a4]">
            © {new Date().getFullYear()} ABH Shipping LLC. All rights reserved.
          </p>
          <p className="text-xs text-[#8892a4]">Licensed by UAE Ministry of Economy</p>
        </div>
      </div>
    </footer>
  )
}
