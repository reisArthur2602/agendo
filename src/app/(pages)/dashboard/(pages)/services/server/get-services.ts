"use server";

import { getUser } from "@/app/server/user/get-user";
import { dbConnection } from "@/lib/prisma";
import { cache } from "react";

export const getServices = cache(async () => {
  const user = await getUser();

  return await dbConnection.service.findMany({
    where: {
      businessId: user?.business?.id,
    },
  });
});
