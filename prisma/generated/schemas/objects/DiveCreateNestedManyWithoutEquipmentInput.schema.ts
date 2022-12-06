import { z } from "zod";
import { DiveCreateWithoutEquipmentInputObjectSchema } from "./DiveCreateWithoutEquipmentInput.schema";
import { DiveUncheckedCreateWithoutEquipmentInputObjectSchema } from "./DiveUncheckedCreateWithoutEquipmentInput.schema";
import { DiveCreateOrConnectWithoutEquipmentInputObjectSchema } from "./DiveCreateOrConnectWithoutEquipmentInput.schema";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCreateNestedManyWithoutEquipmentInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DiveCreateWithoutEquipmentInputObjectSchema),
        z.lazy(() => DiveCreateWithoutEquipmentInputObjectSchema).array(),
        z.lazy(() => DiveUncheckedCreateWithoutEquipmentInputObjectSchema),
        z
          .lazy(() => DiveUncheckedCreateWithoutEquipmentInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => DiveCreateOrConnectWithoutEquipmentInputObjectSchema),
        z
          .lazy(() => DiveCreateOrConnectWithoutEquipmentInputObjectSchema)
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

export const DiveCreateNestedManyWithoutEquipmentInputObjectSchema = Schema;
