import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'

export function About() {
  const { s, t } = useLanguage()

  return (
    <section
      id="tentang"
      aria-labelledby="about-title"
      className="container-page scroll-mt-24 pb-20 md:pb-28"
    >
      <SectionTitle
        id="about-title"
        eyebrow={s.aboutEyebrow}
        title={s.aboutTitle}
        align="left"
      />

      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div className="space-y-5">
          {profile.about.map((paragraph, i) => (
            <Reveal key={i} delay={i * 70}>
              <p className="leading-relaxed text-muted">{t(paragraph)}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <dl className="grid grid-cols-2 gap-4">
            {profile.stats.map((stat) => (
              <div
                key={t(stat.label)}
                className="card p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <dt className="text-sm text-muted">{t(stat.label)}</dt>
                <dd className="mt-1 text-3xl font-extrabold text-gradient">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
