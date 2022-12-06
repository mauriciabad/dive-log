import { z } from "zod";

export const EquipmentUnitScalarFieldEnumSchema = z.enum([
  "createdAt",
  "updatedAt",
  "id",
  "userId",
  "name",
  "owned",
  "image",
  "manufacturer",
  "retailer",
  "purchaseDate",
  "serialNumber",
  "note",
  "size",
  "color",
]);
