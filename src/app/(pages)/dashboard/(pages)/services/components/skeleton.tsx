import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonServices = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Skeleton className="h-[200px]" />
      <Skeleton className="h-[200px]" />
      <Skeleton className="h-[200px]" />
      <Skeleton className="h-[200px]" />
      <Skeleton className="h-[200px]" />
      <Skeleton className="h-[200px]" />
    </div>
  );
};
