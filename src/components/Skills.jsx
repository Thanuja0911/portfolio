import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      icon: '💬',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'Go', 'SQL', 'C++'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Frontend',
      icon: '🎨',
      skills: ['React', 'Vite', 'Tailwind CSS', 'Angular', 'React Native', 'HTML5', 'CSS3'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: ['FastAPI', 'Node.js', 'Django', 'Spring Boot', 'GraphQL', 'REST APIs', 'Microservices'],
      color: 'from-purple-500 to-indigo-500'
    },
    {
      category: 'Databases',
      icon: '💾',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Redis', 'ChromaDB', 'pgvector'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Cloud & DevOps',
      icon: '☁️',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'GitHub Actions', 'CloudWatch'],
      color: 'from-orange-500 to-red-500'
    },
    {
      category: 'AI & Agentic Systems',
      icon: '🤖',
      skills: ['LLMs', 'Claude API', 'RAG', 'LangChain', 'AutoGen', 'Embeddings', 'Vector Search'],
      color: 'from-yellow-500 to-orange-500'
    },
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
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
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
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-slate-400 text-lg">Modern tech stack spanning full-stack development, AI/ML, and cloud infrastructure</p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="h-full bg-slate-800/50 border border-slate-700 hover:border-primary-500 rounded-xl p-6 transition-all duration-300 card-hover">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`} />

                {/* Icon and category */}
                <div className="relative z-10 flex items-center gap-3 mb-6">
                  <span className="text-3xl">{cat.icon}</span>
                  <h3 className="text-lg font-bold text-white">{cat.category}</h3>
                </div>

                {/* Skills */}
                <div className="relative z-10 flex flex-wrap gap-2">
                  {cat.skills.map((skill, sidx) => (
                    <motion.span
                      key={sidx}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1.5 bg-gradient-to-r ${cat.color} bg-opacity-10 text-slate-300 text-sm rounded-lg border border-slate-600 hover:border-transparent hover:text-white transition-all duration-300`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
