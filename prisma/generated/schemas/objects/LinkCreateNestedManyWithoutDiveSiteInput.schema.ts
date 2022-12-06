import { z } from "zod";
import { LinkCreateWithoutDiveSiteInputObjectSchema } from "./LinkCreateWithoutDiveSiteInput.schema";
import { LinkUncheckedCreateWithoutDiveSiteInputObjectSchema } from "./LinkUncheckedCreateWithoutDiveSiteInput.schema";
import { LinkCreateOrConnectWithoutDiveSiteInputObjectSchema } from "./LinkCreateOrConnectWithoutDiveSiteInput.schema";
import { LinkCreateManyDiveSiteInputEnvelopeObjectSchema } from "./LinkCreateManyDiveSiteInputEnvelope.schema";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkCreateNestedManyWithoutDiveSiteInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => LinkCreateWithoutDiveSiteInputObjectSchema),
        z.lazy(() => LinkCreateWithoutDiveSiteInputObjectSchema).array(),
        z.lazy(() => LinkUncheckedCreateWithoutDiveSiteInputObjectSchema),
        z
          .lazy(() => LinkUncheckedCreateWithoutDiveSiteInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => LinkCreateOrConnectWithoutDiveSiteInputObjectSchema),
        z
          .lazy(() => LinkCreateOrConnectWithoutDiveSiteInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => LinkCreateManyDiveSiteInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => LinkWhereUniqueInputObjectSchema),
        z.lazy(() => LinkWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const LinkCreateNestedManyWithoutDiveSiteInputObjectSchema = Schema;
