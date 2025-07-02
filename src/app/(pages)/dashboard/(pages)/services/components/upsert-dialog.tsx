"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { InputField } from "@/components/ui/input/field";
import { TextareaField } from "@/components/ui/textarea/field";
import { PropsWithChildren } from "react";
import { useForm } from "react-hook-form";
import { UpsertService, UpsertServiceSchema } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@radix-ui/react-dialog";

import { Service } from "@prisma/client";

import { toast } from "sonner";
import { upsertService } from "../server/upsert-service";
import { Button, buttonVariants } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

type UpsertServiceDialogProps = {
  service?: Service;
} & PropsWithChildren;

export const UpsertServiceDialog = ({
  children,
  service,
}: UpsertServiceDialogProps) => {
  const methods = useForm<UpsertService>({
    resolver: zodResolver(UpsertServiceSchema),
    defaultValues: {
      id: service?.id,
      name: service?.name || "",
      description: service?.description || "",
      duration: service?.duration || 15,
      price: service?.price || 0,
    },
  });

  const isEdit = !!service;
  const isSubmitting = methods.formState.isSubmitting;

  const onSubmit = async (data: UpsertService) => {
    const { isSuccess, error } = await upsertService(data);

    if (!isSuccess) return toast.error(error);

    toast.success(
      isEdit
        ? "Serviço atualizado com sucesso!"
        : "Serviço criado com sucesso!",
    );
    methods.reset();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="max-w-md">
        <Form {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <DialogHeader>
              <DialogTitle>
                {isEdit ? "Editar Serviço" : "Novo Serviço"}
              </DialogTitle>
              <DialogDescription>
                {isEdit
                  ? "Atualize as informações do serviço"
                  : "Preencha os dados para cadastrar um novo serviço"}
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-10 py-4">
              <InputField
                name="name"
                label="Nome do Serviço"
                placeholder="Ex: Corte de Cabelo, Massagem Relaxante"
                description="O nome que será exibido para os clientes"
              />

              <TextareaField
                name="description"
                label="Descrição do Serviço"
                placeholder="Descreva detalhes importantes sobre o serviço"
                description="Informações que ajudarão os clientes a entender melhor o serviço"
                rows={3}
              />

              <div className="grid grid-cols-2 gap-4">
                <InputField
                  name="duration"
                  label="Duração"
                  placeholder="Ex: 30"
                  type="number"
                  description="Tempo estimado em minutos"
                />

                <InputField
                  name="price"
                  label="Preço"
                  placeholder="Ex: 50,00"
                  type="number"
                  description="Valor cobrado pelo serviço"
                />
              </div>
            </div>
            <DialogFooter className="mt-4 grid grid-cols-2 gap-2">
              <Button
                className="w-full"
                size={"lg"}
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <Loader2Icon className="size-4 animate-spin" />
                    Carregando...
                  </div>
                ) : (
                  "Salvar e Continuar"
                )}
              </Button>
              <DialogClose className={buttonVariants({ variant: "secondary" })}>
                Cancelar
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
