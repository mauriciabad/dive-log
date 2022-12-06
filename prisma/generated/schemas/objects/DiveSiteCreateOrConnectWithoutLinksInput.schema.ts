import { z } from "zod";
import { DiveSiteWhereUniqueInputObjectSchema } from "./DiveSiteWhereUniqueInput.schema";
import { DiveSiteCreateWithoutLinksInputObjectSchema } from "./DiveSiteCreateWithoutLinksInput.schema";
import { DiveSiteUncheckedCreateWithoutLinksInputObjectSchema } from "./DiveSiteUncheckedCreateWithoutLinksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveSiteCreateOrConnectWithoutLinksInput> = z
  .object({
    where: z.lazy(() => DiveSiteWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DiveSiteCreateWithoutLinksInputObjectSchema),
      z.lazy(() => DiveSiteUncheckedCreateWithoutLinksInputObjectSchema),
    ]),
  })
  .strict();

export const DiveSiteCreateOrConnectWithoutLinksInputObjectSchema = Schema;
