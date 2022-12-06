import { z } from "zod";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkUpdateWithoutDiveBuddyInputObjectSchema } from "./LinkUpdateWithoutDiveBuddyInput.schema";
import { LinkUncheckedUpdateWithoutDiveBuddyInputObjectSchema } from "./LinkUncheckedUpdateWithoutDiveBuddyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUpdateWithWhereUniqueWithoutDiveBuddyInput> =
  z
    .object({
      where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => LinkUpdateWithoutDiveBuddyInputObjectSchema),
        z.lazy(() => LinkUncheckedUpdateWithoutDiveBuddyInputObjectSchema),
      ]),
    })
    .strict();

export const LinkUpdateWithWhereUniqueWithoutDiveBuddyInputObjectSchema =
  Schema;
