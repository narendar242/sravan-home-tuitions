import type { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { Contact } from '@/components/site/contact'
import { MapSection } from '@/components/site/map-section'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Sravan Home Tuitions. Call, WhatsApp or send a message to book a free demo class.',
}

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with us"
        description="Reach out and we’ll match your child with the perfect tutor. Call, WhatsApp or send us a message."
      />
      <Contact />
      <MapSection />
    </PageShell>
  )
}
