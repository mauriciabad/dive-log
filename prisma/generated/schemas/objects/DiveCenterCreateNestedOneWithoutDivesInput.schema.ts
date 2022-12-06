import { z } from "zod";
import { DiveCenterCreateWithoutDivesInputObjectSchema } from "./DiveCenterCreateWithoutDivesInput.schema";
import { DiveCenterUncheckedCreateWithoutDivesInputObjectSchema } from "./DiveCenterUncheckedCreateWithoutDivesInput.schema";
import { DiveCenterCreateOrConnectWithoutDivesInputObjectSchema } from "./DiveCenterCreateOrConnectWithoutDivesInput.schema";
import { DiveCenterWhereUniqueInputObjectSchema } from "./DiveCenterWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCenterCreateNestedOneWithoutDivesInput> = z
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
    connect: z.lazy(() => DiveCenterWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const DiveCenterCreateNestedOneWithoutDivesInputObjectSchema = Schema;
