"use client";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useState } from "react";
import { GeneralTab } from "./components/tabs/general";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-2xl font-bold">Configurações</h1>
        <p className="text-muted-foreground">
          Gerencie as configurações da sua conta e negócio
        </p>
      </div>
      <Tabs
        className="space-y-6"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="general">Geral</TabsTrigger>
          <TabsTrigger value="layout">Layout</TabsTrigger>
          <TabsTrigger value="billing">Assinatura</TabsTrigger>
        </TabsList>
        
        <GeneralTab />
      </Tabs>
    </div>
  );
};

export default Settings;
