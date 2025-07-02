"use server";

import { dbConnection } from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getUser = async () => {
  const session = await getKindeServerSession().getUser();

  const user = await dbConnection.user.findUnique({
    where: { email: session?.email as string },
    include: { business: true },
  });

  return user;
};
