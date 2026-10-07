import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

export function BackToTop() {
  const { s } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
            ? 'auto'
            : 'smooth',
        })
      }
      aria-label={s.backToTopAria}
      className="fixed right-4 bottom-4 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-fg shadow-lg transition-all hover:border-primary hover:text-primary sm:right-6 sm:bottom-6"
    >
      <ArrowUp aria-hidden="true" className="h-5 w-5" />
    </button>
  )
}
