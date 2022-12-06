import { z } from "zod";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";
import { DiveCreateWithoutLinksInputObjectSchema } from "./DiveCreateWithoutLinksInput.schema";
import { DiveUncheckedCreateWithoutLinksInputObjectSchema } from "./DiveUncheckedCreateWithoutLinksInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCreateOrConnectWithoutLinksInput> = z
  .object({
    where: z.lazy(() => DiveWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => DiveCreateWithoutLinksInputObjectSchema),
      z.lazy(() => DiveUncheckedCreateWithoutLinksInputObjectSchema),
    ]),
  })
  .strict();

export const DiveCreateOrConnectWithoutLinksInputObjectSchema = Schema;
