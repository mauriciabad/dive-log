import { z } from "zod";
import { DiveBuddyInDiveWhereUniqueInputObjectSchema } from "./DiveBuddyInDiveWhereUniqueInput.schema";
import { DiveBuddyInDiveUpdateWithoutDiveBuddyInputObjectSchema } from "./DiveBuddyInDiveUpdateWithoutDiveBuddyInput.schema";
import { DiveBuddyInDiveUncheckedUpdateWithoutDiveBuddyInputObjectSchema } from "./DiveBuddyInDiveUncheckedUpdateWithoutDiveBuddyInput.schema";
import { DiveBuddyInDiveCreateWithoutDiveBuddyInputObjectSchema } from "./DiveBuddyInDiveCreateWithoutDiveBuddyInput.schema";
import { DiveBuddyInDiveUncheckedCreateWithoutDiveBuddyInputObjectSchema } from "./DiveBuddyInDiveUncheckedCreateWithoutDiveBuddyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveUpsertWithWhereUniqueWithoutDiveBuddyInput> =
  z
    .object({
      where: z.lazy(() => DiveBuddyInDiveWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => DiveBuddyInDiveUpdateWithoutDiveBuddyInputObjectSchema),
        z.lazy(
          () => DiveBuddyInDiveUncheckedUpdateWithoutDiveBuddyInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => DiveBuddyInDiveCreateWithoutDiveBuddyInputObjectSchema),
        z.lazy(
          () => DiveBuddyInDiveUncheckedCreateWithoutDiveBuddyInputObjectSchema
        ),
      ]),
    })
    .strict();

export const DiveBuddyInDiveUpsertWithWhereUniqueWithoutDiveBuddyInputObjectSchema =
  Schema;
