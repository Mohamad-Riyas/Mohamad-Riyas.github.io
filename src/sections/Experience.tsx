import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { experience } from '../data/profile'

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Project and team engineering" intro="Academic and team project work, listed from the most recent. Dates come from repository history." tone="surface">
      <ol className="relative space-y-6 border-l border-white/10 pl-6 sm:pl-8">
        {experience.map((e, i) => (
          <li key={e.title}>
            <Reveal delay={i * 0.05}>
              <span aria-hidden className="absolute -left-[5px] mt-2 size-2.5 rounded-full bg-primary ring-4 ring-bg" />
              <p className="font-mono text-xs text-secondary">{e.period}</p>
              <h3 className="mt-1 text-xl font-semibold">{e.title}</h3>
              <p className="text-sm text-muted">{e.org}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-gray-300">
                {e.points.map((p) => <li key={p} className="flex gap-2"><span className="mt-2 size-1 shrink-0 rounded-full bg-muted" aria-hidden />{p}</li>)}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
