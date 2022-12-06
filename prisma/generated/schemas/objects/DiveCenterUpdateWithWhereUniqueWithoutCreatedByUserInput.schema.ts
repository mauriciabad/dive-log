import { z } from "zod";
import { DiveCenterWhereUniqueInputObjectSchema } from "./DiveCenterWhereUniqueInput.schema";
import { DiveCenterUpdateWithoutCreatedByUserInputObjectSchema } from "./DiveCenterUpdateWithoutCreatedByUserInput.schema";
import { DiveCenterUncheckedUpdateWithoutCreatedByUserInputObjectSchema } from "./DiveCenterUncheckedUpdateWithoutCreatedByUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCenterUpdateWithWhereUniqueWithoutCreatedByUserInput> =
  z
    .object({
      where: z.lazy(() => DiveCenterWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => DiveCenterUpdateWithoutCreatedByUserInputObjectSchema),
        z.lazy(
          () => DiveCenterUncheckedUpdateWithoutCreatedByUserInputObjectSchema
        ),
      ]),
    })
    .strict();

export const DiveCenterUpdateWithWhereUniqueWithoutCreatedByUserInputObjectSchema =
  Schema;
