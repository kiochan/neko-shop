import { cookies } from 'next/headers';
import { PrismaClient } from '@/generated/prisma/client';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Page } from '@/components/view/page';

const prisma = new PrismaClient();

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sessionId')?.value!;

  const session = await prisma.session.findUnique({
    where: { id: sessionId },
    include: { user: true },
  });

  return (
    /*
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-lg rounded-xl bg-white shadow-lg p-8 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Dashboard
        </h1>

        <div className="space-y-2 text-center">
          <p className="text-lg text-gray-700">
            Welcome back,{" "}
            <span className="font-semibold text-blue-600">
              {session?.user.name ?? "User"}
            </span>
            !
          </p>
          <p className="text-sm text-gray-500">
            Your user ID is:{" "}
            <span className="font-mono font-medium text-gray-800">
              {session?.user.id}
            </span>
          </p>
        </div>
      </div>
    </main>
    */
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
  );
}
