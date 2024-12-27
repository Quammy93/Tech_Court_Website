import Link from 'next/link'
import Image from 'next/image'
import prisma from '@/lib/prisma'
import { PrismaClient } from '@prisma/client'

export default async function Blog() {
  const blogPosts = await prisma.blogPost.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post: PrismaClient['blogPost']['payload']) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="block">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image src={post.image} alt={post.title} width={400} height={200} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{post.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{post.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{post.createdAt.toDateString()}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

