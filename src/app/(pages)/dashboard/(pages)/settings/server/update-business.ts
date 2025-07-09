"use server";

import { dbConnection } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const updateBusiness = async (input: Prisma.BusinessUpdateInput) => {
  try {
    const businessSlug = input.slug;

    if (businessSlug) {
      const hasBusinessWithSlug = await dbConnection.business.findUnique({
        where: {
          slug: businessSlug as string,
          NOT: { id: input.id as string },
        },
      });

      if (hasBusinessWithSlug)
        return {
          isSuccess: false,
          error: "Este slug já está em uso",
        };
      {
      }
    }

    await dbConnection.business.update({
      where: { id: input.id as string },
      data: {
        ...input,
      },
    });
    revalidatePath('/dashboard/settings')
    return { isSuccess: true, data: null };
    
  } catch (error) {
    console.log("Erro editar negócio", error);
    return { isSuccess: false, error: null };
  }
};
