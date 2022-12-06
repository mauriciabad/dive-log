import { z } from "zod";
import { DiveCreateWithoutDiveCenterInputObjectSchema } from "./DiveCreateWithoutDiveCenterInput.schema";
import { DiveUncheckedCreateWithoutDiveCenterInputObjectSchema } from "./DiveUncheckedCreateWithoutDiveCenterInput.schema";
import { DiveCreateOrConnectWithoutDiveCenterInputObjectSchema } from "./DiveCreateOrConnectWithoutDiveCenterInput.schema";
import { DiveCreateManyDiveCenterInputEnvelopeObjectSchema } from "./DiveCreateManyDiveCenterInputEnvelope.schema";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUncheckedCreateNestedManyWithoutDiveCenterInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiveCreateWithoutDiveCenterInputObjectSchema),
          z.lazy(() => DiveCreateWithoutDiveCenterInputObjectSchema).array(),
          z.lazy(() => DiveUncheckedCreateWithoutDiveCenterInputObjectSchema),
          z
            .lazy(() => DiveUncheckedCreateWithoutDiveCenterInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => DiveCreateOrConnectWithoutDiveCenterInputObjectSchema),
          z
            .lazy(() => DiveCreateOrConnectWithoutDiveCenterInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => DiveCreateManyDiveCenterInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => DiveWhereUniqueInputObjectSchema),
          z.lazy(() => DiveWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DiveUncheckedCreateNestedManyWithoutDiveCenterInputObjectSchema =
  Schema;
