import { z } from "zod";
import { DiveBuddyInDiveWhereUniqueInputObjectSchema } from "./DiveBuddyInDiveWhereUniqueInput.schema";
import { DiveBuddyInDiveUpdateWithoutDiveInputObjectSchema } from "./DiveBuddyInDiveUpdateWithoutDiveInput.schema";
import { DiveBuddyInDiveUncheckedUpdateWithoutDiveInputObjectSchema } from "./DiveBuddyInDiveUncheckedUpdateWithoutDiveInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveUpdateWithWhereUniqueWithoutDiveInput> =
  z
    .object({
      where: z.lazy(() => DiveBuddyInDiveWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => DiveBuddyInDiveUpdateWithoutDiveInputObjectSchema),
        z.lazy(
          () => DiveBuddyInDiveUncheckedUpdateWithoutDiveInputObjectSchema
        ),
      ]),
    })
    .strict();

export const DiveBuddyInDiveUpdateWithWhereUniqueWithoutDiveInputObjectSchema =
  Schema;
