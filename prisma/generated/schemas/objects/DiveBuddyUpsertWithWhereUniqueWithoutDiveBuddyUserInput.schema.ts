import { z } from "zod";
import { DiveBuddyWhereUniqueInputObjectSchema } from "./DiveBuddyWhereUniqueInput.schema";
import { DiveBuddyUpdateWithoutDiveBuddyUserInputObjectSchema } from "./DiveBuddyUpdateWithoutDiveBuddyUserInput.schema";
import { DiveBuddyUncheckedUpdateWithoutDiveBuddyUserInputObjectSchema } from "./DiveBuddyUncheckedUpdateWithoutDiveBuddyUserInput.schema";
import { DiveBuddyCreateWithoutDiveBuddyUserInputObjectSchema } from "./DiveBuddyCreateWithoutDiveBuddyUserInput.schema";
import { DiveBuddyUncheckedCreateWithoutDiveBuddyUserInputObjectSchema } from "./DiveBuddyUncheckedCreateWithoutDiveBuddyUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyUpsertWithWhereUniqueWithoutDiveBuddyUserInput> =
  z
    .object({
      where: z.lazy(() => DiveBuddyWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => DiveBuddyUpdateWithoutDiveBuddyUserInputObjectSchema),
        z.lazy(
          () => DiveBuddyUncheckedUpdateWithoutDiveBuddyUserInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => DiveBuddyCreateWithoutDiveBuddyUserInputObjectSchema),
        z.lazy(
          () => DiveBuddyUncheckedCreateWithoutDiveBuddyUserInputObjectSchema
        ),
      ]),
    })
    .strict();

export const DiveBuddyUpsertWithWhereUniqueWithoutDiveBuddyUserInputObjectSchema =
  Schema;
