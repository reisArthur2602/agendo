import { PropsWithChildren } from "react";

import { getUserSession } from "@/lib/auth";
import { DashboardSidebar } from "./components/sidebar";

const DashboardLayout = async ({ children }: PropsWithChildren) => {
  const user = await getUserSession();

  return <DashboardSidebar user={user}>{children}</DashboardSidebar>;
};

export default DashboardLayout;
