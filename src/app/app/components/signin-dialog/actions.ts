"use server";

import { signIn } from "@/lib/auth";
import { redirect } from "next/navigation";

export const signinWithEmail = async (data: { email: string }) => {
  await signIn("email", {
    email: data.email,
    redirect: false,
  });

  redirect(`/app/verify-email?email=${data.email}`);
};

export const signinWithGoogle = async () => {
  await signIn("google");
};
