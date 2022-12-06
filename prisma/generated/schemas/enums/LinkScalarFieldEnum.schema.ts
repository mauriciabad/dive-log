import { z } from "zod";

export const LinkScalarFieldEnumSchema = z.enum([
  "createdAt",
  "updatedAt",
  "id",
  "link",
  "type",
  "title",
  "thumbnail",
  "creatorUserId",
  "diveId",
  "diveBuddyId",
  "diveCenterId",
  "userId",
  "diveSiteId",
  "equipmentUnitId",
]);
