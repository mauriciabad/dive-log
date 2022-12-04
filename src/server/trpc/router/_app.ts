import { router } from "../trpc";
import { authRouter } from "./auth";
import { diveRouter } from "./dive";

export const appRouter = router({
  dive: diveRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
