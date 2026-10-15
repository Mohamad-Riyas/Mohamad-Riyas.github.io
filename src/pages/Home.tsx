import Hero from '../sections/Hero'
import About from '../sections/About'
import Experience from '../sections/Experience'
import FeaturedProjects from '../sections/FeaturedProjects'
import CaseStudies from '../sections/CaseStudies'
import MoreProjects from '../sections/MoreProjects'
import Skills from '../sections/Skills'
import Education from '../sections/Education'
import Certificates from '../sections/Certificates'
import Community from '../sections/Community'
import Contact from '../sections/Contact'
import { usePageTitle } from '../hooks/usePageTitle'

export default function Home() {
  usePageTitle()
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <FeaturedProjects />
      <CaseStudies />
      <MoreProjects />
      <Skills />
      <Education />
      <Certificates />
      <Community />
      <Contact />
    </>
  )
}
