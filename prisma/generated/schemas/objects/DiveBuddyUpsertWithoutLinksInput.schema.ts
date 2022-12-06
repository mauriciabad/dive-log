import { z } from "zod";
import { DiveBuddyUpdateWithoutLinksInputObjectSchema } from "./DiveBuddyUpdateWithoutLinksInput.schema";
import { DiveBuddyUncheckedUpdateWithoutLinksInputObjectSchema } from "./DiveBuddyUncheckedUpdateWithoutLinksInput.schema";
import { DiveBuddyCreateWithoutLinksInputObjectSchema } from "./DiveBuddyCreateWithoutLinksInput.schema";
import { DiveBuddyUncheckedCreateWithoutLinksInputObjectSchema } from "./DiveBuddyUncheckedCreateWithoutLinksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyUpsertWithoutLinksInput> = z
  .object({
    update: z.union([
      z.lazy(() => DiveBuddyUpdateWithoutLinksInputObjectSchema),
      z.lazy(() => DiveBuddyUncheckedUpdateWithoutLinksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DiveBuddyCreateWithoutLinksInputObjectSchema),
      z.lazy(() => DiveBuddyUncheckedCreateWithoutLinksInputObjectSchema),
    ]),
  })
  .strict();

export const DiveBuddyUpsertWithoutLinksInputObjectSchema = Schema;
