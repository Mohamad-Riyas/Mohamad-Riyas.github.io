import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import ScrollManager from '../components/ScrollManager'

export default function MainLayout() {
  const { pathname } = useLocation()
  const reduced = useReducedMotion()
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <ScrollManager />
      <Nav onHome={pathname === '/'} />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          id="main"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? { opacity: 1 } : { opacity: 0, y: -8 }}
          transition={{ duration: 0.28 }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  )
}
