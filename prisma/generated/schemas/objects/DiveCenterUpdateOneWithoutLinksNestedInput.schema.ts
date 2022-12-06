import { z } from "zod";
import { DiveCenterCreateWithoutLinksInputObjectSchema } from "./DiveCenterCreateWithoutLinksInput.schema";
import { DiveCenterUncheckedCreateWithoutLinksInputObjectSchema } from "./DiveCenterUncheckedCreateWithoutLinksInput.schema";
import { DiveCenterCreateOrConnectWithoutLinksInputObjectSchema } from "./DiveCenterCreateOrConnectWithoutLinksInput.schema";
import { DiveCenterUpsertWithoutLinksInputObjectSchema } from "./DiveCenterUpsertWithoutLinksInput.schema";
import { DiveCenterWhereUniqueInputObjectSchema } from "./DiveCenterWhereUniqueInput.schema";
import { DiveCenterUpdateWithoutLinksInputObjectSchema } from "./DiveCenterUpdateWithoutLinksInput.schema";
import { DiveCenterUncheckedUpdateWithoutLinksInputObjectSchema } from "./DiveCenterUncheckedUpdateWithoutLinksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCenterUpdateOneWithoutLinksNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DiveCenterCreateWithoutLinksInputObjectSchema),
        z.lazy(() => DiveCenterUncheckedCreateWithoutLinksInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => DiveCenterCreateOrConnectWithoutLinksInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => DiveCenterUpsertWithoutLinksInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => DiveCenterWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => DiveCenterUpdateWithoutLinksInputObjectSchema),
        z.lazy(() => DiveCenterUncheckedUpdateWithoutLinksInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const DiveCenterUpdateOneWithoutLinksNestedInputObjectSchema = Schema;
