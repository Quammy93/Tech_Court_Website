import Link from 'next/link'
import { FileDown } from 'lucide-react'

export default function Resume() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Resume</h1>
      <div className="mb-8">
        <Link
          href="/your-resume.pdf"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          download
        >
          <FileDown className="mr-2" size={20} />
          Download Resume (PDF)
        </Link>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Experience</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Senior Web Developer</h3>
            <p className="text-gray-600 dark:text-gray-300">TechCorp Inc. | 2020 - Present</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2">
              <li>Led a team of 5 developers in creating responsive web applications</li>
              <li>Implemented CI/CD pipelines, reducing deployment time by 40%</li>
              <li>Optimized database queries, improving application performance by 25%</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Web Developer</h3>
            <p className="text-gray-600 dark:text-gray-300">WebSolutions Co. | 2017 - 2020</p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2">
              <li>Developed and maintained client websites using React and Node.js</li>
              <li>Collaborated with designers to implement pixel-perfect UI designs</li>
              <li>Integrated third-party APIs to enhance website functionality</li>
            </ul>
          </div>
        </section>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Education</h2>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600 dark:text-gray-300">University of Technology | 2013 - 2017</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Certifications</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            <li>AWS Certified Developer - Associate</li>
            <li>MongoDB Certified Developer</li>
            <li>Google Analytics Individual Qualification</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

