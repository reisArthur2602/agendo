import Link from "next/link";

import { Github, Instagram, Linkedin } from "lucide-react";
import { Container } from "@/components/common/container";

export const HomeFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-muted/50 border-t py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Agendo</h3>
            <p className="text-muted-foreground text-sm">
              Sistema de agendamentos online ideal para salões, clínicas,
              consultorias e prestadores de serviço. Organize sua rotina e
              ofereça uma experiência profissional aos seus clientes.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold">Navegação</h3>
            <nav aria-label="Navegação principal">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#features"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Funcionalidades
                  </Link>
                </li>
                <li>
                  <Link
                    href="#how-it-works"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Como funciona
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Planos
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold">Informações</h3>
            <nav aria-label="Informações legais">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/contato"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contato
                  </Link>
                </li>
                <li>
                  <Link
                    href="/politica-privacidade"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Política de privacidade
                  </Link>
                </li>
                <li>
                  <Link
                    href="/termos"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Termos de uso
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Rodapé final */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Agendo. Todos os direitos reservados.
          </p>

          <div className="flex gap-4">
            <Link
              href="https://linkedin.com"
              className="text-muted-foreground hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </Link>
            <Link
              href="https://instagram.com"
              className="text-muted-foreground hover:text-foreground"
              aria-label="Instagram"
            >
              <Instagram />
            </Link>
            <Link
              href="https://github.com"
              className="text-muted-foreground hover:text-foreground"
              aria-label="GitHub"
            >
              <Github />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
