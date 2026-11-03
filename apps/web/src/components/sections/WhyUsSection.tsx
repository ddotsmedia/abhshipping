import { Shield, Clock, Globe2, Headphones } from 'lucide-react'

const reasons = [
  {
    icon: Globe2,
    title: 'Global Network',
    description:
      'Partnerships with 500+ agents and carriers worldwide ensuring competitive rates and reliable routes.',
  },
  {
    icon: Clock,
    title: 'Real-Time Tracking',
    description:
      'Track your cargo 24/7 with live status updates, estimated delivery times, and proactive notifications.',
  },
  {
    icon: Shield,
    title: 'Fully Insured',
    description:
      'Comprehensive cargo insurance options to protect your shipments against loss or damage in transit.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description:
      'Dedicated account managers and round-the-clock customer support in Arabic and English.',
  },
]

export function WhyUsSection() {
  return (
    <section className="py-24 bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-sm font-semibold text-[#e8c84a] uppercase tracking-widest mb-3">
              Why ABH
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-extrabold text-[#f0f2f5] mb-6">
              The Partner You Can Count On
            </h2>
            <p className="text-[#8892a4] leading-relaxed">
              Since 1999, ABH Shipping has been the trusted logistics partner for hundreds of UAE
              businesses. We combine deep regional expertise with a global network to move your
              cargo faster, safer, and smarter.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason) => {
              const Icon = reason.icon
              return (
                <div
                  key={reason.title}
                  className="p-6 rounded-2xl bg-[#1c2230] border border-[#2a3347]"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#e8c84a]/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#e8c84a]" />
                  </div>
                  <h3 className="font-display font-bold text-[#f0f2f5] mb-2">{reason.title}</h3>
                  <p className="text-sm text-[#8892a4] leading-relaxed">{reason.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
