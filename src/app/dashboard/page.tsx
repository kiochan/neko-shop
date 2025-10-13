import { PrismaClient } from '@prisma/client'
import { cookies } from 'next/headers'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Page } from '@/components/view/page'

const prisma = new PrismaClient()

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const sessionId = cookieStore.get('sessionId')?.value

  const session = await prisma.session.findUnique({
    where: { id: sessionId },
    include: { user: true },
  })

  return (
    <Page>
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
    </Page>
  )
}
