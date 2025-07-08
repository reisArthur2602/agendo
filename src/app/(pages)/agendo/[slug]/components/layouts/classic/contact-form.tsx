"use client";
import { Button } from "@/components/ui/button";

import { Form } from "@/components/ui/form";
import { InputField } from "@/components/ui/input/field";
import { useForm } from "react-hook-form";
import { ContactInput, contactSchema } from "../../../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMultiStepStore } from "@/lib/zustand/multistep";

export const ContactForm = () => {
  const methods = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      customerName: "",
      customerPhone: "",
    },
  });
  const { currentStep, setData, setMultiStep, data } = useMultiStepStore();

  const onSubmit = (input: ContactInput) => {
    setData({ ...data, ...input });
    setMultiStep(currentStep + 1);
  };

  return (
    <Form {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="grid gap-6">
        <InputField
          name="customerName"
          placeholder="Digite seu nome"
          label="Nome Completo"
        />
        <InputField
          name="customerPhone"
          placeholder="(11) 99999-9999"
          label="Telefone"
        />

        <Button>Prosseguir</Button>
      </form>
    </Form>
  );
};
