import { z } from "zod";
import { DiveBuddyCreateWithoutDiveBuddyUserInputObjectSchema } from "./DiveBuddyCreateWithoutDiveBuddyUserInput.schema";
import { DiveBuddyUncheckedCreateWithoutDiveBuddyUserInputObjectSchema } from "./DiveBuddyUncheckedCreateWithoutDiveBuddyUserInput.schema";
import { DiveBuddyCreateOrConnectWithoutDiveBuddyUserInputObjectSchema } from "./DiveBuddyCreateOrConnectWithoutDiveBuddyUserInput.schema";
import { DiveBuddyCreateManyDiveBuddyUserInputEnvelopeObjectSchema } from "./DiveBuddyCreateManyDiveBuddyUserInputEnvelope.schema";
import { DiveBuddyWhereUniqueInputObjectSchema } from "./DiveBuddyWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyCreateNestedManyWithoutDiveBuddyUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiveBuddyCreateWithoutDiveBuddyUserInputObjectSchema),
          z
            .lazy(() => DiveBuddyCreateWithoutDiveBuddyUserInputObjectSchema)
            .array(),
          z.lazy(
            () => DiveBuddyUncheckedCreateWithoutDiveBuddyUserInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveBuddyUncheckedCreateWithoutDiveBuddyUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => DiveBuddyCreateOrConnectWithoutDiveBuddyUserInputObjectSchema
          ),
          z
            .lazy(
              () =>
                DiveBuddyCreateOrConnectWithoutDiveBuddyUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => DiveBuddyCreateManyDiveBuddyUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => DiveBuddyWhereUniqueInputObjectSchema),
          z.lazy(() => DiveBuddyWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DiveBuddyCreateNestedManyWithoutDiveBuddyUserInputObjectSchema =
  Schema;
