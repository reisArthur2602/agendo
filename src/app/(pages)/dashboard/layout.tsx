import { PropsWithChildren } from "react";
import { DashboardSidebar } from "./components/sidebar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { dbConnection } from "@/lib/prisma";
import { redirect } from "next/navigation";

const verifyUser = async () => {
  const session = await getKindeServerSession().getUser();
  if (!session) redirect("/");

  const user = await dbConnection.user.findUnique({
    where: { email: session?.email as string },
    select: {
      name: true,
      email: true,
      image: true,
      business: true,
    },
  });

  if (!user) redirect("/");

  if (!user.business) redirect("/onboarding/business");
  return user;
};

const Layout = async ({ children }: PropsWithChildren) => {
  const user = await verifyUser();
  return <DashboardSidebar user={user}>{children}</DashboardSidebar>;
};

export default Layout;
