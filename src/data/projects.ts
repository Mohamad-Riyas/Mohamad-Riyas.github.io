import type { Project } from '../types'

/**
 * All content below was verified against the repositories' source, manifests and READMEs.
 * Where a project was collaborative, `contribution` and `caseStudy.scopeNote` say so.
 */
export const projects: Project[] = [
  {
    slug: 'syncspace',
    title: 'SyncSpace',
    tagline: 'Real-time collaborative workspace for interviews and pair programming',
    summary:
      'A web workspace that puts a shared whiteboard and a collaborative code editor in one room, with role-based interviews, session recordings and an audit trail.',
    categories: ['Full Stack', 'Team Project'],
    tech: ['React 19', 'Vite', 'Tailwind CSS 4', 'Monaco Editor', 'Konva', 'Yjs', 'Socket.IO', 'Node.js', 'Express 5', 'MongoDB', 'JWT'],
    features: [
      'Live code editing with Monaco and Yjs, and whiteboard drawing with Konva over Socket.IO',
      'Workspaces with invite links, plus email/password (JWT) and Google sign-in',
      'Interviewer, admin and candidate roles enforced on the server',
      'Interview scoring, recordings, admin tools and a full audit log',
      'In-browser JavaScript execution in an isolated Web Worker with a timeout',
    ],
    links: [
      { label: 'Repository', href: 'https://github.com/Mohamad-Riyas/Project-SyncSpace', kind: 'repo' },
      { label: 'Original team repository', href: 'https://github.com/Nivo16/SyncSpace_Workplace_AxleroProject1', kind: 'reference' },
    ],
    contribution:
      'Team project. The original platform was built by the Axlero G17 team; Mohamad maintains a derived repository focused on production hardening and extending the product.',
    featured: true,
    accent: 'primary',
    caseStudy: {
      overview:
        'Remote technical interviews on screen-sharing tools leave the interviewer watching passively. SyncSpace gives both people one live surface: a shared editor, a shared whiteboard, and tooling to review the session afterwards.',
      role: 'Production hardening and feature work in a derived repository: role-based permissions, interviews, recordings, audit logging, file persistence and UX fixes.',
      architecture: [
        'Frontend: React 19 + Vite SPA with React Router, Tailwind CSS 4, Monaco Editor and react-konva.',
        'Real-time layer: Socket.IO with Yjs (y-monaco, y-socket.io) so editor state converges across clients.',
        'API: Express 5 routes for auth, workspaces, files, interviews, recordings, admin and audit, secured by JWT middleware.',
        'Data: Mongoose models for users, workspaces, workspace files, interviews, recordings, audit logs and Yjs documents on MongoDB.',
      ],
      highlights: [
        'Interview creation limited to interviewer/admin roles; start, end, notes, scoring and recording protected server-side for the assigned interviewer or an admin.',
        'Interview results store a 0–100 score with feedback and start/end timestamps.',
        'MongoDB-backed project files and folders with nested creation, save and recursive delete.',
        'Workspace edits broadcast over Socket.IO so open sessions update without a refresh.',
        'A documented change report records each fix and what was validated.',
      ],
      challenges: [
        'Keeping several clients’ editor state consistent, which is why Yjs sits underneath Socket.IO.',
        'Making permission rules a backend concern instead of trusting the UI.',
      ],
      scopeNote:
        'SyncSpace is a team project and the original architecture belongs to the Axlero G17 team (yashkoparde, RaneSoham27, Siddharth7975). Mohamad’s work is the derived Project-SyncSpace repository described above.',
    },
  },
  {
    slug: 'securefy',
    title: 'Securefy',
    tagline: 'Smart locker system for a university library',
    summary:
      'The product website for Securefy, a smart locker concept for IIT’s library: animated hero, problem/solution story, feature showcase, usage timeline and team.',
    categories: ['Frontend', 'Team Project'],
    tech: ['React', 'Vite', 'Framer Motion', 'React Icons', 'React Helmet', 'Vercel'],
    features: [
      'Animated hero with a QR-access visual and a responsive navigation bar',
      'Problem and solution narrative, feature showcase and step-by-step access timeline',
      'Statistics, testimonials, team and contact sections',
      'SEO metadata, robots and sitemap files, and Vercel deployment config',
    ],
    links: [
      { label: 'Live site', href: 'https://securefy.online', kind: 'live' },
      { label: 'Repository', href: 'https://github.com/Mohamad-Riyas/Securefy--Smart-Locker-System', kind: 'repo' },
    ],
    contribution: 'UI/UX Design Lead in a five-person team; authored 42 of the repository’s 44 commits.',
    featured: true,
    accent: 'secondary',
    caseStudy: {
      overview:
        'Securefy presents a campus smart-locker idea: reserve a locker, receive a QR code, scan to open. The site had to make that flow understandable and trustworthy at a glance.',
      role: 'UI/UX Design Lead and primary frontend developer.',
      architecture: [
        'React + Vite single-page app with sections split into layout, sections and ui component folders.',
        'Framer Motion for entrance and interaction animation; React Icons for iconography.',
        'React Helmet for page metadata; vercel.json with SPA rewrites for deployment.',
      ],
      highlights: [
        'A hero that pairs the product pitch with a QR-code panel to explain access in one view.',
        'A numbered timeline that walks through reserve, receive code, scan, open.',
        'Reusable Button, Card, Modal and Loader components shared across sections.',
      ],
      scopeNote:
        'This repository is the product’s web front end. Locker hardware, booking logic and any backend are outside it, so the site presents those capabilities as the product concept rather than as implemented code. It was built by a team; Mohamad led the interface.',
    },
  },
  {
    slug: 'naviguard',
    title: 'NaviGuard',
    tagline: 'Android application project',
    summary: 'An Android application project. Details are available through the repository.',
    categories: ['Android'],
    tech: ['Android'],
    features: [],
    links: [{ label: 'Repository', href: 'https://github.com/Mohamad-Riyas/NaviGuard', kind: 'repo' }],
    contribution: 'Android application developed by Mohamad.',
    featured: true,
    accent: 'secondary',
  },
  {
    slug: 'mathmastery-online',
    title: 'MathMastery Online',
    tagline: 'Online maths tuition platform for Grade 10 & 11',
    summary:
      'A responsive learning site for Grade 10 & 11 mathematics with course outlines, a weekly timetable, past-paper resources, enquiries and testimonials.',
    categories: ['Frontend'],
    tech: ['HTML', 'CSS', 'JavaScript', 'Font Awesome', 'Vercel'],
    features: [
      'Instructor profile, courses and curriculum, and weekly class timetable',
      'Past papers and resources section with links to official exam resources',
      'Contact and enquiry form, testimonials and calls to action',
      'Modal-based portal entry and a mobile menu, written in vanilla JavaScript',
    ],
    links: [
      { label: 'Live site', href: 'https://math-mastery-online.vercel.app', kind: 'live' },
      { label: 'Repository', href: 'https://github.com/Mohamad-Riyas/MathMastery_Online', kind: 'repo' },
    ],
    contribution: 'Designed and built by Mohamad (sole author of the repository).',
    featured: true,
    accent: 'primary',
    caseStudy: {
      overview:
        'Students preparing for Grade 10 & 11 maths need one clear place for classes, timetables and past papers. MathMastery Online packages that into a focused single-page site.',
      role: 'Sole developer: structure, styling, interactions and deployment.',
      architecture: [
        'Static site: one HTML page, one stylesheet and one script, with no build step.',
        'JavaScript modules for button handling, form handling, modal dialogs and the mobile menu.',
        'Deployed on Vercel.',
      ],
      highlights: [
        'Section-based single-page layout with anchor navigation.',
        'Course, timetable and resources content structured for quick scanning.',
        'Hosted video and imagery assets for the learning content.',
      ],
      scopeNote: 'No backend is part of this repository; the platform is a static frontend.',
    },
  },
  {
    slug: 'gui-task-management-system',
    title: 'GUI Task Management System',
    tagline: 'Desktop task manager built with Python and Tkinter',
    summary:
      'A desktop application for adding, editing, filtering and sorting tasks, developed in four stages from list-based CRUD to an object-oriented GUI with JSON persistence.',
    categories: ['Desktop GUI', 'Academic Project'],
    tech: ['Python', 'Tkinter', 'ttk', 'JSON'],
    features: [
      'Add, edit and delete tasks through modal dialogs',
      'Filter by name, priority and due date; sort by clicking any column',
      'Priority management (High / Medium / Low) and due-date tracking',
      'Input validation: required name and strict YYYY-MM-DD dates',
      'JSON persistence with error dialogs for load and save failures',
    ],
    links: [{ label: 'Repository', href: 'https://github.com/Mohamad-Riyas/GUI-task-management-system', kind: 'repo' }],
    contribution: 'Sole author across all four staged versions (Mar–Apr 2025).',
    featured: true,
    accent: 'secondary',
    caseStudy: {
      overview:
        'An academic desktop-software project built to show how one problem evolves as the design matures: first plain lists, then files, then dictionaries and JSON, and finally classes with a full GUI.',
      role: 'Sole developer: design, implementation, pseudocode and report.',
      architecture: [
        'Task: a data class with to_dict / from_dict for serialisation.',
        'TaskManager: owns the task list, JSON load/save, add/update/delete, filtering and sorting.',
        'TaskManagerGUI: ttk interface with a filter bar, sortable Treeview and add/edit dialogs.',
        'Stage_01 → Stage_04: list CRUD, text-file storage, dictionaries + JSON, then OOP + GUI.',
      ],
      highlights: [
        'Strict separation between the data model, the manager logic and the interface.',
        'Validation happens before data reaches the manager: name required, date parsed with datetime.strptime.',
        'Filtering combines name, priority and date; clicking a Treeview heading sorts that column.',
      ],
      challenges: ['Keeping the on-screen list, filters and saved JSON in sync after every add, edit or delete.'],
      scopeNote:
        'Screenshots are not committed to the repository, so the gallery on this page is an interface reconstruction drawn from the source layout, not a capture of the running app.',
    },
  },
  {
    slug: 'life-below-water',
    title: 'Life Below Water (SDG 14)',
    tagline: 'UN Sustainable Development Goal 14 team website',
    summary: 'A multi-page website about marine conservation. Mohamad built the Feedback and Team pages.',
    categories: ['Frontend', 'Academic Project', 'Team Project'],
    tech: ['HTML', 'CSS'],
    features: [
      'Feedback form with required fields, length limits, email field and rating selection',
      'Responsive team page presenting the group',
    ],
    links: [{ label: 'Repository', href: 'https://github.com/Mohamad-Riyas/web', kind: 'repo' }],
    contribution: 'Feedback page and Team page only: frontend UI, form design, validation and responsive layout. The rest of the site was built by teammates.',
    featured: false,
    accent: 'secondary',
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const caseStudyProjects = projects.filter((p) => p.caseStudy)
export const getProject = (slug: string) => projects.find((p) => p.slug === slug)

export const smallProjects = [
  { title: 'Login Form', note: 'Small frontend project.' },
  { title: 'Digital Clock', note: 'Small frontend project.' },
  { title: 'Random Number Generator', note: 'Small frontend project.' },
]
