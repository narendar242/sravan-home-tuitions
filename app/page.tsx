import { Navbar } from '@/components/site/navbar'
import { Hero } from '@/components/site/hero'
import { About } from '@/components/site/about'
import { WhyChooseUs } from '@/components/site/why-choose-us'
import { Services } from '@/components/site/services'
import { Curriculum } from '@/components/site/curriculum'
import { Areas } from '@/components/site/areas'
import { HowItWorks } from '@/components/site/how-it-works'
import { Testimonials } from '@/components/site/testimonials'
import { Faq } from '@/components/site/faq'
import { Contact } from '@/components/site/contact'
import { MapSection } from '@/components/site/map-section'
import { Footer } from '@/components/site/footer'
import { FloatingButtons } from '@/components/site/floating-buttons'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Services />
        <Curriculum />
        <Areas />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <Contact />
        <MapSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  )
}
