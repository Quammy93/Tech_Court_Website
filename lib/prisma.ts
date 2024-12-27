// Singleton Pattern:
// It implements the singleton pattern for the Prisma client.
// This ensures that only one instance of PrismaClient is created and reused across your entire application
// Environment-specific Initialization
// The PrismaClient instance is created differently depending on the NODE_ENV environment variable.


declare global {
    var prisma: PrismaClient | undefined
  }
  

import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export default prisma

