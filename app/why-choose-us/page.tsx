import type { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { WhyChooseUs } from '@/components/site/why-choose-us'

export const metadata: Metadata = {
  title: 'Why Choose Us',
  description:
    'Discover why parents trust Sravan Home Tuitions — experienced verified tutors, one-to-one learning, flexible timings and affordable fees.',
}

export default function WhyChooseUsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Why Choose Us"
        title="Why parents trust Sravan Home Tuitions"
        description="We combine great tutors with a proven learning system designed to deliver real, measurable results."
      />
      <WhyChooseUs />
    </PageShell>
  )
}
