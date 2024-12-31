import Link from 'next/link'
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">&copy; 2024 MAXWELL AHORLU. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/Quammy93" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/in/maxwell-ahorlu-6833b41ab" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com/@Dev_MacCitY" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <Link href="/portfolio" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Portfolio
          </Link>
          <Link href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

