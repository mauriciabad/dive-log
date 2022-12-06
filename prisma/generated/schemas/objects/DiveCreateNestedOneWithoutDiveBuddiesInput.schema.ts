import { z } from "zod";
import { DiveCreateWithoutDiveBuddiesInputObjectSchema } from "./DiveCreateWithoutDiveBuddiesInput.schema";
import { DiveUncheckedCreateWithoutDiveBuddiesInputObjectSchema } from "./DiveUncheckedCreateWithoutDiveBuddiesInput.schema";
import { DiveCreateOrConnectWithoutDiveBuddiesInputObjectSchema } from "./DiveCreateOrConnectWithoutDiveBuddiesInput.schema";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCreateNestedOneWithoutDiveBuddiesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DiveCreateWithoutDiveBuddiesInputObjectSchema),
        z.lazy(() => DiveUncheckedCreateWithoutDiveBuddiesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => DiveCreateOrConnectWithoutDiveBuddiesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => DiveWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const DiveCreateNestedOneWithoutDiveBuddiesInputObjectSchema = Schema;
