import { z } from "zod";
import { DiveWhereUniqueInputObjectSchema } from "./DiveWhereUniqueInput.schema";
import { DiveUpdateWithoutUserInputObjectSchema } from "./DiveUpdateWithoutUserInput.schema";
import { DiveUncheckedUpdateWithoutUserInputObjectSchema } from "./DiveUncheckedUpdateWithoutUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => DiveWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => DiveUpdateWithoutUserInputObjectSchema),
      z.lazy(() => DiveUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const DiveUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema;
