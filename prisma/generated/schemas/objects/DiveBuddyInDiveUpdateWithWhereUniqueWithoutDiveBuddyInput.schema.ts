import { z } from "zod";
import { DiveBuddyInDiveWhereUniqueInputObjectSchema } from "./DiveBuddyInDiveWhereUniqueInput.schema";
import { DiveBuddyInDiveUpdateWithoutDiveBuddyInputObjectSchema } from "./DiveBuddyInDiveUpdateWithoutDiveBuddyInput.schema";
import { DiveBuddyInDiveUncheckedUpdateWithoutDiveBuddyInputObjectSchema } from "./DiveBuddyInDiveUncheckedUpdateWithoutDiveBuddyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveUpdateWithWhereUniqueWithoutDiveBuddyInput> =
  z
    .object({
      where: z.lazy(() => DiveBuddyInDiveWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => DiveBuddyInDiveUpdateWithoutDiveBuddyInputObjectSchema),
        z.lazy(
          () => DiveBuddyInDiveUncheckedUpdateWithoutDiveBuddyInputObjectSchema
        ),
      ]),
    })
    .strict();

export const DiveBuddyInDiveUpdateWithWhereUniqueWithoutDiveBuddyInputObjectSchema =
  Schema;
