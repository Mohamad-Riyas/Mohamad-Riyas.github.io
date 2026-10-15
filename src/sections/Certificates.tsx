import { Award, BadgeCheck } from 'lucide-react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { certificates } from '../data/certificates'

export default function Certificates() {
  return (
    <Section id="certificates" eyebrow="Certificates" title="Professional certifications" intro="Each credential can be checked on the issuer’s own page." tone="surface">
      <ul className="grid gap-5 sm:grid-cols-2">
        {certificates.map((c, i) => (
          <li key={c.title}>
            <Reveal delay={(i % 2) * 0.06} className="h-full">
              <article className="glass flex h-full flex-col rounded-3xl p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-secondary/10 text-secondary"><Award size={20} aria-hidden /></span>
                <h3 className="mt-4 text-lg font-semibold leading-snug">{c.title}</h3>
                <p className="mt-1 text-sm text-muted">Issued by {c.issuer}</p>
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost mt-6 !min-h-10 self-start !px-4 !text-sm">
                  <BadgeCheck size={16} aria-hidden />Verify credential<span className="sr-only"> for {c.title} (opens in a new tab)</span>
                </a>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  )
}
