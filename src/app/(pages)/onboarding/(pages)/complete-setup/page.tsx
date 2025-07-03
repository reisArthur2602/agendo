"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const recommendedSteps = [
  "Configure seus horários de disponibilidade",
  "Adicione seus primeiros serviços",
  "Configure a integração com o WhatsApp",
];

const Page = () => {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");
  if (!slug) return null;

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-xl"
      >
        <Card>
          <CardHeader className="text-center">
            <div className="bg-primary/10 mx-auto flex size-12 items-center justify-center rounded-full">
              <CheckCircle className="text-primary size-8" />
            </div>

            <CardTitle className="text-2xl">Tudo pronto!</CardTitle>
            <CardDescription>
              Sua conta foi configurada com sucesso. Vamos começar?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2 rounded-lg border border-blue-200 bg-blue-50 p-6">
              <p className="text-lg font-medium text-blue-900">
                Sua página de agendamento:
              </p>
              <p className="text-primary font-mono text-lg">
                agendo.com/{slug}
              </p>
            </div>

            <div>
              <h4 className="mb-3 font-medium">
                Próximos passos recomendados:
              </h4>
              <ul className="text-muted-foreground space-y-2 text-sm">
                {recommendedSteps.map((step, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="text-primary size-4" />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter className="grid grid-cols-2 gap-4">
            <Link
              href={`/agendo/${slug}`}
              className={buttonVariants({
                size: "lg",
                className: "w-full",
                variant: "ghost",
              })}
            >
              Ver página de agendamento
            </Link>
            <Link
              href="/dashboard"
              className={buttonVariants({ size: "lg", className: "w-full" })}
            >
              Ir para o painel
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default Page;
