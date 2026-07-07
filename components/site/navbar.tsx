'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GraduationCap, Menu, Phone, UserPlus, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { PHONE_TEL } from './site-data'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Why Choose Us', href: '/why-choose-us' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/70 bg-background/90 shadow-sm backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Sravan Home Tuitions home">
          <Image
            src="/images/sravan-logo.png"
            alt="Sravan Home Tuitions"
            width={140}
            height={140}
            className="h-14 w-auto lg:h-16"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-0.5 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-full px-2.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-brand"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            render={<a href={PHONE_TEL} />}
            variant="outline"
            className="h-11 gap-2 rounded-full border-brand/25 bg-background px-4 text-sm font-semibold text-brand hover:bg-secondary"
          >
            <Phone className="size-4" />
            Call
          </Button>
          <Button
            render={<Link href="/join-tutor" />}
            variant="outline"
            className="h-11 gap-2 rounded-full border-brand/25 bg-background px-4 text-sm font-semibold text-brand hover:bg-secondary"
          >
            <GraduationCap className="size-4" />
            Join as Tutor
          </Button>
          <Button
            render={<Link href="/join-parent" />}
            className="h-11 gap-2 rounded-full bg-brand px-4 text-sm font-semibold text-brand-foreground hover:bg-brand/90"
          >
            <UserPlus className="size-4" />
            Join as Parent
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-background text-brand lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-x-0 top-16 z-40 origin-top border-b border-border bg-background px-4 pb-6 pt-2 shadow-lg transition-all duration-300 lg:hidden',
          open ? 'visible opacity-100' : 'invisible -translate-y-2 opacity-0',
        )}
      >
        <ul className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-secondary hover:text-brand"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex flex-col gap-2">
          <Button
            render={<a href={PHONE_TEL} />}
            onClick={() => setOpen(false)}
            variant="outline"
            className="h-12 w-full gap-2 rounded-full border-brand/25 bg-background text-base font-semibold text-brand hover:bg-secondary"
          >
            <Phone className="size-4" />
            Call
          </Button>
          <Button
            render={<Link href="/join-parent" />}
            onClick={() => setOpen(false)}
            className="h-12 w-full gap-2 rounded-full bg-brand text-base font-semibold text-brand-foreground hover:bg-brand/90"
          >
            <UserPlus className="size-4" />
            Join as Parent
          </Button>
          <Button
            render={<Link href="/join-tutor" />}
            onClick={() => setOpen(false)}
            variant="outline"
            className="h-12 w-full gap-2 rounded-full border-brand/25 bg-background text-base font-semibold text-brand hover:bg-secondary"
          >
            <GraduationCap className="size-4" />
            Join as Tutor
          </Button>
        </div>
      </div>
    </header>
  )
}
