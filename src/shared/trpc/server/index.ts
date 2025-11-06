import 'server-only'
import { createContext } from './context'
import { appRouter } from './router'

export async function getTrpcServerApi() {
  return appRouter.createCaller(await createContext())
}
