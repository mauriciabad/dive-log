import { z } from "zod";
import { LinkCreateManyEquipmentUnitInputObjectSchema } from "./LinkCreateManyEquipmentUnitInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkCreateManyEquipmentUnitInputEnvelope> = z
  .object({
    data: z.lazy(() => LinkCreateManyEquipmentUnitInputObjectSchema).array(),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const LinkCreateManyEquipmentUnitInputEnvelopeObjectSchema = Schema;
