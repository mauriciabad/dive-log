import { z } from "zod";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { IntFieldUpdateOperationsInputObjectSchema } from "./IntFieldUpdateOperationsInput.schema";
import { DiveTypeSchema } from "../enums/DiveType.schema";
import { NullableEnumDiveTypeFieldUpdateOperationsInputObjectSchema } from "./NullableEnumDiveTypeFieldUpdateOperationsInput.schema";
import { SpecialtyDiveTypeSchema } from "../enums/SpecialtyDiveType.schema";
import { NullableEnumSpecialtyDiveTypeFieldUpdateOperationsInputObjectSchema } from "./NullableEnumSpecialtyDiveTypeFieldUpdateOperationsInput.schema";
import { DecimalFieldUpdateOperationsInputObjectSchema } from "./DecimalFieldUpdateOperationsInput.schema";
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from "./NullableDecimalFieldUpdateOperationsInput.schema";
import { WaterBodySchema } from "../enums/WaterBody.schema";
import { NullableEnumWaterBodyFieldUpdateOperationsInputObjectSchema } from "./NullableEnumWaterBodyFieldUpdateOperationsInput.schema";
import { WaterTypeSchema } from "../enums/WaterType.schema";
import { NullableEnumWaterTypeFieldUpdateOperationsInputObjectSchema } from "./NullableEnumWaterTypeFieldUpdateOperationsInput.schema";
import { WaterEntrySchema } from "../enums/WaterEntry.schema";
import { NullableEnumWaterEntryFieldUpdateOperationsInputObjectSchema } from "./NullableEnumWaterEntryFieldUpdateOperationsInput.schema";
import { WaterCurrentSchema } from "../enums/WaterCurrent.schema";
import { NullableEnumWaterCurrentFieldUpdateOperationsInputObjectSchema } from "./NullableEnumWaterCurrentFieldUpdateOperationsInput.schema";
import { WaterSurfaceSchema } from "../enums/WaterSurface.schema";
import { NullableEnumWaterSurfaceFieldUpdateOperationsInputObjectSchema } from "./NullableEnumWaterSurfaceFieldUpdateOperationsInput.schema";
import { WaterVisibilitySchema } from "../enums/WaterVisibility.schema";
import { NullableEnumWaterVisibilityFieldUpdateOperationsInputObjectSchema } from "./NullableEnumWaterVisibilityFieldUpdateOperationsInput.schema";
import { WeatherSchema } from "../enums/Weather.schema";
import { NullableEnumWeatherFieldUpdateOperationsInputObjectSchema } from "./NullableEnumWeatherFieldUpdateOperationsInput.schema";
import { NullableIntFieldUpdateOperationsInputObjectSchema } from "./NullableIntFieldUpdateOperationsInput.schema";
import { EquipmentUnitUncheckedUpdateManyWithoutDivesNestedInputObjectSchema } from "./EquipmentUnitUncheckedUpdateManyWithoutDivesNestedInput.schema";
import { CylinderMaterialSchema } from "../enums/CylinderMaterial.schema";
import { NullableEnumCylinderMaterialFieldUpdateOperationsInputObjectSchema } from "./NullableEnumCylinderMaterialFieldUpdateOperationsInput.schema";
import { DiveBuddyInDiveUncheckedUpdateManyWithoutDiveNestedInputObjectSchema } from "./DiveBuddyInDiveUncheckedUpdateManyWithoutDiveNestedInput.schema";
import { DiveBuddyInDiveRoleSchema } from "../enums/DiveBuddyInDiveRole.schema";
import { NullableEnumDiveBuddyInDiveRoleFieldUpdateOperationsInputObjectSchema } from "./NullableEnumDiveBuddyInDiveRoleFieldUpdateOperationsInput.schema";
import { WikipediaPageUncheckedUpdateManyWithoutDivesNestedInputObjectSchema } from "./WikipediaPageUncheckedUpdateManyWithoutDivesNestedInput.schema";
import { LinkUncheckedUpdateManyWithoutDiveNestedInputObjectSchema } from "./LinkUncheckedUpdateManyWithoutDiveNestedInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUncheckedUpdateWithoutDiveCenterInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    createdAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    updatedAt: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    userId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    diveNumber: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    startDateTime: z
      .union([
        z.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    duration: z
      .union([
        z.number(),
        z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    type: z
      .union([
        z.lazy(() => DiveTypeSchema),
        z.lazy(
          () => NullableEnumDiveTypeFieldUpdateOperationsInputObjectSchema
        ),
      ])
      .optional()
      .nullable(),
    specialtyDiveType: z
      .union([
        z.lazy(() => SpecialtyDiveTypeSchema),
        z.lazy(
          () =>
            NullableEnumSpecialtyDiveTypeFieldUpdateOperationsInputObjectSchema
        ),
      ])
      .optional()
      .nullable(),
    diveSiteId: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    maximumDepth: z
      .union([
        z.number(),
        z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    averageDepth: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    waterMinimumTemperature: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    waterAverageTemperature: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    waterMaximumTemperature: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    waterBody: z
      .union([
        z.lazy(() => WaterBodySchema),
        z.lazy(
          () => NullableEnumWaterBodyFieldUpdateOperationsInputObjectSchema
        ),
      ])
      .optional()
      .nullable(),
    waterType: z
      .union([
        z.lazy(() => WaterTypeSchema),
        z.lazy(
          () => NullableEnumWaterTypeFieldUpdateOperationsInputObjectSchema
        ),
      ])
      .optional()
      .nullable(),
    waterEntry: z
      .union([
        z.lazy(() => WaterEntrySchema),
        z.lazy(
          () => NullableEnumWaterEntryFieldUpdateOperationsInputObjectSchema
        ),
      ])
      .optional()
      .nullable(),
    waterCurrent: z
      .union([
        z.lazy(() => WaterCurrentSchema),
        z.lazy(
          () => NullableEnumWaterCurrentFieldUpdateOperationsInputObjectSchema
        ),
      ])
      .optional()
      .nullable(),
    waterSurface: z
      .union([
        z.lazy(() => WaterSurfaceSchema),
        z.lazy(
          () => NullableEnumWaterSurfaceFieldUpdateOperationsInputObjectSchema
        ),
      ])
      .optional()
      .nullable(),
    waterVisibility: z
      .union([
        z.lazy(() => WaterVisibilitySchema),
        z.lazy(
          () =>
            NullableEnumWaterVisibilityFieldUpdateOperationsInputObjectSchema
        ),
      ])
      .optional()
      .nullable(),
    weather: z
      .union([
        z.lazy(() => WeatherSchema),
        z.lazy(() => NullableEnumWeatherFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    airTemperature: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    weight: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    equipment: z
      .lazy(
        () =>
          EquipmentUnitUncheckedUpdateManyWithoutDivesNestedInputObjectSchema
      )
      .optional(),
    startCylinderPresure: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    endCylinderPresure: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    cylinderMaterial: z
      .union([
        z.lazy(() => CylinderMaterialSchema),
        z.lazy(
          () =>
            NullableEnumCylinderMaterialFieldUpdateOperationsInputObjectSchema
        ),
      ])
      .optional()
      .nullable(),
    cylinderVolume: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    diveBuddies: z
      .lazy(
        () =>
          DiveBuddyInDiveUncheckedUpdateManyWithoutDiveNestedInputObjectSchema
      )
      .optional(),
    roleasDiveBuddy: z
      .union([
        z.lazy(() => DiveBuddyInDiveRoleSchema),
        z.lazy(
          () =>
            NullableEnumDiveBuddyInDiveRoleFieldUpdateOperationsInputObjectSchema
        ),
      ])
      .optional()
      .nullable(),
    organisms: z
      .lazy(
        () =>
          WikipediaPageUncheckedUpdateManyWithoutDivesNestedInputObjectSchema
      )
      .optional(),
    rating: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    links: z
      .lazy(() => LinkUncheckedUpdateManyWithoutDiveNestedInputObjectSchema)
      .optional(),
    experienceNotes: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    technicalNotes: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const DiveUncheckedUpdateWithoutDiveCenterInputObjectSchema = Schema;
