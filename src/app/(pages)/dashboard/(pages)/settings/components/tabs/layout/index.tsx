"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import { ExternalLink, Save } from "lucide-react";
import Link from "next/link";
import { PreviewLayoutField } from "./preview-layout-field";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { LayoutSettingsInput, layoutSettingsSchema } from "../../../schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useBusinessStore } from "@/lib/zustand/business";
import { updateBusiness } from "../../../server/update-business";
import { toast } from "sonner";
import { Layout } from "@prisma/client";

export const LayoutTab = () => {
  const { business } = useBusinessStore();

  const methods = useForm<LayoutSettingsInput>({
    resolver: zodResolver(layoutSettingsSchema),
    values: {
      layout: business?.layout || "CLASSIC",
    },
  });

  const onSubmit = async (data: LayoutSettingsInput) => {
    const { isSuccess, error } = await updateBusiness({
      id: business?.id,
      layout: data.layout as Layout,
    });

    if (!isSuccess) return toast.error(error);
    toast.success("O layout foi atualizado com sucesso");
  };

  return (
    <TabsContent value="layout" className="space-y-6">
      <Form {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Card className="shad">
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
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Preview da sua página</h4>
                  <Link
                    className={buttonVariants({
                      variant: "outline",
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
              <CardAction>
                <Button>
                  <Save />
                  Salvar alterações
                </Button>
              </CardAction>
            </CardContent>
          </Card>
        </form>
      </Form>
    </TabsContent>
  );
};
