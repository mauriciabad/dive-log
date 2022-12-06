import { z } from "zod";
import { DiveBuddyScalarWhereInputObjectSchema } from "./DiveBuddyScalarWhereInput.schema";
import { DiveBuddyUpdateManyMutationInputObjectSchema } from "./DiveBuddyUpdateManyMutationInput.schema";
import { DiveBuddyUncheckedUpdateManyWithoutDiveBuddyInputObjectSchema } from "./DiveBuddyUncheckedUpdateManyWithoutDiveBuddyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyUpdateManyWithWhereWithoutCreatorUserInput> =
  z
    .object({
      where: z.lazy(() => DiveBuddyScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => DiveBuddyUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => DiveBuddyUncheckedUpdateManyWithoutDiveBuddyInputObjectSchema
        ),
      ]),
    })
    .strict();

export const DiveBuddyUpdateManyWithWhereWithoutCreatorUserInputObjectSchema =
  Schema;
