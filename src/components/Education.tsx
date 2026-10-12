import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Education() {
  return (
    <section id="education" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Background</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          EDUCATION
        </motion.h2>

        {/* Education Items */}
        <div className="space-y-16 lg:space-y-24">
          {/* B.Tech */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div {...fadeInUp}>
              <img
                src="/assets/eatm-campus.png"
                alt="Einstein Academy of Technology and Management"
                className="w-full h-auto grayscale"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                EINSTEIN ACADEMY OF TECHNOLOGY AND MANAGEMENT - ODISHA / INDIA
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="flex items-center"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  B.Tech in Computer Science and Engineering
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Specialization in Data Science (CSE-DS) at Einstein Academy of Technology and Management, affiliated with Biju Patnaik University of Technology (BPUT), Odisha, India. Currently in third year with focused study in algorithms, machine learning, and software engineering.
                </p>
                <p className="text-sm text-gray-500">Third Year — Expected Graduation: 2028</p>
              </div>
            </motion.div>
          </div>

          {/* Class 12 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div
              {...fadeInUp}
              className="flex items-center lg:order-2"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  Class 12 — Higher Secondary Education
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Completed higher secondary education in the Science stream from DAV Public School, Unit 8, Bhubaneswar, Odisha.
                </p>
                <p className="text-sm text-gray-500">DAV Public School, Unit 8 · Bhubaneswar, Odisha</p>
              </div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="lg:order-1"
            >
              <img
                src="/assets/dav-school.png"
                alt="DAV Public School, Unit 8"
                className="w-full h-auto grayscale"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                DAV PUBLIC SCHOOL, UNIT 8 - BHUBANESWAR / ODISHA
              </p>
            </motion.div>
          </div>

          {/* Class 10 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
            <motion.div {...fadeInUp}>
              <img
                src="/assets/carmel-school.png"
                alt="Carmel School"
                className="w-full h-auto grayscale"
              />
              <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                CARMEL SCHOOL - BHADRAK / ODISHA
              </p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
              className="flex items-center"
            >
              <div>
                <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                  Class 10 — Secondary Education
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                  Completed secondary education at Carmel School, Bhadrak, Odisha, achieving 84% marks.
                </p>
                <p className="text-sm text-gray-500">Carmel School · Bhadrak, Odisha — 84%</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
