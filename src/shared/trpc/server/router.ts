import { productRouter } from '@/features/product-viewer/server'

import { router } from './trpc'

export const appRouter = router({
  // set up routers here
  product: productRouter,
})

export type AppRouter = typeof appRouter
