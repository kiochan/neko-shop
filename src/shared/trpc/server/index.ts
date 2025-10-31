import 'server-only'

import { appRouter } from './router'

export const api = appRouter.createCaller({})
