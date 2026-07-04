import { MapPin } from 'lucide-react'
import { ScrollReveal } from './scroll-reveal'
import { SectionHeading } from './section-heading'

const AREAS = [
  'Attapur',
  'Karwan',
  'Hyderguda',
  'Mehdipatnam',
  'Rajendranagar',
  'Langar Houz',
  'Manikonda',
  'Narsingi',
  'Budwel',
]

export function Areas() {
  return (
    <section id="areas" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Areas We Serve"
          title="Home tutors across Hyderabad"
          description="Based in Attapur, our tutors travel to homes across these neighbourhoods and nearby areas."
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {AREAS.map((area, i) => (
            <ScrollReveal
              key={area}
              delay={(i % 3) * 80}
              className="group flex items-center gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lg"
            >
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                <MapPin className="size-5" />
              </span>
              <span className="text-base font-semibold text-brand">{area}</span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
