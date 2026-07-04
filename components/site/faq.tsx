'use client'

import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ScrollReveal } from './scroll-reveal'
import { SectionHeading } from './section-heading'

const FAQS = [
  {
    q: 'Which areas do you provide home tuition in?',
    a: 'We provide home tuition across Attapur and nearby areas including Karwan, Hyderguda, Mehdipatnam, Rajendranagar, Langar Houz, Manikonda, Narsingi and Budwel in Hyderabad.',
  },
  {
    q: 'Are your tutors verified and experienced?',
    a: 'Yes. Every tutor is background-checked and verified, and we match you with experienced tutors who specialise in the required subject, class and board.',
  },
  {
    q: 'Which boards and classes do you cover?',
    a: 'We cover CBSE, ICSE, State Board, IB and IGCSE for all classes from LKG and UKG through Classes 1–10, Intermediate and Degree level.',
  },
  {
    q: 'Do you offer a free demo class?',
    a: 'Yes, we offer a free demo class so you can experience our teaching quality and decide with confidence before continuing.',
  },
  {
    q: 'How are the tuition fees decided?',
    a: 'Fees depend on the class, subjects and number of sessions per week. Our pricing is transparent and affordable with no hidden charges — call us for a custom quote.',
  },
  {
    q: 'Can I choose the timings for the classes?',
    a: 'Absolutely. We offer flexible timings and work around your family’s schedule, including evenings and weekends where available.',
  },
  {
    q: 'What if we are not satisfied with the tutor?',
    a: 'Your satisfaction matters most. If a tutor is not the right fit, simply let us know and we will reassign a more suitable tutor promptly.',
  },
  {
    q: 'How do I get started?',
    a: 'Just call or WhatsApp us at +91 63022 67422, share your requirement, and we will assign the best tutor and begin classes at your home.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
      >
        <span className="text-base font-semibold text-brand">{q}</span>
        <span
          className={cn(
            'inline-flex size-8 shrink-0 items-center justify-center rounded-full transition-colors',
            open ? 'bg-brand text-brand-foreground' : 'bg-secondary text-brand',
          )}
        >
          {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
        </span>
      </button>
      <div
        className={cn(
          'grid transition-all duration-300 ease-out',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  )
}

export function Faq() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <section id="faq" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about our home tuition services."
          className="mx-auto"
        />

        <div className="mt-12 flex flex-col gap-4">
          {FAQS.map((faq, i) => (
            <ScrollReveal key={faq.q} delay={(i % 4) * 60}>
              <FaqItem q={faq.q} a={faq.a} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
