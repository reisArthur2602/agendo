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
            <svg className="mr-2 size-4" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
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
