"use server";

import { getUser } from "@/app/server/user/get-user";
import { dbConnection } from "@/lib/prisma";
import { UpsertService } from "../schema";
import { revalidatePath } from "next/cache";

export const upsertService = async (data: UpsertService) => {
  try {
    const user = await getUser();

    if (!user?.business?.id) {
      throw new Error("Usuário não associado a um negócio");
    }

    const result = await dbConnection.service.upsert({
      where: {
        id: data.id || "",
        businessId: user.business.id,
      },
      create: {
        ...data,
        businessId: user.business.id,
      },
      update: {
        ...data,
      },
    });

    revalidatePath("/app/dashboard/services");
    return { isSuccess: true, result };
  } catch (error) {
    console.error("Erro no upsertService:", error);
    return {
      isSuccess: false,
      error:
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao salvar o serviço",
    };
  }
};
