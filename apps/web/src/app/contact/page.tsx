import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ContactForm } from '@/components/forms/ContactForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with ABH Shipping. Our team is available 24/7 for freight inquiries.',
}

const info = [
  { icon: Phone, label: 'Phone', value: '+971 4 200 0000', href: 'tel:+97142000000' },
  { icon: Mail, label: 'Email', value: 'info@abhshipping.com', href: 'mailto:info@abhshipping.com' },
  { icon: MapPin, label: 'Address', value: 'Dubai, United Arab Emirates', href: null },
  { icon: Clock, label: 'Hours', value: 'Sun–Thu 8am–6pm | 24/7 Support Line', href: null },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0a0c10] pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#e8c84a] uppercase tracking-widest mb-3">Get in Touch</p>
            <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-[#f0f2f5]">Contact Us</h1>
            <p className="mt-4 text-[#8892a4]">Our logistics experts are ready to help with your shipping needs.</p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* Info */}
            <div className="lg:col-span-2 space-y-4">
              {info.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 p-5 rounded-2xl bg-[#1c2230] border border-[#2a3347]">
                  <div className="w-10 h-10 rounded-lg bg-[#e8c84a]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[#e8c84a]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#8892a4] mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-[#f0f2f5] font-medium hover:text-[#e8c84a] transition-colors text-sm">{value}</a>
                    ) : (
                      <p className="text-[#f0f2f5] font-medium text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
