import { z } from "zod";
import { DiveUpdateWithoutDiveBuddiesInputObjectSchema } from "./DiveUpdateWithoutDiveBuddiesInput.schema";
import { DiveUncheckedUpdateWithoutDiveBuddiesInputObjectSchema } from "./DiveUncheckedUpdateWithoutDiveBuddiesInput.schema";
import { DiveCreateWithoutDiveBuddiesInputObjectSchema } from "./DiveCreateWithoutDiveBuddiesInput.schema";
import { DiveUncheckedCreateWithoutDiveBuddiesInputObjectSchema } from "./DiveUncheckedCreateWithoutDiveBuddiesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUpsertWithoutDiveBuddiesInput> = z
  .object({
    update: z.union([
      z.lazy(() => DiveUpdateWithoutDiveBuddiesInputObjectSchema),
      z.lazy(() => DiveUncheckedUpdateWithoutDiveBuddiesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DiveCreateWithoutDiveBuddiesInputObjectSchema),
      z.lazy(() => DiveUncheckedCreateWithoutDiveBuddiesInputObjectSchema),
    ]),
  })
  .strict();

export const DiveUpsertWithoutDiveBuddiesInputObjectSchema = Schema;
