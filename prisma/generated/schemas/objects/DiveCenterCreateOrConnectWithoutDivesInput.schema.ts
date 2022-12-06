import { z } from "zod";
import { DiveCenterWhereUniqueInputObjectSchema } from "./DiveCenterWhereUniqueInput.schema";
import { DiveCenterCreateWithoutDivesInputObjectSchema } from "./DiveCenterCreateWithoutDivesInput.schema";
import { DiveCenterUncheckedCreateWithoutDivesInputObjectSchema } from "./DiveCenterUncheckedCreateWithoutDivesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCenterCreateOrConnectWithoutDivesInput> = z
  .object({
    where: z.lazy(() => DiveCenterWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DiveCenterCreateWithoutDivesInputObjectSchema),
      z.lazy(() => DiveCenterUncheckedCreateWithoutDivesInputObjectSchema),
    ]),
  })
  .strict();

export const DiveCenterCreateOrConnectWithoutDivesInputObjectSchema = Schema;
