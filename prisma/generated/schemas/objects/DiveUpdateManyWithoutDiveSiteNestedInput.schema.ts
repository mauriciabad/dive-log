import { z } from "zod";
import { DiveCreateWithoutDiveSiteInputObjectSchema } from "./DiveCreateWithoutDiveSiteInput.schema";
import { DiveUncheckedCreateWithoutDiveSiteInputObjectSchema } from "./DiveUncheckedCreateWithoutDiveSiteInput.schema";
import { DiveCreateOrConnectWithoutDiveSiteInputObjectSchema } from "./DiveCreateOrConnectWithoutDiveSiteInput.schema";
import { DiveUpsertWithWhereUniqueWithoutDiveSiteInputObjectSchema } from "./DiveUpsertWithWhereUniqueWithoutDiveSiteInput.schema";
import { DiveCreateManyDiveSiteInputEnvelopeObjectSchema } from "./DiveCreateManyDiveSiteInputEnvelope.schema";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";
import { DiveUpdateWithWhereUniqueWithoutDiveSiteInputObjectSchema } from "./DiveUpdateWithWhereUniqueWithoutDiveSiteInput.schema";
import { DiveUpdateManyWithWhereWithoutDiveSiteInputObjectSchema } from "./DiveUpdateManyWithWhereWithoutDiveSiteInput.schema";
import { DiveScalarWhereInputObjectSchema } from "./DiveScalarWhereInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUpdateManyWithoutDiveSiteNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DiveCreateWithoutDiveSiteInputObjectSchema),
        z.lazy(() => DiveCreateWithoutDiveSiteInputObjectSchema).array(),
        z.lazy(() => DiveUncheckedCreateWithoutDiveSiteInputObjectSchema),
        z
          .lazy(() => DiveUncheckedCreateWithoutDiveSiteInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => DiveCreateOrConnectWithoutDiveSiteInputObjectSchema),
        z
          .lazy(() => DiveCreateOrConnectWithoutDiveSiteInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => DiveUpsertWithWhereUniqueWithoutDiveSiteInputObjectSchema),
        z
          .lazy(() => DiveUpsertWithWhereUniqueWithoutDiveSiteInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => DiveCreateManyDiveSiteInputEnvelopeObjectSchema)
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
        z.lazy(() => DiveUpdateWithWhereUniqueWithoutDiveSiteInputObjectSchema),
        z
          .lazy(() => DiveUpdateWithWhereUniqueWithoutDiveSiteInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => DiveUpdateManyWithWhereWithoutDiveSiteInputObjectSchema),
        z
          .lazy(() => DiveUpdateManyWithWhereWithoutDiveSiteInputObjectSchema)
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

export const DiveUpdateManyWithoutDiveSiteNestedInputObjectSchema = Schema;
