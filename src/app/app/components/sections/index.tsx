import React from "react";
import { HeroSection } from "./hero";
import { FeaturesSection } from "./features";
import { StepsSection } from "./steps";
import { UseCasesSection } from "./use-cases";
import { TestimonialsSection } from "./testimonials";

export const HomeSections = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StepsSection />
      <UseCasesSection />
      <TestimonialsSection />
    </>
  );
};
