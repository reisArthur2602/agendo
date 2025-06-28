import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/lib/prisma";

import { redirect } from "next/navigation";

export async function GET() {
  const session = await getKindeServerSession().getUser();

  const user = await prisma.user.findUnique({
    where: { email: session?.email as string },
    include: { businesses: true },
  });

  if (!user || !user.businesses) {
    await prisma.user.create({
      data: {
        email: session?.email as string,
        image: session?.picture || "https://avatar.vercel.sh/rauchg",
        name: session?.given_name as string,
      },
    });

    redirect("/onboarding");
  }

  redirect("/dashboard");
}
