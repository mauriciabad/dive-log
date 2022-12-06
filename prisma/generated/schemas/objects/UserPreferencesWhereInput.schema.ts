import { z } from "zod";
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema";
import { StringFilterObjectSchema } from "./StringFilter.schema";
import { BoolFilterObjectSchema } from "./BoolFilter.schema";
import { EnumUnitSystemNullableFilterObjectSchema } from "./EnumUnitSystemNullableFilter.schema";
import { UnitSystemSchema } from "../enums/UnitSystem.schema";
import { UserListRelationFilterObjectSchema } from "./UserListRelationFilter.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserPreferencesWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserPreferencesWhereInputObjectSchema),
        z.lazy(() => UserPreferencesWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserPreferencesWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserPreferencesWhereInputObjectSchema),
        z.lazy(() => UserPreferencesWhereInputObjectSchema).array(),
      ])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.date()])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    publicProfile: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    lengthUnits: z
      .union([
        z.lazy(() => EnumUnitSystemNullableFilterObjectSchema),
        z.lazy(() => UnitSystemSchema),
      ])
      .optional()
      .nullable(),
    weightUnits: z
      .union([
        z.lazy(() => EnumUnitSystemNullableFilterObjectSchema),
        z.lazy(() => UnitSystemSchema),
      ])
      .optional()
      .nullable(),
    temperatureUnits: z
      .union([
        z.lazy(() => EnumUnitSystemNullableFilterObjectSchema),
        z.lazy(() => UnitSystemSchema),
      ])
      .optional()
      .nullable(),
    user: z.lazy(() => UserListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const UserPreferencesWhereInputObjectSchema = Schema;
