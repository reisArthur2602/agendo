"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { InputField } from "@/components/ui/input/field";
import { Input } from "@/components/ui/input/primitive";
import { TabsContent } from "@/components/ui/tabs";
import { TextareaField } from "@/components/ui/textarea/field";

import { useBusinessStore } from "@/lib/zustand/business";
import { GeneralSettingsInput, generalSettingsSchema } from "../../schema";

export const GeneralTab = () => {
  const { business } = useBusinessStore();

  const methods = useForm<GeneralSettingsInput>({
    resolver: zodResolver(generalSettingsSchema),
    values: {
      name: business?.name || "",
      description: business?.description || "",
      slug: business?.slug || "",
      whatsapp: business?.whatsapp || "",
      instagram: business?.instagram || "",
    },
  });

  const onSubmit = (data: GeneralSettingsInput) => {
    console.log("Dados salvos:", data);
  };

  return (
    <TabsContent value="general" className="space-y-6">
      <Form {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Informações do negócio
              </CardTitle>
              <CardDescription>
                Atualize as informações básicas do seu negócio
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <InputField label="Nome do negócio" name="name" />

                <FormField
                  control={methods.control}
                  name="slug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>URL personalizada</FormLabel>
                      <FormControl>
                        <div className="flex">
                          <span className="border-input bg-muted text-muted-foreground inline-flex items-center rounded-l-md border border-r-0 px-3 text-sm">
                            agendo.com/
                          </span>
                          <Input className="rounded-l-none" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <TextareaField label="Descrição" name="description" />

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <InputField
                  label="Instagram"
                  name="instagram"
                  placeholder="@seuinstagram"
                />
                <InputField
                  label="WhatsApp"
                  name="whatsapp"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <Button type="submit">Salvar alterações</Button>
            </CardContent>
          </Card>
        </form>
      </Form>
    </TabsContent>
  );
};
