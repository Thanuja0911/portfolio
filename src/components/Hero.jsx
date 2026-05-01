import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import profileImg from '../profile.jpg'  // adjust path as needed

export default function Hero({ scrollToSection }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        {/* Avatar */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-32 h-32 rounded-full overflow-hidden shadow-2xl shadow-primary-500/50 border-4 border-primary-500"
            >
              <img 
                src={profileImg} 
                alt="Thanuja Mudududla"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
        >
          <span className="gradient-text">Thanuja Mudududla</span>
        </motion.h1>

        {/* Title */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-xl sm:text-2xl text-slate-300 font-light mb-4">
            AI Engineer & Full-Stack Developer
          </p>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Building intelligent systems at the intersection of AI, backend engineering, and product design. 
            Master's student at SJSU (May 2026) with 2.5+ years of production experience in React, FastAPI, AWS. 
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            onClick={() => scrollToSection('projects')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-4 px-8 rounded-lg text-lg flex items-center justify-center gap-2 shadow-xl shadow-primary-600/40"
          >
            View My Work <ChevronDown size={20} className="ml-2" />
          </motion.button>
          <motion.button
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-primary-600 text-primary-400 hover:bg-primary-600/10 font-bold py-4 px-8 rounded-lg text-lg"
          >
            Get in Touch
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center"
        >
          {[
            { icon: Github, href: 'https://github.com/Thanuja0911', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/thanuja-thanu-20', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:mthanuja1120@gmail.com', label: 'Email' },
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-slate-800 hover:bg-primary-600 transition-all duration-300 text-slate-400 hover:text-white"
              title={social.label}
            >
              <social.icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      {/* <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-slate-500 text-sm">Scroll to explore</p>
          <ChevronDown size={24} className="text-primary-500" />
        </div>
      </motion.div> */}
    </section>
  )
}
