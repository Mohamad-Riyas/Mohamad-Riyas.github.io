import Section from '../components/Section'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { featuredProjects } from '../data/projects'

export default function FeaturedProjects() {
  return (
    <Section id="projects" eyebrow="Featured Projects" title="Selected work" intro="Web, full-stack, desktop and mobile projects. Each card states what I contributed, including where the work was a team effort.">
      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.06} className={i === 0 ? 'md:col-span-2' : ''}>
            <ProjectCard project={p} large={i === 0} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
