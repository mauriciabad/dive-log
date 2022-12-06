import { z } from "zod";
import { DiveSiteUpdateWithoutLinksInputObjectSchema } from "./DiveSiteUpdateWithoutLinksInput.schema";
import { DiveSiteUncheckedUpdateWithoutLinksInputObjectSchema } from "./DiveSiteUncheckedUpdateWithoutLinksInput.schema";
import { DiveSiteCreateWithoutLinksInputObjectSchema } from "./DiveSiteCreateWithoutLinksInput.schema";
import { DiveSiteUncheckedCreateWithoutLinksInputObjectSchema } from "./DiveSiteUncheckedCreateWithoutLinksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveSiteUpsertWithoutLinksInput> = z
  .object({
    update: z.union([
      z.lazy(() => DiveSiteUpdateWithoutLinksInputObjectSchema),
      z.lazy(() => DiveSiteUncheckedUpdateWithoutLinksInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DiveSiteCreateWithoutLinksInputObjectSchema),
      z.lazy(() => DiveSiteUncheckedCreateWithoutLinksInputObjectSchema),
    ]),
  })
  .strict();

export const DiveSiteUpsertWithoutLinksInputObjectSchema = Schema;
