import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { skillGroups } from '../data/skills'

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Technologies I have shipped with" intro="Every item is confirmed by a repository dependency, a source file or a certificate. Hover or focus a skill to see where it appears." tone="surface">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={(i % 3) * 0.05}>
            <section aria-labelledby={`skill-${i}`} className="glass h-full rounded-3xl p-6">
              <h3 id={`skill-${i}`} className="font-mono text-xs uppercase tracking-widest text-primary">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li key={s.name}>
                    <span tabIndex={0} title={`Seen in: ${s.source}`} className="tag inline-block cursor-default !text-[0.8rem] hover:border-primary/40 hover:text-ink">
                      {s.name}
                      <span className="sr-only">, seen in {s.source}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
