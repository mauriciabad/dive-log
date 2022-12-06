import { z } from "zod";
import { DiveBuddyInDiveWhereUniqueInputObjectSchema } from "./DiveBuddyInDiveWhereUniqueInput.schema";
import { DiveBuddyInDiveUpdateWithoutDiveInputObjectSchema } from "./DiveBuddyInDiveUpdateWithoutDiveInput.schema";
import { DiveBuddyInDiveUncheckedUpdateWithoutDiveInputObjectSchema } from "./DiveBuddyInDiveUncheckedUpdateWithoutDiveInput.schema";
import { DiveBuddyInDiveCreateWithoutDiveInputObjectSchema } from "./DiveBuddyInDiveCreateWithoutDiveInput.schema";
import { DiveBuddyInDiveUncheckedCreateWithoutDiveInputObjectSchema } from "./DiveBuddyInDiveUncheckedCreateWithoutDiveInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveUpsertWithWhereUniqueWithoutDiveInput> =
  z
    .object({
      where: z.lazy(() => DiveBuddyInDiveWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => DiveBuddyInDiveUpdateWithoutDiveInputObjectSchema),
        z.lazy(
          () => DiveBuddyInDiveUncheckedUpdateWithoutDiveInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => DiveBuddyInDiveCreateWithoutDiveInputObjectSchema),
        z.lazy(
          () => DiveBuddyInDiveUncheckedCreateWithoutDiveInputObjectSchema
        ),
      ]),
    })
    .strict();

export const DiveBuddyInDiveUpsertWithWhereUniqueWithoutDiveInputObjectSchema =
  Schema;
