"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { TitleSection } from "./title";

const plans = [
  {
    name: "Starter",
    price: "Grátis",
    description: "Perfeito para começar",
    features: [
      "Até 50 agendamentos/mês",
      "1 usuário",
      "Agenda básica",
      "Suporte por email",
    ],
    cta: "Começar Grátis",
    popular: false,
  },
  {
    name: "Professional",
    price: "R$ 29",
    period: "/mês",
    description: "Para profissionais estabelecidos",
    features: [
      "Agendamentos ilimitados",
      "3 usuários",
      "Integrações WhatsApp",
      "Relatórios avançados",
      "Suporte prioritário",
    ],
    cta: "Começar Teste",
    popular: true,
  },
  {
    name: "Business",
    price: "R$ 79",
    period: "/mês",
    description: "Para equipes e clínicas",
    features: [
      "Tudo do Professional",
      "Usuários ilimitados",
      "API personalizada",
      "White label",
      "Suporte dedicado",
    ],
    cta: "Falar com Vendas",
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
        <TitleSection
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
