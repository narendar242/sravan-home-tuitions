import type { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { Faq } from '@/components/site/faq'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about our home tuition services, tutors, boards, timings and fees.',
}

export default function FaqPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Everything you need to know about our home tuition services."
      />
      <Faq />
    </PageShell>
  )
}
