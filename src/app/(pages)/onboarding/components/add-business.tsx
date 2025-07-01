"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { CreateBusinessInput, createBusinessSchema } from "../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { InputField } from "@/components/ui/input/field";

import { TextareaField } from "@/components/ui/textarea/field";
import { Button } from "@/components/ui/button";

export const AddBusiness = () => {
  const methods = useForm<CreateBusinessInput>({
    resolver: zodResolver(createBusinessSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const onSubmit = (data: CreateBusinessInput) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Form {...methods}>
        <motion.form
          onSubmit={methods.handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-xl"
        >
          <Card>
            <CardHeader className="text-center">
              <div className="bg-primary/10 mx-auto flex size-12 items-center justify-center rounded-full">
                <Building2 className="text-primary" />
              </div>
              <CardTitle className="text-2xl">
                Informações do seu negócio
              </CardTitle>
              <CardDescription>
                Vamos começar com as informações básicas do seu negócio
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <InputField
                name="name"
                placeholder="Ex:. Barbearia do ..."
                label="Nome do negócio *"
              />
              <TextareaField
                name="name"
                placeholder="Descreva brevemente seu negócio"
                label="Descrição *"
                className="min-h-[100px] resize-none"
              />
              <div className="text-primary space-y-2 rounded-lg bg-blue-50 p-4 text-sm">
                <p className="font-medium">💡 Dica:</p>
                <p>
                  Uma descrição clara e atrativa ajuda os clientes a entenderem
                  melhor seus serviços e aumenta as chances de agendamento.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size={"lg"}>
                Salvar e Continuar
              </Button>
            </CardFooter>
          </Card>
        </motion.form>
      </Form>

      <p className="text-muted-foreground mt-6 text-center text-xs">
        Ao continuar, você concorda com nossos Termos de Serviço e Política de
        Privacidade.
      </p>
    </div>
  );
};
