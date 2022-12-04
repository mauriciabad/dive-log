import { z } from "zod";
import { UserCreateNestedOneWithoutDivesInputObjectSchema } from "./UserCreateNestedOneWithoutDivesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCreateInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    User: z
      .lazy(() => UserCreateNestedOneWithoutDivesInputObjectSchema)
      .optional(),
    date: z.date(),
    maxDepth: z.number(),
    waterTemp: z.number(),
    locationName: z.string(),
  })
  .strict();

export const DiveCreateInputObjectSchema = Schema;
