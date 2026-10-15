# Mohamad Riyas — Portfolio

React 19 · TypeScript · Vite · Tailwind CSS 4 · Framer Motion · Three.js / React Three Fiber / Drei · React Router

```bash
npm install
npm run dev
npm run build                                   # type-check + production build to dist/
SITE_URL=https://your-domain.com npm run build  # also emits sitemap.xml and canonical URLs
npm run preview
```

All content is in `src/data/` (profile, projects, skills, certificates). Security headers are in `vercel.json` and `public/_headers`.
Deploy `dist/` to Vercel or Netlify (SPA rewrites are configured for Vercel).
