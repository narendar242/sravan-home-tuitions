import type { Metadata } from 'next'
import { PageShell } from '@/components/site/page-shell'
import { PageHero } from '@/components/site/page-hero'
import { JoinTutorForm } from '@/components/site/join-tutor-form'

export const metadata: Metadata = {
  title: 'Join as Tutor',
  description:
    'Register as a home tutor with Sravan Home Tuitions. Share your qualifications and experience to get matched with students near you.',
}

export default function JoinTutorPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Join as Tutor"
        title="Become a home tutor with us"
        description="Register your profile below. Our team will review your details and contact you if you are shortlisted for teaching opportunities."
      />
      <section className="bg-secondary/40 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <JoinTutorForm />
        </div>
      </section>
    </PageShell>
  )
}
