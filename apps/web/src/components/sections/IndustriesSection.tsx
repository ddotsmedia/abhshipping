const industries = [
  'Automotive',
  'Pharmaceuticals',
  'Oil & Gas',
  'Fashion & Retail',
  'Electronics',
  'Food & Perishables',
  'Construction',
  'E-Commerce',
]

export function IndustriesSection() {
  return (
    <section className="py-20 bg-[#1c2230] border-y border-[#2a3347]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-[#e8c84a] uppercase tracking-widest mb-3">
            Industries
          </p>
          <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-[#f0f2f5]">
            Serving Every Sector
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="px-5 py-2.5 rounded-full border border-[#2a3347] bg-[#252d3d] text-[#f0f2f5] text-sm font-medium hover:border-[#e8c84a] hover:text-[#e8c84a] transition-colors cursor-default"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
