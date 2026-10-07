import { useMemo, useState } from 'react'
import { ExternalLink, Layers } from 'lucide-react'
import { GithubIcon } from './brand/GithubIcon'
import { projectCategories, projects } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import { fmt } from '../i18n/ui'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'
import { cn } from '../utils/cn'
import type { Project } from '../types'

function ProjectCard({ project }: { project: Project }) {
  const { s, t } = useLanguage()
  const title = t(project.title)

  return (
    <article className="group card flex h-full flex-col overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl">
      {/* Media */}
      <div className="relative h-40 overflow-hidden border-b border-line bg-gradient-to-br from-[var(--g-from)]/10 via-[var(--g-via)]/5 to-[var(--g-to)]/10">
        {project.image ? (
          <img
            src={project.image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Layers
              aria-hidden="true"
              className="h-12 w-12 text-primary/40"
            />
          </div>
        )}
        <span className="absolute top-3 left-3 rounded-full border border-line bg-surface/90 px-3 py-1 text-xs font-semibold backdrop-blur">
          {s.categories[project.category]}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <p className="text-xs font-semibold tracking-wide text-muted uppercase">
            {t(project.role)} · {t(project.period)}
          </p>
          <h3 className="mt-1.5 text-lg font-bold">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            {t(project.description)}
          </p>
        </div>

        <div>
          <p className="mb-2 text-xs font-bold tracking-wider text-muted uppercase">
            {s.featuresTitle}
          </p>
          <ul className="space-y-1.5">
            {project.features.slice(0, 3).map((feature) => (
              <li
                key={t(feature)}
                className="flex items-start gap-2 text-sm text-muted"
              >
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {t(feature)}
              </li>
            ))}
          </ul>
        </div>

        <ul
          className="flex flex-wrap gap-1.5"
          aria-label={fmt(s.techAria, { name: title })}
        >
          {project.technologies.map((tech) => (
            <li
              key={t(tech)}
              className="rounded-md bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted"
            >
              {t(tech)}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-3 pt-2">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              <GithubIcon className="h-4 w-4" />
              {s.githubOpen}
              <span className="sr-only"> — {title} {s.githubSuffix}</span>
            </a>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
            >
              <ExternalLink aria-hidden="true" className="h-4 w-4" />
              {s.demoLabel}
              <span className="sr-only"> {title} {s.demoSuffix}</span>
            </a>
          ) : null}
          {!project.github && !project.demo ? (
            <span className="text-xs text-muted">{s.internalNote}</span>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export function Projects() {
  const { s } = useLanguage()
  const [filter, setFilter] = useState<string>('All')

  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  )

  return (
    <section
      id="proyek"
      aria-labelledby="projects-title"
      className="container-page scroll-mt-24 pb-20 md:pb-28"
    >
      <SectionTitle
        id="projects-title"
        eyebrow={s.projectsEyebrow}
        title={s.projectsTitle}
        description={s.projectsDesc}
      />

      {/* Filter */}
      <div
        className="mb-10 flex flex-wrap justify-center gap-2"
        role="group"
        aria-label={s.filterAria}
      >
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setFilter(category)}
            aria-pressed={filter === category}
            className={cn(
              'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
              filter === category
                ? 'border-primary bg-primary text-primary-contrast'
                : 'border-line bg-surface text-muted hover:border-primary hover:text-primary',
            )}
          >
            {category === 'All' ? s.filterAll : s.categories[category]}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="py-12 text-center text-muted">{s.projectsEmpty}</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {visible.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 90} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      )}
    </section>
  )
}
