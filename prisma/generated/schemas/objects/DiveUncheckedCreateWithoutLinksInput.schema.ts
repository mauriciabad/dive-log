import { z } from "zod";
import { DiveTypeSchema } from "../enums/DiveType.schema";
import { SpecialtyDiveTypeSchema } from "../enums/SpecialtyDiveType.schema";
import { WaterBodySchema } from "../enums/WaterBody.schema";
import { WaterTypeSchema } from "../enums/WaterType.schema";
import { WaterEntrySchema } from "../enums/WaterEntry.schema";
import { WaterCurrentSchema } from "../enums/WaterCurrent.schema";
import { WaterSurfaceSchema } from "../enums/WaterSurface.schema";
import { WaterVisibilitySchema } from "../enums/WaterVisibility.schema";
import { WeatherSchema } from "../enums/Weather.schema";
import { EquipmentUnitUncheckedCreateNestedManyWithoutDivesInputObjectSchema } from "./EquipmentUnitUncheckedCreateNestedManyWithoutDivesInput.schema";
import { CylinderMaterialSchema } from "../enums/CylinderMaterial.schema";
import { DiveBuddyInDiveUncheckedCreateNestedManyWithoutDiveInputObjectSchema } from "./DiveBuddyInDiveUncheckedCreateNestedManyWithoutDiveInput.schema";
import { DiveBuddyInDiveRoleSchema } from "../enums/DiveBuddyInDiveRole.schema";
import { WikipediaPageUncheckedCreateNestedManyWithoutDivesInputObjectSchema } from "./WikipediaPageUncheckedCreateNestedManyWithoutDivesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUncheckedCreateWithoutLinksInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    userId: z.string(),
    name: z.string(),
    diveNumber: z.number(),
    startDateTime: z.date(),
    duration: z.number(),
    type: z
      .lazy(() => DiveTypeSchema)
      .optional()
      .nullable(),
    specialtyDiveType: z
      .lazy(() => SpecialtyDiveTypeSchema)
      .optional()
      .nullable(),
    diveSiteId: z.string(),
    maximumDepth: z.number(),
    averageDepth: z.number().optional().nullable(),
    waterMinimumTemperature: z.number().optional().nullable(),
    waterAverageTemperature: z.number().optional().nullable(),
    waterMaximumTemperature: z.number().optional().nullable(),
    waterBody: z
      .lazy(() => WaterBodySchema)
      .optional()
      .nullable(),
    waterType: z
      .lazy(() => WaterTypeSchema)
      .optional()
      .nullable(),
    waterEntry: z
      .lazy(() => WaterEntrySchema)
      .optional()
      .nullable(),
    waterCurrent: z
      .lazy(() => WaterCurrentSchema)
      .optional()
      .nullable(),
    waterSurface: z
      .lazy(() => WaterSurfaceSchema)
      .optional()
      .nullable(),
    waterVisibility: z
      .lazy(() => WaterVisibilitySchema)
      .optional()
      .nullable(),
    weather: z
      .lazy(() => WeatherSchema)
      .optional()
      .nullable(),
    airTemperature: z.number().optional().nullable(),
    weight: z.number().optional().nullable(),
    equipment: z
      .lazy(
        () =>
          EquipmentUnitUncheckedCreateNestedManyWithoutDivesInputObjectSchema
      )
      .optional(),
    startCylinderPresure: z.number().optional().nullable(),
    endCylinderPresure: z.number().optional().nullable(),
    cylinderMaterial: z
      .lazy(() => CylinderMaterialSchema)
      .optional()
      .nullable(),
    cylinderVolume: z.number().optional().nullable(),
    diveCenterId: z.string(),
    diveBuddies: z
      .lazy(
        () =>
          DiveBuddyInDiveUncheckedCreateNestedManyWithoutDiveInputObjectSchema
      )
      .optional(),
    roleasDiveBuddy: z
      .lazy(() => DiveBuddyInDiveRoleSchema)
      .optional()
      .nullable(),
    organisms: z
      .lazy(
        () =>
          WikipediaPageUncheckedCreateNestedManyWithoutDivesInputObjectSchema
      )
      .optional(),
    rating: z.number().optional().nullable(),
    experienceNotes: z.string().optional().nullable(),
    technicalNotes: z.string().optional().nullable(),
  })
  .strict();

export const DiveUncheckedCreateWithoutLinksInputObjectSchema = Schema;
