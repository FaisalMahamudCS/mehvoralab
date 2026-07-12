import { FadeIn } from '@/components/animations/fade-in'

type PageHeroProps = {
  eyebrow?: string
  title: string
  description?: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-slate-200/60 bg-white pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-3xl">
          {eyebrow && (
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-brand-label">
              {eyebrow}
            </p>
          )}
          <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{description}</p>
          )}
        </FadeIn>
      </div>
    </section>
  )
}
