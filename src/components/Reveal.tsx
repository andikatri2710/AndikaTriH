import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '../utils/cn'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Delay in ms before the transition starts (staggered entrances). */
  delay?: number
  as?: 'div' | 'li' | 'article' | 'section'
}

/**
 * Fades/slides children in when they enter the viewport.
 * Respects prefers-reduced-motion via CSS (content stays visible).
 */
export function Reveal({ children, className, delay = 0, as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={cn('reveal', visible && 'is-visible', className)}
      style={delay > 0 ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
