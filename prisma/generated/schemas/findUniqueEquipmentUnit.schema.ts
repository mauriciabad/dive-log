import { z } from "zod";
import { EquipmentUnitWhereUniqueInputObjectSchema } from "./objects/EquipmentUnitWhereUniqueInput.schema";

export const EquipmentUnitFindUniqueSchema = z.object({
  where: EquipmentUnitWhereUniqueInputObjectSchema,
});
