import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../../hooks/useTheme'

/**
 * Header 컴포넌트
 * 네비게이션 바와 다크모드 토글을 포함함
 */
export function Header() {
  const { theme, toggleTheme } = useTheme()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'hero', label: '홈' },
    { id: 'about', label: '소개' },
    { id: 'skills', label: '기술' },
    { id: 'projects', label: '프로젝트' },
    { id: 'contact', label: '연락처' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold text-blue-600 dark:text-blue-400"
        >
          Portfolio
        </motion.div>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          aria-label="테마 전환"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </motion.button>
      </nav>
    </header>
  )
}

