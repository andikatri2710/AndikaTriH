import { About } from './components/About'
import { BackToTop } from './components/BackToTop'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { GithubSection } from './components/GithubSection'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import { useLanguage } from './i18n/LanguageContext'

export default function App() {
  const { s } = useLanguage()

  return (
    <div className="min-h-svh bg-bg text-fg">
      <a
        href="#tentang"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-contrast"
      >
        {s.skipLink}
      </a>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <GithubSection />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
