import { z } from "zod";
import { DiveBuddyCreateWithoutLinksInputObjectSchema } from "./DiveBuddyCreateWithoutLinksInput.schema";
import { DiveBuddyUncheckedCreateWithoutLinksInputObjectSchema } from "./DiveBuddyUncheckedCreateWithoutLinksInput.schema";
import { DiveBuddyCreateOrConnectWithoutLinksInputObjectSchema } from "./DiveBuddyCreateOrConnectWithoutLinksInput.schema";
import { DiveBuddyUpsertWithoutLinksInputObjectSchema } from "./DiveBuddyUpsertWithoutLinksInput.schema";
import { DiveBuddyWhereUniqueInputObjectSchema } from "./DiveBuddyWhereUniqueInput.schema";
import { DiveBuddyUpdateWithoutLinksInputObjectSchema } from "./DiveBuddyUpdateWithoutLinksInput.schema";
import { DiveBuddyUncheckedUpdateWithoutLinksInputObjectSchema } from "./DiveBuddyUncheckedUpdateWithoutLinksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyUpdateOneWithoutLinksNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DiveBuddyCreateWithoutLinksInputObjectSchema),
        z.lazy(() => DiveBuddyUncheckedCreateWithoutLinksInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => DiveBuddyCreateOrConnectWithoutLinksInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => DiveBuddyUpsertWithoutLinksInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => DiveBuddyWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => DiveBuddyUpdateWithoutLinksInputObjectSchema),
        z.lazy(() => DiveBuddyUncheckedUpdateWithoutLinksInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const DiveBuddyUpdateOneWithoutLinksNestedInputObjectSchema = Schema;
