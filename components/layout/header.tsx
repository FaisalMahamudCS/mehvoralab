'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useGSAP, gsap } from '@/lib/gsap'
import { COMPANY } from '@/constants/company'
import { NAV_LINKS } from '@/constants/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

export function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      if (reducedMotion || !navRef.current) return
      gsap.fromTo(
        navRef.current,
        { y: -24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power4.out', delay: 0.2 }
      )
    },
    { scope: headerRef, dependencies: [reducedMotion] }
  )

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      ref={headerRef}
      className={cn('fixed inset-x-0 top-0 z-50 transition-all duration-300', scrolled ? 'py-3' : 'py-5')}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          ref={navRef}
          className={cn(
            'flex items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6',
            scrolled
              ? 'border-slate-200/80 bg-white/90 shadow-[0_4px_24px_rgba(15,23,42,0.08)] backdrop-blur-xl'
              : 'border-transparent bg-white/70 shadow-[0_2px_16px_rgba(15,23,42,0.04)] backdrop-blur-md'
          )}
          style={reducedMotion ? undefined : { opacity: 0 }}
        >
          <Link href="/" className="flex items-center gap-3 cursor-pointer group">
            <Image
              src="/mehvora-labs-logo.svg"
              alt={`${COMPANY.name} logo`}
              width={36}
              height={36}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-heading text-lg font-semibold tracking-tight text-brand-navy lowercase">
              mehvora labs
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors duration-200 hover:bg-slate-100 hover:text-brand-navy cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="ghost" size="sm" render={<Link href="/contact" />}>
              Contact
            </Button>
            <Button
              size="sm"
              className="bg-brand-blue text-white hover:bg-brand-blue/90 shadow-md shadow-brand-blue/20"
              render={<Link href="/contact" />}
            >
              Book Discovery Call
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex size-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-brand-navy lg:hidden cursor-pointer"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl lg:hidden">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-slate-100 hover:text-brand-navy cursor-pointer"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-xl bg-brand-blue px-4 py-3 text-center text-sm font-medium text-white cursor-pointer"
              >
                Book Discovery Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
