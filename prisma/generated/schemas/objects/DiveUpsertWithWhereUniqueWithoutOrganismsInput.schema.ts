import { z } from "zod";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";
import { DiveUpdateWithoutOrganismsInputObjectSchema } from "./DiveUpdateWithoutOrganismsInput.schema";
import { DiveUncheckedUpdateWithoutOrganismsInputObjectSchema } from "./DiveUncheckedUpdateWithoutOrganismsInput.schema";
import { DiveCreateWithoutOrganismsInputObjectSchema } from "./DiveCreateWithoutOrganismsInput.schema";
import { DiveUncheckedCreateWithoutOrganismsInputObjectSchema } from "./DiveUncheckedCreateWithoutOrganismsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUpsertWithWhereUniqueWithoutOrganismsInput> =
  z
    .object({
      where: z.lazy(() => DiveWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => DiveUpdateWithoutOrganismsInputObjectSchema),
        z.lazy(() => DiveUncheckedUpdateWithoutOrganismsInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => DiveCreateWithoutOrganismsInputObjectSchema),
        z.lazy(() => DiveUncheckedCreateWithoutOrganismsInputObjectSchema),
      ]),
    })
    .strict();

export const DiveUpsertWithWhereUniqueWithoutOrganismsInputObjectSchema =
  Schema;
