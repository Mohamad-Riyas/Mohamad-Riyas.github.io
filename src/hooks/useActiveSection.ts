import { useEffect, useState } from 'react'

/** Tracks which section id is currently most visible, for nav highlighting. */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState('')
  const key = ids.join('|')
  useEffect(() => {
    const els = key.split('|').map((id) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el))
    if (!els.length) return
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [key])
  return active
}
