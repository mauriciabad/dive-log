import { z } from "zod";
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema";
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema";
import { BoolWithAggregatesFilterObjectSchema } from "./BoolWithAggregatesFilter.schema";
import { EnumUnitSystemNullableWithAggregatesFilterObjectSchema } from "./EnumUnitSystemNullableWithAggregatesFilter.schema";
import { UnitSystemSchema } from "../enums/UnitSystem.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.UserPreferencesScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => UserPreferencesScalarWhereWithAggregatesInputObjectSchema
          ),
          z
            .lazy(
              () => UserPreferencesScalarWhereWithAggregatesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => UserPreferencesScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => UserPreferencesScalarWhereWithAggregatesInputObjectSchema
          ),
          z
            .lazy(
              () => UserPreferencesScalarWhereWithAggregatesInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createdAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
          z.date(),
        ])
        .optional(),
      updatedAt: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
          z.date(),
        ])
        .optional(),
      id: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      publicProfile: z
        .union([
          z.lazy(() => BoolWithAggregatesFilterObjectSchema),
          z.boolean(),
        ])
        .optional(),
      lengthUnits: z
        .union([
          z.lazy(() => EnumUnitSystemNullableWithAggregatesFilterObjectSchema),
          z.lazy(() => UnitSystemSchema),
        ])
        .optional()
        .nullable(),
      weightUnits: z
        .union([
          z.lazy(() => EnumUnitSystemNullableWithAggregatesFilterObjectSchema),
          z.lazy(() => UnitSystemSchema),
        ])
        .optional()
        .nullable(),
      temperatureUnits: z
        .union([
          z.lazy(() => EnumUnitSystemNullableWithAggregatesFilterObjectSchema),
          z.lazy(() => UnitSystemSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const UserPreferencesScalarWhereWithAggregatesInputObjectSchema = Schema;
