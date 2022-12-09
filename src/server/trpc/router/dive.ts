import { z } from "zod";
import { CreateDiveSchema } from "../../../validators/Dive";
import { router, protectedProcedure } from "../trpc";

export const diveRouter = router({
  getUserDives: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.dive.findMany({
      where: {
        userId: ctx.session.user.id
      },
      include: {
        diveSite: true,
      }
    });
  }),
  createDive: protectedProcedure
    .input(z.object({ data: CreateDiveSchema }))
    .mutation(({ ctx, input }) => {
      return ctx.prisma.dive.create({
        // TODO: Remove this @ts-ignore
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        data: {
          user: {
            connect: {
              id: ctx.session.user.id,
            }
          },

          diveSite: {
            connect: {
              id: input.data.diveSiteId,
            }
          },

          ...input.data
        }
      })
    })
});

