import { z } from "zod";
import { DiveBuddyCreateWithoutLinksInputObjectSchema } from "./DiveBuddyCreateWithoutLinksInput.schema";
import { DiveBuddyUncheckedCreateWithoutLinksInputObjectSchema } from "./DiveBuddyUncheckedCreateWithoutLinksInput.schema";
import { DiveBuddyCreateOrConnectWithoutLinksInputObjectSchema } from "./DiveBuddyCreateOrConnectWithoutLinksInput.schema";
import { DiveBuddyWhereUniqueInputObjectSchema } from "./DiveBuddyWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyCreateNestedOneWithoutLinksInput> = z
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
    connect: z.lazy(() => DiveBuddyWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const DiveBuddyCreateNestedOneWithoutLinksInputObjectSchema = Schema;
