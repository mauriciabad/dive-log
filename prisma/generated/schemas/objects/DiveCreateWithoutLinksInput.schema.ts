import { z } from "zod";
import { UserCreateNestedOneWithoutDivesInputObjectSchema } from "./UserCreateNestedOneWithoutDivesInput.schema";
import { DiveTypeSchema } from "../enums/DiveType.schema";
import { SpecialtyDiveTypeSchema } from "../enums/SpecialtyDiveType.schema";
import { DiveSiteCreateNestedOneWithoutDivesInputObjectSchema } from "./DiveSiteCreateNestedOneWithoutDivesInput.schema";
import { WaterBodySchema } from "../enums/WaterBody.schema";
import { WaterTypeSchema } from "../enums/WaterType.schema";
import { WaterEntrySchema } from "../enums/WaterEntry.schema";
import { WaterCurrentSchema } from "../enums/WaterCurrent.schema";
import { WaterSurfaceSchema } from "../enums/WaterSurface.schema";
import { WaterVisibilitySchema } from "../enums/WaterVisibility.schema";
import { WeatherSchema } from "../enums/Weather.schema";
import { EquipmentUnitCreateNestedManyWithoutDivesInputObjectSchema } from "./EquipmentUnitCreateNestedManyWithoutDivesInput.schema";
import { CylinderMaterialSchema } from "../enums/CylinderMaterial.schema";
import { DiveCenterCreateNestedOneWithoutDivesInputObjectSchema } from "./DiveCenterCreateNestedOneWithoutDivesInput.schema";
import { DiveBuddyInDiveCreateNestedManyWithoutDiveInputObjectSchema } from "./DiveBuddyInDiveCreateNestedManyWithoutDiveInput.schema";
import { DiveBuddyInDiveRoleSchema } from "../enums/DiveBuddyInDiveRole.schema";
import { WikipediaPageCreateNestedManyWithoutDivesInputObjectSchema } from "./WikipediaPageCreateNestedManyWithoutDivesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCreateWithoutLinksInput> = z
  .object({
    id: z.string().optional(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutDivesInputObjectSchema),
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
    diveSite: z.lazy(
      () => DiveSiteCreateNestedOneWithoutDivesInputObjectSchema
    ),
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
      .lazy(() => EquipmentUnitCreateNestedManyWithoutDivesInputObjectSchema)
      .optional(),
    startCylinderPresure: z.number().optional().nullable(),
    endCylinderPresure: z.number().optional().nullable(),
    cylinderMaterial: z
      .lazy(() => CylinderMaterialSchema)
      .optional()
      .nullable(),
    cylinderVolume: z.number().optional().nullable(),
    diveCenter: z
      .lazy(() => DiveCenterCreateNestedOneWithoutDivesInputObjectSchema)
      .optional(),
    diveBuddies: z
      .lazy(() => DiveBuddyInDiveCreateNestedManyWithoutDiveInputObjectSchema)
      .optional(),
    roleasDiveBuddy: z
      .lazy(() => DiveBuddyInDiveRoleSchema)
      .optional()
      .nullable(),
    organisms: z
      .lazy(() => WikipediaPageCreateNestedManyWithoutDivesInputObjectSchema)
      .optional(),
    rating: z.number().optional().nullable(),
    experienceNotes: z.string().optional().nullable(),
    technicalNotes: z.string().optional().nullable(),
  })
  .strict();

export const DiveCreateWithoutLinksInputObjectSchema = Schema;
