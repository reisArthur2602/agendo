"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

const breadcrumbTranslations: Record<string, string> = {
  settings: "Configurações",
  availability: "Disponibilidade",
  services: "Serviços",
  appointmesnts: "Agendamentos",
};

export const HeaderDashboard = () => {
  const pathname = usePathname();

  const pathParts = pathname
    .replace(/^\/dashboard/, "")
    .split("/")
    .filter(Boolean);

  const breadcrumbItems = [
    {
      name: "Menu",
      href: "/dashboard",
    },
    ...pathParts.map((part, index) => {
      const translated =
        breadcrumbTranslations[part] ??
        part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, " ");
      const href = `/dashboard/${pathParts.slice(0, index + 1).join("/")}`;
      return { name: translated, href };
    }),
  ];

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbItems.map((item, idx) => (
            <Fragment key={`breadcrumb-${item.href}`}>
              <BreadcrumbItem
                className={idx === 0 ? "hidden md:block" : undefined}
              >
                {idx < breadcrumbItems.length - 1 ? (
                  <BreadcrumbLink href={item.href}>{item.name}</BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{item.name}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {idx < breadcrumbItems.length - 1 && (
                <BreadcrumbSeparator
                  className={idx === 0 ? "hidden md:block" : undefined}
                />
              )}
            </Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
};
