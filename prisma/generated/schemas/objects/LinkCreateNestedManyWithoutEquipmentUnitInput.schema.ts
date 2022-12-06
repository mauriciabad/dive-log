import { z } from "zod";
import { LinkCreateWithoutEquipmentUnitInputObjectSchema } from "./LinkCreateWithoutEquipmentUnitInput.schema";
import { LinkUncheckedCreateWithoutEquipmentUnitInputObjectSchema } from "./LinkUncheckedCreateWithoutEquipmentUnitInput.schema";
import { LinkCreateOrConnectWithoutEquipmentUnitInputObjectSchema } from "./LinkCreateOrConnectWithoutEquipmentUnitInput.schema";
import { LinkCreateManyEquipmentUnitInputEnvelopeObjectSchema } from "./LinkCreateManyEquipmentUnitInputEnvelope.schema";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkCreateNestedManyWithoutEquipmentUnitInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LinkCreateWithoutEquipmentUnitInputObjectSchema),
          z.lazy(() => LinkCreateWithoutEquipmentUnitInputObjectSchema).array(),
          z.lazy(
            () => LinkUncheckedCreateWithoutEquipmentUnitInputObjectSchema
          ),
          z
            .lazy(
              () => LinkUncheckedCreateWithoutEquipmentUnitInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => LinkCreateOrConnectWithoutEquipmentUnitInputObjectSchema
          ),
          z
            .lazy(
              () => LinkCreateOrConnectWithoutEquipmentUnitInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LinkCreateManyEquipmentUnitInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => LinkWhereUniqueInputObjectSchema),
          z.lazy(() => LinkWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LinkCreateNestedManyWithoutEquipmentUnitInputObjectSchema = Schema;
