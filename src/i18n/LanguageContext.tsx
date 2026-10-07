import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { ui, type Lang, type UiStrings } from './ui'
import type { L10n } from '../types'

const STORAGE_KEY = 'lang'

interface LanguageValue {
  lang: Lang
  setLang: (lang: Lang) => void
  /** UI dictionary for the current language. */
  s: UiStrings
  /** Resolve a data value (plain string or per-language text). */
  t: (value: L10n) => string
}

const LanguageContext = createContext<LanguageValue | null>(null)

function getStoredLang(): Lang {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    if (value === 'id' || value === 'en') return value
  } catch {
    /* storage unavailable */
  }
  return 'id'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getStoredLang)

  // Keep <html lang> in sync for SEO/screen readers.
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* storage unavailable */
    }
  }, [])

  const value = useMemo<LanguageValue>(
    () => ({
      lang,
      setLang,
      s: ui[lang],
      t: (v: L10n) => (typeof v === 'string' ? v : v[lang]),
    }),
    [lang, setLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within <LanguageProvider>')
  }
  return ctx
}
