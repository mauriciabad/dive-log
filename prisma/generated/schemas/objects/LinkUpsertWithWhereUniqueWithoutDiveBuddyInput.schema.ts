import { z } from "zod";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkUpdateWithoutDiveBuddyInputObjectSchema } from "./LinkUpdateWithoutDiveBuddyInput.schema";
import { LinkUncheckedUpdateWithoutDiveBuddyInputObjectSchema } from "./LinkUncheckedUpdateWithoutDiveBuddyInput.schema";
import { LinkCreateWithoutDiveBuddyInputObjectSchema } from "./LinkCreateWithoutDiveBuddyInput.schema";
import { LinkUncheckedCreateWithoutDiveBuddyInputObjectSchema } from "./LinkUncheckedCreateWithoutDiveBuddyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUpsertWithWhereUniqueWithoutDiveBuddyInput> =
  z
    .object({
      where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => LinkUpdateWithoutDiveBuddyInputObjectSchema),
        z.lazy(() => LinkUncheckedUpdateWithoutDiveBuddyInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => LinkCreateWithoutDiveBuddyInputObjectSchema),
        z.lazy(() => LinkUncheckedCreateWithoutDiveBuddyInputObjectSchema),
      ]),
    })
    .strict();

export const LinkUpsertWithWhereUniqueWithoutDiveBuddyInputObjectSchema =
  Schema;
