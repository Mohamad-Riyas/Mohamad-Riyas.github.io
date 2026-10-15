import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage'))

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="projects/:slug" element={<Suspense fallback={<div className="min-h-screen" />}><CaseStudyPage /></Suspense>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
