"use server";

import { dbConnection } from "@/lib/prisma";

import { revalidatePath } from "next/cache";

export const deleteService = async (data: { id: string }) => {
  try {
    const result = await dbConnection.service.delete({
      where: { id: data.id },
    });

    revalidatePath("/dashboard/services");

    return { isSuccess: true, result };
  } catch (error) {
    console.error("Erro no deleteService:", error);
    return {
      isSuccess: false,
      result:
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao deletar o serviço",
    };
  }
};
