"use server";

import { dbConnection } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export type CreateAppointmentInput = {
  serviceId: string;
  date: Date;
  customerName: string;
  customerPhone: string;
  businessId: string;
};

export const createAppointmenmt = async (input: CreateAppointmentInput) => {
  try {
    const existing = await dbConnection.appointment.findFirst({
      where: {
        date: new Date(input.date),
        businessId: input.businessId,
      },
    });

    if (existing) {
      return {
        isSuccess: false,
        error: "Horário já reservado",
        result: null,
      };
    }

    const result = await dbConnection.appointment.create({
      data: {
        ...input,
        date: new Date(input.date),
      },
    });
    revalidatePath("/agendo");
    return { isSuccess: true, result };
  } catch (error) {
    const errorMessage =
      (error as { message?: string }).message || "Erro desconhecido";
    console.log(errorMessage);
    return { isSuccess: false, result: null, error: errorMessage };
  }
};
