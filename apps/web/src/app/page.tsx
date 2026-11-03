import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { IndustriesSection } from '@/components/sections/IndustriesSection'
import { WhyUsSection } from '@/components/sections/WhyUsSection'
import { CtaSection } from '@/components/sections/CtaSection'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <IndustriesSection />
        <WhyUsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
