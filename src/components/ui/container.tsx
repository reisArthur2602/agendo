import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(className, "animate-fade-right mx-auto w-full max-w-7xl")}
    >
      {children}
    </div>
  );
};
