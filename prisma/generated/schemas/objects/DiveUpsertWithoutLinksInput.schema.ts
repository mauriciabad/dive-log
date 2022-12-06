import { z } from "zod";
import { DiveUpdateWithoutLinksInputObjectSchema } from "./DiveUpdateWithoutLinksInput.schema";
import { DiveUncheckedUpdateWithoutLinksInputObjectSchema } from "./DiveUncheckedUpdateWithoutLinksInput.schema";
import { DiveCreateWithoutLinksInputObjectSchema } from "./DiveCreateWithoutLinksInput.schema";
import { DiveUncheckedCreateWithoutLinksInputObjectSchema } from "./DiveUncheckedCreateWithoutLinksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUpsertWithoutLinksInput> = z
  .object({
    update: z.union([
      z.lazy(() => DiveUpdateWithoutLinksInputObjectSchema),
      z.lazy(() => DiveUncheckedUpdateWithoutLinksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DiveCreateWithoutLinksInputObjectSchema),
      z.lazy(() => DiveUncheckedCreateWithoutLinksInputObjectSchema),
    ]),
  })
  .strict();

export const DiveUpsertWithoutLinksInputObjectSchema = Schema;
