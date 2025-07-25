import { Button } from "@/components/ui/button";

import { Folder, Plus } from "lucide-react";
import { UpsertServiceDialog } from "../upsert-dialog";

export const EmptyState = () => {
  return (
    <div className="space-y-4 rounded-sm border-2 border-dashed border-blue-100 p-12 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
        <Folder className="text-primary h-8 w-8" />
      </div>
      <h3 className="font-medium">Nenhum serviço cadastrado</h3>
      <p className="text-muted-foreground">
        Comece adicionando seu primeiro serviço para receber agendamentos
      </p>

      <UpsertServiceDialog>
        <Button size={"lg"}>
          <Plus className="mr-2 h-4 w-4" />
          Adicionar primeiro serviço
        </Button>
      </UpsertServiceDialog>
    </div>
  );
};
