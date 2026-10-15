export type ProjectCategory = 'Full Stack' | 'Frontend' | 'Desktop GUI' | 'Android' | 'Academic Project' | 'Team Project'

export interface ProjectLink {
  label: string
  href: string
  kind: 'repo' | 'live' | 'reference'
}

export interface CaseStudy {
  overview: string
  role: string
  architecture: string[]
  highlights: string[]
  challenges?: string[]
  /** Honest scope notes (team context, what is and is not claimed). */
  scopeNote: string
}

export interface Project {
  slug: string
  title: string
  tagline: string
  summary: string
  categories: ProjectCategory[]
  tech: string[]
  features: string[]
  links: ProjectLink[]
  /** Short statement of Mohamad's verified contribution. */
  contribution: string
  featured: boolean
  /** Accent used for the card glow. */
  accent: 'primary' | 'secondary'
  caseStudy?: CaseStudy
}

export interface SkillGroup {
  title: string
  items: { name: string; source: string }[]
}

export interface Certificate {
  title: string
  issuer: string
  href: string
}

export interface TimelineItem {
  period: string
  title: string
  org: string
  points: string[]
}
