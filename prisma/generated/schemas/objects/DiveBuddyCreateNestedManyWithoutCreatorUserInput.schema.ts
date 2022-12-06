import { z } from "zod";
import { DiveBuddyCreateWithoutCreatorUserInputObjectSchema } from "./DiveBuddyCreateWithoutCreatorUserInput.schema";
import { DiveBuddyUncheckedCreateWithoutCreatorUserInputObjectSchema } from "./DiveBuddyUncheckedCreateWithoutCreatorUserInput.schema";
import { DiveBuddyCreateOrConnectWithoutCreatorUserInputObjectSchema } from "./DiveBuddyCreateOrConnectWithoutCreatorUserInput.schema";
import { DiveBuddyCreateManyCreatorUserInputEnvelopeObjectSchema } from "./DiveBuddyCreateManyCreatorUserInputEnvelope.schema";
import { DiveBuddyWhereUniqueInputObjectSchema } from "./DiveBuddyWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyCreateNestedManyWithoutCreatorUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiveBuddyCreateWithoutCreatorUserInputObjectSchema),
          z
            .lazy(() => DiveBuddyCreateWithoutCreatorUserInputObjectSchema)
            .array(),
          z.lazy(
            () => DiveBuddyUncheckedCreateWithoutCreatorUserInputObjectSchema
          ),
          z
            .lazy(
              () => DiveBuddyUncheckedCreateWithoutCreatorUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => DiveBuddyCreateOrConnectWithoutCreatorUserInputObjectSchema
          ),
          z
            .lazy(
              () => DiveBuddyCreateOrConnectWithoutCreatorUserInputObjectSchema
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => DiveBuddyCreateManyCreatorUserInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => DiveBuddyWhereUniqueInputObjectSchema),
          z.lazy(() => DiveBuddyWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DiveBuddyCreateNestedManyWithoutCreatorUserInputObjectSchema =
  Schema;
