import { router, protectedProcedure } from "../trpc";
import { DiveCreateOneSchema } from '../../../../prisma/generated/schemas/createOneDive.schema';

export const diveRouter = router({
  getUserDives: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.dive.findMany({
      where: {
        userId: ctx.session.user.id
      }
    });
  }),
  createDive: protectedProcedure
    .input(DiveCreateOneSchema)
    .mutation(({ ctx, input }) => {
      return ctx.prisma.dive.create({
        data: {
          userId: ctx.session.user.id,
          ...input.data
        }
      })
    })
});

