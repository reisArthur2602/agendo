"use server";

import { prisma } from "@/lib/prisma";
import { CreateBusiness } from "./schema";
import { Day } from "@prisma/client";

import slugify from "slugify";
import { auth } from "@/lib/auth";

const days: Day[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const createBusiness = async (data: CreateBusiness) => {
  const session = await auth();
  const user = session?.user;
  if (!user?.id) return null;

  return await prisma.business.create({
    data: {
      name: data.name,
      slug: slugify(data.name),
      user_id: user.id,
      availabilities: {
        create: days.map((day) => ({
          day,
          from: "08:00",
          to: "18:00",
        })),
      },
    },
  });
};
