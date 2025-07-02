"use server";

import { dbConnection } from "@/lib/prisma";

import { revalidatePath } from "next/cache";

export const toggleStatusService = async (data: {
  id: string;
  isActive: boolean;
}) => {
  try {
    const result = await dbConnection.service.update({
      where: { id: data.id },
      data: {
        isActive: data.isActive,
      },
    });

    revalidatePath("/dashboard/services");

    return { isSuccess: true, result };
  } catch (error) {
    console.error("Erro no toggleStatusService:", error);
    return {
      isSuccess: false,
      result:
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao atualizar o serviço",
    };
  }
};
