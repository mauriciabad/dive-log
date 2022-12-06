import { z } from "zod";
import { DiveCreateWithoutDiveBuddiesInputObjectSchema } from "./DiveCreateWithoutDiveBuddiesInput.schema";
import { DiveUncheckedCreateWithoutDiveBuddiesInputObjectSchema } from "./DiveUncheckedCreateWithoutDiveBuddiesInput.schema";
import { DiveCreateOrConnectWithoutDiveBuddiesInputObjectSchema } from "./DiveCreateOrConnectWithoutDiveBuddiesInput.schema";
import { DiveUpsertWithoutDiveBuddiesInputObjectSchema } from "./DiveUpsertWithoutDiveBuddiesInput.schema";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";
import { DiveUpdateWithoutDiveBuddiesInputObjectSchema } from "./DiveUpdateWithoutDiveBuddiesInput.schema";
import { DiveUncheckedUpdateWithoutDiveBuddiesInputObjectSchema } from "./DiveUncheckedUpdateWithoutDiveBuddiesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUpdateOneRequiredWithoutDiveBuddiesNestedInput> =
  z
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
      upsert: z
        .lazy(() => DiveUpsertWithoutDiveBuddiesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => DiveWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => DiveUpdateWithoutDiveBuddiesInputObjectSchema),
          z.lazy(() => DiveUncheckedUpdateWithoutDiveBuddiesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const DiveUpdateOneRequiredWithoutDiveBuddiesNestedInputObjectSchema =
  Schema;
