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
    await dbConnection.business.create({
      data: {
        name: data.name,
        slug: slugify(data.name),
        description: data.description,
        userId: user.id,
        schedules: {
          create: days.map((day) => ({
            dayOfWeek: day,
            timeSlots: {
              create: { startTime: "08:00", endTime: "18:00" },
            },
          })),
        },
      },
    });

    return { isSuccess: true, data: null };
  } catch (error) {
    const errorMessage = (error as { message?: string }).message;
    console.log(errorMessage);
    return { isSuccess: false, data: null };
  }
};
