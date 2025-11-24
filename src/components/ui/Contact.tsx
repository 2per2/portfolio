import { motion } from "framer-motion";
import { Button } from "../common/Button";
import type { ContactInfo } from "../../types/portfolio";

interface ContactProps {
  contact: ContactInfo;
}

/**
 * Contact 컴포넌트
 * 연락처 정보를 표시함
 */
export function Contact({ contact }: ContactProps) {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          Contact
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            궁금한 점이 있으시면 언제든지 연락주세요
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button href={`mailto:${contact.email}`} size="lg">
              📧 {contact.email}
            </Button>

            {contact.github && (
              <Button
                href={contact.github}
                target="_blank"
                variant="outline"
                size="lg"
              >
                GitHub
              </Button>
            )}

            {contact.linkedin && (
              <Button
                href={contact.linkedin}
                target="_blank"
                variant="outline"
                size="lg"
              >
                LinkedIn
              </Button>
            )}

            {contact.blog && (
              <Button
                href={contact.blog}
                target="_blank"
                variant="outline"
                size="lg"
              >
                Blog
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
