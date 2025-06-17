"use client";

import { Container } from "@/components/ui/container";
import { TitleSection } from "./title";
import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Configure o seu negócio",
    description:
      "Configure rapidamente as informações básicas como nome, local e disponibilidade do seu negócio.",
  },
  {
    number: 2,
    title: "Adicione os seus serviços",
    description:
      "Defina sua disponibilidade com regras flexíveis para diferentes tipos e durações de atendimentos.",
  },
  {
    number: 3,
    title: "Compartilhe o link do seu negócio",
    description:
      "Envie seu link de agendamento personalizado e permita que seus clientes reservem com você.",
  },
];

export const StepsSection = () => {
  return (
    <section
      className="py-20"
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
    >
      <Container>
        <TitleSection
          badge="Passo a passo"
          title="Comece em minutos"
          description="Três passos simples para transformar sua rotina de agendamentos"
        />

        <div className="grid items-start gap-6 lg:grid-cols-3 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <div className="bg-primary text-primary-foreground flex h-16 w-16 items-center justify-center rounded-full">
                <span className="text-2xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
