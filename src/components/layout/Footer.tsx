/**
 * Footer 컴포넌트
 * 저작권 정보를 표시함
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
      </div>
    </footer>
  )
}

