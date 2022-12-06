import { z } from "zod";
import { DiveCreateWithoutLinksInputObjectSchema } from "./DiveCreateWithoutLinksInput.schema";
import { DiveUncheckedCreateWithoutLinksInputObjectSchema } from "./DiveUncheckedCreateWithoutLinksInput.schema";
import { DiveCreateOrConnectWithoutLinksInputObjectSchema } from "./DiveCreateOrConnectWithoutLinksInput.schema";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCreateNestedOneWithoutLinksInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => DiveCreateWithoutLinksInputObjectSchema),
        z.lazy(() => DiveUncheckedCreateWithoutLinksInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => DiveCreateOrConnectWithoutLinksInputObjectSchema)
      .optional(),
    connect: z.lazy(() => DiveWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const DiveCreateNestedOneWithoutLinksInputObjectSchema = Schema;
