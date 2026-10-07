import { skillGroups } from '../data/skills'
import { useLanguage } from '../i18n/LanguageContext'
import { fmt } from '../i18n/ui'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'

export function Skills() {
  const { s, t } = useLanguage()

  return (
    <section
      id="keahlian"
      aria-labelledby="skills-title"
      className="scroll-mt-24 border-y border-line bg-surface-2/30 py-20 md:py-28"
    >
      <div className="container-page">
        <SectionTitle
          id="skills-title"
          eyebrow={s.skillsEyebrow}
          title={s.skillsTitle}
          description={s.skillsDesc}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={t(group.title)} delay={(i % 3) * 80} className="h-full">
              <article className="card h-full p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                <h3 className="mb-4 text-lg font-bold text-fg">{t(group.title)}</h3>
                <ul
                  className="flex flex-wrap gap-2"
                  aria-label={fmt(s.skillsGroupAria, { group: t(group.title) })}
                >
                  {group.items.map((item) => (
                    <li
                      key={t(item)}
                      className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm font-medium text-muted transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                    >
                      {t(item)}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
