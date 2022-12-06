import { z } from "zod";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";
import { DiveCreateWithoutDiveSiteInputObjectSchema } from "./DiveCreateWithoutDiveSiteInput.schema";
import { DiveUncheckedCreateWithoutDiveSiteInputObjectSchema } from "./DiveUncheckedCreateWithoutDiveSiteInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCreateOrConnectWithoutDiveSiteInput> = z
  .object({
    where: z.lazy(() => DiveWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DiveCreateWithoutDiveSiteInputObjectSchema),
      z.lazy(() => DiveUncheckedCreateWithoutDiveSiteInputObjectSchema),
    ]),
  })
  .strict();

export const DiveCreateOrConnectWithoutDiveSiteInputObjectSchema = Schema;
