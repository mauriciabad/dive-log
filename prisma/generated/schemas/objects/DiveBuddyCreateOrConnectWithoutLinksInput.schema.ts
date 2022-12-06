import { z } from "zod";
import { DiveBuddyWhereUniqueInputObjectSchema } from "./DiveBuddyWhereUniqueInput.schema";
import { DiveBuddyCreateWithoutLinksInputObjectSchema } from "./DiveBuddyCreateWithoutLinksInput.schema";
import { DiveBuddyUncheckedCreateWithoutLinksInputObjectSchema } from "./DiveBuddyUncheckedCreateWithoutLinksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyCreateOrConnectWithoutLinksInput> = z
  .object({
    where: z.lazy(() => DiveBuddyWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DiveBuddyCreateWithoutLinksInputObjectSchema),
      z.lazy(() => DiveBuddyUncheckedCreateWithoutLinksInputObjectSchema),
    ]),
  })
  .strict();

export const DiveBuddyCreateOrConnectWithoutLinksInputObjectSchema = Schema;
