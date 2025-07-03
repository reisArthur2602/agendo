"use server";

import { Day } from "@prisma/client";
import { CreateBusinessInput } from "../schema";
import { dbConnection } from "@/lib/prisma";
import slugify from "slugify";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const days: Day[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const createBusiness = async (data: CreateBusinessInput) => {
  const session = await getKindeServerSession().getUser();

  const user = await dbConnection.user.findUnique({
    where: { email: session?.email as string },
    select: { id: true },
  });
  if (!user || !session) {
    throw new Error("Acesso Negado");
  }

  try {
    const result = await dbConnection.business.create({
      data: {
        name: data.name,
        slug: slugify(data.name),
        description: data.description,
        userId: user.id,
        availabilities: {
          create: days.map((day) => ({
            day,
            to: "08:00",
            from: "18:00",
          })),
        },
      },
    });

    return { isSuccess: true, result };
  } catch (error) {
    const errorMessage = (error as { message?: string }).message;
    console.log(errorMessage);
    return { isSuccess: false, result: null };
  }
};
