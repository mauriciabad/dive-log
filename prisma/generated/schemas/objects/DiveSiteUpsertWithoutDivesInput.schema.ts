import { z } from "zod";
import { DiveSiteUpdateWithoutDivesInputObjectSchema } from "./DiveSiteUpdateWithoutDivesInput.schema";
import { DiveSiteUncheckedUpdateWithoutDivesInputObjectSchema } from "./DiveSiteUncheckedUpdateWithoutDivesInput.schema";
import { DiveSiteCreateWithoutDivesInputObjectSchema } from "./DiveSiteCreateWithoutDivesInput.schema";
import { DiveSiteUncheckedCreateWithoutDivesInputObjectSchema } from "./DiveSiteUncheckedCreateWithoutDivesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveSiteUpsertWithoutDivesInput> = z
  .object({
    update: z.union([
      z.lazy(() => DiveSiteUpdateWithoutDivesInputObjectSchema),
      z.lazy(() => DiveSiteUncheckedUpdateWithoutDivesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DiveSiteCreateWithoutDivesInputObjectSchema),
      z.lazy(() => DiveSiteUncheckedCreateWithoutDivesInputObjectSchema),
    ]),
  })
  .strict();

export const DiveSiteUpsertWithoutDivesInputObjectSchema = Schema;
