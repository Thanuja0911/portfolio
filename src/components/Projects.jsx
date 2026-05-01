import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'AI Interview Agent',
      description: 'Multi-agent AI system conducting adaptive technical interviews. Implements LLM-as-judge evaluation with Pydantic structured output, dynamic difficulty scaling, and resume-aware context injection.',
      icon: '🧠',
      tags: ['LLM-as-Judge', 'Multi agent', 'Claude API', 'FastAPI', 'React', 'Pydantic'],
      github: 'https://github.com/Thanuja0911/ai-interview-agent',
      metrics: ['2 Agent Pipeline', 'Adaptive Difficulty', 'Real-time Scoring'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'DataTrust',
      description: 'Enterprise RAG platform with policy-enforced document retrieval, Auth0 authentication, pgvector search, and comprehensive audit logging. Prevents PII leakage and enforces RBAC.',
      icon: '🛡️',
      tags: ['FastAPI', 'PostgreSQL', 'RAG', 'Ollama', 'Auth0', 'AWS Lambda'],
      github: 'https://github.com/SJSU-DataTrust/DataTrust_Project',
      metrics: ['Policy Enforcement', 'Ollama LLM on Google Cloud GPU VM', 'Audit Trail'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'AutoGen RAG Multi-Agent',
      description: 'Collaborative 5-agent system solving technical problems with RAG. Built with AutoGen, ChromaDB, Groq API, and Streamlit UI demonstrating RAG\'s impact on hallucination prevention.',
      icon: '🤖',
      tags: ['AutoGen', 'ChromaDB', 'Groq', 'Streamlit', 'Vector Search'],
      github: 'https://github.com/Thanuja0911/AutoGen-RAG-MultiAgent-Groupchat',
      metrics: ['5 Agent Collaboration', '35% Accuracy ↑', 'RAG Impact Demo'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'ONE STEP HR Platform',
      description: 'HR onboarding platform using MEAN stack with serverless architecture. Implemented RBAC, Google SSO, AWS Lambda microservices, and DynamoDB—reducing infrastructure costs by 70%.',
      icon: '🚀',
      tags: ['Angular', 'AWS Lambda', 'DynamoDB', 'Google SSO', 'Terraform'],
      github: 'https://github.com/Thanuja0911/onboarding_hr_portal',
      metrics: ['70% Cost Reduction', 'Serverless', 'RBAC'],
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'BookMyTable',
      description: 'Restaurant reservation platform with real-time availability, user authentication, and payment integration. Built with MERN stack featuring responsive UI and scalable backend.',
      icon: '🍽️',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Docker'],
      github: 'https://github.com/Thanuja0911/bookmytable',
      metrics: ['Full-Stack', 'Payment Integration', 'Real-time Updates'],
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

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
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
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            AI systems, full-stack platforms, and production applications showcasing modern engineering practices
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
