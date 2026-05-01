import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ExternalLink, Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navigation scrollToSection={scrollToSection} />
      
      {/* Main content */}
      <main className="overflow-hidden">
        <Hero scrollToSection={scrollToSection} />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact scrollToSection={scrollToSection} />
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/50 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <p className="text-slate-400 text-sm">© 2026 Thanuja Mudududla. Built with React, Framer Motion & Tailwind CSS.</p>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/Thanuja0911" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-800 hover:bg-primary-600 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/thanuja-thanu-20" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-800 hover:bg-primary-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:mthanuja1120@gmail.com" className="p-2 rounded-full bg-slate-800 hover:bg-primary-600 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
