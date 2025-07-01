import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn(className, "mx-auto w-full max-w-[1400px]")}>
      {children}
    </div>
  );
};
