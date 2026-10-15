import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Github } from './icons'
import { Link } from 'react-router-dom'
import type { MouseEvent } from 'react'
import type { Project } from '../types'
import Tag from './Tag'

const iconFor = (kind: string) => (kind === 'live' ? <ExternalLink size={15} aria-hidden /> : <Github size={15} aria-hidden />)

export default function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  const reduced = useReducedMotion()
  const glow = project.accent === 'primary' ? '16,185,129' : '6,182,212'

  // Cursor spotlight: sets CSS variables only, so no React re-render per pointer move.
  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <motion.article
      onMouseMove={onMove}
      whileHover={reduced ? undefined : { y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className={`glass group relative flex flex-col overflow-hidden rounded-3xl p-6 sm:p-8 ${large ? 'md:col-span-2' : ''}`}
      style={{ ['--glow' as string]: glow }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(420px circle at var(--mx,50%) var(--my,0%), rgba(${glow},0.12), transparent 60%)` }}
      />
      <div className="relative flex flex-wrap gap-2">
        {project.categories.map((c) => (
          <span key={c} className="rounded-full border border-white/10 px-3 py-1 font-mono text-[0.7rem] text-muted">{c}</span>
        ))}
      </div>
      <h3 className={`relative mt-5 font-semibold ${large ? 'text-3xl sm:text-4xl' : 'text-2xl'}`}>{project.title}</h3>
      <p className="relative mt-1 text-[0.95rem] text-secondary">{project.tagline}</p>
      <p className="relative mt-4 text-pretty text-muted">{project.summary}</p>

      {project.features.length > 0 && (
        <ul className={`relative mt-5 grid gap-2 text-sm text-gray-300 ${large ? 'md:grid-cols-2 md:gap-x-8' : ''}`}>
          {project.features.slice(0, large ? 6 : 3).map((f) => (
            <li key={f} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />{f}</li>
          ))}
        </ul>
      )}

      <div className="relative mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => <Tag key={t}>{t}</Tag>)}
      </div>

      <p className="relative mt-5 border-t border-white/8 pt-4 text-sm text-muted">
        <span className="font-medium text-gray-200">Contribution: </span>{project.contribution}
      </p>

      <div className="relative mt-6 flex flex-wrap items-center gap-3">
        {project.links.map((l) => (
          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !min-h-10 !px-4 !text-sm">
            {iconFor(l.kind)}{l.label}<span className="sr-only"> (opens in a new tab)</span>
          </a>
        ))}
        {project.caseStudy && (
          <Link to={`/projects/${project.slug}`} className="btn btn-primary !min-h-10 !px-4 !text-sm">
            Case study <ArrowUpRight size={15} aria-hidden />
          </Link>
        )}
      </div>
    </motion.article>
  )
}
