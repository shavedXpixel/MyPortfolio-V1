import { motion } from 'framer-motion'

const projects = [
  {
    title: 'ExamSystem',
    description: 'Online examination platform where teachers create exams, grade submissions, and students view score reports.',
    tech: 'React, Vite, Node.js, Express, Firebase Firestore, Firebase Authentication',
    liveUrl: 'https://exam-system-blond.vercel.app/',
    githubUrl: 'https://github.com/shavedXpixel/ExamSystem',
    status: null,
  },
  {
    title: 'SmartCampus-Care',
    description: 'Campus-management web portal with separate student, faculty, admin, and technician logins, fee tracking, and maintenance requests.',
    tech: null,
    liveUrl: 'https://smartcampus-care-two.vercel.app/',
    githubUrl: 'https://github.com/shavedXpixel/smartcampus-care',
    status: null,
  },
  {
    title: 'E-commerce Store',
    description: 'Responsive e-commerce storefront featuring interactive cart quantity controls and subtotal, shipping, and tax calculation.',
    tech: 'React, Vite, TypeScript, Tailwind CSS, shadcn/ui',
    liveUrl: 'https://ecommerce-store-website-blond.vercel.app/',
    githubUrl: 'https://github.com/shavedXpixel/Ecommerce-Store-Website',
    status: null,
  },
  {
    title: 'CampusOS',
    description: 'Android campus-management application.',
    tech: null,
    liveUrl: null,
    githubUrl: 'https://github.com/shavedXpixel/CampusOS',
    status: 'Still in development',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Writing() {
  return (
    <section id="writing" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Portfolio</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          ADDITIONAL PROJECTS
        </motion.h2>

        {/* Projects List */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="block border-t border-gray-800 py-6 md:py-8 group hover:bg-gray-900/30 transition-colors px-4 -mx-4"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="max-w-2xl">
                  <h3 className="text-lg md:text-xl lg:text-2xl text-white font-light group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mt-1 md:mt-2 leading-relaxed">
                    {project.description}
                  </p>
                  {project.tech && (
                    <p className="text-xs text-gray-500 mt-1">
                      {project.tech}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-4 shrink-0">
                  {project.status && (
                    <span className="text-xs text-amber-400/90 tracking-wider uppercase border border-amber-400/30 px-2 py-0.5 rounded">
                      {project.status}
                    </span>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white underline underline-offset-4 hover:opacity-60 transition-opacity"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-white underline underline-offset-4 hover:opacity-60 transition-opacity"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
