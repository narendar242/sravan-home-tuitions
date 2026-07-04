import Image from 'next/image'
import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { LOCATION, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from './site-data'

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Why Choose Us', href: '#why-choose-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const SERVICES = [
  'Home Tuition',
  'Private Tutors',
  'One-to-One Tutoring',
  'Exam Preparation',
  'Homework Assistance',
  'Academic Improvement',
]

const AREAS = [
  'Attapur',
  'Karwan',
  'Mehdipatnam',
  'Rajendranagar',
  'Manikonda',
  'Narsingi',
]

export function Footer() {
  return (
    <footer className="bg-brand text-brand-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <span className="inline-flex w-fit rounded-2xl bg-brand-foreground p-2">
              <Image
                src="/images/sravan-logo.png"
                alt="Sravan Home Tuitions"
                width={150}
                height={150}
                className="h-14 w-auto"
              />
            </span>
            <p className="max-w-xs text-sm leading-relaxed text-brand-foreground/75">
              Trusted home tuition services in Attapur, Hyderabad. Experienced, verified tutors for
              all classes, subjects and boards.
            </p>
            <p className="font-serif text-lg font-semibold text-gold">Learn Today, Lead Tomorrow</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-foreground/75 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {SERVICES.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-brand-foreground/75 transition-colors hover:text-gold"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">Areas</h3>
            <ul className="mb-5 flex flex-col gap-2.5">
              {AREAS.map((area) => (
                <li key={area} className="flex items-center gap-2 text-sm text-brand-foreground/75">
                  <MapPin className="size-3.5 text-gold" />
                  {area}
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2">
              <a href={PHONE_TEL} className="flex items-center gap-2 text-sm font-medium hover:text-gold">
                <Phone className="size-4 text-gold" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium hover:text-gold"
              >
                <MessageCircle className="size-4 text-gold" />
                WhatsApp us
              </a>
              <p className="flex items-center gap-2 text-sm text-brand-foreground/75">
                <MapPin className="size-4 text-gold" />
                {LOCATION}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-brand-foreground/15 pt-6 sm:flex-row">
          <p className="text-sm text-brand-foreground/70">
            Copyright © 2026 Sravan Home Tuitions. All Rights Reserved.
          </p>
          <div className="flex items-center gap-5 text-sm text-brand-foreground/70">
            <a href="#" className="transition-colors hover:text-gold">
              Privacy Policy
            </a>
            <a href="#contact" className="transition-colors hover:text-gold">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
