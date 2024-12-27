import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Seed blog posts
  await prisma.blogPost.createMany({
    data: [
      {
        title: 'Getting Started with Next.js',
        content: 'Content of the blog post...',
        description: 'Learn how to build modern web applications with Next.js',
        image: '/placeholder.svg',
      },
      {
        title: 'Mastering Tailwind CSS',
        content: 'Content of the blog post...',
        description: 'Tips and tricks for using Tailwind CSS effectively',
        image: '/placeholder.svg',
      },
    ],
  })

  // Seed projects
  await prisma.project.createMany({
    data: [
      {
        title: 'E-commerce Website',
        description: 'A full-stack e-commerce platform built with Next.js and Stripe',
        image: '/placeholder.svg',
        category: 'Web Development',
      },
      {
        title: 'Data Visualization Dashboard',
        description: 'Interactive dashboard for visualizing complex datasets',
        image: '/placeholder.svg',
        category: 'Data Science',
      },
    ],
  })

  // Seed skills
  await prisma.skill.createMany({
    data: [
      { name: 'JavaScript', level: 90 },
      { name: 'React', level: 85 },
      { name: 'Node.js', level: 80 },
      { name: 'Python', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'Prisma', level: 65 },
    ],
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })