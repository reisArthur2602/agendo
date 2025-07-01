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

import { SectionTitle } from "./section-title";
import { Container } from "@/components/common/container";


const features = [
  {
    icon: <Calendar />,
    title: "Agenda Visual",
    description:
      "Visualize todos os seus agendamentos de forma clara e organizada, com filtros por dia, semana ou mês.",
    accentColor: "rgba(36, 101, 237, 0.5)",
  },
  {
    icon: <Clock />,
    title: "Horários Flexíveis",
    description:
      "Defina seus horários de atendimento, pausas e dias de folga com total liberdade.",
    accentColor: "rgba(236, 72, 153, 0.5)",
  },
  {
    icon: <Smartphone />,
    title: "Agendamento 24h",
    description:
      "Permita que seus clientes agendem online, a qualquer hora, por meio de uma página personalizada.",
    accentColor: "rgba(34, 211, 238, 0.5)",
  },
  {
    icon: <Zap />,
    title: "Automações inteligentes",
    description:
      "Envie confirmações automáticas, lembretes por WhatsApp e sincronize com o Google Calendar.",
    accentColor: "rgba(132, 204, 22, 0.5)",
  },
  {
    icon: <BarChart3 />,
    title: "Relatórios de Desempenho",
    description:
      "Acompanhe agendamentos, horários mais populares e otimize sua rotina com base em dados reais.",
    accentColor: "rgba(249, 115, 22, 0.5)",
  },
  {
    icon: <Shield />,
    title: "Segurança de Dados",
    description:
      "Proteção total para suas informações e dos seus clientes com criptografia de ponta.",
    accentColor: "rgba(168, 85, 247, 0.5)",
  },
  {
    icon: <LockIcon />,
    title: "Privacidade Garantida",
    description:
      "Seus dados são seus. Cumprimos as melhores práticas de privacidade e proteção de informações.",
    accentColor: "rgba(251, 191, 36, 0.5)",
  },
  {
    icon: <UsersRoundIcon />,
    title: "Multiusuário",
    description:
      "Permita que membros da sua equipe também gerenciem agendamentos com permissões controladas.",
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
        <SectionTitle
          badge="Recursos"
          title="Tudo que você precisa para gerenciar seus atendimentos"
          description="Funcionalidades pensadas para profissionais autônomos e equipes que querem mais organização, controle e eficiência."
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
