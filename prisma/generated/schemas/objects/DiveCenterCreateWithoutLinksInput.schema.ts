import { z } from "zod";
import { UserCreateNestedOneWithoutCreatedDiveCentersInputObjectSchema } from "./UserCreateNestedOneWithoutCreatedDiveCentersInput.schema";
import { DiveCreateNestedManyWithoutDiveCenterInputObjectSchema } from "./DiveCreateNestedManyWithoutDiveCenterInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCenterCreateWithoutLinksInput> = z
  .object({
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    id: z.string().optional(),
    name: z.string(),
    description: z.string().optional().nullable(),
    image: z.string().optional().nullable(),
    latitude: z.number(),
    longitude: z.number(),
    createdByUser: z.lazy(
      () => UserCreateNestedOneWithoutCreatedDiveCentersInputObjectSchema
    ),
    dives: z
      .lazy(() => DiveCreateNestedManyWithoutDiveCenterInputObjectSchema)
      .optional(),
  })
  .strict();

export const DiveCenterCreateWithoutLinksInputObjectSchema = Schema;
