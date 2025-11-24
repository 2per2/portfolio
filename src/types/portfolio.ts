/**
 * 포트폴리오 데이터 타입 정의
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
}

export interface Skill {
  name: string;
  level: "beginner" | "intermediate" | "advanced";
  category: "frontend" | "backend" | "tool" | "other";
  icon?: string; // 기술 로고 경로 또는 아이콘
}

export interface ContactInfo {
  email: string;
  github?: string;
  linkedin?: string;
  blog?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  bio: string;
  about: string;
  skills: Skill[];
  projects: Project[];
  contact: ContactInfo;
}
