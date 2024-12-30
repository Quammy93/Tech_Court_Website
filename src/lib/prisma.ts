// Singleton Pattern:
// It implements the singleton pattern for the Prisma client.
// This ensures that only one instance of PrismaClient is created and reused across your entire application
// Environment-specific Initialization
// The PrismaClient instance is created differently depending on the NODE_ENV environment variable.


import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as typeof global & { prisma?: PrismaClient };

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'], // Optional: enable logging for Prisma queries
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
