import { z } from "zod";
import { DiveBuddyScalarWhereInputObjectSchema } from "./DiveBuddyScalarWhereInput.schema";
import { DiveBuddyUpdateManyMutationInputObjectSchema } from "./DiveBuddyUpdateManyMutationInput.schema";
import { DiveBuddyUncheckedUpdateManyWithoutAsDiveBuddyInputObjectSchema } from "./DiveBuddyUncheckedUpdateManyWithoutAsDiveBuddyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyUpdateManyWithWhereWithoutDiveBuddyUserInput> =
  z
    .object({
      where: z.lazy(() => DiveBuddyScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => DiveBuddyUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => DiveBuddyUncheckedUpdateManyWithoutAsDiveBuddyInputObjectSchema
        ),
      ]),
    })
    .strict();

export const DiveBuddyUpdateManyWithWhereWithoutDiveBuddyUserInputObjectSchema =
  Schema;
