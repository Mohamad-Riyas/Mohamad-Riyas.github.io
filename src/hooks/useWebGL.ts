import { useMemo } from 'react'

/** True when the browser can create a WebGL context. Evaluated once. */
export function useWebGLSupport(): boolean {
  return useMemo(() => {
    if (typeof document === 'undefined') return false
    try {
      const canvas = document.createElement('canvas')
      return Boolean(canvas.getContext('webgl2') ?? canvas.getContext('webgl'))
    } catch {
      return false
    }
  }, [])
}
