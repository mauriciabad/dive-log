import { z } from "zod";
import { EquipmentUnitUpdateManyMutationInputObjectSchema } from "./objects/EquipmentUnitUpdateManyMutationInput.schema";
import { EquipmentUnitWhereInputObjectSchema } from "./objects/EquipmentUnitWhereInput.schema";

export const EquipmentUnitUpdateManySchema = z.object({
  data: EquipmentUnitUpdateManyMutationInputObjectSchema,
  where: EquipmentUnitWhereInputObjectSchema.optional(),
});
