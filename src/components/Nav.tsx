import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useActiveSection } from '../hooks/useActiveSection'
import { profile } from '../data/profile'

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'community', label: 'Community' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav({ onHome }: { onHome: boolean }) {
  const [open, setOpen] = useState(false)
  const tracked = useActiveSection(onHome ? navItems.map((n) => n.id) : [])
  const active = onHome ? tracked : ''

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav aria-label="Primary" className="glass mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 sm:px-5" style={{ width: 'calc(100% - 1.5rem)' }}>
        <Link to="/" className="font-display text-[1.05rem] font-semibold tracking-tight" onClick={() => setOpen(false)}>
          <span className="gradient-text">M.</span> Riyas
        </Link>
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((n) => (
            <li key={n.id}>
              <Link
                to={`/#${n.id}`}
                aria-current={active === n.id ? 'true' : undefined}
                className={`rounded-lg px-3 py-2 text-sm transition-colors ${active === n.id ? 'bg-white/8 text-ink' : 'text-muted hover:text-ink'}`}
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-primary hidden !min-h-10 !px-4 !text-sm sm:inline-flex">
            Let’s talk<span className="sr-only"> (opens LinkedIn)</span>
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-xl border border-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="glass mx-auto mt-2 max-w-6xl rounded-2xl p-3 lg:hidden"
            style={{ width: 'calc(100% - 1.5rem)' }}
          >
            <ul className="grid gap-1">
              {navItems.map((n) => (
                <li key={n.id}>
                  <Link to={`/#${n.id}`} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-muted hover:bg-white/5 hover:text-ink">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
