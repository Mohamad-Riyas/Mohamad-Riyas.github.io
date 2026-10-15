import type { SkillGroup } from '../types'

/** Every entry is confirmed by a repository dependency, source file, or certificate. */
export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming Languages',
    items: [
      { name: 'JavaScript', source: 'SyncSpace, Securefy, MathMastery' },
      { name: 'TypeScript', source: 'Securefy, SyncSpace team repo' },
      { name: 'Python', source: 'GUI Task Manager, certificates' },
      { name: 'Java', source: 'LinkedIn Learning certificate' },
      { name: 'HTML & CSS', source: 'MathMastery, SDG 14 website' },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', source: 'SyncSpace, Securefy' },
      { name: 'Vite', source: 'SyncSpace, Securefy' },
      { name: 'Tailwind CSS', source: 'SyncSpace' },
      { name: 'Framer Motion', source: 'Securefy' },
      { name: 'React Router', source: 'SyncSpace' },
      { name: 'Three.js', source: 'SyncSpace dependencies' },
      { name: 'Monaco Editor & Konva', source: 'SyncSpace workspace' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', source: 'SyncSpace' },
      { name: 'Express', source: 'SyncSpace' },
      { name: 'Socket.IO & Yjs', source: 'SyncSpace real-time layer' },
      { name: 'JWT & Google Sign-In', source: 'SyncSpace auth' },
      { name: 'Nodemailer', source: 'SyncSpace notifications' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'MongoDB & Mongoose', source: 'SyncSpace models' },
      { name: 'JSON persistence', source: 'GUI Task Manager' },
    ],
  },
  {
    title: 'Desktop Development',
    items: [
      { name: 'Python Tkinter / ttk', source: 'GUI Task Manager' },
      { name: 'Object-oriented design', source: 'Task, TaskManager, TaskManagerGUI' },
    ],
  },
  {
    title: 'Android Development',
    items: [{ name: 'Android application development', source: 'NaviGuard' }],
  },
  {
    title: 'Tools & Collaboration',
    items: [
      { name: 'Git & GitHub', source: 'All repositories' },
      { name: 'GitHub Actions', source: 'SyncSpace workflow' },
      { name: 'Vercel', source: 'Securefy, MathMastery' },
      { name: 'Oxlint', source: 'SyncSpace frontend' },
    ],
  },
]
