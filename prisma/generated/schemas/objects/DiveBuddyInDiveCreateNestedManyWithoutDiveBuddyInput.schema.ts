import { z } from "zod";
import { DiveBuddyInDiveCreateWithoutDiveBuddyInputObjectSchema } from "./DiveBuddyInDiveCreateWithoutDiveBuddyInput.schema";
import { DiveBuddyInDiveUncheckedCreateWithoutDiveBuddyInputObjectSchema } from "./DiveBuddyInDiveUncheckedCreateWithoutDiveBuddyInput.schema";
import { DiveBuddyInDiveCreateOrConnectWithoutDiveBuddyInputObjectSchema } from "./DiveBuddyInDiveCreateOrConnectWithoutDiveBuddyInput.schema";
import { DiveBuddyInDiveCreateManyDiveBuddyInputEnvelopeObjectSchema } from "./DiveBuddyInDiveCreateManyDiveBuddyInputEnvelope.schema";
import { DiveBuddyInDiveWhereUniqueInputObjectSchema } from "./DiveBuddyInDiveWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveCreateNestedManyWithoutDiveBuddyInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiveBuddyInDiveCreateWithoutDiveBuddyInputObjectSchema),
          z
            .lazy(() => DiveBuddyInDiveCreateWithoutDiveBuddyInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              DiveBuddyInDiveUncheckedCreateWithoutDiveBuddyInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveBuddyInDiveUncheckedCreateWithoutDiveBuddyInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              DiveBuddyInDiveCreateOrConnectWithoutDiveBuddyInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveBuddyInDiveCreateOrConnectWithoutDiveBuddyInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => DiveBuddyInDiveCreateManyDiveBuddyInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => DiveBuddyInDiveWhereUniqueInputObjectSchema),
          z.lazy(() => DiveBuddyInDiveWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DiveBuddyInDiveCreateNestedManyWithoutDiveBuddyInputObjectSchema =
  Schema;
