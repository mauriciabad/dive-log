import { z } from "zod";
import { DiveBuddyWhereUniqueInputObjectSchema } from "./DiveBuddyWhereUniqueInput.schema";
import { DiveBuddyCreateWithoutDiveBuddyInDivesInputObjectSchema } from "./DiveBuddyCreateWithoutDiveBuddyInDivesInput.schema";
import { DiveBuddyUncheckedCreateWithoutDiveBuddyInDivesInputObjectSchema } from "./DiveBuddyUncheckedCreateWithoutDiveBuddyInDivesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyCreateOrConnectWithoutDiveBuddyInDivesInput> =
  z
    .object({
      where: z.lazy(() => DiveBuddyWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => DiveBuddyCreateWithoutDiveBuddyInDivesInputObjectSchema),
        z.lazy(
          () => DiveBuddyUncheckedCreateWithoutDiveBuddyInDivesInputObjectSchema
        ),
      ]),
    })
    .strict();

export const DiveBuddyCreateOrConnectWithoutDiveBuddyInDivesInputObjectSchema =
  Schema;
