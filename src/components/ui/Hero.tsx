import type { PortfolioData } from "../../types/portfolio";

/**
 * Hero 컴포넌트
 * 메인 섹션으로 이름, 직업, 소개를 표시함
 */
export function Hero({ data }: { data: Pick<PortfolioData, "name" | "title" | "bio"> }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl w-full fade-in-section is-visible">
        <p className="text-light-primary dark:text-dark-primary font-mono mb-5 text-lg">Hi, my name is</p>
        <h1 className="text-5xl md:text-7xl font-bold text-light-heading dark:text-dark-heading mb-4 tracking-tight">
          {data.name}.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-light-text/70 dark:text-dark-text/80 mb-8 leading-tight">
          {data.title}.
        </h2>
        <p className="max-w-xl text-lg text-light-text dark:text-dark-text mb-12 leading-relaxed">
          {data.bio}
        </p>
        <a href="#projects" className="inline-block px-8 py-4 border border-light-primary dark:border-dark-primary text-light-primary dark:text-dark-primary font-mono rounded hover:bg-light-primary/10 dark:hover:bg-dark-primary/10 transition-colors text-lg">
          Check out my work!
        </a>
      </div>
    </section>
  );
}
