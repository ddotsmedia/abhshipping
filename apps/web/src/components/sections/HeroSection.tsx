'use client'

import Link from 'next/link'
import { ArrowRight, Search } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function HeroSection() {
  const [trackingNumber, setTrackingNumber] = useState('')
  const router = useRouter()

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    if (trackingNumber.trim()) {
      router.push(`/tracking?q=${encodeURIComponent(trackingNumber.trim())}`)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0c10]">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(42,51,71,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(42,51,71,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gold glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, #e8c84a 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#2a3347] bg-[#1c2230] text-sm text-[#8892a4] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#3ddc84] animate-pulse" />
            25+ years of global freight expertise
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#f0f2f5] leading-[1.05] mb-6">
            Ship Anything,{' '}
            <span className="text-[#e8c84a]">Anywhere</span>{' '}
            in the World
          </h1>

          <p className="text-lg text-[#8892a4] leading-relaxed mb-10 max-w-xl">
            ABH Shipping delivers end-to-end freight solutions — air, sea, land, and customs
            clearance — across 150+ countries with real-time cargo tracking.
          </p>

          {/* Tracking widget */}
          <form onSubmit={handleTrack} className="flex gap-2 mb-8 max-w-xl">
            <div className="flex-1 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8892a4]" />
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter tracking number…"
                className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-[#1c2230] border border-[#2a3347] text-[#f0f2f5] placeholder:text-[#8892a4] focus:outline-none focus:border-[#e8c84a] text-sm transition-colors"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-3.5 rounded-xl bg-[#e8c84a] text-[#0a0c10] font-semibold text-sm hover:bg-[#f0d46a] transition-colors whitespace-nowrap"
            >
              Track
            </button>
          </form>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#e8c84a] text-[#0a0c10] font-semibold hover:bg-[#f0d46a] transition-colors"
            >
              Get Instant Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-[#2a3347] text-[#f0f2f5] font-semibold hover:border-[#e8c84a] hover:text-[#e8c84a] transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
