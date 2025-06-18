"use server";

import { prisma } from "@/lib/prisma";

export const getBusinessWithUser = async (user_id: string) => {
  const business = await prisma.business.findUnique({ where: { user_id } });
  return business;
};
