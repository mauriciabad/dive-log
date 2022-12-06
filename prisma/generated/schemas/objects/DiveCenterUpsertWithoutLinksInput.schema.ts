import { z } from "zod";
import { DiveCenterUpdateWithoutLinksInputObjectSchema } from "./DiveCenterUpdateWithoutLinksInput.schema";
import { DiveCenterUncheckedUpdateWithoutLinksInputObjectSchema } from "./DiveCenterUncheckedUpdateWithoutLinksInput.schema";
import { DiveCenterCreateWithoutLinksInputObjectSchema } from "./DiveCenterCreateWithoutLinksInput.schema";
import { DiveCenterUncheckedCreateWithoutLinksInputObjectSchema } from "./DiveCenterUncheckedCreateWithoutLinksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCenterUpsertWithoutLinksInput> = z
  .object({
    update: z.union([
      z.lazy(() => DiveCenterUpdateWithoutLinksInputObjectSchema),
      z.lazy(() => DiveCenterUncheckedUpdateWithoutLinksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DiveCenterCreateWithoutLinksInputObjectSchema),
      z.lazy(() => DiveCenterUncheckedCreateWithoutLinksInputObjectSchema),
    ]),
  })
  .strict();

export const DiveCenterUpsertWithoutLinksInputObjectSchema = Schema;
