import { ArrowUpRight, Monitor } from 'lucide-react'
import { Link } from 'react-router-dom'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { caseStudyProjects } from '../data/projects'

export default function CaseStudies() {
  // The desktop GUI project is shown first: it is the clearest desktop-engineering example.
  const ordered = [...caseStudyProjects].sort((a, b) => Number(b.slug === 'gui-task-management-system') - Number(a.slug === 'gui-task-management-system'))
  return (
    <Section id="case-studies" eyebrow="Case Studies" title="How the work was built" intro="Architecture, decisions and scope for the projects with the most to explain." tone="surface">
      <div className="grid gap-5 md:grid-cols-2">
        {ordered.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.06}>
            <Link to={`/projects/${p.slug}`} className="glass group flex h-full flex-col rounded-3xl p-6 transition-colors hover:border-white/20 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-primary">{p.categories[0]}</span>
                {p.slug === 'gui-task-management-system' && <Monitor size={18} className="text-secondary" aria-hidden />}
              </div>
              <h3 className="mt-4 text-2xl font-semibold">{p.title}</h3>
              <p className="mt-3 flex-1 text-pretty text-muted">{p.caseStudy?.overview}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                Read the case study <ArrowUpRight size={16} aria-hidden className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
