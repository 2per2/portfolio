import { motion } from 'framer-motion'
import type { PortfolioData } from '../../types/portfolio'

interface AboutProps {
  data: Pick<PortfolioData, 'about'>
}

/**
 * About 컴포넌트
 * 자기소개 및 경력을 표시함
 */
export function About({ data }: AboutProps) {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          About
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
        >
          <p className="whitespace-pre-line">{data.about}</p>
        </motion.div>
      </div>
    </section>
  )
}

