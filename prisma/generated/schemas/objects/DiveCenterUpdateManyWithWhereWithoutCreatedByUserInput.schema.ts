import { z } from "zod";
import { DiveCenterScalarWhereInputObjectSchema } from "./DiveCenterScalarWhereInput.schema";
import { DiveCenterUpdateManyMutationInputObjectSchema } from "./DiveCenterUpdateManyMutationInput.schema";
import { DiveCenterUncheckedUpdateManyWithoutCreatedDiveCentersInputObjectSchema } from "./DiveCenterUncheckedUpdateManyWithoutCreatedDiveCentersInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCenterUpdateManyWithWhereWithoutCreatedByUserInput> =
  z
    .object({
      where: z.lazy(() => DiveCenterScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => DiveCenterUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            DiveCenterUncheckedUpdateManyWithoutCreatedDiveCentersInputObjectSchema
        ),
      ]),
    })
    .strict();

export const DiveCenterUpdateManyWithWhereWithoutCreatedByUserInputObjectSchema =
  Schema;
