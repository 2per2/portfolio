import type { Project } from "../../types/portfolio";

/**
 * Projects 컴포넌트
 * 프로젝트 목록을 카드 형태로 표시함
 */
export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto fade-in-section">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-light-heading dark:text-dark-heading mr-4">
            <span className="text-light-primary dark:text-dark-primary font-mono text-xl mr-2">03.</span> Where I&apos;ve Built
          </h2>
          <div className="h-px bg-gray-300 dark:bg-gray-700 flex-grow max-w-xs"></div>
        </div>
        <div className="space-y-24">
          {projects.map((p, i) => (
            <div key={i} className={`flex flex-col md:flex-row md:items-center gap-10 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className="md:w-1/2 space-y-3">
                <p className="font-mono text-light-primary dark:text-dark-primary text-sm">{p.type}</p>
                <h3 className="text-2xl font-bold text-light-heading dark:text-dark-heading mb-2">{p.title}</h3>
                <div className="bg-light-card dark:bg-dark-card p-6 rounded shadow-card mb-4 text-base">{p.desc}</div>
                <ul className="flex flex-wrap gap-3 font-mono text-xs text-gray-500 dark:text-slate-400 mb-5">{p.techs.map(t => <li key={t} className="px-2 py-1 rounded bg-purple-100 dark:bg-purple-900/30">{t}</li>)}</ul>
                <div className="flex gap-5 text-xl text-light-heading dark:text-dark-heading">
                  <a href="#" className="hover:text-light-primary dark:hover:text-dark-primary"><i className="fa-brands fa-github"></i></a>
                  <a href="#" className="hover:text-light-primary dark:hover:text-dark-primary"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
              </div>
              <div className="md:w-1/2 min-h-[240px] overflow-hidden flex items-center rounded-xl border border-gray-300 dark:border-gray-700 shadow-card">
                <img src={p.img} alt="Project Screenshot" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
