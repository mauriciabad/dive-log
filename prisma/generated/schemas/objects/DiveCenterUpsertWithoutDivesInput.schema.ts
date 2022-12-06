import { z } from "zod";
import { DiveCenterUpdateWithoutDivesInputObjectSchema } from "./DiveCenterUpdateWithoutDivesInput.schema";
import { DiveCenterUncheckedUpdateWithoutDivesInputObjectSchema } from "./DiveCenterUncheckedUpdateWithoutDivesInput.schema";
import { DiveCenterCreateWithoutDivesInputObjectSchema } from "./DiveCenterCreateWithoutDivesInput.schema";
import { DiveCenterUncheckedCreateWithoutDivesInputObjectSchema } from "./DiveCenterUncheckedCreateWithoutDivesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCenterUpsertWithoutDivesInput> = z
  .object({
    update: z.union([
      z.lazy(() => DiveCenterUpdateWithoutDivesInputObjectSchema),
      z.lazy(() => DiveCenterUncheckedUpdateWithoutDivesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => DiveCenterCreateWithoutDivesInputObjectSchema),
      z.lazy(() => DiveCenterUncheckedCreateWithoutDivesInputObjectSchema),
    ]),
  })
  .strict();

export const DiveCenterUpsertWithoutDivesInputObjectSchema = Schema;
