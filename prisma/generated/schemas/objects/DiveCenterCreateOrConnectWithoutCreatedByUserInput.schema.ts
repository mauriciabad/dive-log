import { z } from "zod";
import { DiveCenterWhereUniqueInputObjectSchema } from "./DiveCenterWhereUniqueInput.schema";
import { DiveCenterCreateWithoutCreatedByUserInputObjectSchema } from "./DiveCenterCreateWithoutCreatedByUserInput.schema";
import { DiveCenterUncheckedCreateWithoutCreatedByUserInputObjectSchema } from "./DiveCenterUncheckedCreateWithoutCreatedByUserInput.schema";

import type { Prisma } from "@prisma/client";

const Schema: z.ZodType<Prisma.DiveCenterCreateOrConnectWithoutCreatedByUserInput> =
  z
    .object({
      where: z.lazy(() => DiveCenterWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => DiveCenterCreateWithoutCreatedByUserInputObjectSchema),
        z.lazy(
          () => DiveCenterUncheckedCreateWithoutCreatedByUserInputObjectSchema
        ),
      ]),
    })
    .strict();

export const DiveCenterCreateOrConnectWithoutCreatedByUserInputObjectSchema =
  Schema;
