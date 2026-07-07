import type { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { Services } from '@/components/site/services'
import { HowItWorks } from '@/components/site/how-it-works'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore our home tutoring services — home tuition, private tutors, one-to-one tutoring, exam preparation, homework help and academic improvement.',
}

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Services"
        title="Complete home tutoring solutions"
        description="From everyday homework help to full exam preparation, we offer the right support for every learning goal."
      />
      <Services />
      <HowItWorks />
    </PageShell>
  )
}
