import Image from 'next/image'
import type { Project } from '@/constants/projects'
import { cn } from '@/lib/utils'

type ProjectCoverProps = {
  project: Project
  className?: string
  sizes?: string
  priority?: boolean
}

export function ProjectCover({
  project,
  className,
  sizes = '(max-width: 1024px) 100vw, 50vw',
  priority = false,
}: ProjectCoverProps) {
  return (
    <div className={cn('relative aspect-video overflow-hidden bg-slate-100', className)}>
      <Image
        src={project.image}
        alt={`${project.title} — ${project.industry} project`}
        fill
        className="object-cover"
        sizes={sizes}
        priority={priority}
      />
    </div>
  )
}
