import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary/60 via-background to-background">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Link href="/" className="font-medium transition-colors hover:text-brand">
            Home
          </Link>
          <ChevronRight className="size-4" aria-hidden="true" />
          <span className="font-semibold text-brand">{eyebrow}</span>
        </nav>
        <h1 className="font-serif text-3xl font-semibold leading-tight text-balance text-brand sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="max-w-2xl text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  )
}
