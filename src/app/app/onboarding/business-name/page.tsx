"use client";

import { useForm } from "react-hook-form";
import { CreateBusiness, CreateBusinessSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProgressBar } from "../components/progress-bar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Building2 } from "lucide-react";
import { Form } from "@/components/ui/form";
import { InputField } from "@/components/ui/input/field";
import { SubmitButton } from "@/components/ui/button/submit";
import { motion } from "framer-motion";

const BusinessName = () => {
  const form = useForm<CreateBusiness>({
    resolver: zodResolver(CreateBusinessSchema),
    defaultValues: {
      name: "",
    },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <ProgressBar total={2} step={1} />

      <Card className="border-0 shadow-lg">
        <CardHeader className="text-center">
          <div className="bg-primary/10 mx-auto flex size-12 items-center justify-center rounded-full">
            <Building2 className="text-primary" />
          </div>
          <CardTitle className="text-2xl">Sobre sua organização</CardTitle>
          <CardDescription>
            Agora vamos conhecer melhor seu negócio
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="grid gap-6">
              <InputField
                name="name"
                label="Nome da Organização"
                placeholder="Nome da sua empresa ou clínica"
              />

              <SubmitButton>
                <div className="flex items-center gap-2">
                  Salvar
                  <ArrowRight className="size-4" />
                </div>
              </SubmitButton>
            </form>
          </Form>
        </CardContent>
      </Card>

      <p className="text-muted-foreground mt-6 text-center text-xs">
        Ao continuar, você concorda com nossos Termos de Serviço e Política de
        Privacidade.
      </p>
    </motion.div>
  );
};

export default BusinessName;
