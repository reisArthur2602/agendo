"use server";

import { signIn } from "@/lib/auth";

export const signinWithEmail = async (data: { email: string }) => {
  console.log(data);
};

export const signinWithGoogle = async () => {
  await signIn("google");
};
