"server-only";

import { dbConnection } from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { cache } from "react";

export const getUser = cache(async () => {
  const session = await getKindeServerSession().getUser();
  if (!session) return null;

  const user = await dbConnection.user.findUnique({
    where: { email: session.email! },
    include: { business: true },
  });

  return user;
});
