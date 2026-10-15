import type { TimelineItem } from '../types'

export const profile = {
  name: 'Mohamad Riyas',
  title: 'Software Engineer | Frontend & Full-Stack Developer',
  github: 'https://github.com/Mohamad-Riyas',
  linkedin: 'https://www.linkedin.com/in/mohamad-riyas-94735b350/',
  degree: 'BEng (Hons) Software Engineering',
  institute: 'Informatics Institute of Technology (IIT)',
  university: 'University of Westminster',
  intro:
    'Final-year Software Engineering student focused on frontend engineering, full-stack systems, desktop software and collaborative platforms, with an eye for user-focused digital experiences.',
  about: [
    'I build software across the stack: a real-time collaborative workspace in React and Node.js, a university smart-locker product site, an educational web platform for Grade 10 & 11 mathematics, and a Python desktop application written in clear, staged iterations.',
    'My work is anchored in readable interfaces and dependable structure. I care about how a product feels in the first ten seconds and how maintainable it is in the next ten months.',
    'I work comfortably in teams. Where a project was collaborative, this portfolio says so and names the parts I actually contributed.',
  ],
  facts: [
    { label: 'Focus', value: 'Frontend · Full-Stack · Desktop' },
    { label: 'Studying', value: 'BEng (Hons) Software Engineering' },
    { label: 'Languages', value: 'English · Sinhala' },
    { label: 'Based in', value: 'Sri Lanka' },
  ],
}

/** Engineering experience: academic and team project work only. Dates come from repository history. */
export const experience: TimelineItem[] = [
  {
    period: '2026',
    title: 'Production hardening of SyncSpace',
    org: 'SyncSpace · derived repository (original by the Axlero G17 team)',
    points: [
      'Role-based interview permissions enforced server-side for interviewer, admin and candidate.',
      'Audit logging, session recordings, and MongoDB-backed project files and folders.',
      'Redesigned in-app guide chat and a documented change report of fixes.',
    ],
  },
  {
    period: 'Dec 2025 – Mar 2026',
    title: 'UI/UX Design Lead & frontend developer',
    org: 'Securefy · five-person team project',
    points: [
      'Authored 42 of the repository’s 44 commits and held the UI/UX Design Lead role on the team.',
      'Iterated on the React interface, page metadata (React Helmet) and call-to-action links through to the securefy.online launch.',
        ],
  },
  {
    period: 'Jul 2025',
    title: 'Frontend developer: Feedback & Team pages',
    org: 'Life Below Water (SDG 14) · team website',
    points: ['Developed the feedback form with required-field and length validation, and the responsive team page.'],
  },
  {
    period: 'Mar – Apr 2025',
    title: 'Desktop application developer',
    org: 'GUI Task Management System · academic project',
    points: [
      'Delivered a Python/Tkinter task manager across four staged iterations: lists, text files, dictionaries and JSON, then an object-oriented GUI.',
    ],
  },
]
