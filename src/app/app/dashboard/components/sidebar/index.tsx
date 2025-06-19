"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./sidebar";
import { PropsWithChildren } from "react";
import { UserSession } from "@/app/@types/next-auth";

interface DashboardSidebarProps extends PropsWithChildren {
  user: UserSession;
}

export const DashboardSidebar = ({ children, user }: DashboardSidebarProps) => {
  return (
    <SidebarProvider>
      <AppSidebar user={user} />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
};
