import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";
import { ServicesList } from "./components/services-list";
import { UpsertServiceDialog } from "./components/upsert-dialog";

const Page = () => {
  return (
    <div className="space-y-12">
      <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold">Serviços</h1>
          <p className="text-muted-foreground">
            Gerencie os serviços que você oferece
          </p>
        </div>
        <UpsertServiceDialog>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Novo serviço
          </Button>
        </UpsertServiceDialog>
      </div>

      <ServicesList />
    </div>
  );
};

export default Page;
