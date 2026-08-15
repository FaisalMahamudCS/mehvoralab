import Link from 'next/link'
import { PROJECTS } from '@/constants/projects'
import { createMetadata } from '@/lib/seo'
import { PageHero } from '@/components/common/page-hero'
import { ProjectCover } from '@/components/common/project-cover'

export const metadata = createMetadata({
  title: 'Case Studies',
  description: 'In-depth case studies showcasing Mehvora Labs engineering excellence and business impact.',
  path: '/case-studies',
})

export default function CaseStudiesPage() {
  const featured = PROJECTS.filter((p) => p.featured)

  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Deep dives into our best work"
        description="Architecture decisions, business outcomes, and engineering challenges solved at scale."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {featured.map((project) => (
              <Link
                key={project.slug}
                href={`/portfolio#${project.slug}`}
                className="group overflow-hidden light-card transition-all hover:border-brand-blue/30 cursor-pointer"
              >
                <ProjectCover project={project} />
                <div className="p-8">
                  <span className="text-xs font-medium uppercase tracking-wider text-brand-cyan">
                    {project.industry}
                  </span>
                  <h2 className="mt-3 font-heading text-xl font-bold group-hover:text-brand-cyan transition-colors">
                    {project.title}
                  </h2>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                  <div className="mt-6 flex gap-6">
                    {project.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <p className="font-heading text-lg font-bold">{m.value}</p>
                        <p className="text-xs text-muted-foreground">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
