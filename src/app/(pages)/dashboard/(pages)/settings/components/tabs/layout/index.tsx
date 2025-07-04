"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { PreviewLayoutField } from "./preview-layout-field";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { LayoutSettingsInput, layoutSettingsSchema } from "../../../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useBusinessStore } from "@/lib/zustand/business";

export const LayoutTab = () => {
  const { business } = useBusinessStore();

  const methods = useForm<LayoutSettingsInput>({
    resolver: zodResolver(layoutSettingsSchema),
    values: {
      layout: business?.layout || "CLASSIC",
    },
  });

  const onSubmit = (data: LayoutSettingsInput) => {
    console.log("Dados salvos:", data);
  };
  return (
    <TabsContent value="layout" className="space-y-6">
      <Form {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Card>
            <CardHeader>
              <CardTitle>Aparência da página</CardTitle>
              <CardDescription>
                Personalize como sua página de agendamento aparece para os
                clientes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <PreviewLayoutField />
              <div className="rounded-lg border bg-gray-50 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="font-medium">Preview da sua página</h4>
                  <Link
                    className={buttonVariants({
                      variant: "outline",
                      size: "sm",
                    })}
                    href={"/agendo/" + business?.slug}
                  >
                    <ExternalLink className="mr-1 h-3 w-3" />
                    Ver página
                  </Link>
                </div>
                <p className="text-muted-foreground text-sm">
                  agendo.com/{business?.slug}
                </p>
              </div>

              <Button>Salvar alterações</Button>
            </CardContent>
          </Card>
        </form>
      </Form>
    </TabsContent>
  );
};
