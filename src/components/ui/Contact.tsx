import type { ContactInfo } from "../../types/portfolio";

/**
 * Contact 컴포넌트
 * 연락처 정보를 표시함
 */
export function Contact({ contact }: { contact: ContactInfo }) {
  return (
    <section id="contact" className="py-32 px-6 text-center">
      <div className="max-w-2xl mx-auto fade-in-section">
        <p className="text-light-primary dark:text-[#d8b4fe] font-mono mb-6">
          05. What&apos;s Next?
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-light-heading dark:text-dark-heading mb-6">
          Get In Touch
        </h2>
        <p className="text-light-text dark:text-dark-text text-lg mb-12 leading-relaxed">
          저는 현재 [회사명]과 같이 기술적 도전과 성장이 있는 곳에서 새로운
          기회를 찾고 있습니다.
          <br />
          언제든 연락주시면 빠르게 회신 드리겠습니다.
        </p>
        <p className="mt-4 text-sm text-light-text dark:text-dark-text">
          이메일: {contact.email ?? "contact@email.com"}
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="mailto:contact@email.com"
            className="px-8 py-4 border border-light-primary dark:border-[#d8b4fe] bg-light-primary/10 dark:bg-[#d8b4fe]/10 text-light-primary dark:text-[#d8b4fe] font-mono rounded hover:bg-light-primary/20 dark:hover:bg-[#d8b4fe]/20 transition-colors"
          >
            Say Hello
          </a>
          <a
            href="#"
            className="px-8 py-4 border border-gray-400 dark:border-gray-600 text-light-text dark:text-dark-text font-mono rounded hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
