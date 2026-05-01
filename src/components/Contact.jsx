import { motion } from 'framer-motion'
import { Mail, Phone, Github, Linkedin, ExternalLink } from 'lucide-react'

export default function Contact({ scrollToSection }) {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mthanuja1120@gmail.com',
      href: 'mailto:mthanuja1120@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (669) 340-6468',
      href: 'tel:+16693406468',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Thanuja0911',
      href: 'https://github.com/Thanuja0911',
      color: 'from-gray-500 to-slate-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'thanuja-thanu-20',
      href: 'https://linkedin.com/in/thanuja-thanu-20',
      color: 'from-blue-500 to-cyan-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-600/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Graduating May 2026 and seeking full-time opportunities in AI Engineering, Software Engineering, Backend, or DevOps roles. 
            F1 OPT eligible and based in California, open to relocation to NYC.
          </p>
        </motion.div>

        {/* Contact cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          {contactMethods.map((method, idx) => {
            const Icon = method.icon
            return (
              <motion.a
                key={idx}
                href={method.href}
                target={method.href.startsWith('mailto:') || method.href.startsWith('tel:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 rounded-xl blur-xl transition-opacity duration-300`} />
                <div className="relative bg-slate-800/50 border border-slate-700 hover:border-primary-500 rounded-xl p-6 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${method.color} text-white`}>
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">{method.label}</p>
                      <p className="text-white font-semibold">{method.value}</p>
                    </div>
                    <div className="ml-auto text-primary-400 group-hover:translate-x-2 transition-transform">
                      <ExternalLink size={20} />
                    </div>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="mailto:mthanuja1120@gmail.com"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-4 px-8 rounded-lg text-lg flex items-center justify-center gap-2 shadow-xl shadow-primary-600/40 transition-all duration-300"
          >
            <Mail size={20} /> Send Me an Email
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/thanuja-thanu-20"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-primary-600 text-primary-400 hover:bg-primary-600/10 font-bold py-4 px-8 rounded-lg text-lg flex items-center justify-center gap-2 transition-all duration-300"
          >
            <Linkedin size={20} /> Connect on LinkedIn
          </motion.a>
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 p-6 bg-gradient-to-r from-primary-600/10 to-secondary-600/10 border border-primary-500/30 rounded-xl text-center"
        >
          <p className="text-sm text-slate-400 mb-2">Current Status</p>
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <p className="text-white font-semibold">Graduating May 2026 • Actively Seeking Full-Time Opportunities</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
