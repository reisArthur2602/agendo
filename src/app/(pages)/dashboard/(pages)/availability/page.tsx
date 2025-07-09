import { Suspense } from "react";
import { AvailabilitiesList } from "./components/availabilities-list";
import { SkeletonAvailability } from "./components/availabilities-list/skeleton";

const Page = async () => {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-2xl font-bold">Horários de funcionamento</h1>
        <p className="text-muted-foreground">
          Defina quando você está disponível para agendamento
        </p>
      </div>
      <Suspense fallback={<SkeletonAvailability />}>
        <AvailabilitiesList />
      </Suspense>
    </div>
  );
};

export default Page;
