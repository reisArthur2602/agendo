"use client";

import { Button } from "@/components/ui/button/primitive";
import { SubmitButton } from "@/components/ui/button/submit";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { InputField } from "@/components/ui/input/field";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormEvent, ReactNode } from "react";
import { Chrome } from "lucide-react";
import { SigninFormData, SigninSchema } from "./schema";
import { signinWithEmail, signinWithGoogle } from "./actions";

type SigninDialogProps = {
  children: ReactNode;
};

export const SigninDialog = ({ children }: SigninDialogProps) => {
  const form = useForm<SigninFormData>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      email: "",
    },
  });

  const handleLoginEmail = async (data: SigninFormData) => {
    await signinWithEmail(data);
  };

  const handleLoginGoogle = async (e: FormEvent) => {
    e.preventDefault();
    await signinWithGoogle();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">
            Bem-vindo ao Agendo
          </DialogTitle>
          <DialogDescription className="text-center">
            Entre na sua conta ou crie uma nova para começar
          </DialogDescription>
        </DialogHeader>

        <form className="grid gap-4" onSubmit={handleLoginGoogle}>
          <Button variant="outline">
            <Chrome className="mr-2 size-4" />
            Entrar com o Google
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background text-muted-foreground px-2">
                Ou continue com email
              </span>
            </div>
          </div>
        </form>

        <Form {...form}>
          <form
            className="grid gap-2"
            onSubmit={form.handleSubmit(handleLoginEmail)}
          >
            <InputField
              name="email"
              label="Email"
              placeholder="seu@email.com"
            />
            <SubmitButton>Acessar</SubmitButton>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
