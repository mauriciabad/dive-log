import { z } from "zod";
import { DiveBuddyInDiveScalarWhereInputObjectSchema } from "./DiveBuddyInDiveScalarWhereInput.schema";
import { DiveBuddyInDiveUpdateManyMutationInputObjectSchema } from "./DiveBuddyInDiveUpdateManyMutationInput.schema";
import { DiveBuddyInDiveUncheckedUpdateManyWithoutDiveBuddiesInputObjectSchema } from "./DiveBuddyInDiveUncheckedUpdateManyWithoutDiveBuddiesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveUpdateManyWithWhereWithoutDiveInput> =
  z
    .object({
      where: z.lazy(() => DiveBuddyInDiveScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => DiveBuddyInDiveUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            DiveBuddyInDiveUncheckedUpdateManyWithoutDiveBuddiesInputObjectSchema
        ),
      ]),
    })
    .strict();

export const DiveBuddyInDiveUpdateManyWithWhereWithoutDiveInputObjectSchema =
  Schema;
