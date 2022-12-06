import { z } from "zod";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";
import { DiveCreateWithoutDiveBuddiesInputObjectSchema } from "./DiveCreateWithoutDiveBuddiesInput.schema";
import { DiveUncheckedCreateWithoutDiveBuddiesInputObjectSchema } from "./DiveUncheckedCreateWithoutDiveBuddiesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCreateOrConnectWithoutDiveBuddiesInput> = z
  .object({
    where: z.lazy(() => DiveWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DiveCreateWithoutDiveBuddiesInputObjectSchema),
      z.lazy(() => DiveUncheckedCreateWithoutDiveBuddiesInputObjectSchema),
    ]),
  })
  .strict();

export const DiveCreateOrConnectWithoutDiveBuddiesInputObjectSchema = Schema;
