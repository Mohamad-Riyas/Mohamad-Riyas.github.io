import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { profile } from '../data/profile'

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineering with a product mindset">
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="space-y-5 text-pretty text-muted lg:col-span-3">
          {profile.about.map((p, i) => <Reveal key={i} delay={i * 0.06}><p className="text-[1.02rem] leading-relaxed">{p}</p></Reveal>)}
        </div>
        <Reveal delay={0.1} className="space-y-6 lg:col-span-2">
          <div className="avatar-ring mx-auto size-56 sm:size-64">
            <img src="/profile.jpg" alt="Mohamad Riyas" width={512} height={512} loading="lazy" className="size-full rounded-full object-cover object-top" />
          </div>
          <dl className="glass grid gap-5 rounded-3xl p-6 sm:p-8">
            {profile.facts.map((f) => (
              <div key={f.label}>
                <dt className="font-mono text-xs uppercase tracking-widest text-primary">{f.label}</dt>
                <dd className="mt-1 text-gray-100">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  )
}
