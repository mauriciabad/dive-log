import { z } from "zod";
import { DiveCenterCreateWithoutCreatedByUserInputObjectSchema } from "./DiveCenterCreateWithoutCreatedByUserInput.schema";
import { DiveCenterUncheckedCreateWithoutCreatedByUserInputObjectSchema } from "./DiveCenterUncheckedCreateWithoutCreatedByUserInput.schema";
import { DiveCenterCreateOrConnectWithoutCreatedByUserInputObjectSchema } from "./DiveCenterCreateOrConnectWithoutCreatedByUserInput.schema";
import { DiveCenterCreateManyCreatedByUserInputEnvelopeObjectSchema } from "./DiveCenterCreateManyCreatedByUserInputEnvelope.schema";
import { DiveCenterWhereUniqueInputObjectSchema } from "./DiveCenterWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCenterCreateNestedManyWithoutCreatedByUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiveCenterCreateWithoutCreatedByUserInputObjectSchema),
          z
            .lazy(() => DiveCenterCreateWithoutCreatedByUserInputObjectSchema)
            .array(),
          z.lazy(
            () => DiveCenterUncheckedCreateWithoutCreatedByUserInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveCenterUncheckedCreateWithoutCreatedByUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => DiveCenterCreateOrConnectWithoutCreatedByUserInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveCenterCreateOrConnectWithoutCreatedByUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => DiveCenterCreateManyCreatedByUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => DiveCenterWhereUniqueInputObjectSchema),
          z.lazy(() => DiveCenterWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DiveCenterCreateNestedManyWithoutCreatedByUserInputObjectSchema =
  Schema;
