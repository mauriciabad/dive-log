import { z } from "zod";
import { DiveBuddyCreateWithoutDiveBuddyInDivesInputObjectSchema } from "./DiveBuddyCreateWithoutDiveBuddyInDivesInput.schema";
import { DiveBuddyUncheckedCreateWithoutDiveBuddyInDivesInputObjectSchema } from "./DiveBuddyUncheckedCreateWithoutDiveBuddyInDivesInput.schema";
import { DiveBuddyCreateOrConnectWithoutDiveBuddyInDivesInputObjectSchema } from "./DiveBuddyCreateOrConnectWithoutDiveBuddyInDivesInput.schema";
import { DiveBuddyUpsertWithoutDiveBuddyInDivesInputObjectSchema } from "./DiveBuddyUpsertWithoutDiveBuddyInDivesInput.schema";
import { DiveBuddyWhereUniqueInputObjectSchema } from "./DiveBuddyWhereUniqueInput.schema";
import { DiveBuddyUpdateWithoutDiveBuddyInDivesInputObjectSchema } from "./DiveBuddyUpdateWithoutDiveBuddyInDivesInput.schema";
import { DiveBuddyUncheckedUpdateWithoutDiveBuddyInDivesInputObjectSchema } from "./DiveBuddyUncheckedUpdateWithoutDiveBuddyInDivesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveBuddyUpdateOneRequiredWithoutDiveBuddyInDivesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiveBuddyCreateWithoutDiveBuddyInDivesInputObjectSchema),
          z.lazy(
            () =>
              DiveBuddyUncheckedCreateWithoutDiveBuddyInDivesInputObjectSchema
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => DiveBuddyCreateOrConnectWithoutDiveBuddyInDivesInputObjectSchema
        )
        .optional(),
      upsert: z
        .lazy(() => DiveBuddyUpsertWithoutDiveBuddyInDivesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => DiveBuddyWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => DiveBuddyUpdateWithoutDiveBuddyInDivesInputObjectSchema),
          z.lazy(
            () =>
              DiveBuddyUncheckedUpdateWithoutDiveBuddyInDivesInputObjectSchema
          ),
        ])
        .optional(),
    })
    .strict();

export const DiveBuddyUpdateOneRequiredWithoutDiveBuddyInDivesNestedInputObjectSchema =
  Schema;
