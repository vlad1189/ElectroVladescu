import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { InteractivePanelSection } from "@/components/sections/interactive-panel-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { ReviewsSection } from "@/components/sections/reviews-section"
import { FacebookSection } from "@/components/sections/facebook-section"
import { WhyChooseSection } from "@/components/sections/why-choose-section"
import { CalculatorSection } from "@/components/sections/calculator-section"
import { ContactSection } from "@/components/sections/contact-section"
import { FooterSection } from "@/components/sections/footer-section"
import { FloatingElements } from "@/components/floating-elements"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <ReviewsSection />
        <FacebookSection />
        <WhyChooseSection />
        <ContactSection />
      </main>
      <FooterSection />
      <FloatingElements />
    </>
  )
}
