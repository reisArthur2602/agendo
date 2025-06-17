import {
  BarChart3,
  Calendar,
  Clock,
  LockIcon,
  Shield,
  Smartphone,
  UsersRoundIcon,
  Zap,
} from "lucide-react";
import { FeatureCard } from "./feature-card";
import { Container } from "@/components/ui/container";
import { TitleSection } from "./title";

const features = [
  {
    icon: <Calendar />,
    title: "Agenda Inteligente",
    description:
      "Visualize e gerencie todos os seus agendamentos em uma interface limpa e intuitiva.",
    accentColor: "rgba(36, 101, 237, 0.5)",
  },
  {
    icon: <Clock />,
    title: "Disponibilidade Flexível",
    description:
      "Configure seus horários de trabalho, pausas e exceções com total flexibilidade",
    accentColor: "rgba(236, 72, 153, 0.5)",
  },
  {
    icon: <Smartphone />,
    title: "Agendamento Online",
    description:
      "Seus clientes podem agendar 24/7 através de uma página personalizada.",
    accentColor: "rgba(34, 211, 238, 0.5)",
  },
  {
    icon: <Zap />,
    title: "Automações",
    description:
      "Confirmações automáticas, lembretes por WhatsApp e sincronização com Google Calendar",
    accentColor: "rgba(132, 204, 22, 0.5)",
  },
  {
    icon: <BarChart3 />,
    title: "Relatórios",
    description:
      "Acompanhe métricas importantes e tome decisões baseadas em dados",
    accentColor: "rgba(249, 115, 22, 0.5)",
  },
  {
    icon: <Shield />,
    title: "Segurança",
    description:
      "Seus dados e de seus clientes protegidos com criptografia de ponta",
    accentColor: "rgba(168, 85, 247, 0.5)",
  },
  {
    icon: <LockIcon />,
    title: "Data Privacy & Compliance",
    description:
      "Meet regulatory requirements with comprehensive compliance features including GDPR, HIPAA, and SOC 2.",
    accentColor: "rgba(251, 191, 36, 0.5)",
  },
  {
    icon: <UsersRoundIcon />,
    title: "Real-time Collaboration",
    description:
      "Enable teams to work together seamlessly with shared workspaces and collaborative AI sessions.",
    accentColor: "rgba(16, 185, 129, 0.5)",
  },
];

export const FeaturesSection = () => {
  return (
    <section
      className="bg-muted/50 py-20"
      id="features"
      aria-labelledby="features-heading"
    >
      <Container>
        <TitleSection
          badge="Recursos"
          title="Tudo que você precisa em um só lugar"
          description="Recursos poderosos para profissionais que querem crescer e
              oferecer o melhor atendimento"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              accentColor={feature.accentColor}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
