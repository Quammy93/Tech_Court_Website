import Link from 'next/link'
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-sm mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">&copy; 2023 Your Name. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <Link href="/portfolio" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
            Portfolio
          </Link>
          <Link href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
            About
          </Link>
          <Link href="/resume" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
            Resume
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

