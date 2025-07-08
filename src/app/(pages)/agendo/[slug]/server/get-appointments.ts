"use server";

import { dbConnection } from "@/lib/prisma";

export const getAppointment = async (businessId: string) => {
  return await dbConnection.appointment.findMany({ where: { businessId } });
};
