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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { Service } from "@prisma/client";

import {
  Clock,
  Copy,
  DollarSign,
  Edit,
  MoreHorizontal,
  Trash2,
} from "lucide-react";
import React from "react";

type CardServiceProps = {
  service: Service;
};

export const ServiceCard = ({ service }: CardServiceProps) => {
  return (
    <Card
      className={cn(
        "group hover:border-primary relative border transition-all duration-200 hover:shadow-md",
        service.isActive ? "border-l-4 border-l-primary" : "bg-muted",
      )}
    >
      <CardHeader className="pb-2">
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
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="hover:bg-accent flex-1"
              >
                <Edit className="mr-2 h-4 w-4" />
                Editar
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Editar serviço</DialogTitle>
                <DialogDescription>
                  Faça alterações no seu serviço.
                </DialogDescription>
              </DialogHeader>
              {/* ...formulário ou conteúdo aqui... */}
            </DialogContent>
          </Dialog>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Copy className="mr-2 h-4 w-4" />
                Duplicar
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Switch className="mr-2 h-4 w-4" />
                {service.isActive ? "Desativar" : "Ativar"}
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600">
                <Trash2 className="mr-2 h-4 w-4" />
                Excluir
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
};
