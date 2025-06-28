"use client";

import { PropsWithChildren } from "react";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";

export const KindeAuthProvider = ({ children }: PropsWithChildren) => {
  return <KindeProvider>{children}</KindeProvider>;
};
