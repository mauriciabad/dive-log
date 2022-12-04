import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { diveRouter } from "./dive";

export const appRouter = router({
  example: exampleRouter,
  dive: diveRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
