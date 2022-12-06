import { z } from "zod";
import { DiveSiteWhereUniqueInputObjectSchema } from "./DiveSiteWhereUniqueInput.schema";
import { DiveSiteCreateWithoutDivesInputObjectSchema } from "./DiveSiteCreateWithoutDivesInput.schema";
import { DiveSiteUncheckedCreateWithoutDivesInputObjectSchema } from "./DiveSiteUncheckedCreateWithoutDivesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveSiteCreateOrConnectWithoutDivesInput> = z
  .object({
    where: z.lazy(() => DiveSiteWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DiveSiteCreateWithoutDivesInputObjectSchema),
      z.lazy(() => DiveSiteUncheckedCreateWithoutDivesInputObjectSchema),
    ]),
  })
  .strict();

export const DiveSiteCreateOrConnectWithoutDivesInputObjectSchema = Schema;
