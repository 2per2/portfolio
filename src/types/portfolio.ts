/**
 * 포트폴리오 데이터 타입 정의
 */

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  demoUrl?: string
  imageUrl?: string
}

export interface Skill {
  name: string
  level: 'beginner' | 'intermediate' | 'advanced'
  category: 'frontend' | 'backend' | 'tool' | 'other'
}

export interface ContactInfo {
  email: string
  github?: string
  linkedin?: string
  blog?: string
}

export interface PortfolioData {
  name: string
  title: string
  bio: string
  about: string
  skills: Skill[]
  projects: Project[]
  contact: ContactInfo
}

