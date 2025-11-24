import { motion } from "framer-motion";
import type { Skill } from "../../types/portfolio";

interface SkillsProps {
  skills: Skill[];
}

/**
 * Skills 컴포넌트
 * 기술 스택을 카테고리별로 표시함
 */
export function Skills({ skills }: SkillsProps) {
  const categories = ["frontend", "backend", "tool", "other"] as const;
  const categoryLabels = {
    frontend: "Frontend",
    backend: "Backend",
    tool: "Tools",
    other: "Other",
  };

  const levelColors = {
    beginner: "bg-yellow-500",
    intermediate: "bg-blue-500",
    advanced: "bg-green-500",
  };

  const getSkillsByCategory = (category: Skill["category"]) => {
    return skills.filter((skill) => skill.category === category);
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, categoryIndex) => {
            const categorySkills = getSkillsByCategory(category);
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {categoryLabels[category]}
                </h3>
                <div className="space-y-3">
                  {categorySkills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                          {skill.level}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: index * 0.1 }}
                          className={`h-2 rounded-full ${
                            levelColors[skill.level]
                          }`}
                          style={{
                            width:
                              skill.level === "beginner"
                                ? "33%"
                                : skill.level === "intermediate"
                                ? "66%"
                                : "100%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
