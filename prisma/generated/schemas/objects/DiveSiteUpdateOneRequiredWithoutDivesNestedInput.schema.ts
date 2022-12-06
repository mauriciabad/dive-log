import { z } from "zod";
import { DiveSiteCreateWithoutDivesInputObjectSchema } from "./DiveSiteCreateWithoutDivesInput.schema";
import { DiveSiteUncheckedCreateWithoutDivesInputObjectSchema } from "./DiveSiteUncheckedCreateWithoutDivesInput.schema";
import { DiveSiteCreateOrConnectWithoutDivesInputObjectSchema } from "./DiveSiteCreateOrConnectWithoutDivesInput.schema";
import { DiveSiteUpsertWithoutDivesInputObjectSchema } from "./DiveSiteUpsertWithoutDivesInput.schema";
import { DiveSiteWhereUniqueInputObjectSchema } from "./DiveSiteWhereUniqueInput.schema";
import { DiveSiteUpdateWithoutDivesInputObjectSchema } from "./DiveSiteUpdateWithoutDivesInput.schema";
import { DiveSiteUncheckedUpdateWithoutDivesInputObjectSchema } from "./DiveSiteUncheckedUpdateWithoutDivesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveSiteUpdateOneRequiredWithoutDivesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => DiveSiteCreateWithoutDivesInputObjectSchema),
          z.lazy(() => DiveSiteUncheckedCreateWithoutDivesInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => DiveSiteCreateOrConnectWithoutDivesInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => DiveSiteUpsertWithoutDivesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => DiveSiteWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => DiveSiteUpdateWithoutDivesInputObjectSchema),
          z.lazy(() => DiveSiteUncheckedUpdateWithoutDivesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const DiveSiteUpdateOneRequiredWithoutDivesNestedInputObjectSchema =
  Schema;
