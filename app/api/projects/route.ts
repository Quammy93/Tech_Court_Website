// API Endpoint: 
// It creates a GET endpoint at that clients can use to fetch project data.

import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET() {
  const projects = await prisma.project.findMany()
  return NextResponse.json(projects)
}

