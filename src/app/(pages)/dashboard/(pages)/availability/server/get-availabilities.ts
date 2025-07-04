"use server";

import { getUser } from "@/app/server/user/get-user";
import { dbConnection } from "@/lib/prisma";
import { cache } from "react";

export const getAvailabilities = cache(async () => {
  const user = await getUser();
  return await dbConnection.availability.findMany({
    where: { businessId: user?.business?.id },
  });
});
