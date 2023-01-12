import { router } from '../trpc'
import { authRouter } from './auth'
import { diveRouter } from './dive'
import { diveSiteRouter } from './diveSite'

export const appRouter = router({
  dive: diveRouter,
  diveSite: diveSiteRouter,
  auth: authRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
