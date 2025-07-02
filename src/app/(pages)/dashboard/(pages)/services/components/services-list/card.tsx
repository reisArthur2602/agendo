"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";
import { Service } from "@prisma/client";

import {
  Clock,
  Copy,
  DollarSign,
  Edit,
  MoreHorizontal,
  ToggleRight,
  Trash2,
} from "lucide-react";

import { UpsertServiceDialog } from "../upsert-dialog";

import { toggleStatusService } from "../../server/toggle-status-service";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { deleteService } from "../../server/delete-service";
import { upsertService } from "../../server/upsert-service";

type CardServiceProps = {
  service: Service;
};

export const ServiceCard = ({ service }: CardServiceProps) => {
  const [openAlert, setOpenAlert] = useState<boolean>(false);

  const onToggleStatus = async () => {
    await toggleStatusService({ id: service.id, isActive: !service.isActive });
  };

  const onDeleteService = async () => {
    await deleteService({ id: service.id });
  };

  const onDuplicateService = async () => {
    await upsertService({ ...service, id: undefined });
  };

  const onOpenDialogDeleteService = () => setOpenAlert(!openAlert);

  return (
    <>
      <Card
        className={cn(
          "group hover:border-primary relative border transition-all duration-200 hover:shadow-md",
          service.isActive ? "border-l-primary border-l-4" : "bg-muted",
        )}
      >
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-base font-semibold">
                {service.name}
              </CardTitle>
              <CardDescription className="text-muted-foreground mt-1 line-clamp-2 text-sm">
                {service.description}
              </CardDescription>
            </div>
            <Badge variant={service.isActive ? "default" : "secondary"}>
              {service.isActive ? "Ativo" : "Inativo"}
            </Badge>
          </div>
        </CardHeader>

        <CardContent>
          <div className="text-muted-foreground mb-4 flex items-center justify-between text-sm">
            <div className="flex items-center">
              <DollarSign className="mr-1 h-4 w-4" />
              R$ {Number(service.price).toFixed(2)}
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {service.duration}min
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <UpsertServiceDialog service={service}>
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-accent flex-1"
              >
                <Edit className="mr-2 h-4 w-4" />
                Editar
              </Button>
            </UpsertServiceDialog>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Button
                    onClick={() => onDuplicateService()}
                    variant={"ghost"}
                    className="w-full justify-start gap-2"
                  >
                    <Copy className="mr-2 h-4 w-4" />
                    Duplicar
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Button
                    onClick={() => onToggleStatus()}
                    variant={"ghost"}
                    className="w-full justify-start gap-2"
                  >
                    <ToggleRight className="mr-2 h-4 w-4" />
                    {service.isActive ? "Desativar" : "Ativar"}
                  </Button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-600" asChild>
                  <Button
                    variant={"ghost"}
                    onClick={onOpenDialogDeleteService}
                    className="w-full justify-start gap-2"
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Excluir
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardContent>
      </Card>
      <AlertDialog open={openAlert} onOpenChange={onOpenDialogDeleteService}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription>
              {`Tem certeza que deseja excluir o serviço "${service.name}" ? Esta ação não pode ser desfeita e todos os agendamentos
              relacionados serão cancelados.`}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => onDeleteService()}
              className="bg-red-600 hover:bg-red-700"
            >
              Excluir serviço
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
