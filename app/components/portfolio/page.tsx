'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Project {
  id: string
  title: string
  description: string
  image: string
  category: string
}

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([])
  const [activeCategory, setActiveCategory] = useState('All')

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch('/api/projects')
      const data: Project[] = await response.json()
      setProjects(data)
    }
    fetchProjects()
  }, [])

  const categories = ['All', ...new Set(projects.map(project => project.category))]

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Portfolio</h1>
      <div className="flex justify-center mb-8">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`mx-2 px-4 py-2 rounded-full ${
              activeCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{project.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

