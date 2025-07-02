import { PropsWithChildren } from "react";
import { DashboardSidebar } from "./components/sidebar";

import { redirect } from "next/navigation";
import { getUser } from "@/app/server/user/get-user";

const verifyUser = async () => {
  const user = await getUser();
  if (!user) redirect("/");

  if (!user.business) redirect("/onboarding/business");
  return user;
};

const Layout = async ({ children }: PropsWithChildren) => {
  const user = await verifyUser();

  return (
    <DashboardSidebar user={{ ...user, business: user.business! }}>
      {children}
    </DashboardSidebar>
  );
};

export default Layout;
