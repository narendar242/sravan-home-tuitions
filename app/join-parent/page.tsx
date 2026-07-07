import type { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { JoinParentForm } from '@/components/site/join-parent-form'

export const metadata: Metadata = {
  title: 'Join as Parent',
  description:
    'Request a home tutor for your child. Share your requirements and our team will match you with a suitable, verified tutor.',
}

export default function JoinParentPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Join as Parent"
        title="Find the right tutor for your child"
        description="Fill in your details and requirements below. Our team will contact you shortly to match you with a suitable, verified tutor."
      />
      <section className="bg-secondary/40 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <JoinParentForm />
        </div>
      </section>
    </PageShell>
  )
}
