'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from './scroll-reveal'
import { SectionHeading } from './section-heading'
import { LOCATION, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from './site-data'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '')
    const phone = String(data.get('phone') || '')
    const grade = String(data.get('grade') || '')
    const subject = String(data.get('subject') || '')
    const message = String(data.get('message') || '')

    const text = `Hi Sravan Home Tuitions,%0A%0AName: ${name}%0APhone: ${phone}%0AClass: ${grade}%0ASubject: ${subject}%0AMessage: ${message}`
    window.open(`https://wa.me/916302267422?text=${text}`, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  const fieldClass =
    'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/20'

  return (
    <section id="contact" className="scroll-mt-20 bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Book your free demo class today"
          description="Reach out and we’ll match your child with the perfect tutor. Call, WhatsApp or send us a message."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <ScrollReveal className="flex flex-col gap-5 lg:col-span-2">
            <div className="rounded-3xl bg-brand p-8 text-brand-foreground shadow-xl shadow-brand/20">
              <h3 className="font-serif text-2xl font-semibold">Get in touch</h3>
              <p className="mt-2 text-sm text-brand-foreground/80">
                We’re available all week to answer your questions.
              </p>

              <ul className="mt-7 flex flex-col gap-5">
                <li className="flex items-start gap-4">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-foreground/10 text-gold">
                    <Phone className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-brand-foreground/70">Call us</p>
                    <a href={PHONE_TEL} className="text-lg font-semibold hover:text-gold">
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-foreground/10 text-gold">
                    <MessageCircle className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-brand-foreground/70">WhatsApp</p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold hover:text-gold"
                    >
                      Chat with us
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-brand-foreground/10 text-gold">
                    <MapPin className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-brand-foreground/70">Location</p>
                    <p className="text-lg font-semibold">{LOCATION}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  render={<a href={PHONE_TEL} />}
                  className="h-12 flex-1 gap-2 rounded-full bg-gold text-base font-semibold text-gold-foreground hover:bg-gold/90"
                >
                  <Phone className="size-4" />
                  Call Now
                </Button>
                <Button
                  render={<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" />}
                  variant="outline"
                  className="h-12 flex-1 gap-2 rounded-full border-brand-foreground/30 bg-transparent text-base font-semibold text-brand-foreground hover:bg-brand-foreground/10 hover:text-brand-foreground"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal delay={120} className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center">
                  <span className="inline-flex size-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <CheckCircle2 className="size-9" />
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-brand">Thank you!</h3>
                  <p className="max-w-sm text-sm text-muted-foreground">
                    Your details are ready in WhatsApp. If it didn’t open, please call us directly at{' '}
                    <a href={PHONE_TEL} className="font-semibold text-brand">
                      {PHONE_DISPLAY}
                    </a>
                    .
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-2 h-11 rounded-full px-6"
                  >
                    Send another request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-sm font-medium text-brand">
                        Full name
                      </label>
                      <input id="name" name="name" required placeholder="Your name" className={fieldClass} />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-sm font-medium text-brand">
                        Phone number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="Your phone"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="grade" className="text-sm font-medium text-brand">
                        Class / Grade
                      </label>
                      <input
                        id="grade"
                        name="grade"
                        required
                        placeholder="e.g. Class 8, Intermediate"
                        className={fieldClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="subject" className="text-sm font-medium text-brand">
                        Subject(s)
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        placeholder="e.g. Maths, Science"
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-brand">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell us about your requirement and preferred timings"
                      className={`${fieldClass} resize-none`}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="mt-2 h-13 gap-2 rounded-full bg-brand text-base font-semibold text-brand-foreground hover:bg-brand/90"
                  >
                    <Send className="size-4" />
                    Book Free Demo Class
                  </Button>
                  <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
                    <Mail className="size-3.5" />
                    We’ll respond within a few hours.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
