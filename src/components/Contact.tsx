import { useState } from 'react'
import { Check, Copy, Download, Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { socials } from '../data/socials'
import { useLanguage } from '../i18n/LanguageContext'
import { Reveal } from './Reveal'
import { SectionTitle } from './SectionTitle'

export function Contact() {
  const { s } = useLanguage()
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'failed'>('idle')

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopyState('copied')
    } catch {
      setCopyState('failed')
    }
    window.setTimeout(() => setCopyState('idle'), 2200)
  }

  return (
    <section
      id="kontak"
      aria-labelledby="contact-title"
      className="scroll-mt-24 border-y border-line bg-surface-2/30 py-20 md:py-28"
    >
      <SectionTitle
        id="contact-title"
        eyebrow={s.contactEyebrow}
        title={s.contactTitle}
        description={s.contactDesc}
      />

      <Reveal className="mx-auto max-w-3xl">
        <div className="card overflow-hidden">
          <div className="border-b border-line bg-gradient-to-br from-[var(--g-from)]/10 via-transparent to-[var(--g-to)]/10 p-6 text-center sm:p-8">
            <a
              href={`mailto:${profile.email}`}
              className="text-xl font-bold break-all hover:text-primary sm:text-2xl"
            >
              {profile.email}
            </a>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-contrast transition-all hover:-translate-y-0.5 hover:bg-primary-strong"
              >
                <Mail aria-hidden="true" className="h-4 w-4" />
                {s.sendEmail}
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                aria-live="polite"
              >
                {copyState === 'copied' ? (
                  <>
                    <Check aria-hidden="true" className="h-4 w-4 text-ok" />
                    {s.copied}
                  </>
                ) : copyState === 'failed' ? (
                  <>{s.copyFailed}</>
                ) : (
                  <>
                    <Copy aria-hidden="true" className="h-4 w-4" />
                    {s.copyEmail}
                  </>
                )}
              </button>
            </div>
          </div>

          <ul className="grid gap-3 p-6 sm:grid-cols-3">
            {socials
              .filter((link) => !link.url.startsWith('mailto:'))
              .map(({ label, handle, url, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-line bg-surface p-4 transition-all hover:-translate-y-0.5 hover:border-primary"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon aria-hidden="true" className="h-4.5 w-4.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold">{label}</span>
                      {handle ? (
                        <span className="block truncate text-xs text-muted">{handle}</span>
                      ) : null}
                    </span>
                  </a>
                </li>
              ))}
            <li>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-line bg-surface p-4 transition-all hover:-translate-y-0.5 hover:border-primary"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Download aria-hidden="true" className="h-4.5 w-4.5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold">{s.downloadCv}</span>
                  <span className="block truncate text-xs text-muted">PDF</span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
