import { z } from "zod";
import { DiveBuddyInDiveWhereUniqueInputObjectSchema } from "./DiveBuddyInDiveWhereUniqueInput.schema";
import { DiveBuddyInDiveCreateWithoutDiveInputObjectSchema } from "./DiveBuddyInDiveCreateWithoutDiveInput.schema";
import { DiveBuddyInDiveUncheckedCreateWithoutDiveInputObjectSchema } from "./DiveBuddyInDiveUncheckedCreateWithoutDiveInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveCreateOrConnectWithoutDiveInput> =
  z
    .object({
      where: z.lazy(() => DiveBuddyInDiveWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => DiveBuddyInDiveCreateWithoutDiveInputObjectSchema),
        z.lazy(
          () => DiveBuddyInDiveUncheckedCreateWithoutDiveInputObjectSchema
        ),
      ]),
    })
    .strict();

export const DiveBuddyInDiveCreateOrConnectWithoutDiveInputObjectSchema =
  Schema;
