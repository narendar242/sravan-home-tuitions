'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { CheckCircle2, Send, Upload } from 'lucide-react'
import { Button } from '@/components/ui/button'

const fieldClass =
  'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/20'

const fileClass =
  'w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-muted-foreground shadow-sm outline-none transition-colors file:mr-4 file:cursor-pointer file:rounded-full file:border-0 file:bg-secondary file:px-4 file:py-1.5 file:text-sm file:font-semibold file:text-brand hover:file:bg-brand hover:file:text-brand-foreground focus:border-brand focus:ring-2 focus:ring-brand/20'

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

export function JoinTutorForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const get = (name: string) => (data.get(name) as string)?.trim() || '—'

    const message = [
      '*New Tutor Registration — Sravan Home Tuitions*',
      '',
      `Full Name: ${get('fullName')}`,
      `Mobile: ${get('mobile')}`,
      `Email: ${get('email')}`,
      `Gender: ${get('gender')}`,
      `Qualification: ${get('qualification')}`,
      `Experience: ${get('experience')}`,
      `Subjects: ${get('subjects')}`,
      `Classes: ${get('classes')}`,
      `Boards: ${get('boards')}`,
      `Preferred Areas: ${get('areas')}`,
      `Languages: ${get('languages')}`,
      `Available Timings: ${get('timings')}`,
      '',
      '(Resume, ID proof and photo will be shared in this chat.)',
    ].join('\n')

    window.open(`https://wa.me/916302267422?text=${encodeURIComponent(message)}`, '_blank')
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
          Our team will review your profile and contact you if you are shortlisted.
        </p>
        <Button
          render={<Link href="/" />}
          className="mt-2 h-11 rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground hover:bg-brand/90"
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
        <Field label="Upload Resume" htmlFor="resume">
          <input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" required className={fileClass} />
        </Field>
        <Field label="Upload ID Proof" htmlFor="idProof">
          <input id="idProof" name="idProof" type="file" accept="image/*,.pdf" required className={fileClass} />
        </Field>
        <Field label="Upload Photo" htmlFor="photo">
          <input id="photo" name="photo" type="file" accept="image/*" required className={fileClass} />
        </Field>
      </div>

      <div className="mt-6 flex items-start gap-2 rounded-xl bg-secondary/60 px-4 py-3 text-xs text-muted-foreground">
        <Upload className="mt-0.5 size-4 shrink-0 text-brand" />
        <span>Accepted files: Resume (PDF/DOC), ID Proof (Image/PDF) and Photo (Image).</span>
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
