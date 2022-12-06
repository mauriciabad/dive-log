import { z } from "zod";
import { LinkUncheckedCreateNestedManyWithoutDiveCenterInputObjectSchema } from "./LinkUncheckedCreateNestedManyWithoutDiveCenterInput.schema";
import { DiveUncheckedCreateNestedManyWithoutDiveCenterInputObjectSchema } from "./DiveUncheckedCreateNestedManyWithoutDiveCenterInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCenterUncheckedCreateInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    id: z.string().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    latitude: z.number(),
    longitude: z.number(),
    links: z
      .lazy(
        () => LinkUncheckedCreateNestedManyWithoutDiveCenterInputObjectSchema
      )
      .optional(),
    createdByUserId: z.string(),
    dives: z
      .lazy(
        () => DiveUncheckedCreateNestedManyWithoutDiveCenterInputObjectSchema
      )
      .optional(),
  })
  .strict();

export const DiveCenterUncheckedCreateInputObjectSchema = Schema;
