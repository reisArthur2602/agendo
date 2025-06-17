"use server";

import { signIn } from "@/lib/auth";

export const signinWithEmail = async (data: { email: string }) => {
  await signIn("email", {
    email: data.email,
  });
};

export const signinWithGoogle = async () => {
  await signIn("google");
};
