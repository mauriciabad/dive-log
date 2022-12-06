import { z } from "zod";
import { DiveBuddyWhereUniqueInputObjectSchema } from "./DiveBuddyWhereUniqueInput.schema";
import { DiveBuddyCreateWithoutDiveBuddyUserInputObjectSchema } from "./DiveBuddyCreateWithoutDiveBuddyUserInput.schema";
import { DiveBuddyUncheckedCreateWithoutDiveBuddyUserInputObjectSchema } from "./DiveBuddyUncheckedCreateWithoutDiveBuddyUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyCreateOrConnectWithoutDiveBuddyUserInput> =
  z
    .object({
      where: z.lazy(() => DiveBuddyWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => DiveBuddyCreateWithoutDiveBuddyUserInputObjectSchema),
        z.lazy(
          () => DiveBuddyUncheckedCreateWithoutDiveBuddyUserInputObjectSchema
        ),
      ]),
    })
    .strict();

export const DiveBuddyCreateOrConnectWithoutDiveBuddyUserInputObjectSchema =
  Schema;
