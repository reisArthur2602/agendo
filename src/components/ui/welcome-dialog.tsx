"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";
import {
  Users,
  Settings,
  Clock,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Sparkles,
  Target,
  BarChart3,
} from "lucide-react";
import { Progress } from "./progress";

type WelcomeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  slug: string;
};
export const WelcomeModal = ({ isOpen, onClose, slug }: WelcomeModalProps) => {
  const steps = [
    {
      title: "Bem-vindo ao Agendo! 🎉",
      description: "Sua plataforma completa de agendamentos está pronta!",
      icon: Sparkles,
      content: (
        <div className="space-y-4 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-100">
            <Sparkles className="text-primary h-10 w-10" />
          </div>
          <p className="text-muted-foreground">
            Parabéns! Você criou sua conta com sucesso. Agora vamos te mostrar
            como aproveitar ao máximo nossa plataforma.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
            <Badge variant="secondary">✨ Grátis para começar</Badge>
            <Badge variant="secondary">📱 100% Responsivo</Badge>
            <Badge variant="secondary">⚡ Configuração rápida</Badge>
          </div>
        </div>
      ),
    },
    {
      title: "Dashboard - Seu centro de controle",
      description: "Acompanhe todos os seus agendamentos em tempo real",
      icon: BarChart3,
      content: (
        <div className="space-y-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <BarChart3 className="h-8 w-8 text-green-600" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span className="text-sm">
                Visualize agendamentos do dia, semana e mês
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm">
                Acompanhe métricas de receita e ocupação
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
              <span className="text-sm">
                Crie agendamentos manuais rapidamente
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Gerencie seus serviços",
      description:
        "Adicione, edite e organize todos os serviços que você oferece",
      icon: Users,
      content: (
        <div className="space-y-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
            <Users className="h-8 w-8 text-purple-600" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span className="text-sm">
                Cadastre serviços com preço e duração
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm">
                Ative/desative serviços conforme necessário
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
              <span className="text-sm">
                Organize por categorias e descrições detalhadas
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Configure sua disponibilidade",
      description: "Defina quando você está disponível para atendimentos",
      icon: Clock,
      content: (
        <div className="space-y-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
            <Clock className="h-8 w-8 text-orange-600" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span className="text-sm">
                Configure horários por dia da semana
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm">
                Adicione múltiplos horários por dia
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
              <span className="text-sm">
                Ative/desative dias conforme necessário
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Personalize sua página",
      description: "Customize a aparência da sua página de agendamentos",
      icon: Settings,
      content: (
        <div className="space-y-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pink-100">
            <Settings className="h-8 w-8 text-pink-600" />
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span className="text-sm">
                Escolha entre 3 layouts: Moderno, Clássico ou Colorido
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm">Adicione sua logo e redes sociais</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
              <span className="text-sm">
                Configure informações do seu negócio
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Sua página está no ar! 🚀",
      description: "Compartilhe o link e comece a receber agendamentos",
      icon: Target,
      content: (
        <div className="flex-1 space-y-4 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <Target className="h-10 w-10 text-green-600" />
          </div>
          <div className="rounded-lg bg-blue-50 p-4">
            <p className="mb-2 text-sm font-medium">
              Sua página de agendamento:
            </p>
            <p className="text-primary font-mono text-sm">{`agendo.com/${slug}`}</p>
          </div>
          <p className="text-muted-foreground">
            Compartilhe este link com seus clientes e eles poderão agendar
            serviços 24 horas por dia!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
            <Badge variant="secondary">📱 Mobile-friendly</Badge>
            <Badge variant="secondary">⚡ Agendamento em 3 cliques</Badge>
            <Badge variant="secondary">🔔 Notificações automáticas</Badge>
          </div>
        </div>
      ),
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="min-w-2xl ">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl">
              {steps[currentStep].title}
            </DialogTitle>
            <Badge variant="outline">
              {currentStep + 1} de {steps.length}
            </Badge>
          </div>
          <DialogDescription className="text-base">
            {steps[currentStep].description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <Progress value={progress} className="h-2" />

          <div className="flex min-h-[300px] items-center justify-center">
            {steps[currentStep].content}
          </div>

          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Anterior
            </Button>

            <div className="flex items-center space-x-2">
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full ${index <= currentStep ? "bg-primary" : "bg-gray-200"}`}
                />
              ))}
            </div>

            {currentStep === steps.length - 1 ? (
              <Button onClick={onClose}>
                <CheckCircle className="mr-2 h-4 w-4" />
                Começar a usar
              </Button>
            ) : (
              <Button onClick={nextStep}>
                Próximo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
