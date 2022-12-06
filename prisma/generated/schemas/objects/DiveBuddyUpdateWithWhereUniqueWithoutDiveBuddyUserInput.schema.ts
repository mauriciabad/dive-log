import { z } from "zod";
import { DiveBuddyWhereUniqueInputObjectSchema } from "./DiveBuddyWhereUniqueInput.schema";
import { DiveBuddyUpdateWithoutDiveBuddyUserInputObjectSchema } from "./DiveBuddyUpdateWithoutDiveBuddyUserInput.schema";
import { DiveBuddyUncheckedUpdateWithoutDiveBuddyUserInputObjectSchema } from "./DiveBuddyUncheckedUpdateWithoutDiveBuddyUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyUpdateWithWhereUniqueWithoutDiveBuddyUserInput> =
  z
    .object({
      where: z.lazy(() => DiveBuddyWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => DiveBuddyUpdateWithoutDiveBuddyUserInputObjectSchema),
        z.lazy(
          () => DiveBuddyUncheckedUpdateWithoutDiveBuddyUserInputObjectSchema
        ),
      ]),
    })
    .strict();

export const DiveBuddyUpdateWithWhereUniqueWithoutDiveBuddyUserInputObjectSchema =
  Schema;
