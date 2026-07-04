import { Quote, Star } from 'lucide-react'
import { ScrollReveal } from './scroll-reveal'
import { SectionHeading } from './section-heading'

const TESTIMONIALS = [
  {
    name: 'M Parameshwar',
    role: 'Parent · Class 8, CBSE',
    quote:
      'I recently hired a home tutor for 8th grade CBSE Maths and Science. I got a very good tutor, Mr. Venkatesh, here.',
    initials: 'MP',
  },
  {
    name: 'Belle Yadagiri',
    role: 'Parent · Nursery',
    quote:
      'I appreciate the efforts of the tutor. They mainly focus on concepts and syllabus. My small brother, who is in nursery, has improved a lot. The tutor has so much patience. Thanks to Sravan Home Tuitions.',
    initials: 'BY',
  },
  {
    name: 'Vishnu Shanigarapu',
    role: 'Parent',
    quote:
      'Good tutoring services with experienced and friendly home tutors. Thanks to Sravan Home Tuitions platform for sending an experienced tutor for my child.',
    initials: 'VS',
  },
  {
    name: 'Srikanth',
    role: 'Parent',
    quote:
      'We are happy with the tutor provided. My child is improving in studies.',
    initials: 'SK',
  },
  {
    name: 'Chiruk',
    role: 'Parent',
    quote:
      'Tutoring services are very good and prices are affordable for home tutors, and the tutors are qualified. I strongly recommend this platform for your children.',
    initials: 'CK',
  },
  {
    name: 'K Vishnuvardhan',
    role: 'Parent',
    quote:
      'Tutoring services are very good — we get good tutors from this platform. My child improved a lot after getting a tutor from Sravan Home Tuitions. The prices are affordable when compared to other tuition consultants. Thank you, Sravan sir.',
    initials: 'KV',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-20 bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What parents say about us"
          description="Real feedback from families whose children learn with Sravan Home Tuitions."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal
              key={t.name}
              delay={(i % 3) * 100}
              className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5"
            >
              <Quote className="size-8 text-gold" />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">“{t.quote}”</p>
              <div className="mt-5 flex items-center gap-1 text-gold" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-current" />
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                <span className="flex size-11 items-center justify-center rounded-full bg-brand font-semibold text-brand-foreground">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
