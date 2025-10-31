import { router } from './trpc'

export const appRouter = router({
  // set up routers here
})

export type AppRouter = typeof appRouter
