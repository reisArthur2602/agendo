"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
const Page = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <motion.div
      className="flex items-center justify-center bg-blue-50 px-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="w-full max-w-md text-center">
        <CardHeader className="pb-4">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
            <AlertTriangle className="text-primary h-8 w-8" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Algo deu errado!
          </CardTitle>
          <CardDescription className="text-base text-gray-600">
            Ocorreu um erro inesperado. Nossa equipe foi notificada.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {reset && (
            <Button onClick={reset} className="w-full" size="lg">
              <RefreshCw className="mr-2 h-4 w-4" />
              Tentar novamente
            </Button>
          )}

          <Link href="/">
            <Button
              variant="outline"
              className="w-full bg-transparent"
              size="lg"
            >
              <Home className="mr-2 h-4 w-4" />
              Voltar ao início
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Page;
