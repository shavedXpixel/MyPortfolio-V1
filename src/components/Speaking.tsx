import { motion } from 'framer-motion'

const credentials = [
  {
    title: 'IBM AI Developer',
    issuer: 'Coursera Professional Certificate',
    link: 'https://www.coursera.org/account/accomplishments/professional-cert/EPKUEVVQD9U3',
    badge: 'Credential ↗',
  },
  {
    title: 'Developing AI Applications with Python and Flask',
    issuer: 'Coursera',
    link: 'https://www.coursera.org/account/accomplishments/verify/3DFHVHXF4F4N',
    badge: 'Credential ↗',
  },
  {
    title: 'The Data Science Profession – Student View',
    issuer: 'Coursera',
    link: 'https://www.coursera.org/account/accomplishments/verify/RW3DPPQW7U2I',
    badge: 'Credential ↗',
  },
  {
    title: 'Bootcamp on Big Data & Data Science',
    issuer: 'Ref ID: FSP/BCMP/C-DAC/NOI/B01/2507/1654/338154',
    link: 'https://drive.google.com/file/d/1JhdXC8XMbsqdt37WjvnqVKGh-bAZSszm/view?usp=sharing',
    badge: 'Credential ↗',
  },
  {
    title: 'Artificial Intelligence and Machine Learning',
    issuer: 'Internshala Trainings',
    link: 'https://drive.google.com/file/d/1bYEcIWZTxeA8w5tHiTKcaRS88zk9QBJc/view?usp=sharing',
    badge: 'Credential ↗',
  },
  {
    title: 'Computer Networks and Network Security',
    issuer: 'Coursera',
    link: 'https://www.coursera.org/account/accomplishments/verify/KLBRG34CSOQ7',
    badge: 'Credential ↗',
  },
  {
    title: 'Operating Systems: Overview, Administration, and Security',
    issuer: 'Coursera',
    link: 'https://www.coursera.org/account/accomplishments/verify/KPF4CKO0MEQP',
    badge: 'Credential ↗',
  },
  {
    title: 'BPUT Hackathon 2025',
    issuer: 'Hackathon',
    link: null,
    badge: 'Participant',
  },
  {
    title: 'Hack2Skill — Build with AI: Code for Communities, Second Edition',
    issuer: 'Hackathon',
    link: null,
    badge: 'Participant',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Speaking() {
  return (
    <section id="speaking" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Credentials &amp; Competitions</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          CERTIFICATIONS &amp; HACKATHONS
        </motion.h2>

        {/* Credentials List */}
        <div className="space-y-0">
          {credentials.map((item, index) => {
            const content = (
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl text-white font-light group-hover:text-gray-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 md:mt-2">
                    {item.issuer}
                  </p>
                </div>
                <span className="text-xs md:text-sm text-gray-400 font-mono tracking-wider">
                  {item.badge}
                </span>
              </div>
            )

            return item.link ? (
              <motion.a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="block border-t border-gray-800 py-6 md:py-8 group hover:bg-gray-800/30 transition-colors px-4 -mx-4"
              >
                {content}
              </motion.a>
            ) : (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="block border-t border-gray-800 py-6 md:py-8 group px-4 -mx-4"
              >
                {content}
              </motion.div>
            )
          })}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
