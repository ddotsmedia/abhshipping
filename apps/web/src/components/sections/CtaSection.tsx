import Link from 'next/link'
import { ArrowRight, MessageSquare } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="py-24 bg-[#1c2230]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl border border-[#e8c84a]/30 bg-[#252d3d] p-10 lg:p-16 overflow-hidden text-center">
          {/* Glow */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 50% 0%, #e8c84a 0%, transparent 60%)',
            }}
          />

          <div className="relative">
            <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-[#f0f2f5] mb-5">
              Ready to Ship?
            </h2>
            <p className="text-[#8892a4] text-lg max-w-lg mx-auto mb-10">
              Get a competitive freight quote in minutes. Our team is ready to handle your
              cargo — no matter the size or destination.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#e8c84a] text-[#0a0c10] font-bold text-base hover:bg-[#f0d46a] transition-colors"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-[#2a3347] text-[#f0f2f5] font-semibold hover:border-[#e8c84a] hover:text-[#e8c84a] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
