import { z } from "zod";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";
import { DiveUpdateWithoutDiveCenterInputObjectSchema } from "./DiveUpdateWithoutDiveCenterInput.schema";
import { DiveUncheckedUpdateWithoutDiveCenterInputObjectSchema } from "./DiveUncheckedUpdateWithoutDiveCenterInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUpdateWithWhereUniqueWithoutDiveCenterInput> =
  z
    .object({
      where: z.lazy(() => DiveWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => DiveUpdateWithoutDiveCenterInputObjectSchema),
        z.lazy(() => DiveUncheckedUpdateWithoutDiveCenterInputObjectSchema),
      ]),
    })
    .strict();

export const DiveUpdateWithWhereUniqueWithoutDiveCenterInputObjectSchema =
  Schema;
