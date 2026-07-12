'use client'

type ProjectVideoProps = {
  src: string
  title: string
  className?: string
}

export function ProjectVideo({ src, title, className }: ProjectVideoProps) {
  return (
    <div className={className}>
      <video
        className="w-full rounded-xl border border-slate-200/80 bg-slate-100 shadow-sm"
        controls
        playsInline
        preload="metadata"
        aria-label={`${title} demo video`}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
