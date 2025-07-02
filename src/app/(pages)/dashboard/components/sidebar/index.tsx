"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./sidebar";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { HeaderDashboard } from "../header";

type DashboardSidebarProps = {
  user: {
    image: string;
    name: string;
    email: string;
  };
  children: ReactNode;
};

export const DashboardSidebar = ({ children, user }: DashboardSidebarProps) => {
  return (
    <SidebarProvider>
      <AppSidebar user={user} />
      <SidebarInset>
        <HeaderDashboard />

        <motion.div
          className="mx-auto size-full max-w-5xl p-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {children}
        </motion.div>
      </SidebarInset>
    </SidebarProvider>
  );
};
