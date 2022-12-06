import { z } from "zod";
import { EquipmentUnitCreateManyInputObjectSchema } from "./objects/EquipmentUnitCreateManyInput.schema";

export const EquipmentUnitCreateManySchema = z.object({
  data: EquipmentUnitCreateManyInputObjectSchema,
});
