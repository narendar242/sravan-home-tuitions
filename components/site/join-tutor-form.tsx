'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { CheckCircle2, MessageCircle, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

const WHATSAPP_NUMBER = '916302267422'

const fieldClass =
  'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/20'

function Field({
  label,
  htmlFor,
  optional,
  children,
  full,
}: {
  label: string
  htmlFor: string
  optional?: boolean
  children: React.ReactNode
  full?: boolean
}) {
  return (
    <div className={`flex flex-col gap-1.5 ${full ? 'sm:col-span-2' : ''}`}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-brand">
        {label}
        {optional ? <span className="ml-1 text-xs font-normal text-muted-foreground">(Optional)</span> : null}
      </label>
      {children}
    </div>
  )
}

const FIELD_LABELS: Record<string, string> = {
  fullName: 'Full Name',
  mobile: 'Mobile Number',
  email: 'Email',
  gender: 'Gender',
  qualification: 'Qualification',
  experience: 'Experience',
  subjects: 'Subjects You Teach',
  classes: 'Classes You Teach',
  boards: 'Boards You Teach',
  areas: 'Preferred Teaching Areas',
  languages: 'Languages Known',
  timings: 'Available Timings',
}

export function JoinTutorForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const lines = ['*New Tutor Registration*', '']
    for (const key of Object.keys(FIELD_LABELS)) {
      const value = (data.get(key) as string | null)?.trim()
      if (value) {
        lines.push(`*${FIELD_LABELS[key]}:* ${value}`)
      }
    }

    const message = encodeURIComponent(lines.join('\n'))
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`
    window.open(url, '_blank', 'noopener,noreferrer')

    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-3xl border border-border bg-card p-10 text-center shadow-sm">
        <span className="inline-flex size-16 items-center justify-center rounded-full bg-brand/10 text-brand">
          <CheckCircle2 className="size-9" />
        </span>
        <h2 className="font-serif text-2xl font-semibold text-brand">Thank you for registering.</h2>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Your details have opened in WhatsApp. Please press send there to complete your registration, and our team
          will contact you if you are shortlisted.
        </p>
        <div className="mt-2 w-full max-w-md rounded-2xl border border-border bg-secondary/50 p-5 text-center">
          <p className="text-sm font-medium text-brand">Join our WhatsApp community</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
            Connect with us and get the latest tuition updates and openings.
          </p>
          <Button
            render={
              <a
                href="https://chat.whatsapp.com/KkzbVm4Jfn5KiKbjeeKQ4v"
                target="_blank"
                rel="noopener noreferrer"
              />
            }
            className="mt-3 h-11 w-full gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground hover:bg-brand/90"
          >
            <MessageCircle className="size-4" />
            Join WhatsApp Community
          </Button>
        </div>
        <Button
          render={<Link href="/" />}
          variant="outline"
          className="h-11 rounded-full px-6 text-sm font-semibold"
        >
          Back to Home
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <div className="mb-6 flex flex-col gap-3 rounded-2xl border border-border bg-secondary/50 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
            <MessageCircle className="size-5" />
          </span>
          <div>
            <p className="text-sm font-semibold text-brand">Join my WhatsApp community</p>
            <p className="text-xs leading-relaxed text-muted-foreground">
              Follow this link to join and get the latest tuition updates and openings.
            </p>
          </div>
        </div>
        <Button
          render={
            <a
              href="https://chat.whatsapp.com/KkzbVm4Jfn5KiKbjeeKQ4v"
              target="_blank"
              rel="noopener noreferrer"
            />
          }
          className="h-11 shrink-0 gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground hover:bg-brand/90"
        >
          <MessageCircle className="size-4" />
          Join Community
        </Button>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="fullName">
          <input id="fullName" name="fullName" required placeholder="Your full name" className={fieldClass} />
        </Field>
        <Field label="Mobile Number" htmlFor="mobile">
          <input id="mobile" name="mobile" type="tel" required placeholder="10-digit mobile number" className={fieldClass} />
        </Field>
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" required placeholder="you@example.com" className={fieldClass} />
        </Field>
        <Field label="Gender" htmlFor="gender">
          <select id="gender" name="gender" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </Field>
        <Field label="Qualification" htmlFor="qualification">
          <input id="qualification" name="qualification" required placeholder="e.g. B.Sc, M.Sc, B.Ed" className={fieldClass} />
        </Field>
        <Field label="Experience" htmlFor="experience">
          <input id="experience" name="experience" required placeholder="e.g. 3 years" className={fieldClass} />
        </Field>
        <Field label="Subjects You Teach" htmlFor="subjects" full>
          <input id="subjects" name="subjects" required placeholder="e.g. Maths, Physics, Chemistry" className={fieldClass} />
        </Field>
        <Field label="Classes You Teach" htmlFor="classes">
          <input id="classes" name="classes" required placeholder="e.g. Classes 6–10, Intermediate" className={fieldClass} />
        </Field>
        <Field label="Boards You Teach" htmlFor="boards">
          <input id="boards" name="boards" required placeholder="e.g. CBSE, ICSE, State Board" className={fieldClass} />
        </Field>
        <Field label="Preferred Teaching Areas" htmlFor="areas">
          <input id="areas" name="areas" required placeholder="e.g. Attapur, Mehdipatnam" className={fieldClass} />
        </Field>
        <Field label="Languages Known" htmlFor="languages">
          <input id="languages" name="languages" required placeholder="e.g. English, Hindi, Telugu" className={fieldClass} />
        </Field>
        <Field label="Available Timings" htmlFor="timings">
          <input id="timings" name="timings" required placeholder="e.g. Weekdays 4–8 PM" className={fieldClass} />
        </Field>
      </div>

      <div className="mt-6 flex items-start gap-2 rounded-xl bg-secondary/60 px-4 py-3 text-xs text-muted-foreground">
        <MessageCircle className="mt-0.5 size-4 shrink-0 text-brand" />
        <span>On submit, your details open in WhatsApp — just press send to complete your registration.</span>
      </div>

      <Button
        type="submit"
        className="mt-6 h-13 w-full gap-2 rounded-full bg-brand text-base font-semibold text-brand-foreground hover:bg-brand/90 sm:w-auto sm:px-10"
      >
        <Send className="size-4" />
        Submit
      </Button>
    </form>
  )
}
