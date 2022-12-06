import { z } from "zod";
import { DiveSiteCreateWithoutLinksInputObjectSchema } from "./DiveSiteCreateWithoutLinksInput.schema";
import { DiveSiteUncheckedCreateWithoutLinksInputObjectSchema } from "./DiveSiteUncheckedCreateWithoutLinksInput.schema";
import { DiveSiteCreateOrConnectWithoutLinksInputObjectSchema } from "./DiveSiteCreateOrConnectWithoutLinksInput.schema";
import { DiveSiteWhereUniqueInputObjectSchema } from "./DiveSiteWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveSiteCreateNestedOneWithoutLinksInput> = z
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
    connect: z.lazy(() => DiveSiteWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const DiveSiteCreateNestedOneWithoutLinksInputObjectSchema = Schema;
