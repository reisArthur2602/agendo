"use client";

import { buttonVariants } from "@/components/ui/button/primitive";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProgressBar } from "../components/progress-bar";

const CompleteSetup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <ProgressBar total={2} step={2} />

      <Card className="bg-background/80 border-0 backdrop-blur-sm">
        <CardHeader className="space-y-6 text-center">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-blue-100">
            <CheckCircle className="size-8 text-blue-600" />
          </div>
          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold">Tudo pronto!</CardTitle>
            <CardDescription className="text-muted-foreground text-base leading-relaxed">
              Sua conta foi configurada com sucesso. Vamos começar?
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="grid gap-6">
          <div>
            <h4 className="mb-3 font-medium">Próximos passos recomendados:</h4>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle className="size-4 text-blue-500" />
                Configure seus horários de disponibilidade
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="size-4 text-blue-500" />
                Adicione seus primeiros serviços
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="size-4 text-blue-500" />
                Configure a integração com o WhatsApp
              </li>
            </ul>
          </div>

          <Link href="/app/dashboard" className={buttonVariants()}>
            Ir para o painel
            <ArrowRight className="ml-2 size-4" />
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CompleteSetup;
