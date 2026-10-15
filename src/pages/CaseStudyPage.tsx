import { ArrowLeft, ExternalLink, Info } from 'lucide-react'
import { Github } from '../components/icons'
import { Link, useParams } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Tag from '../components/Tag'
import TkinterGallery from '../components/TkinterGallery'
import { getProject } from '../data/projects'
import { usePageTitle } from '../hooks/usePageTitle'
import NotFound from './NotFound'

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Reveal className="mt-14">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-5">{children}</div>
    </Reveal>
  )
}

const List = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 text-gray-300">
    {items.map((i) => <li key={i} className="flex gap-3"><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />{i}</li>)}
  </ul>
)

export default function CaseStudyPage() {
  const { slug = '' } = useParams()
  const project = getProject(slug)
  usePageTitle(project?.caseStudy ? `${project.title} case study` : 'Page not found')
  if (!project?.caseStudy) return <NotFound />
  const cs = project.caseStudy
  const isDesktop = project.categories.includes('Desktop GUI')

  return (
    <article className="mx-auto max-w-4xl px-5 pb-24 pt-32 sm:px-8">
      <Link to="/#case-studies" className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-ink"><ArrowLeft size={16} aria-hidden />All case studies</Link>
      <header className="mt-6">
        <div className="flex flex-wrap gap-2">{project.categories.map((c) => <span key={c} className="rounded-full border border-white/10 px-3 py-1 font-mono text-[0.7rem] text-muted">{c}</span>)}</div>
        <h1 className="mt-5 text-4xl font-semibold sm:text-5xl">{project.title}</h1>
        <p className="mt-3 text-xl text-secondary">{project.tagline}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !min-h-10 !px-4 !text-sm">
              {l.kind === 'live' ? <ExternalLink size={15} aria-hidden /> : <Github size={15} aria-hidden />}{l.label}<span className="sr-only"> (opens in a new tab)</span>
            </a>
          ))}
        </div>
      </header>

      <Block title="Overview"><p className="text-pretty text-lg leading-relaxed text-muted">{cs.overview}</p></Block>
      <Block title="My role"><p className="text-pretty text-gray-300">{cs.role}</p></Block>

      <Reveal className="mt-8">
        <aside className="flex gap-3 rounded-2xl border border-secondary/25 bg-secondary/[0.06] p-5 text-sm text-gray-300" aria-label="Scope note">
          <Info size={18} className="mt-0.5 shrink-0 text-secondary" aria-hidden /><p>{cs.scopeNote}</p>
        </aside>
      </Reveal>

      {isDesktop && <Block title="Screenshot gallery"><TkinterGallery /></Block>}
      <Block title="Architecture"><List items={cs.architecture} /></Block>
      <Block title="Technology breakdown"><div className="flex flex-wrap gap-2">{project.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div></Block>
      <Block title="Features"><List items={project.features} /></Block>
      <Block title="Highlights"><List items={cs.highlights} /></Block>
      {cs.challenges && <Block title="Challenges"><List items={cs.challenges} /></Block>}
    </article>
  )
}
