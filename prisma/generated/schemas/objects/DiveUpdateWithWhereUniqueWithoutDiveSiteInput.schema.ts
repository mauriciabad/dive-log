import { z } from "zod";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";
import { DiveUpdateWithoutDiveSiteInputObjectSchema } from "./DiveUpdateWithoutDiveSiteInput.schema";
import { DiveUncheckedUpdateWithoutDiveSiteInputObjectSchema } from "./DiveUncheckedUpdateWithoutDiveSiteInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUpdateWithWhereUniqueWithoutDiveSiteInput> =
  z
    .object({
      where: z.lazy(() => DiveWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => DiveUpdateWithoutDiveSiteInputObjectSchema),
        z.lazy(() => DiveUncheckedUpdateWithoutDiveSiteInputObjectSchema),
      ]),
    })
    .strict();

export const DiveUpdateWithWhereUniqueWithoutDiveSiteInputObjectSchema = Schema;
