"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./sidebar";
import { ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HeaderDashboard } from "../header";
import { WelcomeModal } from "@/components/ui/welcome-dialog";
import { Business, User } from "@prisma/client";
import { useBusinessStore } from "@/lib/zustand/business";

type DashboardSidebarProps = {
  user: User & { business: Business };

  children: ReactNode;
};

export const DashboardSidebar = ({ children, user }: DashboardSidebarProps) => {
  const { setBusiness } = useBusinessStore();
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");
    if (!hasSeenWelcome) setShowWelcomeModal(true);
    setBusiness(user.business);
  }, [setBusiness, user]);

  const onCloseWelcomeModal = () => {
    setShowWelcomeModal(false);
    localStorage.setItem("hasSeenWelcome", "true");
  };

  return (
    <>
      <WelcomeModal
        isOpen={showWelcomeModal}
        onClose={onCloseWelcomeModal}
        slug={user.business.slug}
      />

      <SidebarProvider>
        <AppSidebar user={user} />

        <SidebarInset>
          <HeaderDashboard />

          <motion.div
            className="mx-auto size-full max-w-7xl p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {children}
          </motion.div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
};
