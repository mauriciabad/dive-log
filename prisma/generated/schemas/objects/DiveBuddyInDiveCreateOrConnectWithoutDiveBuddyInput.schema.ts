import { z } from "zod";
import { DiveBuddyInDiveWhereUniqueInputObjectSchema } from "./DiveBuddyInDiveWhereUniqueInput.schema";
import { DiveBuddyInDiveCreateWithoutDiveBuddyInputObjectSchema } from "./DiveBuddyInDiveCreateWithoutDiveBuddyInput.schema";
import { DiveBuddyInDiveUncheckedCreateWithoutDiveBuddyInputObjectSchema } from "./DiveBuddyInDiveUncheckedCreateWithoutDiveBuddyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveCreateOrConnectWithoutDiveBuddyInput> =
  z
    .object({
      where: z.lazy(() => DiveBuddyInDiveWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => DiveBuddyInDiveCreateWithoutDiveBuddyInputObjectSchema),
        z.lazy(
          () => DiveBuddyInDiveUncheckedCreateWithoutDiveBuddyInputObjectSchema
        ),
      ]),
    })
    .strict();

export const DiveBuddyInDiveCreateOrConnectWithoutDiveBuddyInputObjectSchema =
  Schema;
