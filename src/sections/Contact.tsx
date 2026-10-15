import { ArrowUpRight } from 'lucide-react'
import { Github, Linkedin } from '../components/icons'
import Section from '../components/Section'
import Reveal from '../components/Reveal'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s build something together" intro="I’m open to graduate software engineering roles, internships and collaborations on frontend, full-stack and desktop projects.">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12">
          <div aria-hidden className="absolute -right-24 -top-24 size-72 rounded-full bg-primary/15 blur-[90px]" />
          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <p className="text-pretty text-lg text-gray-200">The quickest way to reach me is a message on LinkedIn. My code is public on GitHub.</p>
            <div className="flex flex-col gap-3">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-primary !justify-between !py-4">
                <span className="inline-flex items-center gap-2"><Linkedin size={18} aria-hidden />Message on LinkedIn</span><ArrowUpRight size={18} aria-hidden />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost !justify-between !py-4">
                <span className="inline-flex items-center gap-2"><Github size={18} aria-hidden />Browse GitHub</span><ArrowUpRight size={18} aria-hidden />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
