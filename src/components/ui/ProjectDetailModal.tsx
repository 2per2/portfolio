import type { Project } from '../../types/portfolio'
import { Button } from '../common/Button'

interface ProjectDetailModalProps {
  project: Project | null
  onClose: () => void
}

/**
 * ProjectDetailModal 컴포넌트
 * 프로젝트 상세 정보를 모달로 표시함
 */
export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null

  // 외부 클릭 시 닫힘 처리
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-lg w-full p-8 shadow-2xl relative animate-fadeIn">
        <button
          className="absolute top-3 right-3 text-xl text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
          onClick={onClose}
          aria-label="닫기"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">{project.description}</p>
        {project.imageUrl && (
          <img src={project.imageUrl} alt={project.title} className="mb-4 rounded-lg w-full object-cover h-48" />
        )}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-2 mb-2">
          {project.githubUrl && (
            <Button href={project.githubUrl} target="_blank" variant="outline" size="sm">
              GitHub
            </Button>
          )}
          {project.demoUrl && (
            <Button href={project.demoUrl} target="_blank" size="sm">
              Demo
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

