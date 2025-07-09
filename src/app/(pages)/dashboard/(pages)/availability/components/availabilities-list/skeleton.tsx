import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonAvailability = () => {
  return (
    <div className="space-y-4">
      <Skeleton className="h-16" />
      <Skeleton className="h-16" />
      <Skeleton className="h-16" />
      <Skeleton className="h-16" />
      <Skeleton className="h-16" />
      <Skeleton className="h-16" />
    </div>
  );
};
