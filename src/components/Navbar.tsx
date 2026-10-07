import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ThemeToggle } from './ThemeToggle'
import { useActiveSection } from '../hooks/useActiveSection'
import { useLanguage } from '../i18n/LanguageContext'
import { profile } from '../data/profile'
import { fmt } from '../i18n/ui'
import { cn } from '../utils/cn'

/** Section ids are identical in every language — keep them stable. */
const SECTION_IDS = ['tentang', 'keahlian', 'proyek', 'pengalaman', 'layanan', 'kontak']

export function Navbar() {
  const { s } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-all',
        scrolled || open
          ? 'border-line bg-surface/95 shadow-sm'
          : 'border-line/70 bg-bg/85',
      )}
    >
      <nav aria-label={s.navAria} className="container-page flex h-16 items-center justify-between">
        <a
          href="#top"
          aria-label={fmt(s.logoAria, { name: profile.name })}
          className="flex items-center gap-2 font-bold tracking-tight text-fg"
        >
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--g-from)] via-[var(--g-via)] to-[var(--g-to)] text-sm font-extrabold text-white shadow-sm"
          >
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {s.navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? 'true' : undefined}
                className={cn(
                  'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  active === item.id
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted hover:text-fg hover:bg-surface/60',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <a
            href="#kontak"
            className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-contrast transition-colors hover:bg-primary-strong sm:inline-flex"
          >
            {s.ctaContact}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? s.menuClose : s.menuOpen}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-primary hover:text-primary lg:hidden"
          >
            {open ? (
              <X aria-hidden="true" className="h-5 w-5" />
            ) : (
              <Menu aria-hidden="true" className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-surface/95 lg:hidden"
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {s.navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === item.id ? 'true' : undefined}
                className={cn(
                  'block rounded-lg px-3 py-2.5 text-base font-medium transition-colors',
                  active === item.id
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted hover:text-fg',
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="#kontak"
              onClick={() => setOpen(false)}
              className="block rounded-lg bg-primary px-3 py-2.5 text-center text-base font-semibold text-primary-contrast"
            >
              {s.ctaContact}
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
