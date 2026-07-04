import {
  BookOpenCheck,
  GraduationCap,
  Home,
  PencilRuler,
  TrendingUp,
  UserRound,
} from 'lucide-react'
import { ScrollReveal } from './scroll-reveal'
import { SectionHeading } from './section-heading'

const SERVICES = [
  {
    icon: Home,
    title: 'Home Tuition',
    desc: 'Qualified tutors who teach at your home, saving travel time and boosting focus.',
  },
  {
    icon: UserRound,
    title: 'Private Tutors',
    desc: 'Dedicated private tutors matched to your child’s subject and grade needs.',
  },
  {
    icon: GraduationCap,
    title: 'One-to-One Tutoring',
    desc: 'Undivided attention with lesson plans built around each student.',
  },
  {
    icon: BookOpenCheck,
    title: 'Exam Preparation',
    desc: 'Structured revision, mock tests and strategy for board and competitive exams.',
  },
  {
    icon: PencilRuler,
    title: 'Homework Assistance',
    desc: 'Daily homework support to keep students consistent and confident.',
  },
  {
    icon: TrendingUp,
    title: 'Academic Improvement',
    desc: 'Targeted help to strengthen weak areas and steadily raise grades.',
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Complete home tutoring solutions"
          description="From everyday homework help to full exam preparation, we offer the right support for every learning goal."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <ScrollReveal
              key={service.title}
              delay={(i % 3) * 100}
              className="group relative h-full overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5"
            >
              <span
                className="absolute right-5 top-5 font-serif text-5xl font-semibold text-secondary transition-colors group-hover:text-gold/20"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="mb-5 inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand/80 text-brand-foreground shadow-lg shadow-brand/20">
                <service.icon className="size-7" />
              </span>
              <h3 className="mb-2 text-xl font-semibold text-brand">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
