import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../common/Button'
import type { Project } from '../../types/portfolio'
import { ProjectDetailModal } from './ProjectDetailModal'

interface ProjectsProps {
  projects: Project[]
}

/**
 * Projects 컴포넌트
 * 프로젝트 목록을 카드 형태로 표시함
 */
export function Projects({ projects }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    target="_blank"
                    variant="outline"
                    size="sm"
                    onClick={e => e.stopPropagation()}
                  >
                    GitHub
                  </Button>
                )}
                {project.demoUrl && (
                  <Button
                    href={project.demoUrl}
                    target="_blank"
                    size="sm"
                    onClick={e => e.stopPropagation()}
                  >
                    Demo
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        <ProjectDetailModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </section>
  )
}

