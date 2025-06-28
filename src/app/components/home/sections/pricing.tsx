"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { SectionTitle } from "./section-title";
import { Container } from "../../ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Essencial",
    price: "Grátis",
    description: "Ideal para quem está começando",
    features: [
      "Até 50 agendamentos por mês",
      "1 usuário administrador",
      "Página de agendamento personalizada",
      "Suporte por e-mail",
    ],
    cta: "Começar grátis",
    popular: false,
  },
  {
    name: "Profissional",
    price: "R$ 29",
    period: "/mês",
    description: "Para autônomos e microempresas",
    features: [
      "Agendamentos ilimitados",
      "Até 3 usuários",
      "Integração com WhatsApp",
      "Relatórios de desempenho",
      "Suporte prioritário",
    ],
    cta: "Experimentar grátis",
    popular: true,
  },
  {
    name: "Equipe",
    price: "R$ 79",
    period: "/mês",
    description: "Para clínicas e negócios em crescimento",
    features: [
      "Tudo do plano Profissional",
      "Usuários ilimitados",
      "API para integrações",
      "Marca personalizada (white label)",
      "Suporte dedicado",
    ],
    cta: "Falar com o time",
    popular: false,
  },
];

export const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="bg-muted/20 py-20"
      aria-labelledby="pricing-heading"
    >
      <Container>
        <SectionTitle
          badge="Planos"
          title="Planos para todos os tamanhos"
          description="Comece grátis e escale conforme seu negócio cresce"
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card
                className={`relative h-full ${
                  plan.popular && "border-primary scale-105 shadow-lg"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
                    <Badge>Mais Popular</Badge>
                  </div>
                )}

                <CardContent className="flex h-full flex-col justify-between p-6">
                  <div className="mb-6 text-center">
                    <h3 className="mb-2 text-xl font-semibold">{plan.name}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.period && (
                        <span className="text-muted-foreground">
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>

                  <ul className="mb-6 space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle className="text-primary size-4" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.popular ? "default" : "outline"}
                    className="w-full"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
