import { z } from "zod";
import { DiveCreateWithoutLinksInputObjectSchema } from "./DiveCreateWithoutLinksInput.schema";
import { DiveUncheckedCreateWithoutLinksInputObjectSchema } from "./DiveUncheckedCreateWithoutLinksInput.schema";
import { DiveCreateOrConnectWithoutLinksInputObjectSchema } from "./DiveCreateOrConnectWithoutLinksInput.schema";
import { DiveUpsertWithoutLinksInputObjectSchema } from "./DiveUpsertWithoutLinksInput.schema";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";
import { DiveUpdateWithoutLinksInputObjectSchema } from "./DiveUpdateWithoutLinksInput.schema";
import { DiveUncheckedUpdateWithoutLinksInputObjectSchema } from "./DiveUncheckedUpdateWithoutLinksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUpdateOneWithoutLinksNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DiveCreateWithoutLinksInputObjectSchema),
        z.lazy(() => DiveUncheckedCreateWithoutLinksInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => DiveCreateOrConnectWithoutLinksInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => DiveUpsertWithoutLinksInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => DiveWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => DiveUpdateWithoutLinksInputObjectSchema),
        z.lazy(() => DiveUncheckedUpdateWithoutLinksInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const DiveUpdateOneWithoutLinksNestedInputObjectSchema = Schema;
