"use client";

import { Container } from "../../../../components/common/container";
import { SectionTitle } from "./section-title";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Crie sua conta",
    description: "Cadastre-se gratuitamente em menos de 2 minutos",
  },
  {
    number: "02",
    title: "Configure seus serviços",
    description: "Adicione seus serviços, preços e disponibilidade",
  },
  {
    number: "03",
    title: "Personalize sua página",
    description: "Escolha o layout e adicione sua marca",
  },
  {
    number: "04",
    title: "Compartilhe e receba agendamentos",
    description:
      "Envie o link para seus clientes e comece a receber agendamentos",
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
        <SectionTitle
          badge="Passo a passo"
          title="Como funciona"
          description="Em apenas 4 passos simples, você terá seu sistema de agendamento funcionando"
        />

        <div className="grid items-start gap-6 lg:grid-cols-4 lg:gap-12">
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
