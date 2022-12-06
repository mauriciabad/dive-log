import { z } from "zod";
import { DiveBuddyWhereUniqueInputObjectSchema } from "./DiveBuddyWhereUniqueInput.schema";
import { DiveBuddyCreateWithoutCreatorUserInputObjectSchema } from "./DiveBuddyCreateWithoutCreatorUserInput.schema";
import { DiveBuddyUncheckedCreateWithoutCreatorUserInputObjectSchema } from "./DiveBuddyUncheckedCreateWithoutCreatorUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyCreateOrConnectWithoutCreatorUserInput> =
  z
    .object({
      where: z.lazy(() => DiveBuddyWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => DiveBuddyCreateWithoutCreatorUserInputObjectSchema),
        z.lazy(
          () => DiveBuddyUncheckedCreateWithoutCreatorUserInputObjectSchema
        ),
      ]),
    })
    .strict();

export const DiveBuddyCreateOrConnectWithoutCreatorUserInputObjectSchema =
  Schema;
