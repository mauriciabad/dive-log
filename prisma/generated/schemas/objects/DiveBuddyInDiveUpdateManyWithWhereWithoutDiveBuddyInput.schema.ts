import { z } from "zod";
import { DiveBuddyInDiveScalarWhereInputObjectSchema } from "./DiveBuddyInDiveScalarWhereInput.schema";
import { DiveBuddyInDiveUpdateManyMutationInputObjectSchema } from "./DiveBuddyInDiveUpdateManyMutationInput.schema";
import { DiveBuddyInDiveUncheckedUpdateManyWithoutDiveBuddyInDivesInputObjectSchema } from "./DiveBuddyInDiveUncheckedUpdateManyWithoutDiveBuddyInDivesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveUpdateManyWithWhereWithoutDiveBuddyInput> =
  z
    .object({
      where: z.lazy(() => DiveBuddyInDiveScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => DiveBuddyInDiveUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            DiveBuddyInDiveUncheckedUpdateManyWithoutDiveBuddyInDivesInputObjectSchema
        ),
      ]),
    })
    .strict();

export const DiveBuddyInDiveUpdateManyWithWhereWithoutDiveBuddyInputObjectSchema =
  Schema;
