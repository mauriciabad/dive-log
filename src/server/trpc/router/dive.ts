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
  getLastDive: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.dive.findFirst({
      where: {
        userId: ctx.session.user.id,
      },
      orderBy: {
        diveNumber: 'desc',
      }
    })
  }),
  createDive: protectedProcedure
    .input(z.object({ data: CreateDiveSchema }))
    .mutation(({ ctx, input }) => {
      const { diveSiteId, ...data } = input.data

      return ctx.prisma.dive.create({
        data: {
          user: {
            connect: {
              id: ctx.session.user.id,
            }
          },

          diveSite: {
            connect: {
              id: diveSiteId,
            }
          },

          ...data
        }
      })
    })
});

