import { z } from "zod";
import { EquipmentUnitCreateManyUserInputObjectSchema } from "./EquipmentUnitCreateManyUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EquipmentUnitCreateManyUserInputEnvelope> = z
  .object({
    data: z.lazy(() => EquipmentUnitCreateManyUserInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const EquipmentUnitCreateManyUserInputEnvelopeObjectSchema = Schema;
