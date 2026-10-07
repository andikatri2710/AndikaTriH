import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'

export function Footer() {
  const { s } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-muted">
          © {year} {profile.name}. {s.builtNote}
        </p>
        <nav aria-label={s.navAria}>
          <a href="#top" className="text-sm font-medium text-muted hover:text-primary">
            {s.backToTopLink}
          </a>
        </nav>
      </div>
    </footer>
  )
}
