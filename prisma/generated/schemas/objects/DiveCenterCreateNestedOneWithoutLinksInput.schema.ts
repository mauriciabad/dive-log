import { z } from "zod";
import { DiveCenterCreateWithoutLinksInputObjectSchema } from "./DiveCenterCreateWithoutLinksInput.schema";
import { DiveCenterUncheckedCreateWithoutLinksInputObjectSchema } from "./DiveCenterUncheckedCreateWithoutLinksInput.schema";
import { DiveCenterCreateOrConnectWithoutLinksInputObjectSchema } from "./DiveCenterCreateOrConnectWithoutLinksInput.schema";
import { DiveCenterWhereUniqueInputObjectSchema } from "./DiveCenterWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCenterCreateNestedOneWithoutLinksInput> = z
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
    connect: z.lazy(() => DiveCenterWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const DiveCenterCreateNestedOneWithoutLinksInputObjectSchema = Schema;
