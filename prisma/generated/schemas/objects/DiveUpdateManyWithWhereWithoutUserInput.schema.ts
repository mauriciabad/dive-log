import { z } from "zod";
import { DiveScalarWhereInputObjectSchema } from "./DiveScalarWhereInput.schema";
import { DiveUpdateManyMutationInputObjectSchema } from "./DiveUpdateManyMutationInput.schema";
import { DiveUncheckedUpdateManyWithoutDivesInputObjectSchema } from "./DiveUncheckedUpdateManyWithoutDivesInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => DiveScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => DiveUpdateManyMutationInputObjectSchema),
      z.lazy(() => DiveUncheckedUpdateManyWithoutDivesInputObjectSchema),
    ]),
  })
  .strict();

export const DiveUpdateManyWithWhereWithoutUserInputObjectSchema = Schema;
