import { Github, Linkedin } from './icons'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}. Built with React, TypeScript and Three.js.</p>
        <div className="flex items-center gap-2">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className="grid size-11 place-items-center rounded-xl hover:bg-white/5 hover:text-ink"><Github size={18} aria-hidden /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className="grid size-11 place-items-center rounded-xl hover:bg-white/5 hover:text-ink"><Linkedin size={18} aria-hidden /></a>
        </div>
      </div>
    </footer>
  )
}
