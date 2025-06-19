"use client";

import {
  LifeBuoy,
  Settings,
  Link as LinkIcon,
  CreditCard,
  CalendarCheck2,
  Calendar,
  Folder,
  Clock,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { MainNav } from "./nav/main-nav";
import { SecondaryNav } from "./nav/secondary-nav";
import { UserNav } from "./nav/user-nav";
import { UserSession } from "@/app/@types/next-auth";

interface AppSidebarProps {
  user: UserSession;
}

const NAV_ITEMS = {
  main: [
    {
      title: "Agenda Semanal",
      url: "/app/dashboard",
      icon: Calendar,
      isActive: true,
    },
    {
      title: "Serviços",
      url: "/app/dashboard/services",
      icon: Folder,
    },
    {
      title: "Disponibilidade",
      url: "/app/dashboard/availability",
      icon: Clock,
    },
  ],
  secondary: [
    {
      title: "Integrações",
      url: "/app/dashboard/integrations",
      icon: LinkIcon,
    },
    {
      title: "Configurações",
      url: "/app/dashboard/settings",
      icon: Settings,
    },
    {
      title: "Planos",
      url: "/app/dashboard/billing",
      icon: CreditCard,
    },
    {
      title: "Suporte",
      url: "#",
      icon: LifeBuoy,
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
              <a href="/dashboard">
                <div className="from-cyan -600 flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br to-blue-500 text-white">
                  <CalendarCheck2 className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Agendo</span>
                  <span className="truncate text-xs">Agendamentos</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <MainNav items={NAV_ITEMS.main} />
        <SecondaryNav items={NAV_ITEMS.secondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <UserNav user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
