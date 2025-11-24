import type { PortfolioData } from '../types/portfolio'

/**
 * 포트폴리오 샘플 데이터
 */
export const portfolioData: PortfolioData = {
  name: '홍길동',
  title: '프론트엔드 개발자',
  bio: '사용자 경험을 중시하는 프론트엔드 개발자입니다',
  about: `안녕하세요! 프론트엔드 개발자로 일하고 있습니다.
React와 TypeScript를 주로 사용하며, 사용자 경험을 최우선으로 생각합니다.
깔끔하고 직관적인 인터페이스를 만드는 것을 좋아합니다.`,
  skills: [
    { name: 'React', level: 'advanced', category: 'frontend' },
    { name: 'TypeScript', level: 'advanced', category: 'frontend' },
    { name: 'JavaScript', level: 'advanced', category: 'frontend' },
    { name: 'HTML/CSS', level: 'advanced', category: 'frontend' },
    { name: 'TailwindCSS', level: 'intermediate', category: 'frontend' },
    { name: 'Node.js', level: 'intermediate', category: 'backend' },
    { name: 'Express', level: 'intermediate', category: 'backend' },
    { name: 'Git', level: 'advanced', category: 'tool' },
    { name: 'Vite', level: 'intermediate', category: 'tool' },
  ],
  projects: [
    {
      id: '1',
      title: '포트폴리오 웹사이트',
      description: 'React와 TypeScript로 만든 개인 포트폴리오 웹사이트입니다',
      technologies: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://example.com',
    },
    {
      id: '2',
      title: '할일 관리 앱',
      description: '로컬 스토리지를 활용한 할일 관리 웹 애플리케이션',
      technologies: ['React', 'TypeScript', 'LocalStorage'],
      githubUrl: 'https://github.com',
    },
    {
      id: '3',
      title: '날씨 앱',
      description: '실시간 날씨 정보를 제공하는 웹 애플리케이션',
      technologies: ['React', 'API', 'CSS'],
      githubUrl: 'https://github.com',
      demoUrl: 'https://example.com',
    },
  ],
  contact: {
    email: 'example@email.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    blog: 'https://blog.example.com',
  },
}

