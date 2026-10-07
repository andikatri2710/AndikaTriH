import { services } from '../data/services'
import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'

export function Services() {
  const { s, t } = useLanguage()

  return (
    <section
      id="layanan"
      aria-labelledby="services-title"
      className="scroll-mt-24 border-y border-line bg-surface-2/30 py-20 md:py-28"
    >
      <div className="container-page">
        <SectionTitle
          id="services-title"
          eyebrow={s.servicesEyebrow}
          title={s.servicesTitle}
          description={s.servicesDesc}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal key={t(service.title)} delay={(i % 3) * 80} className="h-full">
                <article className="card h-full p-6 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-sm">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-bold">{t(service.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t(service.description)}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
