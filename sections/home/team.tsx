'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { useGSAP, gsap, ScrollTrigger } from '@/lib/gsap'
import { TEAM_MEMBERS } from '@/constants/team'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  )
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 7L2 7" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.065 2.065 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function TeamCard({ member, reversed = false }: { member: (typeof TEAM_MEMBERS)[0]; reversed?: boolean }) {
  return (
    <article className="team-card group relative overflow-hidden rounded-[28px] bg-gradient-to-br from-white via-white to-slate-50/80 shadow-[0_4px_32px_rgba(15,23,42,0.07)] ring-1 ring-slate-200/60">
      <div
        className={`pointer-events-none absolute top-6 z-10 flex items-center gap-2 opacity-[0.12] ${
          reversed ? 'left-6 lg:left-8' : 'right-6 lg:right-8'
        }`}
        aria-hidden
      >
        <Image src="/mehvora-labs-logo.svg" alt="" width={48} height={48} className="opacity-80" />
        <span className="font-heading text-sm font-bold lowercase tracking-tight text-[#1e3a5f]">
          mehvora labs
        </span>
      </div>

      <div className={`grid lg:grid-cols-[1fr_1.05fr] ${reversed ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        <div className="relative z-20 flex flex-col justify-center px-8 py-12 sm:px-12 sm:py-16 lg:px-14 lg:py-20">
          <div
            className={`pointer-events-none absolute inset-y-0 w-32 bg-gradient-to-r from-white to-transparent ${
              reversed ? 'left-full -translate-x-full rotate-180' : 'left-full'
            } hidden lg:block`}
          />

          <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#4a7fd4]">
            {member.title}
          </p>
          <h3 className="mt-5 font-heading text-[2.5rem] font-bold leading-tight tracking-tight text-[#1a2b4a] sm:text-5xl lg:text-[3.25rem]">
            {member.name}
          </h3>
          {member.subtitle && (
            <p className="mt-2 text-sm font-medium text-[#64748b]">{member.subtitle}</p>
          )}
          <p className="mt-6 max-w-md text-[15px] leading-[1.75] text-[#475569]">
            {member.bio}
          </p>

          {(member.social?.linkedin ||
            member.social?.github ||
            member.social?.portfolio ||
            member.social?.email) && (
            <div className="mt-10 flex flex-wrap gap-3">
              {member.social.portfolio && (
                <a
                  href={member.social.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} portfolio`}
                  className="flex size-10 items-center justify-center rounded-lg bg-brand-blue text-white shadow-sm transition-transform duration-200 hover:scale-105 cursor-pointer"
                >
                  <GlobeIcon className="size-[18px]" />
                </a>
              )}
              {member.social.email && (
                <a
                  href={`mailto:${member.social.email}`}
                  aria-label={`Email ${member.name}`}
                  className="flex size-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#1a2b4a] shadow-sm transition-transform duration-200 hover:scale-105 cursor-pointer"
                >
                  <MailIcon className="size-[18px]" />
                </a>
              )}
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="flex size-10 items-center justify-center rounded-lg bg-[#0A66C2] text-white shadow-sm transition-transform duration-200 hover:scale-105 cursor-pointer"
                >
                  <LinkedInIcon className="size-[18px]" />
                </a>
              )}
              {member.social.github && (
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on GitHub`}
                  className="flex size-10 items-center justify-center rounded-lg bg-[#1a1a1a] text-white shadow-sm transition-transform duration-200 hover:scale-105 cursor-pointer"
                >
                  <GitHubIcon className="size-[18px]" />
                </a>
              )}
            </div>
          )}
        </div>

        <div
          className={`relative min-h-[340px] sm:min-h-[400px] lg:min-h-[480px] ${
            member.id === 'faisal'
              ? 'bg-gradient-to-br from-white via-slate-50 to-slate-100'
              : 'bg-[#f1f5f9]'
          }`}
        >
          <Image
            src={member.image}
            alt={`${member.name}, ${member.role} at Mehvora Labs`}
            fill
            className={`transition-transform duration-700 group-hover:scale-[1.015] ${
              member.id === 'faisal'
                ? 'object-contain object-bottom p-6 sm:p-8'
                : 'object-cover object-center'
            }`}
            sizes="(max-width: 1024px) 100vw, 55vw"
            priority={member.id === 'mehvora'}
          />
        </div>
      </div>
    </article>
  )
}

export function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()

  useGSAP(
    () => {
      if (reducedMotion || !sectionRef.current) return

      gsap.from('.team-header', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.team-header',
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      ScrollTrigger.batch('.team-card', {
        start: 'top 88%',
        onEnter: (elements) => {
          gsap.fromTo(
            elements,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.85,
              stagger: 0.2,
              ease: 'power3.out',
              overwrite: true,
            }
          )
        },
      })
    },
    { scope: sectionRef, dependencies: [reducedMotion] }
  )

  return (
    <section
      ref={sectionRef}
      id="team"
      className="scroll-mt-28 bg-[#f8fafc] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="team-header mx-auto max-w-2xl text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#4a7fd4]">
            Our Team
          </p>
          <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-[#1a2b4a] sm:text-4xl">
            Meet the leadership
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#64748b]">
            The founders building Mehvora Labs with engineering depth and creative vision.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {TEAM_MEMBERS.filter((m) => m.featured).map((member, i) => (
            <TeamCard key={member.id} member={member} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
