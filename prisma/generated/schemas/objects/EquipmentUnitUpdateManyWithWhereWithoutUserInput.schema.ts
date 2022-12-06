import { z } from "zod";
import { EquipmentUnitScalarWhereInputObjectSchema } from "./EquipmentUnitScalarWhereInput.schema";
import { EquipmentUnitUpdateManyMutationInputObjectSchema } from "./EquipmentUnitUpdateManyMutationInput.schema";
import { EquipmentUnitUncheckedUpdateManyWithoutEquipmentInputObjectSchema } from "./EquipmentUnitUncheckedUpdateManyWithoutEquipmentInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.EquipmentUnitUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => EquipmentUnitScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => EquipmentUnitUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            EquipmentUnitUncheckedUpdateManyWithoutEquipmentInputObjectSchema
        ),
      ]),
    })
    .strict();

export const EquipmentUnitUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema;
