import { userAgent } from "next/server";
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
      },
      orderBy: {
        diveNumber: 'desc',
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
      const { diveSiteId, links, ...data } = input.data

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

          links: {
            createMany: {
              data: links.map(link => ({
                creatorUserId: ctx.session.user.id,
                ...link
              }))
            }
          },

          ...data
        }
      })
    })
});

