import type { PortfolioData } from "../types/portfolio";

/**
 * 포트폴리오 샘플 데이터
 */
export const portfolioData: PortfolioData = {
  name: "홍길동",
  title: "백엔드 개발자",
  bio: "안정성과 확장성을 최우선으로 생각하는 백엔드 개발자입니다.",
  about: `안녕하세요! 컴퓨터/소프트웨어 공학을 전공하고 백엔드 개발자로서 커리어를 쌓아가고 있습니다. MSA와 인프라 경험이 있습니다.`,
  skills: [
    {
      name: "React",
      level: "advanced",
      category: "frontend",
      icon: "/icons/react.svg",
    },
    {
      name: "TypeScript",
      level: "advanced",
      category: "frontend",
      icon: "/icons/typescript.svg",
    },
    {
      name: "JavaScript",
      level: "advanced",
      category: "frontend",
      icon: "/icons/javascript.svg",
    },
    {
      name: "HTML/CSS",
      level: "advanced",
      category: "frontend",
      icon: "/icons/htmlcss.svg",
    },
    {
      name: "TailwindCSS",
      level: "intermediate",
      category: "frontend",
      icon: "/icons/tailwindcss.svg",
    },
    {
      name: "Node.js",
      level: "intermediate",
      category: "backend",
      icon: "/icons/nodejs.svg",
    },
    {
      name: "Express",
      level: "intermediate",
      category: "backend",
      icon: "/icons/express.svg",
    },
    {
      name: "Git",
      level: "advanced",
      category: "tool",
      icon: "/icons/git.svg",
    },
    {
      name: "Vite",
      level: "intermediate",
      category: "tool",
      icon: "/icons/vite.svg",
    },
  ],
  projects: [
    {
      id: "1",
      title: "ADHD Tracker Service",
      category: "Microservices Project",
      shortDescription:
        "Spring Cloud Gateway와 K8s를 활용한 ADHD 환자 케어 서비스.",
      fullDescription: `ADHD 환자를 위한 웹 서비스. Spring Cloud Gateway를 도입하여 JWT 인증을 게이트웨이 단에서 선처리.\nK8s HPA(Horizontal Pod Autoscaler)를 통해 자동 스케일링 최적화. 시스템 안정성 40% 향상.`,
      techStack: ["Spring Boot", "Spring Cloud Gateway", "Kubernetes", "MSA"],
      image:
        "http://googleusercontent.com/image_collection/image_retrieval/1766262650876846563",
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      id: "2",
      title: "IAmHere: Attendance System",
      category: "IoT Integration Project",
      shortDescription: "지문 인식 및 블루투스 복합 인증 출석 시스템.",
      fullDescription: `지문 인식 기반 시스템에 블루투스 기반 실시간 체크를 결합.\n라즈베리파이 시리얼 포트(ttyAMA0) 충돌은 miniUART 방식 도입으로 해결. 하드웨어/소프트웨어 충돌 극복 사례.`,
      techStack: ["Raspberry Pi", "Python", "PySerial", "Bluetooth"],
      image:
        "http://googleusercontent.com/image_collection/image_retrieval/3245084354626528323",
      githubUrl: "#",
      demoUrl: "#",
    },
    {
      id: "3",
      title: "Rooton MSA Auth",
      category: "Auth System Pivot",
      shortDescription:
        "Ingress 한계를 극복하고 Gateway로 피벗한 인증 시스템 구축 사례.",
      fullDescription: `초기 K8s Ingress에서 JWT 인증을 처리했으나 확장성 한계 발견.\nSpring Cloud Gateway로 전략을 피벗하며 인증 인프라를 중앙집중화.`,
      techStack: ["Kubernetes Ingress", "OAuth 2.0", "Spring Cloud Gateway"],
      image:
        "http://googleusercontent.com/image_collection/image_retrieval/8055825312678659104",
      githubUrl: "#",
      demoUrl: "#",
    },
  ],
  contact: {
    email: "example@email.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    blog: "https://blog.example.com",
  },
};
