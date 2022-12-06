import { z } from "zod";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";
import { DiveUpdateWithoutOrganismsInputObjectSchema } from "./DiveUpdateWithoutOrganismsInput.schema";
import { DiveUncheckedUpdateWithoutOrganismsInputObjectSchema } from "./DiveUncheckedUpdateWithoutOrganismsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUpdateWithWhereUniqueWithoutOrganismsInput> =
  z
    .object({
      where: z.lazy(() => DiveWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => DiveUpdateWithoutOrganismsInputObjectSchema),
        z.lazy(() => DiveUncheckedUpdateWithoutOrganismsInputObjectSchema),
      ]),
    })
    .strict();

export const DiveUpdateWithWhereUniqueWithoutOrganismsInputObjectSchema =
  Schema;
