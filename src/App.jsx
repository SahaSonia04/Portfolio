import './styles.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container grid two-col">
        <div className="grid">
          <Hero />
          <Projects />
        </div>
        <div className="grid">
          <Education />
          <Skills />
          <Experience />
          <Certifications />
          <Contact />
        </div>
      </div>
      <Footer />
    </>
  )
}


