import { useLanguage } from '../i18n/LanguageContext'
import type { Lang } from '../i18n/ui'
import { cn } from '../utils/cn'

const OPTIONS: Array<{ value: Lang; key: 'langId' | 'langEn' }> = [
  { value: 'id', key: 'langId' },
  { value: 'en', key: 'langEn' },
]

/** Segmented ID / EN control; choice persists in localStorage. */
export function LanguageSwitcher() {
  const { lang, setLang, s } = useLanguage()

  return (
    <div
      role="group"
      aria-label={s.langAria}
      className="inline-flex items-center rounded-lg border border-line bg-surface p-0.5"
    >
      {OPTIONS.map(({ value, key }) => (
        <button
          key={value}
          type="button"
          onClick={() => setLang(value)}
          aria-pressed={lang === value}
          className={cn(
            'rounded-md px-2 py-1 text-xs font-semibold transition-colors',
            lang === value
              ? 'bg-primary text-primary-contrast'
              : 'text-muted hover:text-fg',
          )}
        >
          {s[key]}
        </button>
      ))}
    </div>
  )
}
