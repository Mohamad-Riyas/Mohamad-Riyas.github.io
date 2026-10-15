import { lazy, Suspense, useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { Github, Linkedin } from '../components/icons'
import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { useWebGLSupport } from '../hooks/useWebGL'
import { useMediaQuery } from '../hooks/useMediaQuery'
import ErrorBoundary from '../components/ErrorBoundary'
import HeroFallback from '../components/hero/HeroFallback'

const HeroScene = lazy(() => import('../components/hero/HeroScene'))

const projectsInScene = ['SyncSpace', 'Securefy', 'NaviGuard', 'MathMastery']

export default function Hero() {
  const reduced = useReducedMotion() ?? false
  const compact = useMediaQuery('(max-width: 767px)')
  const webgl = useWebGLSupport()
  const [lost, setLost] = useState(false)
  // Mount the heavy 3D scene after first paint so the hero copy renders immediately.
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const w = window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number; cancelIdleCallback?: (id: number) => void }
    if (w.requestIdleCallback && w.cancelIdleCallback) {
      const id = w.requestIdleCallback(() => setReady(true), { timeout: 1200 })
      return () => w.cancelIdleCallback?.(id)
    }
    const t = window.setTimeout(() => setReady(true), 400)
    return () => window.clearTimeout(t)
  }, [])
  const showScene = webgl && !lost
  const fallback = <HeroFallback />

  const item = (i: number) => ({
    initial: reduced ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section id="top" aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden pt-28 lg:pt-0">
      <div aria-hidden className="grid-bg absolute inset-0 -z-10" />
      <div aria-hidden className="absolute -left-40 top-20 -z-10 size-[28rem] rounded-full bg-primary/10 blur-[110px]" />
      <div aria-hidden className="absolute -right-32 top-1/3 -z-10 size-[26rem] rounded-full bg-secondary/10 blur-[110px]" />

      {/* 3D workspace: full-bleed behind the copy on desktop, stacked below it on small screens */}
      <div className="order-2 -mt-4 h-[340px] w-full sm:h-[420px] lg:absolute lg:inset-0 lg:-z-[5] lg:order-none lg:mt-0 lg:h-auto">
        {showScene ? (
          <ErrorBoundary fallback={fallback}>
            <Suspense fallback={null}>
              {ready && <HeroScene reduced={reduced} compact={compact} onLost={() => setLost(true)} />}
            </Suspense>
          </ErrorBoundary>
        ) : (
          <div className="h-full pt-6 lg:pl-[48%] lg:pt-32">{fallback}</div>
        )}
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-1 items-center px-5 sm:px-8">
        <div className="max-w-xl py-10 lg:py-0">
          <motion.div {...item(0)} className="avatar-ring mb-6 size-28 sm:size-32">
            <img src="/profile.jpg" alt="Portrait of Mohamad Riyas" width={256} height={256} className="size-full rounded-full object-cover object-top" />
          </motion.div>
          <motion.p {...item(0)} className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-muted">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden /> Final-year BEng (Hons) Software Engineering
          </motion.p>
          <motion.h1 id="hero-title" {...item(1)} className="text-balance text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
            Hi, I’m <span className="gradient-text">{profile.name}</span>
          </motion.h1>
          <motion.p {...item(2)} className="mt-4 font-display text-lg text-gray-200 sm:text-xl">{profile.title}</motion.p>
          <motion.p {...item(3)} className="mt-5 max-w-md text-pretty text-muted">{profile.intro}</motion.p>
          <motion.ul {...item(4)} aria-label="Projects shown in the 3D scene" className="mt-6 flex flex-wrap gap-2">
            {projectsInScene.map((p) => <li key={p} className="tag">{p}</li>)}
          </motion.ul>
          <motion.div {...item(5)} className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/#projects" className="btn btn-primary">View projects <ArrowDown size={16} aria-hidden /></Link>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><Github size={16} aria-hidden />GitHub<span className="sr-only"> (opens in a new tab)</span></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><Linkedin size={16} aria-hidden />LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
