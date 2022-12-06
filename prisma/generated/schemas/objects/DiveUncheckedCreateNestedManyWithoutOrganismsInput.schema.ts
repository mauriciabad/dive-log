import { z } from "zod";
import { DiveCreateWithoutOrganismsInputObjectSchema } from "./DiveCreateWithoutOrganismsInput.schema";
import { DiveUncheckedCreateWithoutOrganismsInputObjectSchema } from "./DiveUncheckedCreateWithoutOrganismsInput.schema";
import { DiveCreateOrConnectWithoutOrganismsInputObjectSchema } from "./DiveCreateOrConnectWithoutOrganismsInput.schema";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUncheckedCreateNestedManyWithoutOrganismsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiveCreateWithoutOrganismsInputObjectSchema),
          z.lazy(() => DiveCreateWithoutOrganismsInputObjectSchema).array(),
          z.lazy(() => DiveUncheckedCreateWithoutOrganismsInputObjectSchema),
          z
            .lazy(() => DiveUncheckedCreateWithoutOrganismsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => DiveCreateOrConnectWithoutOrganismsInputObjectSchema),
          z
            .lazy(() => DiveCreateOrConnectWithoutOrganismsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DiveWhereUniqueInputObjectSchema),
          z.lazy(() => DiveWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DiveUncheckedCreateNestedManyWithoutOrganismsInputObjectSchema =
  Schema;
