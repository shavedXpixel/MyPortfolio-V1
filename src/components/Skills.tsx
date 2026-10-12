import { motion } from 'framer-motion'

const skills = [
  {
    category: 'Programming Languages',
    items: 'Python, JavaScript, TypeScript, Java',
  },
  {
    category: 'Frontend Development',
    items: 'HTML, CSS, React, Next.js, Tailwind CSS',
  },
  {
    category: 'Backend Development',
    items: 'Node.js, Express.js',
  },
  {
    category: 'Databases',
    items: 'MySQL, MongoDB, PostgreSQL',
  },
  {
    category: 'Data Science & Machine Learning',
    items: 'Pandas, NumPy, scikit-learn',
  },
  {
    category: 'Cloud & Deployment',
    items: 'Firebase, Supabase, Vercel',
  },
  {
    category: 'Developer Tools',
    items: 'Git, GitHub, Visual Studio Code, Jupyter Notebook',
  },
  {
    category: 'Areas of Interest',
    items: 'Data Science, Artificial Intelligence, Machine Learning, Full-Stack Web Development',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Expertise &amp; Technologies</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-12 lg:mb-20"
        >
          SKILLS
        </motion.h2>

        {/* Skills List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6 lg:gap-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-b border-gray-800 pb-4"
            >
              <p className="text-xs text-gray-500 tracking-widest uppercase mb-1">
                {skill.category}
              </p>
              <span className="text-base md:text-lg lg:text-xl text-gray-300 font-light leading-relaxed block">
                {skill.items}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
