import { useEffect, useState } from 'react'

/**
 * Returns the id of the section currently in view (scroll spy).
 * Uses IntersectionObserver with a centered root margin so the active link
 * changes when a section crosses the middle of the viewport.
 */
export function useActiveSection(ids: string[]): string {
  // No active link until a section actually crosses the viewport midline.
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) {
          setActive(visible[0].target.id)
          return
        }
        // No section crosses the midline (e.g. page top or a gap):
        // clear the highlight when we are above the first section,
        // otherwise keep the last active section.
        const first = elements[0]
        if (first && first.getBoundingClientRect().top > window.innerHeight / 2) {
          setActive('')
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}
