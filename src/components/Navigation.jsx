import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'

export default function Navigation({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a
            href="#"
            className="flex items-center gap-2 text-xl font-bold gradient-text"
            whileHover={{ scale: 1.1 }}
          >
            <Code2 size={24} />
            Thanuja
          </motion.a>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-400 hover:text-primary-400 transition-colors text-sm font-medium"
              >
                {item.label}
              </button>
            ))}
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium text-sm"
            >
              Get in Touch
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-400 hover:text-primary-400"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden border-t border-slate-800"
        >
          <div className="py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-slate-400 hover:text-primary-400 transition-colors py-2 px-4"
              >
                {item.label}
              </button>
            ))}
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.02 }}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-medium"
            >
              Get in Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
