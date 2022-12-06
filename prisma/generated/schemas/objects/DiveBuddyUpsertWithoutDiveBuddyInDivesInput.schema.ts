import { z } from "zod";
import { DiveBuddyUpdateWithoutDiveBuddyInDivesInputObjectSchema } from "./DiveBuddyUpdateWithoutDiveBuddyInDivesInput.schema";
import { DiveBuddyUncheckedUpdateWithoutDiveBuddyInDivesInputObjectSchema } from "./DiveBuddyUncheckedUpdateWithoutDiveBuddyInDivesInput.schema";
import { DiveBuddyCreateWithoutDiveBuddyInDivesInputObjectSchema } from "./DiveBuddyCreateWithoutDiveBuddyInDivesInput.schema";
import { DiveBuddyUncheckedCreateWithoutDiveBuddyInDivesInputObjectSchema } from "./DiveBuddyUncheckedCreateWithoutDiveBuddyInDivesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyUpsertWithoutDiveBuddyInDivesInput> = z
  .object({
    update: z.union([
      z.lazy(() => DiveBuddyUpdateWithoutDiveBuddyInDivesInputObjectSchema),
      z.lazy(
        () => DiveBuddyUncheckedUpdateWithoutDiveBuddyInDivesInputObjectSchema
      ),
    ]),
    create: z.union([
      z.lazy(() => DiveBuddyCreateWithoutDiveBuddyInDivesInputObjectSchema),
      z.lazy(
        () => DiveBuddyUncheckedCreateWithoutDiveBuddyInDivesInputObjectSchema
      ),
    ]),
  })
  .strict();

export const DiveBuddyUpsertWithoutDiveBuddyInDivesInputObjectSchema = Schema;
