"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GeneralTab } from "./general";
import { LayoutTab } from "./layout";
import { useState } from "react";

export const SettingsTabs = () => {
  const [activeTab, setActiveTab] = useState("general");
  return (
    <Tabs className="space-y-6" value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="general">Geral</TabsTrigger>
        <TabsTrigger value="layout">Layout</TabsTrigger>
        <TabsTrigger value="billing">Assinatura</TabsTrigger>
      </TabsList>

      <GeneralTab />
      <LayoutTab />
    </Tabs>
  );
};
