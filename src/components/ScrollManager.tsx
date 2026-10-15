import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls to #hash targets after navigation, and to the top on route changes. */
export default function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        // Wait a frame so lazily mounted sections exist.
        requestAnimationFrame(() => el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }))
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}
