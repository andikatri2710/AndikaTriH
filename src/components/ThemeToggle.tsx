import { Moon, Sun } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'
import { useTheme } from '../hooks/useTheme'

/** Switches the sage light theme and the dark sage theme. */
export function ThemeToggle() {
  const { s } = useLanguage()
  const { choice, cycle } = useTheme()
  const isDark = choice === 'dark'

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={isDark ? s.themeAriaDark : s.themeAriaLight}
      title={isDark ? s.themeDark : s.themeLight}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors hover:border-primary hover:text-primary"
    >
      {isDark ? (
        <Moon aria-hidden="true" className="h-4 w-4" />
      ) : (
        <Sun aria-hidden="true" className="h-4 w-4" />
      )}
    </button>
  )
}
