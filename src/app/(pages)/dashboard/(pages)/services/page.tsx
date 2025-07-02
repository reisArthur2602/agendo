import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { ServicesList } from "./components/services-list";

const Page = () => {
  return (
    <section className="space-y-12">
      <div className="flex w-full flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold">Serviços</h1>
          <p className="text-muted-foreground">
            Gerencie os serviços que você oferece
          </p>
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Novo serviço
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Novo serviço</DialogTitle>
              <DialogDescription>
                Adicione um novo serviço ao seu catálogo
              </DialogDescription>
            </DialogHeader>
            ...
          </DialogContent>
        </Dialog>
      </div>

      <ServicesList />
    </section>
  );
};

export default Page;
