import { z } from "zod";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";
import { DiveCreateWithoutOrganismsInputObjectSchema } from "./DiveCreateWithoutOrganismsInput.schema";
import { DiveUncheckedCreateWithoutOrganismsInputObjectSchema } from "./DiveUncheckedCreateWithoutOrganismsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCreateOrConnectWithoutOrganismsInput> = z
  .object({
    where: z.lazy(() => DiveWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DiveCreateWithoutOrganismsInputObjectSchema),
      z.lazy(() => DiveUncheckedCreateWithoutOrganismsInputObjectSchema),
    ]),
  })
  .strict();

export const DiveCreateOrConnectWithoutOrganismsInputObjectSchema = Schema;
