import {
  Award,
  BadgeCheck,
  BrainCircuit,
  CalendarClock,
  ClipboardCheck,
  IndianRupee,
  UserRound,
  Users,
} from 'lucide-react'
import { ScrollReveal } from './scroll-reveal'
import { SectionHeading } from './section-heading'

const FEATURES = [
  {
    icon: Award,
    title: 'Experienced Tutors',
    desc: 'Skilled tutors with a proven track record of improving student results.',
  },
  {
    icon: BadgeCheck,
    title: 'Verified Tutors',
    desc: 'Every tutor is background-checked and verified for your peace of mind.',
  },
  {
    icon: UserRound,
    title: 'One-to-One Learning',
    desc: 'Focused individual attention tailored to each student’s pace.',
  },
  {
    icon: CalendarClock,
    title: 'Flexible Timings',
    desc: 'Schedule classes at times that fit your family’s daily routine.',
  },
  {
    icon: IndianRupee,
    title: 'Affordable Fees',
    desc: 'Transparent and reasonable pricing with no hidden charges.',
  },
  {
    icon: BrainCircuit,
    title: 'Concept-Based Learning',
    desc: 'We build strong fundamentals, not just rote memorization.',
  },
  {
    icon: ClipboardCheck,
    title: 'Regular Assessments',
    desc: 'Periodic tests and reports to track consistent progress.',
  },
  {
    icon: Users,
    title: 'Personalized Attention',
    desc: 'Lesson plans customized to each student’s strengths and needs.',
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="scroll-mt-20 bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why parents trust Sravan Home Tuitions"
          description="We combine great tutors with a proven learning system designed to deliver real, measurable results."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <ScrollReveal
              key={feature.title}
              delay={(i % 4) * 80}
              className="group h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-xl hover:shadow-brand/5"
            >
              <span className="mb-4 inline-flex size-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                <feature.icon className="size-6" />
              </span>
              <h3 className="mb-1.5 text-lg font-semibold text-brand">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
