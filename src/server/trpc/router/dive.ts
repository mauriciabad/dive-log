import { router, publicProcedure } from "../trpc";

export const diveRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.dive.findMany();
  }),
});
