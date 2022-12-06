import { z } from "zod";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";
import { DiveCreateWithoutDiveCenterInputObjectSchema } from "./DiveCreateWithoutDiveCenterInput.schema";
import { DiveUncheckedCreateWithoutDiveCenterInputObjectSchema } from "./DiveUncheckedCreateWithoutDiveCenterInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCreateOrConnectWithoutDiveCenterInput> = z
  .object({
    where: z.lazy(() => DiveWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DiveCreateWithoutDiveCenterInputObjectSchema),
      z.lazy(() => DiveUncheckedCreateWithoutDiveCenterInputObjectSchema),
    ]),
  })
  .strict();

export const DiveCreateOrConnectWithoutDiveCenterInputObjectSchema = Schema;
