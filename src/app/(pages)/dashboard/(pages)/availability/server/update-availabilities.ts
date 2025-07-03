"use server";

import { dbConnection } from "@/lib/prisma";
import { getUser } from "@/app/server/user/get-user";
import { AvailabilitiesFormInput } from "../schema";

export const updateAvailabilities = async (input: AvailabilitiesFormInput) => {
  const user = await getUser();

  try {
    for (const availability of input.availabilities) {
      await dbConnection.availability.update({
        where: { id: availability.id, businessId: user?.business?.id },
        data: {
          isActive: availability.isActive,
          from: availability.from,
          to: availability.to,
        },
      });
    }
    return { isSuccess: true, result: null };
  } catch (error) {
    console.log(error);
    return {
      isSuccess: false,
      error: "Erro ao atualizar as disponibilidades.",
    };
  }
};
