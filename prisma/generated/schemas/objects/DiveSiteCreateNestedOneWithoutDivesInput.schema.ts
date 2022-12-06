import { z } from "zod";
import { DiveSiteCreateWithoutDivesInputObjectSchema } from "./DiveSiteCreateWithoutDivesInput.schema";
import { DiveSiteUncheckedCreateWithoutDivesInputObjectSchema } from "./DiveSiteUncheckedCreateWithoutDivesInput.schema";
import { DiveSiteCreateOrConnectWithoutDivesInputObjectSchema } from "./DiveSiteCreateOrConnectWithoutDivesInput.schema";
import { DiveSiteWhereUniqueInputObjectSchema } from "./DiveSiteWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveSiteCreateNestedOneWithoutDivesInput> = z
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
    connect: z.lazy(() => DiveSiteWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const DiveSiteCreateNestedOneWithoutDivesInputObjectSchema = Schema;
