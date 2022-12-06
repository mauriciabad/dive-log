import { z } from "zod";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";
import { DiveUpdateWithoutDiveSiteInputObjectSchema } from "./DiveUpdateWithoutDiveSiteInput.schema";
import { DiveUncheckedUpdateWithoutDiveSiteInputObjectSchema } from "./DiveUncheckedUpdateWithoutDiveSiteInput.schema";
import { DiveCreateWithoutDiveSiteInputObjectSchema } from "./DiveCreateWithoutDiveSiteInput.schema";
import { DiveUncheckedCreateWithoutDiveSiteInputObjectSchema } from "./DiveUncheckedCreateWithoutDiveSiteInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUpsertWithWhereUniqueWithoutDiveSiteInput> =
  z
    .object({
      where: z.lazy(() => DiveWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => DiveUpdateWithoutDiveSiteInputObjectSchema),
        z.lazy(() => DiveUncheckedUpdateWithoutDiveSiteInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => DiveCreateWithoutDiveSiteInputObjectSchema),
        z.lazy(() => DiveUncheckedCreateWithoutDiveSiteInputObjectSchema),
      ]),
    })
    .strict();

export const DiveUpsertWithWhereUniqueWithoutDiveSiteInputObjectSchema = Schema;
