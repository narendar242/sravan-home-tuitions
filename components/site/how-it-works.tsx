import { ClipboardList, PhoneCall, Rocket, UserCheck } from 'lucide-react'
import { ScrollReveal } from './scroll-reveal'
import { SectionHeading } from './section-heading'

const STEPS = [
  {
    icon: PhoneCall,
    title: 'Contact Us',
    desc: 'Call or message us with your requirement and preferred timings.',
  },
  {
    icon: ClipboardList,
    title: 'Understand Requirements',
    desc: 'We understand the student’s class, subjects, board and learning goals.',
  },
  {
    icon: UserCheck,
    title: 'Assign the Best Tutor',
    desc: 'We match you with the most suitable verified, experienced tutor.',
  },
  {
    icon: Rocket,
    title: 'Start Home Tuition',
    desc: 'Classes begin at your home with regular progress tracking.',
  },
]

export function HowItWorks() {
  return (
    <section className="scroll-mt-20 bg-brand py-20 text-brand-foreground lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-foreground/20 bg-brand-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            How It Works
          </span>
          <h2 className="max-w-3xl font-serif text-3xl font-semibold leading-tight text-balance sm:text-4xl md:text-5xl">
            Getting started is simple
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-pretty text-brand-foreground/80 sm:text-lg">
            Four easy steps to bring an expert tutor home.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <ScrollReveal
              key={step.title}
              delay={i * 100}
              className="relative rounded-3xl border border-brand-foreground/15 bg-brand-foreground/5 p-7 backdrop-blur-sm"
            >
              <span className="mb-5 inline-flex size-14 items-center justify-center rounded-2xl bg-gold text-gold-foreground shadow-lg">
                <step.icon className="size-7" />
              </span>
              <span
                className="absolute right-6 top-6 font-serif text-4xl font-semibold text-brand-foreground/15"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-brand-foreground/75">{step.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
