import { router, protectedProcedure } from "../trpc";
import { DiveValidator } from '../../../validators/dives'
import { z } from 'zod';

export const diveRouter = router({
  getUserDives: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.dive.findMany({
      where: {
        userId: ctx.session.user.id
      }
    });
  }),
  createDive: protectedProcedure
    .input(z.object({ data: DiveValidator }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.dive.create({
        data: {
          userId: ctx.session.user.id,
          ...input.data
        }
      })
    })
});

