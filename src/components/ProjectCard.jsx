import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

export default function ProjectCard({ project }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="group relative h-full"
    >
      <div className="relative h-full bg-slate-800/50 backdrop-blur border border-slate-700 hover:border-primary-500 rounded-xl p-6 overflow-hidden transition-all duration-300 card-hover">
        {/* Background gradient accent */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

        {/* Icon */}
        <div className="text-4xl mb-4">{project.icon}</div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="mb-4 space-y-1">
          {project.metrics.map((metric, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
              <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`} />
              {metric}
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600 group-hover:border-primary-500/50 transition-colors"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full border border-slate-600">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-slate-700 relative z-10">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium hover:translate-x-1 pointer-events-auto"
          >
            <Github size={16} /> Code
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors text-sm font-medium ml-auto hover:translate-x-1 pointer-events-auto"
          >
            Explore <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}