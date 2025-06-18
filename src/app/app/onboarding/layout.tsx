import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";
import { getBusinessWithUser } from "./action";

const OnboardingLayout = async ({ children }: PropsWithChildren) => {
  const session = await auth();
  if (!session?.user) redirect("/app");

  // const userHasBusiness = await getBusinessWithUser(session?.user.id);
  // if (userHasBusiness) redirect("/app/dashboard");

  return (
    <div className="flex items-center justify-center bg-blue-50">
      <div className="grid w-full max-w-md">{children}</div>
    </div>
  );
};

export default OnboardingLayout;
