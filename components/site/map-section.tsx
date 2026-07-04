import { ExternalLink, MapPin } from 'lucide-react'
import { MAP_LINK } from './site-data'

export function MapSection() {
  return (
    <section aria-label="Our location on the map" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
          <div className="flex flex-col items-start justify-between gap-3 border-b border-border bg-card px-6 py-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <MapPin className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-brand">Find us in Attapur, Hyderabad</p>
                <p className="text-xs text-muted-foreground">Serving Attapur and surrounding areas</p>
              </div>
            </div>
            <a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-brand/20 bg-secondary px-4 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              View on Google Maps
              <ExternalLink className="size-4" />
            </a>
          </div>
          <div className="aspect-[16/9] w-full sm:aspect-[21/9]">
            <iframe
              title="Map showing Attapur, Hyderabad"
              src="https://www.google.com/maps?q=Attapur,+Hyderabad,+Telangana&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
