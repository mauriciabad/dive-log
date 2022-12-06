import { z } from "zod";
import { LinkWhereUniqueInputObjectSchema } from "./LinkWhereUniqueInput.schema";
import { LinkCreateWithoutEquipmentUnitInputObjectSchema } from "./LinkCreateWithoutEquipmentUnitInput.schema";
import { LinkUncheckedCreateWithoutEquipmentUnitInputObjectSchema } from "./LinkUncheckedCreateWithoutEquipmentUnitInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkCreateOrConnectWithoutEquipmentUnitInput> = z
  .object({
    where: z.lazy(() => LinkWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => LinkCreateWithoutEquipmentUnitInputObjectSchema),
      z.lazy(() => LinkUncheckedCreateWithoutEquipmentUnitInputObjectSchema),
    ]),
  })
  .strict();

export const LinkCreateOrConnectWithoutEquipmentUnitInputObjectSchema = Schema;
