"use client";

import { Calendar, Folder, Clock, Settings2, House } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { MainNav } from "./main-nav";

import { UserNav } from "./user-nav";

import { Logo } from "@/components/common/logo";

type AppSidebarProps = {
  user: {
    image: string;
    name: string;
    email: string;
  };
};

const nav_items = {
  main: [
    {
      title: "Menu",
      url: "/dashboard",
      icon: House,
      isActive: true,
    },
    {
      title: "Agendamentos",
      url: "/dashboard/appointments",
      icon: Calendar,
    },
    {
      title: "Serviços",
      url: "/dashboard/services",
      icon: Folder,
    },
    {
      title: "Disponibilidade",
      url: "/dashboard/availability",
      icon: Clock,
    },
    {
      title: "Configuraçoes",
      url: "/dashboard/settings",
      icon: Settings2,
    },
  ],
};

export function AppSidebar({ user }: AppSidebarProps) {
  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Logo variant="short"/>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <MainNav items={nav_items.main} />
      </SidebarContent>
      <SidebarFooter>
        <UserNav user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
