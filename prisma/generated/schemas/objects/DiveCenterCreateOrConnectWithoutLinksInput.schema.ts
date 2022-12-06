import { z } from "zod";
import { DiveCenterWhereUniqueInputObjectSchema } from "./DiveCenterWhereUniqueInput.schema";
import { DiveCenterCreateWithoutLinksInputObjectSchema } from "./DiveCenterCreateWithoutLinksInput.schema";
import { DiveCenterUncheckedCreateWithoutLinksInputObjectSchema } from "./DiveCenterUncheckedCreateWithoutLinksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCenterCreateOrConnectWithoutLinksInput> = z
  .object({
    where: z.lazy(() => DiveCenterWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DiveCenterCreateWithoutLinksInputObjectSchema),
      z.lazy(() => DiveCenterUncheckedCreateWithoutLinksInputObjectSchema),
    ]),
  })
  .strict();

export const DiveCenterCreateOrConnectWithoutLinksInputObjectSchema = Schema;
