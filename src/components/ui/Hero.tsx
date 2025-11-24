import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../common/Button'
import type { PortfolioData } from '../../types/portfolio'

interface HeroProps {
  data: Pick<PortfolioData, 'name' | 'title' | 'bio'>
}

/**
 * Hero 컴포넌트
 * 메인 섹션으로 이름, 직업, 소개를 표시함
 */
export function Hero({ data }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4"
        >
          안녕하세요, {data.name}입니다
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-4xl text-blue-600 dark:text-blue-400 mb-6"
        >
          {data.title}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          {data.bio}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Button onClick={() => scrollToSection('projects')} size="lg">
            프로젝트 보기
          </Button>
          <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg">
            연락하기
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

