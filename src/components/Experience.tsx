import { Building2, GraduationCap } from 'lucide-react'
import { education, experiences } from '../data/experience'
import { useLanguage } from '../i18n/LanguageContext'
import { fmt } from '../i18n/ui'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'

export function Experience() {
  const { s, t } = useLanguage()

  return (
    <section
      id="pengalaman"
      aria-labelledby="experience-title"
      className="scroll-mt-24 border-y border-line bg-surface-2/30 py-20 md:py-28"
    >
      <div className="container-page">
        <SectionTitle
          id="experience-title"
          eyebrow={s.expEyebrow}
          title={s.expTitle}
          description={s.expDesc}
        />

        <ol className="relative mx-auto max-w-3xl space-y-8 border-l-2 border-line pl-6 sm:pl-10">
          {experiences.map((exp, i) => (
            <Reveal as="li" key={exp.company} delay={i * 90} className="relative">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-surface shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_0_3px_var(--c-primary)]/20" />
              </span>

              <article className="card p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-bold">
                      <Building2 aria-hidden="true" className="h-4 w-4 text-primary" />
                      {exp.company}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-primary">
                      {t(exp.position)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{t(exp.period)}</p>
                    <p className="text-xs text-muted">{exp.location}</p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.highlights.map((item) => (
                    <li
                      key={t(item)}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {t(item)}
                    </li>
                  ))}
                </ul>

                <ul
                  className="mt-4 flex flex-wrap gap-1.5"
                  aria-label={fmt(s.techAria, { name: exp.company })}
                >
                  {exp.technologies.map((tech) => (
                    <li
                      key={t(tech)}
                      className="rounded-md bg-surface-2 px-2.5 py-1 text-xs font-medium text-muted"
                    >
                      {t(tech)}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}

          {education.map((edu) => (
            <Reveal as="li" key={edu.institution} className="relative">
              <span
                aria-hidden="true"
                className="absolute left-0 top-1 flex h-4 w-4 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-surface shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_0_3px_var(--c-primary)]/20" />
              </span>

              <div className="card flex flex-wrap items-center justify-between gap-x-4 gap-y-1 p-6">
                <div>
                  <h3 className="flex items-center gap-2 text-lg font-bold">
                    <GraduationCap aria-hidden="true" className="h-4 w-4 text-primary" />
                    {edu.institution}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{t(edu.degree)}</p>
                </div>
                <p className="text-sm font-medium">{t(edu.period)}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
