import Image from 'next/image'
import { GraduationCap, HeartHandshake, MapPin, Users } from 'lucide-react'
import { ScrollReveal } from './scroll-reveal'
import { SectionHeading } from './section-heading'

const STATS = [
  { icon: Users, value: '500+', label: 'Happy Students' },
  { icon: GraduationCap, value: '150+', label: 'Expert Tutors' },
  { icon: HeartHandshake, value: '10+', label: 'Years Experience' },
  { icon: MapPin, value: '9+', label: 'Areas Served' },
]

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <ScrollReveal className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-[2rem] border border-border shadow-xl shadow-brand/5">
            <Image
              src="/images/about-learning.png"
              alt="Personalized one-to-one home tutoring at a student's home"
              width={720}
              height={640}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -right-4 -top-4 hidden rounded-2xl bg-brand px-5 py-4 text-brand-foreground shadow-xl sm:block">
            <p className="font-serif text-2xl font-semibold">Learn Today,</p>
            <p className="font-serif text-2xl font-semibold text-gold">Lead Tomorrow</p>
          </div>
        </ScrollReveal>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title="Personalized home tutoring that helps students thrive"
          />
          <ScrollReveal delay={80} className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Sravan Home Tuitions is a dedicated home tuition service based in Attapur, Hyderabad,
              committed to helping every student reach their full academic potential. We connect
              families with experienced, verified tutors who teach right at the comfort of your home.
            </p>
            <p>
              From foundational learning to board exam preparation, our tutors focus on
              concept-based teaching, personalized attention and consistent progress tracking — so
              your child not only scores better, but genuinely understands and enjoys learning.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={160} className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-card p-4 text-center shadow-sm"
              >
                <stat.icon className="mx-auto mb-2 size-6 text-gold" />
                <p className="font-serif text-2xl font-semibold text-brand">{stat.value}</p>
                <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
