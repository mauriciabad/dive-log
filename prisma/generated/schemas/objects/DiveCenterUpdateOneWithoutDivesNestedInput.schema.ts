import { z } from "zod";
import { DiveCenterCreateWithoutDivesInputObjectSchema } from "./DiveCenterCreateWithoutDivesInput.schema";
import { DiveCenterUncheckedCreateWithoutDivesInputObjectSchema } from "./DiveCenterUncheckedCreateWithoutDivesInput.schema";
import { DiveCenterCreateOrConnectWithoutDivesInputObjectSchema } from "./DiveCenterCreateOrConnectWithoutDivesInput.schema";
import { DiveCenterUpsertWithoutDivesInputObjectSchema } from "./DiveCenterUpsertWithoutDivesInput.schema";
import { DiveCenterWhereUniqueInputObjectSchema } from "./DiveCenterWhereUniqueInput.schema";
import { DiveCenterUpdateWithoutDivesInputObjectSchema } from "./DiveCenterUpdateWithoutDivesInput.schema";
import { DiveCenterUncheckedUpdateWithoutDivesInputObjectSchema } from "./DiveCenterUncheckedUpdateWithoutDivesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCenterUpdateOneWithoutDivesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DiveCenterCreateWithoutDivesInputObjectSchema),
        z.lazy(() => DiveCenterUncheckedCreateWithoutDivesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => DiveCenterCreateOrConnectWithoutDivesInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => DiveCenterUpsertWithoutDivesInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => DiveCenterWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => DiveCenterUpdateWithoutDivesInputObjectSchema),
        z.lazy(() => DiveCenterUncheckedUpdateWithoutDivesInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const DiveCenterUpdateOneWithoutDivesNestedInputObjectSchema = Schema;
