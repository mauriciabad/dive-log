import { z } from "zod";
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema";
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema";
import { LinkTypeSchema } from "../enums/LinkType.schema";
import { EnumLinkTypeFieldUpdateOperationsInputObjectSchema } from "./EnumLinkTypeFieldUpdateOperationsInput.schema";
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema";
import { UserUpdateOneRequiredWithoutCreatedLinksNestedInputObjectSchema } from "./UserUpdateOneRequiredWithoutCreatedLinksNestedInput.schema";
import { DiveUpdateOneWithoutLinksNestedInputObjectSchema } from "./DiveUpdateOneWithoutLinksNestedInput.schema";
import { DiveBuddyUpdateOneWithoutLinksNestedInputObjectSchema } from "./DiveBuddyUpdateOneWithoutLinksNestedInput.schema";
import { DiveCenterUpdateOneWithoutLinksNestedInputObjectSchema } from "./DiveCenterUpdateOneWithoutLinksNestedInput.schema";
import { UserUpdateOneWithoutLinksNestedInputObjectSchema } from "./UserUpdateOneWithoutLinksNestedInput.schema";
import { EquipmentUnitUpdateOneWithoutLinksNestedInputObjectSchema } from "./EquipmentUnitUpdateOneWithoutLinksNestedInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.LinkUpdateWithoutDiveSiteInput> = z
  .object({
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
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    link: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    type: z
      .union([
        z.lazy(() => LinkTypeSchema),
        z.lazy(() => EnumLinkTypeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    title: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    thumbnail: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    creatorUser: z
      .lazy(
        () => UserUpdateOneRequiredWithoutCreatedLinksNestedInputObjectSchema
      )
      .optional(),
    dive: z
      .lazy(() => DiveUpdateOneWithoutLinksNestedInputObjectSchema)
      .optional(),
    diveBuddy: z
      .lazy(() => DiveBuddyUpdateOneWithoutLinksNestedInputObjectSchema)
      .optional(),
    diveCenter: z
      .lazy(() => DiveCenterUpdateOneWithoutLinksNestedInputObjectSchema)
      .optional(),
    user: z
      .lazy(() => UserUpdateOneWithoutLinksNestedInputObjectSchema)
      .optional(),
    EquipmentUnit: z
      .lazy(() => EquipmentUnitUpdateOneWithoutLinksNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const LinkUpdateWithoutDiveSiteInputObjectSchema = Schema;
