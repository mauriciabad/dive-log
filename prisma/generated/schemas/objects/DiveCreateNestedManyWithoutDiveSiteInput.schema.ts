import { z } from "zod";
import { DiveCreateWithoutDiveSiteInputObjectSchema } from "./DiveCreateWithoutDiveSiteInput.schema";
import { DiveUncheckedCreateWithoutDiveSiteInputObjectSchema } from "./DiveUncheckedCreateWithoutDiveSiteInput.schema";
import { DiveCreateOrConnectWithoutDiveSiteInputObjectSchema } from "./DiveCreateOrConnectWithoutDiveSiteInput.schema";
import { DiveCreateManyDiveSiteInputEnvelopeObjectSchema } from "./DiveCreateManyDiveSiteInputEnvelope.schema";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCreateNestedManyWithoutDiveSiteInput> = z
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
    createMany: z
      .lazy(() => DiveCreateManyDiveSiteInputEnvelopeObjectSchema)
      .optional(),
    connect: z
      .union([
        z.lazy(() => DiveWhereUniqueInputObjectSchema),
        z.lazy(() => DiveWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const DiveCreateNestedManyWithoutDiveSiteInputObjectSchema = Schema;
