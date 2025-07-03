"use server";

import { getUser } from "@/app/server/user/get-user";
import { dbConnection } from "@/lib/prisma";

export const getAvailabilities = async () => {
  const user = await getUser();
  return await dbConnection.availability.findMany({
    where: { businessId: user?.business?.id },
  });
};
