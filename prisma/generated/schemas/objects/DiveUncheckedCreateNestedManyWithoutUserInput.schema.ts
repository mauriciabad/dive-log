import { z } from "zod";
import { DiveCreateWithoutUserInputObjectSchema } from "./DiveCreateWithoutUserInput.schema";
import { DiveUncheckedCreateWithoutUserInputObjectSchema } from "./DiveUncheckedCreateWithoutUserInput.schema";
import { DiveCreateOrConnectWithoutUserInputObjectSchema } from "./DiveCreateOrConnectWithoutUserInput.schema";
import { DiveCreateManyUserInputEnvelopeObjectSchema } from "./DiveCreateManyUserInputEnvelope.schema";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiveCreateWithoutUserInputObjectSchema),
          z.lazy(() => DiveCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => DiveUncheckedCreateWithoutUserInputObjectSchema),
          z.lazy(() => DiveUncheckedCreateWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => DiveCreateOrConnectWithoutUserInputObjectSchema),
          z.lazy(() => DiveCreateOrConnectWithoutUserInputObjectSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => DiveCreateManyUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => DiveWhereUniqueInputObjectSchema),
          z.lazy(() => DiveWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DiveUncheckedCreateNestedManyWithoutUserInputObjectSchema = Schema;
