import { Users } from 'lucide-react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'

export default function Community() {
  return (
    <Section id="community" eyebrow="Community & Leadership" title="Beyond the code">
      <Reveal>
        <article className="glass flex flex-col gap-5 rounded-3xl p-6 sm:flex-row sm:items-center sm:p-8">
          <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-secondary/10 text-secondary"><Users aria-hidden /></span>
          <div>
            <h3 className="text-xl font-semibold">Leo Club</h3>
            <p className="mt-1 text-muted">Member of the Leo Club, a youth community-service organisation.</p>
          </div>
        </article>
      </Reveal>
    </Section>
  )
}
