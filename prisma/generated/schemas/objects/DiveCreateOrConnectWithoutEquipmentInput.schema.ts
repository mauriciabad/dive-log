import { z } from "zod";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";
import { DiveCreateWithoutEquipmentInputObjectSchema } from "./DiveCreateWithoutEquipmentInput.schema";
import { DiveUncheckedCreateWithoutEquipmentInputObjectSchema } from "./DiveUncheckedCreateWithoutEquipmentInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCreateOrConnectWithoutEquipmentInput> = z
  .object({
    where: z.lazy(() => DiveWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DiveCreateWithoutEquipmentInputObjectSchema),
      z.lazy(() => DiveUncheckedCreateWithoutEquipmentInputObjectSchema),
    ]),
  })
  .strict();

export const DiveCreateOrConnectWithoutEquipmentInputObjectSchema = Schema;
