import { z } from "zod";
import { DiveSiteCreateWithoutLinksInputObjectSchema } from "./DiveSiteCreateWithoutLinksInput.schema";
import { DiveSiteUncheckedCreateWithoutLinksInputObjectSchema } from "./DiveSiteUncheckedCreateWithoutLinksInput.schema";
import { DiveSiteCreateOrConnectWithoutLinksInputObjectSchema } from "./DiveSiteCreateOrConnectWithoutLinksInput.schema";
import { DiveSiteUpsertWithoutLinksInputObjectSchema } from "./DiveSiteUpsertWithoutLinksInput.schema";
import { DiveSiteWhereUniqueInputObjectSchema } from "./DiveSiteWhereUniqueInput.schema";
import { DiveSiteUpdateWithoutLinksInputObjectSchema } from "./DiveSiteUpdateWithoutLinksInput.schema";
import { DiveSiteUncheckedUpdateWithoutLinksInputObjectSchema } from "./DiveSiteUncheckedUpdateWithoutLinksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveSiteUpdateOneWithoutLinksNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DiveSiteCreateWithoutLinksInputObjectSchema),
        z.lazy(() => DiveSiteUncheckedCreateWithoutLinksInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => DiveSiteCreateOrConnectWithoutLinksInputObjectSchema)
      .optional(),
    upsert: z
      .lazy(() => DiveSiteUpsertWithoutLinksInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => DiveSiteWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => DiveSiteUpdateWithoutLinksInputObjectSchema),
        z.lazy(() => DiveSiteUncheckedUpdateWithoutLinksInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const DiveSiteUpdateOneWithoutLinksNestedInputObjectSchema = Schema;
