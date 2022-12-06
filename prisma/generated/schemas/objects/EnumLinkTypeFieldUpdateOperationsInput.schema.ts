import { z } from "zod";
import { LinkTypeSchema } from "../enums/LinkType.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EnumLinkTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => LinkTypeSchema).optional(),
  })
  .strict();

export const EnumLinkTypeFieldUpdateOperationsInputObjectSchema = Schema;
