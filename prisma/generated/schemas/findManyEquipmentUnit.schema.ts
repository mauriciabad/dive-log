import { z } from "zod";
import { EquipmentUnitWhereInputObjectSchema } from "./objects/EquipmentUnitWhereInput.schema";
import { EquipmentUnitOrderByWithRelationInputObjectSchema } from "./objects/EquipmentUnitOrderByWithRelationInput.schema";
import { EquipmentUnitWhereUniqueInputObjectSchema } from "./objects/EquipmentUnitWhereUniqueInput.schema";
import { EquipmentUnitScalarFieldEnumSchema } from "./enums/EquipmentUnitScalarFieldEnum.schema";

export const EquipmentUnitFindManySchema = z.object({
  where: EquipmentUnitWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      EquipmentUnitOrderByWithRelationInputObjectSchema,
      EquipmentUnitOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  cursor: EquipmentUnitWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(EquipmentUnitScalarFieldEnumSchema).optional(),
});
