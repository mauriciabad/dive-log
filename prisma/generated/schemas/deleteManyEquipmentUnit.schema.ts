import { z } from "zod";
import { EquipmentUnitWhereInputObjectSchema } from "./objects/EquipmentUnitWhereInput.schema";

export const EquipmentUnitDeleteManySchema = z.object({
  where: EquipmentUnitWhereInputObjectSchema.optional(),
});
