import { PrismaClient } from '@prisma/client'
import { cookies } from 'next/headers'

import { PageContainer } from '@/shared/layout/page-container'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/shared/ui/card'

const prisma = new PrismaClient()

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const sessionId = cookieStore.get('sessionId')?.value

  const session = await prisma.session.findUnique({
    where: { id: sessionId },
    include: { user: true },
  })

  return (
    <PageContainer>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Welcome back,{' '}
            <span className="font-semibold text-blue-600">{session?.user.name ?? 'User'}</span>!
          </p>
        </CardContent>
        <CardFooter>
          <p>
            Your user ID is:{' '}
            <span className="font-mono font-medium text-gray-800">{session?.user.id}</span>
          </p>
        </CardFooter>
      </Card>
    </PageContainer>
  )
}
