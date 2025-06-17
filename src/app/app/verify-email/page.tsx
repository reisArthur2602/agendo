"use client";

import { buttonVariants } from "@/components/ui/button/primitive";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft, Mail } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

import { useRouter } from "next/navigation";

const VerifyEmail = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get("email");
  if (!email) router.push("/app");

  if (!email) return null;

  return (
    <div className="flex items-center justify-center bg-blue-50 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mx-auto flex size-16 items-center justify-center rounded-full bg-blue-100"
            >
              <Mail className="size-8 text-blue-600" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <CardTitle className="text-2xl font-bold">
                Verifique seu email
              </CardTitle>
              <CardDescription className="text-muted-foreground mt-2">
                Enviamos um link mágico para seu endereço de email
              </CardDescription>
            </motion.div>
          </CardHeader>

          <CardContent className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-3 text-center"
            >
              <p className="text-muted-foreground text-sm">
                Clique no link enviado para <strong>{email}</strong> para fazer
                login em sua conta.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="rounded-lg border border-blue-200 bg-blue-50 p-3"
              >
                <p className="text-xs text-blue-800">
                  <strong>Não encontrou o email?</strong> Verifique sua pasta de
                  spam ou lixo eletrônico.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Link
                href="/app"
                className={buttonVariants({
                  variant: "ghost",
                  className: "w-full",
                })}
              >
                <ArrowLeft className="mr-2 size-4" />
                Voltar para login
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-muted-foreground text-xs">
                O link expira em 15 minutos por motivos de segurança.
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default VerifyEmail;
