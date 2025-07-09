"use server";

import { dbConnection } from "@/lib/prisma";
import { cache } from "react";

export const getBusiness = cache(async (slug: string) => {
  return await dbConnection.business.findUnique({
    where: { slug },
    include: {
      services: true,
      availabilities: true,
      appointments: {
        include: {
          service: true,
        },
      },
    },
  });
});
