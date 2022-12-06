import { z } from "zod";
import { DiveCreateWithoutOrganismsInputObjectSchema } from "./DiveCreateWithoutOrganismsInput.schema";
import { DiveUncheckedCreateWithoutOrganismsInputObjectSchema } from "./DiveUncheckedCreateWithoutOrganismsInput.schema";
import { DiveCreateOrConnectWithoutOrganismsInputObjectSchema } from "./DiveCreateOrConnectWithoutOrganismsInput.schema";
import { DiveUpsertWithWhereUniqueWithoutOrganismsInputObjectSchema } from "./DiveUpsertWithWhereUniqueWithoutOrganismsInput.schema";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";
import { DiveUpdateWithWhereUniqueWithoutOrganismsInputObjectSchema } from "./DiveUpdateWithWhereUniqueWithoutOrganismsInput.schema";
import { DiveUpdateManyWithWhereWithoutOrganismsInputObjectSchema } from "./DiveUpdateManyWithWhereWithoutOrganismsInput.schema";
import { DiveScalarWhereInputObjectSchema } from "./DiveScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUncheckedUpdateManyWithoutOrganismsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiveCreateWithoutOrganismsInputObjectSchema),
          z.lazy(() => DiveCreateWithoutOrganismsInputObjectSchema).array(),
          z.lazy(() => DiveUncheckedCreateWithoutOrganismsInputObjectSchema),
          z
            .lazy(() => DiveUncheckedCreateWithoutOrganismsInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => DiveCreateOrConnectWithoutOrganismsInputObjectSchema),
          z
            .lazy(() => DiveCreateOrConnectWithoutOrganismsInputObjectSchema)
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () => DiveUpsertWithWhereUniqueWithoutOrganismsInputObjectSchema
          ),
          z
            .lazy(
              () => DiveUpsertWithWhereUniqueWithoutOrganismsInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => DiveWhereUniqueInputObjectSchema),
          z.lazy(() => DiveWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => DiveWhereUniqueInputObjectSchema),
          z.lazy(() => DiveWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => DiveWhereUniqueInputObjectSchema),
          z.lazy(() => DiveWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => DiveWhereUniqueInputObjectSchema),
          z.lazy(() => DiveWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => DiveUpdateWithWhereUniqueWithoutOrganismsInputObjectSchema
          ),
          z
            .lazy(
              () => DiveUpdateWithWhereUniqueWithoutOrganismsInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => DiveUpdateManyWithWhereWithoutOrganismsInputObjectSchema
          ),
          z
            .lazy(
              () => DiveUpdateManyWithWhereWithoutOrganismsInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => DiveScalarWhereInputObjectSchema),
          z.lazy(() => DiveScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DiveUncheckedUpdateManyWithoutOrganismsNestedInputObjectSchema =
  Schema;
