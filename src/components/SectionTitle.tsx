import { cn } from '../utils/cn'

interface SectionTitleProps {
  id: string
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionTitle({
  id,
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionTitleProps) {
  return (
    <header className={cn('mb-12 md:mb-16', align === 'left' && 'text-left')}>
      <p
        id={`${id}-eyebrow`}
        className="mb-3 inline-flex items-center gap-2 text-xs font-bold tracking-[0.25em] text-primary uppercase"
      >
        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-primary" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className="text-3xl font-extrabold tracking-tight text-balance leading-[1.1] sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-4 max-w-2xl text-base leading-relaxed text-muted',
            align === 'left' && 'text-left',
          )}
        >
          {description}
        </p>
      ) : null}
    </header>
  )
}
