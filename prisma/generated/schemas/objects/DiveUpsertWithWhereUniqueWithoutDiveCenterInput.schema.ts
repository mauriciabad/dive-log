import { z } from "zod";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";
import { DiveUpdateWithoutDiveCenterInputObjectSchema } from "./DiveUpdateWithoutDiveCenterInput.schema";
import { DiveUncheckedUpdateWithoutDiveCenterInputObjectSchema } from "./DiveUncheckedUpdateWithoutDiveCenterInput.schema";
import { DiveCreateWithoutDiveCenterInputObjectSchema } from "./DiveCreateWithoutDiveCenterInput.schema";
import { DiveUncheckedCreateWithoutDiveCenterInputObjectSchema } from "./DiveUncheckedCreateWithoutDiveCenterInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUpsertWithWhereUniqueWithoutDiveCenterInput> =
  z
    .object({
      where: z.lazy(() => DiveWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => DiveUpdateWithoutDiveCenterInputObjectSchema),
        z.lazy(() => DiveUncheckedUpdateWithoutDiveCenterInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => DiveCreateWithoutDiveCenterInputObjectSchema),
        z.lazy(() => DiveUncheckedCreateWithoutDiveCenterInputObjectSchema),
      ]),
    })
    .strict();

export const DiveUpsertWithWhereUniqueWithoutDiveCenterInputObjectSchema =
  Schema;
