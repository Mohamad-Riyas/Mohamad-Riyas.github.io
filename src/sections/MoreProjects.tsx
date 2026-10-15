import { Github } from '../components/icons'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import Tag from '../components/Tag'
import { getProject, smallProjects } from '../data/projects'

export default function MoreProjects() {
  const sdg = getProject('life-below-water')
  return (
    <Section id="more-projects" eyebrow="More Projects" title="Smaller builds and team contributions">
      {sdg && (
        <Reveal>
          <article className="glass rounded-3xl p-6 sm:p-8" aria-labelledby="sdg-title">
            <p className="font-mono text-xs text-primary">Project Contribution · Team website</p>
            <h3 id="sdg-title" className="mt-3 text-2xl font-semibold">{sdg.title}</h3>
            <p className="mt-1 text-secondary">{sdg.tagline}</p>
            <div className="mt-6 grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="text-sm font-semibold text-gray-200">My contribution</h4>
                <ul className="mt-3 space-y-2 text-sm text-gray-300">
                  {['Feedback page development', 'Team page development', 'Frontend UI development', 'Form design and validation', 'Responsive layout implementation', 'Team information display'].map((c) => (
                    <li key={c} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />{c}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-200">Scope</h4>
                <p className="mt-3 text-sm text-muted">{sdg.contribution}</p>
                <div className="mt-4 flex flex-wrap gap-2">{sdg.tech.map((t) => <Tag key={t}>{t}</Tag>)}</div>
                <a href={sdg.links[0].href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-6 !min-h-10 !px-4 !text-sm">
                  <Github size={15} aria-hidden />Repository<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>
          </article>
        </Reveal>
      )}
      <ul className="mt-6 grid gap-4 sm:grid-cols-3">
        {smallProjects.map((p, i) => (
          <li key={p.title}>
            <Reveal delay={i * 0.05} className="h-full">
              <div className="glass h-full rounded-2xl p-5">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted">{p.note}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
