import { motion } from 'framer-motion'
import { Award, BookOpen } from 'lucide-react'

export default function Education() {
  const educationData = [
    {
      degree: 'Master of Science in Software Engineering',
      institution: 'San Jose State University',
      period: 'Aug 2024 – May 2026',
      gpa: '3.91/4.0',
      location: 'San Jose, CA',
      cohort: 'Cloud & Mobile Cohort',
      courses: ['Cloud Technologies', 'Software Systems Engineering', 'Virtualization Technologies'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'IIIT Sri City',
      period: 'Aug 2018 – Jun 2022',
      gpa: '3.5/4.0',
      location: 'Chittoor, India',
      cohort: '',
      courses: ['Data Structures', 'Algorithms', 'Systems Design', 'OOPS', 'Service-Oriented Architecture'],
      color: 'from-purple-500 to-pink-500'
    }
  ]

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services',
      date: 'Dec 2024 - Dec 2027',
      icon: '☁️',
      url: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/3731b9febf414fc7b2693e978089d958'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education & Certifications</span>
          </h2>
        </motion.div>

        {/* Education cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className={`h-full bg-gradient-to-br ${edu.color} opacity-10 absolute inset-0 rounded-xl blur-xl group-hover:opacity-20 transition-opacity duration-300`} />
              <div className="relative h-full bg-slate-800/50 border border-slate-700 hover:border-primary-500 rounded-xl p-8 transition-all duration-300">
                {/* Top accent bar */}
                <div className={`w-1 h-12 bg-gradient-to-b ${edu.color} rounded-full mb-4`} />

                {/* Degree */}
                <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>

                {/* Institution */}
                <p className="text-primary-400 font-semibold mb-1">{edu.institution}</p>
                <p className="text-slate-400 text-sm mb-4">{edu.location}</p>

                {/* Period and GPA */}
                <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-700">
                  <div>
                    <p className="text-slate-400 text-sm">{edu.period}</p>
                    {edu.cohort && <p className="text-slate-400 text-sm italic">{edu.cohort}</p>}
                  </div>
                  <div className="text-right">
                    <p className="text-slate-500 text-sm">GPA</p>
                    <p className="text-primary-400 font-bold text-lg">{edu.gpa}</p>
                  </div>
                </div>

                {/* Courses */}
                <div>
                  <p className="text-slate-400 text-sm font-semibold mb-3">Key Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, cidx) => (
                      <span key={cidx} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-lg border border-slate-600">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Professional Certifications</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {certifications.map((cert, idx) => (
              <motion.a
                key={idx}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ x: 5 }}
                className="block group bg-slate-800/50 border border-slate-700 hover:border-primary-500 rounded-xl p-6 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{cert.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-slate-400 text-sm">{cert.issuer}</p>
                    <p className="text-slate-500 text-sm mt-1">Valid: {cert.date}</p>
                  </div>
                  <div className="hidden sm:flex items-center text-primary-400 group-hover:translate-x-2 transition-transform">
                    →
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
