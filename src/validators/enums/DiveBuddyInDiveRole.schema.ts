import { z } from "zod";

export const DiveBuddyInDiveRoleSchema = z.enum([
  "GUIDE",
  "STUDENT",
  "RECREATIONAL",
  "IRRELEVANT",
]);
