import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

import { createContext } from '@/shared/trpc/server/context'
import { appRouter } from '@/shared/trpc/server/router'

export const runtime = 'edge'

const handler = (req: Request) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext,
  })
}

export { handler as GET, handler as POST }
