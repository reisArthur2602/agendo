import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

const OnboardingLayout = async ({ children }: PropsWithChildren) => {
  const userLogged = await auth();
  if (!userLogged?.user) redirect("/app");

  return (
    <div className="flex items-center justify-center bg-blue-50">
      <div className="grid w-full max-w-md">{children}</div>
    </div>
  );
};

export default OnboardingLayout;
