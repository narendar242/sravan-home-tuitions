import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, GraduationCap, Star, UserPlus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from './scroll-reveal'

const BOARDS = ['CBSE', 'ICSE', 'State Board', 'IB', 'IGCSE']

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-secondary/60 via-background to-background pt-28 lg:pt-36"
    >
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pb-28">
        <div className="flex flex-col items-start gap-6">
          <ScrollReveal delay={80}>
            <h1 className="font-serif text-4xl font-semibold leading-[1.08] text-balance text-brand sm:text-5xl lg:text-6xl">
              Sravan Home Tuition{' '}
              <span className="relative whitespace-nowrap text-brand">
                Services
                <span
                  className="absolute -bottom-1 left-0 h-3 w-full rounded-full bg-gold/40"
                  aria-hidden="true"
                />
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
              Experienced home tutors for all classes, all subjects &amp; all boards. Personalized
              one-to-one learning at the comfort of your home.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={240} className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              render={<Link href="/join-parent" />}
              className="h-13 gap-2 rounded-full bg-brand px-7 text-base font-semibold text-brand-foreground shadow-lg shadow-brand/20 hover:bg-brand/90"
            >
              <UserPlus className="size-5" />
              Join as Parent
            </Button>
            <Button
              render={<Link href="/join-tutor" />}
              variant="outline"
              className="h-13 gap-2 rounded-full border-brand/25 bg-background px-7 text-base font-semibold text-brand hover:bg-secondary"
            >
              <GraduationCap className="size-5" />
              Join as Tutor
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={320} className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2">
            {BOARDS.map((board) => (
              <span key={board} className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/80">
                <CheckCircle2 className="size-4 text-gold" />
                {board}
              </span>
            ))}
          </ScrollReveal>
        </div>

        <ScrollReveal delay={160} className="relative">
          <div className="relative mx-auto max-w-lg">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl shadow-brand/10">
              <Image
                src="/images/hero-tutor.png"
                alt="An experienced home tutor teaching a student one-to-one"
                width={720}
                height={720}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur sm:-left-8">
              <span className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <CheckCircle2 className="size-6" />
              </span>
              <div>
                <p className="text-sm font-bold text-brand">Verified Tutors</p>
                <p className="text-xs text-muted-foreground">Background checked</p>
              </div>
            </div>

            <div className="absolute -right-2 top-6 flex items-center gap-3 rounded-2xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur sm:-right-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-gold/15 text-gold">
                <Star className="size-6 fill-current" />
              </span>
              <div>
                <p className="text-sm font-bold text-brand">5 / 5 Rating</p>
                <p className="text-xs text-muted-foreground">From happy parents</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
