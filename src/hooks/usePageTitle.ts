import { useEffect } from 'react'

const BASE = 'Mohamad Riyas | Software Engineer – Frontend & Full-Stack Developer'

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | Mohamad Riyas` : BASE
    return () => {
      document.title = BASE
    }
  }, [title])
}
