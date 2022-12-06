import { z } from "zod";
import { DiveCenterWhereUniqueInputObjectSchema } from "./DiveCenterWhereUniqueInput.schema";
import { DiveCenterUpdateWithoutCreatedByUserInputObjectSchema } from "./DiveCenterUpdateWithoutCreatedByUserInput.schema";
import { DiveCenterUncheckedUpdateWithoutCreatedByUserInputObjectSchema } from "./DiveCenterUncheckedUpdateWithoutCreatedByUserInput.schema";
import { DiveCenterCreateWithoutCreatedByUserInputObjectSchema } from "./DiveCenterCreateWithoutCreatedByUserInput.schema";
import { DiveCenterUncheckedCreateWithoutCreatedByUserInputObjectSchema } from "./DiveCenterUncheckedCreateWithoutCreatedByUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCenterUpsertWithWhereUniqueWithoutCreatedByUserInput> =
  z
    .object({
      where: z.lazy(() => DiveCenterWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => DiveCenterUpdateWithoutCreatedByUserInputObjectSchema),
        z.lazy(
          () => DiveCenterUncheckedUpdateWithoutCreatedByUserInputObjectSchema
        ),
      ]),
      create: z.union([
        z.lazy(() => DiveCenterCreateWithoutCreatedByUserInputObjectSchema),
        z.lazy(
          () => DiveCenterUncheckedCreateWithoutCreatedByUserInputObjectSchema
        ),
      ]),
    })
    .strict();

export const DiveCenterUpsertWithWhereUniqueWithoutCreatedByUserInputObjectSchema =
  Schema;
