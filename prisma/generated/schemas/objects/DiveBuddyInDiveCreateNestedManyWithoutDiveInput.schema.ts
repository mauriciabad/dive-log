import { z } from "zod";
import { DiveBuddyInDiveCreateWithoutDiveInputObjectSchema } from "./DiveBuddyInDiveCreateWithoutDiveInput.schema";
import { DiveBuddyInDiveUncheckedCreateWithoutDiveInputObjectSchema } from "./DiveBuddyInDiveUncheckedCreateWithoutDiveInput.schema";
import { DiveBuddyInDiveCreateOrConnectWithoutDiveInputObjectSchema } from "./DiveBuddyInDiveCreateOrConnectWithoutDiveInput.schema";
import { DiveBuddyInDiveCreateManyDiveInputEnvelopeObjectSchema } from "./DiveBuddyInDiveCreateManyDiveInputEnvelope.schema";
import { DiveBuddyInDiveWhereUniqueInputObjectSchema } from "./DiveBuddyInDiveWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyInDiveCreateNestedManyWithoutDiveInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiveBuddyInDiveCreateWithoutDiveInputObjectSchema),
          z
            .lazy(() => DiveBuddyInDiveCreateWithoutDiveInputObjectSchema)
            .array(),
          z.lazy(
            () => DiveBuddyInDiveUncheckedCreateWithoutDiveInputObjectSchema
          ),
          z
            .lazy(
              () => DiveBuddyInDiveUncheckedCreateWithoutDiveInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => DiveBuddyInDiveCreateOrConnectWithoutDiveInputObjectSchema
          ),
          z
            .lazy(
              () => DiveBuddyInDiveCreateOrConnectWithoutDiveInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => DiveBuddyInDiveCreateManyDiveInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => DiveBuddyInDiveWhereUniqueInputObjectSchema),
          z.lazy(() => DiveBuddyInDiveWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DiveBuddyInDiveCreateNestedManyWithoutDiveInputObjectSchema =
  Schema;
