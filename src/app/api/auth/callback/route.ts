import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { dbConnection } from "@/lib/prisma";

import { redirect } from "next/navigation";

export async function GET() {
  let user = null;
  const session = await getKindeServerSession().getUser();

  if (session) {
    user = await dbConnection.user.findUnique({
      where: { email: session?.email as string },
      include: { business: true },
    });
  }

  if (!user) {
    const result = await dbConnection.user.create({
      data: {
        email: session?.email as string,
        image: session?.picture || "https://avatar.vercel.sh/rauchg",
        name: session?.given_name as string,
      },
      include: { business: true },
    });

    user = result;
  }

  const userHasBusiness = !!user.business;
  if (userHasBusiness) redirect("/dashboard");

  redirect("/onboarding");
}
