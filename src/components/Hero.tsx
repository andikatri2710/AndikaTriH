import { ArrowRight, Download, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import { socials } from '../data/socials'
import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'

/** Subtle dot grid pattern used as a hero background ornament. */
function DotGrid() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"
      style={{
        backgroundImage:
          'linear-gradient(var(--c-line) 1px, transparent 1px), linear-gradient(90deg, var(--c-line) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    />
  )
}

export function Hero() {
  const { s, t } = useLanguage()

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* Background decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <DotGrid />
        </div>
      </div>

      <div className="container-page relative flex min-h-svh flex-col justify-center gap-14 pt-28 pb-20 xl:flex-row xl:items-center xl:gap-10 xl:pt-24">
        {/* Copy */}
        <div className="flex-1">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
              </span>
              {t(profile.availabilityLabel)}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <p className="mb-3 text-lg font-medium text-muted">{s.greeting}</p>
          </Reveal>

          <Reveal delay={140}>
            <h1
              id="hero-title"
              className="text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl"
            >
              <span className="text-gradient">{profile.name}</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-4 text-xl font-semibold sm:text-2xl">{profile.role}</p>
          </Reveal>

          <Reveal delay={260}>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {t(profile.tagline)}
            </p>
          </Reveal>

          <Reveal delay={320}>
            <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-muted">
              <MapPin aria-hidden="true" className="h-4 w-4" />
              {profile.location}
            </p>
          </Reveal>

          <Reveal delay={380}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#proyek"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-contrast transition-all hover:-translate-y-0.5 hover:bg-primary-strong sm:text-base"
              >
                {s.viewWork}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
              <a
                href="#kontak"
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary sm:text-base"
              >
                {s.ctaContact}
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted transition-colors hover:text-primary"
              >
                <Download aria-hidden="true" className="h-4 w-4" />
                {s.downloadCv}
              </a>
            </div>
          </Reveal>

          <Reveal delay={440}>
            <ul className="mt-8 flex items-center gap-3" aria-label={s.socialsAria}>
              {socials.map(({ label, url, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={url}
                    target={url.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-muted transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                  >
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Visual: circular monogram card */}
        <Reveal delay={260} className="mx-auto w-full max-w-[26rem] xl:mx-0">
          <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-[var(--g-from)] via-[var(--g-via)] to-[var(--g-to)] p-[3px] shadow-2xl shadow-primary/20">
            <div className="relative h-full w-full rounded-[calc(2rem-3px)] bg-surface">
              <div className="flex h-full items-center justify-center">
                <span className="text-7xl font-extrabold tracking-tight text-gradient sm:text-8xl">
                  {profile.initials}
                </span>
              </div>
              <div className="border-t border-line/70 px-4 pb-4">
                <p className="text-xs font-semibold tracking-[0.25em] text-muted uppercase">
                  {profile.role}
                </p>
              </div>
            </div>

            {/* Floating chips */}
            <span className="absolute -top-3 -left-3 rounded-xl border border-primary/40 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold text-primary shadow-lg">
              Laravel
            </span>
            <span className="absolute -right-4 top-1/3 rounded-xl border border-amber-400/40 bg-amber-400/10 px-3 py-1.5 text-[11px] font-semibold text-amber-600 shadow-lg">
              Vue.js
            </span>
            <span className="absolute -bottom-3 right-6 rounded-xl border border-ok/40 bg-ok/10 px-3 py-1.5 text-[11px] font-semibold text-ok shadow-lg">
              AI Integration
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
