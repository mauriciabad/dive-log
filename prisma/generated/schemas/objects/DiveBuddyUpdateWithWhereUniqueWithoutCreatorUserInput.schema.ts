import { z } from "zod";
import { DiveBuddyWhereUniqueInputObjectSchema } from "./DiveBuddyWhereUniqueInput.schema";
import { DiveBuddyUpdateWithoutCreatorUserInputObjectSchema } from "./DiveBuddyUpdateWithoutCreatorUserInput.schema";
import { DiveBuddyUncheckedUpdateWithoutCreatorUserInputObjectSchema } from "./DiveBuddyUncheckedUpdateWithoutCreatorUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyUpdateWithWhereUniqueWithoutCreatorUserInput> =
  z
    .object({
      where: z.lazy(() => DiveBuddyWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => DiveBuddyUpdateWithoutCreatorUserInputObjectSchema),
        z.lazy(
          () => DiveBuddyUncheckedUpdateWithoutCreatorUserInputObjectSchema
        ),
      ]),
    })
    .strict();

export const DiveBuddyUpdateWithWhereUniqueWithoutCreatorUserInputObjectSchema =
  Schema;
