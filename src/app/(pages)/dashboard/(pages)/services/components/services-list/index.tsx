import { getServices } from "../../server/get-services";
import { ServiceCard } from "./card";
import { EmptyState } from "./empty-state";

export const ServicesList = async () => {
  const services = await getServices();

  if (services.length === 0) return <EmptyState />;

  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </section>
  );
};
