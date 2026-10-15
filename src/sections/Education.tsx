import { GraduationCap } from 'lucide-react'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { profile } from '../data/profile'

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <Reveal>
        <article className="glass flex flex-col gap-5 rounded-3xl p-6 sm:flex-row sm:items-center sm:p-8">
          <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary"><GraduationCap aria-hidden /></span>
          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">{profile.degree}</h3>
            <p className="mt-1 text-gray-200">{profile.institute}</p>
            <p className="text-muted">{profile.university} · Final-year student</p>
          </div>
        </article>
      </Reveal>
    </Section>
  )
}
