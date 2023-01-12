import { z } from 'zod'
import { CreateDiveSiteSchema } from '../../../validators/DiveSite'
import { router, protectedProcedure, publicProcedure } from '../trpc'

// This id is invented for now
const USER_ID_OF_ADMIN_WITH_DIVE_SITES = 'USER_ID_OF_ADMIN_WITH_DIVE_SITES'

export const diveSiteRouter = router({
  getUserCreatedDiveSites: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.diveSite.findMany({
      where: {
        createdByUserId: ctx.session.user.id,
      },
    })
  }),
  getAllPublicDiveSites: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.diveSite.findMany({
      where: {
        createdByUserId: USER_ID_OF_ADMIN_WITH_DIVE_SITES,
      },
    })
  }),
  getUserDivedDiveSites: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.diveSite.findMany({
      where: {
        dives: {
          some: {
            userId: ctx.session.user.id,
          },
        },
      },
    })
  }),
  createDiveSite: protectedProcedure
    .input(z.object({ data: CreateDiveSiteSchema }))
    .mutation(({ ctx, input }) => {
      const { links, ...data } = input.data

      return ctx.prisma.diveSite.create({
        data: {
          createdByUser: {
            connect: {
              id: ctx.session.user.id,
            },
          },

          links: {
            createMany: {
              data: links.map((link) => ({
                creatorUserId: ctx.session.user.id,
                ...link,
              })),
            },
          },

          ...data,
        },
      })
    }),
})
