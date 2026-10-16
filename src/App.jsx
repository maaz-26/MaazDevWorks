import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import WhyMe from './sections/WhyMe'
import Process from './sections/Process'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <WhyMe />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
