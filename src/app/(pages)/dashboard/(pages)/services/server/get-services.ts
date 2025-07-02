"use server";

import { getUser } from "@/app/server/user/get-user";
import { dbConnection } from "@/lib/prisma";
import { cache } from "react";

export const getServices = cache(async () => {
  const user = await getUser();

  if (!user?.business?.id) {
    throw new Error("Usuário não associado a um negócio");
  }

  return await dbConnection.service.findMany({
    where: {
      businessId: user.business.id,
    },
  });
});
