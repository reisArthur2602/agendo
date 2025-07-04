"use client";

import { Loader2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

type LoadingProps = {
  text?: string;
  showSkeleton?: boolean;
};

export const Loading = ({
  text = "Carregando...",
  showSkeleton = false,
}: LoadingProps) => {
  if (showSkeleton) {
    return (
      <div className="space-y-6 p-6">
        <div className="space-y-2">
          <Skeleton className="h-8 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-[125px] w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[80%]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center bg-blue-50">
      <div className="space-y-4 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
          <Loader2 className="text-primary h-8 w-8 animate-spin" />
        </div>
        <p className="text-lg font-medium">{text}</p>
        <p className="text-muted-foreground text-sm">
          Por favor, aguarde um momento...
        </p>
      </div>
    </div>
  );
};
