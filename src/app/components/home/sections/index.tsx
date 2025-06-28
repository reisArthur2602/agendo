import { FeaturesSection } from "./features";
import { HeroSection } from "./hero";
import { PricingSection } from "./pricing";
import { StepsSection } from "./steps";
import { TestimonialsSection } from "./testimonials";
import { UseCasesSection } from "./use-cases";

export const HomeSections = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StepsSection />
      <UseCasesSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
};
