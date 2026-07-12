'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { useGSAP, gsap, ScrollTrigger } from '@/lib/gsap'
import { TEAM_MEMBERS } from '@/constants/team'
import { SectionHeader } from '@/components/common/section-header'
import { useReducedMotion } from '@/hooks/use-reduced-motion'

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
    <article className="team-card group relative overflow-hidden rounded-2xl border border-white/10 bg-card shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-brand-blue/30 hover:shadow-brand-blue/10">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-brand-blue/10 blur-[80px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 size-48 rounded-full bg-brand-cyan/5 blur-[60px]" />

      {/* Watermark */}
      <div
        className={`pointer-events-none absolute top-5 z-10 flex items-center gap-2 opacity-[0.07] ${
          reversed ? 'left-5' : 'right-5'
        }`}
        aria-hidden
      >
        <Image src="/mehvora-labs-logo.svg" alt="" width={40} height={40} />
        <span className="font-heading text-xs font-bold lowercase tracking-tight text-foreground">
          mehvora labs
        </span>
      </div>

      <div className={`relative grid lg:grid-cols-2 ${reversed ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        {/* Text */}
        <div className="relative z-10 flex flex-col justify-center px-8 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-cyan">
            {member.title}
          </p>
          <h3 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {member.name}
          </h3>
          {member.subtitle && (
            <p className="mt-2 text-sm font-medium text-brand-blue">{member.subtitle}</p>
          )}
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            {member.bio}
          </p>

          {(member.social?.linkedin || member.social?.github) && (
            <div className="mt-8 flex gap-3">
              {member.social.linkedin && (
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground transition-all duration-200 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2] hover:text-white cursor-pointer"
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
                  className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted-foreground transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-foreground cursor-pointer"
                >
                  <GitHubIcon className="size-[18px]" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Photo — full color */}
        <div className="relative min-h-[300px] overflow-hidden bg-surface sm:min-h-[360px] lg:min-h-[420px]">
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent z-10 pointer-events-none lg:bg-gradient-to-r lg:from-card/60 lg:via-transparent lg:to-transparent" />
          <Image
            src={member.image}
            alt={`${member.name}, ${member.role} at Mehvora Labs`}
            fill
            className={`transition-transform duration-700 group-hover:scale-[1.03] ${
              member.id === 'faisal'
                ? 'object-contain object-bottom p-4 sm:p-6'
                : 'object-cover object-center'
            }`}
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority={member.id === 'mehvira'}
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
      className="scroll-mt-28 border-y border-white/10 bg-background py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="team-header">
          <SectionHeader
            eyebrow="Our Team"
            title="Meet the leadership"
            description="The founders building Mehvora Labs with engineering depth and creative vision."
          />
        </div>

        <div className="mt-16 space-y-8">
          {TEAM_MEMBERS.filter((m) => m.featured).map((member, i) => (
            <TeamCard key={member.id} member={member} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
