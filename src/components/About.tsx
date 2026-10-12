import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">About &amp; Featured Projects</span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* First Block - Featured Project 1: CivicPulse AI */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="order-2 lg:order-1"
          >
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
              alt="CivicPulse AI"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              FEATURED PROJECT 01 — CIVICPULSE AI
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2 flex items-center"
          >
            <div>
              <h3 className="text-xl lg:text-2xl font-light text-white mb-3">
                CivicPulse AI
              </h3>
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed mb-4">
                A civic-tech platform that transforms citizen-reported issues, including text, location, and photographs, into structured cases managed through triage, field assignment, evidence uploads, and supervisor approval. The platform uses Google Gemini for issue classification, translation, and similarity matching. It supports role-based access control, English/Hindi/Odia interfaces, and browser-based voice input.
              </p>
              <p className="text-xs text-gray-500 tracking-wider uppercase mb-5">
                TypeScript · Next.js · React · Node.js · Express · PostgreSQL · Supabase · pgvector · Google Gemini
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="https://civicpulse-ai-henna.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white underline underline-offset-4 hover:opacity-60 transition-opacity"
                >
                  Live Demo ↗
                </a>
                <a
                  href="https://github.com/shavedXpixel/CivicPulse-AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white underline underline-offset-4 hover:opacity-60 transition-opacity"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quote Block */}
        <motion.div
          {...fadeInUp}
          className="mb-24 lg:mb-32"
        >
          <h2 className="font-display text-[8vw] lg:text-section leading-none tracking-tight text-gray-300">
            "I BUILD PRACTICAL<br />
            <span className="text-white underline underline-offset-8">SOFTWARE</span> AND EXPLORE<br />
            INTELLIGENT SYSTEMS."
          </h2>
          <p className="mt-8 text-base lg:text-lg text-gray-300 leading-relaxed max-w-3xl">
            I am a Computer Science Engineering student specializing in Data Science. I build full-stack applications, explore AI and machine learning, and develop practical software products that solve real problems. My projects span AI-powered civic technology, e-commerce, web applications, and predictive analytics.
          </p>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            DATA SCIENCE ENGINEER &bull; FULL-STACK DEVELOPER
          </p>
        </motion.div>

        {/* Second Block - Featured Project 2: Price-AI */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="flex items-center lg:text-right"
          >
            <div>
              <h3 className="text-xl lg:text-2xl font-light text-white mb-3">
                Price-AI
              </h3>
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed mb-4">
                A product price-comparison application that allows users to search for products and explore interactive price-history charts to evaluate when to buy. It includes authentication and per-user cart, wishlist, and order-tracking features.
              </p>
              <p className="text-xs text-gray-500 tracking-wider uppercase mb-5">
                Next.js · React · TypeScript · Python · Tailwind CSS · Framer Motion · Recharts · Firebase Authentication · Firebase Firestore
              </p>
              <div className="flex items-center gap-6 lg:justify-end">
                <a
                  href="https://price-ai-fxox.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white underline underline-offset-4 hover:opacity-60 transition-opacity"
                >
                  Live Demo ↗
                </a>
                <a
                  href="https://github.com/shavedXpixel/price-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white underline underline-offset-4 hover:opacity-60 transition-opacity"
                >
                  GitHub ↗
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
              alt="Price-AI Platform"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              FEATURED PROJECT 02 — PRICE-AI
            </p>
          </motion.div>
        </div>

        {/* Third Block - Featured Project 3: Used Car Price Prediction ML */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div {...fadeInUp}>
            <img
              src="/assets/used-car-prediction.png"
              alt="Used Car Price Prediction ML"
              className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
            />
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              FEATURED PROJECT 03 — USED CAR PRICE PREDICTION ML
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="flex items-center"
          >
            <div>
              <h3 className="text-xl lg:text-2xl font-light text-white mb-3">
                Used Car Price Prediction ML
              </h3>
              <p className="text-base lg:text-lg text-gray-300 leading-relaxed mb-4">
                An end-to-end machine learning regression project based on the CarDekho used-car dataset containing 15,411 records. The project includes exploratory data analysis, data cleaning, preprocessing pipelines, and comparisons between Linear Regression, Ridge Regression, Random Forest, and Gradient Boosting. Ridge Regression achieved an R² score of 0.8425 and an RMSE of approximately ₹390,223 on the reported test split.
              </p>
              <p className="text-xs text-gray-500 tracking-wider uppercase mb-5">
                Python · Pandas · NumPy · scikit-learn · Joblib
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/shavedXpixel/used-car-price-prediction-ml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white underline underline-offset-4 hover:opacity-60 transition-opacity"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://github.com/shavedXpixel/used-car-price-prediction-ml/blob/main/notebooks/PriyansuDash_UsedCarPricePrediction.ipynb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white underline underline-offset-4 hover:opacity-60 transition-opacity"
                >
                  Notebook ↗
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
