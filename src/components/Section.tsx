import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface Props {
  id: string
  eyebrow: string
  title: string
  intro?: string
  children: ReactNode
  tone?: 'base' | 'surface'
}

export default function Section({ id, eyebrow, title, intro, children, tone = 'base' }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={tone === 'surface' ? 'bg-surface/60' : ''}>
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
          <h2 id={`${id}-title`} className="text-3xl font-semibold sm:text-4xl">{title}</h2>
          {intro && <p className="mt-4 text-pretty text-muted">{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  )
}
