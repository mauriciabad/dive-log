import { z } from "zod";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkCreateWithoutDiveBuddyInputObjectSchema } from "./LinkCreateWithoutDiveBuddyInput.schema";
import { LinkUncheckedCreateWithoutDiveBuddyInputObjectSchema } from "./LinkUncheckedCreateWithoutDiveBuddyInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkCreateOrConnectWithoutDiveBuddyInput> = z
  .object({
    where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LinkCreateWithoutDiveBuddyInputObjectSchema),
      z.lazy(() => LinkUncheckedCreateWithoutDiveBuddyInputObjectSchema),
    ]),
  })
  .strict();

export const LinkCreateOrConnectWithoutDiveBuddyInputObjectSchema = Schema;
