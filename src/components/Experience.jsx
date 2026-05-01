import { motion } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      title: 'Teaching Assistant - AWS',
      company: 'San Jose State University',
      period: 'Aug 2025 – Dec 2025',
      description: 'Designed and delivered AWS labs covering EC2, S3, VPC, and Infrastructure as Code principles using Terraform to 50+ students.',
      highlights: [
        'Designed hands-on AWS labs for cloud infrastructure',
        'Mentored 50+ students on cloud security fundamentals',
        'Integrated Terraform for automation and validation concepts'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Software Development Engineer',
      company: 'Truminds Software Systems',
      period: 'Jan 2022 – Jun 2024',
      description: 'Full-stack engineer building maritime tracking system serving 500+ users with React, Node.js, and Python.',
      highlights: [
        'Reduced API response times from 10s to 3s via GraphQL optimization',
        'Improved data retrieval by 60% through SQL optimization and schema design',
        'Increased system reliability by 40% via Docker containerization on AWS ECS'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Backend Developer Intern',
      company: 'C3 Experiential Learning',
      period: 'Mar 2021 – May 2021',
      description: 'Developed RESTful APIs using Django serving 100+ schools with OAuth 2.0 and JWT-based RBAC.',
      highlights: [
        'Reduced API latency by 25% through backend optimization',
        'Implemented OAuth 2.0 and JWT-based RBAC',
        'Deployed scalable Learning Management System'
      ],
      color: 'from-green-500 to-emerald-500'
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-slate-400 text-lg">2.5+ years of production engineering across full-stack, backend, and AI systems</p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative pl-8 border-l-2 border-slate-700 hover:border-primary-500 transition-colors"
            >
              {/* Timeline dot */}
              <div className={`absolute -left-4 top-0 w-6 h-6 rounded-full bg-gradient-to-br ${exp.color} border-4 border-slate-950`} />

              {/* Content */}
              <motion.div
                whileHover={{ x: 5 }}
                className="bg-slate-800/50 border border-slate-700 hover:border-slate-600 rounded-lg p-6 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3 flex-wrap gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-primary-400 font-medium text-sm">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 text-sm whitespace-nowrap">
                    <Calendar size={16} />
                    {exp.period}
                  </div>
                </div>

                <p className="text-slate-400 mb-4 leading-relaxed">{exp.description}</p>

                {/* Highlights */}
                <div className="space-y-2">
                  {exp.highlights.map((highlight, hidx) => (
                    <div key={hidx} className="flex items-start gap-3">
                      <span className={`flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.color} mt-2`} />
                      <p className="text-slate-300 text-sm">{highlight}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
