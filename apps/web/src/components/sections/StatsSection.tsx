const stats = [
  { value: '25+', label: 'Years Experience', description: 'Serving clients since 1999' },
  { value: '150+', label: 'Countries Served', description: 'Global network coverage' },
  { value: '50K+', label: 'Shipments Yearly', description: 'Successfully delivered' },
  { value: '99.2%', label: 'On-Time Delivery', description: 'Industry-leading reliability' },
]

export function StatsSection() {
  return (
    <section className="bg-[#1c2230] border-y border-[#2a3347] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl lg:text-5xl font-extrabold text-[#e8c84a] mb-1">
                {stat.value}
              </div>
              <div className="font-semibold text-[#f0f2f5] mb-1">{stat.label}</div>
              <div className="text-sm text-[#8892a4]">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
